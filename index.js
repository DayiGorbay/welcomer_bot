const botconfig = require(`./botconfig.json`);
const colors = require(`./colors.json`);
const discord = require('discord.js');
const client = new discord.Client();

client.once('ready', () => {
    console.log(`${client.user.tag} is ready`);
});
client.on('guildMemberAdd', member => {
    let welcomeChannel = client.channels.cache.get("867022456445992980")
    let targetchannel = '867022456445992980'
    if(welcomeChannel){

        let welcomeEmbed = new discord.MessageEmbed()
        if(member.user.bot){

        if(member.user.client){

            welcomeEmbed.setColor(colors.yellow)
            welcomeEmbed.setAuthor(`${member.guild.name}`)
            welcomeEmbed.setDescription(`سلام <@${member.user.id}> ** خوش اومدی به سرور مهدی امید وارم لحظات خوبی را در سرور بگزرانید ❤️🌹** `)
            welcomeEmbed.setThumbnail(member.user.displayAvatarURL())
            welcomeEmbed.setFooter(`${client.user.username} (=`)
            welcomeChannel.send(welcomeEmbed)
        }}else{
            welcomeEmbed.setColor(colors.aqua)
            welcomeEmbed.setAuthor(`${member.guild.name}`)
            welcomeEmbed.setDescription(`سلام <@${member.user.id}> ** خوش اومدی به سرور مهدی امید وارم لحظات خوبی را در سرور بگزرانید ❤️🌹** `)
            welcomeEmbed.setThumbnail(member.user.displayAvatarURL())
            welcomeEmbed.setFooter(`${client.user.username}  (=  `)
            welcomeChannel.send(welcomeEmbed)
        }
    }else{
        console.log("Welcome Channel Yaft Nashod")
    }
})
client.on("ready", () => {
    function YousamPower() {
      let hungry = ["TEST 1" , "TEST 2", "TEST 3" ]
      let Power = Math.floor(Math.random() * hungry.length);
      client.user.setActivity(hungry[Power], {type: "STREAMING", url: "https://www.aparat.com/pro.mahdi.gamer/live"});
    }; setInterval(YousamPower, 2000)
  });
client.login(botconfig.token);

