const schedule = require("node-schedule");

module.exports.config = {
  name: "jummaMubarak",
  version: "1.0.0",
  permission: 0,
  credits: "RAKIB BOSS",
  description: "Auto message for Jumma Mubarak every Friday 9AM",
  category: "automessage",
  usages: "",
  cooldowns: 5
};

module.exports.onLoad = async function({ api }) {
  // প্রতি শুক্রবার সকাল ৯টা
  schedule.scheduleJob('0 9 * * 5', async function () {
    const allThreadID = global.data.allThreadID || [];

    for (const threadID of allThreadID) {
      // প্রতিটি গ্রুপের নাম বের করা (optional, যদি groupInfo থাকে)
      let threadName = "এই গ্রুপ"; // default fallback
      try {
        const threadInfo = await api.getThreadInfo(threadID);
        threadName = threadInfo.threadName || "এই গ্রুপ";
      } catch (e) {
        console.log(`Could not get name for threadID ${threadID}`);
      }

      const message = `
╭•┄┅═❁🌺❁═┅┄•╮
 -𝘼𝙨𝙨𝙖𝙡𝙖𝙢𝙪𝙖𝙡𝙖𝙞𝙠𝙪𝙢-
╰•┄┅═❁🌺❁═┅┄•╯

👪 @everyone 👪
আপনাদের সবাইকে 
『${threadName}』 ও

 👑=✺🅒🅔🅞✺=👑
 ╔━━━❖🌺❖━━━╗
   =RAKIB BOSS=
🌹❁❖━━✫━━❖❁🌹
-এর পক্ষ থেকে -

✅✨𝗝𝗨𝗠𝗠𝗔 ✨✅

✅🤲𝗠𝗨𝗕𝗔𝗥𝗔𝗞🤲✅

🤲𝐓𝐨𝐝𝐚𝐲 𝐢𝐬 𝐚 𝐒𝐩𝐞𝐜𝐢𝐚𝐥 𝐃𝐚𝐲 🤲𝐅𝐨𝐫 𝐌𝐮𝐬𝐥𝐢𝐦𝐬🌸🤲🏻
💝 নিশ্চয়ই শুক্রবার সপ্তাহের শ্রেষ্ঠ দিন!❤️

🤲 হে আল্লাহ সবাইকে নামাজ পরার তৌফিক দান করুক✨
     __আমিন✨🤲

╭•┄┅══❁🌺❁══┅┄•╮
🌹-Made by RAKIB-🌹
╰•┄┅══❁🌺❁══┅┄•╯`;

      api.sendMessage(message, threadID);
    }
  });
};
