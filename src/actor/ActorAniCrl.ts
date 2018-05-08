/**
* 角色动画控制;
*/
module Actor{
	import Animation = Laya.Animation;
	export enum ActorState
	{
		Idle = "idle",
		Walk = "walk",
		Atk  = "atk",
		Die  = "die",
	}

	export class ActorAniCrl{

		private roleAni:Animation;
		private _roleState:ActorState = ActorState.Idle;
		private _direction:"d"|"u"|"l"|"r"|"dl"|"dr"|"ul"|"ur";
		private aniDirection:[string,number];
		private inited:boolean = false;
		constructor(url:string){
			//创建动画实例
			this.roleAni = new Laya.Animation();
			this.direction = "d";
			//加载动画图集，加载成功后执行回调方法
			this.roleAni.loadAtlas("role/role1.atlas",Laya.Handler.create(this,this.onLoaded));
		}

		private onLoaded():void
		{
			// this.roleAni.scaleX = 5;
			// this.roleAni.scaleY = 5;
			this.roleAni.pos(50,50);
			this.roleAni.scaleX = -1;
			let bounds = this.roleAni.graphics.getBounds();
			this.roleAni.pivot(bounds.width, 0);
			//创建动画模版
			let dirs = ["d","u","l","dl","ul"]
			let states = ["idle","walk"]
			for (let st of states)
			{
				for (let dn of dirs) {
					Laya.Animation.createFrames(this.aniUrls(st+"_"+dn,6),st+"_"+dn);
				}
			}
			// Laya.Animation.createFrames(this.aniUrls("idle_d",6),"idle_d");
			// Laya.Animation.createFrames(this.aniUrls("idle_u",6),"idle_u");
			//添加到舞台
			Laya.stage.addChild(this.roleAni);

			this.inited = true;
			//播放动画
			//this.roleAni.play(0, true, "idle_u");
			this.refresh();
		}
		/**
		 * 创建一组动画的url数组（美术资源地址数组）
		 * aniName  动作的名称，用于生成url
		 * length   动画最后一帧的索引值，
		 */    
		private aniUrls(aniName:string,length:number):any{
			var urls:any = [];
			for(var i:number = 0;i<length;i++){
				//动画资源路径要和动画图集打包前的资源命名对应起来
				urls.push("role1/"+aniName+i+".png");
			}
			return urls;
		}

		private refresh():void
		{
			if(this.inited)
			{
				let aniName = this._roleState+"_"+this.aniDirection[0];
				this.roleAni.scaleX = this.aniDirection[1];
				this.roleAni.play(0, true, aniName);
			}
		}

		set direction(dir:"d"|"u"|"l"|"r"|"dl"|"dr"|"ul"|"ur"){
			if(this._direction == dir)
			{
				return;
			}
			if(dir.indexOf("r") >= 0)
			{
				this.aniDirection = [dir.replace("r","l"), -1];
			}
			else
			{
				this.aniDirection = [dir, 1];
			}
			this._direction = dir;
			this.refresh();
		}

		set roleState(state:ActorState){
			if(this._roleState == state)
			{
				return;
			}
			this._roleState = state;
			this.refresh();
		}
	}
}