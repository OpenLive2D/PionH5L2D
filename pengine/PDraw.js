/** Drawing Abstraction **/
function DrawContext(canvasContext){
	var base = canvasContext;
	var fill = "#000000";
	var debug = false;
	var debugText = "";
	var width = base.canvas.offsetWidth,
		height = base.canvas.offsetHeight;
	
	var clear = function(){
		base.fillStyle = "#FFFFFF";
		base.fillRect(0,0,width,height);
		base.fillStyle = fill;
	}
	var draw = function(){
		if(debug)
			base.fillText(debugText, 0, 10);
	};
	
	this.setDebug = function(display){ debug = display; };
	this.setDebugText = function(text){ debugText = text; };
	this.redraw = function(){
		clear();
		draw();
	};
}