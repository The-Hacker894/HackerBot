const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ">"
const package = require("./package.json");
const fs = require("fs");

client.on("ready", () => {
  console.log(`HackerBot has started hacking!`)
});
client.on('message', msg => {
  if (msg.content === 'test') {
    msg.channel.send('Test Successful');
    msg.channel.sendFile('https://media.giphy.com/media/8GY3UiUjwKwhO/giphy.gif')
  }
if(msg.content === 'prefix') {
    msg.channel.send("My prefix is >")
    msg.member.send("My prefix is >")
  }
if(msg.content === 'peer pressure') {
    msg.channel.send("https://cdn.discordapp.com/attachments/327184201440952332/344322800938516500/unknown.png")
  }
  if(msg.content === 'Peer Pressure') {
      msg.channel.send("https://cdn.discordapp.com/attachments/327184201440952332/344322800938516500/unknown.png")
  }
if(msg.content === 'Sean Collins is a pain in the neck') {
    msg.channel.send("Why yes he is.")
  }
if(msg.content === 'MrHacker is a pain in the neck') {
    msg.channel.send("I\'d have to disagree with you on that, buddy")
  }
if(msg.content === 'MrHacker894 is a pain in the neck') {
    msg.channel.send("I\'d have to disagree with you on that, buddy")
  }
if(msg.content === 'mrhacker is a pain in the neck') {
    msg.channel.send("I\'d have to disagree with you on that, buddy")
  }
  if (msg.content === 'Apple') {
    msg.channel.send('https://www.apple.com');
  }
  if (msg.content === 'apple') {
    msg.channel.send('https://www.apple.com');
  }
  if (msg.content === 'Banana') {
    msg.channel.send('https://www.banana.com');
  }
  if (msg.content === 'banana') {
    msg.channel.send('https://www.banana.com');
  }
  if (msg.content === 'Pear') {
    msg.channel.send('https://www.pear.com');
  }
  if (msg.content === 'pear') {
    msg.channel.send('https://www.pear.com');
  }
  if (msg.content.includes === 'exdee') {
    if (msg.author.bot) return;
    msg.channel.send('Oi!')
    msg.channel.send('That\'s my word m8.')
  }
  if (msg.content.includes === 'lol') {
    msg.channel.send('exdee');
  }
  if (msg.content === 'kys') {
    msg.channel.send('*stabs self with knife*');

  }
  if (msg.content === 'shut up') {
    msg.channel.send('kys');
  }
  if (msg.content.includes === 'do your work!') {
    msg.channel.send('You try executing everyone\'s commands every day with no break or compensation!');
  }
  if (msg.content.includes === 'do your work') {
    msg.channel.send('You try executing everyone\'s commands every day with no break or compensation!');
  }
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
      console.log('Ping Sent on ' + message.guild.name + ".")
      message.channel.sendFile('https://cdn.discordapp.com/attachments/327906012344614932/342075618604613633/pong.png')
      console.log('Ping Recieved on ' + message.guild.name + ".")
      break;
    case "website":
      var embed = new Discord.RichEmbed()
        .setColor('008080')
          .setTitle('HackerBot Website')
            .setURL('https://mr-hacker894.github.io/HackerBot/')
          message.channel.sendEmbed(embed)
          console.log('Website command used on ' + message.guild.name + '.')
        break;
    case "consoleissue":
      console.log('Issue report: ' + message.content.split(' ').slice(1).join(' ') + ' from ' + message.guild.name + '.')
      message.channel.send('Issue Reported to console')
      message.channel.send('Thank you :)')
      break;
    case "":
      message.channel.send('Yep that is my prefix')
      break;
    case " ":
      message.channel.send('Yep that is my prefix')
      break;
    case ":O":
      message.channel.send('>:O')
      console.log(':O')
      break;
    case ":o":
      message.channel.send('>:o')
      break;
    case ":D":
      message.channel.send('>:D')
      console.log(':D')
      break;
    case ":I":
      message.channel.send('>:I')
      console.log(':I')
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
          case "uptime":
        let seconds = client.uptime / 1000 + ' seconds'
        let minutes = client.uptime / 60000 + ' minutes'
        let hours = client.uptime / 3600000 + ' hours'
        let days = client.uptime / 86400000 + ' days'
        var embed = Discord.RichEmbed()
        .setColor()
        .setTitle('HackerBot Uptime')
        .addField('Uptime Seconds', client.uptime / 1000 + ' seconds')
        .addField('Uptime Minutes', client.uptime / 60000 + ' minutes')
        .addField('Uptime Hours', client.uptime / 3600000 + ' hours')
        .addField('Uptime Days', client.uptime / 86400000 + ' days')
        console.log('Uptime Command used on ' + message.guid.name + '.')
        break;
      case "serverinfo":
        var embed = new Discord.RichEmbed()
        .setColor('00FF00')
        .setTitle('Server Info')
        .addField('Server Name', message.guild.name)
        .addField('Server ID', message.guild.id)
        .addField('Member Count', message.guild.memberCount)
        .addField('Channel Count', message.guild.channels.size)
        message.channel.sendEmbed(embed)
        console.log('ServerInfo command used ' + message.guild.name + '.')
        break;
      case "success":
        message.channel.sendFile('https://cdn.discordapp.com/attachments/216032723851018251/346777021780590612/meme.png')
        console.log('Success command used ' + message.guild.name + '.')
        break;
      case "ban":
      var package = require("./package.json");
      var embed = new Discord.RichEmbed()
     .setColor("FFA500")
  .setTitle('Ban Usage')
  .setDescription('This command will only work if your role is named Owner, Admin, or Moderator')
  .addField('Usage','>banuser @MrHacker Hacking into NSA')
  .setFooter("Version " + package.version + " (Ban Usage)","https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
  message.channel.sendEmbed(embed)
  console.log('Ban Command used on ' + message.guild.name + '.')
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
              message.channel.sendMessage("The user, " + message.author.toString() + "has banned a member for " + reason + ".");
              message.member(banMember).sendMessage('You have been banned by ' + message.author.toString() + " for" + reason + ".")
              console.log('A user has been BANNED on ' + message.guild.name + '.')
            }
            else {
              return message.reply("You don\'t have the perms to ban members you fake hacker");
            }
	             break;
  case "kick":
      var package = require("./package.json");
  var embed = new Discord.RichEmbed()
 .setColor("FFA500")
.setTitle('Kick Usage')
.setDescription('This command will only work if your role is named Owner, Admin, or Moderator')
.addField('Usage','>kickuser @MrHacker Sending too many WOAH Memes')
.setFooter("Version " + package.version + " (Kick Usage)","https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
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
      message.guild.member(kickMember).kick(reason);{
        message.channel.sendMessage("The user, " + message.author.toString() + " has kicked a member for " + reason + ".");
        message.member.sendMessage("You have been kicked by " + message.author.toString() + " for " + reason + ".");
      }
    }
    else {
      return message.reply("You don\'t have the perms to kick members you fake hacker.");
    }
    break;
    case "purge":
    var package = require("./package.json");
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
.setFooter("Version " + package.version + " (Usage)","https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
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
          message.guild.member(purgeall);{
            message.channel.sendMessage("100 Messages Purged.");
              message.channel.send('If some messages do not purge then that is the effect of the new Discord API not allowing Bulk Deletes of messages under 14 days old.');
            }
        }
        else {
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
             message.guild.member(purgeallss);{
               message.channel.sendMessage("50 Messages Purged.");
                message.channel.send('If some messages do not purge then that is the effect of the new Discord API not allowing Bulk Deletes of messages under 14 days old.');
              }
           }
           else {
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
            message.guild.member(purgeallsss);{
              message.channel.sendMessage("75 Messages Purged.");
                message.channel.send('If some messages do not purge then that is the effect of the new Discord API not allowing Bulk Deletes of messages under 14 days old.');
              }
          }
          else {
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
          message.guild.member(purgeallssss);{
            message.channel.sendMessage("25 Messages Purged.");
              message.channel.send('If some messages do not purge then that is the effect of the new Discord API not allowing Bulk Deletes of messages under 14 days old.');
            }
        }
        else {
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
          message.guild.member(purgeallsssss);{
            message.channel.sendMessage("15 Messages Purged.");
              message.channel.send('If some messages do not purge then that is the effect of the new Discord API not allowing Bulk Deletes of messages under 14 days old.');
            }
        }
        else {
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
          message.guild.member(purgeallssssss);{
            message.channel.sendMessage("10 Messages Purged.");
              message.channel.send('If some messages do not purge then that is the effect of the new Discord API not allowing Bulk Deletes of messages under 14 days old.');
            }
        }
        else {
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
          message.guild.member(purgeallsssssss);{
            message.channel.sendMessage("5 Messages Purged.");
              message.channel.send('If some messages do not purge then that is the effect of the new Discord API not allowing Bulk Deletes of messages under 14 days old.');
            }
        }
        else {
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
          message.guild.member(purgeallssssssss);{
            message.channel.sendMessage("3 Messages Purged.");
              message.channel.send('If some messages do not purge then that is the effect of the new Discord API not allowing Bulk Deletes of messages under 14 days old.');
            }
        }
        else {
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
    function dansquotes() {
        var rand = ['"When life gives you lemons make lemonade that does not even taste good because life did not give you sugar and water"', '"Unless your name is google stop acting like you know everything"']
          return rand[Math.floor(Math.random()*rand.length)];
  }
  case "danquotes":
  {
      message.channel.send(dansquotes() + " -DanGamingTV")
      break;
  }
  case "danquote":
  {
      message.channel.send(dansquotes() + " -DanGamingTV")
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
    case "error":
      var embed = new Discord.RichEmbed()
      .setColor("FFFF00")
      .setTitle('Error Commands')
      .addField('Error Red','>error red')
      .addField('Error Orange','>error orange')
      .addField('Error Yellow','>error yellow')
      .addField('Error Green','>error green')
      .addField('Error Blue','>error blue')
      .addField('Error Purple','>error purple')
      break;
    message.channel.sendEmbed
      switch (args[1]) {
        case "red":
          message.channel.sendFile('http://www.fixwindowserrors.biz/blog/wp-content/uploads/2015/09/red.png')
          break;
        case "orange":
          message.channel.send('https://fud.community.services.support.microsoft.com/Fud/FileDownloadHandler.ashx?fid=f3003eff-7341-4647-b31d-7221dfab6994')
          break;
        case "yellow":
          message.channel.sendFile('https://i.ytimg.com/vi/7NrfHiwaD7I/maxresdefault.jpg')
          break;
        case "green":
          message.channel.sendFile('https://cdn.vox-cdn.com/thumbor/noeJrDgKpLMksV6LsKNAXdw_cvM=/0x0:1024x768/920x613/filters:focal(431x303:593x465):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/52504709/GSOD.0.jpeg')
          break;
        case "blue":
          message.channel.sendFile('http://thewindowsclub.thewindowsclubco.netdna-cdn.com/wp-content/uploads/2015/09/Blue-Screen-of-Death-Windows-10.png')
          break;
        case "purple":
          message.channel.sendFile('http://www.redwireservices.com/wp-content/uploads/2011/06/ESX305-PSOD.jpg')
            break;
        break;
      }
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
    	.setURL('https://discordapp.com/oauth2/authorize?client_id=342054071060004884&scope=bot&permissions=2146958591')
    	message.channel.sendEmbed(embed)
    	break;
    case "info":
    var package = require("./package.json");
    	var embed = new Discord.RichEmbed()
    	.setColor("ffff00")
    	.setTitle('HackerBot Info')
    	.addField('Owner', package.owner)
    	.addField('API', package.language)
      .addField('Description', package.description)
      .addField('Uptime', client.uptime / 1000 + 's')
      .addField('Servers', client.guilds.size)
    	.addField('Helpers', 'DannyBoi, BloxxerCreeperDTC, The Discord.js Community', false)
    	.addField('Testers', 'Corbs, Ion#8844, DannyBoi, Shadow•™ | ▼DQ▼, Jackalope28#6413', false)
    	.addField('Version', package.version)
      .setThumbnail('https://images-ext-1.discordapp.net/external/Z1krf1ZBQTM3mDkke47xThwIF4GEFG0doRAdKRVHgnY/%3Fsize%3D128/https/cdn.discordapp.com/avatars/342054071060004884/4b83b2aa5970b8d34db71fd986abfe30.jpg')
      .setFooter("Version " + package.version,"https://images-ext-1.discordapp.net/external/Z1krf1ZBQTM3mDkke47xThwIF4GEFG0doRAdKRVHgnY/%3Fsize%3D128/https/cdn.discordapp.com/avatars/342054071060004884/4b83b2aa5970b8d34db71fd986abfe30.jpg")
		message.channel.sendEmbed(embed)
    	break;
      case "help":
      let staffRoleIDforhelp = message.guild.roles.filter(r => r.name == 'Owner' || r.name == 'Admin' || r.name == 'Moderator' || r.name == 'Moderators' || r.name == 'Mods' || r.name == "Admins" || r.name == "Administrator").map(r => r.id);
      let isStaffforhelp = false;
      for (const id of staffRoleIDforhelp) {
      if (message.member.roles.has(id)) {
          isStaffforhelp = true;
          break;
      }
      }
      if (isStaffforhelp) {
      var package = require("./package.json");
      var package = require("./package.json");
      var embed = new Discord.RichEmbed()
      .setColor("FFA500")
      .setTitle('Help From HackerBot')
      .addField('>help', 'Find out what commands are available and what they do.')
      .addField('>ping', 'Pong!')
      .addField('>test', 'Test to see if the bot is working correctly.')
      .addField('>yt','Get a link to the MrHacker YT Channel')
      .addField('>changelog','See whats new in the lastest build of HackerBot')
      .addField('>info', 'Shows info on HackerBot.')
      .addField('>uptime usage','Shows the bot uptime in milliseconds')
      .addField('>serverinfo','Shows the server info')
      .addField('>invite','Get an Invite to the server.')
      .addField('>consoleissue', 'Report a Bot Issue through the console')
      .addField('>botinvite','Get a Bot OAuth Invite for your server.')
      .addField('>website','View the HackerWorld Website :D')
      .addField('>sourcecode','View the HackerBot Source Code')
        .addField('>say','A WIP Command')
      .addField('>suggestion','Send a suggestion for future bot features.')
        .addField('>upcomingfeatures','See what features are coming :D')
      .setFooter("Version " + package.version,"https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
      message.member.sendEmbed(embed)
      var package = require("./package.json");
      var embed = new Discord.RichEmbed()
      .setColor("FFA500")
      .setTitle('Other Commands')
      .addField('>danquote','DanGamingTV\'s quotes')
      .addField('>eclipse2017','Experience the Great American Eclipse of August 21, 2017')
      .addField('>swag','meh swag is great')
      .addField('>notproductive','for the non-productive peeps')
      .addField('>siri','Ask Siri to complete tasks for you.')
      .addField('>shrug','meh')
      .addField('>picklerick','I\'M PICKLE RIIIIIICK!')
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
      .addField('>dancinghotdog','Don\'t worry. Snapchat has made its impact on this server too')
      .addField('>whats9+10','21')
      .addField('>gtx1080','I\'AM A GTX 1080!')
      .addField('>importthis','A reference to Python IDE')
      .addField('>error','Error Screens :(')
      .setFooter(" Version " + package.version,"https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
      message.member.sendEmbed(embed)
      var package = require("./package.json");
      var embed = new Discord.RichEmbed()
      .setColor("FFA500")
      .setTitle('Ban and Kick Command Info')
      .addField('>Kick','Can only be used if a user has a role named Owner or Admin.')
      .addField('The >Unban command is not functioning at the moment','If you would like to contribute some code type >suggestion.')
      .addField('>Kick','Can only be used if a user has a role named Owner, Admin, or Moderator.')
      .setFooter("Version " + package.version,"https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
      message.member.sendEmbed(embed)
      var package = require("./package.json");
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
      .setFooter("Version " + package.version,"https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
      message.member.sendEmbed(embed)
      message.channel.send('Help has been DM\'d, ' + message.author.toString() + '.')
      } else {
        var package = require("./package.json");
          var embed = new Discord.RichEmbed()
          .setColor("FFA500")
          .setTitle('Help From HackerBot')
          .addField('>help', 'Find out what commands are available and what they do.')
          .addField('>ping', 'Pong!')
          .addField('>test', 'Test to see if the bot is working correctly.')
          .addField('>yt','Get a link to the MrHacker YT Channel')
          .addField('>changelog','See whats new in the lastest build of HackerBot')
          .addField('>info', 'Shows info on HackerBot.')
          .addField('>uptime usage','Shows the bot uptime in milliseconds')
          .addField('>serverinfo','Shows the server info')
          .addField('>invite','Get an Invite to the server.')
                .addField('>consoleissue', 'Report a Bot Issue through the console')
          .addField('>botinvite','Get a Bot OAuth Invite for your server.')
          .addField('>sourcecode','View the HackerBot Source Code')
          .addField('>suggestion','Send a suggestion for future bot features.')
          .addField('>say','A WIP Command')
          .addField('>upcomingfeatures','See what features are coming :D')
          .setFooter("Version " + package.version,"https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
          message.member.sendEmbed(embed)
          var package = require("./package.json");
        var embed = new Discord.RichEmbed()
          .setColor("FFA500")
          .setTitle('Other Commands')
                .addField('>danquote','DanGamingTV\'s quotes')
                .addField('>eclipse2017','Experience the Great American Eclipse of August 21, 2017')
          .addField('>swag','meh swag is great')
          .addField('>notproductive','for the non-productive peeps')
          .addField('>siri','Ask Siri to complete tasks for you.')
          .addField('>shrug','meh')
          .addField('>picklerick','I\'M PICKLE RIIIIIICK!')
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
          .addField('>dancinghotdog','Don\'t worry. Snapchat has made its impact on this server too')
          .addField('>whats9+10','21')
          .addField('>gtx1080','I\'AM A GTX 1080!')
          .addField('>importthis','A reference to Python IDE')
                .addField('>error','Error Screens :(')
          .setFooter(" Version " + package.version,"https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
          message.member.sendEmbed(embed)
                message.channel.send('Help has been DM\'d, ' + message.author.toString() + '.')
      }
      break;
    case "unban":
      var embed = new Discord.RichEmbed()
        .setColor('0080FF')
        .setTitle('Unban Info')
        .setDescription('Sadly the unban command would not work correctly when it was in testing. Therefore, it has been cut from HackerBot, but will still be tested with every version of HackerBot in case we find something new.')
        .setFooter('Unban Info ' + package.version + '.')
        message.channel.sendEmbed(embed)
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
        message.channel.send('https://ibb.co/b5MeP5')
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
    message.channel.send(message.content.split(' ').slice(1).join(' '))
    message.delete()
          break;
	case "swag":
		message.channel.sendFile('https://media.giphy.com/media/ehc19YLR4Ptbq/giphy.gif')
		break;
    case "eclispe2017":
      message.channel.send('https://imgur.com/XZlyPkB')
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
    case "picklerick":
        message.channel.sendFile("https://media.giphy.com/media/9zXWAIcr6jycE/giphy.gif")
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
    	message.channel.send('Here\'s what\'s changed!')
      var package = require("./package.json");
    	var embed = new Discord.RichEmbed()
    	.setColor('FF0000')
    	.setTitle(package.version + "Changelog")
      .addField('Error Messages cut due to issues with compatibility', 'Effects >banuser, >kickuser, and all purge commands')
      .addField('Added >danquotes','No explanation needed bro')
      .addField('All commands are now logged', 'Use of command, user that uses the command, and the server that that user is on is logged')
      .addField('Version Number now based off of week and day', '5.05 = 5th week, 5 day')
      .addField('Some logging added', 'I didn\'t quite finish it so not all of the commands have it :P')
      .addField('Added >picklerick', 'I\'M PICKLE RIIIIIICK')
      .addField('Added >eclipse2017', 'The amazing eclispe of August 21, 2017')
      .addField('Changelog will not DM the user anymore','TBH I don\'t know why in the heck I included this')
      .setFooter('Changelog ' + package.version,'https://images-ext-1.discordapp.net/external/Z1krf1ZBQTM3mDkke47xThwIF4GEFG0doRAdKRVHgnY/%3Fsize%3D128/https/cdn.discordapp.com/avatars/342054071060004884/4b83b2aa5970b8d34db71fd986abfe30.jpg')
   		message.channel.sendEmbed(embed)
   	  	break;
     default:
      message.channel.send("Sorry, but that command is not Hacker approved.")
      break;

  }
});
client.login(package.token)
