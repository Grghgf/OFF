const axios = require("axios");
const fs = require("fs-extra");
const util = require("util");
const {
  StickerTypes
} = require("wa-sticker-formatter");
const fetch = require("node-fetch");
const {
  fancytext,
  smdBuconst {
   smd,
   fetchJson,
   astroJson,
   fancytext,
   yt,
   getBuffer,
   smdBuffer,
   prefix,
   Config,
 } = require("../lib");
 const {
   search,
   download
 } = require("aptoide-scraper");
 const googleTTS = require("google-tts-api");
 const ytdl = require("@distube/ytdl-core");
 const yts = require("secktor-pack");
 const fs = require("fs-extra");
 const axios = require("axios");
 const fetch = require("node-fetch");
 var videotime = 2000;
 const {
   cmd
 } = require("../lib/plugins");
 smd(
  {
    pattern: "igstalk",
    desc: "Get information about an Instagram user.",
    category: "stalker",
    filename: __filename,
    use: "<username>",
  },
  async (m, username) => {
    try {
      if (!username) {
        return await m.send("*_Please provide an Instagram username!_*");
      }

      const apiUrl = `https://api.maher-zubair.tech/stalk/instagram?q=${encodeURIComponent(
        username
      )}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        return await m.send(
          `*_Error: ${response.status} ${response.statusText}_*`
        );
      }

      const data = await response.json();

      if (data.status !== 200) {
        return await m.send("*_An error occurred while fetching the data._*");
      }

      const {
        photo_profile,
        username: igUsername,
        fullname,
        posts,
        followers,
        following,
        bio,
      } = data.result;

      const caption = `
*Instagram User Information*

*Username:* ${igUsername}
*Full Name:* ${fullname}
*Bio:* ${bio || "NO BIO"}

*Posts:* ${posts}
*Followers:* ${followers}
*Following:* ${following}

\t*BLADE-MD-V2 IG STALKER*
`;

      await m.bot.sendFromUrl(m.from, photo_profile, caption, m, {}, "image");
    } catch (e) {
      await m.error(`${e}\n\ncommand: igstalk`, e);
    }
  }
);
smd(
  {
    pattern: "ytstalk",
    desc: "Get information about a YouTube channel.",
    category: "stalker",
    filename: __filename,
    use: "<channel_name>",
  },
  async (m, channelName) => {
    try {
      if (!channelName) {
        return await m.send("*_Please provide a YouTube channel name!_*");
      }

      const apiUrl = `https://api.maher-zubair.tech/stalk/ytchannel?q=${encodeURIComponent(
        channelName
      )}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        return await m.send(
          `*_Error: ${response.status} ${response.statusText}_*`
        );
      }

      const data = await response.json();

      if (data.status !== 200) {
        return await m.send("*_An error occurred while fetching the data._*");
      }

      const channels = data.result;

      if (!channels || !Array.isArray(channels) || channels.length === 0) {
        return await m.send("*_No channels found!_*");
      }

      for (const channel of channels) {
        const {
          channel_id,
          channel_name,
          channel_about,
          channel_created,
          channel_picture,
        } = channel;

        const caption = `
*YouTube Channel Information*

*Channel Name:* ${channel_name}
*Channel ID:* ${channel_id}
*Channel Description:* ${channel_about}
*Channel Created:* ${new Date(channel_created).toLocaleString()}

*Profile Picture:*
`;

        const profilePictureUrl =
          channel_picture.high.url || channel_picture.medium.url;

        await m.bot.sendFromUrl(
          m.from,
          profilePictureUrl,
          caption,
          m,
          {},
          "image"
        );
      }
    } catch (e) {
      await m.error(`${e}\n\ncommand: ytstalk`, e);
    }
  }
);
smd(
  {
    pattern: "gitstalk",
    desc: "Get information about a GitHub user.",
    category: "stalker",
    filename: __filename,
    use: "<username>",
  },
  async (m, username) => {
    try {
      if (!username) {
        return await m.send("*_Please provide a GitHub username!_*");
      }

      const apiUrl = `https://api.maher-zubair.tech/stalk/githubuser?q=${encodeURIComponent(
        username
      )}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        return await m.send(
          `*_Error: ${response.status} ${response.statusText}_*`
        );
      }

      const data = await response.json();

      if (data.status !== 200) {
        return await m.send("*_An error occurred while fetching the data._*");
      }

      const {
        login,
        id,
        avatar_url,
        name,
        company,
        blog,
        location,
        bio,
        public_repos,
        public_gists,
        followers,
        following,
        created_at,
        updated_at,
      } = data.result;

      const caption = `
*GitHub User Information*

*Username:* ${login}
*Name:* ${name || "N/A"}
*ID:* ${id}
*Bio:* ${bio || "N/A"}
*Company:* ${company || "N/A"}
*Blog:* ${blog || "N/A"}
*Location:* ${location || "N/A"}

*Public Repositories:* ${public_repos}
*Public Gists:* ${public_gists}
*Followers:* ${followers}
*Following:* ${following}

*Account Created:* ${new Date(created_at).toLocaleString()}
*Last Updated:* ${new Date(updated_at).toLocaleString()}

*Avatar:*
`;

      await m.bot.sendFromUrl(m.from, avatar_url, caption, m, {}, "image");
    } catch (e) {
      await m.error(`${e}\n\ncommand: gitstalk`, e);
    }
  }
);
smd(
  {
    pattern: "ipstalk",
    desc: "Get information about an IP address.",
    category: "misc",
    filename: __filename,
    use: "<ip_address>",
  },
  async (m, ipAddress) => {
    try {
      if (!ipAddress) {
        return await m.send("*_Please provide an IP address!_*");
      }

      const apiUrl = `https://api.maher-zubair.tech/stalk/ip?q=${encodeURIComponent(
        ipAddress
      )}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        return await m.send(
          `*_Error: ${response.status} ${response.statusText}_*`
        );
      }

      const data = await response.json();

      if (data.status !== 200) {
        return await m.send("*_An error occurred while fetching the data._*");
      }

      const {
        continent,
        country,
        countryCode,
        regionName,
        city,
        zip,
        lat,
        lon,
        timezone,
        currency,
        isp,
        org,
        as,
        reverse,
        mobile,
        proxy,
        hosting,
        ip,
      } = data.result;

      const caption = `
*IP Address Information*

*IP Address:* ${ip}
*Reverse DNS:* ${reverse}
*Continent:* ${continent}
*Country:* ${country} (${countryCode})
*Region:* ${regionName}
*City:* ${city}
*ZIP Code:* ${zip}
*Latitude:* ${lat}
*Longitude:* ${lon}
*Timezone:* ${timezone}
*Currency:* ${currency}
*ISP:* ${isp}
*Organization:* ${org}
*AS:* ${as}
*Mobile:* ${mobile ? "Yes" : "No"}
*Proxy:* ${proxy ? "Yes" : "No"}
*Hosting:* ${hosting ? "Yes" : "No"}
`;

      await m.send(caption);
    } catch (e) {
      await m.error(`${e}\n\ncommand: ipstalk`, e);
    }
  }
);

 smd(
   {
     pattern: "allsocial",
     desc: "Download media from various social platforms.",
     category: "downloader",
     filename: __filename,
     use: "<url>",
   },
   async (m, url) => {
     try {
       if (!url) {
         return await m.send("*_Please provide a URL!_*");
       }
 
       const apiUrl = `https://api.maher-zubair.tech/download/alldownload2?url=${encodeURIComponent(
         url
       )}`;
       const response = await fetch(apiUrl);
 
       if (!response.ok) {
         return await m.send(
           `*_Error: ${response.status} ${response.statusText}_*`
         );
       }
 
       const data = await response.json();
       const result = data.result;
 
       if (!result || !result.medias || !result.medias.length) {
         return await m.send("*_No media found!_*");
       }
 
       const { title, thumbnail, medias } = result;
       const caption = `*Title:* ${title}\n\n*Source:* ${medias[0].source}`;
 
       await m.bot.sendFromUrl(m.from, thumbnail, caption, m, {}, "image");
 
       for (const media of medias) {
         const { url, formattedSize, quality, extension } = media;
         const mediaCaption = `*Quality:* ${quality}\n*Size:* ${formattedSize}\n*Extension:* ${extension}`;
         await m.bot.sendFromUrl(m.from, url, mediaCaption, m, {}, "video");
       }
     } catch (e) {
       await m.error(`${e}\n\ncommand: allsocial`, e);
     }
   }
 );
 smd({
   pattern: "gdrive",
   desc: "Download files from Google Drive.",
   category: "downloader",
   filename: __filename,
   use: "<url>",
 }, async (m, url) => {
   try {
     if (!url) {
       return await m.send("*_Please provide a Google Drive URL!_*");
     }
 
     const apiUrl = `https://api.maher-zubair.tech/download/gdrive?url=${encodeURIComponent(url)}`;
     const response = await fetch(apiUrl);
 
     if (!response.ok) {
       return await m.send(`*_Error: ${response.status} ${response.statusText}_*`);
     }
 
     const data = await response.json();
 
     if (data.status !== 200) {
       return await m.send(`*_Error: ${data.status} - ${data.result || "Unknown error"}_*`);
     }
 
     const { downloadUrl, fileName, fileSize, mimetype } = data.result;
     const caption = `*File:* ${fileName}\n*Size:* ${fileSize}\n*Type:* ${mimetype}`;
 
     await m.bot.sendFromUrl(m.from, downloadUrl, caption, m, {}, "file");
   } catch (e) {
     await m.error(`${e}\n\ncommand: gdrive`, e);
   }
 });
 smd(
   {
     pattern: "spotify2",
     alias: ["sp2"],
     desc: "Downloads a Spotify song.",
     category: "downloader",
     filename: __filename,
     use: "<Spotify URL>",
   },
   async (message, input) => {
     try {
       const url = input.trim();
       if (!url || !isValidUrl(url)) {
         return await message.send("*_Please provide a valid Spotify URL._*");
       }
 
       const apiUrl = `https://api.maher-zubair.tech/download/spotify?url=${encodeURIComponent(
         url
       )}`;
       const response = await axios.get(apiUrl);
       const data = response.data;
 
       if (!data || data.status !== 200) {
         return await message.reply("*Failed to download the Spotify song.*");
       }
 
       const {
         song,
         artist,
         album_name,
         release_date,
         cover_url,
         url: songUrl,
       } = data.result;
 
       let output = `*Song:* ${song}\n`;
       output += `*Artist:* ${artist.join(", ")}\n`;
       output += `*Album:* ${album_name}\n`;
       output += `*Release Date:* ${release_date}\n\n`;
       output += `*Cover Image:* ${cover_url}\n\n`;
 
       const buffer = await axios.get(songUrl, { responseType: "arraybuffer" });
       const fileName = `${song.replace(/\s/g, "_")}.mp3`;
 
       await message.bot.sendMessage(
         message.chat,
         {
           audio: buffer.data,
           fileName: fileName,
           mimetype: "audio/mpeg",
           caption: output,
         },
         { quoted: message }
       );
     } catch (error) {
       await message.error(
         error + "\n\nCommand: spotify2",
         error,
         "*Failed to download the Spotify song.*"
       );
     }
   }
 );
 
 function isValidUrl(url) {
   try {
     new URL(url);
     return true;
   } catch (_) {
     return false;
   }
 }
 smd(
   {
     pattern: "spotify",
     alias: ["sp"],
     desc: "Searches for Spotify tracks.",
     category: "search",
     filename: __filename,
     use: "<search query>",
   },
   async (message, input) => {
     try {
       const query = input.trim();
       if (!query) {
         return await message.send("*_Please provide a search query._*");
       }
 
       const apiUrl = `https://api.maher-zubair.tech/search/spotify?q=${encodeURIComponent(
         query
       )}`;
       const response = await axios.get(apiUrl);
       const data = response.data;
 
       if (!data || data.status !== 200) {
         return await message.reply("*Failed to fetch Spotify tracks.*");
       }
 
       const tracks = data.result;
       if (!tracks || tracks.length === 0) {
         return await message.reply("*No Spotify tracks found.*");
       }
 
       let output = "*Spotify Search Results:*\n\n";
       for (let i = 0; i < tracks.length; i++) {
         const track = tracks[i];
         output += `*${i + 1}. ${track.title}*\n`;
         output += `Artist: ${track.artist}\n`;
         output += `Duration: ${formatDuration(track.duration)}\n`;
         output += `Popularity: ${track.popularity}\n`;
         output += `Preview: ${
           track.preview ? track.preview : "No preview available"
         }\n`;
         output += `URL: ${track.url}\n\n`;
       }
 
       return await message.send(output, { quoted: message });
     } catch (error) {
       await message.error(
         error + "\n\nCommand: spotify",
         error,
         "*Failed to search Spotify.*"
       );
     }
   }
 );
 
 function formatDuration(durationMs) {
   const seconds = Math.floor((durationMs / 1000) % 60);
   const minutes = Math.floor((durationMs / (1000 * 60)) % 60);
   const hours = Math.floor((durationMs / (1000 * 60 * 60)) % 24);
   return `${hours ? `${hours}h ` : ""}${minutes}m ${seconds}s`;
 }
 smd(
   {
     pattern: "twitter",
     alias: ["tw", "twdl"],
     desc: "Downloads Twitter videos.",
     category: "downloader",
     filename: __filename,
     use: "<add Twitter URL>",
   },
   async (message, input) => {
     try {
       let query = input.split(" ")[0].trim();
       if (!query || !query.startsWith("https://")) {
         return await message.send(
           "*_Please provide a valid Twitter Video URL._*\n*Example: " +
             prefix +
             "tw https://twitter.com/username/status/1234567890_*"
         );
       }
 
       let video = await astroJson(
         "https://api.maher-zubair.tech/download/twitter?url=" + query
       );
 
       if (!video || !video.status === 200) {
         return await message.reply("*Invalid Video URL!*");
       }
 
       let caption = video.data.caption
         ? video.data.caption
         : `*Twitter Video Download*\n\n*Username:* ${video.data.username}`;
 
       return await message.bot.sendMessage(
         message.chat,
         {
           video: { url: video.data.HD },
           caption: caption,
         },
         { quoted: message }
       );
     } catch (error) {
       await message.error(
         error + "\n\nCommand: twitter",
         error,
         "*_Video not found!_*"
       );
     }
   }
 );
 smd({
   pattern: "tgs",
   desc: "Downloads telegram stickers.",
   category: "downloader",
   filename: __filename,
   use: "<add sticker url.>"
 }, async (_0x19df48, _0x155c01) => {
   try {
     if (!_0x155c01) {
       return await _0x19df48.reply("_Enter a tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal\nKeep in mind that there is a chance of ban if used frequently");
     }
     if (!_0x155c01.includes("addstickers")) {
       return await _0x19df48.reply("_Uhh Please Enter a Valid tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal");
     }
     let _0x2a4fb1 = _0x155c01.split("|")[0];
     let _0x27aa70 = _0x2a4fb1.split("/addstickers/")[1];
     let {
       result: _0x4a601d
     } = await fetchJson("https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=" + encodeURIComponent(_0x27aa70) + " ");
     let _0x54b45a = _0x155c01.split("|")[1] || "";
     let _0x56bec3 = "Total stickers: " + _0x4a601d.stickers.length + "\n*Estimated complete in:* " + _0x4a601d.stickers.length * 1.5 + " seconds\nKeep in mind that there is a chance of a ban if used frequently";
     if (_0x4a601d.is_animated) {
       return await _0x19df48.reply("Animated stickers are not supported");
     } else if (_0x54b45a.startsWith("info")) {
       return await _0x19df48.reply(_0x56bec3);
     }
     let _0x26c3a3 = parseInt(_0x54b45a.split(",")[0]) || 10;
     let _0x33784b = parseInt(_0x54b45a.split(",")[1]) || 0;
     let _0x4cca92 = _0x54b45a.split(";")[1] || "Sticker";
     let _0x3a6ece = true;
     if (_0x4cca92.includes("photo")) {
       _0x3a6ece = false;
       _0x4cca92 = "Photo";
     }
     if (_0x26c3a3 > _0x4a601d.stickers.length) {
       _0x26c3a3 = _0x4a601d.stickers.length;
     }
     if (_0x33784b > _0x4a601d.stickers.length) {
       _0x33784b = _0x4a601d.stickers.length - 5;
     }
     if (_0x33784b > _0x26c3a3) {
       let _0xe6592a = _0x26c3a3;
       _0x26c3a3 = _0x33784b;
       _0x33784b = _0xe6592a;
     }
     await _0x19df48.reply(_0x56bec3 + "\n\n_Downloading as " + _0x4cca92 + " From index *" + _0x33784b + "* to *" + _0x26c3a3 + "*._\nIf you wants more to download then use Like \n\n .tgs " + _0x2a4fb1 + " |  10 ,  20 ; photo");
     for (_0x33784b; _0x33784b < _0x26c3a3; _0x33784b++) {
       let _0x4de16f = await fetchJson("https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=" + _0x4a601d.stickers[_0x33784b].file_id);
       let _0x3c2608 = "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + _0x4de16f.result.file_path;
       if (_0x3a6ece) {
         let _0x13ee38 = await getBuffer(_0x3c2608);
         await _0x19df48.reply(_0x13ee38, {
           packname: Config.packname,
           author: "Asta-Md"
         }, "sticker");
       } else {
         await _0x19df48.bot.sendMessage(_0x19df48.chat, {
           image: {
             url: _0x3c2608
           },
           caption: "*_Telegram Sticker At Index " + (_0x33784b + 1) + " Downloaded_*"
         });
       }
     }
   } catch (_0x5a840a) {
     await _0x19df48.error(_0x5a840a + "\n\ncommand: tgs", _0x5a840a, "*_Error Sending telegram stickers!!!_*");
   }
 });
 smd(
   {
     pattern: "fbaudio",
     desc: "Downloads Facebook videos in audio.",
     category: "downloader",
     filename: __filename,
     use: "<add Facebook URL>",
   },
   async (message, input) => {
     try {
       let query = input.split(" ")[0].trim();
       if (!query || !query.startsWith("https://")) {
         return await message.send(
           '*_Please provide a valid Facebook Video URL._'
         );
       }
       let video = await astroJson(
         "https://api-smd.onrender.com/api/fbdown?url=" + query
       );
       if (!video || !video.status) {
         return await message.reply("*Invalid Video URL!*");
       }
       return await message.bot.sendMessage(
         message.chat,
         {
           video: {
             url: video.result.audio, // Assuming you want the audio quality
           },
           caption: Config.caption,
         },
         {
           quoted: message,
         }
       );
     } catch (error) {
       await message.error(
         error + "\n\nCommand: facebook",
         error,
         "*_Video not found!_*"
       );
     }
   }
 );
 smd({
   pattern: "instagram2",
   desc: "Download media from Instagram.",
   category: "downloader",
   filename: __filename,
   use: "<url>",
 }, async (m, providedUrl = "") => {
   try {
     const url = providedUrl.trim(); // Trim any leading/trailing whitespace
     if (!url) {
       return await m.send("*_Please provide an Instagram URL!_*");
     }
 
     const apiUrl = `https://api.maher-zubair.tech/download/instagram?url=${encodeURIComponent(url)}`;
     const response = await fetch(apiUrl);
 
     if (!response.ok) {
       return await m.send(`*_Error: ${response.status} ${response.statusText}_*`);
     }
 
     const data = await response.json();
 
     if (data.status !== 200) {
       return await m.send(`*_Error: ${data.status} - ${data.result || "Unknown error"}_*`);
     }
 
     const mediaData = data.result[0];
 
     if (!mediaData) {
       return await m.send("*_No media found!_*");
     }
 
     const { thumbnail, url: mediaUrl, wm } = mediaData;
     const caption = `*Watermark:* ${wm}\n\n_Note: This media may have a watermark._`;
 
     await m.bot.sendFromUrl(m.from, thumbnail, caption, m, {}, "image");
     await m.bot.sendFromUrl(m.from, mediaUrl, "", m, {}, "video");
   } catch (e) {
     await m.error(`${e}\n\ncommand: instagram2`, e);
   }
 });
 smd(
   {
     pattern: "tgs2",
     desc: "Downloads telegram stickers.",
     category: "downloader",
     filename: __filename,
     use: "<add sticker url.>",
   },
   async (message, url) => {
     try {
       if (!url) {
         return await message.reply(
           "_Enter a tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal\nKeep in mind that there is a chance of ban if used frequently"
         );
       }
 
       if (!url.includes("addstickers")) {
         return await message.reply(
           "_Uhh Please Enter a Valid tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal"
         );
       }
 
       const stickerUrl = url.split("|")[0];
       const stickerName = stickerUrl.split("/addstickers/")[1];
       const { result: stickerSet } = await fetchJson(
         `https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(
           stickerName
         )}`
       );
 
       const options = url.split("|")[1] || "";
       const stickerInfo = `Total stickers: ${
         stickerSet.stickers.length
       }\n*Estimated complete in:* ${
         stickerSet.stickers.length * 1.5
       } seconds\nKeep in mind that there is a chance of a ban if used frequently`;
 
       if (stickerSet.is_animated) {
         return await message.reply("Animated stickers are not supported");
       } else if (options.startsWith("info")) {
         return await message.reply(stickerInfo);
       }
 
       const [start, end] = options
         .split(",")
         .map((value) => parseInt(value) || 0);
       const [, outputType] = options.split(";");
       const isSticker = !outputType || outputType.toLowerCase() !== "photo";
 
       const startIndex = Math.min(start || 10, stickerSet.stickers.length);
       const endIndex = Math.min(
         end || startIndex + 10,
         stickerSet.stickers.length
       );
 
       await message.reply(
         `${stickerInfo}\n\n_Downloading as ${
           isSticker ? "Sticker" : "Photo"
         } From index *${startIndex}* to *${endIndex}*._\nIf you want more to download, use:\n\n.tgs ${stickerUrl} | ${
           startIndex + 10
         }, ${endIndex + 10}; ${isSticker ? "sticker" : "photo"}`
       );
 
       for (let i = startIndex - 1; i < endIndex; i++) {
         const { result: fileInfo } = await fetchJson(
           `https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${stickerSet.stickers[i].file_id}`
         );
         const fileUrl = `https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/${fileInfo.file_path}`;
 
         if (isSticker) {
           const sticker = await getBuffer(fileUrl);
           await message.reply(
             sticker,
             { packname: Config.packname, author: "Asta-Md" },
             "sticker"
           );
         } else {
           await message.bot.sendMessage(message.chat, {
             image: { url: fileUrl },
             caption: `*_Telegram Sticker At Index ${i + 1} Downloaded_*`,
           });
         }
       }
     } catch (error) {
       await message.error(
         `${error}\n\ncommand: tgs`,
         error,
         "*_Error Sending telegram stickers!!!_*"
       );
     }
   }
 );
 smd(
   {
     pattern: "snack",
     desc: "Downloads Snack videos.",
     category: "downloader",
     filename: __filename,
     use: "<snack video url>",
   },
   async (message, url) => {
     try {
       if (!url) {
         return await message.reply("*Please provide a Snack video URL.*");
       }
 
       const apiUrl = `https://api.maher-zubair.tech/download/snack?url=${encodeURIComponent(
         url
       )}`;
       const response = await fetchJson(apiUrl);
 
       if (response.status !== 200) {
         return await message.reply(`*Error: ${response.result}*`);
       }
 
       const { caption, url: videoUrl } = response.result;
       await message.send(videoUrl, { caption }, "video", message);
     } catch (error) {
       console.error(error);
       await message.reply("*An error occurred while downloading the video.*");
     }
   }
 );
 smd(
   {
     pattern: "wikimedia",
     desc: "Downloads wikimedia images.",
     category: "downloader",
     filename: __filename,
     use: "<text|search.>",
   },
   async (m, query) => {
     try {
       if (!query) {
         return await m.send("*_Please Give me search query!_*");
       }
 
       const { wikimedia } = require("../lib");
       const results = (await wikimedia(query)) || [];
 
       if (!results || !results[0]) {
         return await m.send("*_No Results Found!_*");
       }
 
       const maxResults =
         m.iscreator && query.split("|")[1] === "all"
           ? results.length
           : results.length > 5
           ? 5
           : results.length;
 
       for (let i = 0; i < maxResults; i++) {
         try {
           m.bot.sendFromUrl(
             m.from,
             results[i].image,
             `Title: ${results[i].title}\n*Source:* ${results[i].source}`,
             m,
             {},
             "image"
           );
         } catch {}
       }
     } catch (e) {
       await m.error(`${e}\n\ncommand: insta`, e);
     }
   }
 );
 smd(
   {
     pattern: "facebook",
     alias: ["fb", "fbdl"],
     desc: "Downloads Facebook videos.",
     category: "downloader",
     filename: __filename,
     use: "<add Facebook URL>",
   },
   async (message, input) => {
     try {
       let query = input.split(" ")[0].trim();
       if (!query || !query.startsWith("https://")) {
         return await message.send(
           "*_Please provide a valid Facebook Video URL._*\n*Example: " +
             prefix +
             "fb https://www.facebook.com/watch/?v=2018727118289093_*"
         );
       }
       let video = await astroJson(
         "https://api-smd.onrender.com/api/fbdown?url=" + query
       );
       if (!video || !video.status) {
         return await message.reply("*Invalid Video URL!*");
       }
       return await message.bot.sendMessage(
         message.chat,
         {
           video: {
             url: video.result.Normal_video, // Assuming you want the normal quality video
           },
           caption: Config.caption,
         },
         {
           quoted: message,
         }
       );
     } catch (error) {
       await message.error(
         error + "\n\nCommand: facebook",
         error,
         "*_Video not found!_*"
       );
     }
   }
 );
 smd(
   {
     pattern: "facebook2",
     alias: ["fbhd"],
     desc: "Downloads Facebook videos in HD.",
     category: "downloader",
     filename: __filename,
     use: "<add Facebook URL>",
   },
   async (message, input) => {
     try {
       let query = input.split(" ")[0].trim();
       if (!query || !query.startsWith("https://")) {
         return await message.send(
           "*_Please provide a valid Facebook Video URL._*\n*Example: " +
             prefix +
             "fb https://www.facebook.com/watch/?v=2018727118289093_*"
         );
       }
       let video = await astroJson(
         "https://api-smd.onrender.com/api/fbdown?url=" + query
       );
       if (!video || !video.status) {
         return await message.reply("*Invalid Video URL!*");
       }
       return await message.bot.sendMessage(
         message.chat,
         {
           video: {
             url: video.result.HD, // Assuming you want the HD quality video
           },
           caption: Config.caption,
         },
         {
           quoted: message,
         }
       );
     } catch (error) {
       await message.error(
         error + "\n\nCommand: facebook",
         error,
         "*_Video not found!_*"
       );
     }
   }
 );
 smd({
   pattern: "apk",
   alias: ["modapk"],
   desc: "Downloads apks  .",
   category: "downloader",
   filename: __filename,
   use: "<add sticker url.>"
 }, async (_0x7b09ff, _0x4af114) => {
   try {
     if (!_0x4af114) {
       return _0x7b09ff.reply("*_Uhh dear, Give me App Name!_*");
     }
     let _0x468cc8 = await search(_0x4af114);
     let _0x538b40 = {};
     if (_0x468cc8.length) {
       _0x538b40 = await download(_0x468cc8[0].id);
     } else {
       return _0x7b09ff.reply("*_Apk not found, Try another name!!_*");
     }
     const _0x48bc12 = parseInt(_0x538b40.size);
     if (_0x48bc12 > 200) {
       return _0x7b09ff.reply("❌ File size bigger than 200mb.");
     }
     const _0x31321c = _0x538b40.dllink;
     let _0x24f726 = await fancytext("『 *ᗩᑭᏦ  ᗞᝪᗯᑎしᝪᗩᗞᗴᖇ* 』\n\n*APP Name :* " + _0x538b40.name + "\n*App Id :* " + _0x538b40.package + "\n*Last Up :* " + _0x538b40.lastup + "\n*App Size :* " + _0x538b40.size + "\n\n\n " + Config.caption, 25);
     const _0x3e266b = (_0x538b40?.name || "Downloader") + ".apk";
     const _0x585f79 = "temp/" + _0x3e266b;
     let _0x533c85 = await _0x7b09ff.reply(_0x538b40.icon, {
       caption: _0x24f726
     }, "img", _0x7b09ff);
     axios.get(_0x31321c, {
       responseType: "stream"
     }).then(_0x3cdb1d => {
       const _0x406256 = fs.createWriteStream(_0x585f79);
       _0x3cdb1d.data.pipe(_0x406256);
       return new Promise((_0xd7f976, _0x27915) => {
         _0x406256.on("finish", _0xd7f976);
         _0x406256.on("error", _0x27915);
       });
     }).then(() => {
       let _0x389371 = {
         document: fs.readFileSync(_0x585f79),
         mimetype: "application/vnd.android.package-archive",
         fileName: _0x3e266b
       };
       _0x7b09ff.bot.sendMessage(_0x7b09ff.jid, _0x389371, {
         quoted: _0x533c85
       });
       try {
         fs.unlink(_0x585f79);
       } catch {}
     }).catch(_0x2490b5 => {
       try {
         fs.unlink(_0x585f79);
       } catch {}
       ;
       _0x7b09ff.reply("*_Apk not Found, Sorry_*");
     });
   } catch (_0x4540ef) {
     await _0x7b09ff.error(_0x4540ef + "\n\ncommand: apk", _0x4540ef, "*_Apk not Found!_*");
   }
 });
 cmd({
   pattern: "apks",
   alias: ["apksearch"],
   desc: "Search App",
   category: "downloader",
   filename: __filename,
   use: "<Search Query>"
 }, async (_0x19d516, _0x1cb962) => {
   try {
     if (!_0x1cb962) {
       return await _0x19d516.reply("*_Uhh pLease, give me app name!_*");
     }
     const _0x4ac8f2 = await search(_0x1cb962);
     if (_0x4ac8f2.length) {
       let _0x3d85b = await download(_0x4ac8f2[0].id);
       let _0x307e6f = "*BLADE-MD-V2 • APK DOWNLOADER* \n*________________________________* \n\n*_Reply Any Number To Download._*\n_Results For : " + _0x1cb962 + "_ \n";
       for (let _0x5a5920 = 0; _0x5a5920 < _0x4ac8f2.length; _0x5a5920++) {
         _0x307e6f += "\n*" + (_0x5a5920 + 1) + " : " + _0x4ac8f2[_0x5a5920].name + "* \n*Id : " + _0x4ac8f2[_0x5a5920].id + "* \n";
       }
       return await _0x19d516.sendMessage(_0x19d516.chat, {
         image: {
           url: _0x3d85b.icon
         },
         caption: _0x307e6f
       }, {
         quoted: _0x19d516
       });
     } else {
       return _0x19d516.reply("*_APP not Found, Try Other Name_*");
     }
   } catch (_0xa7fd60) {
     _0x19d516.error(_0xa7fd60 + "\n\ncommand: apks", _0xa7fd60);
   }
 });
 smd(
   {
     pattern: "soundcloud",
     alias: ["scdl", "scdownload"],
     desc: "Download audio from SoundCloud.",
     category: "downloader",
     filename: __filename,
     use: "<SoundCloud audio URL>",
   },
   async (msg, query) => {
     try {
       const url = query.trim();
       if (!url) {
         return await msg.reply("*Please provide a SoundCloud audio URL.*");
       }
 
       const apiUrl = `https://api.maher-zubair.tech/download/soundcloud?url=${encodeURIComponent(
         url
       )}`;
       const response = await fetch(apiUrl).then((res) => res.json());
 
       if (!response || response.status !== 200) {
         return await msg.reply(
           "*An error occurred while downloading the SoundCloud audio.*"
         );
       }
 
       const result = response.result;
       const audioUrl = result.link;
       const thumbnailUrl = result.thumb;
       const title = result.title;
       const downloadCount = result.download_count;
 
       await msg.bot.sendAudio(
         msg.chat,
         audioUrl,
         title,
         downloadCount,
         thumbnailUrl,
         { quoted: msg }
       );
     } catch (err) {
       await msg.error(
         err + "\n\ncommand: soundcloud",
         err,
         "*An error occurred while downloading the SoundCloud audio.*"
       );
     }
   }
 );
 smd(
   {
     pattern: "gitclone",
     desc: "Downloads apks  .",
     category: "downloader",
     filename: __filename,
     use: "<add sticker url.>",
   },
   async (_0x1ae8f8, _0x1c586e) => {
     try {
       let _0x59e849 = _0x1c586e
         ? _0x1c586e
         : _0x1ae8f8.reply_message
         ? _0x1ae8f8.reply_message.text
         : "";
       if (!_0x1c586e) {
         return await _0x1ae8f8.reply(
           "*Provide Repo Url, _.gitclone https://github.com/Astropeda/Asta-Md_*"
         );
       }
       const _0x5906ab =
         /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
       if (!_0x5906ab.test(_0x1c586e)) {
         return await _0x1ae8f8.reply("*Provide Valid Repositry Url*");
       }
       let [_0x3b1b37, _0x2f1dcc, _0x83a6d7] = _0x1c586e.match(_0x5906ab) || [];
       _0x83a6d7 = _0x83a6d7.replace(/.git$/, "");
       let _0x3e5a6d =
         "https://api.github.com/repos/" +
         _0x2f1dcc +
         "/" +
         _0x83a6d7 +
         "/zipball";
       let _0x2cb6ba = (
         await fetch(_0x3e5a6d, {
           method: "HEAD",
         })
       ).headers
         .get("content-disposition")
         .match(/attachment; filename=(.*)/)[1];
       await _0x1ae8f8.bot.sendMessage(_0x1ae8f8.jid, {
         document: {
           url: _0x3e5a6d,
         },
         fileName: _0x2cb6ba,
         mimetype: "application/zip",
       });
     } catch (_0x982fee) {
       return _0x1ae8f8.error(
         _0x982fee + "\n\ncommand: gitclone",
         _0x982fee,
         "*_File not found!!!_*"
       );
     }
   }
 );
 const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
 smd({
   pattern: "tts",
   desc: "text to speech.",
   category: "downloader",
   filename: __filename,
   use: "<Hii,this is BLADE-MD-V2>"
 }, async (_0x55aba2, _0x56da6b) => {
   try {
     let _0x204f81 = _0x55aba2.reply_text ? _0x55aba2.reply_text : _0x56da6b;
     if (!_0x204f81) {
       return _0x55aba2.reply("*_Example : .tts Hi,I am BLADE-MD-V2 whatsapp bot._*");
     }
     try {
       let _0x1974d5 = _0x56da6b ? _0x56da6b.split(" ")[0].toLowerCase() : "en";
       const _0x18d003 = googleTTS.getAudioUrl(_0x204f81, {
         lang: _0x1974d5,
         slow: true,
         host: "https://translate.google.com"
       });
       await _0x55aba2.bot.sendMessage(_0x55aba2.jid, {
         audio: {
           url: _0x18d003
         },
         mimetype: "audio/mpeg",
         ptt: true,
         fileName: "BLADE-MD-V2-tts.m4a"
       }, {
         quoted: _0x55aba2
       });
     } catch (_0x3537cb) {
       const _0x5596bc = googleTTS.getAudioUrl(_0x204f81, {
         lang: "en",
         slow: true,
         host: "https://translate.google.com"
       });
       await _0x55aba2.bot.sendMessage(_0x55aba2.jid, {
         audio: {
           url: _0x5596bc
         },
         mimetype: "audio/mpeg",
         ptt: true,
         fileName: "BLADE-MD-V2-tts.m4a"
       }, {
         quoted: _0x55aba2
       });
     }
   } catch (_0x1313db) {
     return _0x55aba2.error(_0x1313db + "\n\ncommand: tts", _0x1313db, false);
   }
 });
 smd({
   pattern: "downmp4",
   alias: ["mp4down", "mp4fromurl"],
   desc: "download mp4 from url.",
   category: "downloader",
   use: "<url>",
   filename: __filename
 }, async (_0x272f8d, _0x3c482f) => {
   try {
     let _0x53783b = ("" + (_0x3c482f ? _0x3c482f : _0x272f8d.reply_text)).split(" ")[0].toLowerCase().trim();
     if (!_0x53783b || !_0x53783b.toLowerCase().startsWith("http")) {
       return _0x272f8d.reply("*_Give me Video Link, " + prefix + "downmp4 https://telegra.ph/file/d90855d13352c8aae3981.mp4_*");
     }
     var _0x1e4a34 = _0x3c482f.toLowerCase().includes("doc") ? "document" : "video";
     await _0x272f8d.bot.sendMessage(_0x272f8d.chat, {
       [_0x1e4a34]: {
         url: _0x53783b
       },
       caption: "*HERE WE GO*",
       contextInfo: {
         ...(await _0x272f8d.bot.contextInfo(Config.botname, _0x272f8d.senderName))
       }
     }, {
       quoted: _0x272f8d
     });
   } catch (_0x2306b6) {
     await _0x272f8d.error(_0x2306b6 + "\n\ncommand : downmp4", _0x2306b6, "*_Please, Give me valid video url!_*");
   }
 });
 smd(
   {
     pattern: "video2",
     desc: "Downloads video from YouTube using yt-search.",
     category: "downloader",
     filename: __filename,
     use: "<video title or URL>",
   },
   async (message, query) => {
     try {
       const input = query || message.reply_text;
       if (!input) {
         return message.reply(`*Use: ${prefix}video2 <video title or URL>*`);
       }
 
       const videoUrl =
         ytIdRegex.exec(input) || (await getVideoUrl(input)).videos[0].url;
       if (!videoUrl) {
         return message.reply("*No video found!*");
       }
 
       const info = await yt.getInfo(ytIdRegex.exec(videoUrl)[1]);
       const fileType = info.duration >= videotime ? "document" : "video";
       const downloadOptions = {
         type: "video",
         quality: info.pref_Quality || "best",
         format: "mp4",
       };
 
       const videoPath = await yt.download(
         ytIdRegex.exec(videoUrl)[1],
         downloadOptions
       );
       const videoTitle = info.title || ytIdRegex.exec(videoUrl)[1];
       const contextInfo = await message.bot.contextInfo(
         Config.botname,
         "VIDEO DOWNLOADER"
       );
 
       if (videoPath) {
         await message.bot.sendMessage(message.chat, {
           [fileType]: { url: videoPath },
           fileName: videoTitle,
           caption: Config.caption,
           mimetype: "video/mp4",
           contextInfo,
         });
         fs.unlinkSync(videoPath);
       } else {
         message.send("*Video not found!*");
       }
     } catch (error) {
       console.error("Video download error:", error);
       message.error(
         `${error}\n\ncommand: video2`,
         error,
         "*_Video not found_*"
       );
     }
   }
 );
 
 async function getVideoUrl(query) {
   try {
     const searchResults = await yts(query);
     if (searchResults.videos.length > 0) {
       return searchResults.videos[0].url;
     }
   } catch (error) {
     console.error("Video search error:", error);
   }
   return false;
 }
 smd({
   pattern: "gana",
   alias: ["playy"],
   desc: "Sends info about the query(of youtube video/audio).",
   category: "downloader",
   filename: __filename,
   use: "<faded-Alan walker.>"
 }, async (_0x54463e, _0x1f76d0) => {
   try {
     let _0x25d045 = _0x1f76d0 ? _0x1f76d0 : _0x54463e.reply_text;
     var _0x2e913a = _0x25d045.toLowerCase().includes("doc") ? "document" : "audio";
     if (!_0x25d045) {
       return _0x54463e.reply("*" + prefix + "play back in black*");
     }
     let _0x2eca3d = ytIdRegex.exec(_0x25d045) || [];
     let _0xb6fd2d = _0x2eca3d[0] || false;
     if (!_0xb6fd2d) {
       let _0x4bcf6d = await yts(_0x25d045);
       let _0xa244ed = _0x4bcf6d.videos[0];
       _0xb6fd2d = _0xa244ed.url;
     }
     _0x2eca3d = ytIdRegex.exec(_0xb6fd2d) || [];
     let _0x6845ab = await yt.getInfo(_0x2eca3d[1]);
     let _0x516e89 = _0x6845ab.title || _0x37323e || _0x2eca3d[1];
     if (_0x6845ab && _0x6845ab.duration >= videotime) {
       return await _0x54463e.reply("*_Can't dowanload, file duration too big_*");
     }
     await _0x54463e.send("_Downloading " + _0x6845ab.title + "?_");
     let _0x37323e = await yt.download(_0x2eca3d[1], {
       type: "audio",
       quality: "best"
     });
     var _0x28302f = {
       ...(await _0x54463e.bot.contextInfo(Config.botname, "ꜱᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ"))
     };
     if (_0x37323e) {
       await _0x54463e.bot.sendMessage(_0x54463e.jid, {
         [_0x2e913a]: {
           url: _0x37323e
         },
         fileName: _0x516e89,
         mimetype: "audio/mpeg",
         contextInfo: _0x28302f
       });
     } else {
       _0x54463e.send("*_Video not Found_*");
     }
     try {
       fs.unlinkSync(_0x37323e);
     } catch {}
   } catch (_0x593953) {
     return _0x54463e.error(_0x593953 + "\n\ncommand: play", _0x593953, "*_Video not Found_*");
   }
 });
 smd({
   pattern: "sound",
   desc: "Downloads ringtone.",
   category: "downloader",
   filename: __filename,
   use: "<Dowanload Tiktok Sounds>"
 }, async (_0x2ee3dd, _0x20a520) => {
   try {
     if (!_0x20a520) {
       return _0x2ee3dd.reply("*Give A Number Example: " + prefix + "sound 5*");
     }
     const _0x19c223 = parseInt(_0x20a520);
     if (_0x19c223.toString() == "NaN" || _0x19c223 < 1 || _0x19c223 > 160) {
       return _0x2ee3dd.reply("*_❌ Give a number between 1 to 160_*");
     }
     let _0xf0331a = "https://github.com/Itxxwasi/Tiktokmusic-API/raw/master/tiktokmusic/sound" + _0x19c223.toString() + ".mp3";
     let _0x2ba501 = await getBuffer(_0xf0331a);
     var _0x29fdd9 = {
       ...(await _0x2ee3dd.bot.contextInfo(Config.botname, "ᴛɪᴋᴛᴏᴋ ꜱᴏᴜɴᴅ " + _0x19c223))
     };
     let _0x4737bb = {
       audio: _0x2ba501,
       fileName: "BLADE-MD-V2 tiktok Sound" + _0x19c223 + ".m4a",
       mimetype: "audio/mpeg",
       ptt: true,
       contextInfo: _0x29fdd9
     };
     return _0x2ee3dd.bot.sendMessage(_0x2ee3dd.chat, _0x4737bb, {
       quoted: _0x2ee3dd
     });
   } catch (_0x223ebb) {
     return _0x2ee3dd.error(_0x223ebb + "\n\ncommand: sound", _0x223ebb, false);
   }
 });
 smd(
   {
     pattern: "tiktok",
     alias: ["tt", "ttdl"],
     desc: "Downloads Tiktok Videos Via Url.",
     category: "downloader",
     filename: __filename,
     use: "<add tiktok url.>",
   },
   async (message, url) => {
     try {
       const fileType = url.toLowerCase().includes("doc")
         ? "document"
         : url.toLowerCase().includes("mp3")
         ? "audio"
         : "video";
 
       if (!url) {
         return await message.reply(
           `*Uhh Please, Provide me tiktok Video Url*\n*_Ex ${prefix}tiktok https://www.tiktok.com/@dakwahmuezza/video/7150544062221749531_*`
         );
       }
 
       const tiktokUrl = url ? url.split(" ")[0] : "";
 
       if (!/tiktok/.test(tiktokUrl)) {
         return await message.reply(
           "*Uhh Please, Give me Valid Tiktok Video Url!*"
         );
       }
 
       const apiUrl = "https://api-smd.onrender.com/api/ttdl2";
       const response = await fetch(`${apiUrl}?url=${tiktokUrl}`);
       const data = await response.json();
 
       if (data && data.video && data.video.noWatermark) {
         return await message.send(
           data.video.noWatermark,
           { caption: Config.caption },
           fileType,
           message
         );
       } else {
         return await message.reply("Error While Downloading Your Video");
       }
     } catch (error) {
       return message.error(`${error}\n\ncommand: tiktok`, error);
     }
   }
 );
 smd(
   {
     pattern: "tiktok2",
     desc: "Downloads Tiktok Videos Via Url.",
     category: "downloader",
     filename: __filename,
     use: "<add tiktok url.>",
   },
   async (message, url) => {
     try {
       if (!url) {
         return await message.reply(
           `*Uhh Please, Provide me tiktok Video Url*\n*_Ex ${prefix}tiktok https://www.tiktok.com/@dakwahmuezza/video/7150544062221749531_*`
         );
       }
 
       const tiktokUrl = url.split(" ")[0];
       if (!/tiktok/.test(tiktokUrl)) {
         return await message.reply(
           "*Uhh Please, Give me Valid Tiktok Video Url!*"
         );
       }
 
       const apiUrl = `https://api.maher-zubair.tech/download/tiktok?url=${encodeURIComponent(
         tiktokUrl
       )}`;
       const response = await fetchJson(apiUrl);
 
       if (response.status !== 200) {
         return await message.reply(`*Error: ${response.result}*`);
       }
 
       const videoUrl = response.result;
       const fileType = videoUrl.toLowerCase().includes("mp4")
         ? "video"
         : "document";
 
       await message.send(
         videoUrl,
         { caption: Config.caption },
         fileType,
         message
       );
     } catch (error) {
       console.error(error);
       return message.error(`${error}\n\ncommand: tiktok`, error);
     }
   }
 );
 smd({
   pattern: "ringtone",
   desc: "Downloads ringtone.",
   category: "downloader",
   filename: __filename,
   use: "<ringtone name>"
 }, async (_0x1da3da, _0x2f0451) => {
   try {
     if (!_0x2f0451) {
       return _0x1da3da.reply("Example: " + prefix + "ringtone back in black");
     }
     const {
       ringtone: _0x2ec04e
     } = require("../lib/scraper");
     let _0x5f35d4 = await _0x2ec04e(_0x2f0451);
     var _0x2e165b = {
       ...(await _0x1da3da.bot.contextInfo(Config.botname, "ʀɪɴɢᴛᴏɴᴇ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ"))
     };
     let _0x5c9751 = {
       audio: {
         url: _0x5f35d4[0].audio
       },
       caption: "*" + _0x5f35d4[0].title + "*",
       fileName: _0x5f35d4[0].title + ".mp3",
       mimetype: "audio/mpeg",
       contextInfo: _0x2e165b
     };
     return _0x1da3da.bot.sendMessage(_0x1da3da.jid, _0x5c9751, {
       quoted: _0x1da3da
     });
   } catch (_0x430a86) {
     return _0x1da3da.error(_0x430a86 + "\n\ncommand: ringtone", _0x430a86, "*_Ringtone not found with given name!!_*");
   }
 });
 smd(
   {
     pattern: "pinterest",
     desc: "Downloads images from Pinterest.",
     category: "downloader",
     filename: __filename,
     use: "<text|image name>",
   },
   async (m, query) => {
     try {
       if (!query) {
         return m.reply("What picture are you looking for?");
       }
 
       const apiUrl = `https://api.maher-zubair.tech/search/pinterest?q=${encodeURIComponent(
         query
       )}`;
       const response = await fetch(apiUrl);
 
       if (!response.ok) {
         return m.reply(`*_Error: ${response.status} ${response.statusText}_*`);
       }
 
       const data = await response.json();
       const results = data.result;
 
       if (!results || !results.length) {
         return await m.send("*_No Result found!_*");
       }
 
       const contextInfo = {
         ...(await m.bot.contextInfo(Config.botname, "ᴘɪɴᴛᴇʀᴇꜱᴛ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ")),
       };
 
       const maxResults = results.length < 5 ? results.length : 5;
       for (let i = 0; i < maxResults; i++) {
         await m.bot.sendMessage(m.chat, {
           image: { url: results[i] },
           contextInfo,
         });
       }
     } catch (e) {
       return m.reply("Uhh Please, Give me a Name. Ex .pintrest apple");
     }
   }
 );
 smd(
   {
     pattern: "mediafire",
     alias: ["mf", "mfire"],
     desc: "Downloads media from Mediafire.",
     category: "downloader",
     filename: __filename,
     use: "<url of mediafire>",
   },
   async (m, url) => {
     try {
       if (!url || !url.includes("mediafire.com")) {
         return m.reply(
           `*_Provide mediafire url, Use: ${prefix}mf https://www.mediafire.com/file/i33wo2xvgvid05m/muezzaverse_2221749531_musicaldown.com.mp4/file!_*`
         );
       }
 
       const apiUrl = `https://api.maher-zubair.tech/download/mediafire?url=${encodeURIComponent(
         url
       )}`;
       const response = await fetch(apiUrl);
 
       if (!response.ok) {
         return m.reply(`*_Error: ${response.status} ${response.statusText}_*`);
       }
 
       const data = await response.json();
       const result = data.result;
 
       if (!result || !result.link) {
         return m.reply("*_Could not find the file!_*");
       }
 
       const caption = `『 *BLADE-MD-V2 • MEDIAFIRE DOWNLOADER* 』\n\n *Name* : ${result.name}\n *Size* : ${result.size}\n *Mime* : ${result.mime}\n\n\n${Config.caption}`;
       const fancyCaption = await fancytext(caption, 25);
       const contextInfo = {
         ...(await m.bot.contextInfo(Config.botname, "MEDIAFIRE")),
       };
 
       const mediaInfo = {
         document: {
           url: result.link,
         },
         caption: fancyCaption,
         fileName: result.name,
         mimetype: result.mime,
         contextInfo: contextInfo,
       };
 
       await m.bot.sendMessage(m.chat, mediaInfo);
     } catch (e) {
       m.error(`${e}\n\ncommand: mediafire`, e, "*_File not found!!_*");
     }
   }
 );
 smd({
   pattern: "play",
   alias: ["audio","song"],
   desc: "Downloads audio from youtube.",
   category: "downloader",
   filename: __filename,
   use: "<give text>"
 }, async (_0x2c2023, _0x4ec99f) => {
   try {
     if (!_0x4ec99f) {
       return await _0x2c2023.reply("*_Give Me Search Query_*");
     }
     let _0x3b2ca6 = await yts(_0x4ec99f);
     let _0x4123ae = _0x3b2ca6.all[0];
     let _0x5883a9 = "\t *BLADE-MD-V2 • SONG DOWNLOADER*   \n\n*Title :* " + _0x4123ae.title + "\nUrl : " + _0x4123ae.url + "\n*Description :* " + _0x4123ae.timestamp + "\n*Views :* " + _0x4123ae.views + "\n*Uploaded :* " + _0x4123ae.ago + "\n*Author :* " + _0x4123ae.author.name + "\n\n\n_Reply 1 To Video_ Or _1 document_\n_Reply 2 To Audio_ Or _2 document_";
     let _0x3885cc = await smdBuffer(_0x4123ae.thumbnail);
     var _0x44a363 = {
       ...(await _0x2c2023.bot.contextInfo(Config.botname, "ʏᴏᴜᴛᴜʙᴇ ꜱᴏɴɢ", _0x3885cc))
     };
     await _0x2c2023.bot.sendMessage(_0x2c2023.jid, {
       image: _0x3885cc,
       caption: _0x5883a9,
       contextInfo: _0x44a363
     });
   } catch (_0x86b411) {
     return _0x2c2023.error(_0x86b411 + "\n\ncommand: mediafire", _0x86b411, "*_File not found!!_*");
   }
 });
 cmd({
   pattern: "yts",
   alias: ["yt", "ytsearch"],
   desc: "Search Song From youtube",
   category: "downloader",
   filename: __filename,
   use: "<Yt Search Query>"
 }, async (_0x1c8285, _0xca939c) => {
   try {
     if (!_0xca939c) {
       return await _0x1c8285.reply("*_Give Me Search Query!_*");
     }
     let _0x2878ec = await yts(_0xca939c);
     let _0x4186e4 = "*BLADE-MD-V2 • YOUTUBE DOWNLOADER* \n*_______________________________* \n\n_Reply Any Number To Download._\n  _For Audio: 1 mp3._\n  _For Video: 1 video._\n  _For document: 1 document._\n\n_Results For : " + _0xca939c + "_ \n\n";
     let _0x463366 = 1;
     for (let _0x308e22 of _0x2878ec.all) {
       _0x4186e4 += " \n*" + _0x463366++ + " : " + _0x308e22.title + (_0x308e22.timestamp ? "(" + _0x308e22.timestamp + ")" : "") + "*\n*Url : " + _0x308e22.url + "*";
     }
     return await _0x1c8285.sendMessage(_0x1c8285.chat, {
       image: {
         url: _0x2878ec.all[0].thumbnail
       },
       caption: _0x4186e4
     }, {
       quoted: _0x1c8285
     });
   } catch (_0x5089b0) {}
 });
 smd({
   pattern: "ytmp4",
   alias: ["ytv", "ytvid", "ytvideo"],
   desc: "Downloads video from youtube.",
   category: "downloader",
   filename: __filename,
   use: "<yt video url>"
 }, async (_0x1d4717, _0x3716fd) => {
   let _0x2d4f04 = _0x3716fd ? _0x3716fd : _0x1d4717.reply_text;
   var _0x58ceb6 = _0x2d4f04.toLowerCase().includes("doc") ? "document" : _0x2d4f04.toLowerCase().includes("mp3") ? "audio" : "video";
   const _0x4a3f32 = ytIdRegex.exec(_0x2d4f04) || [];
   if (!_0x2d4f04 || !_0x4a3f32[0]) {
     return await _0x1d4717.reply("*_provide youtube video url!_*");
   }
   try {
     let _0x5c93a9 = await ytdl.getInfo(_0x4a3f32[0]);
     if (_0x5c93a9.videoDetails.lengthSeconds >= videotime) {
       _0x58ceb6 = "document";
     }
     let _0x1a3a4c = _0x5c93a9.videoDetails.title;
     let _0x1c86b6 = "./temp/" + _0x4a3f32[1] + ".mp4";
     const _0x1f15ef = ytdl(_0x4a3f32[0], {
       filter: _0x4c0ea7 => _0x4c0ea7.itag == 22 || _0x4c0ea7.itag == 18
     }).pipe(fs.createWriteStream(_0x1c86b6));
     await new Promise((_0x517788, _0x429bfa) => {
       _0x1f15ef.on("error", _0x429bfa);
       _0x1f15ef.on("finish", _0x517788);
     });
     var _0x3b1bff = {
       ...(await _0x1d4717.bot.contextInfo(Config.botname, "ʏᴛᴅʟ ᴠɪᴅᴇᴏ"))
     };
     let _0x4d676e = {
       [_0x58ceb6]: fs.readFileSync(_0x1c86b6),
       mimetype: "video/mp4",
       fileName: _0x1a3a4c,
       caption: "  *Here's Your Video*\n" + Config.caption,
       contextInfo: _0x3b1bff
     };
     await _0x1d4717.bot.sendMessage(_0x1d4717.jid, _0x4d676e, {
       quoted: _0x1d4717
     });
     try {
       return await fs.unlinkSync(_0x1c86b6);
     } catch {}
   } catch (_0x15d510) {
     console.log("here now,ytdl-core error: ", _0x15d510);
     try {
       let _0x5a46ec = await yt.getInfo(_0x4a3f32[1]);
       let _0x257939 = {
         type: "video",
         quality: _0x5a46ec.pref_Quality || "best",
         format: "mp4"
       };
       if (_0x5a46ec.duration >= videotime) {
         _0x58ceb6 = "document";
       }
       let _0x588c42 = await yt.download(_0x4a3f32[1], _0x257939);
       var _0x3b1bff = {
         ...(await _0x1d4717.bot.contextInfo(Config.botname, "ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏ"))
       };
       let _0x13be6f = _0x5a46ec.title || _0x588c42 || _0x4a3f32[1];
       if (_0x588c42) {
         await _0x1d4717.bot.sendMessage(_0x1d4717.chat, {
           [_0x58ceb6]: {
             url: _0x588c42
           },
           fileName: _0x13be6f,
           mimetype: "video/mp4",
           contextInfo: _0x3b1bff
         });
       } else {
         await _0x1d4717.send("*_Video not Found_*");
       }
       try {
         fs.unlinkSync("" + _0x588c42);
       } catch {}
       return;
     } catch (_0x363775) {
       return _0x1d4717.error(_0x363775 + "\n\ncommand: ytmp4", _0x363775, "*_Uhh dear, Video not Found!!_*");
     }
   }
 });
 smd({ pattern: "threads", category: "downloader", filename: __filename, desc: "Download media from Threads." }, async (m, text) => {
   try {
     if (!text) return await m.send("*_Please provide a Threads link_*");
 
     let apiUrl = `https://api.maher-zubair.tech/download/threads?url=${text}`;
     let response = await fetch(apiUrl);
     let jsonResponse = await response.json();
 
     if (jsonResponse.status === 200) {
       let result = jsonResponse.result;
       let imageUrls = result.image_urls;
       let videoUrls = result.video_urls;
 
       if (imageUrls.length > 0) {
         for (let imageUrl of imageUrls) {
           await m.send(imageUrl, { caption: Config.caption }, "image", m);
         }
       }
 
       if (videoUrls.length > 0) {
         for (let videoUrl of videoUrls) {
           await m.send(videoUrl, { caption: Config.caption }, "video", m);
         }
       }
     } else {
       await m.send("*_Request not be preceed!!_*");
     }
   } catch (error) {
     await m.error(error + "\n\ncommand: threads", error, "*_No responce from API, Sorry!!_*");
   }
 });
 smd({ pattern: "instagram", category: "downloader", filename: __filename, desc: "Download Instagram media." }, async (m, text) => {
   try {
     if (!text) return await m.send("*_Please provide an Instagram link_*");
 
     let apiUrl = `https://api.maher-zubair.tech/download/instagram?url=${text}`;
     let response = await fetch(apiUrl);
     let jsonResponse = await response.json();
 
     if (jsonResponse.status === 200) {
       let result = jsonResponse.result[0];
       await m.send(result.url, { caption: Config.caption }, "image", m);
     } else {
       await m.send("*_Request not be preceed!!_*");
     }
   } catch (error) {
     await m.error(error + "\n\ncommand: instagram", error, "*_No responce from API, Sorry!!_*");
   }
 });
 smd({
   pattern: "ytmp3",
   alias: ["yta","music"],
   desc: "Downloads audio by yt link.",
   category: "downloader",
   use: "<yt video url>"
 }, async (_0x3f8930, _0x5834bb) => {
   let _0x4fe91c = _0x5834bb ? _0x5834bb : _0x3f8930.reply_text;
   var _0x540f68 = _0x4fe91c.toLowerCase().includes("doc") ? "document" : "audio";
   const _0x2758ec = ytIdRegex.exec(_0x4fe91c) || [];
   if (!_0x4fe91c || !_0x2758ec[0]) {
     return await _0x3f8930.reply("*_Uhh please, Provide youtube video url!_*");
   }
   try {
     let _0x4b5067 = await ytdl.getInfo(_0x2758ec[0]);
     if (_0x4b5067.videoDetails.lengthSeconds >= videotime) {
       _0x540f68 = "document";
     }
     let _0xaca4bd = _0x4b5067.videoDetails.title;
     let _0x24816a = "./temp/" + _0x2758ec[1] + ".mp3";
     const _0x2591f0 = ytdl(_0x2758ec[0], {
       filter: _0x4e89f2 => _0x4e89f2.audioBitrate == 160 || _0x4e89f2.audioBitrate == 128
     }).pipe(fs.createWriteStream(_0x24816a));
     await new Promise((_0x401b5b, _0x3d90fd) => {
       _0x2591f0.on("error", _0x3d90fd);
       _0x2591f0.on("finish", _0x401b5b);
     });
     var _0x29af08 = {
       ...(await _0x3f8930.bot.contextInfo(Config.botname, "ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏ"))
     };
     let _0x4c646c = {
       [_0x540f68]: fs.readFileSync(_0x24816a),
       mimetype: "audio/mpeg",
       fileName: _0xaca4bd,
       contextInfo: _0x29af08
     };
     await _0x3f8930.bot.sendMessage(_0x3f8930.jid, _0x4c646c, {
       quoted: _0x3f8930
     });
     try {
       return await fs.unlinkSync(_0x24816a);
     } catch {}
   } catch (_0x345ce7) {
     console.log("here now,ytdl-core : ", _0x345ce7);
     try {
       let _0x5b9011 = await yt.download(_0x2758ec[1], {
         type: "audio",
         quality: "best"
       });
       var _0x29af08 = {
         ...(await _0x3f8930.bot.contextInfo(Config.botname, "ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏ"))
       };
       if (_0x5b9011) {
         await _0x3f8930.bot.sendMessage(_0x3f8930.jid, {
           [_0x540f68]: {
             url: _0x5b9011
           },
           mimetype: "audio/mpeg",
           fileName: Config.caption,
           contextInfo: _0x29af08
         });
       } else {
         await _0x3f8930.send("*_audio not Found!_*");
       }
       try {
         fs.unlinkSync(_0x5b9011);
       } catch {}
     } catch (_0x2cd979) {
       await _0x3f8930.error(_0x2cd979 + "\n\ncommand: ytmp3", _0x2cd979, "*_Uhh dear, audio file not Found!!_*");
     }
   }
 });
 smd({
   pattern: "ytdoc",
   alias: ["ytd"],
   desc: "Downloads audio by yt link as document.",
   category: "downloader",
   use: "<ytdoc video url>"
 }, async (_0x17c662, _0x429696) => {
   try {
     let _0x5696a7 = _0x429696 ? _0x429696 : _0x17c662.reply_text;
     const _0x1d542b = ytIdRegex.exec(_0x5696a7) || [];
     if (!_0x5696a7 || !_0x1d542b[0]) {
       return await _0x17c662.reply("❌Please provide me a url");
     }
     var _0x43c5ac = _0x1d542b[1];
     var _0x59bbaa = false;
     try {
       let _0x32b31a = await ytdl.getInfo(_0x1d542b[0]);
       _0x43c5ac = _0x32b31a.videoDetails.title;
       let _0x4b47c3 = "./temp/Asta-Md " + _0x1d542b[1] + ".mp3";
       const _0x212389 = ytdl(_0x1d542b[0], {
         filter: _0xd2371a => _0xd2371a.audioBitrate == 160 || _0xd2371a.audioBitrate == 128
       }).pipe(fs.createWriteStream(_0x4b47c3));
       _0x59bbaa = _0x4b47c3;
       await new Promise((_0x1506ab, _0x26e243) => {
         _0x212389.on("error", _0x26e243);
         _0x212389.on("finish", _0x1506ab);
       });
     } catch (_0x18c033) {
       console.log("here now,ytdl-core : ", _0x18c033);
       try {
         _0x59bbaa = await yt.download(_0x1d542b[1], {
           type: "audio",
           quality: "best"
         });
       } catch (_0x4122cc) {
         return await _0x17c662.error(_0x4122cc + "\n\ncommand: ytdoc", _0x4122cc, "*_file not Found!!_*");
       }
     }
     if (!_0x59bbaa) {
       return await _0x17c662.send("*_Uhh dear, video not found_*");
     }
     var _0x10e2fa = {
       ...(await _0x17c662.bot.contextInfo(Config.botname, "ʏᴛᴅᴏᴄ ᴍᴘ3 ʏᴏᴜᴛᴜʙᴇ"))
     };
     let _0x300d1a = {
       document: {
         url: _0x59bbaa
       },
       mimetype: "audio/mpeg",
       fileName: "BLADE-MD-V2--" + _0x1d542b[1] + ".mp3",
       caption: Config.caption,
       contextInfo: _0x10e2fa
     };
     await _0x17c662.bot.sendMessage(_0x17c662.jid, _0x300d1a, {
       quoted: _0x17c662
     });
     try {
       return await fs.unlinkSync(_0x59bbaa);
     } catch {}
   } catch (_0xbed50) {
     await _0x17c662.error(_0xbed50 + "\n\ncommand: ytdoc", _0xbed50, "*_audio file not Found!!_*");
   }
 });
 cmd({
   on: "text"
 }, async (_0xb75e78, _0x221e78, {
   isCreator: _0xfbeec5
 }) => {
   if (_0xb75e78.quoted && _0xb75e78.text) {
     const _0x5b8ee5 = _0xb75e78.quoted.text.split("\n");
     if (_0x5b8ee5[0].includes("BLADE-MD-V2 • SONG DOWNLOADER")) {
       const _0x1724ba = _0x5b8ee5.find(_0x525632 => _0x525632.startsWith("Url :"));
       let _0x43a95e = _0x1724ba.replace("Url :", "").trim();
       try {
         await _0xb75e78.sendMessage(_0xb75e78.chat, {
           react: {
             text: "✨",
             key: _0xb75e78.key
           }
         });
         let _0x4cd3b2;
         if (_0xb75e78.text.startsWith("1")) {
           let _0x3edf2a = _0x221e78.toLowerCase().includes("doc") ? "document" : _0x221e78.toLowerCase().includes("mp3") ? "audio" : "video";
           _0x4cd3b2 = "./temp/ytsong.mp4";
           const _0x5e7871 = ytdl(_0x43a95e, {
             filter: _0x145c7e => _0x145c7e.itag == 22 || _0x145c7e.itag == 18
           }).pipe(fs.createWriteStream(_0x4cd3b2));
           await new Promise((_0x540130, _0xf6b8ae) => {
             _0x5e7871.on("error", _0xf6b8ae);
             _0x5e7871.on("finish", _0x540130);
           });
           await _0xb75e78.sendMessage(_0xb75e78.chat, {
             [_0x3edf2a]: fs.readFileSync(_0x4cd3b2),
             mimetype: _0x3edf2a == "audio" ? "audio/mpeg" : "video/mp4",
             fileName: Config.caption,
             caption: Config.caption
           }, {
             quoted: _0xb75e78
           });
         } else if (_0xb75e78.text.startsWith("2")) {
           let _0x5d9956 = _0x221e78.toLowerCase().includes("doc") ? "document" : "audio";
           _0x4cd3b2 = "./temp/ytsong.mp3";
           const _0x39ddb9 = ytdl(_0x43a95e, {
             filter: _0xa5f832 => _0xa5f832.audioBitrate == 160 || _0xa5f832.audioBitrate == 128
           }).pipe(fs.createWriteStream(_0x4cd3b2));
           await new Promise((_0x4790a8, _0x9a005b) => {
             _0x39ddb9.on("error", _0x9a005b);
             _0x39ddb9.on("finish", _0x4790a8);
           });
           await _0xb75e78.sendMessage(_0xb75e78.chat, {
             [_0x5d9956]: fs.readFileSync(_0x4cd3b2),
             mimetype: "audio/mpeg",
             fileName: Config.caption
           }, {
             quoted: _0xb75e78
           });
         }
         try {
           return fs.unlinkSync(_0x4cd3b2);
         } catch (_0x51cca7) {}
       } catch (_0x189dd8) {
         return await _0xb75e78.reply("Error While Downloading Video : " + _0x189dd8);
       }
     } else if (_0x5b8ee5[0].includes("BLADE-MD-V2 • YOUTUBE DOWNLOADER")) {
       let _0x307bb6 = "*" + _0xb75e78.text.split(" ")[0] + " : ";
       const _0x56275d = _0x5b8ee5.find(_0x3b5e74 => _0x3b5e74.startsWith(_0x307bb6));
       if (_0x56275d) {
         try {
           let _0x3e1826 = _0x56275d.replace(_0x307bb6, "").split("*")[0].trim();
           const _0x4d9213 = _0x5b8ee5[_0x5b8ee5.indexOf(_0x56275d) + 1];
           const _0x37a579 = _0x4d9213.split("*")[1].replace("Url : ", "").trim();
           if (_0x37a579.startsWith("http")) {
             await _0xb75e78.sendMessage(_0xb75e78.chat, {
               react: {
                 text: "✨",
                 key: _0xb75e78.key
               }
             });
             let _0x1d3325 = _0x221e78.toLowerCase().includes("doc") ? "document" : _0x221e78.toLowerCase().includes("mp3") ? "audio" : "video";
             let _0x26cc84 = "./temp/Yts Download " + Math.floor(Math.random() * 10000) + ".mp4";
             const _0x104b4c = ytdl(_0x37a579, {
               filter: _0x31a431 => _0x31a431.itag == 22 || _0x31a431.itag == 18
             }).pipe(fs.createWriteStream(_0x26cc84));
             await new Promise((_0x45b31c, _0x5b6595) => {
               _0x104b4c.on("error", _0x5b6595);
               _0x104b4c.on("finish", _0x45b31c);
             });
             await _0xb75e78.sendMessage(_0xb75e78.chat, {
               [_0x1d3325]: fs.readFileSync(_0x26cc84),
               mimetype: _0x1d3325 == "audio" ? "audio/mpeg" : "video/mp4",
               fileName: "" + _0x3e1826,
               caption: _0x3e1826 + " \n " + Config.caption
             }, {
               quoted: _0xb75e78
             });
             try {
               fs.unlink(_0x26cc84);
             } catch (_0x338800) {}
           }
         } catch (_0x3de0e2) {
           _0xb75e78.error(_0x3de0e2 + "\n\nCommand yts Listener", _0x3de0e2, "*Video Not Found!*");
         }
       }
     } else if (_0x5b8ee5[0].includes("BLADE-MD-V2 • APK DOWNLOAD LIST")) {
       let _0x35d668 = "*" + _0xb75e78.text.split(" ")[0] + " : ";
       const _0x205a5f = _0x5b8ee5.find(_0x304058 => _0x304058.startsWith(_0x35d668));
       if (_0x205a5f) {
         try {
           let _0x17567d = _0x205a5f.replace(_0x35d668, "").split("*")[0].trim();
           const _0x14618c = _0x5b8ee5[_0x5b8ee5.indexOf(_0x205a5f) + 1];
           const _0x2407a8 = _0x14618c.split("*")[1].replace("Id : ", "").trim();
           await _0xb75e78.sendMessage(_0xb75e78.chat, {
             react: {
               text: "✨",
               key: _0xb75e78.key
             }
           });
           let _0x37b3a4 = await download(_0x2407a8);
           let _0x478b37 = "*App Name :* " + _0x37b3a4.name;
           _0x478b37 += "\n*App id        :* " + _0x37b3a4.package;
           _0x478b37 += "\n*Last Up       :* " + _0x37b3a4.lastup;
           _0x478b37 += "\n*App Size     :* " + _0x37b3a4.size;
           _0x478b37 += "\n               \n" + Config.caption;
           let _0x5032aa = {
             document: {
               url: _0x37b3a4.dllink
             },
             mimetype: "application/vnd.android.package-archive",
             fileName: _0x37b3a4.name + ".apk",
             caption: _0x478b37
           };
           return await _0xb75e78.sendMessage(_0xb75e78.chat, _0x5032aa, {
             quoted: _0xb75e78
           });
         } catch (_0x12fd88) {
           _0xb75e78.reply("*_Can't Download, App Limit Exceed_*");
         }
       }
     }
   }
 });
 /** PLAYLIST */
 const _0xf3b3b9 = _0xc1f2;
 function _0xe8a3() {
   const _0x1872b6 = ["audio", "random", "length", ".mp4", "6710240SkWnCZ", "readFileSync", "Downloads video from playlist.", "<yt playlist url>", "title", "videos", "sendMessage", "2179701ijsDnM", "botname", "4565025fjxWjZ", "pushName", "168uBIxwJ", "document", "includes", "216vVeWdZ", "itag", "\n ⿻ File Size : ", "reply", "chat", "11410952QXDvWH", "mp3", " MB", "614495gBYQxj", "split", "toLowerCase", "floor", "downloader", "videoDetails", "audio/mpeg", "videoId", "This Process will take a bit time.", "2487090FcjOyi", "❌ File size bigger than ", "pipe", "statSync", "mb.", "test", "log", "lengthSeconds", "getInfo", "61665AJJjOP", "./temp/", "unlinkSync"];
   _0xe8a3 = function () {
     return _0x1872b6;
   };
   return _0xe8a3();
 }
 function _0xc1f2(_0x44febb, _0x412500) {
   const _0xe8a308 = _0xe8a3();
   _0xc1f2 = function (_0xc1f20d, _0x460a50) {
     _0xc1f20d = _0xc1f20d - 214;
     let _0x14f3b6 = _0xe8a308[_0xc1f20d];
     return _0x14f3b6;
   };
   return _0xc1f2(_0x44febb, _0x412500);
 }
 (function (_0x131f7c, _0x3f6081) {
   const _0x3b3c98 = _0xc1f2;
   const _0x165db2 = _0x131f7c();
   while (true) {
     try {
       const _0x538451 = -parseInt(_0x3b3c98(249)) / 1 + -parseInt(_0x3b3c98(258)) / 2 + parseInt(_0x3b3c98(236)) / 3 + -parseInt(_0x3b3c98(227)) / 4 + -parseInt(_0x3b3c98(220)) / 5 * (parseInt(_0x3b3c98(241)) / 6) + -parseInt(_0x3b3c98(246)) / 7 + -parseInt(_0x3b3c98(238)) / 8 * (-parseInt(_0x3b3c98(234)) / 9);
       if (_0x538451 === _0x3f6081) {
         break;
       } else {
         _0x165db2.push(_0x165db2.shift());
       }
     } catch (_0x1c3a5e) {
       _0x165db2.push(_0x165db2.shift());
     }
   }
 })(_0xe8a3, 997920);
 smd({
   pattern: "playlist",
   desc: _0xf3b3b9(229),
   category: _0xf3b3b9(253),
   filename: __filename,
   use: _0xf3b3b9(230)
 }, async (_0x1283e0, _0x45d2ef, {
   Void: _0xc34be3
 }) => {
   const _0x38a391 = _0xf3b3b9;
   try {
     var _0x5d6154 = 2000;
     var _0x1a03f5 = 400;
     var _0x3ef119 = _0x45d2ef[_0x38a391(251)]().includes("doc") ? "document" : _0x45d2ef[_0x38a391(251)]()[_0x38a391(240)](_0x38a391(247)) || _0x45d2ef[_0x38a391(251)]().includes(_0x38a391(223)) ? _0x38a391(223) : "video";
     const _0x5c2288 = _0x5202bc => {
       const _0x2d6457 = _0x38a391;
       return "" + Math[_0x2d6457(252)](Math[_0x2d6457(224)]() * 10000) + _0x5202bc;
     };
     if (!_0x45d2ef || !_0x45d2ef.includes("=") || !/http/gi[_0x38a391(216)](_0x45d2ef)) {
       return await _0x1283e0[_0x38a391(244)]("*Use Playlist URL, Like: " + prefix + "playlist https://www.youtube.com/playlist?list=PLZeei0S6_unh-jTeWsJI1mOI6snxeHn5c*");
     }
     let _0x1c2a7e = _0x45d2ef[_0x38a391(250)]("=")[1][_0x38a391(250)](" ")[0];
     console[_0x38a391(217)](_0x1c2a7e);
     var _0x20ebc9 = {
       listId: _0x1c2a7e
     };
     yts(_0x20ebc9, async function (_0x594f1f, _0x2548a3) {
       const _0x5c8996 = _0x38a391;
       if (_0x594f1f) {
         throw _0x594f1f;
       }
       _0x1283e0.reply(_0x5c8996(257));
       for (let _0x1492ac = 0; _0x1492ac < _0x2548a3[_0x5c8996(232)][_0x5c8996(225)]; _0x1492ac++) {
         if (_0x2548a3.videos[_0x1492ac][_0x5c8996(256)] === undefined) {
           continue;
         }
         let _0xdaf4e3 = _0x2548a3[_0x5c8996(232)][_0x1492ac][_0x5c8996(256)];
         try {
           let _0x48a6df = await ytdl[_0x5c8996(219)](_0xdaf4e3);
           if (_0x48a6df[_0x5c8996(254)][_0x5c8996(218)] >= _0x5d6154) {
             _0x3ef119 = "document";
           }
           let _0x5ec28d = _0x48a6df[_0x5c8996(254)][_0x5c8996(231)];
           let _0x1a85a9 = _0x5c2288(_0x5c8996(226));
           const _0x55ba81 = ytdl(_0xdaf4e3, {
             filter: _0x1df4a7 => _0x1df4a7.itag == 22 || _0x1df4a7[_0x5c8996(242)] == 18
           })[_0x5c8996(260)](fs.createWriteStream(_0x5c8996(221) + _0x1a85a9));
           await new Promise((_0x1e87e2, _0x352753) => {
             _0x55ba81.on("error", _0x352753);
             _0x55ba81.on("finish", _0x1e87e2);
           });
           let _0x5e17d6 = fs[_0x5c8996(214)](_0x5c8996(221) + _0x1a85a9);
           let _0x1e47e6 = _0x5e17d6.size;
           let _0x4a0671 = _0x1e47e6 / 1048576;
           if (_0x4a0671 <= _0x1a03f5) {
             let _0x3eab5e = {
               [_0x3ef119]: fs[_0x5c8996(228)](_0x5c8996(221) + _0x1a85a9),
               mimetype: _0x3ef119 == "audio" ? _0x5c8996(255) : "video/mp4",
               fileName: "" + _0x5ec28d,
               caption: _0x3ef119 == _0x5c8996(239) ? "" : " ⿻ Title : " + _0x5ec28d + _0x5c8996(243) + _0x4a0671 + _0x5c8996(248),
               headerType: 4,
               contextInfo: {
                 externalAdReply: {
                   title: Config[_0x5c8996(235)],
                   body: _0x1283e0[_0x5c8996(237)],
                   thumbnail: log0,
                   renderLargerThumbnail: true,
                   mediaType: 2,
                   mediaUrl: gurl,
                   sourceUrl: gurl
                 }
               }
             };
             _0xc34be3[_0x5c8996(233)](_0x1283e0[_0x5c8996(245)], _0x3eab5e, {
               quoted: _0x1283e0
             });
           } else {
             _0x1283e0[_0x5c8996(244)](_0x5c8996(259) + _0x1a03f5 + _0x5c8996(215));
           }
           try {
             fs[_0x5c8996(222)](_0x5c8996(221) + _0x1a85a9);
           } catch (_0x492195) {}
         } catch (_0x312da2) {
           console[_0x5c8996(217)](_0x312da2);
         }
       }
     });
   } catch (_0x4bcd8f) {
     console[_0x38a391(217)](_0x4bcd8f);
   }
 });
 /*
 cmd({
    cmdname :"downloader",
    type: "downloader",
 }
  */ffer,
  getBuffer,
  listall,
  prefix,
  smd,
  TelegraPh,
  Config
} = require("../lib");
async function generateSticker(_0x43a996, _0x5c979b, _0x116cae = {
  pack: Config.packname,
  author: Config.author
}, _0x5b1252 = true) {
  try {
    const {
      Sticker: _0x92981e,
      createSticker: _0x1a1a97,
      StickerTypes: _0x5f17c1
    } = require("wa-sticker-formatter");
    let _0x54c67c = new _0x92981e(_0x5c979b, {
      ..._0x116cae
    });
    return await _0x43a996.bot.sendMessage(_0x43a996.chat, {
      sticker: await _0x54c67c.toBuffer()
    }, {
      quoted: _0x43a996,
      messageId: _0x43a996.bot.messageId()
    });
  } catch (_0x32ee71) {
    if (_0x5b1252) {
      await _0x43a996.error(_0x32ee71 + "\n\nfileName: generateSticker->s.js\n");
    }
  }
}
let mtypes = ["imageMessage", "videoMessage", "stickerMessage"];
smd({
  cmdname: "sticker",
  alias: ["s"],
  info: "Makes sticker of replied image/video.",
  type: "sticker",
  filename: __filename,
  use: "<reply to any image/video.>"
}, async _0x5f0a63 => {
  try {
    let _0x4a2c9b = mtypes.includes(_0x5f0a63.mtype) ? _0x5f0a63 : _0x5f0a63.reply_message;
    if (_0x4a2c9b && mtypes.includes(_0x4a2c9b?.mtype || "need_Media")) {
      let _0x313fc1 = await _0x4a2c9b.download();
      let _0x37d0ee = {
        pack: Config.packname,
        author: Config.author,
        type: StickerTypes.FULL,
        quality: 10
      };
      await generateSticker(_0x5f0a63, _0x313fc1, _0x37d0ee);
      return _0x313fc1 = false;
    } else {
      return _0x5f0a63.reply("*_Uhh Dear, Reply to image/video!!_*");
    }
  } catch (_0xb1d121) {
    return await _0x5f0a63.error(_0xb1d121 + "\n\ncmdName: sticker\n");
  }
});
smd({
  cmdname: "take",
  info: "Makes sticker of replied image/video.",
  type: "sticker",
  filename: __filename,
  use: "<reply to sticker.>"
}, async (_0x471740, _0x3febcd) => {
  try {
    let _0xad98fb = _0x471740.reply_message;
    if (!_0xad98fb || _0xad98fb?.mtype != "stickerMessage") {
      return await _0x471740.reply("*Uhh Please, Reply to sticker*");
    }
    let _0x44d3dd = _0x3febcd.split("|");
    let _0x47c982 = _0x44d3dd[0]?.trim() !== "" ? _0x44d3dd[0] : _0x471740.pushName;
    let _0x20f704 = _0x44d3dd[1] && _0x44d3dd[1] !== "" ? _0x44d3dd[1] : "BLADE-MD-V2";
    let _0x3ab776 = await _0xad98fb.download();
    let _0x3d0871 = {
      pack: _0x47c982,
      author: _0x20f704,
      type: StickerTypes.FULL,
      quality: 10
    };
    await generateSticker(_0x471740, _0x3ab776, _0x3d0871);
    return _0x3ab776 = false;
  } catch (_0x2529d4) {
    return await _0x471740.error(_0x2529d4 + "\n\ncmdName: take\n");
  }
});
smd({
  cmdname: "attp",
  info: "Makes sticker of given text.",
  type: "sticker",
  filename: __filename,
  use: "< text.>"
}, async (_0x1544ea, _0x3444c7) => {
  try {
    let _0x128f40 = await smdBuffer("https://raganork-api.onrender.com/api/attp?text=" + (_0x3444c7 ? _0x3444c7 : "Please provide text to generate sticker") + "&apikey=with_love_souravkl11");
    return await generateSticker(_0x1544ea, _0x128f40);
  } catch (_0x560462) {
    return await _0x1544ea.error(_0x560462 + "\n\ncmdName: attp\n");
  }
});
smd({
  cmdname: "crop",
  alias: ["cropsticker"],
  info: "Makes sticker of replied image.",
  type: "sticker",
  filename: __filename,
  use: "<reply to image.>"
}, async _0x50fc92 => {
  try {
    let _0x2d0760 = mtypes.includes(_0x50fc92.mtype) ? _0x50fc92 : _0x50fc92.reply_message;
    if (_0x2d0760 && mtypes.includes(_0x2d0760?.mtype || "need_Media")) {
      let _0x1a1951 = await _0x2d0760.download();
      let _0xb6aa00 = {
        pack: Config.packname,
        author: Config.author,
        type: StickerTypes.CROPPED,
        quality: 50
      };
      await generateSticker(_0x50fc92, _0x1a1951, _0xb6aa00);
      return _0x1a1951 = false;
    } else {
      return _0x50fc92.reply("*_Uhh Dear, Reply to image!!_*");
    }
  } catch (_0x1c7f0b) {
    return await _0x50fc92.error(_0x1c7f0b + "\n\ncmdName: crop\n", "*_Request Failed, Reply to an image only!_*");
  }
});
smd({
  cmdname: "circle",
  alias: ["circlestic", "circlesticker", "cs"],
  info: "circle sticker of image.",
  type: "sticker",
  filename: __filename,
  use: "<reply to image.>"
}, async _0x52caf7 => {
  try {
    let _0x11d586 = mtypes.includes(_0x52caf7.mtype) ? _0x52caf7 : _0x52caf7.reply_message;
    if (_0x11d586 && mtypes.includes(_0x11d586?.mtype || "need_Media")) {
      let _0x5adc33 = await _0x11d586.download();
      let _0x546011 = {
        pack: Config.packname,
        author: Config.author,
        type: StickerTypes.CIRCLE,
        quality: 50
      };
      await generateSticker(_0x52caf7, _0x5adc33, _0x546011);
      return _0x5adc33 = false;
    } else {
      return _0x52caf7.reply("*_Uhh Dear, Reply to image!!_*");
    }
  } catch (_0x165b2a) {
    return await _0x52caf7.error(_0x165b2a + "\n\ncmdName: circle\n", "*_Request Failed, Make sure You replied an image_*");
  }
});
smd({
  cmdname: "round",
  alias: ["roundstic", "roundsticker"],
  info: "Makes sticker of replied image/video.",
  type: "sticker",
  filename: __filename,
  use: "<reply to image.>"
}, async _0x37c100 => {
  try {
    let _0x5f32a5 = mtypes.includes(_0x37c100.mtype) ? _0x37c100 : _0x37c100.reply_message;
    if (_0x5f32a5 && mtypes.includes(_0x5f32a5?.mtype || "need_Media")) {
      let _0x3140d1 = await _0x5f32a5.download();
      let _0x7f0ab0 = {
        pack: Config.packname,
        author: Config.author,
        type: StickerTypes.ROUNDED,
        quality: 50
      };
      await generateSticker(_0x37c100, _0x3140d1, _0x7f0ab0);
      return _0x3140d1 = false;
    } else {
      return _0x37c100.reply("*_Uhh Dear, Reply to an image!!_*");
    }
  } catch (_0x52baa5) {
    return await _0x37c100.error(_0x52baa5 + "\n\ncmdName: round\n", "*_Request Failed, Make sure You replied an image!_*");
  }
});
smd({
  cmdname: "wallpaper",
  info: "To get Random Pics",
  type: "anime",
  filename: __filename
}, async _0x5c07ae => {
  try {
    const _0x2b9570 = await (await fetch("https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc"))?.json();
    const _0x4cf39c = _0x2b9570?.urls?.regular || false;
    if (_0x4cf39c) {
      await _0x5c07ae.sendUi(_0x5c07ae.jid, {
        caption: "*---Random Wallpapers Here---*"
      }, {
        quoted: _0x5c07ae
      }, "image", _0x4cf39c);
    } else {
      await _0x5c07ae.send("*_Request Failed, Wallpaper not be fetched!_*");
    }
  } catch (_0x27f4a6) {
    return await _0x5c07ae.error(_0x27f4a6 + "\n\ncmdName: wallpaper\n");
  }
});
smd({
  pattern: "memegen",
  desc: "Write text on quoted image.",
  category: "sticker",
  filename: __filename,
  use: "<text>"
}, async (_0x29b369, _0x406491) => {
  try {
    let _0x5b20bd = pmtypes.includes(_0x29b369.mtype) ? _0x29b369 : _0x29b369.reply_message;
    if (!_0x406491) {
      return await _0x29b369.reply("*please provide text and image*");
    }
    if (!_0x5b20bd || !pmtypes.includes(_0x5b20bd.mtype)) {
      return _0x29b369.reply("*Uhh please, Reply to an image*");
    }
    let _0x2e7f21 = _0x406491.split("|")[0] || "";
    let _0x18ab18 = (_0x406491.split("|")[1] || "sticker").toLowerCase();
    let _0xa7ea5d = _0x2e7f21.split(";")[0] || "_";
    let _0x508e2 = _0x2e7f21.split(";")[1] || "_";
    let _0x225e06 = await _0x29b369.bot.downloadAndSaveMediaMessage(_0x5b20bd);
    let _0x3c2ea1 = await TelegraPh(_0x225e06);
    try {
      fs.unlinkSync(_0x225e06);
    } catch (_0x792dac) {}
    console.log("match", _0x406491);
    let _0x66682a = await getBuffer("https://api.memegen.link/images/custom/" + _0xa7ea5d + "/" + _0x508e2 + ".png?background=" + _0x3c2ea1);
    if (_0x18ab18?.startsWith("p")) {
      await _0x29b369.send(_0x66682a, {
        caption: Config.caption
      }, "image");
    }
    let _0x32a752 = {
      pack: Config.packname,
      author: Config.author,
      type: StickerTypes.FULL,
      quality: 70
    };
    await generateSticker(_0x29b369, _0x66682a, _0x32a752);
    return _0x66682a = false;
  } catch (_0x34e75a) {
    _0x29b369.error(_0x34e75a + "\n\ncmdName: memegen\n");
    console.log(_0x34e75a);
  }
});
smd({
  pattern: "emix",
  desc: "Mixes two emojies.",
  category: "sticker",
  use: "<query>",
  filename: __filename
}, async (_0x46e4d3, _0x5dee47) => {
  try {
    let _0x466701 = _0x5dee47.split(",")[0] || false;
    let _0x503ec0 = _0x5dee47.split(",")[1] || false;
    if (!_0x5dee47 || !_0x466701 || !_0x503ec0) {
      return _0x46e4d3.reply("Example : " + prefix + "emix 😅,🤔");
    }
    const _0xe1140e = await fetch("https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=" + _0x466701 + "_" + _0x503ec0);
    const _0x41bce8 = await _0xe1140e?.json();
    if (!_0x41bce8 || _0x41bce8?.locale == "") {
      return _0x46e4d3.send("*_Can't create mixture, try other emojies_*");
    } else {
      let _0x39bbd1 = await smdBuffer(_0x41bce8.results[0].url);
      let _0x4c55c4 = {
        pack: Config.packname,
        author: Config.author,
        type: StickerTypes.FULL,
        quality: 70
      };
      await generateSticker(_0x46e4d3, _0x39bbd1, _0x4c55c4);
      return _0x39bbd1 = false;
    }
  } catch (_0x4bf070) {
    _0x46e4d3.error(_0x4bf070 + "\n\ncmdName: emix");
  }
});
smd({
  pattern: "quotely",
  desc: "Makes Sticker of quoted text.",
  alias: ["q"],
  category: "sticker",
  use: "<reply to any message.>",
  filename: __filename
}, async (_0xa1cfa2, _0x4ec923) => {
  try {
    let _0x5a2037 = _0xa1cfa2.reply_message ? _0xa1cfa2.reply_message : _0xa1cfa2 && _0x4ec923 ? _0xa1cfa2 : false;
    let _0x8d0e84 = _0xa1cfa2.reply_message ? _0xa1cfa2.reply_message.text : _0x4ec923;
    if (!_0x5a2037 || !_0x8d0e84) {
      return _0xa1cfa2.reply("*_Please quote/reply to any message!!!_*");
    }
    let _0x3dfb6c = await _0xa1cfa2.getpp(_0x5a2037.sender);
    let _0x242a85 = ["#FFFFFF", "#000000"];
    let _0x4c5cf1 = _0x4ec923 === "white" ? _0x242a85[0] : _0x4ec923 === "black" ? _0x242a85[1] : _0x242a85[Math.floor(Math.random() * _0x242a85.length)];
    let _0x27251d = _0xa1cfa2.bot.getName(_0x5a2037.sender);
    let _0x345fab = {
      type: "quote",
      format: "png",
      backgroundColor: _0x4c5cf1,
      width: 512,
      height: 512,
      scale: 3,
      messages: [{
        avatar: true,
        from: {
          first_name: _0x27251d,
          language_code: "en",
          name: _0x27251d,
          photo: {
            url: _0x3dfb6c
          }
        },
        text: _0x8d0e84,
        replyMessage: {}
      }]
    };
    let _0x51ed20 = await axios.post("https://bot.lyo.su/quote/generate", _0x345fab);
    if (!_0x51ed20 || _0x51ed20.status !== 200 || !_0x51ed20.data || !_0x51ed20.data.ok) {
      return await _0xa1cfa2.send("*_Can't create quote sticker!_*");
    }
    let _0x3dabe8 = Buffer.alloc(_0x51ed20.data.result.image.length, _0x51ed20.data.result.image, "base64");
    try {
      await _0xa1cfa2.send(_0x3dabe8, {
        packname: Config.packname,
        author: "Asta-Md"
      }, "sticker");
    } catch (_0x5763ea) {
      console.log("error in quotely : ", _0x5763ea);
      let _0x4dda08 = {
        pack: Config.packname,
        author: Config.author,
        type: StickerTypes.FULL,
        quality: 70
      };
      return await generateSticker(_0xa1cfa2, _0x3dabe8, _0x4dda08);
    }
  } catch (_0x5094b6) {
    return await _0xa1cfa2.error(_0x5094b6 + "\n\ncmdName: emix", _0x5094b6);
  }
});
smd({
  pattern: "fancy",
  desc: "Makes stylish/fancy given text",
  category: "converter",
  use: "56 Asta",
  filename: __filename
}, async (_0x230c03, _0x3b568a) => {
  try {
    let _0x365550 = "┏━━━━━━━━━━━━━━━━━━━━━━━━\n┃\t*💬BLADE-MD-V2_FANCY_TEXT💬* \n┗━━━━━━━━━━━━━━━━━━━━━━━━\n\n " + (_0x3b568a ? "```🔢Reply the number you wants to select``` \n\n" : "```\t\t" + prefix + "fancy BLADE-MD-V2(For all text)\n\t\t" + prefix + "fancy 25 BLADE-MD-V2(For specific text)```\n\n");
    let _0x50c7d9 = parseInt(_0x3b568a);
    if (isNaN(_0x50c7d9)) {
      let _0x4ca942 = _0x3b568a ? _0x3b568a : "BLADE-MD-V2";
      listall(_0x4ca942).forEach((_0x51f58f, _0x2be109) => {
        _0x365550 += "\n" + (_0x2be109 += 1) + " " + _0x51f58f + "\n";
      });
      try {
        return await _0x230c03.send(_0x365550, {
          caption: _0x365550
        }, "", msg);
      } catch {
        return await _0x230c03.reply(_0x365550);
      }
    }
    let _0x564034 = await fancytext("" + _0x3b568a.slice(2), _0x50c7d9);
    return await _0x230c03.send(_0x564034, {}, "", _0x230c03);
  } catch (_0x8dd389) {
    return await _0x230c03.error(_0x8dd389 + "\n\ncmdName: fancy", _0x8dd389);
  }
});
smd({
  pattern: "tiny",
  desc: "Makes url tiny.",
  category: "converter",
  use: "<url>",
  react: "✅",
  filename: __filename
}, async (_0x85089c, _0x29ac4f) => {
  try {
    if (!_0x29ac4f || !_0x29ac4f.toLowerCase().includes("https")) {
      return _0x85089c.reply("Provide me a link");
    }
    let _0xe54a62 = _0x29ac4f.split(" ")[0];
    let _0x24899a = await axios.get("https://tinyurl.com/api-create.php?url=" + _0xe54a62);
    _0x85089c.reply("*🛡️Your Shortened URL*\n\n" + _0x24899a.data);
  } catch (_0x39ae7e) {
    _0x85089c.error(_0x39ae7e + "\n\ncmdName: tiny", _0x39ae7e, false);
  }
});
smd({
  pattern: "fliptext",
  desc: "Flips given text.",
  category: "converter",
  use: "<query>",
  filename: __filename
}, async (_0x4cfc4e, _0x4cb7aa) => {
  try {
    let _0xd51ec = _0x4cb7aa ? _0x4cb7aa : _0x4cfc4e.reply_text;
    if (!_0xd51ec) {
      return _0x4cfc4e.reply("*_Example : " + prefix + "fliptext BLADE-MD-V2!_*");
    }
    let _0x5c7a34 = _0xd51ec.split("").reverse().join("");
    await _0x4cfc4e.reply("*「  Text Flipper Tool  」* \n*IGiven text :*\n" + _0xd51ec + "\n\n*Fliped text :*\n" + _0x5c7a34);
  } catch (_0x15d8cc) {
    _0x4cfc4e.error(_0x15d8cc + "\n\ncommand : fliptext", _0x15d8cc);
  }
});
smd({
  pattern: "ebinary",
  desc: "encode binary",
  category: "converter",
  use: "<query>",
  filename: __filename
}, async (_0x454093, _0x529916) => {
  try {
    let _0x5ba9c3 = _0x529916 ? _0x529916 : _0x454093.reply_text;
    if (!_0x5ba9c3) {
      return _0x454093.reply("*_Send text to be encoded.!_*");
    }
    let _0x330ca8 = _0x5ba9c3.split("").map(_0xa59150 => {
      return _0xa59150.charCodeAt(0).toString(2);
    }).join(" ");
    await _0x454093.reply(_0x330ca8);
  } catch (_0x3cb17) {
    await _0x454093.error(_0x3cb17 + "\n\ncommand : ebinary", _0x3cb17);
  }
});
smd({
  pattern: "dbinary",
  desc: "decode binary",
  category: "converter",
  use: "<query>",
  filename: __filename
}, async (_0x38e385, _0x196965) => {
  try {
    let _0x1c88de = _0x196965 ? _0x196965 : _0x38e385.reply_text;
    if (!_0x1c88de) {
      return _0x38e385.reply("Send text to be decoded.");
    }
    var _0x208340 = _0x1c88de.split(" ");
    var _0x206a18 = [];
    for (i = 0; i < _0x208340.length; i++) {
      _0x206a18.push(String.fromCharCode(parseInt(_0x208340[i], 2)));
    }
    await _0x38e385.reply(_0x206a18.join(""));
  } catch (_0x2b0f0a) {
    await _0x38e385.error(_0x2b0f0a + "\n\ncommand : dbinary", _0x2b0f0a);
  }
});
smd({
  pattern: "qr",
  category: "converter",
  filename: __filename,
  use: "< text >",
  desc: "Sends CitelsVoid Qr code to scan and get your session id."
}, async (_0x19c21a, _0xc7f8c4) => {
  try {
    if (!_0xc7f8c4) {
      return _0x19c21a.reply("*Provide Text To generate QR!*");
    }
    let _0x494bbd = "https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=" + text;
    await _0x19c21a.bot.sendUi(_0x19c21a.jid, {
      caption: "*_Scan Qr To Get You Text_*"
    }, {
      quoted: _0x19c21a
    }, "image", _0x494bbd);
  } catch (_0x33377c) {
    await _0x19c21a.error(_0x33377c + "\n\ncommand : qr", _0x33377c);
  }
});
smd({
  pattern: "paste",
  desc: "create paste of text.",
  category: "converter",
  use: "< text >",
  filename: __filename
}, async (_0x3878b3, _0x4974a3) => {
  try {
    let _0x531993 = _0x4974a3 ? _0x4974a3 : _0x3878b3.reply_text;
    let {
      data: _0x3d14f3
    } = await axios.get("https://api.telegra.ph/createPage?access_token=d3b25feccb89e508a9114afb82aa421fe2a9712b963b387cc5ad71e58722&title=Suhail-Md+Bot&author_name=Astro_Tech_Info&content=[%7B\"tag\":\"p\",\"children\":[\"" + _0x531993.replace(/ /g, "+") + "\"]%7D]&return_content=true");
    return _0x3878b3.reply("*Paste created on telegraph*\nName:-" + util.format(_0x3d14f3.result.title) + " \nUrl:- " + util.format(_0x3d14f3.result.url));
  } catch (_0x5d7e4a) {
    await _0x3878b3.error(_0x5d7e4a + "\n\ncommand: paste ", _0x5d7e4a, false);
  }
});
let pmtypes = ["imageMessage", "stickerMessage"];
smd({
  cmdname: "photo",
  info: "Makes photo of replied sticker.",
  type: "converter",
  use: "<reply to any gif>",
  filename: __filename
}, async _0x31d7b => {
  try {
    let _0xd092ed = pmtypes.includes(_0x31d7b.mtype) ? _0x31d7b : _0x31d7b.reply_message;
    if (!_0xd092ed || !pmtypes.includes(_0xd092ed?.mtype)) {
      return _0x31d7b.reply("*_Uhh Dear, Reply to Any Sticker.!!_*");
    }
    let _0x361039 = await _0x31d7b.bot.downloadAndSaveMediaMessage(_0xd092ed);
    await _0x31d7b.bot.sendMessage(_0x31d7b.jid, {
      image: {
        url: _0x361039
      },
      mimetype: "image/jpeg"
    });
    try {
      fs.unlinkSync(_0x361039);
    } catch (_0x573b9e) {}
  } catch (_0x2454ac) {
    _0x31d7b.error(_0x2454ac + "\n\ncmdName: photo\n", _0x2454ac, false);
  }
});
let audtypes = ["audioMessage", "videoMessage"];
smd({
  pattern: "toaudio",
  alias: ["mp3", "tomp3"],
  desc: "changes type to audio.",
  category: "converter",
  use: "<reply to any Video>",
  filename: __filename
}, async _0x116242 => {
  try {
    let _0x2976f2 = audtypes.includes(_0x116242.mtype) ? _0x116242 : _0x116242.reply_message;
    if (!_0x2976f2 || !audtypes.includes(_0x2976f2?.mtype)) {
      return _0x116242.reply("*_Uhh Dear, Reply to Any Video.!!_*");
    }
    let _0x2b56d1 = await _0x116242.bot.downloadAndSaveMediaMessage(_0x2976f2);
    const {
      toAudio: _0xfd0543
    } = require("../lib");
    let _0x550383 = fs.readFileSync(_0x2b56d1);
    let _0x5319d4 = await _0xfd0543(_0x550383);
    try {
      fs.unlink(_0x2b56d1);
    } catch (_0x149b27) {}
    return await _0x116242.bot.sendMessage(_0x116242.jid, {
      audio: _0x5319d4,
      mimetype: "audio/mpeg"
    });
  } catch (_0x1d6272) {
    _0x116242.error(_0x1d6272 + "\n\ncmdName: toaudio", _0x1d6272);
  }
});
smd({
  pattern: "voice",
  alias: ["ptt", "toptt"],
  desc: "adds bass in given sound",
  category: "converter",
  use: "<reply to any audio>"
}, async _0x5c9aa3 => {
  try {
    let _0x462db2 = audtypes.includes(_0x5c9aa3.mtype) ? _0x5c9aa3 : _0x5c9aa3.reply_message;
    if (!_0x462db2 || !audtypes.includes(_0x462db2?.mtype)) {
      return _0x5c9aa3.reply("*_Uhh Please, Reply to audio/video_*");
    }
    let _0x357d23 = await _0x462db2.download();
    return await _0x5c9aa3.bot.sendMessage(_0x5c9aa3.jid, {
      audio: _0x357d23,
      mimetype: "audio/mpeg",
      ptt: true
    }, {
      quoted: _0x5c9aa3
    });
  } catch (_0x4252f6) {
    _0x5c9aa3.error(_0x4252f6 + "\n\ncmdName: voice", _0x4252f6);
  }
});
smd({
  pattern: "tomp4",
  alias: ["mp4", "tovideo"],
  desc: "convert sticker to mp4.",
  category: "converter",
  use: "<reply to any Video>",
  filename: __filename
}, async m => {
  let asta_mp4 = m.mtype === "videoMessage" ? m : m.reply_message;
  if (!asta_mp4) {
    return m.reply("*_Uhh Dear, Reply To Animated Sticker or Gif!!_*");
  }
  const {
    webp2mp4File: _0x3e4a6e
  } = require("../lib");
  let _0x4ab6cb = asta_mp4?.mimetype || "";
  if (asta_mp4?.mtype != "videoMessage" && !/webp/.test(_0x4ab6cb)) {
    return await m.send("*Damn... Reply To An Animated Sticker or Gif *");
  }
  let _0x1c3111 = await m.bot.downloadAndSaveMediaMessage(asta_mp4);
  try {
    try {
      if (/webp/.test(_0x4ab6cb)) {
        let _0x49adc0 = await _0x3e4a6e(_0x1c3111);
        _0x1c3111 = _0x49adc0.result;
      }
    } catch (_0x1b8bba) {
      console.log("error while converting sticker to mp4\n", _0x1b8bba);
    }
    await m.bot.sendMessage(m.jid, {
      video: {
        url: _0x1c3111
      },
      caption: Config.caption
    });
    try {
      await fs.unlink(_0x1c3111);
    } catch (_0x399a5b) {}
  } catch (_0x3d8403) {
    m.error(_0x3d8403 + "\n\ncmdName: tomp4", _0x3d8403);
  }
});
function splitTextIntoLines(_0x2e8ff3, _0x1ba8fb, _0x469f3c) {
  const _0x32429f = _0x2e8ff3.split(" ");
  const _0x2048c1 = [];
  let _0x38142d = "";
  for (const _0x1678b3 of _0x32429f) {
    const _0x56be5a = _0x38142d === "" ? _0x1678b3 : _0x38142d + " " + _0x1678b3;
    const _0x1a1a76 = _0x1ba8fb.measureText(_0x56be5a).width;
    if (_0x1a1a76 <= _0x469f3c) {
      _0x38142d = _0x56be5a;
    } else {
      _0x2048c1.push(_0x38142d);
      _0x38142d = _0x1678b3;
    }
  }
  if (_0x38142d !== "") {
    _0x2048c1.push(_0x38142d);
  }
  return _0x2048c1;
}
smd({
  cmdname: "ttp",
  alias: ["roundstic", "roundsticker"],
  info: "Makes sticker of replied image/video.",
  type: "sticker",
  filename: __filename,
  use: "<reply to image.>"
}, async (_0x54e3dc, _0x8cd246) => {
  try {
    let _0x2cee76 = _0x8cd246 || _0x54e3dc.reply_text;
    if (_0x2cee76) {
      let _0x374825 = parseInt(_0x2cee76) || "";
      if (_0x374825 && !isNaN(_0x374825)) {
        _0x2cee76 = await fancytext("" + _0x2cee76.slice(2), _0x374825);
      }
      const {
        createCanvas: _0x238289
      } = require("canvas");
      const _0xf38745 = require("fs");
      const _0x4d4dd9 = 300;
      const _0x3fed71 = 300;
      const _0x5a2b18 = "./temp/ttp.png";
      const _0x246894 = _0x238289(_0x4d4dd9, _0x3fed71);
      const _0x330082 = _0x246894.getContext("2d");
      _0x330082.clearRect(0, 0, _0x246894.width, _0x246894.height);
      _0x330082.font = "20px Arial";
      _0x330082.fillStyle = "black";
      _0x330082.textAlign = "center";
      const _0xa2e118 = _0x4d4dd9 - 20;
      const _0x17cad6 = splitTextIntoLines(_0x2cee76, _0x330082, _0xa2e118);
      const _0x4f37f9 = _0x17cad6.length * 25;
      const _0x136ece = (_0x3fed71 - _0x4f37f9) / 2;
      _0x17cad6.forEach((_0x214ee7, _0x432ccc) => {
        const _0x5c8f67 = _0x136ece + _0x432ccc * 25;
        _0x330082.fillText(_0x214ee7, _0x4d4dd9 / 2, _0x5c8f67);
      });
      const _0x3a6f98 = _0x246894.createPNGStream();
      const _0x3c15d9 = _0xf38745.createWriteStream(_0x5a2b18);
      _0x3a6f98.pipe(_0x3c15d9);
      _0x3c15d9.on("finish", async () => {
        console.log("Image created:", _0x5a2b18);
        let _0x3dac0f = _0xf38745.readFileSync(_0x5a2b18);
        let _0x27923e = {
          pack: Config.packname,
          author: Config.author,
          type: StickerTypes.ROUNDED,
          quality: 50
        };
        await generateSticker(_0x54e3dc, _0x3dac0f, _0x27923e);
        return _0x3dac0f = false;
      });
    } else {
      return _0x54e3dc.reply("*_Uhh Dear, provide text, ex .ttp 4 hii im BLADE-MD-V2!!_*");
    }
  } catch (_0x72e5d) {
    return await _0x54e3dc.error(_0x72e5d + "\n\ncmdName: ttp\n");
  }
});
