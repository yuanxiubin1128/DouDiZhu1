
var Protocol = require("Protocol");

var GameNetMgr = cc.Class({
    extends: cc.Component,
    statics: {
        opPlayerSeatId:"",
        sendRequest(cmdName,eventName,arg){
            if(cmdName == "Game"){
                if(eventName == "loginRoom"){
                    this.sendLoginRoom(arg);
                }else if(eventName == "startGame"){
                    this.sendStartGame(arg);
                }else if(eventName == "callLord"){
                    this.sendCallLord(arg);
                }else if(eventName == "grabLord"){
                    this.sendGrabLord(arg);
                }else if(eventName == "showCard"){
                    this.sendShowCard(arg);
                }else if(eventName == "giveupSendCard"){
                    this.sendGiveupSendCard(arg);
                }else if(eventName == "sendCard"){
                    this.sendSendCard(arg);
                }
            }
        },
        sendLoginRoom(arg){
            var params = {};
            params.t = Protocol.Request.Game.Init;
            params.roomId = parseInt(arg.roomId);
            params.isContinue = parseInt(arg.isContinue);
            params.modelId = arg.modelId;
            cc.vv.net.send("loginRoom",Protocol.Command.Game,params);
        },
        sendStartGame(arg){
            var params = {};
            params.t = Protocol.Request.Game.Go;
            if(arg){
                params.showcard = true;
            }
            this.opPlayerSeatId = "-1";
            cc.vv.net.send("startGame",Protocol.Command.Game,params);
        },
        sendCallLord(arg){
            var params = {};
            var num = 1;  // 1=要地主 2=不要地主
            if (arg){
                num = 1;
            }else{
                num = 2;
            }
            params.t = Protocol.Request.Game.CallLord;
            params.doLord = num;
            cc.vv.net.send("callLord",Protocol.Command.Game,params);
        },
        sendGrabLord(arg){
            var params = {};
            var num = 1;  // 1=要地主 2=不要地主
            if (arg){
                num = 1;
            }else{
                num = 2;
            }
            params.t = Protocol.Request.Game.GrabLord;
            params.grabLord = num;
            cc.vv.net.send("grabLord",Protocol.Command.Game,params);
        },
        sendShowCard(rate){
            if(rate){
            }else{
                rate = 2;
            }
            var params = {};
            params.t = Protocol.Request.Game.ShowCard;
            params.showRate = rate;
            cc.vv.net.send("showCard",Protocol.Command.Game,params);
        },
        sendGiveupSendCard(){
            var params = {};
            params.t = Protocol.Request.Game.NotFollow;
            cc.vv.net.send("giveupSendCard",Protocol.Command.Game,params);
        },
        sendSendCard(args){
            var params = {};
            params.t = Protocol.Request.Game.SendCard;
            if (typeof(args[0]) == "object"){
                params.sendCards = args[0]
                params.jokto = args[1]
            }else{
                params.sendCards = args
            }
            cc.vv.net.send("sendCard",Protocol.Command.Game,params);
        },
    },
});