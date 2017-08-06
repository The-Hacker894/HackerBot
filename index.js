const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ">"
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
      case "importthis":
      		message.channel.send("The Zen of Python, by Tim Peters")
      		message.channel.send("Beautiful is better than ugly.")
      		message.channel.send("Explicit is better than implicit.")
      		message.channel.send("Simple is better than complex.")
      		message.channel.send("Complex is better than complicated.")
      		message.channel.send("Flat is better than nested.")
      		message.channel.send("Sparse is better than dense.")
      		message.channel.send("Readability counts.")
      		message.channel.send("Special cases aren't special enough to break the rules.")
      		message.channel.send("Although practicality beats purity.")
      		message.channel.send("Errors should never pass silently.")
      		message.channel.send("Unless explicitly silenced.")
      		message.channel.send("In the face of ambiguity, refuse the temptation to guess.")
      		message.channel.send("There should be one-- and preferably only one --obvious way to do it.")
      		message.channel.send("Although that way may not be obvious at first unless you're Dutch.")
      		message.channel.send("Now is better than never.")
      		message.channel.send("Although never is often better than *right* now.")
      		message.channel.send("If the implementation is hard to explain, it's a bad idea.")
      		message.channel.send("If the implementation is easy to explain, it may be a good idea.")
      		message.channel.send("Namespaces are one honking great idea -- let's do more of those!")
      		message.channel.send("THE END")
      		break;
    		break;
      case "whats9+10":
    		message.channel.send('21!')
    		message.channel.send('https://www.youtube.com/watch?v=OLBOn0Whhyc')
    		break;
      case "gtx1080":
      		message.channel.send("I'AM A GTX 1080")
      		message.channel.send("https://www.youtube.com/watch?v=AvcsD7vILOw")
      		break;
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
    	function cutepets() {
    		var rand = ['https://i.pinimg.com/736x/be/82/15/be821544fc5f328567cb538f96edb49a--snowball-too-cute.jpg','http://slappedham.com/wp-content/uploads/2014/06/Cute-White-Dog.jpg','https://s-media-cache-ak0.pinimg.com/736x/ba/03/23/ba03237a6d6499f0e2633314826e1526--cutest-animals-baby-animals.jpg','https://i.ytimg.com/vi/jnPywVQOwfw/hqdefault.jpg']
    		
    		return rand[Math.floor(Math.random()*rand.length)];
    	}
    	
    	//Later in the cody codes
    		case "cutedogsandcats":
    	{	
    		
    		message.channel.send('Here\'s your cute pet ' + cutepets ());
    		break;
    	}
          function woahmemes() {
    var rand = ['https://www.youtube.com/watch?v=pZaAtJ6uis8','https://www.youtube.com/watch?v=NKahnQsTFTs','https://www.youtube.com/watch?v=mLUjwZBPzR0','https://www.youtube.com/watch?v=c5BHTkTzahI','https://www.youtube.com/watch?v=iNIA4xFwKEY','https://www.youtube.com/watch?v=hqPJisaEBYw','https://www.youtube.com/watch?v=GYuYH0DrPIg&t=66s','https://www.youtube.com/watch?v=rMKHqt0RK4k','https://www.youtube.com/watch?v=sJzT_raZIIk','https://www.youtube.com/watch?v=xw4OZ0VU5ls','https://www.youtube.com/watch?v=WNLgTb9b-9U','https://www.youtube.com/watch?v=NCBx5PbU-RA','https://www.youtube.com/watch?v=uGOhYxFBUn4','https://www.youtube.com/watch?v=jXF6OEGKCw8','https://www.youtube.com/watch?v=z5w48KrSVao','https://www.youtube.com/watch?v=TnO0pCuVqoo','https://www.youtube.com/watch?v=TybbVBCVdKI'];

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
    	message.channel.send("Sorry, " + message.author.toString() + ", but the botinvite won\'t be available until Monday.")
    	break;
    case "1234567890botinvite0987654321":
    	message.channel.send("Here is an invite for HackerBot requested by, " + message.author.toString() + ".")
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
    	.addField('Owner','MrHacker894')
    	.addField('API','Discord.js')
    	.addField('Helpers', 'DannyBoi and BloxxerCreeperDTC')
    	.addField('Testers', 'Corbs')
    	.addField('Version', '0.0.9')
    	.addField('Check out the new commands!','-9commands')
		message.channel.sendEmbed(embed)
    	break;
    case "help":
		message.channel.send("HackerBot is here to help, " + message.author.toString() + "!")
        var embed = new Discord.RichEmbed()
        .setColor("FFA500")
        .setTitle('Help From HackerBot')
        .addField('>help', 'Find out what commands are available and what they do.')
        .addField('>help2','Get help on other commands.')
        .addField('>ping', 'Pong!')
        .addField('>test', 'Test to see if the bot is working correctly.')
        .addField('>hackertest', 'This command is used for experiments and hints at future commands.')
        .addField('>yt','Get a link to the MrHacker YT Channel')
        .addField('>changelog','See whats new in the lastest build of HackerBot')
        .addField('>info', 'Shows info on HackerBot.')
        .addField('>invite','Get an Invite to the server.')
        .addField('>botinvite','Get a Bot OAuth Invite for your server.')
        .addField('>botstatus','Change the bots status.')
        .setFooter(" Version 0.0.9","https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
      message.channel.sendEmbed(embed)
    	break;
    case "help2":
		message.channel.send("HackerBot is here to help some more, " + message.author.toString() + "!")
        var embed = new Discord.RichEmbed()
        .setColor("FFA500")
        .setTitle('Help2 From HackerBot')
        .addField('>tableflip','When you just feel like flipping a table over.')
        .addField('>bsod','When your PC just can\'t take it anymore.')
        .addField('>kernalpanic','When your Mac just can\'t take it anymore.')
        .addField('>bigorder','I think we all know what this is.')
        .addField('>9commands','Check out the new 0.0.9 commands')
        .setFooter("Version 0.0.9","https://cdn.discordapp.com/avatars/342054071060004884/04f1a7a65bd8467eb928e82b33e6d010.webp?size=1024")
        message.channel.sendEmbed(embed)
        break;
    case "dancinghotdog":
    		message.channel.send('DANCING HOTDOG')
    		message.channel.send('https://www.youtube.com/watch?v=OH9VByxUczc')
    		break;
    case "betacommands":
    		message.channel.send('There are no beta commands because this is not a Beta or Early Access release')
    		message.channel.send('Visit the link below to check out MrHacker894\'s Discord')
    		message.channel.send('https://discord.gg/TuUEEjF')
    		message.channel.send('Visit the link below to check out the HackerBot Github release')
    		message.channel.send('https://github.com/Mr-Hacker894/HackerBot')
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
    	message.channel.send('https://github.com/Mr-Hacker894/HackerBot/wiki/Upcoming-features')
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
    case "botstatus":
    	var embed = new Discord.RichEmbed()
    	.setColor('FF0000')
    	.setTitle('Bot Status Info')
    	.addField('-onlinebot online','Change the bot status to online.')
    	.addField('-idlebot idle','Change the bot status to idle.')
    	.addField('-dndbot dnd','Change the bot status to dnd.')
    	.addField('-invisbot invisible','Change the bot status to invisible.')
    	message.channel.sendEmbed(embed)
    	break;
    case "9commands":
    	message.channel.send("Here are the new commands in 0.0.9 requested by, " + message.author.toString() + ".")
    	var embed = new Discord.RichEmbed()
    	.setColor('ASF000')
    	.setTitle('0.0.9 Commands')
    	.addField('>botwganonmusic','Ganon Boss Fight Music from BTOW')
    	.addField('>dannyslife','Read DannyBoi\'s Biography')
    	.addField('>botstatus','Change the bots status')
    	.addField('>upcomingfeatures','See what features are coming :D')
    	.addField('>rps','ROCK PAPER SCISSORS.....BANG BANG')
    	.addField('>coinflip','Flip a coin, not a finger')
    	.addField('>8ball','Have your questions answered.....by a randomizer')
    	.addField('>mariomusical','Listen to the Mario Musical')
    	.addField('>woahmeme','WOAH MEMES')
    	.addField('>dancinghotdog','Don\'t worry. Snapchat has made its impact on this servere too')
    	.addField('>whats9+10','21')
    	.addField('>gtx1080','I\'AM A GTX 1080!')
    	.addField('>cutedogsandcast','Get a cute dog or get a cute cat')
    	.addField('>importthis','A reference to Python IDE')
    	message.channel.sendEmbed(embed)
    	break;
    case "changelog":
    	message.channel.send("Here\'s what\'s changed," + message.author.toString() + "!")
    	var embed = new Discord.RichEmbed()
    	.setColor('FF0000')
    	.setTitle('0.0.9')
    	.addField('Added commands to change HackerBot\'s status')
    	.addField('Added >botstatus','Learn how to change the bots status!')
    	.addField('Removed >beta','Effects the now gone -beta command')
    	.addField('Added >upcomingfeatures','Find out what features are on their way!')
    	.addField('Added >9commands','Check out the new 0.0.9 commands')
    	.addField('Updated Help','Effects -help')
    	.setDescription('Fixed some embeds giving the wrong prefix')
   		message.channel.sendEmbed(embed)
   	  	break; 
     default:
      message.channel.send("Sorry, but that command is not Hacker approved.")
      break;
     
  }
});

client.login("token_here");