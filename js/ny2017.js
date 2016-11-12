(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiOgEIjomtIECGcIHrAUInnAQIkGGjg");
	this.shape.setTransform(37.5,43.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,75.1,86.8), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(169,71,34,0.898)","rgba(202,127,70,0.898)","rgba(226,168,96,0.898)","rgba(235,184,106,0.898)","rgba(217,150,85,0.925)","rgba(195,109,60,0.957)","rgba(178,79,41,0.98)","rgba(169,61,30,0.992)","#A5361A","#A8381C","#B13D21","#C0462A","#CE4F32"],[0,0.078,0.145,0.176,0.227,0.294,0.357,0.408,0.447,0.659,0.8,0.922,1],-0.1,0,0.2,0).s().p("AAAABIgBAAIAAgBIADAAIAAABg");
	this.shape.setTransform(0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,0.4,0.2), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(169,71,34,0.898)","rgba(202,127,70,0.898)","rgba(226,168,96,0.898)","rgba(235,184,106,0.898)","rgba(217,150,85,0.925)","rgba(195,109,60,0.957)","rgba(178,79,41,0.98)","rgba(169,61,30,0.992)","#A5361A","#A8381C","#B13D21","#C0462A","#CE4F32"],[0,0.078,0.145,0.176,0.227,0.294,0.357,0.408,0.447,0.659,0.8,0.922,1],-3.1,0.1,4.1,0).s().p("AgQABQABAAAAgBQAAAAAAAAQAAAAABAAQAAAAABAAIAagBQABAAABAAQAAABABAAQAAAAAAAAQABAAAAABIAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAIgbAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAgBABg");
	this.shape_1.setTransform(1.7,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,3.3,0.4), null);


