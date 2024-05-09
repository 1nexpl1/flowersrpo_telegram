const { Scenes, Telegraf } = require('telegraf');
const { CMD_TEXT } = require('../config/consts');
const {  login, fetchOrdersPersonal } = require('../services/registration');
const {BackToStart} = require('../utils/buttons');
const { start } = require('./command');
const { fmt, bold, link } = require ("telegraf/format");





const stepOne = Telegraf.on('text', async ctx => {
    try {
        const text = ctx.text
        ctx.reply('Отлично, теперь давайте введем пароль', {...BackToStart})
        ctx.scene.state.mail = text
        ctx.wizard.next();
    } catch (error) {
        console.log(error)
        ctx.reply('Упс... Произошла какая - то ошибка');
        ctx.scene.leave();
    }
})

const stepTwo = Telegraf.on('text', async ctx => {
    try {
        const text = ctx.text
        const token = await login(ctx.scene.state.mail, text)
        ctx.reply('Супер! Вы вошли, теперь загружаем вашу скидку')
        const orders = await fetchOrdersPersonal(token.id)
        let value = 0
        orders.map(el => {
            value += el.value
        })
        discount = value > 10000 ? '5%' : '2%'
        ctx.reply(fmt`Сумма ваших заказов: ${value},
Ваша скидка ${bold(discount)}
Посетите наш обновленный ${link("сайт", "https://flowers-pro-vp.ru/catalog")} чтобы увидеть еще больше новых букетов
        `);
        ctx.scene.leave;
    } catch (error) {
        console.log(error)
        ctx.reply('Упс... Произошла какая - то ошибка');
        ctx.scene.leave();
    }
})



const loginScene = new Scenes.WizardScene('login', stepOne, stepTwo)


loginScene.enter(ctx => ctx.reply('Для начала нам нужно узнать кто вы, введите ваш email', {...BackToStart}))

loginScene.hears(CMD_TEXT.backToStart, ctx => {
    ctx.scene.leave();
    return start(ctx);
})

module.exports = {
    loginScene
}