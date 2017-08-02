const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "-"
const package = require("./package.json");

client.on("ready", () => {
  console.log(`HackerBot has started hacking!`)
});

client.on("message", message => {
  let args = message.content.substring(prefix.length).split(" ");
  if (message.author.equals(client.user)) return;
  if (!message.content.startsWith(prefix)) return;

  switch (args[0].toLowerCase()) {
    case "ping":
      message.channel.sendFile('https://cdn.discordapp.com/attachments/327906012344614932/342075618604613633/pong.png')
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
    	break;
    case "botinvite":
    	message.channel.send("Here is an invite for HackerBot requested by," + message.author.toString() + ".")
    	var embed = new Discord.RichEmbed()
    	.setColor('40E0D0')
    	.setTitle('HackerBot Invite')
    	.setURL('https://discordapp.com/oauth2/authorize?client_id=342054071060004884&scope=bot&permissions=0')
    	message.channel.sendEmbed(embed)
    	break;
    case "info":
    	var embed = new Discord.RichEmbed()
    	.setColor("ffff00")
    	.setTitle('HackerBot Info')
    	.setImage("https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
    	.addField('API','Discord.js')
    	.addField('Helpers', 'DannyBoi and BloxxerCreeperDTC')
    	.addField('Testers', 'Corbs')
    	.addField('Version', '0.0.8')
		message.channel.sendEmbed(embed)
    	break;
    case "help":
		message.channel.send("HackerBot is here to help, " + message.author.toString() + "!")
        var embed = new Discord.RichEmbed()
        .setColor("FFA500")
        .setTitle('Help From HackerBot')
        .addField('-help', 'Find out what commands are available and what they do.')
        .addField('-help2','Get help on other commands.')
        .addField('-ping', 'Pong!')
        .addField('-test', 'Test to see if the bot is working correctly.')
        .addField('-beta', 'Get info on beta testing!')
        .addField('-hackertest', 'This command is used for experiments and hints at future commands.')
        .addField('-yt','Get a link to the MrHacker YT Channel')
        .addField('-changelog','See whats new in the lastest build of HackerBot')
        .addField('-info', 'Shows info on HackerBot.')
        .addField('-invite','Get an Invite to the server.')
        .addField('-botinvite','Get a Bot OAuth Invite for your server.')
        .setFooter(" Version 0.0.8","https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
      message.channel.sendEmbed(embed)
    	break;
    case "help2":
		message.channel.send("HackerBot is here to help some more, " + message.author.toString() + "!")
        var embed = new Discord.RichEmbed()
        .setColor("FFA500")
        .setTitle('Help2 From HackerBot')
        .addField('-tableflip','When you just feel like flipping a table over.')
        .addField('-bsod','When your PC just can\'t take it anymore.')
        .addField('-kernalpanic','When your Mac just can\'t take it anymore.')
        .addField('-bigorder','I think we all know what this is.')
        .addField('-idlebot idle','Changes the bots status to inactive')
        .addField('-invisbot invisible', 'Changes the bots status to inactive')
        .addField('-dndbot dnd','Changes the bots status to Do Not Disturb')
        .addField('-onlinebot online','Changes the bots status to active')
        .setFooter("Version 0.0.8","https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
        message.channel.sendEmbed(embed)
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
    case "beta":
    	var embed = new Discord.RichEmbed()
    	.setColor("008080")
    	.setTitle('Hacker Beta Testing Program')
    	.setDescription("To get started with Hacker Beta Testing you will need")
    	.addField("1.","Message MrHacker asking about joining the program.")
    	.addField("2.","If he approves he will send you a **one time** use invite to the beta testing server")
    	.addField("3.","After one beta testing session *approx 1 week* you will be kicked")
    	.addField("4.","If you are kicked you may enroll in the program once more")
    	.setFooter("Beta Test Help RevC")
    	message.channel.sendEmbed(embed)
      break;
    case "idlebot":
    	message.channel.send('Updating Hacks')
    	client.user.setStatus('idle')
    	client.user.setGame('Update Hacks')
    		break;
    case "invisbot":
    	message.channel.send('Installing New Hacks')
    	client.user.setStatus('invisible')
    	client.user.setGame('Installing New Hacks')
    		break;
    case "dndbot":
    	message.channel.send('Turning off Notifiers for Security')
    	client.user.setStatus('dnd')
    	client.user.setGame('Notifies = Off')
    		break;
    case "onlinebot":
    	message.channel.send('Excecuting Hacks')
    	client.user.setGame('Excecuting Hacks')
    	message.channel.send('10%')
    	message.channel.send('20%')
    	message.channel.send('40%')
    	message.channel.send('80%')
    	message.channel.send('90%')
    	message.channel.send('95%')
    	message.channel.send('100%')
    	client.user.setStatus('online')
    	client.user.setGame('Hacking into the NSA')
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
    case "changelog":
    	message.channel.send("Here\'s what\'s changed," + message.author.toString() + "!")
    	var embed = new Discord.RichEmbed()
    	.setColor('FF0000')
    	.setTitle('0.0.8.0')
    	.addField('Added commands to change HackerBot\'s status')
    	.addField('Updated Help','Effects -help')
   		message.channel.sendEmbed(embed)
   	  	break; 
     default:
      message.channel.send("Sorry, but that command is not Hacker approved.")
      break;
     
  }
});

client.login("token_here");