const Discord = require('discord.js');

module.exports = {
	name: "embedregras",
	description: "",
	aliases: []
}

module.exports.run = async (client, message, res) => {
	message.delete();
	if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Você não é um Staff Gamer, tente novamente quando for um Staff qualificado!");

	let embed = new Discord.MessageEmbed()
		.setAuthor("» Regras", "https://i.imgur.com/f4W7UZO.png")
		.setDescription(
			`A Império Network é uma fonte de notícias onde informamos gamers e otakus sobre as notícias mais recentes desse tema!\n\n<:um:882972801236078603> » Não faça spam/flood, isso prejudica você e outras pessoas.\n<:dois:882972801722634310> » Não faça raid ou travas.\n<:tres:882972801122840577> » É proibido a divulgação de servidores, mesmo na DM, solicite a permissão da pessoa para divulgar ou da equipe.\n<:quatro:882972801600983060> » Não poste conteúdo impróprio (Conteúdo +18/NSFW, Links externos que conduzam a vírus, Racismo, etc).\n<:cinco:882972801458405446> » Cada canal tem sua utilização, utilize-os corretamente.`
		)
		.setImage("https://i.imgur.com/y5cw8Nz.png")
		.setColor(client.cor)
		.setFooter("Caso você não cumpra estas regras você poderá levar punição!")
	message.channel.send(embed)
}