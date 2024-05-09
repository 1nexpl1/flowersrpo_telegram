module.exports = {
    authOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: 'Зарегестрироваться', callback_data: 'registration' }, { text: 'Войти', callback_data: 'login' }],
            ]
        })
    },

    regOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: 'На сайте', callback_data: 'site' }, { text: 'В боте', callback_data: 'bot' }],
            ]
        })
    }
}