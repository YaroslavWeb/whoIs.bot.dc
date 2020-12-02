require("dotenv").config()

const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
  console.log("Math.bot ready")
})

client.on("message", (msg) => {
  const tokens = msg.content.split(" ")
  let way

  tokens.forEach((token) => {
    if (token === "пидор?" || token === "пидр?") {
      way = "whoIs"
    }
  })

  if (way === "whoIs") {
    const decision = Math.random() < 0.5 ? false : true
    if (decision) {
      msg.reply("Да")
      setTimeout(() => msg.reply("Я уверен!"), 2000)
    } else {
      msg.reply("Нет")
    }
  }
})

client.login(process.env.BOT_TOKEN)
