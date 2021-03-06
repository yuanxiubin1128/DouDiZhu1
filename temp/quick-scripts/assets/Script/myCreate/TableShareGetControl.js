(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/myCreate/TableShareGetControl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '52569YpHwpDYZFYpWJGPueQ', 'TableShareGetControl', __filename);
// Script/myCreate/TableShareGetControl.js

"use strict";

var GameNetMgr = require("GameNetMgr");
var PlayerDetailModel = require("PlayerDetailModel");
var config = require("config");

cc.Class({
    extends: cc.Component,

    properties: {
        img_bg: {
            default: null,
            type: cc.Sprite
        },
        img_title: {
            default: null,
            type: cc.Sprite
        },
        img_daoju: {
            default: null,
            type: cc.Sprite
        },
        jpq_num: {
            default: null,
            type: cc.Label
        },
        lab_tips: {
            default: null,
            type: cc.Label
        },
        btn_1: {
            default: null,
            type: cc.Node
        },
        btn_2: {
            default: null,
            type: cc.Node,
            opentype: "share"
        }
    },
    onLoad: function onLoad() {
        // 记牌器和领取乐豆公用
        this.jpq_num.string = "";
        this.dialogName = "";
        this.lab_tips.string = "";
    },
    start: function start() {
        // this.show("jiuji");
    },
    show: function show(dialogName) {
        this.dialogName = dialogName;
        config.loadImage(this.img_bg, "p_yaoqing");
        if (dialogName == "jiuji") {
            config.loadImage(this.img_title, "p_douzi");
            this.lab_tips.string = "现在发送分享额外再得500乐豆呦～";

            if (!config.canSeeVideoAd) {
                this.btn_1.active = false;
                this.btn_2.x = 183;
            }
        } else if (dialogName == "jipaiqi") {
            config.loadImage(this.img_title, "p_tip_jipaiqi");
            config.loadImage(this.img_daoju, "p_daoju_jpq");
            this.jpq_num.string = "X 3";
            this.lab_tips.string = "分享任意好友即可获得哦！";

            this.btn_1.active = false;
            this.btn_2.x = 183;
        }
    },
    closeClick: function closeClick() {
        // console.log("close click");
        this.node.destroy();
        cc.vv.audioMgr.playSFX("SpecOk");
    },
    btnEnterClick: function btnEnterClick() {
        // console.log("btnEnter click");

        var dialogName = this.dialogName; //jipaiqi 4  //jiuji  3
        var shareType = 3;
        if (dialogName == "jipaiqi") {
            shareType = 4;
        } else if (dialogName == "jiuji") {
            shareType = 3;
        }
        console.log(">>>shareType:", shareType);

        var index = config.getRandom(1);
        var shareTxt = config.shareTxt[dialogName][index];
        var shareImg = config.getShareImgPath(dialogName);

        wx.shareAppMessage({
            title: shareTxt,
            imageUrl: shareImg,
            query: "key=" + PlayerDetailModel.uid,
            success: function success(res) {
                console.log("---转发成功!!!");
                console.log(res);
                // GameNetMgr.sendRequest("System","ShareWxRes",shareType);
                if (shareType == 4) {
                    config.jpqShareSucss = true;
                } else if (shareType == 3) {
                    // GameNetMgr.sendRequest("Game", "openReliefTip", {});
                    config.leDouShareSucss = true;
                }
            },
            fail: function fail(res) {
                console.log("---转发失败!!!");
            }
        });

        this.node.destroy();
        cc.vv.audioMgr.playSFX("SpecOk");
    },
    btnKanShiPinClick: function btnKanShiPinClick() {
        console.log("btnKanShiPinClick");
        cc.vv.audioMgr.playSFX("SpecOk");
        if (typeof wx == "undefined") {
            return;
        }
        config.rewardedVideoType = 2;
        if (config.rewardedVideoAd) {
            config.rewardedVideoAd.show().then(); //() => cc.vv.audioMgr.stopMusic()
            if (this.node) this.node.destroy();
        }
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=TableShareGetControl.js.map
        