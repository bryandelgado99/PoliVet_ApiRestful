import nodemailer from "nodemailer"
import dotenv from 'dotenv'
dotenv.config()


const transport = nodemailer.createTransport({
    host: process.env.HOST_MAILTRAP || "smtp.gmail.com",
    port: process.env.PORT_MAILTRAP || 465,
    auth: {
        user: process.env.USER_MAILTRAP || "bryand9970@gmail.com",
        pass: process.env.PASS_MAILTRAP || "ylbtukhjxjttvaxu",
    }
});

const sendMailToUser = async(userMail, token) => {
    let info = await transport.sendMail({
        from: 'admin@vet.esfot.ec',
        to: userMail,
        subject: "Verifica tu cuenta - Poli-Vet",
        html: `
        <h1>Poli-Vet 🐶😺🐹 | Sistema de Gestión Veterinaria</h1>
        <p>Hola, haz clic 
            <a href="${process.env.URL_BACKEND || "http://localhost:3000/api/"}confirmar/${encodeURIComponent(token)}">aquí</a> 
        para confirmar tu cuenta.</p>
        <footer>Hecho con ❤️ en la ESFOT-EPN.</footer>`
    });
    
    console.log("Mensaje enviado satisfactoriamente: ", info.messageId);
};

const sendMailToRecoveryPassword = async(userMail,token)=>{
    let info = await transport.sendMail({
        from: 'admin@vet.esfot.ec',
        to: userMail,
        subject: "Recuperación de Contraseña - Poli-Vet",
        html: `
        <h1>Poli-Vet 🐶😺🐹 | Sistema de Gestión Veterinaria</h1>
        <hr>
        <a href=${process.env.URL_BACKEND}recuperar-password/${token}>Clic para reestablecer tu contraseña</a>
        <hr>
        <footer>Hecho con ❤️ en la ESFOT-EPN.</footer>
        `
    });
    console.log("Mensaje enviado satisfactoriamente: ", info.messageId);
}

export {
    sendMailToUser,
    sendMailToRecoveryPassword
}