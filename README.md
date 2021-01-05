# sipbot
silly bot made for a silly server


just reacts randomly with the sip emoji, and sends a sip emoji randomly.

to install and use, read below

1. open cmd, powershell, or terminal of your choice. use the command `$ git clone https://github.com/cyliim/sipbot`. this'll get all the program files.
2. navigate to the directory in your terminal of choice, and then use the command `$ npm i discord.js`. this'll install the discord.js package which will allow the bot to function
3. go to discord.com/developers; make an account if you haven't already; create an application; create a bot user; copy the token into `config.json` under the `token` header.
4. change the `emoji` header in `config.json` to whatever emoji you'd want to use. you ccan get the unicode or code of an emoji by putting an `\` symbol before the emoji, after enabling developer mode in discord.
5. once all of this has been done, type `$ node .` in your terminal of choice, and the bot should start up.
