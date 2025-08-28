const fs = require("fs");
module.exports.config = {
	name: "gali",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "abal",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ebrahim bokacoda")==0 || event.body.indexOf("Ebrahim mc")==0 || event.body.indexOf("c**d")==0 || event.body.indexOf("Ebrahim nodir pola")==0 || event.body.indexOf("bc")==0 || event.body.indexOf("Ebrahim re chudi")==0 || event.body.indexOf("ebrahim re chod")==0 || event.body.indexOf("Ebrahim abal")==0 || event.body.indexOf("Ebrahim bc")==0 || event.body.indexOf("Ebrshim madarchod")==0 || event.body.indexOf("Ebrahim re chudi")==0 || event.body.indexOf("Ebrahim akta mc")==0) {
		var msg = {
				body: "তোর মতো বোকাচোদা রে আমার বস ইব্রাহিম চু*দা বাদ দিছে🤣\nসাহু এখন আর hetars চুষে না🥱😈",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
