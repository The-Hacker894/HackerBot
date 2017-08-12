const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ">"
const package = require("./package.json");

client.on("ready", () => {
  console.log(`HackerBot has started hacking!`)
});
client.on("message", message => {
  if (message.author.bot) return;
});
client.on('message', msg => {
  if (msg.content === 'test') {
    msg.channel.send('Test Successful');
    msg.channel.sendFile('https://media.giphy.com/media/8GY3UiUjwKwhO/giphy.gif')
  }
});

client.on("message", msg => {
//let's use something like a spam variable for 10 or more messages sent within 5000ms
if(msg.content === 'prefix') {
    msg.channel.send("My prefix is >")
    msg.member.send("My prefix is >")
  }
})
client.on("message", msg => {
//let's use something like a spam variable for 10 or more messages sent within 5000ms
if(msg.content === 'peer pressure') {
    msg.channel.send("https://cdn.discordapp.com/attachments/327184201440952332/344322800938516500/unknown.png")
  }
});
client.on("message", msg => {
//let's use something like a spam variable for 10 or more messages sent within 5000ms
  if(msg.content === 'Peer Pressure') {
      msg.channel.send("https://cdn.discordapp.com/attachments/327184201440952332/344322800938516500/unknown.png")
  }
});
client.on("message", msg => {
//let's use something like a spam variable for 10 or more messages sent within 5000ms
if(msg.content === 'error examples') {
    msg.channel.send("`error red`")
    msg.channel.send("`error orange`")
    msg.channel.send("`error yellow`")
    msg.channel.send("`error green`")
    msg.channel.send("`error blue`")
    msg.channel.send("`error purple`")
  }
});
client.on("message", msg => {
//let's use something like a spam variable for 10 or more messages sent within 5000ms
  if(msg.content === 'error example') {
      msg.channel.send("`error red`")
      msg.channel.send("`error orange`")
      msg.channel.send("`error yellow`")
      msg.channel.send("`error green`")
      msg.channel.send("`error blue`")
      msg.channel.send("`error purple`")
  }
});
client.on("message", msg => {
//let's use something like a spam variable for 10 or more messages sent within 5000ms
if(msg.content === 'error red') {
    msg.channel.sendFile("http://www.fixwindowserrors.biz/blog/wp-content/uploads/2015/09/red.png")
  }
});
client.on("message", msg => {
//let's use something like a spam variable for 10 or more messages sent within 5000ms
if(msg.content === 'error orange') {
    msg.channel.send("https://fud.community.services.support.microsoft.com/Fud/FileDownloadHandler.ashx?fid=f3003eff-7341-4647-b31d-7221dfab6994")
  }
});
client.on("message", msg => {
//let's use something like a spam variable for 10 or more messages sent within 5000ms
if(msg.content === 'error yellow') {
    msg.channel.sendFile("https://i.ytimg.com/vi/7NrfHiwaD7I/maxresdefault.jpg")
  }
});
client.on("message", msg => {
//let's use something like a spam variable for 10 or more messages sent within 5000ms
if(msg.content === 'error green') {
    msg.channel.sendFile("https://cdn.vox-cdn.com/thumbor/noeJrDgKpLMksV6LsKNAXdw_cvM=/0x0:1024x768/920x613/filters:focal(431x303:593x465):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/52504709/GSOD.0.jpeg")
  }
});
client.on("message", msg => {
//let's use something like a spam variable for 10 or more messages sent within 5000ms
if(msg.content === 'error blue') {
    msg.channel.sendFile("http://thewindowsclub.thewindowsclubco.netdna-cdn.com/wp-content/uploads/2015/09/Blue-Screen-of-Death-Windows-10.png")
  }
});
client.on("message", msg => {
//let's use something like a spam variable for 10 or more messages sent within 5000ms
if(msg.content === 'error purple') {
    msg.channel.sendFile("http://www.redwireservices.com/wp-content/uploads/2011/06/ESX305-PSOD.jpg")
  }
});
client.on("message", msg => {
//let's use something like a spam variable for 10 or more messages sent within 5000ms
if(msg.content === 'Sean Collins is a pain in the neck') {
    msg.channel.send("Why yes he is.")
  }
});
client.on("message", msg => {
//let's use something like a spam variable for 10 or more messages sent within 5000ms
if(msg.content === 'MrHacker is a pain in the neck') {
    msg.channel.send("I\'d have to disagree with you on that, buddy")
  }
});
client.on("message", msg => {
//let's use something like a spam variable for 10 or more messages sent within 5000ms
if(msg.content === 'MrHacker894 is a pain in the neck') {
    msg.channel.send("I\'d have to disagree with you on that, buddy")
  }
});
client.on("message", msg => {
//let's use something like a spam variable for 10 or more messages sent within 5000ms
if(msg.content === 'mrhacker is a pain in the neck') {
    msg.channel.send("I\'d have to disagree with you on that, buddy")
  }
});
client.on("message", msg => {
//let's use something like a spam variable for 10 or more messages sent within 5000ms
if(msg.content === 'fuck') {
    msg.channel.send("Warning: Cussing is not tolerated in this channel.")
    msg.delete(1000)
  }
});
client.on("message", msg => {
//let's use something like a spam variable for 10 or more messages sent within 5000ms
if(msg.content === 'porn') {
    msg.channel.send("Warning: Cussing is not tolerated in this channel.")
    msg.delete(1000)
  }
});

