module.exports.config = {
 name: "owner",
 version: "1.0.1",
 hasPermssion: 0,
 credits: "𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐈𝐬𝐥𝐚𝐦",
 description: "Owner information command with styled box",
 commandCategory: "Information",
 usages: "",
 cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
 const ownerInfo = 
`╔═════════════════════╗
║ 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 
╠═════════════════════╣
║ 👤 𝗡𝗮𝗺𝗲 : 𝐄𝐁𝐑𝐀𝐇𝐈𝐌
║ 🧸 𝗡𝗶𝗰𝗸 𝗡𝗮𝗺𝗲 : 𝐄𝐯𝐨
║ 🎂 𝗔𝗴𝗲 : 20+
║ 💘 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻 : 𝗦𝗶𝗻𝗴𝗹𝗲
║ 🎓 𝗣𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻 : 𝗦𝘁𝘂𝗱𝗲𝗻𝘁
║ 📚 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻 : 𝗛𝗦𝗖(2025)
║ 🏡 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : 𝐌𝐲𝐦𝐞𝐧𝐬𝐡𝐢𝐧𝐠𝐡
╠═════════════════════╣
║ 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦 
╠═════════════════════╣
║ 📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : 
║ https://fb.com/100065568407761
║ 💬 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿 : 
║ m.me/100065568407761
║ 📞 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 : 
║ https://wa.me/01403299927
║ ✈️ 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 : 
║ https://t.me/yourEvo
╚═════════════════════╝`;

 return api.sendMessage(ownerInfo, event.threadID, event.messageID);
};
