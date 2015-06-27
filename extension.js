(function () {
    
    //Change this to your GitHub username so you don't have to modify so many things.
    var fork = "Yemasthui";
		
    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

        /*
         Extend the bot here, either by calling another function or here directly.
         Model code for a bot command:
         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }
         */

        bot.commands.baconCommand = {
            command: 'bacon',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Bacon!!!");
                }
            }
        };

        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "Bot Move-it",
        language: "portuguese",
        chatLink: "https://rawgit.com/Shadow-Slayer/moveit/master/lang/pt.json",
        startupCap: 1, // 1-200
        startupVolume: 0, // 0-100
        startupEmoji: false, // true or false
        autowoot: true,
        smartSkip: true,
        cmdDeletion: true,
        maximumAfk: 120,
        afkRemoval: false,
        maximumDc: 60,
        bouncerPlus: true,
        blacklistEnabled: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        voteSkip: true,
        voteSkipLimit: 6,
        historySkip: true,
        timeGuard: true,
        maximumSongLength: 7,
        autodisable: true,
        commandCooldown: 30,
        usercommandsEnabled: true,
        skipPosition: 1,
        skipReasons: [
            ["theme", "This song does not fit the room theme. "],
            ["op", "This song is on the OP list. "],
            ["history", "This song is in the history. "],
            ["mix", "You played a mix, which is against the rules. "],
            ["sound", "The song you played had bad sound quality or no sound. "],
            ["nsfw", "The song you contained was NSFW (image or sound). "],
            ["unavailable", "The song you played was not available for some users. "],
            ["som", "A música tocada tinha qualidade de som ruim ou não tinha som. "],
            ["tema", "Sua música não estava de acordo com o tema da sala. "],
            ["op", "Essa música está na lista OP. "],
            ["tocada", "Sua música já foi tocada recentememnte. "],
            ["nudes", "A música continha conteudo impróprio NSFW :underage:"],
            ["ind", "A música não estava disponivel para alguns usuários"]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: false,
        motdInterval: 5,
        motd: "Temporary Message of the Day",
        filterChat: false,
        etaRestriction: false,
        welcome: true,
        opLink: null,
        rulesLink: "http://goo.gl/Nw0Jth",
        themeLink: "http://goo.gl/Nw0Jth",
        fbLink: "http://goo.gl/gGsuJQ",
        youtubeLink: null,
        website: "http://goo.gl/O4tlVo",
        intervalMessages: [":game_die: Hora de fazer a roleta! :game_die: @staff",":large_orange_diamond: Faltam 2 músicas para a roleta :large_orange_diamond:",":large_orange_diamond: Na roleta voce pode tanto ganhar posições, como tambem perder!!! :large_orange_diamond:"],
        messageInterval: 2,
        songstats: true,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/Shadow-Slayer/moveit/master/blacklists/ExampleNSFWlist.json",
            OP: "https://rawgit.com/Shadow-Slayer/moveit/master/blacklists/ExampleOPlist.json",
            BANNED: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/BANNEDlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/Shadow-Slayer/bot/master/basicBot.js", extend);

}).call(this);
