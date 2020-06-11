// senha PlataformaEad
const nodemailer = require('nodemailer');
module.exports={

    async enviar(destinatario,link) {


        var usuario = 'hackaead@gmail.com';
        var senha = 'PlataformaEad'; 

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: usuario,
                pass: senha
            }
        });


        var mailOptions = {
            from: usuario,
            to: destinatario,
            subject: 'Solicitação de Alteração de Senha',
            html:
                `
                <h2>Caso você tenha solicitado a troca de senha clique no link a baixo</h2><br>
                <a href="${link}" target="_blank" >Clique aqui para mudar sua senha</a><br>
                <small style="font-weight:bold">Atenção a link expira meia-noite</small>`
        };

        transporter.sendMail(mailOptions, function(error, info){
            
            if (error) {
                console.log(error);
                return error;
            } else {
                console.log("enviado")
                return 'Email enviado: ' + info.response;
            
            }
        });

    },
}