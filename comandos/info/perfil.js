const Discord = require("discord.js");
const moment = require("moment");
moment.locale("pt-br");

module.exports = {
  name: "perfil",
  description: "Veja informações de um usuário.",
  aliases: ["profile", "userinfo"]
}

module.exports.run = async (client, message, res) => {
    let membro = message.guild.member(
      message.mentions.users.first() ||
        client.users.cache.get(res[0]) ||
        message.author
    );
    const userDB = await client.db.Users.findOne({ _id: membro.id });
    try {
    const userDBnovo = await client.db.Users.findOne({ _id: membro.id });
    } catch(err) { new client.db.Users({_id: membro.id}).save();
    return message.channel.send("Você agora está registrado no nosso banco de dados!")
    }
    let Criado = moment(membro.user.createdAt).format("lll");
    let Criado2 = moment(membro.user.createdAt)
      .startOf("seconds")
      .fromNow();
    let Entrado = moment(membro.joinedTimestamp).format("lll");
    let Entrado2 = moment(membro.joinedTimestamp)
      .startOf("seconds")
      .fromNow();
    let PrimeirasEmbed = new Discord.MessageEmbed()
    .setAuthor("Perfil de: "+membro.displayName, "https://image.flaticon.com/icons/png/128/3305/3305899.png")
    .addField("Discord Tag: ", `${membro.displayName}#${membro.user.discriminator}`, true)
    .addField("Discord ID:", membro.id, true)
    .addField("Conta criada em:", `${Criado} (${Criado2})`, true)
    .addField("Conta entrou a:", `${Entrado} (${Entrado2})`, true)
    .setThumbnail(membro.user.displayAvatarURL({ format: "jpg" }))
    .setColor(client.cor)
    message.inlineReply(PrimeirasEmbed)
};
