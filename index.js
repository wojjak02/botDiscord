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



})

client.login(token);