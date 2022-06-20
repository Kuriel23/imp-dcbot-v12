const { connect, Schema, model } = require("mongoose");
connect(process.env.db,
  { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => console.log("[Database Iniciada] | Império Network"))
  .catch(() =>
    console.log("[ERRO] | Não foi possível se conectar ao banco de dados.")
  );

const UserSchema = new Schema({
  _id: { type: String, required: true },
  punishments: {
    mutes: { type: Array, default: [] },
    autobot: { type: Array, default: [] }
  },
});

const BaninfoSchema = new Schema({
  _id: { type: String, required: true },
  motivo: { type: String, default: "Sem motivo informado." },
  data: { type: String, required: true },
  autor: { type: String, default: "Equipe Império Network" },
  banido: { type: String, required: true },
  provas: { type: Array, default: [] }
});

const NewsSchema = new Schema({
  _id: { type: String, required: true },
  newsdata: { type: String, default: "" },
  twitterdata: { type: String, default: "" },
});

module.exports.BanInfo = model("BanInfo", BaninfoSchema);
module.exports.Users = model("Users", UserSchema);
module.exports.News = model("News", NewsSchema)