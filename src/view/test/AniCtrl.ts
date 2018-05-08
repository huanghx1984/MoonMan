/**Created by the LayaAirIDE*/
class AniCtrl extends ui.test.AniCtrlUI{
	public aniCtrl:Actor.ActorAniCrl;
	constructor(){
		super();
		this.btn1.on(Laya.Event.CLICK, this, this.onBtnClick, ["dl"]);
		this.btn2.on(Laya.Event.CLICK, this, this.onBtnClick, ["d"]);
		this.btn3.on(Laya.Event.CLICK, this, this.onBtnClick, ["dr"]);
		this.btn4.on(Laya.Event.CLICK, this, this.onBtnClick, ["l"]);
		this.btn6.on(Laya.Event.CLICK, this, this.onBtnClick, ["r"]);
		this.btn7.on(Laya.Event.CLICK, this, this.onBtnClick, ["ul"]);
		this.btn8.on(Laya.Event.CLICK, this, this.onBtnClick, ["u"]);
		this.btn9.on(Laya.Event.CLICK, this, this.onBtnClick, ["ur"]);

		this.btnIdle.on(Laya.Event.CLICK, this, this.onStateBtnClick, [Actor.ActorState.Idle]);
		this.btnWalk.on(Laya.Event.CLICK, this, this.onStateBtnClick, [Actor.ActorState.Walk]);
		this.btnAtk.on(Laya.Event.CLICK, this, this.onStateBtnClick, [Actor.ActorState.Atk]);
		this.btnDie.on(Laya.Event.CLICK, this, this.onStateBtnClick, [Actor.ActorState.Die]);
	}

	private onBtnClick(dir:"d"|"u"|"l"|"r"|"dl"|"dr"|"ul"|"ur")
	{
		this.aniCtrl.direction = dir;
	}

	private onStateBtnClick(state:Actor.ActorState)
	{
		this.aniCtrl.roleState = state;
		//this.aniCtrl.roleState = Actor.ActorState.Walk;
	}
}