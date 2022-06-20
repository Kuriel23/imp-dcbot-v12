const Discord = require("discord.js");

module.exports = {
  name: "suggest",
  description: "Sugira coisas para minha staff melhorar!",
  aliases: ["sugestão", "sugestao"]
}

module.exports.run = (client, message, res) => {
        let messageArgs = res.join(' ');
        if(!res.join(" ")) return message.inlineReply(new Discord.MessageEmbed().setAuthor("» Indique uma sugestão", client.warn).setColor(client.cor))
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag} » Sugestão`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(client.cor)
        .setFooter(`ID do Usuário: ${message.author.id}`)
        .setThumbnail("https://media3.giphy.com/media/87hciH9fs3wRqmjFMY/giphy.gif")
        .setDescription("💡 **» Sugestão: "+messageArgs+"**\n\n:thumbsup: **» Gostei**\n\n:thumbsdown: **» Não Gostei**");

        client.channels.cache.get("600289618306400277").send(embed).then((msg) =>{
            msg.react('👍');
            msg.react('👎');
            message.delete();
        }).catch((err)=>{throw err;});
};