/**
* name
*/
var hello;
(function (hello) {
    var Browser = Laya.Browser;
    var WebGL = Laya.WebGL;
    var Stage = Laya.Stage;
    var HelloLaya = /** @class */ (function () {
        function HelloLaya() {
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
            txt.pos(120, 200);
            Laya.stage.bgColor = "#23238e";
            Laya.stage.addChild(txt);
        }
        return HelloLaya;
    }());
    hello.HelloLaya = HelloLaya;
})(hello || (hello = {}));
//new hello.HelloLaya();
//# sourceMappingURL=HelloLaya.js.map