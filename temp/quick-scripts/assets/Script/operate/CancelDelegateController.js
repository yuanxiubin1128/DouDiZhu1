(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/operate/CancelDelegateController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '917adx22mBOi7OyW3Ekl6tk', 'CancelDelegateController', __filename);
// Script/CancelDelegateController.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},
    start: function start() {},
    show: function show(click) {
        this.node.active = true;
        this.click = click;
    },
    close: function close() {
        if (this.node) {
            // this.node.destroy();
            this.node.active = false;
        }
    },
    btnClick: function btnClick() {
        console.log("取消托管");
        if (this.click) this.click();
        // this.node.destroy();
        this.node.active = false;
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
        //# sourceMappingURL=CancelDelegateController.js.map
        