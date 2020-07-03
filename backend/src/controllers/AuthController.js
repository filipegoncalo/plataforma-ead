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
  async signIn(request, response, next) {
    const { email, password } = request.body;

    const user = await User.query().findOne({ email });
  
    const match = user ? bcrypt.compareSync(password, user.password) : null;  
    if (!match) return response.jsonBadRequest(null, getMessage('auth.signin.invalid'));

    const token =  generateJwt({ id: user.id });
    const refreshToken =  generateRefreshJwt({ id: user.id });

    return response.jsonSuccess(user, getMessage('auth.signin.success'), { token, refreshToken });
  },

  async signUp(request, response) {
    const { first_name, last_name, email, password } = request.body;

    const user = await User.query().findOne({ email });
    
    if (user) return response.jsonBadRequest(null, getMessage('auth.signup.email_exists'));
    
    const hash = bcrypt.hashSync(password, salt);
    const newUser = await User.query().insert({first_name, last_name, email, password: hash});

    const token =  generateJwt({ id: newUser.id });
    const refreshToken =  generateRefreshJwt({ id: newUser.id });

    return response.jsonSuccess(newUser, getMessage('auth.signup.success'), { token, refreshToken });

  },

  async forgot(request, response, next) {
    const { email } = request.body;
    const code = uuid();
    const url = `${process.env.BASE_URL}/reset/${code}`;

    try {

      let user = await User.query().findOne({ email });

      if (!user) {
        return response.status(404).json({ error: "User is not registered" });
      }


      if (user.forget === null) {

        user = await User.query().update({ forget: code }).where('id', user.id);

        const data = {
          to: email,
          from: 'filipe.gsantos13@gmail.com',
          subject: 'Solicitação de Alteração de Senha',
          text: 'Solicitação de Alteração de Senha',
          html: `<h2>Caso você tenha solicitado a troca de senha clique no link a baixo</h2><br>
              <a href="${url}" target="_blank" >Clique aqui para mudar sua senha</a><br>
              <small style="font-weight:bold">Atenção a link expira meia-noite</small>`,
        }

        await sendgrid.send(data, (error, result) => {
          if (error) {
            return response.status(400).json({ error: error });
          }
          else {
            return response.status(200).json({ message: "email has been sent, kindly activate your account" });
          }
        });

      }
      return response.status(404).json({ error: "not permited" });

    } catch (error) {
      next(error);
    }
  },

  async reset(request, response, next) {
    const { forget } = request.params;
    const { password, password_confirmation } = request.body;


    if (!forget) {
      return response.status(400).json({ error: "Code to reset password does not exist" });
    }
    try {
      let user = await User.query().findOne({ forget });

      if ((user.forget === forget) && (password_confirmation === password)) {

        const salt = await bcrypt.genSalt();
        const newPassword = await bcrypt.hash(password, salt);

        user = await User.query().update({
          password: newPassword,
          forget: null,
          updated_at: new Date()
        }).where('id', user.id);

        return response.status(200).json({ error: "Password changed successfully" });
      }

      return response.status(400).json({ error: "Incorrect password" });

    } catch (error) {
      next(error);
    }
  },
}