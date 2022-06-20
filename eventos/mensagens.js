module.exports = {
  name: "mensagens",
  type: "message"
}

module.exports.run = async (message, client) => {

  const Discord = require('discord.js')
	
  if (message.author.bot) {
  if (message.author.id === client.user.id) return;
  if (message.channel.id === "630152042194665493") {
  const attachment = new Discord.MessageAttachment(
    "https://i.imgur.com/QPEaDEo.png",
    "parceria.png"
  );
	  return message.channel.send(attachment)
  }}
	
  if (message.channel.type === "news") {
    message.crosspost()
  }

  if (message.author.bot) return 0;
  client.emit("checkMessage", message);

  if (message.channel.id === "962803914208600124") { 
			let convite = /((discord|invite)\.(gg|io|me|plus|link|io|gg|li)|discordapp\.com\/invite)\/.+/gi.test(message.content);
	if (convite === false) {
		return message.reply(`sua parceria foi automaticamente negada por não possuir um convite válido! Tente novamente com algo válido!`).then(msg => {setTimeout(() => msg.delete(), 30000)})
	}
	setTimeout(function() {
    message.delete();
	message.reply("seu pedido de parceria foi enviado para análise!").then(msg => {setTimeout(() => msg.delete(), 120000)})
  }, 5000)
    client.channels.cache.get("962798017726001203").send("```"+message.content.replace(/(@here|@everyone)/g, '')+"\nRep: <@"+message.author.id+">``` <@"+message.author.id+">")
  }
	
  if (message.channel.id === "630152042194665493") {
  const attachment = new Discord.MessageAttachment(
    "https://i.imgur.com/QPEaDEo.png",
    "parceria.png"
  );
	  return message.channel.send("<@&926845797553807401>",attachment)
  }

  // [ - O BOT REPETE ]
  
  if (message.content.startsWith("boa tarde") || message.content.startsWith("Boa tarde")) {
    message.inlineReply("Boa tarde");
  }

  if (message.content.startsWith("boa noite") || message.content.startsWith("Boa noite")) {
    message.inlineReply("Boa noite");
  }

  if (message.content.startsWith("Bom dia") || message.content.startsWith("bom dia")) {
    message.inlineReply("Bom dia");
  }
  
};