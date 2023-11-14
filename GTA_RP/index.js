const Discord = require('discord.js');
const bot = new Discord.Client();

const items_salut = ["Salut !",
                "Bienvenue à toi.",
               ];

var prefix = ("/")
var time = new Date();

bot.on('ready', function() {
    bot.user.setGame("Command: /help");
});

bot.login("NTA5MzA0MjM4MDc4NDI3MTM2.XlVFVg.Jc9oVKLAXdV582GH7q_TSXSnm2k");

bot.on('message', message => {
    // -----------------HELP----------------- //
    if (message.content === prefix + "help"){
      message.channel.sendMessage("Liste des commandes:\n - **^help**\n - **^credits**\n - **^infoserv**\n - **^annonce [message]**, faire une annonce dans le channel en question (identifie tout le monde)\n - **^ano [message]**, faire un message anonyme (utilisez celui-là seulement dans le dark-net , merci)\n - **^pds**, prise de service\n - **^fds**, fin de service");
    }
    // -----------------CREDITS----------------- //
    if (message.content === prefix + "credits"){
      message.reply("Ce bot a été crée par **_Fr4nck_**");
    }
    // -----------------INFOSERV----------------- //
    if (message.content === prefix + "infoserv"){
        var embed = new Discord.RichEmbed()
        .setDescription("Information du Discord")
        .addField("**Nom du Discord**", message.guild.name)
        .addField("**Crée le**", message.guild.createdAt)
        .addField("**Propriétaire**", message.guild.owner)
        .addField("**Tu as rejoin le**", message.member.joinedAt)
        .addField("**Utilisateurs sur le discord**", message.guild.memberCount)
        .addField("**Nombre de Rôles**", message.guild.roles.size)
        .setImage("https://korben.info/app/themes/korben/dist/images/starwars.png")
        .setColor("0x8E02CF")
        .setFooter("Passe un bon moment parmis nous !")
      message.channel.sendEmbed(embed)
    }
    // -----------------ANONYME----------------- //
    if (message.content.substring(0, 4) === prefix + "ano"){
      console.log(message.member.user.tag + " : " + message.content.substring(5));
      message.delete(100);
      message.channel.sendMessage(message.content.substring(5));
    }
    // -----------------ANNONCE----------------- //
    if (message.content.substring(0, 8) === prefix + "annonce"){
      message.delete(100);
      message.channel.sendMessage("@everyone, " + message.content.substring(9));
    }
    // -----------------Prise De Service----------------- //
    if (message.content === prefix + "pds"){
      message.delete(100);
      message.reply("Prise de service : " + ((time.getHours() < 10)?"0":"") + time.getHours() + ":" + ((time.getMinutes() < 10)?"0":"") + time.getMinutes() );
    }
    // -----------------Fin De Service----------------- //
    if (message.content === prefix + "fds"){
      message.delete(100);
      message.reply("Fin de service : " + time.getHours() + "h" + time.getMinutes() + "min." );
    }
    // -----------------SALUT----------------- //
    if (message.content === "Salut"
     | message.content === "salut"
     | message.content === "Bonjour"
     | message.content === "bonjour"
     | message.content === "Yo"
     | message.content === "yo"){
       message.reply(random_salut(items_salut));
     }
});

function random_salut(items_salut) {
  return items_salut[Math.floor(Math.random()*items_salut.length)];
}
