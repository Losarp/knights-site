const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const func = require("./func.js");

// Discord client & server details
let intents = new Intents(Intents.NON_PRIVILEGED);
intents.add('GUILD_MEMBERS');
const client = new Client({ intents: intents });

api.post('/add_discord', async (req, res) => {

    // Get details from form submission
    const discord_id = req.body.discord_id
    const nft_id = req.body.nft_id
    const key = req.body.key

    // Server and Role ID
    const guild = client.guilds.cache.get('server ID here');

    // Get user ID
    const members = await guild.members.fetch()
    const discord_username = func.parseName(discord_id)
    const member = members.find((m) => m.user.username === discord_username)
    if(member === undefined) {
        res.send("Discord ID is not correct or you have not joined the server!").status(400)
        return
    }
    // Grab old Discord ID
    const old_discord = await func.grabUser(nft_id)

    // Check if old Discord ID has more than 1 token
    const old_discord_count = await func.checkUser(old_discord) // Grab count of old Discord ID in database

    // Add or Update Discord details for database
    if(await func.insertData(member.id, nft_id, key)){
        if(old_discord_count <= 1) { // Remove role if there is less than 1 cat
            const old_member = await guild.members.fetch(old_discord);
            old_member.roles.remove('role ID here').catch(console.error)
        }

        // Add role to new discord ID
        member.roles.add('role ID here').catch(console.error) // Dao role
        member.roles.add('role ID here').catch(console.error) // Social role

        res.send("Discord updated successfully!").status(200)
    } else {
        res.send("Error adding Discord! Please contact support").status(400)
    }

})