const { Telegraf, Scenes, session } = require('telegraf');
const { start, registration, regInBot, logInBot, onsite } = require('./controllers/command');
const { CMD_TEXT } = require('./config/consts');
const { registrationScene } = require('./controllers/registrationScene');
const { loginScene } = require('./controllers/loginScene');

const bot = new Telegraf(process.env.TG_TOKEN)

const stage = new Scenes.Stage([registrationScene, loginScene])

const setupBot = () => {
    bot.on((ctx, next)=>{
        return next
    })
    bot.use(session())
    bot.use(stage.middleware())
    bot.start(start)
    bot.hears(CMD_TEXT.regB, registration)   
    bot.hears(CMD_TEXT.inBotB, regInBot)
    bot.hears(CMD_TEXT.logB, logInBot)
    bot.hears(CMD_TEXT.backToStart, start)
    bot.hears(CMD_TEXT.inSiteB, onsite)


    return bot
}
module.exports={
    setupBot
}