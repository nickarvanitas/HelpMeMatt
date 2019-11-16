// Garden Gnome Software - Skin
// Pano2VR 6.1.0/17841
// Filename: grey_multirow.ggsk
// Generated 2019-11-07T14:19:22

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('configloaded', function() { me.callNodeChange(me.divSkin); });
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._controller=document.createElement('div');
		el.ggId="controller";
		el.ggDx=0.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -31px;';
		hs+='height : 73px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 263px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controller.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._controller.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._down=document.createElement('div');
		els=me._down__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3'+
			'd3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiB4PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIj4KIDxnPgogIDxwb2x5Z29uIHBvaW50cz0iMTUuMDI2LDE2LjUzNSA1LjUwNyw3LjgxNCA1LjUwNywxNS40ODIgMTUuMDI2LDI0LjE4NiAyNC40OTIsMTUuNTA5IDI0LjQ3Myw3Ljg5OCAmI3g5OyIgZmlsbD0iIzY2NjY2NiIvPgogPC9nPgo8L3N2Zz4K';
		me._down__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._down__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3'+
			'd3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiB4PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIj4KIDxnPgogIDxwb2x5Z29uIHBvaW50cz0iMTUuMDI2LDE2LjUzNSA1LjUwNyw3LjgxNCA1LjUwNywxNS40ODIgMTUuMDI2LDI0LjE4NiAyNC40OTIsMTUuNTA5IDI0LjQ3Myw3Ljg5OCAmI3g5OyIvPgogPC9nPgo8L3N2Zz4K';
		me._down__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='top : 18px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._down.onclick=function (e) {
			player.changeTiltLog(-1,true);
		}
		me._down.onmouseover=function (e) {
			me._down__img.style.visibility='hidden';
			me._down__imgo.style.visibility='inherit';
		}
		me._down.onmouseout=function (e) {
			me._down__img.style.visibility='inherit';
			me._down__imgo.style.visibility='hidden';
		}
		me._down.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._down);
		el=me._up=document.createElement('div');
		els=me._up__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3'+
			'd3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiB4PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIj4KIDxnPgogIDxwb2x5Z29uIHBvaW50cz0iMTQuOTczLDE1LjQ2NSAyNC40OTIsMjQuMTg2IDI0LjQ5MiwxNi41MTggMTQuOTczLDcuODE0IDUuNTA3LDE2LjQ5MSA1LjUyNiwyNC4xMDIgJiN4OTsiIGZpbGw9IiM2NjY2NjYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._up__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._up__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3'+
			'd3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiB4PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIj4KIDxnPgogIDxwb2x5Z29uIHBvaW50cz0iMTQuOTczLDE1LjQ2NSAyNC40OTIsMjQuMTg2IDI0LjQ5MiwxNi41MTggMTQuOTczLDcuODE0IDUuNTA3LDE2LjQ5MSA1LjUyNiwyNC4xMDIgJiN4OTsiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._up__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='top : -21px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._up.onclick=function (e) {
			player.changeTiltLog(1,true);
		}
		me._up.onmouseover=function (e) {
			me._up__img.style.visibility='hidden';
			me._up__imgo.style.visibility='inherit';
		}
		me._up.onmouseout=function (e) {
			me._up__img.style.visibility='inherit';
			me._up__imgo.style.visibility='hidden';
		}
		me._up.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._up);
		el=me._left=document.createElement('div');
		els=me._left__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3'+
			'd3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiB4PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIj4KIDxnPgogIDxwb2x5Z29uIHBvaW50cz0iMTQuNDY1LDE2LjAyNyAyMy4xODYsNi41MDcgMTUuNTE4LDYuNTA3IDYuODE1LDE2LjAyNyAxNS40OTEsMjUuNDkyIDIzLjEwMiwyNS40NzMgJiN4OTsiIGZpbGw9IiM2NjY2NjYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._left__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._left__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3'+
			'd3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiB4PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIj4KIDxnPgogIDxwb2x5Z29uIHBvaW50cz0iMTQuNDY1LDE2LjAyNyAyMy4xODYsNi41MDcgMTUuNTE4LDYuNTA3IDYuODE1LDE2LjAyNyAxNS40OTEsMjUuNDkyIDIzLjEwMiwyNS40NzMgJiN4OTsiIGZpbGw9IiMxQTE3MUIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._left__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -14px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._left.onclick=function (e) {
			player.changePanLog(1,true);
		}
		me._left.onmouseover=function (e) {
			me._left__img.style.visibility='hidden';
			me._left__imgo.style.visibility='inherit';
		}
		me._left.onmouseout=function (e) {
			me._left__img.style.visibility='inherit';
			me._left__imgo.style.visibility='hidden';
		}
		me._left.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._left);
		el=me._right=document.createElement('div');
		els=me._right__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3'+
			'd3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiB4PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIj4KIDxnPgogIDxwb2x5Z29uIHBvaW50cz0iMTUuNTM1LDE1Ljk3MiA2LjgxNCwyNS40OTIgMTQuNDgyLDI1LjQ5MiAyMy4xODYsMTUuOTcyIDE0LjUwOSw2LjUwNyA2Ljg5OCw2LjUyNiAmI3g5OyIgZmlsbD0iIzY2NjY2NiIvPgogPC9nPgo8L3N2Zz4K';
		me._right__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._right__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3'+
			'd3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiB4PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIj4KIDxnPgogIDxwb2x5Z29uIHBvaW50cz0iMTUuNTM1LDE1Ljk3MiA2LjgxNCwyNS40OTIgMTQuNDgyLDI1LjQ5MiAyMy4xODYsMTUuOTcyIDE0LjUwOSw2LjUwNyA2Ljg5OCw2LjUyNiAmI3g5OyIgZmlsbD0iIzFBMTcxQiIvPgogPC9nPgo8L3N2Zz4K';
		me._right__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 29px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._right.onclick=function (e) {
			player.changePanLog(-1,true);
		}
		me._right.onmouseover=function (e) {
			me._right__img.style.visibility='hidden';
			me._right__imgo.style.visibility='inherit';
		}
		me._right.onmouseout=function (e) {
			me._right__img.style.visibility='inherit';
			me._right__imgo.style.visibility='hidden';
		}
		me._right.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._right);
		el=me._zoomin=document.createElement('div');
		els=me._zoomin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3'+
			'd3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiB4PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIj4KIDxnPgogIDxnPgogICA8cG9seWdvbiBwb2ludHM9IjE4LjMwOSwxMS4wMjEgMTQuMDUzLDExLjAyMSAxNC4wNTMsNi43NjUgMTEuMzQ2LDYuNzY1IDExLjM0NiwxMS4wMjEgNy4wOSwxMS4wMjEgNy4wOSwxMy43MjggJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OzExLjM0NiwxMy43MjggMTEuMzQ2LDE3Ljk4NCAxNC4wNTMsMTcuOTg0IDE0LjA1MywxMy43MjggMTguMzA5LDEz'+
			'LjcyOCAmI3g5OyYjeDk7IiBmaWxsPSIjNjY2NjY2Ii8+CiAgPC9nPgogPC9nPgogPGc+CiAgPGc+CiAgIDxjaXJjbGUgcj0iOS4xMjUiIGN4PSIxMi43IiBjeT0iMTIuMzc1IiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZT0iIzY2NjY2NiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBmaWxsPSJub25lIi8+CiAgPC9nPgogPC9nPgogPGc+CiAgPGc+CiAgIDxyZWN0IHk9IjE4LjgiIHdpZHRoPSI2LjMzNCIgeD0iMjEuODg1IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjcwNzEgLTAuNzA3MSAwLjcwNzEgMC43MDcxIC05LjgzMTYgMjQuODI1OSkiIGhlaWdodD0iMTAuOTYyIiBmaWxsPSIjNjY2NjY2Ii8+Ci'+
			'AgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._zoomin__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomin__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3'+
			'd3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiB4PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIj4KIDxnPgogIDxnPgogICA8cG9seWdvbiBwb2ludHM9IjE4LjMwOSwxMS4wMjEgMTQuMDUzLDExLjAyMSAxNC4wNTMsNi43NjUgMTEuMzQ2LDYuNzY1IDExLjM0NiwxMS4wMjEgNy4wOSwxMS4wMjEgNy4wOSwxMy43MjggJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OzExLjM0NiwxMy43MjggMTEuMzQ2LDE3Ljk4NCAxNC4wNTMsMTcuOTg0IDE0LjA1MywxMy43MjggMTguMzA5LDEz'+
			'LjcyOCAmI3g5OyYjeDk7IiBmaWxsPSIjMUExNzFCIi8+CiAgPC9nPgogPC9nPgogPGc+CiAgPGc+CiAgIDxjaXJjbGUgcj0iOS4xMjUiIGN4PSIxMi43IiBjeT0iMTIuMzc1IiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBmaWxsPSJub25lIi8+CiAgPC9nPgogPC9nPgogPGc+CiAgPGc+CiAgIDxyZWN0IHk9IjE4LjgwMiIgd2lkdGg9IjYuMzMzIiB4PSIyMS44ODUiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjcwNzIgMC43MDcgLTAuNzA3IC0wLjcwNzIgNTkuOTM2NiAyMy43NDI3KSIgaGVpZ2h0PSIxMC45NjIiIGZpbGw9IiMxQTE3MUIiLz'+
			'4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._zoomin__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 78px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomin.onmouseover=function (e) {
			me._zoomin__img.style.visibility='hidden';
			me._zoomin__imgo.style.visibility='inherit';
		}
		me._zoomin.onmouseout=function (e) {
			me._zoomin__img.style.visibility='inherit';
			me._zoomin__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.onmousedown=function (e) {
			me.elementMouseDown['zoomin']=true;
		}
		me._zoomin.onmouseup=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.ontouchend=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._zoomin);
		el=me._zoomout=document.createElement('div');
		els=me._zoomout__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3'+
			'd3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiB4PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIj4KIDxnPgogIDxnPgogICA8cmVjdCB5PSIxMS4wMjEiIHdpZHRoPSIxMS4yMTkiIHg9IjcuMDkiIGhlaWdodD0iMi43MDciIGZpbGw9IiM2NjY2NjYiLz4KICA8L2c+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPGNpcmNsZSByPSI5LjEyNSIgY3g9IjEyLjciIGN5PSIxMi4zNzUiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlPSIjNjY2NjY2IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGZp'+
			'bGw9Im5vbmUiLz4KICA8L2c+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHJlY3QgeT0iMTguOCIgd2lkdGg9IjYuMzM0IiB4PSIyMS44ODUiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjcwNzIgMC43MDcgLTAuNzA3IC0wLjcwNzIgNTkuOTM1MiAyMy43Mzk0KSIgaGVpZ2h0PSIxMC45NjIiIGZpbGw9IiM2NjY2NjYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._zoomout__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomout__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3'+
			'd3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiB4PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIj4KIDxnPgogIDxnPgogICA8cmVjdCB5PSIxMS4wMjEiIHdpZHRoPSIxMS4yMTkiIHg9IjcuMDkiIGhlaWdodD0iMi43MDciIGZpbGw9IiMxQTE3MUIiLz4KICA8L2c+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPGNpcmNsZSByPSI5LjEyNSIgY3g9IjEyLjciIGN5PSIxMi4zNzUiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGZp'+
			'bGw9Im5vbmUiLz4KICA8L2c+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHJlY3QgeT0iMTguODAyIiB3aWR0aD0iNi4zMzMiIHg9IjIxLjg4NSIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuNzA3MiAwLjcwNyAtMC43MDcgLTAuNzA3MiA1OS45MzY2IDIzLjc0MjcpIiBoZWlnaHQ9IjEwLjk2MiIgZmlsbD0iIzFBMTcxQiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._zoomout__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomout";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 129px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomout.onmouseover=function (e) {
			me._zoomout__img.style.visibility='hidden';
			me._zoomout__imgo.style.visibility='inherit';
		}
		me._zoomout.onmouseout=function (e) {
			me._zoomout__img.style.visibility='inherit';
			me._zoomout__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.onmousedown=function (e) {
			me.elementMouseDown['zoomout']=true;
		}
		me._zoomout.onmouseup=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.ontouchend=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._zoomout);
		el=me._autorotate=document.createElement('div');
		els=me._autorotate__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3'+
			'd3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiB4PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIj4KIDxnPgogIDxnPgogICA8cGF0aCBkPSJNNy4xNjYsMTIuNTIxYy0wLjMxMywwLTAuNTcyLTAuMS0wLjc3NS0wLjMwMWMtMC4yMDMtMC4yMDEtMC4zNTQtMC41NjEtMC40NS0xLjA4bC0yLjQ1NywwLjM0MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4xNjEsMC41OCwwLjM5MiwxLjA2LDAuNjksMS40NDJjMC4zLDAuMzg0LDAuNjgyLDAuNjc1LDEuMTQ2LDAuODcyYzAuNDY1'+
			'LDAuMTk4LDEuMSwwLjI5OCwxLjkwNSwwLjI5OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC44MjUsMCwxLjQ5MS0wLjEzNCwxLjk5OC0wLjQwM2MwLjUwNy0wLjI2OCwwLjg5Ni0wLjY0OSwxLjE2NS0xLjE0NnMwLjQwNC0xLjAxNiwwLjQwNC0xLjU1N2MwLTAuNDMyLTAuMDgyLTAuODAzLTAuMjQ0LTEuMTEzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4xNjQtMC4zMTEtMC4zOTMtMC41NjEtMC42ODYtMC43NTFDOS42ODMsOS4wMDQsOS40Miw4Ljg5OSw5LjA3OCw4LjgxMmMwLjQyNC0wLjI0NCwwLjczOS0wLjUyOSwwLjk0OC0wLjg1NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC'+
			'4yMDktMC4zMjUsMC4zMTMtMC42ODgsMC4zMTMtMS4wOWMwLTAuNjg2LTAuMjU4LTEuMjU0LTAuNzcyLTEuNzA2Yy0wLjUxNC0wLjQ1Mi0xLjM1LTAuNjgtMi41MDUtMC42OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuMDA2LDAtMS43ODQsMC4yMDctMi4zMzMsMC42MjFzLTAuOTIsMS4wMS0xLjExNCwxLjc4OWwyLjMyNCwwLjQzN2MwLjA2NS0wLjQ2MSwwLjE4OC0wLjc4MywwLjM3LTAuOTY4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M2LjQ5LDYuMTc2LDYuNzI1LDYuMDg1LDcuMDE1LDYuMDg1YzAuMjgsMCwwLjUwMywwLjA4NSwwLjY2NiwwLjI1NUM3Ljg0LDYuNTA5LDcuOTIyLDYu'+
			'NzM1LDcuOTIyLDcuMDE5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDAuMjk3LTAuMTA4LDAuNTUxLTAuMzIzLDAuNzY4QzcuMzgzLDguMDAxLDcuMTE0LDguMTA4LDYuNzkzLDguMTA4Yy0wLjA3NiwwLTAuMTg0LTAuMDEtMC4zMi0wLjAzMUw2LjM0Nyw5LjkyMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDNi42ODUsOS44MjEsNi45NSw5Ljc3MSw3LjE0Myw5Ljc3MWMwLjM2MSwwLDAuNjQ4LDAuMTE5LDAuODU5LDAuMzU0YzAuMjEzLDAuMjM1LDAuMzE3LDAuNTY5LDAuMzE3LDEuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDAuNDIzLTAuMTA4LDAuNzYyLTAuMzI5LDEuMDE2Qz'+
			'cuNzcxLDEyLjM5NCw3LjQ5NiwxMi41MjEsNy4xNjYsMTIuNTIxeiIgZmlsbD0iIzY2NjY2NiIvPgogICA8cGF0aCBkPSJNMTMuNTc0LDEzLjYxOGMwLjUzNSwwLjMxNiwxLjI0NiwwLjQ3NiwyLjEzMSwwLjQ3NmMwLjczNiwwLDEuMzUtMC4xMywxLjgzOC0wLjM5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQ4Ni0wLjI2LDAuODcxLTAuNjQ1LDEuMTQ2LTEuMTUxYzAuMjcyLTAuNTA2LDAuNDEyLTEuMDY3LDAuNDEyLTEuNjhjMC0wLjkwOS0wLjI3MS0xLjY1OS0wLjgxNS0yLjI1MSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNTQ2LTAuNTkyLTEuMjEzLTAuODg5LTItMC44ODljLTAu'+
			'NDA2LDAtMC43NjYsMC4wNzYtMS4wNzYsMC4yMjZjLTAuMzEsMC4xNDktMC42MTEsMC4zODEtMC45MDQsMC42OTQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzE0LjM4MSw3LjY1NiwxNC41LDcuMDA1LDE0LjY2LDYuN2MwLjIyMy0wLjQyNCwwLjUzMi0wLjYzNSwwLjkzLTAuNjM1YzAuMjIyLDAsMC40MDgsMC4wNzQsMC41NTksMC4yMjNzMC4yNTksMC40MDIsMC4zMjMsMC43NjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDIuNDQ0LTAuMzE3Yy0wLjE0My0wLjQ5OC0wLjM1LTAuOTE0LTAuNjE5LTEuMjQ0Yy0wLjI3LTAuMzI4LTAuNjA3LTAuNTc5LTEuMDE4LTAuNzVjLTAuNDA2LTAuMTcyLT'+
			'AuOTY0LTAuMjU4LTEuNjY4LTAuMjU4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMS4xODksMC0yLjEyMiwwLjM5MS0yLjc5NCwxLjE3Yy0wLjY3MiwwLjc4MS0xLjAwOCwyLjAxLTEuMDA4LDMuNjg4YzAsMS4xNDYsMC4xNiwyLjA2NiwwLjQ3OSwyLjc2MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMTIuNjExLDEyLjc5NSwxMy4wMzksMTMuMzAxLDEzLjU3NCwxMy42MTh6IE0xNC43MzcsOS43MzFjMC4yMzEtMC4yNjcsMC41MTktMC4zOTksMC44Ni0wLjM5OWMwLjMzNCwwLDAuNjEzLDAuMTM4LDAuODQsMC40MTImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMjI1LDAuMjc0LDAuMzM4'+
			'LDAuNjc1LDAuMzM4LDEuMTk4YzAsMC41MTItMC4xMDksMC44OTYtMC4zMjYsMS4xNTRjLTAuMjE4LDAuMjU4LTAuNDg2LDAuMzg3LTAuODA5LDAuMzg3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4zNSwwLTAuNjQ2LTAuMTQzLTAuODg5LTAuNDI4Yy0wLjI0LTAuMjg1LTAuMzYxLTAuNjgtMC4zNjEtMS4xODNDMTQuMzkxLDEwLjM3OCwxNC41MDYsOS45OTgsMTQuNzM3LDkuNzMxeiIgZmlsbD0iIzY2NjY2NiIvPgogICA8cGF0aCBkPSJNMjAuNzIzLDEyLjYyMmMwLjI5MywwLjQ4MiwwLjY3LDAuODQ4LDEuMTI5LDEuMDk3YzAuNDU5LDAuMjUsMS4wNjIsMC4zNzUsMS44MDcsMC4zNzUmI3'+
			'hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuMzI2LDAsMi4yNjUtMC4zOTEsMi44MDgtMS4xNzNjMC41NDMtMC43ODEsMC44MTItMi4wMTYsMC44MTItMy43MDNjMC0wLjc1Mi0wLjA4Mi0xLjQ3NS0wLjI0NC0yLjE2OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMDg4LTAuMzYzLTAuMTk2LTAuNjgyLTAuMzM4LTAuOTU1Yy0wLjEzOS0wLjI3My0wLjMyNS0wLjUzMy0wLjU2Ny0wLjc3OWMtMC4yNDEtMC4yNDgtMC41NTQtMC40NDgtMC45MzgtMC42MDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjM4My0wLjE1My0wLjg3MS0wLjIzMS0xLjQ2Ny0wLjIzMWMtMS4yNCwwLTIuMTYyLDAu'+
			'MzU0LTIuNzcsMS4wNmMtMC42MDQsMC43MDYtMC45MDgsMS45NDItMC45MDgsMy43MDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAsMC43MTgsMC4wNjEsMS4zNzQsMC4xOCwxLjk2OEMyMC4zNDIsMTEuODEyLDIwLjUwOCwxMi4yOCwyMC43MjMsMTIuNjIyeiBNMjIuNzU2LDYuODQ5QzIyLjkzOCw2LjQxNiwyMy4yMzIsNi4yLDIzLjYzOSw2LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMzk2LDAsMC42OTUsMC4yMTMsMC44OTYsMC42MzhjMC4xOTcsMC40MjYsMC4yOTksMS4yNTQsMC4yOTksMi40ODhjMCwwLjg0MS0wLjA0MywxLjQ2MS0wLjEyOSwxLjg1NyYjeGQ7JiN4YTsmI3g5Oy'+
			'YjeDk7JiN4OTtjLTAuMDg4LDAuMzk3LTAuMjIzLDAuNjg4LTAuNDA0LDAuODczYy0wLjE4NCwwLjE4NC0wLjM5NiwwLjI3NS0wLjY0NiwwLjI3NWMtMC4zNzksMC0wLjY2OC0wLjIxNy0wLjg2NC0wLjY1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4xOTktMC40MzMtMC4zMDEtMS4yNC0wLjMwMS0yLjQyNUMyMi40ODQsOC4wODUsMjIuNTc2LDcuMjgzLDIyLjc1Niw2Ljg0OXoiIGZpbGw9IiM2NjY2NjYiLz4KICAgPHBhdGggZD0iTTE1Ljg2NCwxNi4wMWM1LjE5MiwwLDkuNDc5LDEuNDEsMTAuMTc5LDMuMjQxYzAuNzI1LTAuMDMzLDEuNDYxLTAuMDU4LDIuMjIzLTAuMDU4JiN4ZDsmI3hh'+
			'OyYjeDk7JiN4OTsmI3g5O2MwLjc3OSwwLDEuNTQxLDAuMDIxLDIuMjgxLDAuMDZjLTEuMDc0LTIuMjkzLTcuMjI5LTQuMDUtMTQuNjgzLTQuMDVDNy42NTUsMTUuMjAzLDEsMTcuMzMzLDEsMTkuOTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDIuNDY1LDUuODQsNC40OTEsMTMuMzMsNC43MzRsLTEuNTIzLDIuMTZsMTQuMzU0LTIuNzdsLTEwLjQ0Ny0yLjc3MWwtMS41NTgsMi4yMDljLTUuMzUxLTAuMTMzLTkuNTgyLTEuNzYtOS41ODItMy43NTImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzUuNTc0LDE3LjY5MSwxMC4xODIsMTYuMDEsMTUuODY0LDE2LjAxeiIgZmlsbD0iIzY2NjY2Ni'+
			'IvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._autorotate__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._autorotate__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3'+
			'd3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiB4PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIj4KIDxnPgogIDxnPgogICA8cGF0aCBkPSJNNy4xNjYsMTIuNTIxYy0wLjMxMywwLTAuNTcyLTAuMS0wLjc3NS0wLjMwMWMtMC4yMDMtMC4yMDEtMC4zNTQtMC41NjEtMC40NS0xLjA4bC0yLjQ1NywwLjM0MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4xNjEsMC41OCwwLjM5MiwxLjA2LDAuNjksMS40NDJjMC4zLDAuMzg0LDAuNjgyLDAuNjc1LDEuMTQ2LDAuODcyYzAuNDY1'+
			'LDAuMTk4LDEuMSwwLjI5OCwxLjkwNSwwLjI5OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC44MjUsMCwxLjQ5MS0wLjEzNCwxLjk5OC0wLjQwM2MwLjUwNy0wLjI2OCwwLjg5Ni0wLjY0OSwxLjE2NS0xLjE0NnMwLjQwNC0xLjAxNiwwLjQwNC0xLjU1N2MwLTAuNDMyLTAuMDgyLTAuODAzLTAuMjQ0LTEuMTEzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4xNjQtMC4zMTEtMC4zOTMtMC41NjEtMC42ODYtMC43NTFDOS42ODMsOS4wMDQsOS40Miw4Ljg5OSw5LjA3OCw4LjgxMmMwLjQyNC0wLjI0NCwwLjczOS0wLjUyOSwwLjk0OC0wLjg1NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC'+
			'4yMDktMC4zMjUsMC4zMTMtMC42ODgsMC4zMTMtMS4wOWMwLTAuNjg2LTAuMjU4LTEuMjU0LTAuNzcyLTEuNzA2Yy0wLjUxNC0wLjQ1Mi0xLjM1LTAuNjgtMi41MDUtMC42OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuMDA2LDAtMS43ODQsMC4yMDctMi4zMzMsMC42MjFzLTAuOTIsMS4wMS0xLjExNCwxLjc4OWwyLjMyNCwwLjQzN2MwLjA2NS0wLjQ2MSwwLjE4OC0wLjc4MywwLjM3LTAuOTY4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M2LjQ5LDYuMTc2LDYuNzI1LDYuMDg1LDcuMDE1LDYuMDg1YzAuMjgsMCwwLjUwMywwLjA4NSwwLjY2NiwwLjI1NUM3Ljg0LDYuNTA5LDcuOTIyLDYu'+
			'NzM1LDcuOTIyLDcuMDE5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDAuMjk3LTAuMTA4LDAuNTUxLTAuMzIzLDAuNzY4QzcuMzgzLDguMDAxLDcuMTE0LDguMTA4LDYuNzkzLDguMTA4Yy0wLjA3NiwwLTAuMTg0LTAuMDEtMC4zMi0wLjAzMUw2LjM0Nyw5LjkyMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDNi42ODUsOS44MjEsNi45NSw5Ljc3MSw3LjE0Myw5Ljc3MWMwLjM2MSwwLDAuNjQ4LDAuMTE5LDAuODU5LDAuMzU0YzAuMjEzLDAuMjM1LDAuMzE3LDAuNTY5LDAuMzE3LDEuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDAuNDIzLTAuMTA4LDAuNzYyLTAuMzI5LDEuMDE2Qz'+
			'cuNzcxLDEyLjM5NCw3LjQ5NiwxMi41MjEsNy4xNjYsMTIuNTIxeiIgZmlsbD0iIzFBMTcxQiIvPgogICA8cGF0aCBkPSJNMTMuNTc0LDEzLjYxOGMwLjUzNSwwLjMxNiwxLjI0NiwwLjQ3NiwyLjEzMSwwLjQ3NmMwLjczNiwwLDEuMzUtMC4xMywxLjgzOC0wLjM5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQ4Ni0wLjI2LDAuODcxLTAuNjQ1LDEuMTQ2LTEuMTUxYzAuMjc0LTAuNTA2LDAuNDEyLTEuMDY3LDAuNDEyLTEuNjhjMC0wLjkwOS0wLjI3MS0xLjY1OS0wLjgxNS0yLjI1MSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNTQ2LTAuNTkyLTEuMjEzLTAuODg5LTItMC44ODljLTAu'+
			'NDA2LDAtMC43NjYsMC4wNzYtMS4wNzYsMC4yMjZjLTAuMzEsMC4xNDktMC42MTEsMC4zODEtMC45MDQsMC42OTQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzE0LjM4MSw3LjY1NiwxNC41LDcuMDA1LDE0LjY2LDYuN2MwLjIyMy0wLjQyNCwwLjUzMi0wLjYzNSwwLjkzLTAuNjM1YzAuMjIyLDAsMC40MDgsMC4wNzQsMC41NTksMC4yMjNzMC4yNTksMC40MDIsMC4zMjMsMC43NjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDIuNDQ0LTAuMzE3Yy0wLjE0My0wLjQ5OC0wLjM1LTAuOTE0LTAuNjE5LTEuMjQ0Yy0wLjI3LTAuMzI4LTAuNjA3LTAuNTc5LTEuMDE4LTAuNzVjLTAuNDA2LTAuMTcyLT'+
			'AuOTY0LTAuMjU4LTEuNjY4LTAuMjU4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMS4xODksMC0yLjEyMiwwLjM5MS0yLjc5NCwxLjE3Yy0wLjY3MiwwLjc4MS0xLjAwOCwyLjAxLTEuMDA4LDMuNjg4YzAsMS4xNDYsMC4xNiwyLjA2NiwwLjQ3OSwyLjc2MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMTIuNjExLDEyLjc5NSwxMy4wMzksMTMuMzAxLDEzLjU3NCwxMy42MTh6IE0xNC43MzcsOS43MzFjMC4yMzEtMC4yNjcsMC41MTktMC4zOTksMC44Ni0wLjM5OWMwLjMzNCwwLDAuNjEzLDAuMTM4LDAuODQsMC40MTImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMjI1LDAuMjc0LDAuMzM4'+
			'LDAuNjc1LDAuMzM4LDEuMTk4YzAsMC41MTItMC4xMDksMC44OTYtMC4zMjYsMS4xNTRjLTAuMjE4LDAuMjU4LTAuNDg2LDAuMzg3LTAuODA5LDAuMzg3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4zNSwwLTAuNjQ2LTAuMTQzLTAuODg5LTAuNDI4Yy0wLjI0LTAuMjg1LTAuMzYxLTAuNjgtMC4zNjEtMS4xODNDMTQuMzkxLDEwLjM3OCwxNC41MDYsOS45OTgsMTQuNzM3LDkuNzMxeiIgZmlsbD0iIzFBMTcxQiIvPgogICA8cGF0aCBkPSJNMjAuNzIzLDEyLjYyMmMwLjI5MywwLjQ4MiwwLjY3LDAuODQ4LDEuMTI5LDEuMDk3YzAuNDU5LDAuMjUsMS4wNjIsMC4zNzUsMS44MDUsMC4zNzUmI3'+
			'hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuMzI4LDAsMi4yNjUtMC4zOTEsMi44MDgtMS4xNzNjMC41NDMtMC43ODEsMC44MTMtMi4wMTYsMC44MTMtMy43MDNjMC0wLjc1Mi0wLjA4Mi0xLjQ3NS0wLjI0Ni0yLjE2OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMDg2LTAuMzYzLTAuMTk2LTAuNjgyLTAuMzM2LTAuOTU1Yy0wLjEzOS0wLjI3My0wLjMyNy0wLjUzMy0wLjU2OS0wLjc3OWMtMC4yNDItMC4yNDgtMC41NTQtMC40NDgtMC45MzctMC42MDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjM4My0wLjE1My0wLjg3MS0wLjIzMS0xLjQ2Ny0wLjIzMWMtMS4yNCwwLTIuMTYyLDAu'+
			'MzU0LTIuNzcsMS4wNmMtMC42MDQsMC43MDYtMC45MDgsMS45NDItMC45MDgsMy43MDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAsMC43MTgsMC4wNjEsMS4zNzQsMC4xOCwxLjk2OEMyMC4zNDIsMTEuODEyLDIwLjUwOCwxMi4yOCwyMC43MjMsMTIuNjIyeiBNMjIuNzU2LDYuODQ5QzIyLjkzOCw2LjQxNiwyMy4yMzIsNi4yLDIzLjYzOSw2LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMzk2LDAsMC42OTUsMC4yMTMsMC44OTYsMC42MzhjMC4xOTgsMC40MjYsMC4yOTksMS4yNTQsMC4yOTksMi40ODhjMCwwLjg0MS0wLjA0MywxLjQ2MS0wLjEyOSwxLjg1NyYjeGQ7JiN4YTsmI3g5Oy'+
			'YjeDk7JiN4OTtjLTAuMDg4LDAuMzk3LTAuMjIyLDAuNjg4LTAuNDA0LDAuODczYy0wLjE4NCwwLjE4NC0wLjM5NywwLjI3NS0wLjY0NywwLjI3NWMtMC4zNzksMC0wLjY2OC0wLjIxNy0wLjg2NS0wLjY1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4xOTktMC40MzMtMC4zMDEtMS4yNC0wLjMwMS0yLjQyNUMyMi40ODQsOC4wODUsMjIuNTc2LDcuMjgzLDIyLjc1Niw2Ljg0OXoiIGZpbGw9IiMxQTE3MUIiLz4KICAgPHBhdGggZD0iTTE1Ljg2NCwxNi4wMWM1LjE5MiwwLDkuNDc5LDEuNDEsMTAuMTc5LDMuMjQxYzAuNzI1LTAuMDMzLDEuNDYxLTAuMDU4LDIuMjIzLTAuMDU4JiN4ZDsmI3hh'+
			'OyYjeDk7JiN4OTsmI3g5O2MwLjc3OSwwLDEuNTQxLDAuMDIxLDIuMjgxLDAuMDZjLTEuMDc0LTIuMjkzLTcuMjI5LTQuMDUtMTQuNjgzLTQuMDVDNy42NTUsMTUuMjAzLDEsMTcuMzMzLDEsMTkuOTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDIuNDY1LDUuODQsNC40OTEsMTMuMzMsNC43MzRsLTEuNTIzLDIuMTZsMTQuMzU0LTIuNzY4bC0xMC40NDctMi43NzFsLTEuNTU4LDIuMjA5Yy01LjM1MS0wLjEzMy05LjU4Mi0xLjc2LTkuNTgyLTMuNzUyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M1LjU3NCwxNy42OTEsMTAuMTgyLDE2LjAxLDE1Ljg2NCwxNi4wMXoiIGZpbGw9IiMxQTE3MU'+
			'IiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._autorotate__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="autorotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : 187px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 34px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._autorotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._autorotate.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._autorotate.onmouseover=function (e) {
			me._autorotate__img.style.visibility='hidden';
			me._autorotate__imgo.style.visibility='inherit';
		}
		me._autorotate.onmouseout=function (e) {
			me._autorotate__img.style.visibility='inherit';
			me._autorotate__imgo.style.visibility='hidden';
		}
		me._autorotate.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._autorotate);
		el=me._fullscreen=document.createElement('div');
		els=me._fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3'+
			'd3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiB4PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIj4KIDxnPgogIDxnPgogICA8cG9seWdvbiBwb2ludHM9IjMuMjg2LDYuNjIyIDguNTQ5LDYuNjIyIDguNTQ5LDQuNTc5IDMuMjg2LDQuNTc5IDEuMjQzLDQuNTc5IDEuMjQzLDYuNjIyIDEuMjQzLDExLjkxNyAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7My4yODYsMTEuOTE3ICYjeDk7JiN4OTsiIGZpbGw9IiM2NjY2NjYiLz4KICAgPHBvbHlnb24gcG9pbnRzPSIyOC44MTYsNC41'+
			'NzkgMjMuNTIxLDQuNTc5IDIzLjUyMSw2LjYyMyAyOC44MTYsNi42MjMgMjguODE2LDExLjg4NSAzMC44NTksMTEuODg1IDMwLjg1OSw2LjYyMyAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7MzAuODU5LDQuNTc5ICYjeDk7JiN4OTsiIGZpbGw9IiM2NjY2NjYiLz4KICAgPHJlY3QgeT0iOC4yNDgiIHdpZHRoPSIyMS41MzEiIHg9IjUuMTk5IiBoZWlnaHQ9IjE2LjQ5OCIgZmlsbD0iIzY2NjY2NiIvPgogICA8cG9seWdvbiBwb2ludHM9IjI4LjgxNiwyNi4zNzIgMjMuNTUzLDI2LjM3MiAyMy41NTMsMjguNDE1IDI4LjgxNiwyOC40MTUgMzAuODU5LDI4LjQxNSAzMC44NTksMjYuMzcyICYjeGQ7Ji'+
			'N4YTsmI3g5OyYjeDk7JiN4OTszMC44NTksMjEuMDc3IDI4LjgxNiwyMS4wNzcgJiN4OTsmI3g5OyIgZmlsbD0iIzY2NjY2NiIvPgogICA8cG9seWdvbiBwb2ludHM9IjMuMjg2LDIxLjEwNyAxLjI0MywyMS4xMDcgMS4yNDMsMjYuMzcyIDEuMjQzLDI4LjQxNSAzLjI4NiwyOC40MTUgOC41ODEsMjguNDE1IDguNTgxLDI2LjM3MiAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7My4yODYsMjYuMzcyICYjeDk7JiN4OTsiIGZpbGw9IiM2NjY2NjYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._fullscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3'+
			'd3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiB4PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIj4KIDxnPgogIDxnPgogICA8cG9seWdvbiBwb2ludHM9IjMuMjg2LDYuNjIyIDguNTQ5LDYuNjIyIDguNTQ5LDQuNTc5IDMuMjg2LDQuNTc5IDEuMjQzLDQuNTc5IDEuMjQzLDYuNjIyIDEuMjQzLDExLjkxNyAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7My4yODYsMTEuOTE3ICYjeDk7JiN4OTsiIGZpbGw9IiMxQTE3MUIiLz4KICAgPHBvbHlnb24gcG9pbnRzPSIyOC44MTYsNC41'+
			'NzkgMjMuNTIxLDQuNTc5IDIzLjUyMSw2LjYyMyAyOC44MTYsNi42MjMgMjguODE2LDExLjg4NSAzMC44NTksMTEuODg1IDMwLjg1OSw2LjYyMyAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7MzAuODU5LDQuNTc5ICYjeDk7JiN4OTsiIGZpbGw9IiMxQTE3MUIiLz4KICAgPHJlY3QgeT0iOC4yNDgiIHdpZHRoPSIyMS41MzEiIHg9IjUuMTk5IiBoZWlnaHQ9IjE2LjQ5OCIgZmlsbD0iIzFBMTcxQiIvPgogICA8cG9seWdvbiBwb2ludHM9IjI4LjgxNiwyNi4zNzIgMjMuNTUzLDI2LjM3MiAyMy41NTMsMjguNDE1IDI4LjgxNiwyOC40MTUgMzAuODU5LDI4LjQxNSAzMC44NTksMjYuMzcyICYjeGQ7Ji'+
			'N4YTsmI3g5OyYjeDk7JiN4OTszMC44NTksMjEuMDc3IDI4LjgxNiwyMS4wNzcgJiN4OTsmI3g5OyIgZmlsbD0iIzFBMTcxQiIvPgogICA8cG9seWdvbiBwb2ludHM9IjMuMjg2LDIxLjEwNyAxLjI0MywyMS4xMDcgMS4yNDMsMjYuMzcyIDEuMjQzLDI4LjQxNSAzLjI4NiwyOC40MTUgOC41ODEsMjguNDE1IDguNTgxLDI2LjM3MiAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7My4yODYsMjYuMzcyICYjeDk7JiN4OTsiIGZpbGw9IiMxQTE3MUIiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 243px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._fullscreen.onmouseover=function (e) {
			me._fullscreen__img.style.visibility='hidden';
			me._fullscreen__imgo.style.visibility='inherit';
		}
		me._fullscreen.onmouseout=function (e) {
			me._fullscreen__img.style.visibility='inherit';
			me._fullscreen__imgo.style.visibility='hidden';
		}
		me._fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._fullscreen);
		me.divSkin.appendChild(me._controller);
		el=me._loading=document.createElement('div');
		el.ggId="loading";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._loading.onclick=function (e) {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		me._loading.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._loadingbg=document.createElement('div');
		el.ggId="loadingbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbg.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbg);
		el=me._loadingbrd=document.createElement('div');
		el.ggId="loadingbrd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 58px;';
		hs+='left : -1px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 208px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loadingbrd.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbrd.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbrd);
		el=me._loadingtext=document.createElement('div');
		els=me._loadingtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="loadingtext";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._loadingtext.ggUpdateText=function() {
			var hs="Loading... "+(player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		player.addListener('downloadprogress', function() {
			me._loadingtext.ggUpdateText();
		});
		el.appendChild(els);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingtext.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingtext);
		el=me._loadingbar=document.createElement('div');
		el.ggId="loadingbar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #808080;';
		hs+='cursor : default;';
		hs+='height : 12px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 181px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbar.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbar);
		me.divSkin.appendChild(me._loading);
		el=me._userdata=document.createElement('div');
		el.ggId="userdata";
		el.ggDx=0;
		el.ggDy=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 140px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 240px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._userdata.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._userdata.onclick=function (e) {
			me._userdata.style[domTransition]='none';
			me._userdata.style.visibility='hidden';
			me._userdata.ggVisible=false;
		}
		me._userdata.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._userdatabg=document.createElement('div');
		el.ggId="userdatabg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 140px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 240px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._userdatabg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdatabg.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdatabg);
		el=me._userdatabrd=document.createElement('div');
		el.ggId="userdatabrd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 138px;';
		hs+='left : -1px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 238px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._userdatabrd.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdatabrd.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdatabrd);
		el=me._title=document.createElement('div');
		els=me._title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 220px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._title.ggUpdateText=function() {
			var hs="<b>"+me.ggUserdata.title+"<\/b>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._title.ggUpdateText();
		player.addListener('changenode', function() {
			me._title.ggUpdateText();
		});
		el.appendChild(els);
		me._title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._title.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._title);
		el=me._description=document.createElement('div');
		els=me._description__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="description";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 220px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._description.ggUpdateText=function() {
			var hs=me.ggUserdata.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._description.ggUpdateText();
		player.addListener('changenode', function() {
			me._description.ggUpdateText();
		});
		el.appendChild(els);
		me._description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._description.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._description);
		el=me._author=document.createElement('div');
		els=me._author__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="author";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 220px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._author.ggUpdateText=function() {
			var hs=me.ggUserdata.author;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._author.ggUpdateText();
		player.addListener('changenode', function() {
			me._author.ggUpdateText();
		});
		el.appendChild(els);
		me._author.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._author.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._author);
		el=me._datetime=document.createElement('div');
		els=me._datetime__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="datetime";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._datetime.ggUpdateText=function() {
			var hs=me.ggUserdata.datetime;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._datetime.ggUpdateText();
		player.addListener('changenode', function() {
			me._datetime.ggUpdateText();
		});
		el.appendChild(els);
		me._datetime.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._datetime.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._datetime);
		el=me._copyright=document.createElement('div');
		els=me._copyright__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="copyright";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._copyright.ggUpdateText=function() {
			var hs="&#169; "+me.ggUserdata.copyright;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._copyright.ggUpdateText();
		player.addListener('changenode', function() {
			me._copyright.ggUpdateText();
		});
		el.appendChild(els);
		me._copyright.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._copyright.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._copyright);
		me.divSkin.appendChild(me._userdata);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('imagesready', function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		});
		player.addListener('beforechangenode', function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
			me._loading.ggVisible=true;
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseDown['zoomin']) {
			player.changeFovLog(-1,true);
		}
		if (me.elementMouseDown['zoomout']) {
			player.changeFovLog(1,true);
		}
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me.skinTimerEvent();
};