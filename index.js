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
    message.channel.send("na tebe nikdo nemluvi")
  }
  if(message.content.includes(`za ty dnešní boule`)){
    message.channel.send("ukousnu ti obě koule")
  }
    
//nhentai
$cislo1 = Math.floor(Math.random() * (+1 - +3)) + +1; 
$cislo2 = Math.floor(Math.random() * (+1 - +7)) + +1; 
$cislo3 = (Math.round(Math.random() * 10));
$cislo4 = (Math.round(Math.random() * 10));
$cislo5 = (Math.round(Math.random() * 10));
$cislo6 = (Math.round(Math.random() * 10));

  if(message.content.startsWith(`${prefix}pochutnanicko`)){
    message.channel.send(`https://nhentai.net/g/`+$cislo1+$cislo2+$cislo3+$cislo4+$cislo5+$cislo6+`/`)
  }


})

client.login(token);
