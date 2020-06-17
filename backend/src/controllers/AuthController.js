const bcrypt = require('bcrypt');
const { uuid } = require('uuidv4');

const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey('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');//deve ir para o arquivo .env

const BASEURL = "http://localhost:3333/reset";//deve ir para o arquivo .env

const User = require('../models/User');
const { update } = require('../database');
//const email = require('../utils/email');//criar emails

module.exports = {
  async login(request, response, next) {
    const { email, password } = request.body;

    try {

      const user = await User.query().findOne({ email });

      if (!user) {
        return response.status(404).json({ error: "User is not registered" });
      }

      if (user.email == email && (await bcrypt.compare(password, user.password))) {

        return response.status(200).json({ login: true, message: "Success" });

      } else {

        return response.status(401).json({ login: false, message: "Not Allowed" });

      }

    } catch (error) {
      next(error);
    }

  },

  async forget(request, response, next) {
    const { email } = request.body;
    const code = uuid();
    const url = `${BASEURL}/${code}`;

    try {

      let user = await User.query().findOne({ email });

      if (!user) {
        return response.status(404).json({ error: "User is not registered" });
      }


      if (user.forget == null) {

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
            return response.status(200).json({ error: "email has been sent, kindly activate your account" });
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
    const { password, repeatpassaword } = request.body;

    if (!forget) {
      return response.status(400).json({ error: "Code to reset password does not exist" });
    }
    try {
      let user = await User.query().findOne({ forget });

      console.log('criou')
      if ((user.forget == forget) && (password == repeatpassaword)) {
        console.log(user.forget == forget)

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        console.log(hashedPassword)

        user = await User.query().update({
          password: hashedPassword,
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