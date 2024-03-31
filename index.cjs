const { REST } = require('@discordjs/rest');
const { WebSocketManager } = require('@discordjs/ws');
const { GatewayDispatchEvents, InteractionType, Client, Utils } = require('@discordjs/core');
require('dotenv').config();
const token = process.env.DISCORD_TOKEN;
const rest = new REST().setToken(token);
const gateway = new WebSocketManager({
    token,
    intents: 0,
    rest
});
const client = new Client({ rest, gateway });
client.on(GatewayDispatchEvents.Ready, async ({ data }) => {
    console.log(`✓ Connected! ${data.user.username}#${data.user.discriminator}`);
});

client.on(GatewayDispatchEvents.InteractionCreate, async ({ data: interaction, api }) => {
    
    

    //console.log(interaction.data.id)
    const first = Utils.isChatInputApplicationCommandInteraction(interaction)
    if (interaction.type === InteractionType.ApplicationCommand) {
    const respond = (data) => api.interactions.reply(interaction.id, interaction.token, data);
    const option = (name) => interaction.data.options.find(o => o.name === name)?.value;
    const userID = interaction.member?.user.id ?? interaction.user.id;

    //Code
    const secrets = [
        ['00101110', 'sadcat.gif '],
        ['00100001', ':D '],
        ['00101100', 'but... '],
        ['00111111', 'wah.. '],
        ['0000', 'helo '],
        ['0001', 'o '],
        ['0010', 'wawa '],
        ['0011', 'wuhh '],
        ['0100', 'wah '],
        ['0101', 'hi '],
        ['0110', 'yaya '],
        ['0111', 'hai '],
        ['1000', 'gm '],
        ['1001', 'gn '],
        ['1010', 'hru '],
        ['1011', 'idk '],
        ['1100', '? '],
        ['1101', 'oh '],
        ['1110', 'STFU '],
        ['1111', 'undertale ']
    ];

    if (interaction.data.type === 1 && interaction.data.name === "yaya") {
        const wuhh = option('text');
        if (!wuhh) {
            respond({ content: `Guhh?? empty!`, flags: 64});
            return;
        }

        const binary = wuhh.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join('');
        let guhh = '', i = 0;
        while (i < binary.length) {
        let yuhuh = false;
        for (let [bin, secret] of secrets) {
            if (binary.startsWith(bin, i)) {
                guhh += secret;
                i += bin.length;
                yuhuh = true;
                break;
            }
        }
            if (!yuhuh) i++;
        }

        respond({ content: guhh.trim(), flags: 64});

    } else if (interaction.data.type === 1 && interaction.data.name === "zaza") {
        const wuhh = option('text');

        const validWords = secrets.map(secret => secret[1].trim());
        const words = wuhh.split(' ').filter(Boolean);

        for (const word of words) {
            if (!validWords.includes(word)) {
                respond({ content: `Guhh?? Nuh uh!@!`, flags: 64});
                return;
            }
        }


        let binary = wuhh.split(' ').reduce((mreow, mrrp) => {
            for (let [binary, secret] of secrets) {
                if (mrrp + ' ' === secret) {
                    return mreow + binary;
                }
            }
            return mreow;
        }, '');
        let owo = '';
        for (let i = 0; i < binary.length; i += 8) {
            let byte = binary.slice(i, i + 8);
            owo += String.fromCharCode(parseInt(byte, 2));
        }
        respond({ content: owo, flags: 64});
    } else if (interaction.data.type === 1 && interaction.data.name === "add") {
        respond({ content: `Go on.. [use me~](https://discord.com/oauth2/authorize?client_id=${interaction.application_id})` }); //change this to real link

    } else if (interaction.data.name === "Zaza") {

        const wuhh = interaction.data.resolved.messages[interaction.data.target_id].content

        const validWords = secrets.map(secret => secret[1].trim());
        const words = wuhh.split(' ').filter(Boolean);

        for (const word of words) {
            if (!validWords.includes(word)) {
                respond({ content: `Guhh?? Nuh uh!@!`, flags: 64});
                return;
            }
        }


        let binary = wuhh.split(' ').reduce((mreow, mrrp) => {
            for (let [binary, secret] of secrets) {
                if (mrrp + ' ' === secret) {
                    return mreow + binary;
                }
            }
            return mreow;
        }, '');
        let owo = '';
        for (let i = 0; i < binary.length; i += 8) {
            let byte = binary.slice(i, i + 8);
            owo += String.fromCharCode(parseInt(byte, 2));
        }
        respond({ content: owo, flags: 64});
    }
}
});

gateway.connect();