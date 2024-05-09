const { Scenes, Telegraf } = require('telegraf');
const { CMD_TEXT } = require('../config/consts');
const { registration } = require('../services/registration');
const {BackToStart} = require('../utils/buttons');
const { start } = require('./command');





const stepOne = Telegraf.on('text', async ctx => {
    try {
        const text = ctx.text
        ctx.reply('Отлично, очень рады познакомиться, теперь введи пожалуйста свою почту, чтобы мы всегда оставались с тобой на связи')
        ctx.scene.state.name = text
        ctx.wizard.next();
    } catch (error) {
        console.log(error)
        ctx.reply('Упс... Произошла какая - то ошибка');
    }
})

const stepTwo = Telegraf.on('text', async ctx => {
    try {
        const text = ctx.text
        ctx.reply('Cупер, осталось придумать какой-нибудь интересный пароль, чтобы никто не смог узнать про твои покупки)')
        ctx.scene.state.mail = text
        ctx.wizard.next();
    } catch (error) {
        console.log(error)
        ctx.reply('Упс... Произошла какая - то ошибка');
    }
})

const stepThree = Telegraf.on('text', async ctx => {
    try {
        const token = await registration(ctx.scene.state.name, ctx.scene.state.mail, text)
        ctx.reply('Супер! Регистрация пройдена')
        ctx.scene.leave();
    } catch (error) {
        console.log(error)
        ctx.reply('Упс... Произошла какая - то ошибка');
    }
})

const registrationScene = new Scenes.WizardScene('registration', stepOne, stepTwo, stepThree)


registrationScene.enter(ctx => ctx.reply('Введи свое имя'), {
    ...BackToStart
})

registrationScene.hears(CMD_TEXT.backToStart, ctx => {
    ctx.scene.leave();
    return start(ctx);
})

module.exports = {
    registrationScene
}