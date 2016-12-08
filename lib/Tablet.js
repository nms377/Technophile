/*
Why don't I need to create a Tablet constructor? Is it already created somewhere else?
function Tablet(x,y){
	this.x = x;
	this.y = y;
}*/

Tablet.prototype.touch = function(x,y) {
	this.x = x;
	this.y = y;
	return {x: this.x, y:this.y};
};

module.exports = Tablet;