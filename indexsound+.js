const Discord = require("discord.js");
const client = new Discord.Client();
var package = require("./package.json");
var config = require("./config.json");
var info = require("./info.json");
const fs = require("fs");
const prefix = config.prefix
const ce = require("embed-creator");
let ownerida = 270375857384587264
let owneridb = '270375857384587264'



client.on("ready", () => {
  console.log(`HackerBot has started hacking!`)
  client.user.setGame(client.guilds.size + ' servers | ' + config.prefix + 'help')
});
client.on('message', msg => {
  if (msg.content === 'test') {
    msg.channel.send('Test Successful');
    msg.channel.sendFile('https://media.giphy.com/media/8GY3UiUjwKwhO/giphy.gif')
  }
if(msg.content === 'prefix') {
    msg.channel.send("My prefix is " + config.prefix)
  }
  if (msg.content === '@HackerBot#0162') {
    msg.channel.send('No need to mention me! My prefix is ' + config.prefix)
  }
  if (msg.content === '@HackerBot') {
    msg.channel.send('No need to mention me! My prefix is ' + config.prefix)
  }
  if (msg.content === 'exdee') {
    if (msg.author.bot) return;
    msg.channel.send('Oi!')
    msg.channel.send('That\'s my word m8.')
  }
  if (msg.content === 'lol') {
    msg.channel.send('exdee');
  }
  if (msg.content === 'shut up') {
    msg.channel.send('kys');
  }
  if (msg.content === 'do your work!') {
    msg.channel.send('You try executing everyone\'s commands every day with no break or compensation!');
  }
  if (msg.content === 'do your work') {
    msg.channel.send('You try executing everyone\'s commands every day with no break or compensation!');
  }
});
var disabled = 'This command has been disabled'

