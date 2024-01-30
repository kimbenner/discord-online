const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);




const ID = '1201124413421146202'
const DiscordRPC = require('discord-rpc');
const RPC = new DiscordRPC.Client({ transport: 'ipc' });

DiscordRPC.register(ID)

async function activity() {
    if (!RPC) return; 

    RPC.setActivity({
        details: 'test',
        state: 'stat',
        largeImageKey: 'https://i.makeagif.com/media/4-26-2023/LsXhby.gif',
        largeImageText: 'large',
        instance: 'false',
        startTimestamp: DataTransfer.now(),
        buttons: [
            {
                label: '버튼1',
                url: 'https://youtube.com/'
            },
            {
                label: '버튼2',
                url: 'https://youtube.com/'
            }
        ]
    })
}

RPC.on('ready', async () => {
    console.log('RPC on');
    activity();

    setInterval(() => {
        activity();
    }, 100000000)
})










bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.connect(); // Get the bot to connect to Discord
