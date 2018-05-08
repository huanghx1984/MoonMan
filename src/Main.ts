/*
* 程序启动模块;
*/

import Handler = Laya.Handler;
import Loader = Laya.Loader;
import Browser = Laya.Browser;
import WebGL = Laya.WebGL;
import Stage = Laya.Stage;
import Sprite = Laya.Sprite;

class Main{
    private aniCrl:Actor.ActorAniCrl;
    constructor(){
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

    private beginLoad(){
        // Laya.loader.load("res/atlas/comp.atlas", Handler.create(null, this.onLoaded));
        Laya.loader.load("res/atlas/role1.atlas", Handler.create(this, this.onLoaded));
    }

    private onLoadedUI(): void {
        //实例UI界面
        let testUI: AniCtrl = new AniCtrl();
        testUI.aniCtrl = this.aniCrl;
        Laya.stage.addChild(testUI);
    }
    
    private onLoaded(): void {
        //实例UI界面
        // var testUI: TestUI = new TestUI();
        // Laya.stage.addChild(testUI);
        this.aniCrl = new Actor.ActorAniCrl("role1");
        Laya.loader.load("res/atlas/comp.atlas", Handler.create(this, this.onLoadedUI));
    }
}

new Main();
