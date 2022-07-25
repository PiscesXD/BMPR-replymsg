let BMPR = null

async function init(bmpr) {
    BMPR = bmpr
}

async function messageCreate(message) {
    if (message.author.bot) return
    if (message.content == "hello") {
        return await message.reply("hello!")
    }else if (message.content == "你好") {
        return await message.reply("你好你好w")
    }else if (message.content == BMPR.Config.Prefix + "ping") {
        return await message.reply("pong")
    }
}

module.exports = {
    init,
    messageCreate
}