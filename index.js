require('dotenv').config({ path: './config/.env' })

const { setupBot } = require('./bot');


(async function () {
    try {
        await setupBot().launch();
        console.log("</ Бот успешно запущен >")
    } catch (error) {
        console.log('Ошибка запуска: ', error)
    }
}())

























































































// const TelegramApi = require('node-telegram-bot-api');

// const token = '7122685542:AAH7_g29klTUHEkROEZkDgy36OMKthp6AUM'

// const bot = new TelegramApi(token, { polling: true })

// authOptions = {
//     reply_markup: JSON.stringify({
//         inline_keyboard: [
//             [{ text: 'Зарегестрироваться', callback_data: 'registration' }, { text: 'Войти', callback_data: 'login' }],
//         ]
//     })
// }

// regOptions = {
//     reply_markup: JSON.stringify({
//         inline_keyboard: [
//             [{ text: 'На сайте', callback_data: 'site' }, { text: 'В боте', callback_data: 'bot' }],
//         ]
//     })
// }


// let name = null
// const email = null
// let password = null

// const nameF = async (chatId) => {
//     bot.sendMessage(chatId, 'Введите имя')
//     return bot.on('message', async msg => {
//         name = msg.text
//         bot.sendMessage(chatId, 'Введите Пароль')
//         return bot.on('message', async msg => {
//             password = msg.text
//             return bot.sendMessage(chatId, `${name} ${password}`)
//         })
//     })
// }
// const start = () => {
//     bot.setMyCommands([
//         { command: '/start', description: 'Начало' },
//         { command: '/info', description: 'Что умеет этот бот' },
//     ])
//     bot.on('message', async msg => {
//         const text = msg.text
//         const chatId = msg.chat.id
//         if (text === '/start') {
//             return bot.sendMessage(chatId, 'Приветствую, для получения доступа к функционалу бота, зарегестрируйтесь или авторизуйтесь', authOptions)
//         }

//         if (text === '/info') {
//             return bot.sendMessage(chatId, 'Приветствую, я бот FlowersPro, цветочного магазина в Верхней Пышме, я могу помочь вам вступить в нашу программу лоялности, либо посмотреть уже сделанные заказы, тем самым сделав ваши покупки более приятными и выгодными ')
//         }

//     })
//     bot.on('callback_query', async msg => {
//         const data = msg.data;
//         const chatId = msg.message.chat.id;
//         if (data === 'registration') {
//             return bot.sendMessage(chatId, 'Выберите способ регистрации', regOptions)
//         }
//         if (data === 'bot') {
//             return nameF(chatId)
//         }
//         if (data === 'name') {
//             return bot.sendMessage(chatId, '1')
//         }
//     })
// }
// start()