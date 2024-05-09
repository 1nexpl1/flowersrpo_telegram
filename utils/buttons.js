const { Markup } = require('telegraf');
const { CMD_TEXT } = require('../config/consts');

const Auth =
    Markup.keyboard([
        [CMD_TEXT.logB],
        [CMD_TEXT.regB],
        [CMD_TEXT.backToStart]
    ]).resize()

const Choose =
    Markup.keyboard([
        [CMD_TEXT.inBotB],
        [CMD_TEXT.inSiteB],
        [CMD_TEXT.backToStart]
    ]).resize()

const BackToStart =
    Markup.keyboard(
        [CMD_TEXT.backToStart]
    ).resize()





module.exports = {
    Auth,
    Choose,
    BackToStart
}