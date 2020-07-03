const bcrypt = require('bcrypt');
const { uuid } = require('uuidv4');

const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey('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');//deve ir para um arquivo .env

const BASEURL = "http://localhost:3333/reset";//deve ir para um arquivo .env

const User = require('../models/User');

module.exports = {
  async login(request, response, next) {
    const { email, password } = request.body;

    try {

      const user = await User.query().findOne({ email });

      if (!user) {
        return response.status(404).json({ error: "User is not registered" });
      }

      if (user.email == email && (await bcrypt.compare(password, user.password))) {

        return response.status(200).json({ login: true, id: user.id, name: user.first_name, message: "Success" });

      } else {

        return response.status(401).json({ login: false, message: "Not Allowed" });

      }

    } catch (error) {
      next(error);
    }

  },

  async register(request, response, next) {
    const { first_name, last_name, email, password, password_confirmation } = request.body;

    if (password_confirmation !== password) return response.status(400).json({ error: "passwords do not match" });

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
      let user = await User.query().findOne({ email });

      if (user) {
        return response.status(404).json({ error: "User exist" });
      }
      if (!user) {
        user = await User.query().insert({
          first_name,
          last_name,
          email,
          password: hashedPassword
        });
        return response.status(201).json({ message: 'Successfully created' });
      }

      return response.status(401).json({ error: 'Operation not permited.' });

    } catch (error) {
      next(error);
    }
  },

  async forgot(request, response, next) {
    const { email } = request.body;
    const code = uuid();
    const url = `${BASEURL}/${code}`;

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