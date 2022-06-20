module.exports = {
  name: "welcome",
  type: "guildMemberAdd"
}

module.exports.run = async (member, client) => {
  
  const Discord = require("discord.js");
  
  if (member.guild.id != "597137568605274112") return;
  if (member.user.bot) return;
  
      let MembroEntrouEmbed = new Discord.MessageEmbed()
    .setAuthor("» Bem-vindo(a) á Imperio Network!", member.user.displayAvatarURL())
    .setDescription(
      "» Veja as <#598517985782792193>!\n» Caso queira ser notificado de notícias, vá em <#719496218090405968>, basta clicar nas reações e divirta-se no nosso servidor!"
    )
    .setColor(client.cor).setTimestamp().setImage("https://cdn.discordapp.com/attachments/952355882015010876/955142103636262983/Novo_Projeto_-_2022-03-20T133330.488.png")
  member.guild.channels.cache.get("600300473848823809").send("<@" + member.user + ">", MembroEntrouEmbed);

    var emojis = [
    "<:um:882972801236078603>",
    "<:dois:882972801722634310>",
    "<:quatro:882972801600983060>",
    "<:tres:882972801122840577>",
    "<:cinco:882972801458405446>",
    "<:seis:882972801466785852>",
    "<:sete:882972801437417512>",
    "<:oito:882972801600987166>",
    "<:nove:882972801496141874>",
    "<:zero:882972801596805171>"
  ];
  var numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var numero = member.guild.memberCount;
  var array = numero.toString().split("");
  var x = "";
  for (var i = 0; i < array.length; i++) {
    var index = numeros.indexOf(array[i]);
    x = x + emojis[index];
  }
  member.guild.channels.cache.get("600300473848823809").setTopic("O servidor possui " + x + " gamers/otakus | imperionetwork.ml", "Culpa do: "+ member.user.tag);

};