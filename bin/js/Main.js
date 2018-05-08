/*
* 程序启动模块;
*/
var Handler = Laya.Handler;
var Loader = Laya.Loader;
var Browser = Laya.Browser;
var WebGL = Laya.WebGL;
var Stage = Laya.Stage;
var Sprite = Laya.Sprite;
var Main = /** @class */ (function () {
    function Main() {
        //初始化微信小游戏
        Laya.MiniAdpter.init();
        //程序入口
        Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;
        Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#232628";
        //激活资源版本控制
        Laya.ResourceVersion.enable("version.json", Handler.create(this, this.beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
    }
    Main.prototype.beginLoad = function () {
        // Laya.loader.load("res/atlas/comp.atlas", Handler.create(null, this.onLoaded));
        Laya.loader.load("res/atlas/role1.atlas", Handler.create(this, this.onLoaded));
    };
    Main.prototype.onLoadedUI = function () {
        //实例UI界面
        var testUI = new AniCtrl();
        testUI.aniCtrl = this.aniCrl;
        Laya.stage.addChild(testUI);
    };
    Main.prototype.onLoaded = function () {
        //实例UI界面
        // var testUI: TestUI = new TestUI();
        // Laya.stage.addChild(testUI);
        this.aniCrl = new Actor.ActorAniCrl("role1");
        Laya.loader.load("res/atlas/comp.atlas", Handler.create(this, this.onLoadedUI));
    };
    return Main;
}());
new Main();
//# sourceMappingURL=Main.js.map