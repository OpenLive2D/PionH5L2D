/* Init, Load up a few handy features */
var $ = function(e){return document.getElementById(e);}

window.addEventListener("load",function(){
	/* Dom has been loaded */
	var stg = $("stage");
	if(stg == null){
		alert("[Error] Loading canvas failed");
		return;
	}
	var fps = 0, tl = (new Date()).getTime();
	var ctx = new DrawContext(stg.getContext("2d"));
	ctx.setDebug(true);
	ctx.setDebugText("Initalized. FPS:" + fps);
	var tmout = setInterval(function(){
		/* The redraw timer */
		var nt = (new Date()).getTime();
		fps = Math.round(1000 / (nt - tl));
		tl = nt;
		ctx.setDebugText("Initalized. FPS:" + fps);
		ctx.redraw();
	}, 40);
});