(()=>{"use strict";(()=>{function e(e){let t=document.createElement("div");return t.innerHTML=e,t.querySelector("template").innerHTML}const t=[{id:1,article:e('<template> <span class="title">天动万象𒆙</span> <span class="content"> 朋友，假使有一日不得不同你相别，你在我的记忆中也会如黄金般闪耀。 见证者，为见证而来。铭记者，因铭记而生。 旅程总有一天会迎来终点，不必匆忙。 此世群魔诸神并起，我虽无意逐鹿，却知苍生苦楚，只愿荡涤四方，护得浮世一隅。 一切力量皆有其代价,一千种权力伴随着一千种责任。 在你通向那个人的路上，也许会有更多困难，但只要你坚信这条路通往『正确』，一切就有意义。 我是人的神明,不论身份如何变化,都会以我这双眼睛见证属于人的历史。 我在心里数了他千万个缺点，却敌不过看他那一眼。 欲买桂花同载酒 只可惜故人 何日再见呢。 </span> </template>')},{id:2,article:e('<template> <span class="title">忽悠着你</span> <span class="content"> 美酒，微风……这样的时刻，总会让我忍不住想起……想起那首，从他那里听来的歌。 飞翔吧，飞翔吧。就像飞鸟那样。代我看看这个世界……带我飞到，高天之上。 我已经有过一次旅行。所以，你也要像我一样抵达终点，才能在自己的眼中，留下这个世界的沉淀。 我们终将重逢。 拉钩拉钩不许变，变了丢他去冰川。冰川冷，雪原寒，撒谎的舌头全冻烂！ 孩童时期的梦是最易碎的东西。哪怕放着不管，也总会有一天自己碎掉。 所以，一定要有人来保护才行吧？许下的承诺就该好好遵守，做错了事就该好好道歉。给予他的梦，就该好好呵护到最后……这才是身为家人该有的样子，就是这样。 那就说明，成为往生堂的堂主，一定是非常正确而且绝对不会留下遗憾的事。 轻盈的风，偶尔也会变得沉重。 几千年岁月的冲刷，哪怕是岩石……也会偶尔感到疲惫。 欲买桂花同载酒，只可惜故人……何日再见呢？ 看似不变的磐石、看似不变的世界与我……或许也会在某一天消失。所以，旅行者，我想到了你。 你是远渡重天、跨越星海之人。把历史刻在你的记忆里，就可以在未来某日，随你一同前往别的世界。 原来这就是你与我同行的理由，任重而道远啊。 璃月港的神迹，从此又少了一分。 谁也没有见过风，更别说我和你了。谁也没有见过爱情，直到有束花抛向了自己。 </span> </template>')},{id:3,article:e('<template> <span class="title">如何看待知乎上的男拳</span> <span class="content"> 我看女拳的时候感觉她们不是女的 我看男拳的时候也不觉得他们是男的 疯了 全都疯了 老实人在中间说一句话立马被揍得东倒西歪 满地找牙关键老实人还不知道做错了啥明 </span> </template>')},{id:4,article:e('<template> <span class="title">天动万象𒆙</span> <span class="content"> # helloworld ## 我是h2 我是 艺术大#师 ihxaxa ### 我是h3 #### 我是h4 ##### 我是h5 ###### 我是h6 ############# 我是黄果树瀑布f 我是小明 </span> </template>')}];var n=[{deptName:"某某公司",type:2},{deptName:"子公司",type:4},{deptName:"子子部门",type:5}],r="2->4，5",s=function(){let e=[],t=[],s="";return r.replace(/\d/g,(function(t){e.push(t)})),r.replace(/\D+/g,(function(e){t.push(e)})),n.forEach(((n,r)=>{n.type==e[r]&&(t[r]?s+=n.deptName+t[r]:s+=n.deptName)})),s}();console.log(s),"{{ username }}".replace(/[^{}\n\s]\S+/g,(function(e){console.log(e)}));class l{constructor(e){this.props=e,this.json={},this.keyArr=[],this.strArr=[],this.exec()}exec(){-1!=this.props.constructor.toString().indexOf("Object")?this.urlMerge():this.urlSplit()}urlSplit(){let e=this.props.substring(this.props.indexOf("?")+1);this.keyArr=e.split("&"),this.keyArr.forEach((e=>{let t=e.split("=");this.json[t[0]]=t[1]}))}urlMerge(){let e;for(const t in this.props)e=t+"="+this.props[t],this.strArr.push(e)}get(e){return this.json[e]}parse(){return this.strArr.join("&")}}let i=new l(window.location.search),a=new l({name:"xiaoming",id:"1"});function c(e){let t=document.createElement("div");return t.innerHTML=e,t}console.log(i.get("id")),console.log(a.parse());for(let e=0;e<t.length;e++)if(t[e].id==i.get("id")){let n=c(t[e].article),r=n.querySelector(".title").innerHTML;document.querySelector(".content_text").querySelector("h1").innerHTML=r;let s=n.querySelector(".content").innerHTML;document.querySelector(".article").innerHTML=s}let o=document.querySelector(".article").innerHTML,p=new class{constructor(e){this.parse=e,this.res=[],this.exec()}exec(){let e=this.parse.match(/(#+\s*)|(\S+\s+|\S+|)|\n/g);e=e.join(""),e.split("\n").forEach((e=>{this.res.push(e.trim())}))}parseHTML(){let e=[];return this.res.forEach((t=>{let n=[];if(n=0==t.indexOf("#")?t.match(/(#+\s(1))|(\S+)|\n/g):t,Array.isArray(n)){let t;t=n[0].length>6?6:n[0].length;let r=document.createElement("h"+t);r.innerHTML=n[1],e.push(r)}else{let t=document.createElement("p");t.innerHTML=n,e.push(t)}})),e}}(o);console.log(p.parseHTML()),p.parseHTML().forEach((e=>{document.querySelector(".aaaa").append(e)}))})()})();