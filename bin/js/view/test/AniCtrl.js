var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**Created by the LayaAirIDE*/
var AniCtrl = /** @class */ (function (_super) {
    __extends(AniCtrl, _super);
    function AniCtrl() {
        var _this = _super.call(this) || this;
        _this.btn1.on(Laya.Event.CLICK, _this, _this.onBtnClick, ["dl"]);
        _this.btn2.on(Laya.Event.CLICK, _this, _this.onBtnClick, ["d"]);
        _this.btn3.on(Laya.Event.CLICK, _this, _this.onBtnClick, ["dr"]);
        _this.btn4.on(Laya.Event.CLICK, _this, _this.onBtnClick, ["l"]);
        _this.btn6.on(Laya.Event.CLICK, _this, _this.onBtnClick, ["r"]);
        _this.btn7.on(Laya.Event.CLICK, _this, _this.onBtnClick, ["ul"]);
        _this.btn8.on(Laya.Event.CLICK, _this, _this.onBtnClick, ["u"]);
        _this.btn9.on(Laya.Event.CLICK, _this, _this.onBtnClick, ["ur"]);
        _this.btnIdle.on(Laya.Event.CLICK, _this, _this.onStateBtnClick, [Actor.ActorState.Idle]);
        _this.btnWalk.on(Laya.Event.CLICK, _this, _this.onStateBtnClick, [Actor.ActorState.Walk]);
        _this.btnAtk.on(Laya.Event.CLICK, _this, _this.onStateBtnClick, [Actor.ActorState.Atk]);
        _this.btnDie.on(Laya.Event.CLICK, _this, _this.onStateBtnClick, [Actor.ActorState.Die]);
        return _this;
    }
    AniCtrl.prototype.onBtnClick = function (dir) {
        this.aniCtrl.direction = dir;
    };
    AniCtrl.prototype.onStateBtnClick = function (state) {
        this.aniCtrl.roleState = state;
        //this.aniCtrl.roleState = Actor.ActorState.Walk;
    };
    return AniCtrl;
}(ui.test.AniCtrlUI));
//# sourceMappingURL=AniCtrl.js.map