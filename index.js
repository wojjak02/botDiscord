const Discord = require('discord.js');
const{ prefix,prefix2, token} = require('./config.json');
const client = new Discord.Client();
const nhentai = require('nhentai-js');
const async = require('async');
const db = require('./database.js');
const mysql = require('mysql');


function handleDisconnect() {
  var login = {
      host     : 'remotemysql.com',
      user     : '416oNVOMew',
      password : 'bQdp7F8068',
      database : '416oNVOMew'
  }

  connection = mysql.createConnection(login)

  connection.connect(function(err) {
  if(err) {
      console.log('error when connecting to db:', err)
      setTimeout(handleDisconnect, 2000)
  }
  })

  connection.on('error', function(err) {
  console.log('db error', err);
  if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect()
  } else {
      throw err
  }
  })
}
handleDisconnect();




client.once('ready', () =>{

    var testChannel = client.channels.find(channel => channel.id === '632975130699497483');
    console.log('ready!')


        //632975130699497483


    setInterval(() =>{
        testChannel.send("botak");

    }, 600000);
})

client.on('message', message => {
    connection.query('SELECT * FROM `nhentai` ',
    async function(error,result,bruhmoment){
      if(result[0]==undefined){
        let hp = await nhentai.getHomepage(1);
        let id = hp.results[0].bookId;
        

        let set = {newest : id,
        Date : new Date()
        }
        db.insert(connection, set, 'nhentai')
      }
    })




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

  if(message.content.includes(`What's This?`)){
    var embed = new Discord.RichEmbed()
    .setTitle('mrdka')
    message.channel.send(embed);
  }

  if(message.content.includes(`za ty dnešní boulde`)){
    message.channel.send("ukousnu ti obě koule")
  }
//nhentai
$cislak = Math.floor(Math.random() * (+275000 - +1)) + +1; 
    
if(message.content.startsWith(`${prefix}cum2`)){
message.channel.send(`https://nhentai.net/g/`+$cislak+`/`)
}


var embed = new Discord.RichEmbed()
.setTitle('mrdka')

})

  


client.login(token);