client.on("message", message => {
  let args = message.content.substring(prefix.length).split(" ");
  if (message.author.equals(client.user)) return;
  if (!message.content.startsWith(prefix)) return;

  switch (args[0].toLowerCase()) {

    case "music":
      message.channel.send('`Sorry, but I do not support music at this time. Please invite HackerBot Music for those commands`')
      message.channel.send('https://discordapp.com/oauth2/authorize?client_id=365255372480446465&scope=bot&permissions=2146958591')
      break;
      case "ping": {
        var embed = new Discord.RichEmbed()
          .setColor('00FF00')
          .setTitle('Ping Usage')
          .addField('>textping','Test your ping with text')
          .addField('>imageping','Test your ping with an image')
          message.channel.sendEmbed(embed)
          message.delete()
          }
          break;

    case "play":
    message.channel.send('`Sorry, but I do not support music at this time. Please invite HackerBot Music for those commands`')
    message.channel.send('https://discordapp.com/oauth2/authorize?client_id=365255372480446465&scope=bot&permissions=2146958591')
    break;
    case "queue":
    message.channel.send('`Sorry, but I do not support music at this time. Please invite HackerBot Music for those commands`')
    message.channel.send('https://discordapp.com/oauth2/authorize?client_id=365255372480446465&scope=bot&permissions=2146958591')
    break;
    case "skip":
    message.channel.send('`Sorry, but I do not support music at this time. Please invite HackerBot Music for those commands`')
    message.channel.send('https://discordapp.com/oauth2/authorize?client_id=365255372480446465&scope=bot&permissions=2146958591')
    break;
    case "textping":
    message.channel.send('Pinging...').then(sent => {
    sent.edit(`Pong! Took ${sent.createdTimestamp - message.createdTimestamp}ms`);
    console.log('Text Ping performed on ' + message.guild.name + ` took ${sent.createdTimestamp - message.createdTimestamp}ms`)
});
    message.delete()
break;
  case "imageping":
    message.channel.send('Pinging...').then(sent => {
      sent.edit('http://madeformakers.org/wp-content/uploads/2016/01/pong.png').then(msg => {
        msg.edit(`Pong! Took ${sent.createdTimestamp - message.createdTimestamp}ms`);
        console.log('Image Ping performed on ' + message.guild.name + ` took ${sent.createdTimestamp - message.createdTimestamp}ms`)
      })
    })
    message.delete()
break;
    case "setmotd":{
    var info = require("./info.json");
    let setnewmotd =  message.content.split(' ').slice(1).join(' ');
    info.motd = setnewmotd;
    fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
    }
    message.delete()
    message.channel.send('The MOTD has been set to ' +  message.content.split(' ').slice(1).join(' '))
    break;
    case "pi":
    var value = eval("Math.PI");
    message.channel.send(value)
    message.delete()
    break;
    case "math":
    message.channel.send(disabled)
    message.delete()
  //    var mathequal = eval(message.content.split(' ').slice(1).join(' '))
  //    message.channel.send('Your answer is ' + mathequal)
    break;
    case "jsexec":
    message.channel.send(disabled)
    message.delete()

    //  var execute = eval(message.content.split(' ').slice(1).join(' '))
  //    var embed = new Discord.RichEmbed()
    //  .setColor("00FF00")
  //    .setTitle("JS Execution")
    //  .addField(':inbox_tray:','**Input**')
  //    .addField(message.content.split(' ').slice(1).join(' '), '↓')
    //  .addField(':outbox_tray:','**Output**')
  //    .addField(execute, '∎')
//    message.channel.sendEmbed(embed)
      break;
    case "motd":
    var info = require("./info.json");
      message.delete()
      message.channel.send(info.motd)
      break;
    case "setnick":
      var embed = new Discord.RichEmbed()
        .setTitle('Nickname Usage')
        .addField('>setusernick @MrHacker894#1072 WOAH', 'Set your own nickname')
        .addField('>setbotnick bothacker', 'Sets the bot nickname for your server')
        message.channel.sendEmbed(embed)
        break;
    case "setusernick":

      let unickstaffRoleIDs = message.guild.roles.filter(r => r.name == "Owner" || r.name == "Admin" || r.name == "Admins" || r.name == "Administrator" || r.name == 'Moderator' || r.name == 'Moderators' || r.name == 'Mods').map(r => r.id);
      let unickisStaff = false;
    for (const id of unickstaffRoleIDs) {
      if (message.member.roles.has(id)) {
        unickisStaff = true;
        break;
}
}
if (unickisStaff) {
  let nickuserset = message.guild.member(message.mentions.users.first())
  let usernick = message.content.split(/\s+/g).slice(2).join(" ")
  if(nickuserset < 1) return message.channel.send("Please provide a user").catch(console.error);
  if(usernick < 1) return message.channel.send("Please provide a nickname").catch(console.error);
      message.guild.member(nickuserset).setNickname(usernick)
      message.delete()
      message.channel.send('Check ' + nickuserset + '\'s nick/username to see if the results match ' + usernick)
    }
    else {
      return message.reply("You don\'t have the perms to change user nicknames you fake hacker");
    }

      break;
      case "dmuser":
        let user = message.guild.member(message.mentions.users.first())
        message.guild.member(user).sendMessage('A message from the user ' + message.author.toString() + ' has arrived!')
        message.guild.member(user).sendMessage(message.content.split(/\s+/g).slice(2).join(" "))
        message.channel.send('Message sent to ' + user + ' successfully!')
        break;
    case "setbotnick":
    let bnickstaffRoleIDs = message.guild.roles.filter(r => r.name == "Owner" || r.name == "Admin" || r.name == "Admins" || r.name == "Administrator" || r.name == 'Moderator' || r.name == 'Moderators' || r.name == 'Mods').map(r => r.id);
      let bnickisStaff = false;
    for (const id of bnickstaffRoleIDs) {
      if (message.member.roles.has(id)) {
        bnickisStaff = true;
        break;
}
}
if (bnickisStaff) {
    let botid = client.user.id
    let botnick = message.content.split(' ').slice(1).join(' ')
    if(botnick < 1) return message.channel.send("Please provide a nickname for me").catch(console.error);
      message.guild.members.get(botid).setNickname(botnick);
      message.delete()
      message.channel.send('Check my nickname to see if it was set to ' + botnick)
    }
    else {
      return message.reply("You don\'t have the perms to change HackerBot\'s Nickname you fake hacker") && (console.log('A user on the server ' + message.guild.name + ' attempted to change HackerBot\'s Nickname but failed'));
    }

      break;
    case "setgame":
        client.user.setGame(message.content.split(' ').slice(1).join(' '))
        message.delete()
        message.channel.send('Set Game Status to ' + message.content.split(' ').slice(1).join(' '))
      break;

    case "website":
      var embed = new Discord.RichEmbed()
        .setColor('008080')
          .setTitle('HackerBot Website')
            .setURL('https://sites.google.com/view/hackerbot/home')
          message.channel.sendEmbed(embed)

        break;
    case "musicwebsite":
      var embed = new Discord.RichEmbed()
        .setColor('008080')
        .setTitle('HackerBot Music Website')
        .setURL('https://sites.google.com/view/hackerbot-music/home')
        message.channel.sendEmbed(embed)
        break;
    case "devpage":
      var embed = new Discord.RichEmbed()
        .setColor('008080')
        .setTitle('MrHacker894 Dev Page')
        .setURL('https://sites.google.com/view/mrhacker-dev-page/home')
        message.channel.sendEmbed(embed)
        break;
    case "wordformatting":
      var embed = new Discord.RichEmbed()
        .setColor('008080')
        .setTitle('Discord Word Formatting')
        .addField('Strikethrough','Two Tildas ~~ at the beginning and end of your phrase')
        .addField('Bold','Two asteriks ** at the beginning and end of your phrase')
        .addField('Italics','One asterik * or one underscore _ at the beginning and end of your phrase')
        .addField('Plain Text Partial','One ` at the beginning and end of your phrase')
        .addField('Plain Text Partial2','Two `` at the beginning and end of your phrase')
        .addField('Plain Text Full','Three ``` at the beginning and end of your phrase')
        message.channel.sendEmbed(embed)
        break;
    case "consoleissue":
    let issuereport = message.content.split(' ').slice(1).join(' ')
    if(issuereport.length < 1) return message.channel.send('You must provide an issue.').catch(console.issue);
      console.log('Issue report: ' + issuereport + ' from ' + message.guild.name + '.')
      message.delete()
      message.channel.send('Issue Reported to console')
      message.channel.send('Thank you :)')
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
          case "uptime":
        let seconds = client.uptime / 1000 + ' seconds'
        let minutes = client.uptime / 60000 + ' minutes'
        let hours = client.uptime / 3600000 + ' hours'
        let days = client.uptime / 86400000 + ' days'
        var embed = new Discord.RichEmbed()
        .setColor()
        .setTitle('HackerBot Uptime')
        .addField('Uptime Seconds', seconds)
        .addField('Uptime Minutes', minutes)
        .addField('Uptime Hours', hours)
        .addField('Uptime Days', days)
        message.channel.sendEmbed(embed)
        break;
        case "unixtimestamp":
          message.channel.send(Date.now() / 1000 + ' seconds')
          break;


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

        break;
      case "membercount":
        var embed = new Discord.RichEmbed()
        .setColor('00FF00')
        .setTitle('Member Count')
        .addField('Member Count', message.guild.memberCount)
        message.channel.sendEmbed(embed)
        break;
      case "members":
      var embed = new Discord.RichEmbed()
      .setColor('00FF00')
      .setTitle('Member Count')
      .addField('Member Count', message.guild.memberCount)
      message.channel.sendEmbed(embed)
      break;
      case "channelcount":
        var embed = new Discord.RichEmbed()
        .setColor('00FF00')
        .setTitle('Channel Count')
        .addField('Channel Count', message.guild.channels.size)
        message.channel.sendEmbed(embed)
        break;
      case "channels":
      var embed = new Discord.RichEmbed()
      .setColor('00FF00')
      .setTitle('Channel Count')
      .addField('Channel Count', message.guild.channels.size)
      message.channel.sendEmbed(embed)
      break;
      case "servername":
        var embed = new Discord.RichEmbed()
        .setColor('00FF00')
        .setTitle('Server Name')
        .addField('Server Name', message.guild.name)
        message.channel.sendEmbed(embed)
        break;
      case "serverid":
        var embed = new Discord.RichEmbed()
        .setColor('00FF00')
        .setTitle('Server ID')
        .addField('Server ID', message.guild.id)
        message.channel.sendEmbed(embed)
        break;
      case "success":
        message.channel.sendFile('https://cdn.discordapp.com/attachments/216032723851018251/346777021780590612/meme.png')

        break;
      case "newmute":
      message.channel.send(disabled)
    //  {
        //let reason = message.content.split(/\s+/g).slice(2).join(" ")
        //let users = message.guild.member(message.mentions.users.first())
        //let muteRole = client.guilds.get(message.guild.id).roles.find("name","muted")
        //if (!muteRole) return message.guild.createRole({
            //name: 'muted',
          //  color: 'BLUE',

        //  }).catch(console.error).then(()=>
      //    message.channel.send('Creating Role'))
      //  if (reason.length < 1) return message.channel.send('You must provide a reason').catch(console.error)
    //    if (message.mentions.user.size < 1) return message.channel.send('You must mention a user.').catch(console.error)

    //    message.guild.member(users).addRole(muteRole)
  //    }
        break;
      case "ban":
      var config = require("./config.json");
      var embed = new Discord.RichEmbed()
     .setColor("FFA500")
  .setTitle('Ban Usage')
  .setDescription('This command will only work if your role is named Owner, Admin, or Moderator')
  .addField('Usage','>banuser @MrHacker Hacking into NSA')
  .setFooter("Version " + config.version + " (Ban Usage)","https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.p?size=1024")
  message.channel.sendEmbed(embed)
  console.log('Ban Command used on ' + message.guild.name + '.')
          break;
      case "newbanuser":
    //    if(message.member.hasPermissions("BAN_MEMBERS")){
    //      let banMember = message.guild.member(message.mentions.users.first());
    //      let banMembermsg = msg.guild.member(message.mentions.users.first());
      //      let reason = message.content.split(/\s+/g).slice(2).join(" ");
        //    message.guild.member(banMember).send('You have been banned by ' + message.author.toString() + " has banned you for " + reason + ".").then(msg => msg.guild.member(banMembermsg).ban(reason));
          //      message.delete()
            //    message.channel.sendMessage("The user, " + message.author.toString() + "has banned " + banMember + " for " + reason + ".");
              //  console.log('A user has been BANNED on ' + message.guild.name + '.')
            //  }
            //  else {
            //    return message.reply("You don\'t have the perms to ban members you fake hacker");
            //  }
                message.channel.send(disabled)
  	             break;
      case "warn":
      let reason = message.content.split(/\s+/g).slice(2).join(" ");
      let usertowarn = message.guild.member(message.mentions.users.first());
      console.log(reason);
        if(reason.length < 1) return message.channel.send(message.author.toString() + ', you must supply a reason for the warn to be completed.')
        if(message.mentions.users.size < 1) return message.channel.send(message.author.toString() + ", you must mention a user to warn them").catch(console.error);

        var embed = new Discord.RichEmbed()
        .setColor(00000)
        .addField('Action','Warning')
        .addField('User:', usertowarn)
        .addField('Moderator', message.author.toString())
        .addField('Reason', reason)
        message.channel.sendEmbed(embed)
        break;

      case "unbanuser":
      let unbanstaffRoleIDs = message.guild.roles.filter(r => r.name == "Owner" || r.name == "Admin" || r.name == "Admins" || r.name == "Administrator").map(r => r.id);
        let unbanisStaff = false;
      for (const id of unbanstaffRoleIDs) {
        if (message.member.roles.has(id)) {
          unbanisStaff = true;
          break;
}
}
if (unbanisStaff) {
  let unbanMember = message.mentions.users.first();
  let reason = message.content.split(/\s+/g).slice(1, 2).join(" ");
  if(reason.length < 1) return message.channel.send('You must provide a reason').catch(console.error);
  message.guild.unban(reason);
        message.delete()
        message.channel.sendMessage("The user, " + message.author.toString() + "has unbanned a member.");
        console.log('A user has been UNBANNED on ' + message.guild.name + '.')
      }
      else {
        return message.reply("You don\'t have the perms to unban members you fake hacker");
      }

         break;
      case "dmhacker":
      let message4hacker = message.content.split(' ').slice(1).join(' ')
      if(message4hacker.length < 1) return message.channel.send('You must provide a message to send to MrHacker894').catch(console.error);
        message.delete()
        client.users.get('270375857384587264').send('A message from the user ' + message4hacker + ' has arrived.')
        client.users.get('270375857384587264').send(message4hacker)
        break;
      case "banuser":
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
          if(reason.length < 1) return message.channel.send("You must provide a reason").catch(console.error);
          if(banMember.length < 1) return message.channel.send('You must provide a user to ban').catch(console.error);
		        message.guild.member(banMember).ban(reason);
              message.delete()
              message.channel.sendMessage("The user, " + message.author.toString() + "has banned " + banMember + " for " + reason + ".");
              console.log('A user has been BANNED on ' + message.guild.name + '.')
            }
            else {
              return message.reply("You don\'t have the perms to ban members you fake hacker");
            }

	             break;
  case "unixtime":
    message.channel.send('The amount of ticks that have passed since 1/1/1970 on EDT is ' + Date.now())
  break;

  case "kick":
      var config = require("./config.json");
  var embed = new Discord.RichEmbed()
 .setColor("FFA500")
.setTitle('Kick Usage')
.setDescription('This command will only work if your role is named Owner, Admin, or Moderator')
.addField('Usage','>kickuser @MrHacker Sending too many WOAH Memes')
.setFooter("Version " + config.version + " (Kick Usage)","https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
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
  if(reason.length < 1) return message.channel.send('You must provide a reason').catch(console.error);
  if(kickMember.length < 1) return message.channel.send("You must provide a user to kick").catch(console.error);
      message.delete()
      message.guild.member(kickMember).kick(reason);{
        message.channel.sendMessage("The user, " + message.author.toString() + " has kicked a member for " + reason + ".");
      }
    }
    else {
      return message.reply("You don\'t have the perms to kick members you fake hacker.");
    }
    break;
    case "purge":
    var config = require("./config.json");
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
.setFooter("Version " + config.version + " (Usage)","https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
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
      case "channeldelete":
      if(message.guild.id === '273169968202252289')return;
          let staffchanneldelID = message.guild.roles.filter(r => r.name == "Owner" || r.name == "Admin" || r.name == "Admins" || r.name == "Administrator").map(r => r.id);
            let isStaffchanneldel = false;
          for (const id of staffchanneldelID) {
            if (message.member.roles.has(id)) {
              isStaffchanneldel = true;
              break;
  }
}
  if (isStaffchanneldel) {
      message.channel.delete()
      message.author.send('Channel has been deleted')
        console.log('A channel has been deleted on ' + message.guild.name + '.')
          }
          else {
            return message.reply(" You don\'t have the perms to delete channels you fake hacker");
          }
             break;
      case "channelcreate":
      if(message.guild.id === '273169968202252289')return;
          let staffchannelcreateID = message.guild.roles.filter(r => r.name == "Owner" || r.name == "Admin" || r.name == "Admins" || r.name == "Administrator").map(r => r.id);
            let isStaffchannelcreate = false;
          for (const id of staffchannelcreateID) {
            if (message.member.roles.has(id)) {
              isStaffchannelcreate = true;
              break;
  }
}
  if (isStaffchannelcreate) {
    let channelname = message.content.split(' ').slice(1).join(' ')
    if(channelname.length < 1) return message.channel.send("You must provide a channel name")
        message.guild.createChannel(channelname)
        message.channel.send('Channel ' + channelname + ' has been created ' + message.author.toString() + '.')
          console.log('A channel has been created on ' + message.guild.name + '.')
        }
        else {
          return message.reply(" You don\'t have the perms to create channels you fake hacker")
        }
        break;


      case "sonicsez":
        message.channel.send('https://www.youtube.com/watch?v=0SuTW-edU5M')
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
    		message.author.send('https://ibb.co/ntpGKv')
    		break;
      case "whats9+10":
    		message.channel.send('21!')
    		message.channel.send('https://www.youtube.com/watch?v=OLBOn0Whhyc')
    		break;
      case "gtx1080":
      		message.channel.send("I'AM A GTX 1080")
      		message.channel.send("https://www.youtube.com/watch?v=AvcsD7vILOw")
      		break;
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
	  case "github":
		  var embed = new Discord.RichEmbed()
		  .setColor('40E0d0')
		  .setTitle('HackerBot Github Page')
		  .setDescription('Here you can view the HackerBot github page.')
		  .setURL('https://mr-hacker894.github.io/HackerBot/')
		  message.channel.sendEmbed(embed)
            break;

      case "invite":
      	message.channel.send('Here is the invite to the server requested by,' + message.author.toString() + ".")
    	var embed = new Discord.RichEmbed()
    	.setColor('008080')
    	.setTitle('Invite to HackerWorld Server')
    	.setURL('https://discord.gg/FC2F8n2')
    	message.channel.sendEmbed(embed)
    	break;
    case "kernalpanic":
    	message.channel.send('Might wanna go the Apple Genius Bar!')
    	message.channel.sendFile('http://i.imgur.com/Ev03b0i.jpg')
    	break;
	  case "errorhelp":
		  var embed = new Discord.RichEmbed()
     		 .setColor("FFFF00")
     		 .setTitle('Error Commands')
    		  .addField('Error Red','>error red')
   		   .addField('Error Orange','>error orange')
   		   .addField('Error Yellow','>error yellow')
   		   .addField('Error Green','>error green')
  		    .addField('Error Blue','>error blue')
  		    .addField('Error Purple','>error purple')
  		  message.channel.sendEmbed(embed)
    case "error":
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
    	message.channel.send('https://media.giphy.com/media/8GY3UiUjwKwhO/giphy.gif')
    	message.author.send('Testing...')
    	message.author.send('https://media.giphy.com/media/8GY3UiUjwKwhO/giphy.gif')
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
    var info = require("./info.json");
	var config = require("./config.json");
    	var embed = new Discord.RichEmbed()
    	.setColor("ffff00")
    	.setTitle('HackerBot Info')
    	.addField('Owner', config.owner)
    	.addField('API', config.api)
      .addField('Description', config.description)
      .addField('Uptime', client.uptime / 1000 + 's')
      .addField('Servers', client.guilds.size)
    	.addField('Helpers', 'DannyBoi, BloxxerCreeperDTC, The Discord.js Community', false)
    	.addField('Testers', 'Corbs, Ion#8844, DannyBoi, Shadow•™ | ▼DQ▼, Jackalope28#6413', false)
    	.addField('Version', info.version)
      .addField('CodeName', info.codename)
      .setThumbnail('https://images-ext-1.discordapp.net/external/Z1krf1ZBQTM3mDkke47xThwIF4GEFG0doRAdKRVHgnY/%3Fsize%3D128/https/cdn.discordapp.com/avatars/342054071060004884/4b83b2aa5970b8d34db71fd986abfe30.jpg')
      .setFooter("Version " + info.version,"https://images-ext-1.discordapp.net/external/Z1krf1ZBQTM3mDkke47xThwIF4GEFG0doRAdKRVHgnY/%3Fsize%3D128/https/cdn.discordapp.com/avatars/342054071060004884/4b83b2aa5970b8d34db71fd986abfe30.jpg")
		message.channel.sendEmbed(embed)
    	break;
      case "help":
      var info = require("./info.json");

      var embed = new Discord.RichEmbed()
      .setColor("FFA500")
      .setTitle('Help From HackerBot')
      .addField('>help', 'Find out what commands are available and what they do.')
      .addField('>ping', 'Get usage on >textping and >imageping')
      .addField('>textping','Test your ping with text')
      .addField('>imageping','Test your ping with an image')
      .addField('>test', 'Test to see if the bot is working correctly.')
      .addField('>changelog','See whats new in the lastest build of HackerBot')
      .addField('>math', 'Have HackerBot do your math homework for you')
      .addField('>pi', '3.14andabunchofnumbersafterthat')
      .addField('>info', 'Shows info on HackerBot.')
      .addField('>uptime','Shows the bot uptime in milliseconds')
      .setFooter("Version " + info.version,"https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
      message.author.sendEmbed(embed)
      var info = require("./info.json");
      var embed = new Discord.RichEmbed()
      .setColor("FFA500")
      .setTitle("Help From HackerBot #2")
      .addField('>serverinfo','Shows the server info')
      .addField('>membercount and >members','Get your server Member Count')
      .addField('>channelcount and >channels','Get your server Channel Count')
      .addField('>servername','Get the Server Name')
      .addField('>serverid','Get the Server ID')
      .addField('>invite','Get an Invite to the server.')
      .addField('>consoleissue', 'Report a Bot Issue through the console')
      .addField('>botinvite','Get a Bot OAuth Invite for your server.')
      .addField('>website','View the HackerWorld Website :D')
      .addField('>musicwebsite','You can find out what this does :)')
      .addField('>devpage','View my DevPage')
      .addField('>dmhacker', 'DM the creator of HackerBot :)')
      .addField('>sourcecode','View the HackerBot Source Code')
      .addField('>github','View the HackerBot GitHub')
        .addField('>say','A command to make HackerBot say whatever you want')
        .addField('>saytts','A command to make HackerBot use TTS to say whatever you want')
        .addField('>setnick','Get usage on setting a nickname')
        .addField('>setusernick','Set a use\'s nickname')
        .addField('>setbotnick','Set HackerBot\'s nickname')
      .addField('>suggestion','Send a suggestion for future bot features.')
        .addField('>upcomingfeatures','See what features are coming :D')
        .setFooter("Version " + info.version,"https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
        message.author.sendEmbed(embed)
      var info = require("./info.json");
      var embed = new Discord.RichEmbed()
      .setColor("FFA500")
      .setColor("Music Commands")
      .addField(">play","Play <musicurlorsearch>")
      .addField(">pause","Pause Music")
      .addField(">skip","Skip current track")
      .addField(">queue","View queue")
      .addField(">clear","Clear queue")
      .setFooter("Version " + info.version,"https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
      message.author.sendEmbed(embed)
      var info = require("./info.json");
      var embed = new Discord.RichEmbed()
      .setColor("FFA500")
      .setTitle('Other Commands #1')
      .addField('>danquote','DanGamingTV\'s quotes')
      .addField('>wordformatting','Get help on Discord Word Formatting')
      .addField('>eclipse2017','Experience the Great American Eclipse of August 21, 2017')
      .addField('>swag','meh swag is great')
      .addField('>notproductive','for the non-productive peeps')
      .addField('>siri','Ask Siri to complete tasks for you.')
      .addField('>shrug','meh')
      .addField('>picklerick','I\'M PICKLE RIIIIIICK!')
      .addField('>untableflip','Reverse TableFlip')
      .addField('>tableflip','When you just feel like flipping a table over.')
      .addField('>bsod','When your PC just can\'t take it anymore.')
      .addField('>bigorder','I think we all know what this is.')
      .addField('>rage','Rage Quit')
      .setFooter(" Version " + info.version,"https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
      message.author.sendEmbed(embed)
      var info = require("./info.json");
      var embed = new Discord.RichEmbed()
      .setColor("FFA500")
      .setTitle("Other Commands #2")
      .addField('>botwganonmusic','Ganon Boss Fight Music from BTOW')
      .addField('>dannyslife','Read DannyBoi\'s Biography')
      .addField('>rps','ROCK PAPER SCISSORS.....BANG BANG')
      .addField('>botrps','ROCK PAPER SCISSORS.....with HackerBot')
      .addField('>coinflip','Flip a coin, not a finger')
      .addField('>8ball','Have your questions answered.....by a randomizer')
      .addField('>mariomusical','Listen to the Mario Musical')
      .addField('>woahmeme','WOAH MEMES')
      .addField('>dancinghotdog','Don\'t worry. Snapchat has made its impact on this server too')
      .addField('>whats9+10','21')
      .addField('>gtx1080','I\'AM A GTX 1080!')
      .addField('>importthis','A reference to Python IDE')
      .addField('>error','Error Screens :(')
      .addField('>errorhelp','Help on the >error command')
      .setFooter(" Version " + info.version,"https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
      message.author.sendEmbed(embed)
      var config = require("./config.json");
      var embed = new Discord.RichEmbed()
      .setColor("FFA500")
      .setTitle('Channel Creation/Deletion Info')
      .addField('>channelcreate','Create channels')
      .addField('>channeldelete','Delete channels')
      .setFooter("Version " + info.version,"https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
      message.author.sendEmbed(embed)
      var info = require("./info.json");
      var embed = new Discord.RichEmbed()
      .setColor("FFA500")
      .setTitle('Ban and Kick Command Info')
      .addField('>Ban','Can only be used if a user has a role named Owner or Admin.')
      .addField('>Unban','Can only be used if a user has a role name Owner or Admin.')
      .addField('>Kick','Can only be used if a user has a role named Owner, Admin, or Moderator.')
      .setFooter("Version " + info.version,"https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
      message.author.sendEmbed(embed)
      var info = require("./info.json");
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
      .setFooter("Version " + info.version,"https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
      message.author.sendEmbed(embed)
      message.channel.send('Help has been DM\'d, ' + message.author.toString() + '.')


      break;
    case "unban":
    var info = require("./info.json");
      var embed = new Discord.RichEmbed()
        .setColor('0080FF')
        .setTitle('Unban Info')
        .addField('>unbanuser 270375857384587264 ','Unbans a user (FINALLY WORKS AFTER WEEKS OF TRIAL AND ERROR)')
        .setFooter('Unban Info ' + info.version + '.')
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
  function botrock() {
    var rand = ['Rock','Paper','Scissors','Paper','Scissors','Paper','Scissors','Paper','Scissors','Paper','Scissors']
    return rand[Math.floor(Math.random()*rand.length)];
  }
  function botpaper(){
    var rand = ['Rock','Paper','Scissors','Rock','Scissors','Rock','Scissors','Rock','Scissors','Rock','Scissors']
    return rand[Math.floor(Math.random()*rand.length)];
  }
  function botscissors(){
    var rand = ['Rock','Paper','Scissors','Rock','Paper','Rock','Paper','Rock','Paper','Rock','Paper']
    return rand[Math.floor(Math.random()*rand.length)];
  }
  case "botrps":
    switch (args[1]) {
        case "rock":
            (message.channel.send('I choose...').then(sent => sent.edit(botrock())))
            break;
        case "paper":
          (message.channel.send('I choose...').then(sent => sent.edit(botpaper())))
          break;
        case "scissors":
          (message.channel.send('I choose...').then(sent => sent.edit(botscissors())))
          break;

    }
    break;
case "kys":
  message.channel.send(':ok_hand: :joy: :gun:')
  break;
case "say":
let message2say = message.content.split(' ').slice(1).join(' ')
if(message2say.length < 1) return message.channel.send('You must provide a message to say').catch(console.error);
    message.channel.send(message2say)
    message.delete()
          break;

          case "saytts":
          let message2saytts = message.content.split(' ').slice(1).join(' ')
          if(message2saytts < 1) return message.channel.send('You must provide a message to say').catch(console.error);
          message.channel.send(message2saytts, {
        tts: true
        })
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
    case "untableflip":
      message.channel.send('┬─┬﻿ ノ( ゜-゜ノ)')
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
    case "pause":
      message.channel.send('`Sorry, but I do not support this feature at the moment, but you can invite HackerBot Music`')
      message.channel.send('https://discordapp.com/oauth2/authorize?client_id=365255372480446465&scope=bot&permissions=2146958591')
      break;
    case "changelog":
    	message.channel.send('Here\'s what\'s changed!')
      var info = require("./info.json");
    	var embed = new Discord.RichEmbed()
    	.setColor('FF0000')
    	.setTitle(info.version + "Changelog")
      .addField('Added Music Commands :D ','>play, >resume, >pause, etc')
      .addField('Added >devpage','View my Dev Page (You can find cool stuff there)')
      .addField('Small Improvments to HackerBot','Like removing useless crap.')
      .addField('Added >musicwebsite','You can find out what that does :)')
      .addField('Added >wordformatting','If you have been livng under a rock for awhile you might wanna use this command')
      .addField('Added >warn','No way to log the command so it\'s just experimental :ok_hand:')
      .addField('Mute Command in the works :D','>mute')

      .setFooter('Changelog ' + info.version,'https://images-ext-1.discordapp.net/external/Z1krf1ZBQTM3mDkke47xThwIF4GEFG0doRAdKRVHgnY/%3Fsize%3D128/https/cdn.discordapp.com/avatars/342054071060004884/4b83b2aa5970b8d34db71fd986abfe30.jpg')
   		message.channel.sendEmbed(embed)
   	  	break;
  //   default:
  //    message.channel.send(" :x: **ERROR 404 COMMAND NOT FOUND** :x: ")
    //  break;

  }
});
client.login(config.token)
