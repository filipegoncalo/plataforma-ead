require('dotenv').config();
const bcrypt = require('bcrypt');
const { uuid } = require('uuidv4');
const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
const { getMessage } = require('../helpers/messages');
const { generateJwt, generateRefreshJwt } = require('../helpers/jwt');
const User = require('../models/User');
const salt = 10;

module.exports = {
  async signIn(request, response) {
    const { email, password } = request.body;

    const user = await User.query().findOne({ email });

    const match = user ? bcrypt.compareSync(password, user.password) : null;
    if (!match) return response.jsonBadRequest(null, getMessage('auth.signin.invalid'));

    const token = generateJwt({ id: user.id });
    const refreshToken = generateRefreshJwt({ id: user.id });

    return response.jsonSuccess(user, getMessage('auth.signin.success'), { token, refreshToken });
  },

  async signUp(request, response) {
    const { first_name, last_name, email, password } = request.body;

    const user = await User.query().findOne({ email });


    if (user) return response.jsonBadRequest(null, getMessage('auth.signup.email_exists'));

    const hash = bcrypt.hashSync(password, salt);
    const newUser = await User.query().insert({ first_name, last_name, email, password: hash });

    const token = generateJwt({ id: newUser.id });
    const refreshToken = generateRefreshJwt({ id: newUser.id });

    return response.jsonSuccess(newUser, getMessage('auth.signup.success'), { token, refreshToken });

  },

  async forgot(request, response) {
    const { email } = request.body;

    let user = await User.query().findOne({ email });

    const code = generateJwt({ id: user.id });
    const url = `${process.env.BASE_URL}/reset/${code}`;

    const data = {
      to: email,
      from: process.env.SENDGRID_FROM,
      subject: process.env.SENDGRID_SUBJECT,
      text: process.env.SENDGRID_TEXT,
      html: process.env.SENDGRID_HTML
    }

    if (!user) return response.jsonBadRequest(null, getMessage('auth.forgot.email_not_exists'));

    if (user.forget === null) {

      user = await User.query().update({ forget: code }).where('id', user.id);

      const { error } = await sendgrid.send(data);
      if (error) {
        user = await User.query().update({ forget: null }).where('id', user.id);
        return response.jsonServerError(null, getMessage('auth.forgot.email_server'), { error });
      }

      return response.jsonSuccess(user, getMessage('auth.forgot.success'));
    }
    return response.jsonUnauthorized(null, getMessage('auth.forgot.forget_exists'));

  },

  async reset(request, response) {
    const { code } = request.params;
    const { password, password_confirmation } = request.body;

    if (!code) return response.jsonUnauthorized(null, getMessage('auth.reset.code_not_exists'));

    let user = await User.query().findOne({ forget: code });

    if (user && (password_confirmation === password)) {

      const newPassword = await bcrypt.hash(password, salt);

      user = await User.query().update({
        password: newPassword,
        forget: null,
        updated_at: new Date()
      }).where('id', user.id);

      return response.jsonSuccess(user, getMessage('auth.forgot.success'));
    }

    return response.jsonBadRequest(null, getMessage('auth.reset.invalid'));
  },
}