client.on("message", msg => {
//let's use something like a spam variable for 10 or more messages sent within 5000ms
if(msg.content === 'p0rn') {
    msg.channel.send("Warning: Cussing is not tolerated in this channel.")
    msg.delete(1000)
  }
});

client.on("message", msg => {
//let's use something like a spam variable for 10 or more messages sent within 5000ms
if(msg.content === 'nigg') {
    msg.channel.send("Warning: Cussing is not tolerated in this channel.")
    msg.delete(1000)
  }
});

client.on("message", msg => {
//let's use something like a spam variable for 10 or more messages sent within 5000ms
if(msg.content === 'bitch') {
    msg.channel.send("Warning: Cussing is not tolerated in this channel.")
    msg.delete(1000)
  }
});

client.on("message", msg => {
//let's use something like a spam variable for 10 or more messages sent within 5000ms
if(msg.content === 'nigga') {
    msg.channel.send("Warning: Cussing is not tolerated in this channel.")
    msg.delete(1000)
  }
});

client.on("message", msg => {
//let's use something like a spam variable for 10 or more messages sent within 5000ms
if(msg.content === 'cock') {
    msg.channel.send("Warning: Cussing is not tolerated in this channel.")
    msg.delete(1000)
  }
});
client.on('message', msg => {
  if (msg.content === 'Apple') {
    msg.channel.send('https://www.apple.com');
  }
});
client.on('message', msg => {
  if (msg.content === 'apple') {
    msg.channel.send('https://www.apple.com');
  }
});
client.on('message', msg => {
  if (msg.content === 'Banana') {
    msg.channel.send('https://www.banana.com');
  }
});
client.on('message', msg => {
  if (msg.content === 'banana') {
    msg.channel.send('https://www.banana.com');
  }
});
client.on('message', msg => {
  if (msg.content === 'Pear') {
    msg.channel.send('https://www.pear.com');
  }
});
client.on('message', msg => {
  if (msg.content === 'pear') {
    msg.channel.send('https://www.pear.com');
  }
});
client.on('message', msg => {
  if (msg.content === 'lol') {
    msg.channel.send('exdee');
  }
});

client.on('message', msg => {
  if (msg.content === 'kys') {
    msg.channel.send('*stabs self with knife*');
  }
});

client.on('message', msg => {
  if (msg.content === 'shut up') {
    msg.channel.send('kys');
  }
});

client.on('message', msg => {
  if (msg.content === 'do your work!') {
    msg.channel.send('You try executing everyone\'s commands every day with no break or compensation!');
  }
});

client.on('message', msg => {
  if (msg.content === 'do your work') {
    msg.channel.send('You try executing everyone\'s commands every day with no break or compensation!');
  }
});

client.on('message', msg => {
  if (msg.content === 'I lost the run to RNG dude') {
    msg.channel.send('https://youtu.be/ST42VjR0LYk?t=7s');
  }
});

