const Discord = require("discord.js");

module.exports = {
  name: "8ball",
  description: "Me faça perguntas!",
  aliases: []
}

module.exports.run = async (client, message, res) => {
  if (!res[2]) return message.inlineReply(new Discord.MessageEmbed().setAuthor("» Faça uma Pergunta Completa.", client.warn).setColor(client.cor));
  if (res.join(" ").includes("suicídio") || res.join(" ").includes("suicidio") || res.join(" ").includes("Suicídio") || res.join(" ").includes("Suicidio") || res.join(" ").includes("tirar a vida") || res.join(" ").includes("perder a vida") || res.join(" ").includes("Perder a vida") || res.join(" ").includes("Tirar a vida") || res.join(" ").includes("suicidar") || res.join(" ").includes("Suicidar") || res.join(" ").includes("matar") || res.join(" ").includes("Matar")) return message.inlineReply("Não faça essa ação! Se você pensa sobre tais atos contacte uma psicológa urgentemente para lhe consultar o mais rápido possível e recomendar alguns medicamentos, conselhos e entre outros!")
  let respostas = [
    "Todos os sinais apontam que sim...",
    "Desculpa, mas não.",
    "Pode ter certeza!",
    "Tá zuando, né? COM CERTEZA Não, cara, não...",
    "Claro que sim!",
    "Muito provavelmente Acho que sim...",
    "Não me enche, cara!",
    "Sim, meu amor, claro que sim!",
    "Me deixa em paz..."
  ];

  let resultado = Math.floor(Math.random() * respostas.length);
  message.inlineReply(new Discord.MessageEmbed().setAuthor(`» ${respostas[resultado]}`, "https://image.flaticon.com/icons/png/128/819/819557.png").setColor(client.cor));
};
