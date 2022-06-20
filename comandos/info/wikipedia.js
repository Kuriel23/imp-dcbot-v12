const Discord = require("discord.js");
const wiki = require('wikipedia');

module.exports = {
  name: "wikipedia",
  description: "Visualize informações na Wikipedia",
  aliases: ["wiki"]
}

module.exports.run = async (client, message, res) => {
try {
    const name = res.join(" ") || "Grand Theft Auto";
    const newUrl = await wiki.setLang('pt');
		const searchResults = await wiki.summary(name);
    let wikiEmbed = new Discord.MessageEmbed()
    .setAuthor("» "+searchResults.titles.normalized, "https://upload.wikimedia.org/wikipedia/commons/d/de/Wikipedia_Logo_1.0.png")
    .setDescription(searchResults.extract)
    .setColor(client.cor)
    .setFooter(searchResults.content_urls.desktop.page)
    .setTimestamp();
  message.inlineReply(wikiEmbed);
	} catch (err) {
		return message.inlineReply(new Discord.MessageEmbed().setAuthor("» Sem Resultados Encontrados.", client.err).setColor(client.cor));
	}
};
