const Discord = require("discord.js");

module.exports = {
  name: "ajuda",
  description: "Mostrarei todos os comandos!",
  aliases: ["help"]
}

module.exports.run = (client, message, res) => {
  const embed = new Discord.MessageEmbed()
  .setAuthor("Comandos da Império Games & Animes:", "https://image.flaticon.com/icons/png/128/1384/1384569.png")
  .setColor(client.cor)
  client.commands.forEach(command => {
    if(command.name.includes("embed")) return 0;
    if(command.oculto === true) return 0;
    embed.addField(`${command.name}`, `**${command.description || "Sem descrição definida."}**\n**Sinônimos:** ${command.aliases || "Sem sinônimos."}`, false);
  })
  message.inlineReply(embed)
};