(lib.detail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#53C7F0").s().p("AgPBIIAFgaQgRgIgJgIIgbANQgNgMgJgSIAbgKQgGgKgBgNIgdgIQADgPAHgKIAaAIQAFgHAKgGIgNgPQANgEANgBIAMAOQANgBAKACIABgLQAMADANAHIAAALQAKAFAKAJIAKgFQAKAJAHAKIgKAFQAFAJADAKIARAEQACANAAAJIgSgFQgCAJgHAHIAPASQgHAKgNAGIgQgUQgLAEgNgBIgCAaQgUgBgQgGgAgOgtQgQAFgDAOQgEAPAOAPQANARATAFIAPACQAOAAAJgIQAJgIAAgMQAAgNgLgMQgLgMgRgHQgKgDgIAAQgHAAgGACg");
	this.shape.setTransform(0.4,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1580C1").s().p("AgKAQIgEgJIAIgnIAUAZIABAEIgKAkQgIgHgHgKg");
	this.shape_1.setTransform(-7.4,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1580C1").s().p("AAHgQQACgJAIAAQAEABADABIgjAqIgMAHQAcgaACgQg");
	this.shape_2.setTransform(6.3,6.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1580C1").s().p("AgQAQIgKgDIARgfIAkAHIgXAeQgIAAgMgDg");
	this.shape_3.setTransform(-0.2,7.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#055FA9","#06519E"],[0,1],-9.8,0,9.8,0).s().p("AAABdIgBgBIgEAAIgBAAIgCAAIgCgBIgCAAIgBAAIgBAAIgBgBIgBAAIgBAAIgCAAIgBgBIgBAAIgBAAIgBAAIAAgBIgBAAIgCgBIgCAAIgCgBIAAgBIABgBIAAgBIAAgBIAAgCIABgBIAAgCIAAgBIAAgCIABAAIAAgDIABAAIAAgCIAAgBIAAgCIABgBIAAgBIgBAAIgBgBIgBAAIgBAAIAAgBIgBAAIgBgBIgBAAIAAAAIgBgBIAAAAIgBgBIgBAAIAAAAIgCgBIAAAAIgBgBIgBAAIAAAAIgBgBIgBgBIgBAAIgBgCIgBAAIgCgCIgBAAIgBgBIAAABIgBAAIgBABIgBAAIAAAAIgBABIgBAAIAAAAIgCABIAAAAIgBAAIgBABIgBAAIgBABIAAAAIgBAAIAAABIgBAAIgBAAIgBABIgBAAIgBABIAAAAIgBAAIgBABIgBAAIAAAAIgBABIAAAAIgBAAIgBAAIAAgBIgCgBIAAgBIgBAAIgBgBIgBgBIAAgBIgCgCIAAgBIgCgBIAAgBIgCgBIgBgCIAAAAIgBgCIgCgCIAAgBIAAAAIgBgCIgBgBIgBgCIAAAAIAAgBIAFghIgBAAIgBAAIAAgBIgBAAIgBAAIgBAAIgBgBIgBAAIgBAAIgBAAIgBgBIgBAAIAAAAIgBAAIgBAAIAGguIACAAIABAAIABAAIABABIAAAAIABAAIABAAIABABIABAAIAAAAIACAAIABABIABAAIABAAIAAAAIABABIABAAIABAAIABAAIAAABIACAAIABAAIABAAIAAABIABAAIABAAIABAAIABABIAAAAIABAAIAMg0IAAAAIABABIAAABIACACIAAAAIABACIABAAIAAAAIACACIAAABIACACIAAAAIABABIAAAAIABABIAAAAIABACIgNAzIAAgBIgBAAIgBAAIAAgBIgBgBIAAAAIAAAAIgBgBIAAAAIAAgBIgBAAIAAAAIgCgDIAAAAIAAgBIgBAAIAAAAIAAgBIAAACIAAABIAAACIABABIAAABIAAABIAAABIABAAIAAABIAAABIAAABIAAABIABABIAAAAIAAABIAAABIABABIAAAAIAAABIABABIAAABIABAAIgKAiIADACIAAABIABABIABABIABABIACgCIABAAIABAAIABgBIABAAIACgBIAAAAIACgBIAAgBIACgBIABAAIACgBIABAAIABAAIABgBIAAAAIACgBIAAAAIABgBIABAAIACgBIABAAIABgBIAAAAIABAAIACACIABABIAAAAIABABIABAAIABABIABAAIABABIABACIACABIABAAIABABIAAAAIADABIAAAAIACABIAAABIACABIABAAIAEACIAAAAIAAACIgBABIAAACIAAABIAAACIgBAAIAAACIgBABIAAACIAAABIAAACIgBABIAAABIAAABIAAADIgBAAIAAACIAAABIAAABIABAAIABABIACAAIABAAIABABIABAAIABAAIABABIABAAIABAAIABABIABAAIABAAIABAAIABABIABAAIABAAIADAAIABABIABAAIAQgZIAJAAIABAAIADAAIAAgBIADAAIAAAAIACAAIABgBIABAAIAAAAIABAAIABgBIABAAIAAAAIABABIABABIABABIABABIAagiIABAAIAAAAIABAAIABABIABAAIABAAIAAAAIABABIABAAIABAAIABAAIABABIABAAIAAAAIACAAIAAABIABAAIAAAAIABAAIABABIABAAIABAAIghAnIgBAAIAAAAIgBAAIgBgBIgBAAIABABIABABIABACIABABIABABIAAABIABAAIABgBIABAAIAAAAIABgBIABAAIABgBIABgBIABAAIABgBIABgBIAAAAIABAAIADgDIABgBIghAkIAAAAIgCADIgBAAIgBAAIgCACIAAAAIgBAAIgBABIgBAAIAAABIgBAAIAAAAIgBgBIAAgBIAAAAIgEgEIAAgBIgDgDIAAgBIgCgBIAAgBIgCgCIAAAAIgCgCIgBAAIAAAAIgCAAIAAABIgBAAIAAAAIgCAAIgRAYgAhLAHIABAAIABACIABABIAAgBIgBgBIAAgCIAAAAIgBAAIgCAAgAAfAfIAAgCIAAgBIAAgGIAAgCIAAgBIgBgDIAAgBIgBgDIgBgCIgBgBIgBgCIgBgBIgCgDIgBgBIgBgBIgBgBIgDgCIgCgBIgBgBIgEgDIgCgBIgDgCIgCAAIgBgBIgCgBIgBgBIgHgCIgCAAIgCAAIgDAAIgCgBIgCAAIgCABIgDAAIgEABIgBAAIgCAAIgBABIgBABIgBAAIgBABIgCABIgDADIgBABIgCACIAOgsIABgBIAAgCIAEgEIABgBIABgCIADgCIACAAIADgCIAHgCIACAAIABgBIAEAAIAKgbIAAABIgBABIAAAEIAAAAIAAAEIgBAAIAAABIgGAQIAFAAIANADIAEACIADABIACABIABABIACABIAEACIACABIABACIACABIADADIACABIABABIABACIABABIACADIACACIABACIACADIAAABIABACIABAFIAAACIABACIAAAAIAMgSIABgBIAAAAIABAAIABgBIAAAAIABAAIABgBIAAAAIABAAIAAgBIABAAIAAAAIABgBIABAAIABAAIABAAIgZAjIAAABIAAACIgBABIgaAmg");
	this.shape_4.setTransform(0.1,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.detail, new cjs.Rectangle(-9.7,-9.4,19.6,19), null);


(lib.but = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0033CC").s().p("AkkCWIAAkrIJJAAIAAErg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.but, new cjs.Rectangle(-29.2,-15,58.5,30.1), null);


(lib.kub1a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(12.4,0.2,1,1,0,0,0,37.5,43.4);
	this.instance.alpha = 0.648;

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0559A4","rgba(45,154,211,0)"],[0.098,1],-24.1,13,15.4,-1).s().p("AAHjYIDuGwInpABg");
	this.shape.setTransform(-25.9,-21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(33,135,198,0.6)","rgba(132,210,242,0)"],[0.004,0.996],6.9,-35.8,-9.4,-2.8).s().p("Aj7jaIH3AAIj8G1g");
	this.shape_1.setTransform(0,-21.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#A0D9F4","#A0D9F4","#70CCF1"],[0,0.004,1],-37.8,0,37.9,0).s().p("Ah9DbIj9m1IH4AAID9G1g");
	this.shape_2.setTransform(12.6,-21.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(5,89,164,0)","#2D9AD3"],[0.278,0.898],-5.1,-21.9,1.4,32.1).s().p("Aj7DTIECmmID1Gmg");
	this.shape_3.setTransform(0.1,22.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#06529F").s().p("Al6DaID9mzIH4AAIj9Gzg");
	this.shape_4.setTransform(12.7,21.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2E9BD4").s().p("Ah9G1Ij9m1ID9m0IH4AAIAANpg");
	this.shape_5.setTransform(-12.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.kub1a, new cjs.Rectangle(-50.5,-43.7,101.1,87.5), null);


(lib.kub1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.kub1a = new lib.kub1a();
	this.kub1a.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.kub1a).wait(1));

}).prototype = getMCSymbolPrototype(lib.kub1, new cjs.Rectangle(-50.5,-43.7,101.1,87.5), null);


(lib.elToyIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,0.922],2.6,0.8,0,2.6,0.8,6.5).s().p("AgEAiIgBgCIgBgHIgFAFQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAABgBIAFgFIAAgEIgFAEIgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIAHgFIAAgIIgHAFIABgKIgFAEIAAAKIgBABQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIAAgIIgBACIgBAKIAAABQgBABAAgKIgCADQgBABAAgBIAAgCIADgEIgCgEQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIACAFIACgCIgCgEIABgCIAAABIADADIAFgDIgEgFIAHgEIgCgDIgGAEIAAAAIABgDIAEgDIAAgBIgFADIAAAAQgBgBAGgEIABgCIACgCIgBACIAFgFIACgBIAAAAIgBABIgGAHIAAABIAEgGIACgBIAAABIgFAHIACADIAEgIIADAEIACgFIgBgDIAAgBIABgBIABAAIABACIABgCIAAgDIACgBIAAACIAEgDIABgBIAAABIgDADIAEgCIABAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAIgGADIgCACIAFgCIABAAQAAAAABAAQAAAAAAAAQgBAAAAABQAAAAAAAAIgHAEIgDAFIAIgEIgDAIIAGgDIACgHIABgBIABABIgBAGIACgCIACgGIABgBQABAAgBAGIAEgDIABAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAgBABIgEADIAFACIABABIAAACIgCAAIgHgEIgDACIAGADIAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgHgEIgGAEIAIAEIgJAFIAFACIAIgDIABAAQABAAAAAAQABABAAAAQAAAAAAABQgBAAAAAAIgHADIADACIAJgFIABAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABgBAAIgHAEIAGAEIABABQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAgBAAIgGgEIAAAIIAAABQgBABAAAAQAAAAAAAAQgBAAAAAAQAAgBgBAAIAAgLIgDgCIAAAIIgBABQAAABgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIgBgLIgFgDIgBAKIgGgFIgBAIIAHAFIABABQAAABAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAIgFgEIAAAEIAGAFIABABQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAIgGgFIABAHIAAABIAAABIgBAAgAgEACIAEADIAAgFIgDgDgAgKAAIgBAFIAFgDIABgFgAgBgGIADADIAGgDIgFgDgAgOgGIADADIAFgDIgDgDgAAAgOIgCAGIAEgDIACgFgAgHgLIADADIACgFIgDgDg");
	this.shape.setTransform(-4.3,-1);

	this.instance = new lib.Path_1();
	this.instance.parent = this;
	this.instance.setTransform(0,-7.4,1,1,0,0,0,1.7,0.1);
	this.instance.alpha = 0.531;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","rgba(226,188,164,0)","#E2BCA4","#F3EACF","#F9F9DD","#F5E9CC","#EABDA1","#D9795C","#CE4F32"],[0,0.788,0.788,0.816,0.824,0.843,0.878,0.929,0.957],-1.9,0,1.7,0).s().p("AgQgCIAAgDQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAaAAQABAAABAAQAAAAABAAQAAAAAAABQAAAAAAABIAAACQAAAFADAGIglABQACgFAAgGg");
	this.shape_1.setTransform(-0.1,-6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(169,71,34,0.898)","rgba(183,94,45,0.898)","rgba(221,160,78,0.898)","rgba(246,201,98,0.898)","rgba(255,217,106,0.898)","#A82515","#A92818","#AC3120","#B2402E","#BB5643","#C5715D","#D2947D","#E2BCA4","rgba(226,188,164,0)","rgba(0,0,0,0)"],[0,0.035,0.141,0.22,0.259,0.518,0.584,0.627,0.663,0.698,0.729,0.761,0.788,0.788,1],-1.9,0,1.7,0).s().p("AgQgCIAAgDQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAaAAQABAAABAAQAAAAABAAQAAAAAAABQAAAAAAABIAAACQAAAFADAGIglABQACgFAAgGg");
	this.shape_2.setTransform(-0.1,-6.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#4C0000","rgba(76,0,0,0)"],[0,1],0,-0.5,0,0.5).s().p("AgiACIAEgBIABgBIABAAIACAAIABgBIACgBIAJgCIAAAAIADgBIALgBIACAAIAKABIAAAAIAFABIAAAAIADABIAEAAIAEADIABAAIACAAIADABIAIAEIAAABIhTABg");
	this.shape_3.setTransform(-0.1,-5.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,0.953],-0.4,-6.4,0,-0.4,-6.4,9.4).s().p("AACAVIgBgDIgBABIAAAAQAAAAAAAAQAAAAAAgBQgBAAABAAQAAAAAAAAIABgCIgBgFIgCgBIABAAIAAgBIgBABIgDACIABAEIABAAQAAABgBAAQAAAAAAAAQAAAAgBgBQAAAAgBAAIgBgCIgCACIgCgCIACgCIgDgBIgBgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAIAFACIADgCIgBgEIgGgDIgDACIgBABQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBIADgBIgHgDIgBgCIABgBIAHADIgBgDQAAgBAAAAQABgBAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIABAFIAGACIADgBIAAgHIgFgCIgCgCQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAABAAIAEACIAAgHQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAAAABIAAAHIADgCIABAAIABAAQABAAAAAAQAAABABAAQAAAAAAABQgBAAAAABIgGADIABAHIADABIAGgCIAAgGQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIgBAEIAHgEIABAAQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAIgGAEIACAAIAAABQABAAAAABQAAAAAAABQgBAAAAAAQgBAAgBAAIgEgCIgFADIAAADIAEADIAEgCIABAAQAAAAABAAQAAAAAAAAQAAAAAAABQgBAAAAABIgDABIADACIAAABQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIAAgBIgDgBIgBACIAAAAQgBABAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAIABgEIgEgCIgCABIAAAFIADABIAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIgCgBIABADIAAAAIgBAAIgBAAgAgCAEIABAEIACABIADgCIAAgDIgEgCg");
	this.shape_4.setTransform(-0.4,6.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,0.953],-5.7,-1.5,0,-5.7,-1.5,9.4).s().p("AgCAlIAAgCIACgEIgEADIgBAAIgBgBIABgCIAGgFIABgFIgCADIgBAAIgBgBIAAgCIAFgFIABgMIgHAGIgBAHIgBACQAAABgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgFIgDACIgCAJIgBABQgBABAAAAQAAAAgBAAQAAAAAAAAQAAgBgBAAIABgHIgEADIgBAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAABgBIAFgEIgEgCIgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAgBQAAAAABAAIAHAEIAEgCIgDgCIAAAAIgBgDQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIAGADIAHgGIgHgFIgFAEIgBAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAgBAAgBIAEgDIgEgCIgGAEIgCAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAFgDIgEgDIAAAAIgBgCQAAgBAAAAQAAAAABAAQAAAAAAgBQAAAAABAAIAFADIgBgGQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAIADACIABAJIAEACIgBgEQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABgBIACACIABAIIAGAGIAAgMIgEgEIgBAAQAAgBgBAAQAAgBAAgBQAAAAABAAQAAgBABAAIADACIgBgEIgGgEIgBgCQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAEADIAAgFQAAAAgBAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAAAIABAFIACgDIABAAIABABIABACIgDAFIABAEIACgCQABAAAAAAQABAAAAABQAAAAAAABQAAABAAABIgDAEIABAMIAGgGIgBgHIABgDQABAAABAHIABgCIgBgJQAAAAgBAAQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAACAIIABgDQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAABIgBADIACADIABADIgBABIAAAAIgDgEIgCACIACACIABADQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAIgEgEIgGAFIAGAGIAEgEQAAAAAAABQABAAAAAAQAAABAAAAQAAABgBABIgCADIABACIADgEIABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAABIgDADIABADIgBADIAAABIgBgDIgCAGQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgBIACgJIgBgCIgBAEIgBACQAAABAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAgBIABgHIgFgGIgCAMIADAEIAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAIgCgDIgBAFIACAEIAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAIgCgDIgCAEIAAACIgBABIgBgBg");
	this.shape_5.setTransform(4.9,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FC191B","#F7181A","#EA1618","#D31315","#B30F10","#8A0909","#580202","#4C0000"],[0.067,0.192,0.333,0.482,0.639,0.8,0.965,1],0.7,-1.2,0,0.7,-1.2,7.2).s().p("AgWBIIgKgFIgLgGIgJgHIgHgJIgGgKIgFgKIgDgMIgBgMIAAgLIADgMIAFgLQABgEAFgGIAHgIIASgOIAEgCIACgBIAAAAIACgBIABAAIADgBIAIgCIABAAIACgBIAMgBIABAAIAKABIABAAIAEABIAAAAIADABIAEAAIAEACIABAAIACABIAEACIAIAEIABACIABAAQANAKAIANIABABIAAAAIABACIABACIAAABIABACIAAAAIACAFQADAHAAAFIAAABIABALIAAALIgBACIAAABIgBABIAAABIgBADIAAABIgBAEIAAAAIAAABIgBADIgBABIAAABIgEAHIABAAIgBABIgCACIAAABIgJAMIgJAHIgKAGIgLAFIgLADIgMABg");
	this.shape_6.setTransform(0,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["rgba(255,217,106,0.898)","#A82515","#A92818","#AC3120","#B2402E","#BB5643","#C5715D","#D2947D","#E2BCA4","#F3EACF","#F9F9DD"],[0.063,0.518,0.584,0.627,0.663,0.698,0.729,0.761,0.788,0.816,0.824],0,-0.2,0,0,-0.2,0.8).s().p("AgCABQAAgDACAAQADAAAAADQAAABAAAAQAAAAAAAAQgBABAAAAQgBAAgBAAIAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBg");
	this.shape_7.setTransform(-0.1,-7.6);

	this.instance_1 = new lib.Path_10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.2,-8.8,1,1,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0.531;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["rgba(255,217,106,0.898)","#A82515","#A92818","#AC3120","#B2402E","#BB5643","#C5715D","#D2947D","#E2BCA4","#F3EACF","#F9F9DD"],[0.063,0.518,0.584,0.627,0.663,0.698,0.729,0.761,0.788,0.816,0.824],0,-0.2,0,0,-0.2,1.5).s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAGgHABQgGgBAAgGgAgEAAQAAAFAEAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBQAAgEgFAAQgEAAAAAEg");
	this.shape_8.setTransform(-0.1,-8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.instance_1},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.elToyIn, new cjs.Rectangle(-7.5,-8.9,15,17.9), null);


(lib.elToy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// Слой 1
	this.instance = new lib.elToyIn();
	this.instance.parent = this;
	this.instance.setTransform(0.1,-8.3,1,1,54.5,0,0,0,-8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,scaleX:1,scaleY:1,rotation:-22.6,x:-0.2},12,cjs.Ease.get(0.78)).to({regY:-8.2,scaleX:1,scaleY:1,rotation:0,x:-0.1,y:-8.2},6).to({rotation:9.7,x:0},6).to({rotation:0,x:-0.1},6).to({rotation:-7.5},5).to({rotation:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.3,-13.1,21,20.9);


// stage content:
(lib.logo103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:20,mouseOut:678});

	// timeline functions:
	this.frame_20 = function() {
		stage.enableMouseOver();
		 
		this.but1.addEventListener("mouseover", over.bind(this));
		 
		function over() 
		{ 
		
			this.gotoAndPlay("start");
			
		}
	}
	this.frame_21 = function() {
		stage.enableMouseOver();
		 
		this.but1.addEventListener("mouseout", over.bind(this));
		 
		function over() 
		{ 
		
			this.gotoAndPlay("mouseOut");
			
		}
	}
	this.frame_22 = function() {
		console.log( stage.mouseX );
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(1).call(this.frame_21).wait(1).call(this.frame_22).wait(748));

	// but
	this.but1 = new lib.but();
	this.but1.parent = this;
	this.but1.setTransform(170.3,69.3,5.765,4.496,0,0,0,0.3,0.4);
	this.but1.alpha = 0.012;
	this.but1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.but1).wait(20).to({_off:false},0).wait(750));

	// toys
	this.instance = new lib.elToy();
	this.instance.parent = this;
	this.instance.setTransform(130.4,112.7,0.587,0.587,0,0,0,0.1,0.5);

	this.instance_1 = new lib.elToy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(44.7,88.1,0.587,0.587,0,0,0,0.4,0.3);

	this.instance_2 = new lib.elToy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(87.2,38.8,0.587,0.587,0,0,0,0.3,0.5);

	this.instance_3 = new lib.elToy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(66,26.6,0.587,0.587,0,0,0,0.4,0.5);

	this.instance_4 = new lib.elToy();
	this.instance_4.parent = this;
	this.instance_4.setTransform(115.5,92.9,1.115,1.115,0,0,0,0.2,0.2);

	this.instance_5 = new lib.elToy();
	this.instance_5.parent = this;
	this.instance_5.setTransform(22.7,105.3,1.115,1.115,0,0,0,0.1,0.2);

	this.instance_6 = new lib.elToy();
	this.instance_6.parent = this;
	this.instance_6.setTransform(72.8,92.9,1.115,1.115,0,0,0,0.1,0.2);

	this.instance_7 = new lib.elToy();
	this.instance_7.parent = this;
	this.instance_7.setTransform(87.7,68.5,1.115,1.115,0,0,0,0.1,0.2);

	this.instance_8 = new lib.elToy();
	this.instance_8.parent = this;
	this.instance_8.setTransform(66.5,54.6,1.115,1.115,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4,p:{regX:0.2,regY:0.2,scaleX:1.115,scaleY:1.115,x:115.5,y:92.9}},{t:this.instance_3,p:{regX:0.4,regY:0.5,scaleX:0.587,scaleY:0.587,x:66,y:26.6}},{t:this.instance_2,p:{regX:0.3,regY:0.5,scaleX:0.587,scaleY:0.587,x:87.2,y:38.8}},{t:this.instance_1,p:{regX:0.4,regY:0.3,scaleX:0.587,scaleY:0.587,x:44.7,y:88.1}},{t:this.instance,p:{regY:0.5,scaleX:0.587,scaleY:0.587,x:130.4,y:112.7}}]},44).to({state:[{t:this.instance_4,p:{regX:0.1,regY:0.1,scaleX:1.282,scaleY:1.282,x:58.6,y:-92.8}},{t:this.instance_3,p:{regX:0.1,regY:0.1,scaleX:1.282,scaleY:1.282,x:83.1,y:-76.8}},{t:this.instance_2,p:{regX:0.1,regY:0.1,scaleX:1.282,scaleY:1.282,x:65.9,y:-48.8}},{t:this.instance_1,p:{regX:0.1,regY:0.1,scaleX:1.282,scaleY:1.282,x:8.4,y:-34.5}},{t:this.instance,p:{regY:0.1,scaleX:1.282,scaleY:1.282,x:114.9,y:-48.8}}]},634).wait(92));

	// detail
	this.instance_9 = new lib.detail();
	this.instance_9.parent = this;
	this.instance_9.setTransform(79.2,71.8,1,1,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(13).to({regX:0.1,regY:0.3,scaleX:1.54,scaleY:1.54,x:83.9,y:60.9},6).to({scaleX:0.87,scaleY:0.87,x:71.3,y:9.6},23).wait(636).to({regX:0,regY:0.2,scaleX:1,scaleY:1,x:79.2,y:71.8},8).wait(84));

	// 1
	this.kub1 = new lib.kub1();
	this.kub1.parent = this;
	this.kub1.setTransform(88,46.9,0.324,0.324);

	this.timeline.addTween(cjs.Tween.get(this.kub1).wait(13).to({regX:0.1,regY:0.1,x:105.1,y:54.8},6).to({regX:0.2,regY:0.2,scaleX:0.28,scaleY:0.28,x:87.4,y:58.2},23).wait(636).to({regX:0,regY:0,scaleX:0.32,scaleY:0.32,x:88,y:46.9},8).wait(84));

	// 2
	this.kub2 = new lib.kub1();
	this.kub2.parent = this;
	this.kub2.setTransform(78.6,31.1,0.324,0.324);

	this.timeline.addTween(cjs.Tween.get(this.kub2).wait(13).to({regX:0.1,regY:0.1,x:80.5,y:21.4},6).to({regX:0.2,regY:0,scaleX:0.28,scaleY:0.28,x:72.6,y:33.5},23).wait(636).to({regX:0,scaleX:0.32,scaleY:0.32,x:78.6,y:31.1},8).wait(84));

	// 3
	this.kub3 = new lib.kub1();
	this.kub3.parent = this;
	this.kub3.setTransform(69.5,46.9,0.324,0.324);

	this.timeline.addTween(cjs.Tween.get(this.kub3).wait(13).to({regX:0.1,regY:0.1,x:57.7,y:54.8},6).to({regX:0.2,regY:0.2,scaleX:0.28,scaleY:0.28,x:58.9,y:58.2},23).wait(636).to({regX:0,regY:0,scaleX:0.32,scaleY:0.32,x:69.5,y:46.9},8).wait(84));

	// 1
	this.kub4 = new lib.kub1();
	this.kub4.parent = this;
	this.kub4.setTransform(52.7,76.3,0.324,0.324);

	this.timeline.addTween(cjs.Tween.get(this.kub4).wait(13).to({regX:0.1,regY:0.1,x:40.8,y:83.9},6).to({regX:0,regY:0.2,scaleX:0.28,scaleY:0.28,x:44.1,y:82.9},23).wait(636).to({regY:0,scaleX:0.32,scaleY:0.32,x:52.7,y:76.3},8).wait(84));

	// 2
	this.kub5 = new lib.kub1();
	this.kub5.parent = this;
	this.kub5.setTransform(43.6,92.3,0.324,0.324);

	this.timeline.addTween(cjs.Tween.get(this.kub5).wait(13).to({regX:0.1,regY:0.1,x:39.8,y:98.3},6).to({regX:0.2,regY:0,scaleX:0.28,scaleY:0.28,x:29.9,y:107.5},23).wait(636).to({regX:0,scaleX:0.32,scaleY:0.32,x:43.6,y:92.3},8).wait(84));

	// 3
	this.kub6 = new lib.kub1();
	this.kub6.parent = this;
	this.kub6.setTransform(62.3,92.3,0.324,0.324);

	this.timeline.addTween(cjs.Tween.get(this.kub6).wait(13).to({regX:0.1,regY:0.1,x:80.5,y:98.3},6).to({regX:0,regY:0,scaleX:0.28,scaleY:0.28,x:115.9,y:107.5},23).wait(636).to({scaleX:0.32,scaleY:0.32,x:62.3,y:92.3},8).wait(84));

	// 1
	this.kub7 = new lib.kub1();
	this.kub7.parent = this;
	this.kub7.setTransform(95.6,92.3,0.324,0.324);

	this.timeline.addTween(cjs.Tween.get(this.kub7).wait(13).to({regX:0.1,regY:0.1,x:90.9,y:90.5},6).to({regX:0.2,regY:0.2,scaleX:0.28,scaleY:0.28,x:72.6,y:82.9},23).wait(636).to({regX:0,regY:0,scaleX:0.32,scaleY:0.32,x:95.6,y:92.3},8).wait(84));

	// 2
	this.kub8 = new lib.kub1();
	this.kub8.parent = this;
	this.kub8.setTransform(114.2,92.3,0.324,0.324);

	this.timeline.addTween(cjs.Tween.get(this.kub8).wait(13).to({regX:0.1,regY:0.1,x:104.4,y:98.3},6).to({regX:0.2,regY:0,scaleX:0.28,scaleY:0.28,x:72.6,y:107.5},23).wait(636).to({regX:0,scaleX:0.32,scaleY:0.32,x:114.2,y:92.3},8).wait(84));

	// 3
	this.kub9 = new lib.kub1();
	this.kub9.parent = this;
	this.kub9.setTransform(104.7,76.3,0.324,0.324);

	this.timeline.addTween(cjs.Tween.get(this.kub9).wait(13).to({regX:0.1,regY:0.1,x:116.6,y:83.9},6).to({regX:0,regY:0.2,scaleX:0.28,scaleY:0.28,x:101.1,y:82.9},23).wait(636).to({regY:0,scaleX:0.32,scaleY:0.32,x:104.7,y:76.3},8).wait(84));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#2187C6","#6CB9E3"],[0.682,0.686],0.9,11,0,-8.9).s().p("ADeBTQgfgfAAgsQAAgcAOgZQAQgZAYgNQAYgOAeAAQAsAAAfAfQAhAeAAAsQgBAtgfAeQgfAfgtAAQguAAgfgfgAD6goQgTATgBAdQAAAiAZAUQAUAPAYAAQAcAAAUgUQAUgVAAgcQAAgbgUgVQgVgUgbAAQgcAAgVAUgAjcBTQgfgfAAgsQAAgdAOgYQAPgYAZgOQAZgOAdAAQAsAAAfAfQAgAeABAsQAAAtggAeQgfAfgsAAQgvAAgfgfgAjAgoQgTATgBAdQAAAiAaAUQASAPAaAAQAbAAAUgUQAUgUAAgdQAAgbgUgVQgUgUgcAAQgdAAgUAUgAN3BtIAAh+IhNB+IgiAAIAAjJIAnAAIAACCIBPiCIAhAAIAADJgAKxBtIAAh+IhNB+IgjAAIAAjJIAnAAIAACCIBPiCIAiAAIAADJgAG8BtIAAjJIBmAAIAAAlIhAAAIAACkgACHBtIg6iUIg6CUIgpAAIBPjJIAoAAIBQDJgAlIBtIAAhZIhGAAIAABZIgoAAIAAjJIAoAAIAABMIBGAAIAAhMIAoAAIAADJgAn/BtIgxhHIgvBHIgtAAIBGhoIhBhhIAsAAIArBBIAshBIAtAAIhCBhIBGBogAsQBtIAAjJIBxAAIAAAlIhJAAIAAAlIBJAAIAAAkIhJAAIAAA1IBJAAIAAAmgAt5BtIAAijIglAAIAAgmIBzAAIAAAmIgmAAIAACjgANFhxIArAAIgrBHg");
	this.shape.setTransform(237.3,81.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#055FA9").s().p("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");
	this.shape_1.setTransform(238.6,61.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#06519E","#137EC0"],[0.682,0.714],0.3,8.2,-0.4,-10.7).s().p("Ar9B0IAAgeIibAAIAAjJIAoAAIAACmIBGAAIAAimIAnAAIAACmIArAAIAABBgAMdBWIAAjJIAqAAQAiAAAQAGQAPAGAIAOQAJAOAAASQAAAVgLAPQgMANgTAGQgMACgeAAIAABWgANFgkIAMAAQANAAAJgCQAEgCAFgFQADgFAAgHQAAgLgJgGQgIgEgSAAIgLAAgAGyBWIAAijIglAAIAAgmIBzAAIAAAmIglAAIAACjgABJBWIAAhYIhGAAIAABYIgnAAIAAjJIAnAAIAABMIBGAAIAAhMIAnAAIAADJgAm9BWIAAjJIByAAIAAAlIhKAAIAAAlIBKAAIAAAlIhKAAIAAA0IBKAAIAAAmg");
	this.shape_2.setTransform(238.8,42.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(770));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(193.3,76.4,304.9,89.6);
// library properties:
lib.properties = {
	width: 332,
	height: 119,
	fps: 50,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;