const Discord = require('discord.js');
const{ prefix,prefix2, token} = require('./config.json');
const client = new Discord.Client();

client.once('ready', () =>{

    var testChannel = client.channels.find(channel => channel.id === '632975130699497483');
    console.log('ready!')


        //632975130699497483


    setInterval(() =>{
        testChannel.send("botak");

    }, 600000);
})

client.on('message', message => {
    //kick
    if(message.content.startsWith(`${prefix}kick`)){
        
    //console.log(message.content); = vypis veci z chatu do terminalu

    if(message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])){
        //message.channel.send("konecne cas mrdani s ")

        let member = message.mentions.members.first();
        member.kick().then((member)=> {
            message.channel.send("bruh " + member.displayName + " picak")
        })
    }else{
        message.channel.send("nemas PRAVA debilku")
  }
  }
  //easter eggy
  if(message.content.startsWith(`${prefix2}owo`)){
    message.channel.send("pakuj do pice")
  }

  if(message.content.includes(`What's This?`)){
    var embed = new Discord.RichEmbed()
    .setTitle('mrdka')
    message.channel.send(embed);
  }
  if(message.content.includes(`za ty dnešní boule`)){
    message.channel.send("ukousnu ti obě koule")
  }
    
//nhentai    
 $cislak = Math.floor(Math.random() * (+275000 - +1)) + +1; 
    
    if(message.content.startsWith(`${prefix}cum2`)){
    message.channel.send(`https://nhentai.net/g/`+$cislak+`/`)
  }


})

client.login(token);
