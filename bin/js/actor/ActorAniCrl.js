/**
* 角色动画控制;
*/
var Actor;
(function (Actor) {
    var ActorState;
    (function (ActorState) {
        ActorState["Idle"] = "idle";
        ActorState["Walk"] = "walk";
        ActorState["Atk"] = "atk";
        ActorState["Die"] = "die";
    })(ActorState = Actor.ActorState || (Actor.ActorState = {}));
    var ActorAniCrl = /** @class */ (function () {
        function ActorAniCrl(url) {
            this._roleState = ActorState.Idle;
            this.inited = false;
            //创建动画实例
            this.roleAni = new Laya.Animation();
            this.direction = "d";
            //加载动画图集，加载成功后执行回调方法
            this.roleAni.loadAtlas("role/role1.atlas", Laya.Handler.create(this, this.onLoaded));
        }
        ActorAniCrl.prototype.onLoaded = function () {
            // this.roleAni.scaleX = 5;
            // this.roleAni.scaleY = 5;
            this.roleAni.pos(50, 50);
            this.roleAni.scaleX = -1;
            var bounds = this.roleAni.graphics.getBounds();
            this.roleAni.pivot(bounds.width, 0);
            //创建动画模版
            var dirs = ["d", "u", "l", "dl", "ul"];
            var states = ["idle", "walk"];
            for (var _i = 0, states_1 = states; _i < states_1.length; _i++) {
                var st = states_1[_i];
                for (var _a = 0, dirs_1 = dirs; _a < dirs_1.length; _a++) {
                    var dn = dirs_1[_a];
                    Laya.Animation.createFrames(this.aniUrls(st + "_" + dn, 6), st + "_" + dn);
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
        };
        /**
         * 创建一组动画的url数组（美术资源地址数组）
         * aniName  动作的名称，用于生成url
         * length   动画最后一帧的索引值，
         */
        ActorAniCrl.prototype.aniUrls = function (aniName, length) {
            var urls = [];
            for (var i = 0; i < length; i++) {
                //动画资源路径要和动画图集打包前的资源命名对应起来
                urls.push("role1/" + aniName + i + ".png");
            }
            return urls;
        };
        ActorAniCrl.prototype.refresh = function () {
            if (this.inited) {
                var aniName = this._roleState + "_" + this.aniDirection[0];
                this.roleAni.scaleX = this.aniDirection[1];
                this.roleAni.play(0, true, aniName);
            }
        };
        Object.defineProperty(ActorAniCrl.prototype, "direction", {
            set: function (dir) {
                if (this._direction == dir) {
                    return;
                }
                if (dir.indexOf("r") >= 0) {
                    this.aniDirection = [dir.replace("r", "l"), -1];
                }
                else {
                    this.aniDirection = [dir, 1];
                }
                this._direction = dir;
                this.refresh();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorAniCrl.prototype, "roleState", {
            set: function (state) {
                if (this._roleState == state) {
                    return;
                }
                this._roleState = state;
                this.refresh();
            },
            enumerable: true,
            configurable: true
        });
        return ActorAniCrl;
    }());
    Actor.ActorAniCrl = ActorAniCrl;
})(Actor || (Actor = {}));
//# sourceMappingURL=ActorAniCrl.js.map