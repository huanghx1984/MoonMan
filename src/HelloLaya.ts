/**
* name 
*/
module hello{

    import Browser = Laya.Browser;
    import WebGL = Laya.WebGL;
    import Stage = Laya.Stage;
	import Sprite = Laya.Sprite;
	
	export class HelloLaya{
		constructor(){
			Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);
			Laya.stage.alignV = Stage.ALIGN_MIDDLE;
            Laya.stage.alignH = Stage.ALIGN_CENTER;

            Laya.stage.scaleMode = "showall";
            Laya.stage.bgColor = "#232628";

			var txt = new Laya.Text();
			txt.text = "Hello Layabox";
			txt.color = "#ff0000";
			txt.fontSize = 66;
			txt.stroke = 5;
			txt.strokeColor = "#ffffff";
			txt.bold = true;
			txt.pos(120,200);
			Laya.stage.bgColor = "#23238e";
			Laya.stage.addChild(txt);
		}
	}
}

//new hello.HelloLaya();