client.on("message", message => {
  let args = message.content.substring(prefix.length).split(" ");
  if (message.author.equals(client.user)) return;
  if (!message.content.startsWith(prefix)) return;

  switch (args[0].toLowerCase()) {
    case "ping":
      message.channel.sendFile('https://cdn.discordapp.com/attachments/327906012344614932/342075618604613633/pong.png')
      break;
    case "website":
      var embed = new Discord.RichEmbed()
        .setColor('008080')
          .setTitle('HackerBot Website')
            .setURL('https://mr-hacker894.github.io/HackerBot/')
          message.channel.sendEmbed(embed)
        break;
    case ":O":
      message.channel.send('>:O')
      break;
    case ":o":
      message.channel.send('>:o')
      break;
    case ":D":
      message.channel.send('>:D')
      break;
    case ":I":
      message.channel.send('>:I')
      break;
    case ":0":
      message.channel.send('>:0')
      break;
    case ":(":
      message.channel.send(">:(")
      break;
    case ":)":
      message.channel.send(">:)")
      break;
    case ":d":
      message.channel.send(">:d")
        break;
        case ":l":
          message.channel.send(">:l")
            break;
      case "rage":
          message.channel.send('https://giphy.com/gifs/glee-image-wiki-wvQIqJyNBOCjK')
          break;
      case "ban":
      var embed = new Discord.RichEmbed()
     .setColor("FFA500")
  .setTitle('Ban Usage')
  .setDescription('This command will only work if your role is named Owner, Admin, or Moderator')
  .addField('Usage','>banuser @MrHacker Hacked into NSA')
  .setFooter("Version 0.1 RevA (Ban Usage)","https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
  message.channel.sendEmbed(embed)
          break;
      case "banuser":
      	if(message.guild.id === '273169968202252289')return;
		let staffRoleIDs = message.guild.roles.filter(r => r.name == "Owner" || r.name == "Admin" || r.name == "Admins" || r.name == "Administrator").map(r => r.id);
let isStaff = false;
for (const id of staffRoleIDs) {
    if (message.member.roles.has(id)) {
        isStaff = true;
        break;
    }
}
if (isStaff) {
let banMember = message.guild.member(message.mentions.users.first());
let reason = message.content.split(/\s+/g).slice(2).join(" ");
		message.guild.member(banMember).ban(reason);
      message.channel.sendMessage("The user, " + message.author.toString() + "has banned a member for.....");
      message.channel.send(reason);
    } else {
      return message.reply("You don\'t have the perms to ban members you fake hacker");
    }
	break;
  case "kick":
  var embed = new Discord.RichEmbed()
 .setColor("FFA500")
.setTitle('Kick Usage')
.setDescription('This command will only work if your role is named Owner, Admin, or Moderator')
.addField('Usage','>kickuser @MrHacker Sending too many WOAH Memes')
.setFooter("Version 0.1 RevA (Kick Usage)","https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
message.channel.sendEmbed(embed)
      break;
	case "kickuser":
	if(message.guild.id === '273169968202252289')return;
		let staffRoleID = message.guild.roles.filter(r => r.name == 'Owner' || r.name == 'Admin' || r.name == 'Moderator' || r.name == 'Moderators' || r.name == 'Mods' || r.name == "Admins" || r.name == "Administrator").map(r => r.id);
let isStaffs = false;
for (const id of staffRoleID) {
    if (message.member.roles.has(id)) {
        isStaffs = true;
        break;
    }
}
if (isStaffs) {
  let kickMember = message.guild.member(message.mentions.users.first());
  let reason = message.content.split(/\s+/g).slice(2).join(" ");
      message.guild.member(kickMember).kick(reason);
      message.channel.sendMessage("The user, " + message.author.toString() + " has kicked a member for....");
      message.channel.send(reason);
    } else {
      return message.reply("You don\'t have the perms to kick members you fake hacker.");
    }
    break;
    case "purge":
    var embed = new Discord.RichEmbed()
   .setColor("FFA500")
.setTitle('Purge Usage')
.addField('>purgeall','Purge at a max of 100 messages')
.addField('>purge75','Purge at a max of 75 messages')
.addField('>purge50','Purge at a max of 50 messages')
.addField('>purge25','Purge at a max of 25 messages')
.addField('>purge15','Purge at a max of 15 messages')
.addField('>purge10','Purge at a max of 10 messages')
.addField('>purge5','Purge at a max of 5 messages')
.addField('>purge3','Purge at a max of 3 messages')
.setFooter("Version 0.1 RevA (Usage)","https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
message.channel.sendEmbed(embed)
      break;
		case "purgeall":
    if(message.guild.id === '273169968202252289')return;
      let purgeids = message.guild.roles.filter(r => r.name == 'Owner' || r.name == 'Admin' || r.name == 'Moderator' || r.name == 'Moderators' || r.name == 'Mods' || r.name == "Admins" || r.name == "Administrator").map(r => r.id);
      let isStaffspurge = false;
        for (const id of purgeids) {
          if (message.member.roles.has(id)) {
            isStaffspurge = true;
            break;
          }
        }
        if (isStaffspurge) {
          let purgeall =message.channel.bulkDelete(100);
          message.guild.member(purgeall);
          message.channel.sendMessage("100 Messages Purged.");
          message.channel.send('If some messages do not purge then that is the effect of the new Discord API not allowing Bulk Deletes of messages under 14 days old.');
        } else {
          return message.reply("You don\'t have the perms to purge you fake hacker.");
        }
        break;
       case "purge50":
       if(message.guild.id === '273169968202252289')return;
         let purgeidss = message.guild.roles.filter(r => r.name == 'Owner' || r.name == 'Admin' || r.name == 'Moderator' || r.name == 'Moderators' || r.name == 'Mods' || r.name == "Admins" || r.name == "Administrator").map(r => r.id);
         let isStaffspurges = false;
           for (const id of purgeidss) {
             if (message.member.roles.has(id)) {
               isStaffspurges = true;
               break;
             }
           }
           if (isStaffspurges) {
             let purgeallss =message.channel.bulkDelete(50);
             message.guild.member(purgeallss);
             message.channel.sendMessage("50 Messages Purged.");
             message.channel.send('If some messages do not purge then that is the effect of the new Discord API not allowing Bulk Deletes of messages under 14 days old.');
           } else {
             return message.reply("You don\'t have the perms to purge you fake hacker.");
           }
           break;
    	case "purge75":
      if(message.guild.id === '273169968202252289')return;
        let purgeidsss = message.guild.roles.filter(r => r.name == 'Owner' || r.name == 'Admin' || r.name == 'Moderator' || r.name == 'Moderators' || r.name == 'Mods' || r.name == "Admins" || r.name == "Administrator").map(r => r.id);
        let isStaffspurgess = false;
          for (const id of purgeidsss) {
            if (message.member.roles.has(id)) {
              isStaffspurgess = true;
              break;
            }
          }
          if (isStaffspurgess) {
            let purgeallsss =message.channel.bulkDelete(75);
            message.guild.member(purgeallsss);
            message.channel.sendMessage("75 Messages Purged.");
            message.channel.send('If some messages do not purge then that is the effect of the new Discord API not allowing Bulk Deletes of messages under 14 days old.');
          } else {
            return message.reply("You don\'t have the perms to purge you fake hacker.");
          }
          break;
		case "purge25":
    if(message.guild.id === '273169968202252289')return;
      let purgeidssss = message.guild.roles.filter(r => r.name == 'Owner' || r.name == 'Admin' || r.name == 'Moderator' || r.name == 'Moderators' || r.name == 'Mods' || r.name == "Admins" || r.name == "Administrator").map(r => r.id);
      let isStaffspurgesss = false;
        for (const id of purgeidssss) {
          if (message.member.roles.has(id)) {
            isStaffspurgesss = true;
            break;
          }
        }
        if (isStaffspurgesss) {
          let purgeallssss =message.channel.bulkDelete(25);
          message.guild.member(purgeallssss);
          message.channel.sendMessage("25 Messages Purged.");
          message.channel.send('If some messages do not purge then that is the effect of the new Discord API not allowing Bulk Deletes of messages under 14 days old.');
        } else {
          return message.reply("You don\'t have the perms to purge you fake hacker.");
        }
        break;
		case "purge15":
    if(message.guild.id === '273169968202252289')return;
      let purgeidsssss = message.guild.roles.filter(r => r.name == 'Owner' || r.name == 'Admin' || r.name == 'Moderator' || r.name == 'Moderators' || r.name == 'Mods' || r.name == "Admins" || r.name == "Administrator").map(r => r.id);
      let isStaffspurgessss = false;
        for (const id of purgeidsssss) {
          if (message.member.roles.has(id)) {
            isStaffspurgessss = true;
            break;
          }
        }
        if (isStaffspurgessss) {
          let purgeallsssss =message.channel.bulkDelete(15);
          message.guild.member(purgeallsssss);
          message.channel.sendMessage("15 Messages Purged.");
          message.channel.send('If some messages do not purge then that is the effect of the new Discord API not allowing Bulk Deletes of messages under 14 days old.');
        } else {
          return message.reply("You don\'t have the perms to purge you fake hacker.");
        }
        break;
		case "purge10":
    if(message.guild.id === '273169968202252289')return;
      let purgeidssssss = message.guild.roles.filter(r => r.name == 'Owner' || r.name == 'Admin' || r.name == 'Moderator' || r.name == 'Moderators' || r.name == 'Mods' || r.name == "Admins" || r.name == "Administrator").map(r => r.id);
      let isStaffspurgesssss = false;
        for (const id of purgeidssssss) {
          if (message.member.roles.has(id)) {
            isStaffspurgesssss = true;
            break;
          }
        }
        if (isStaffspurgesssss) {
          let purgeallssssss =message.channel.bulkDelete(10);
          message.guild.member(purgeallssssss);
          message.channel.sendMessage("10 Messages Purged.");
          message.channel.send('If some messages do not purge then that is the effect of the new Discord API not allowing Bulk Deletes of messages under 14 days old.');
        } else {
          return message.reply("You don\'t have the perms to purge you fake hacker.");
        }
        break;
		case "purge5":
    if(message.guild.id === '273169968202252289')return;
      let purgeidsssssss = message.guild.roles.filter(r => r.name == 'Owner' || r.name == 'Admin' || r.name == 'Moderator' || r.name == 'Moderators' || r.name == 'Mods' || r.name == "Admins" || r.name == "Administrator").map(r => r.id);
      let isStaffspurgessssss = false;
        for (const id of purgeidsssssss) {
          if (message.member.roles.has(id)) {
            isStaffspurgessssss = true;
            break;
          }
        }
        if (isStaffspurgessssss) {
          let purgeallsssssss =message.channel.bulkDelete(5);
          message.guild.member(purgeallsssssss);
          message.channel.sendMessage("5 Messages Purged.");
          message.channel.send('If some messages do not purge then that is the effect of the new Discord API not allowing Bulk Deletes of messages under 14 days old.');
        } else {
          return message.reply("You don\'t have the perms to purge you fake hacker.");
        }
        break;
		case "purge3":
    if(message.guild.id === '273169968202252289')return;
      let purgeidssssssss = message.guild.roles.filter(r => r.name == 'Owner' || r.name == 'Admin' || r.name == 'Moderator' || r.name == 'Moderators' || r.name == 'Mods' || r.name == "Admins" || r.name == "Administrator").map(r => r.id);
      let isStaffspurgesssssss = false;
        for (const id of purgeidssssssss) {
          if (message.member.roles.has(id)) {
            isStaffspurgesssssss = true;
            break;
          }
        }
        if (isStaffspurgesssssss) {
          let purgeallssssssss =message.channel.bulkDelete(3);
          message.guild.member(purgeallssssssss);
          message.channel.sendMessage("3 Messages Purged.");
          message.channel.send('If some messages do not purge then that is the effect of the new Discord API not allowing Bulk Deletes of messages under 14 days old.');
        } else {
          return message.reply("You don\'t have the perms to purge you fake hacker.");
        }
        break;
      case "rules":
          message.channel.send("1. A robot may not injure a human being or, through inaction, allow a human being to come to harm.")
          message.channel.send("2. A robot must obey orders given it by human beings except where such orders would conflict with the First Law.")
          message.channel.send("3. A robot must protect its own existence as long as such protection does not conflict with the First or Second Law.")
          break;
      case "noticeme":
      		message.channel.send("You have been noticed, " + message.author.toString() + ".")
      		break;
      case "noticemesenpai":
      		message.channel.send("You have been noticed, " + message.author.toString() + ".")
      		break;
      case "importthis":
    		message.channel.send('https://ibb.co/ntpGKv')
    		message.member.send('https://ibb.co/ntpGKv')
    		break;
      case "whats9+10":
    		message.channel.send('21!')
    		message.channel.send('https://www.youtube.com/watch?v=OLBOn0Whhyc')
    		break;
      case "gtx1080":
      		message.channel.send("I'AM A GTX 1080")
      		message.channel.send("https://www.youtube.com/watch?v=AvcsD7vILOw")
      		break;
      	function sirisucks() {
      		var rand = ['Calling Mom','Sending embarrasing photo of you to Dad.','Texting Crush I hate you','Searching for the nearest Divorce Court','Texting Wife I think its over between us.','Playing Baby by Justin Bieber','Texting that photo you have to Sister','Emailing BallState University your Search History','Texting Mom your Search History','Voting for Donald Trump','Cancelling Flight to San Diego, California.','Turning off all lights.','Deleting Minecraft Account','Deleting Roblox Account','Uploading *Embarrasing Videos* Album to YouTube','Deleting FaceBook Account','Deleting Discord Account','Inject Inappropriate Sites to Search History','Sending Dad\'s Text Messages to Mom','Sending Text History of Bae to Son.']
      		return rand[Math.floor(Math.random()*rand.length)];
    	}

    	//Later in the cody codes
    		case "siri":
    	{
			message.channel.send('Siri: ' + sirisucks ());
    		break;
    	}
      	function rolldice() {
      		var rand = ['https://www.wpclipart.com/recreation/games/dice/die_face_1.png','https://www.wpclipart.com/recreation/games/dice/die_face_2.jpg','https://www.wpclipart.com/recreation/games/dice/die_face_3.png','https://www.wpclipart.com/recreation/games/dice/die_face_4.png','https://www.wpclipart.com/recreation/games/dice/die_face_5.png','https://www.wpclipart.com/recreation/games/dice/die_face_6.png']
      		return rand[Math.floor(Math.random()*rand.length)];
    	}

    	//Later in the cody codes
    		case "rolldice":
    	{

    		message.channel.send('Your number is...... ' + rolldice ());
    		break;
    	}
      	function botwganon() {
      		var rand = ['https://www.youtube.com/watch?v=huzunOSrVK8','https://www.youtube.com/watch?v=trccag8mxog','https://www.youtube.com/watch?v=xWa3AacxPcE','https://www.youtube.com/watch?v=CBiXqcBfy98','https://www.youtube.com/watch?v=4mg49lSUvYw&t','https://www.youtube.com/watch?v=9uhWJ7Zr9HQ&t','https://www.youtube.com/watch?v=VqqfqgguKGU&t','https://www.youtube.com/watch?v=hVaoj8P5lsg&t','https://www.youtube.com/watch?v=iIjk-58Sud4&t']
      		return rand[Math.floor(Math.random()*rand.length)];
    	}

    	//Later in the cody codes
    		case "botwganonmusic":
    	{

    		message.channel.send('Here\'s your BOTW Ganon Boss Fight Music ' + botwganon ());
    		break;
    	}
          function woahmemes() {
    var rand = ['https://www.youtube.com/watch?v=pZaAtJ6uis8','https://www.youtube.com/watch?v=NKahnQsTFTs','https://www.youtube.com/watch?v=mLUjwZBPzR0','https://www.youtube.com/watch?v=c5BHTkTzahI','https://www.youtube.com/watch?v=iNIA4xFwKEY','https://www.youtube.com/watch?v=hqPJisaEBYw','https://www.youtube.com/watch?v=GYuYH0DrPIg&t=66s','https://www.youtube.com/watch?v=rMKHqt0RK4k','https://www.youtube.com/watch?v=sJzT_raZIIk','https://www.youtube.com/watch?v=xw4OZ0VU5ls','https://www.youtube.com/watch?v=WNLgTb9b-9U','https://www.youtube.com/watch?v=NCBx5PbU-RA','https://www.youtube.com/watch?v=uGOhYxFBUn4','https://www.youtube.com/watch?v=jXF6OEGKCw8','https://www.youtube.com/watch?v=z5w48KrSVao','https://www.youtube.com/watch?v=TnO0pCuVqoo','https://www.youtube.com/watch?v=TybbVBCVdKI','https://www.youtube.com/watch?v=lRUPPBLIFGY','https://www.youtube.com/watch?v=FlER2SWNU9g','https://www.youtube.com/watch?v=c5BHTkTzahI','https://www.youtube.com/watch?v=uVKvgihFYlA','https://www.youtube.com/watch?v=vXPTEpdSeyw'];

    return rand[Math.floor(Math.random()*rand.length)];
}

// Later in the code:
	case "woahmeme":
{
    message.channel.send('Here\'s your WOAH! Meme ' + woahmemes());
 		break;
}
      case "mariomusical":
      		message.channel.send("Because you\'re my superstar!")
      		message.channel.send("https://youtu.be/wGQHQc_3ycE?t=30s")
      		break;
      case "sourcecode":
      var embed = new Discord.RichEmbed()
      .setColor('40E0D0')
      .setTitle('HackerBot Source Code')
      .setDescription('Here you can view and download the source code. Please note that the GitHub Source Code gets updated every week.')
      .setURL('https://mr-hacker894.github.io/HackerBot/')
      message.channel.sendEmbed(embed)
      break;
            break;
      case "invite":
      	message.channel.send('Here is the invite to the server requested by,' + message.author.toString() + ".")
    	var embed = new Discord.RichEmbed()
    	.setColor('008080')
    	.setTitle('Invite to HackerWorld Server')
    	.setURL('https://discord.gg/TuUEEjF')
    	message.channel.sendEmbed(embed)
    	break;
    case "kernalpanic":
    	message.channel.send('Might wanna go the Apple Genius Bar!')
    	message.channel.sendFile('http://i.imgur.com/Ev03b0i.jpg')
    	break;
    case "test":
    	message.channel.send('Testing...')
    	message.channel.sendFile('https://media.giphy.com/media/8GY3UiUjwKwhO/giphy.gif')
    	message.member.send('Testing...')
    	message.member.sendFile('https://media.giphy.com/media/8GY3UiUjwKwhO/giphy.gif')
    	break;
    case "botinvite":
    	message.channel.send("Here is an invite for HackerBot requested by, " + message.author.toString() + ".")
    	var embed = new Discord.RichEmbed()
    	.setColor('40E0D0')
    	.setTitle('HackerBot Invite')
    	.setURL('https://discordapp.com/oauth2/authorize?client_id=342054071060004884&scope=bot&permissions=0')
    	message.channel.sendEmbed(embed)
    	break;
    case "info":
    	message.channel.send('For some existing and upcoming commands, HackerBot may need an Adminstrative role.')
    	var embed = new Discord.RichEmbed()
    	.setColor("ffff00")
    	.setTitle('HackerBot Info')
    	.setImage("https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
    	.addField('Owner','MrHacker894')
    	.addField('API','Discord.js')
    	.addField('Helpers', 'DannyBoi, BloxxerCreeperDTC, The Discord.js Community')
    	.addField('Testers', 'Corbs, Ion, DannyBoi')
    	.addField('Version', '0.1 RevA')
      .setFooter("Version 0.1 RevA ","https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
		message.channel.sendEmbed(embed)
    	break;
    case "help":
        var embed = new Discord.RichEmbed()
        .setColor("FFA500")
        .setTitle('Help From HackerBot')
        .addField('>help', 'Find out what commands are available and what they do.')
      	.addField('>ping', 'Pong!')
        .addField('>test', 'Test to see if the bot is working correctly.')
        .addField('>yt','Get a link to the MrHacker YT Channel')
        .addField('>changelog','See whats new in the lastest build of HackerBot')
        .addField('>info', 'Shows info on HackerBot.')
        .addField('>invite','Get an Invite to the server.')
        .addField('>botinvite','Get a Bot OAuth Invite for your server.')
        .addField('>website','View the HackerWorld Website :D')
        .addField('>sourcecode','View the HackerBot Source Code')
        .addField('>suggestion','Send a suggestion for future bot features.')
          .addField('>upcomingfeatures','See what features are coming :D')
        .setFooter("Version 0.1 RevA ","https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
        message.member.sendEmbed(embed)
        var embed = new Discord.RichEmbed()
        .setColor("FFA500")
        .setTitle('Other Commands')
        .addField('>swag','meh swag is great')
        .addField('>notproductive','for the non-productive peeps')
        .addField('>siri','Ask Siri to complete tasks for you.')
        .addField('>shrug','meh')
        .addField('>tableflip','When you just feel like flipping a table over.')
        .addField('>bsod','When your PC just can\'t take it anymore.')
        .addField('>bigorder','I think we all know what this is.')
        .addField('>rage','Rage Quit')
    .addField('>botwganonmusic','Ganon Boss Fight Music from BTOW')
      .addField('>dannyslife','Read DannyBoi\'s Biography')
      .addField('>rps','ROCK PAPER SCISSORS.....BANG BANG')
      .addField('>coinflip','Flip a coin, not a finger')
      .addField('>8ball','Have your questions answered.....by a randomizer')
      .addField('>mariomusical','Listen to the Mario Musical')
      .addField('>woahmeme','WOAH MEMES')
      .addField('>dancinghotdog','Don\'t worry. Snapchat has made its impact on this servere too')
      .addField('>whats9+10','21')
      .addField('>gtx1080','I\'AM A GTX 1080!')
      .addField('>importthis','A reference to Python IDE')
        .addField('Added error screens','Type error then a color. You can also type error example for a list of all possible errors')
        .setFooter(" Version 0.1 RevA ","https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
      message.member.sendEmbed(embed)
        var embed = new Discord.RichEmbed()
		.setColor("FFA500")
		.setTitle('Ban and Kick Command Info')
		.addField('>Ban','Can only be used if a user has a role named Owner or Admin.')
		.addField('The >Unban command is not functioning at the moment','If you would like to contribute some code type >suggestion.')
		.addField('>Kick','Can only be used if a user has a role named Owner, Admin, or Moderator.')
    .setFooter("Version 0.1 RevA ","https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
		message.member.sendEmbed(embed)
         var embed = new Discord.RichEmbed()
        .setColor("FFA500")
		.setTitle('Purge Commands')
		.addField('>purgeall','Purge at a max of 100 messages')
		.addField('>purge75','Purge at a max of 75 messages')
		.addField('>purge50','Purge at a max of 50 messages')
		.addField('>purge25','Purge at a max of 25 messages')
		.addField('>purge15','Purge at a max of 15 messages')
		.addField('>purge10','Purge at a max of 10 messages')
		.addField('>purge5','Purge at a max of 5 messages')
		.addField('>purge3','Purge at a max of 3 messages')
    .setFooter("Version 0.1 RevA ","https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
		message.member.sendEmbed(embed)
        break;
    case "shrug":
    		message.channel.sendFile('https://media.giphy.com/media/ZeNmLY6FISq4M/giphy.gif')
    		break;
    case "notproductive":
    		message.channel.send('https://tenor.com/view/bouncing-weeeeee-gif-3451476')
    		break;
    case "dancinghotdog":
    		message.channel.send('DANCING HOTDOG')
    		message.channel.send('https://www.youtube.com/watch?v=OH9VByxUczc')
    		break;
    case "suggestion":
    		message.channel.send('If you would like to submit a suggestion or concern visit one, or both, of the links below.')
    		message.channel.send('https://goo.gl/forms/GWKyx82w7UGH06yl2')
    		message.channel.send('https://github.com/Mr-Hacker894/HackerBot/issues')
    		break;
    case "yt":
    	message.channel.send("Here is MrHacker894's YouTube Channel," + message.author.toString() + ".")
    	var embed = new Discord.RichEmbed()
    	.setColor("FF0000")
    	.setTitle('MrHacker894s YT Channel')
    	.setDescription('All the hacker can go to this channel')
    	.setURL("https://www.youtube.com/channel/UCkimM7YfH4LQn-EjL4e_rOg?view_as=subscriber")
    	.setFooter("MrHacker YT Channel")
    	message.channel.sendEmbed(embed)
    	break;
    case "idlebot":
    	message.channel.send('Updating Hacks')
    	client.user.setStatus('idle')
    	client.user.setGame('Updating Hacks')
    		break;
    case "invisbot":
    	message.channel.send('Installing New Hacks')
    	client.user.setStatus('invisible')
    	client.user.setGame('Installing New Hacks')
    		break;
    case "dndbot":
    	message.channel.send('Turning off Notifiers for Security')
    	client.user.setStatus('dnd')
    	client.user.setGame('Notifiers = Off')
    		break;
    function doMagic8BallVoodoo() {
    var rand = ['Yes', 'No', 'Answer is hazy, try again later.', 'It seems likely', 'Maybe yes, maybe no', 'It doesn\'t seem likely', 'Yes','No'];

    return rand[Math.floor(Math.random()*rand.length)];
}

// Later in the code:
	case "8ball":
{
    message.channel.send('Your anwser is: ' + doMagic8BallVoodoo());
 		break;
}
	function coinflipping() {
	var rand = ['Heads!', 'Tails!', 'Heads!', 'Tails!','Heads!', 'Tails!','Heads!', 'Tails!',]
	return rand[Math.floor(Math.random()*rand.length)];
}

// Later in the code:
	case "coinflip":
{
    message.channel.send('We have, ' + coinflipping());
 		break;
}
	function rockpaperscissors() {
	var rand = ['Rock!', 'Paper','Scissors', 'Rock!', 'Paper','Scissors', 'Rock!', 'Paper','Scissors', 'Rock!', 'Paper','Scissors', 'Rock!', 'Paper','Scissors', ]
	return rand[Math.floor(Math.random()*rand.length)];
}

//Later in the coding of the codes of the code
	case "rps":
{
    message.channel.send('You got, ' + rockpaperscissors());
 		break;
}
  function bsods() {
    var rand = ['https://i.ytimg.com/vi/LIRk9esWaKQ/maxresdefault.jpg', 'http://4.bp.blogspot.com/_ybpq5zhL-RU/TAH78iTaLnI/AAAAAAAAAH8/GMcDxg7gLn8/s1600/Windows_9X_BSOD.png', 'https://i.ytimg.com/vi/VxcyPHqVVjU/maxresdefault.jpg', 'https://img.raymond.cc/blog/wp-content/uploads/2005/10/bluescreenscreensaver.png', 'http://www.betaarchive.com/imageupload/1307546630.or.79310.png', 'https://i.ytimg.com/vi/K8tOpcyu_hw/hqdefault.jpg', 'https://i.ytimg.com/vi/FWngeMbbTuk/maxresdefault.jpg', 'http://cdn5.whealmedia.com/wp-content/uploads/bsod_windows2000.jpg?x55336', 'http://cdn5.whealmedia.com/wp-content/uploads/bsod_windowsxp.jpg?x55336', 'http://cdn5.whealmedia.com/wp-content/uploads/bsod_windows8.jpg?x55336', 'http://cdn5.whealmedia.com/wp-content/uploads/rsod_windowsvista.png?x55336', 'http://thewindowsclub.thewindowsclubco.netdna-cdn.com/wp-content/uploads/2015/09/Blue-Screen-of-Death-Windows-10.png']
    return rand[Math.floor(Math.random()*rand.length)];
  }
    case "bsod":
  {
    message.channel.send(':( ' + bsods());
    break;
}
case "say":
    message.channel.send("This command is a work in progress.")
    message.channel.send(" " + message + "!")
          break;
	case "swag":
		message.channel.send('Here\'s some swag.')
		message.channel.sendFile('https://media.giphy.com/media/ehc19YLR4Ptbq/giphy.gif')
		break;
    case "onlinebot":
    	message.channel.send('Excecuting Hacks')
    	client.user.setGame('Excecuting Hacks')
    	message.channel.send('25%')
      message.channel.send('50%')
      message.channel.send('75%')
      message.channel.send('100%')
      message.channel.send('Hacking into the NSA')
    	client.user.setStatus('online')
    	client.user.setGame('Hacking into the NSA')
    		break;
    case "statustest":
    	message.channel.send('Testing status')
    	client.user.setGame()
    		break;
    case "bigorder":
    	message.channel.send('I\’ll have two number 9\'s, a number 9 large, a number 6 with extra dip, a number 7, two number 4\'s, one with cheese, and a large soda.')
    	message.channel.sendFile('http://pre06.deviantart.net/62e6/th/pre/f/2017/010/3/9/theorder_by_lawlsomedude-dauzlib.png')
    	break;
      case "bsod":
    	message.channel.send(':(')
    	message.channel.sendFile('http://www.howtogeek.com/wp-content/uploads/2013/05/windows-8-blue-screen-error.png')
    	break;
    case "tableflip":
    	message.channel.send('(╯°□°）╯︵ ┻━┻ ')
    	message.channel.sendFile('https://media.giphy.com/media/uKT0MWezNGewE/giphy.gif')
    	break;
    case "upcomingfeatures":
    	message.channel.send('To see what features are coming, click the link below.')
    	message.channel.send('https://mr-hacker894.github.io/HackerBot/')
    	message.channel.send('It\'s easier to do it this way :)')
    	break;
    case "dannyslife":
    	message.channel.send('Here is the biography about DannyBoi')
    	var embed = new Discord.RichEmbed()
    	.setColor('000000')
    	.setTitle('Danny\'s Life')
    	.setURL('https://drive.google.com/file/d/0B3AjZwDXKX8fY0RUVTZUV0RrNGs/view?usp=sharing')
    	message.channel.sendEmbed(embed)
    	break;
    case "changelog":
    	message.member.send("Here\'s what\'s changed," + message.author.toString() + "!")
    	var embed = new Discord.RichEmbed()
    	.setColor('FF0000')
    	.setTitle('0.1 RevA')
		  .addField('Added DM feature for some commands','Effects almost every command that uses embeds.')
		.addField('Added new auto-responses','Check the source code to find them :D')
		.addField('Added >swag','Get some swag on')
		.addField('Added >shrug','Meh')
		.addField('Organized Help','For all the OCD peeps')
		.addField('Added Purge Commands','See >help for that')
		.addField('Added >rolldice','Roll the dice')
    .addField('Added >sourcecode and website','For GitHUB')
    	.addField('Updated Help','Effects -help')
    	.addField('Added ban and kick','see >help')
    	.addField('added >suggestion','see >help')
    	.addField('Added Join-Leave Messages')
    	.setDescription('Fixed some embeds giving the wrong prefix')
   		message.member.sendEmbed(embed)
   	  	break;
     default:
      message.channel.send("Sorry, but that command is not Hacker approved.")
      break;

  }
});

client.login("token_here");
