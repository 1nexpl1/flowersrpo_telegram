const { Auth, Choose } = require("../utils/buttons");
const { fmt,  link } = require ("telegraf/format");

const start = (ctx) => {
    ctx.reply(`
        ❤️ Привет, ${ctx.update.message.from.first_name}! 
Я бот FlowersPro, цветочного магазина в Верхней Пышме, я могу помочь вам вступить в нашу программу лоялности, либо посмотреть уже сделанные заказы, тем самым сделав ваши покупки более приятными и выгодными
`, { ...Auth });
    console.log(ctx.state);
}
const registration = (ctx) =>
    ctx.reply(`
        ${ctx.update.message.from.first_name}, выбери способ регистрации `, { ...Choose });


const onsite = (ctx) =>{
    ctx.reply(fmt`Переходите на наш обновленный ${link("сайт", "https://flowers-pro-vp.ru/catalog")}, там все понятно, быстро и легко`)
}
const regInBot = (ctx) => {
    return ctx.scene.enter('registration')
}

const logInBot = (ctx) => {
    return ctx.scene.enter('login')
}



module.exports = {
    start,
    registration,
    regInBot,
    logInBot, 
    onsite
}