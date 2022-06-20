module.exports = {
	name: "buttons",
	type: "clickButton"
}

module.exports.run = async (button, client) => {

	const Discord = require('discord.js');
	const { MessageButton, MessageActionRow } = require("discord-buttons");
	//Ativadores
	if (button.id === "anuncio") {
	  let role = button.guild.roles.cache.get("727270078789189652");
	  let member = button.clicker.member
	  let msg = ""
	  if(member.roles.cache.has(role.id)) {
	  msg = "Remover cargo"
      member.roles.remove(role);
	  } else {
	  msg = "Adicionar cargo"
      member.roles.add(role);
	  }
	  button.reply.send("Operação \""+msg+"\" realizada com sucesso.",true)
    }
	if (button.id === "parceria") {
	  let role = button.guild.roles.cache.get("926845797553807401");
	  let member = button.clicker.member
	  let msg = ""
	  if(member.roles.cache.has(role.id)) {
	  msg = "Remover cargo"
      member.roles.remove(role);
	  } else {
	  msg = "Adicionar cargo"
      member.roles.add(role);
	  }
	  button.reply.send("Operação \""+msg+"\" realizada com sucesso.",true)
    }
	if (button.id === "mudae") {
	  let role = button.guild.roles.cache.get("719499556265394206");
	  let member = button.clicker.member
	  let msg = ""
	  if(member.roles.cache.has(role.id)) {
	  msg = "Remover cargo"
      member.roles.remove(role);
	  } else {
	  msg = "Adicionar cargo"
      member.roles.add(role);
	  }
	  button.reply.send("Operação \""+msg+"\" realizada com sucesso.",true)
    }
};