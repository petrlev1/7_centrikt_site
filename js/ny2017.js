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


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#EDEEF3"],[0,1],0.7,7.6,-3,-13.3).s().p("AhZBiQhOgEgsgNIAFhWIAKgQQAMgTAQgQQAygxA+AIQAZADAlAQQAmAJA6gUQAZgIAlAZQAeAVAHAPQA0Bni8AaQgxAHg1AAIg0gCg");
	this.shape.setTransform(28.6,0.5,1,0.497);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#EDEEF3"],[0,1],0.6,6,-1.1,-5).s().p("Ag8A9QhBgOgsgZQANgZAbgYQA2gxBJAJQBEAJAmAiIAcAcQASAQAUAKQhHAnhSAAQglAAgogIg");
	this.shape_1.setTransform(-32.8,-0.7,1,0.682);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.8,-5.4,99.7,11);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#EDEEF3"],[0,1],0.7,7.6,-3,-13.3).s().p("AhZBiQhOgEgsgNIAFhWIAKgQQAMgTAQgQQAygxA+AIQAZADAlAQQAmAJA6gUQAZgIAlAZQAeAVAHAPQA0Bni8AaQgxAHg1AAIg0gCg");
	this.shape.setTransform(28.6,0.5,1,0.497);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#EDEEF3"],[0,1],0.6,6,-1.1,-5).s().p("Ag8A9QhBgOgsgZQANgZAbgYQA2gxBJAJQBEAJAmAiIAcAcQASAQAUAKQhHAnhSAAQglAAgogIg");
	this.shape_1.setTransform(-32.8,-0.7,1,0.682);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.8,-5.4,99.7,11);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EED749").s().p("ABHApQgGAAgFgEQgEgEAAgGQgBAGgFAEQgFADgGgBIgCAAQgGgBgDgFQgEgFABgGIAAgBIAAABQgCAGgGADQgFADgGgCIgBgBQgFgCgDgFQgDgGACgFQgEAIgJAAIgHgBQgFgDgDgGQgCgGADgFQACgFAGgCQAFgCAGACIABABQAGACACAFQACAGgDAGQADgGAEgDQAFgDAGACIABAAQAGACADAFQACAFgBAFQACgFAFgDQAFgDAFABIgCAOIADgOQAFABAEAEQAEAEAAAGQABgNANgBIABAPIAAgPQAGAAAFAEQAEAEABAGQAAAHgEAEQgEAFgGAAgAg0AFIgBgBQgGgDgBgFQgCgGAEgFQADgGAGgBQAGgCAFAEIABAAQAFADACAGQABAGgDAFQgEAHgJAAQgEAAgDgCgAhRgOIgCgDQgEgGABgFQACgGAFgEQAFgDAFABQAGABAEAEQAEAEAAAGQAAAHgFAEQgEAEgGAAQgGAAgFgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-4.1,17.4,8.3);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EED749").s().p("ABHApQgGAAgFgEQgEgEAAgGQgBAGgFAEQgFADgGgBIgCAAQgGgBgDgFQgEgFABgGIAAgBIAAABQgCAGgGADQgFADgGgCIgBgBQgFgCgDgFQgDgGACgFQgEAIgJAAIgHgBQgFgDgDgGQgCgGADgFQACgFAGgCQAFgCAGACIABABQAGACACAFQACAGgDAGQADgGAEgDQAFgDAGACIABAAQAGACADAFQACAFgBAFQACgFAFgDQAFgDAFABIgCAOIADgOQAFABAEAEQAEAEAAAGQABgNANgBIABAPIAAgPQAGAAAFAEQAEAEABAGQAAAHgEAEQgEAFgGAAgAg0AFIgBgBQgGgDgBgFQgCgGAEgFQADgGAGgBQAGgCAFAEIABAAQAFADACAGQABAGgDAFQgEAHgJAAQgEAAgDgCgAhRgOIgCgDQgEgGABgFQACgGAFgEQAFgDAFABQAGABAEAEQAEAEAAAGQAAAHgFAEQgEAEgGAAQgGAAgFgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-4.1,17.4,8.3);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EED749").s().p("AgJAMIgBgBQgEgEAAgFQgBgFAEgFIAAgBQAEgFAGAAQAFgBAFAEQAFADABAHQABAFgEAFIgBABQgDAFgHAAIgBAAQgFAAgEgDg");
	this.shape.setTransform(15.4,-5.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EED749").s().p("AgNAHQgCgGABgFQACgGAGgCIABgBQAFgCAFACQAFABADAFIABABQACAGgCAFQgCAGgFACQgDACgEAAQgJAAgEgIg");
	this.shape_1.setTransform(5.9,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EED749").s().p("AgNAFQgCgFACgFQADgGAFgCIACAAQAFgCAFADQAGACACAGQACAFgDAFQgDAGgGACIgFABQgKAAgDgKg");
	this.shape_2.setTransform(13.5,-2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EED749").s().p("AgNAFQgCgFACgFQADgGAGgCIABAAQAFgCAFADQAGACACAGQACAFgDAGQgDAFgGACIgFABQgJAAgEgKg");
	this.shape_3.setTransform(11.1,-0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EED749").s().p("AgNAFQgCgFACgFQADgGAFgCIACAAQAFgCAFACQAGADACAGQACAFgDAFQgDAGgGACIgFABQgKAAgDgKg");
	this.shape_4.setTransform(8.5,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EED749").s().p("AgNAFQgCgFACgFQADgGAFgCIABAAQAFgCAGACQAFADACAGQACAFgCAFQgDAGgGACIgFABQgKAAgDgKg");
	this.shape_5.setTransform(3,3.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EED749").s().p("AgCAPIgBgBQgGgBgDgFQgEgFACgFQABgHAGgDQAFgDAEABIgCAOIADgOQAGABAEAGQADAFgBAFQgCAMgMAAg");
	this.shape_6.setTransform(-15.3,4.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EED749").s().p("AgYAPQgFgEgBgGQAAgFADgFQAEgFAGgBIACAOIgBgOQAGgBAFAEQAFADAAAFQAAgFACgFQADgFAGgCIABAAQAGgBAFADQAGADABAGQACAGgDAFQgEAFgGABIgBABQgGABgFgDQgFgDgCgGQABAGgDAFQgDAFgGABIgCAAIgCAAQgFAAgEgDg");
	this.shape_7.setTransform(-1.5,4.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EED749").s().p("AAAAPQgFAAgEgEQgFgEAAgGQgBgFAEgEQAEgFAGgBIABAAQAGAAAEAEQAFAEAAAGQABAGgEAEQgEAFgHAAg");
	this.shape_8.setTransform(-6.1,5.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EED749").s().p("AAPAQQgHAAgEgFQgEgEAAgGQAAAGgEAEQgFAEgHgBQgGAAgEgFQgEgFAAgFQABgGAEgEQAFgEAGAAIABAAQAGABAEAEQADAFAAAFQAAgFAFgEQAEgEAGAAIABAAQAGAAAFAEQAEAFAAAFQAAAGgFAEQgEAFgGAAg");
	this.shape_9.setTransform(-10.7,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.9,-6.9,33.8,13.9);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EED749").s().p("AgJAMIgBgBQgEgEAAgFQgBgFAEgFIAAgBQAEgFAGAAQAFgBAFAEQAFADABAHQABAFgEAFIgBABQgDAFgHAAIgBAAQgFAAgEgDg");
	this.shape.setTransform(15.4,-5.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EED749").s().p("AgNAHQgCgGABgFQACgGAGgCIABgBQAFgCAFACQAFABADAFIABABQACAGgCAFQgCAGgFACQgDACgEAAQgJAAgEgIg");
	this.shape_1.setTransform(5.9,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EED749").s().p("AgNAFQgCgFACgFQADgGAFgCIACAAQAFgCAFADQAGACACAGQACAFgDAFQgDAGgGACIgFABQgKAAgDgKg");
	this.shape_2.setTransform(13.5,-2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EED749").s().p("AgNAFQgCgFACgFQADgGAGgCIABAAQAFgCAFADQAGACACAGQACAFgDAGQgDAFgGACIgFABQgJAAgEgKg");
	this.shape_3.setTransform(11.1,-0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EED749").s().p("AgNAFQgCgFACgFQADgGAFgCIACAAQAFgCAFACQAGADACAGQACAFgDAFQgDAGgGACIgFABQgKAAgDgKg");
	this.shape_4.setTransform(8.5,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EED749").s().p("AgNAFQgCgFACgFQADgGAFgCIABAAQAFgCAGACQAFADACAGQACAFgCAFQgDAGgGACIgFABQgKAAgDgKg");
	this.shape_5.setTransform(3,3.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EED749").s().p("AgCAPIgBgBQgGgBgDgFQgEgFACgFQABgHAGgDQAFgDAEABIgCAOIADgOQAGABAEAGQADAFgBAFQgCAMgMAAg");
	this.shape_6.setTransform(-15.3,4.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EED749").s().p("AgYAPQgFgEgBgGQAAgFADgFQAEgFAGgBIACAOIgBgOQAGgBAFAEQAFADAAAFQAAgFACgFQADgFAGgCIABAAQAGgBAFADQAGADABAGQACAGgDAFQgEAFgGABIgBABQgGABgFgDQgFgDgCgGQABAGgDAFQgDAFgGABIgCAAIgCAAQgFAAgEgDg");
	this.shape_7.setTransform(-1.5,4.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EED749").s().p("AAAAPQgFAAgEgEQgFgEAAgGQgBgFAEgEQAEgFAGgBIABAAQAGAAAEAEQAFAEAAAGQABAGgEAEQgEAFgHAAg");
	this.shape_8.setTransform(-6.1,5.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EED749").s().p("AAPAQQgHAAgEgFQgEgEAAgGQAAAGgEAEQgFAEgHgBQgGAAgEgFQgEgFAAgFQABgGAEgEQAFgEAGAAIABAAQAGABAEAEQADAFAAAFQAAgFAFgEQAEgEAGAAIABAAQAGAAAFAEQAEAFAAAFQAAAGgFAEQgEAFgGAAg");
	this.shape_9.setTransform(-10.7,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.9,-6.9,33.8,13.9);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EED749").s().p("ABGBOIAAAPIgBAAQgGAAgEgEQgEgFgBgGQAAgGAFgEQAEgFAGAAIABAAQAHAAAEAEQAEAFAAAGQAAgHAFgEQAEgFAGAAQAGAAAFAEQAFAEAAAGQAAAHgEAEQgEAFgGAAIgBAAIgBAAQgGAAgEgEQgEgEgBgGQAAAGgEAEQgEAFgHAAgAAmBcQgHAAgEgFQgEgEAAgHQABgGAEgEQAFgEAGAAQAGABAFAEQAEAFAAAGQAAAGgEAEQgFAEgGAAgAAGBaQgGAAgDgFQgEgFABgGQAAgGAFgEQAEgEAGAAQAGABAEAFQAFAEgBAHQgBAFgEAEQgEAEgGAAgACDBaQgFAAgFgEQgEgEgBgGQAAgGAEgFQAEgEAGgBQAGAAAFADQAFAEABAHQABAGgEAFQgEAEgGABgACYBTQgEgEgBgFQAAgGADgFQAEgFAGgBIABAAQAGgBAFAEQAFADABAGQgBgGAEgFQADgFAHgBQAGgBAFAEQAFADABAGQABAHgDAFQgDAFgHABIgBAAIgCAAQgGAAgEgDQgEgEgBgGIAAABQABAGgEAFQgEAFgGAAIgCgOIABAOIgCABQgFAAgFgEgAgXBWIgCAAQgGAAgDgGQgEgFABgGQABgGAFgEQAFgDAGABQAGABAEAFQAEAFgBAGQgCANgMAAgAg3BRIgBAAQgGgCgDgFQgEgFACgGQABgGAFgEQAFgDAGABQAGABAEAGQAEAFgCAGQgCAMgMAAgADWBJQgEgEgBgFQgBgGADgFQAEgFAGgBQAGgBAFADQAGAEABAGQABAGgDAFQgEAFgGABIgBAAIgDABQgFAAgEgEgAhWBJIAAAAQgGgCgDgFQgEgFACgGQACgGAFgDQAFgEAGACQAGACAEAFQADAGgCAGQgDALgLAAgADvA6QgBgGADgFQADgFAGgCQAGgBAGADQAFADACAGQABAGgDAGQgDAFgGABIgBAAIgDABQgMAAgDgMgAh0BAIgBgBQgGgCgDgGQgCgFACgGQgDAGgGACQgGACgFgCIAGgOIgHANQgGgCgCgGQgCgGACgFQADgGAFgDQAGgCAGADIABAAQAGADACAFQACAGgCAEQADgFAFgCQAFgCAGACQAGACADAGQADAGgDAFQgDAKgLAAgAENAzQgCgGADgFQADgGAGgCQAGgCAGADQAFADACAGQACAGgCAFQgDAGgGACIgBAAIgEABQgLAAgEgLgAivAlIgBAAQgGgDgBgGQgCgGADgGQADgFAGgCQAGgCAGAEQAFADACAGQACAGgDAFQgFAIgIAAQgEAAgDgCgAjLAVIgBgBQgFgEgBgGQgBgGADgEQgDAEgHABQgGAAgFgEIAKgKIgKAKQgFgDgBgGQgBgGAEgFQAEgFAGgBQAGgBAFAEIABABQAFAEABAGQAAAFgDAFQAEgEAGgBQAFgBAFADQAGAEABAFQABAGgDAFQgFAHgIAAQgEAAgEgCgAj9gTIAAAAQgFgFAAgGQAAgGAEgFQAEgEAHAAQAGgBAEAFQAFAEAAAGQAAAHgEAEQgFAFgGAAQgGAAgEgEgAkTgqIgBgBQgEgFABgGQAAgGAFgEIgBAAQgFADgGgBQgFgBgEgFQgEgFABgGQAAgFAFgEQAFgEAGAAQAGABAEAFIABABQAEAFgBAFQgBAGgEAEQAEgEAGABQAGABAEAEQAEAFAAAGQgBAHgEAEQgFAEgFAAQgGAAgFgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.9,-9.2,59.9,18.6);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EED749").s().p("ABGBOIAAAPIgBAAQgGAAgEgEQgEgFgBgGQAAgGAFgEQAEgFAGAAIABAAQAHAAAEAEQAEAFAAAGQAAgHAFgEQAEgFAGAAQAGAAAFAEQAFAEAAAGQAAAHgEAEQgEAFgGAAIgBAAIgBAAQgGAAgEgEQgEgEgBgGQAAAGgEAEQgEAFgHAAgAAmBcQgHAAgEgFQgEgEAAgHQABgGAEgEQAFgEAGAAQAGABAFAEQAEAFAAAGQAAAGgEAEQgFAEgGAAgAAGBaQgGAAgDgFQgEgFABgGQAAgGAFgEQAEgEAGAAQAGABAEAFQAFAEgBAHQgBAFgEAEQgEAEgGAAgACDBaQgFAAgFgEQgEgEgBgGQAAgGAEgFQAEgEAGgBQAGAAAFADQAFAEABAHQABAGgEAFQgEAEgGABgACYBTQgEgEgBgFQAAgGADgFQAEgFAGgBIABAAQAGgBAFAEQAFADABAGQgBgGAEgFQADgFAHgBQAGgBAFAEQAFADABAGQABAHgDAFQgDAFgHABIgBAAIgCAAQgGAAgEgDQgEgEgBgGIAAABQABAGgEAFQgEAFgGAAIgCgOIABAOIgCABQgFAAgFgEgAgXBWIgCAAQgGAAgDgGQgEgFABgGQABgGAFgEQAFgDAGABQAGABAEAFQAEAFgBAGQgCANgMAAgAg3BRIgBAAQgGgCgDgFQgEgFACgGQABgGAFgEQAFgDAGABQAGABAEAGQAEAFgCAGQgCAMgMAAgADWBJQgEgEgBgFQgBgGADgFQAEgFAGgBQAGgBAFADQAGAEABAGQABAGgDAFQgEAFgGABIgBAAIgDABQgFAAgEgEgAhWBJIAAAAQgGgCgDgFQgEgFACgGQACgGAFgDQAFgEAGACQAGACAEAFQADAGgCAGQgDALgLAAgADvA6QgBgGADgFQADgFAGgCQAGgBAGADQAFADACAGQABAGgDAGQgDAFgGABIgBAAIgDABQgMAAgDgMgAh0BAIgBgBQgGgCgDgGQgCgFACgGQgDAGgGACQgGACgFgCIAGgOIgHANQgGgCgCgGQgCgGACgFQADgGAFgDQAGgCAGADIABAAQAGADACAFQACAGgCAEQADgFAFgCQAFgCAGACQAGACADAGQADAGgDAFQgDAKgLAAgAENAzQgCgGADgFQADgGAGgCQAGgCAGADQAFADACAGQACAGgCAFQgDAGgGACIgBAAIgEABQgLAAgEgLgAivAlIgBAAQgGgDgBgGQgCgGADgGQADgFAGgCQAGgCAGAEQAFADACAGQACAGgDAFQgFAIgIAAQgEAAgDgCgAjLAVIgBgBQgFgEgBgGQgBgGADgEQgDAEgHABQgGAAgFgEIAKgKIgKAKQgFgDgBgGQgBgGAEgFQAEgFAGgBQAGgBAFAEIABABQAFAEABAGQAAAFgDAFQAEgEAGgBQAFgBAFADQAGAEABAFQABAGgDAFQgFAHgIAAQgEAAgEgCgAj9gTIAAAAQgFgFAAgGQAAgGAEgFQAEgEAHAAQAGgBAEAFQAFAEAAAGQAAAHgEAEQgFAFgGAAQgGAAgEgEgAkTgqIgBgBQgEgFABgGQAAgGAFgEIgBAAQgFADgGgBQgFgBgEgFQgEgFABgGQAAgFAFgEQAFgEAGAAQAGABAEAFIABABQAEAFgBAFQgBAGgEAEQAEgEAGABQAGABAEAEQAEAFAAAGQgBAHgEAEQgFAEgFAAQgGAAgFgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.9,-9.2,59.9,18.6);


(lib.l4In = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("ABHApQgGAAgFgEQgEgEAAgGQgBAGgFAEQgFADgGgBIgCAAQgGgBgDgFQgEgFABgGIAAgBIAAABQgCAGgGADQgFADgGgCIgBgBQgFgCgDgFQgDgGACgFQgEAIgJAAIgHgBQgFgDgDgGQgCgGADgFQACgFAGgCQAFgCAGACIABABQAGACACAFQACAGgDAGQADgGAEgDQAFgDAGACIABAAQAGACADAFQACAFgBAFQACgFAFgDQAFgDAFABIgCAOIADgOQAFABAEAEQAEAEAAAGQABgNANgBIABAPIAAgPQAGAAAFAEQAEAEABAGQAAAHgEAEQgEAFgGAAgAg0AFIgBgBQgGgDgBgFQgCgGAEgFQADgGAGgBQAGgCAFAEIABAAQAFADACAGQABAGgDAFQgEAHgJAAQgEAAgDgCgAhRgOIgCgDQgEgGABgFQACgGAFgEQAFgDAFABQAGABAEAEQAEAEAAAGQAAAHgFAEQgEAEgGAAQgGAAgFgEg");
	this.shape.setTransform(0.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.l4In, new cjs.Rectangle(-8.1,-4,17.4,8.3), null);


(lib.l3In = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99FF66").s().p("AgJAMIgBgBQgEgEAAgFQgBgFAEgFIAAgBQAEgFAGAAQAFgBAFAEQAFADABAHQABAFgEAFIgBABQgDAFgHAAIgBAAQgFAAgEgDg");
	this.shape.setTransform(15.9,-5.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99FF66").s().p("AgNAHQgCgGABgFQACgGAGgCIABgBQAFgCAFACQAFABADAFIABABQACAGgCAFQgCAGgFACQgDACgEAAQgJAAgEgIg");
	this.shape_1.setTransform(6.4,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#99FF66").s().p("AgNAFQgCgFACgFQADgGAFgCIACAAQAFgCAFADQAGACACAGQACAFgDAFQgDAGgGACIgFABQgKAAgDgKg");
	this.shape_2.setTransform(14,-2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#99FF66").s().p("AgNAFQgCgFACgFQADgGAGgCIABAAQAFgCAFADQAGACACAGQACAFgDAGQgDAFgGACIgFABQgJAAgEgKg");
	this.shape_3.setTransform(11.6,-0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#99FF66").s().p("AgNAFQgCgFACgFQADgGAFgCIACAAQAFgCAFACQAGADACAGQACAFgDAFQgDAGgGACIgFABQgKAAgDgKg");
	this.shape_4.setTransform(9,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#99FF66").s().p("AgNAFQgCgFACgFQADgGAFgCIABAAQAFgCAGACQAFADACAGQACAFgCAFQgDAGgGACIgFABQgKAAgDgKg");
	this.shape_5.setTransform(3.5,3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#99FF66").s().p("AgCAPIgBgBQgGgBgDgFQgEgFACgFQABgHAGgDQAFgDAEABIgCAOIADgOQAGABAEAGQADAFgBAFQgCAMgMAAg");
	this.shape_6.setTransform(-14.8,4.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#99FF66").s().p("AgYAPQgFgEgBgGQAAgFADgFQAEgFAGgBIACAOIgBgOQAGgBAFAEQAFADAAAFQAAgFACgFQADgFAGgCIABAAQAGgBAFADQAGADABAGQACAGgDAFQgEAFgGABIgBABQgGABgFgDQgFgDgCgGQABAGgDAFQgDAFgGABIgCAAIgCAAQgFAAgEgDg");
	this.shape_7.setTransform(-1,4.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#99FF66").s().p("AAAAPQgFAAgEgEQgFgEAAgGQgBgFAEgEQAEgFAGgBIABAAQAGAAAEAEQAFAEAAAGQABAGgEAEQgEAFgHAAg");
	this.shape_8.setTransform(-5.6,5.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#99FF66").s().p("AAPAQQgHAAgEgFQgEgEAAgGQAAAGgEAEQgFAEgHgBQgGAAgEgFQgEgFAAgFQABgGAEgEQAFgEAGAAIABAAQAGABAEAEQADAFAAAFQAAgFAFgEQAEgEAGAAIABAAQAGAAAFAEQAEAFAAAFQAAAGgFAEQgEAFgGAAg");
	this.shape_9.setTransform(-10.2,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.l3In, new cjs.Rectangle(-16.4,-6.9,33.8,13.9), null);


(lib.l2In = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF66").s().p("ABGBOIAAAPIgBAAQgGAAgEgEQgEgFgBgGQAAgGAFgEQAEgFAGAAIABAAQAHAAAEAEQAEAFAAAGQAAgHAFgEQAEgFAGAAQAGAAAFAEQAFAEAAAGQAAAHgEAEQgEAFgGAAIgBAAIgBAAQgGAAgEgEQgEgEgBgGQAAAGgEAEQgEAFgHAAgAAmBcQgHAAgEgFQgEgEAAgHQABgGAEgEQAFgEAGAAQAGABAFAEQAEAFAAAGQAAAGgEAEQgFAEgGAAgAAGBaQgGAAgDgFQgEgFABgGQAAgGAFgEQAEgEAGAAQAGABAEAFQAFAEgBAHQgBAFgEAEQgEAEgGAAgACDBaQgFAAgFgEQgEgEgBgGQAAgGAEgFQAEgEAGgBQAGAAAFADQAFAEABAHQABAGgEAFQgEAEgGABgACYBTQgEgEgBgFQAAgGADgFQAEgFAGgBIABAAQAGgBAFAEQAFADABAGQgBgGAEgFQADgFAHgBQAGgBAFAEQAFADABAGQABAHgDAFQgDAFgHABIgBAAIgCAAQgGAAgEgDQgEgEgBgGIAAABQABAGgEAFQgEAFgGAAIgCgOIABAOIgCABQgFAAgFgEgAgXBWIgCAAQgGAAgDgGQgEgFABgGQABgGAFgEQAFgDAGABQAGABAEAFQAEAFgBAGQgCANgMAAgAg3BRIgBAAQgGgCgDgFQgEgFACgGQABgGAFgEQAFgDAGABQAGABAEAGQAEAFgCAGQgCAMgMAAgADWBJQgEgEgBgFQgBgGADgFQAEgFAGgBQAGgBAFADQAGAEABAGQABAGgDAFQgEAFgGABIgBAAIgDABQgFAAgEgEgAhWBJIAAAAQgGgCgDgFQgEgFACgGQACgGAFgDQAFgEAGACQAGACAEAFQADAGgCAGQgDALgLAAgADvA6QgBgGADgFQADgFAGgCQAGgBAGADQAFADACAGQABAGgDAGQgDAFgGABIgBAAIgDABQgMAAgDgMgAh0BAIgBgBQgGgCgDgGQgCgFACgGQgDAGgGACQgGACgFgCIAGgOIgHANQgGgCgCgGQgCgGACgFQADgGAFgDQAGgCAGADIABAAQAGADACAFQACAGgCAEQADgFAFgCQAFgCAGACQAGACADAGQADAGgDAFQgDAKgLAAgAENAzQgCgGADgFQADgGAGgCQAGgCAGADQAFADACAGQACAGgCAFQgDAGgGACIgBAAIgEABQgLAAgEgLgAivAlIgBAAQgGgDgBgGQgCgGADgGQADgFAGgCQAGgCAGAEQAFADACAGQACAGgDAFQgFAIgIAAQgEAAgDgCgAjLAVIgBgBQgFgEgBgGQgBgGADgEQgDAEgHABQgGAAgFgEIAKgKIgKAKQgFgDgBgGQgBgGAEgFQAEgFAGgBQAGgBAFAEIABABQAFAEABAGQAAAFgDAFQAEgEAGgBQAFgBAFADQAGAEABAFQABAGgDAFQgFAHgIAAQgEAAgEgCgAj9gTIAAAAQgFgFAAgGQAAgGAEgFQAEgEAHAAQAGgBAEAFQAFAEAAAGQAAAHgEAEQgFAFgGAAQgGAAgEgEgAkTgqIgBgBQgEgFABgGQAAgGAFgEIgBAAQgFADgGgBQgFgBgEgFQgEgFABgGQAAgFAFgEQAFgEAGAAQAGABAEAFIABABQAEAFgBAFQgBAGgEAEQAEgEAGABQAGABAEAEQAEAFAAAGQgBAHgEAEQgFAEgFAAQgGAAgFgFg");
	this.shape.setTransform(0.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.l2In, new cjs.Rectangle(-29.4,-9.2,59.9,18.5), null);


(lib.l1In2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF99").s().p("AgUAXQgEgEgBgGQAAgGAEgFIABgBQAEgDAGAAQAGgBAEADQgEgDAAgGQgBgGAEgFIABAAQADgFAGgBQAGAAAFAEQAFAEAAAGQABAGgEAFIgBABQgDAEgHAAQgGABgFgEQAFAEAAAGQAAAHgEAEQgEAFgHAAQgGAAgEgEg");
	this.shape.setTransform(77.5,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF99").s().p("AgKALQgEgFAAgGQAAgFAEgEIABgBQAFgEAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgFAEgGAAQgFAAgFgEg");
	this.shape_1.setTransform(74.3,6.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FF99").s().p("AgxAkQgEgGACgGQABgFAFgEIABgBQAFgDAGACQAGABADAFQgDgFABgGQABgGAFgDIAJAMIgIgMQAFgDAGAAQAFACADADQgCgEABgFQABgHAEgDIAAgBQAFgDAGAAQAGABAEAFIAAAAQAEAFAAAGQgBAFgFAEIgBAAQgFAFgGgCQgGAAgEgFQAEAFgBAGQgCAGgEADIgBABQgFAEgGgBQgGgCgDgEQADAFgCAGQgBAGgFADQgDACgGAAQgIAAgEgGgAAkgLQgHAAgEgFQgEgGABgGQAAgFAFgFQAFgDAGAAQAHAAAEAEQAEAFAAAGQgBAGgEAFIgBABQgFADgFAAIgBAAgAAZgQIAAAAg");
	this.shape_2.setTransform(68.3,10.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FF99").s().p("AgEAOQgGgBgDgGIABAAIgBgBQgCgFACgFQACgGAFgCIABgBQAFgDAHADQAGADACAGQACAEgDAGQgCAFgGADIgGABIgEgBg");
	this.shape_3.setTransform(61.9,15.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AgbANQgDgGACgGQADgFAFgCIABgBQAGgCAFACQAGACACAFQgCgFACgGQABgFAGgDIABAAQAFgDAGACQAGACADAGQACAFgCAGQgCAFgFADIgBAAQgGADgGgCQgFgCgDgFQADAFgDAGQgCAGgFACQgDACgDAAQgKAAgEgJg");
	this.shape_4.setTransform(57.8,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FF99").s().p("AgcAKQgCgGADgEQACgGAGgCIABAAQAGgCAFADQAGACABAFQgBgFACgGQACgFAGgCIAAAAQAGgDAGADQAGACACAGQACAGgCAEQgDAGgGACIgBABQgGACgFgDQgGgCgCgGIAAABQACAGgCAFQgDAFgGACIgFABQgLAAgDgKg");
	this.shape_5.setTransform(52,19.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66FF99").s().p("AgYAQQgEgDgBgFQgBgGADgFQADgFAGgCIABAAQAGgBAFADQAFADABAFQgBgFADgFQADgGAGgBIAEAOIgEgPQAGgBAFADQAGACACAGQACAGgDAFQgDAFgGACIgBABQgGABgGgDQgFgDgCgGQACAGgCAGQgEAFgGABIgBABIgDAAQgFAAgFgDg");
	this.shape_6.setTransform(46.1,21.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66FF99").s().p("AAAAPQgMAAgCgMQgBgFADgFQADgGAGgBIADAOIgCgOQAFgBAGADQAFAEABAGQABAFgDAFQgDAFgHABIgBABg");
	this.shape_7.setTransform(41.6,22.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66FF99").s().p("AgCAPQgGgBgEgFQgDgGABgFQABgGAFgDQAFgEAFABIABABQAGABAEAFQADAFgBAFQgDAMgMAAg");
	this.shape_8.setTransform(1.5,22.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#66FF99").s().p("AgJAMQgEgEgBgFQgBgFADgFQAEgGAGgBIABAAQAFAAAFADQAGAEAAAGQABAFgEAFQgDAFgGABIgDAAQgFAAgEgDg");
	this.shape_9.setTransform(38.5,23.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#66FF99").s().p("AgBAPQgGgBgEgFQgEgFABgFQABgGAFgEQAEgEAFABIACAAQAGABADAGQAEAFgBAFQgBAFgEAEQgEADgGAAg");
	this.shape_10.setTransform(4.6,23.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#66FF99").s().p("AAAAPQgFAAgEgDQgEgEgBgFQgBgGADgFQAEgEAGgBIABgBQAGAAAFADQAFAEAAAHQABAFgEAFQgEAFgGAAg");
	this.shape_11.setTransform(35.5,23.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#66FF99").s().p("AgBAPQgHAAgDgFQgEgFABgFQAAgHAFgEQAFgDAFAAIABAAQAGABAEAFQAEAFgBAFQAAAGgFAEQgEADgGAAg");
	this.shape_12.setTransform(7.6,23.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#66FF99").s().p("AAAAPQgFAAgEgDQgEgEgBgGQgBgFAEgFQAEgFAGgBIABAAQAFAAAFAEQAFAEAAAGQABAFgEAFQgEAFgGAAg");
	this.shape_13.setTransform(32.4,24);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#66FF99").s().p("AAAAPQgGAAgEgFQgFgFABgFQABgGAEgEQAFgEAFAAIABAAQAGABAEAFQAEAEgBAGQAAAFgFAEQgEAEgGAAg");
	this.shape_14.setTransform(10.7,24.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#66FF99").s().p("AAAAPQgFAAgEgEQgFgEAAgFQgBgGAEgEQAEgFAGAAIABgBQAFAAAFAEQAFAEAAAGQABAGgFAEQgEAFgGAAg");
	this.shape_15.setTransform(29.3,24.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#66FF99").s().p("AAAAPQgGAAgEgFQgFgFABgFQAAgGAFgEQAEgEAFAAIABAAQAHABAEAEQAEAFgBAFQAAAGgFAEQgEAEgGAAg");
	this.shape_16.setTransform(13.8,24.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#66FF99").s().p("AAAAPQgFAAgEgEQgFgEAAgGQgBgFAEgFQAEgEAGgBIABAAQAGAAAEAEQAFAFAAAFQAAAGgEAFQgEAEgGAAg");
	this.shape_17.setTransform(26.2,24.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#66FF99").s().p("AAAAPQgGAAgEgFQgFgEABgGQAAgGAEgEQAFgEAFAAIABAAQAGABAEAEQAFAFgBAFQAAAGgEAEQgFAEgGAAg");
	this.shape_18.setTransform(16.9,24.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#66FF99").s().p("AgKALQgEgFgBgFQABgGAEgEQADgEAHgBIAAAAQAHAAAEAFQAEAEABAFQgBAHgEADQgFAFgGAAQgFAAgFgEg");
	this.shape_19.setTransform(23.1,24.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#66FF99").s().p("AgKAKQgEgDgBgHQABgFAEgEQAEgFAGAAIABAAQAGABAEAEQAEAFAAAFQAAAFgEAFQgFAEgFAAQgGAAgFgFg");
	this.shape_20.setTransform(20,24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.l1In2, new cjs.Rectangle(0,0,80.1,26.1), null);


(lib.l1In = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EED749").s().p("AgUAXQgEgEgBgGQAAgGAEgFIABgBQAEgDAGAAQAGgBAEADQgEgDAAgGQgBgGAEgFIABAAQADgFAGgBQAGAAAFAEQAFAEAAAGQABAGgEAFIgBABQgDAEgHAAQgGABgFgEQAFAEAAAGQAAAHgEAEQgEAFgHAAQgGAAgEgEg");
	this.shape.setTransform(77.5,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EED749").s().p("AgKALQgEgFAAgGQAAgFAEgEIABgBQAFgEAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgFAEgGAAQgFAAgFgEg");
	this.shape_1.setTransform(74.3,6.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EED749").s().p("AgxAkQgEgGACgGQABgFAFgEIABgBQAFgDAGACQAGABADAFQgDgFABgGQABgGAFgDIAJAMIgIgMQAFgDAGAAQAFACADADQgCgEABgFQABgHAEgDIAAgBQAFgDAGAAQAGABAEAFIAAAAQAEAFAAAGQgBAFgFAEIgBAAQgFAFgGgCQgGAAgEgFQAEAFgBAGQgCAGgEADIgBABQgFAEgGgBQgGgCgDgEQADAFgCAGQgBAGgFADQgDACgGAAQgIAAgEgGgAAkgLQgHAAgEgFQgEgGABgGQAAgFAFgFQAFgDAGAAQAHAAAEAEQAEAFAAAGQgBAGgEAFIgBABQgFADgFAAIgBAAgAAZgQIAAAAg");
	this.shape_2.setTransform(68.3,10.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EED749").s().p("AgEAOQgGgBgDgGIABAAIgBgBQgCgFACgFQACgGAFgCIABgBQAFgDAHADQAGADACAGQACAEgDAGQgCAFgGADIgGABIgEgBg");
	this.shape_3.setTransform(61.9,15.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EED749").s().p("AgbANQgDgGACgGQADgFAFgCIABgBQAGgCAFACQAGACACAFQgCgFACgGQABgFAGgDIABAAQAFgDAGACQAGACADAGQACAFgCAGQgCAFgFADIgBAAQgGADgGgCQgFgCgDgFQADAFgDAGQgCAGgFACQgDACgDAAQgKAAgEgJg");
	this.shape_4.setTransform(57.8,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EED749").s().p("AgcAKQgCgGADgEQACgGAGgCIABAAQAGgCAFADQAGACABAFQgBgFACgGQACgFAGgCIAAAAQAGgDAGADQAGACACAGQACAGgCAEQgDAGgGACIgBABQgGACgFgDQgGgCgCgGIAAABQACAGgCAFQgDAFgGACIgFABQgLAAgDgKg");
	this.shape_5.setTransform(52,19.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EED749").s().p("AgYAQQgEgDgBgFQgBgGADgFQADgFAGgCIABAAQAGgBAFADQAFADABAFQgBgFADgFQADgGAGgBIAEAOIgEgPQAGgBAFADQAGACACAGQACAGgDAFQgDAFgGACIgBABQgGABgGgDQgFgDgCgGQACAGgCAGQgEAFgGABIgBABIgDAAQgFAAgFgDg");
	this.shape_6.setTransform(46.1,21.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EED749").s().p("AAAAPQgMAAgCgMQgBgFADgFQADgGAGgBIADAOIgCgOQAFgBAGADQAFAEABAGQABAFgDAFQgDAFgHABIgBABg");
	this.shape_7.setTransform(41.6,22.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EED749").s().p("AgCAPQgGgBgEgFQgDgGABgFQABgGAFgDQAFgEAFABIABABQAGABAEAFQADAFgBAFQgDAMgMAAg");
	this.shape_8.setTransform(1.5,22.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EED749").s().p("AgJAMQgEgEgBgFQgBgFADgFQAEgGAGgBIABAAQAFAAAFADQAGAEAAAGQABAFgEAFQgDAFgGABIgDAAQgFAAgEgDg");
	this.shape_9.setTransform(38.5,23.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EED749").s().p("AgBAPQgGgBgEgFQgEgFABgFQABgGAFgEQAEgEAFABIACAAQAGABADAGQAEAFgBAFQgBAFgEAEQgEADgGAAg");
	this.shape_10.setTransform(4.6,23.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EED749").s().p("AAAAPQgFAAgEgDQgEgEgBgFQgBgGADgFQAEgEAGgBIABgBQAGAAAFADQAFAEAAAHQABAFgEAFQgEAFgGAAg");
	this.shape_11.setTransform(35.5,23.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EED749").s().p("AgBAPQgHAAgDgFQgEgFABgFQAAgHAFgEQAFgDAFAAIABAAQAGABAEAFQAEAFgBAFQAAAGgFAEQgEADgGAAg");
	this.shape_12.setTransform(7.6,23.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EED749").s().p("AAAAPQgFAAgEgDQgEgEgBgGQgBgFAEgFQAEgFAGgBIABAAQAFAAAFAEQAFAEAAAGQABAFgEAFQgEAFgGAAg");
	this.shape_13.setTransform(32.4,24);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EED749").s().p("AAAAPQgGAAgEgFQgFgFABgFQABgGAEgEQAFgEAFAAIABAAQAGABAEAFQAEAEgBAGQAAAFgFAEQgEAEgGAAg");
	this.shape_14.setTransform(10.7,24.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EED749").s().p("AAAAPQgFAAgEgEQgFgEAAgFQgBgGAEgEQAEgFAGAAIABgBQAFAAAFAEQAFAEAAAGQABAGgFAEQgEAFgGAAg");
	this.shape_15.setTransform(29.3,24.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EED749").s().p("AAAAPQgGAAgEgFQgFgFABgFQAAgGAFgEQAEgEAFAAIABAAQAHABAEAEQAEAFgBAFQAAAGgFAEQgEAEgGAAg");
	this.shape_16.setTransform(13.8,24.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EED749").s().p("AAAAPQgFAAgEgEQgFgEAAgGQgBgFAEgFQAEgEAGgBIABAAQAGAAAEAEQAFAFAAAFQAAAGgEAFQgEAEgGAAg");
	this.shape_17.setTransform(26.2,24.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EED749").s().p("AAAAPQgGAAgEgFQgFgEABgGQAAgGAEgEQAFgEAFAAIABAAQAGABAEAEQAFAFgBAFQAAAGgEAEQgFAEgGAAg");
	this.shape_18.setTransform(16.9,24.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EED749").s().p("AgKALQgEgFgBgFQABgGAEgEQADgEAHgBIAAAAQAHAAAEAFQAEAEABAFQgBAHgEADQgFAFgGAAQgFAAgFgEg");
	this.shape_19.setTransform(23.1,24.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EED749").s().p("AgKAKQgEgDgBgHQABgFAEgEQAEgFAGAAIABAAQAGABAEAEQAEAFAAAFQAAAFgEAFQgFAEgFAAQgGAAgFgFg");
	this.shape_20.setTransform(20,24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.l1In, new cjs.Rectangle(0,0,80.1,26.1), null);


(lib.glowIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.078,1],0,0,0,0,0,7.5).s().p("AiHAGIAAgLIEPAAIAAALg");
	this.shape.setTransform(13.6,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.078,1],0,0,0,0,0,7.5).s().p("AgFCIIAAkPIALAAIAAEPg");
	this.shape_1.setTransform(13.6,13.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.078,1],0,0,0,0,0,3.6).s().p("AgYAZQgLgKAAgPQAAgOALgKQAKgLAOAAQAPAAAKALQALAKAAAOQAAAPgLAKQgKAKgPABQgOgBgKgKg");
	this.shape_2.setTransform(13.6,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.glowIn, new cjs.Rectangle(0,0,27.3,27.3), null);


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


(lib.l4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.5,0);

	this.instance_1 = new lib.Tween6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},67).to({state:[{t:this.instance_1}]},67).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},67).to({_off:true,alpha:1},67).wait(1));

	// Layer 2
	this.instance_2 = new lib.l4In();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.5,0.1,1,1,0,0,0,0.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(135));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.1,-4.1,17.4,8.3);


(lib.l3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.5,0);

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},65).to({state:[{t:this.instance_1}]},64).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},65).to({_off:true,alpha:1},64).wait(1));

	// Layer 2
	this.instance_2 = new lib.l3In();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.5,0.1,1,1,0,0,0,0.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-6.9,33.8,13.9);


(lib.l2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.5,0);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},69).to({state:[{t:this.instance_1}]},66).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},69).to({_off:true,alpha:1},66).wait(1));

	// Layer 3
	this.instance_2 = new lib.l2In();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.5,0.1,1,1,0,0,0,0.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(136));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.4,-9.2,59.9,18.6);


(lib.l1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.l1In();
	this.instance.parent = this;
	this.instance.setTransform(40,13.1,1,1,0,0,0,40,13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},64).to({alpha:1},66).wait(1));

	// Layer 3
	this.instance_1 = new lib.l1In2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(39.8,13.1,1,1,0,0,0,40,13.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},64).to({alpha:0},66).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,0,80.3,26.1);


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


(lib.glow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{glow1:34});

	// timeline functions:
	this.frame_109 = function() {
		this.gotoAndPlay("glow1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(109).call(this.frame_109).wait(1));

	// Layer 1
	this.instance = new lib.glowIn();
	this.instance.parent = this;
	this.instance.setTransform(13.7,13.6,0.17,0.17,-58.3,0,0,13.8,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:13.5,scaleX:1.5,scaleY:1.5,rotation:-24.8,x:13.6,y:13.8},18).to({regY:13.5,scaleX:1.11,scaleY:1.11,rotation:27.5,y:13.6},16).to({regY:13.3,rotation:57.7,x:13.7,alpha:0.43},38).to({regY:13.5,rotation:27.5,x:13.6,alpha:1},37).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.6,11.6,4.1,4.1);


(lib.elToyIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.8)").s().p("AgHA5IgDgCIgBgMIgJAIQgBAAAAAAQgBgBAAAAQAAgBAAgBQAAgBAAgBIAKgJIgBgHIgIAHIgBABQgEgCACgDIALgKIABgNIgNAJIADgSIgJAHIgBARIgBADQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIABgOIgDAEIgBARIgBACQgBACAAgSIgEAGQAAABAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAgDIAFgHIgEgGQAAgFACAAIAEAIIAEgEIgFgGIACgEIABABIAFAGIAIgFIgHgJIAMgHIgEgFIgJAGIgBAAIACgEIAIgFIAAgDIgJAGIgBAAQgBgBALgHIAAgEIAEgEIgBAEIAIgJIADgCIAAABIgCABIgJAMIAAACIAHgKIADgBIgJANIADAFIAIgNIAEAHIAEgKIgBgFIAAgBIACgCIABAAIACAEIACgEIgBgFQADgCACAAIAAADIAGgFIACgBQAAAAAAAAQABAAAAABQAAAAgBAAQAAAAAAAAIgGAFIAIgDIABAAQAAAAAAAAQAAAAAAAAQAAABAAAAQgBABAAAAIgLAFIgDAEIAJgEIACAAQAAAAAAAAQAAAAAAAAQAAABAAAAQgBABAAAAIgMAGIgFAKIANgHIgEANIAJgFIAEgMIACgBIABABIgCAKIAFgDIACgLIACgCQACAAgCALIAIgFIABAAQAAAAABAAQAAABAAAAQAAAAAAABQAAAAgBABIgHAFIAJAEIABACQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIgDAAIgMgGIgFACIAKAFIABABQABAEgEAAIgMgHIgJAGIAMAHIgPAIIAKAFIANgHIACAAQAFADgEACIgLAFIAFAEIAPgJIABAAQAEACgDADIgMAHIAKAGIACACQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAIgLgGIABAOIgBACQgBAEgDgFIgBgSIgFgDIAAANIgBACQgBAAAAABQgBAAAAAAQgBAAAAgBQgBAAAAgBIgBgSIgJgGIgBASIgMgJIgBANIAMAJIACACQAAAFgEgCIgJgHIAAAHIAOAKQABAEgEAAIgKgIIACAMIAAACIgCABIAAgBgAgHADIAHAGIAAgKIgFgFgAgSAAIgCAJIAJgGIABgJgAgDgLIAHAFIAJgFIgHgFgAgYgLIAFAFIAIgFIgFgFgAgBgYIgDAJIAIgFIACgJgAgNgUIAFAFIADgIIgEgGg");
	this.shape.setTransform(-2.9,0);

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
	this.instance.setTransform(0,-8.2,1,1,54.5,0,0,0,-8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,scaleX:1,scaleY:1,rotation:-22.6,x:-0.2},12,cjs.Ease.get(0.78)).to({scaleX:1,scaleY:1,rotation:0,x:-0.1},6).to({rotation:9.7,x:0},6).to({rotation:0,x:-0.1},6).to({rotation:-7.5},5).to({rotation:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.3,-13.1,21,20.9);


// stage content:
(lib.logo105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:14,mouseOut:678});

	// timeline functions:
	this.frame_14 = function() {
		stage.enableMouseOver();
		 
		this.but1.addEventListener("mouseover", over.bind(this));
		 
		function over() 
		{ 
		
			this.gotoAndPlay("start");
			
		}
	}
	this.frame_15 = function() {
		stage.enableMouseOver();
		 
		this.but1.addEventListener("mouseout", over.bind(this));
		 
		function over() 
		{ 
		
			this.gotoAndPlay("mouseOut");
			
		}
	}
	this.frame_16 = function() {
		console.log( stage.mouseX );
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(754));

	// but
	this.but1 = new lib.but();
	this.but1.parent = this;
	this.but1.setTransform(168.2,68.3,5.765,4.496,0,0,0,0.2,0.4);
	this.but1.alpha = 0.012;
	this.but1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.but1).wait(14).to({_off:false},0).wait(756));

	// snow
	this.instance = new lib.Tween7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(79.8,107);

	this.instance_1 = new lib.Tween8("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(71.7,118.8,1.194,0.827,-0.3,0,0,0.1,0.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({startPosition:0},0).to({scaleX:1.03,scaleY:0.77,x:76.5,y:112},7).to({_off:true,regX:0.1,regY:0.4,scaleX:1.19,scaleY:0.83,rotation:-0.3,x:71.7,y:118.8},18).wait(639).to({_off:false,regX:0,regY:0,scaleX:1.03,scaleY:0.77,rotation:0,x:76.5,y:112},11).to({scaleX:1,scaleY:1,x:79.8,y:107},11).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},18).wait(639).to({startPosition:0},0).to({_off:true,regX:0,regY:0,scaleX:1.03,scaleY:0.77,rotation:0,x:76.5,y:112},11).wait(81));

	// Layer 15 copy 4
	this.instance_2 = new lib.glow();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-105.9,-6.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(166).to({_off:false},0).wait(1).to({x:56.6,y:-3.6},0).to({x:54.1,y:-6.1},72).wait(440).to({x:-110.9},0).wait(91));

	// Layer 15 copy 3
	this.instance_3 = new lib.glow();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-106.4,8.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(130).to({_off:false},0).wait(1).to({x:69.6,y:12.9},0).to({x:54.1,y:9.9},72,cjs.Ease.get(0.69)).wait(475).to({x:53.6,y:8.9},0).wait(1).to({x:-111.4},0).wait(91));

	// Layer 15 copy 5
	this.instance_4 = new lib.glow();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-99.9,75.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(213).to({_off:false},0).wait(1).to({x:53.6,y:40.9},0).wait(464).to({x:60.1,y:75.4},0).wait(1).to({x:-104.9},0).wait(91));

	// Layer 15 copy 2
	this.instance_5 = new lib.glow();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-78.9,48.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(184).to({_off:false},0).wait(1).to({x:71.6,y:38.9},0).to({x:80.1,y:33.4},72).wait(421).to({x:81.1,y:48.9},0).wait(1).to({x:-83.9},0).wait(91));

	// Layer 15 copy
	this.instance_6 = new lib.glow();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-73.9,58.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(157).to({_off:false},0).wait(1).to({x:77.6,y:59.4},0).to({x:93.6,y:56.9},72).wait(448).to({x:86.1,y:58.9},0).wait(1).to({x:-78.9},0).wait(91));

	// Layer 15
	this.instance_7 = new lib.glow();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-99.9,75.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(130).to({_off:false},0).wait(1).to({x:59.1,y:70.4},0).wait(547).to({x:60.1,y:75.4},0).wait(1).to({x:-104.9},0).wait(91));

	// Layer 15 copy 6
	this.instance_8 = new lib.glow();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-99.9,75.4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(142).to({_off:false},0).wait(1).to({x:95.1,y:74.4},0).wait(535).to({x:60.1,y:75.4},0).wait(1).to({x:-104.9},0).wait(91));

	// 1 copy 2
	this.instance_9 = new lib.glow();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-56.6,93.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(208).to({_off:false},0).wait(1).to({x:29.9,y:69.3},0).wait(469).to({x:103.4,y:93.3},0).wait(1).to({x:-61.6},0).wait(91));

	// 1 copy
	this.instance_10 = new lib.glow();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-56.6,93.3);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(148).to({_off:false},0).wait(1).to({x:103.4},0).wait(530).to({x:-61.6},0).wait(91));

	// 1 copy 3
	this.instance_11 = new lib.glow();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-143.1,93.3);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(139).to({_off:false},0).wait(1).to({x:70.9,y:90.8},0).to({x:57.4,y:93.8},72).wait(466).to({x:16.9,y:93.3},0).wait(1).to({x:-148.1},0).wait(91));

	// 1
	this.instance_12 = new lib.glow();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-143.1,93.3);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(130).to({_off:false},0).wait(1).to({x:31.4,y:94.3},0).to({x:16.9,y:93.3},72).wait(476).to({x:-148.1},0).wait(91));

	// toys
	this.instance_13 = new lib.elToy();
	this.instance_13.parent = this;
	this.instance_13.setTransform(130.4,112.7,0.587,0.587,0,0,0,0.1,0.5);

	this.instance_14 = new lib.elToy();
	this.instance_14.parent = this;
	this.instance_14.setTransform(44.7,88,0.587,0.587,0,0,0,0.4,0.2);

	this.instance_15 = new lib.elToy();
	this.instance_15.parent = this;
	this.instance_15.setTransform(87.1,38.8,0.587,0.587,0,0,0,0.2,0.5);

	this.instance_16 = new lib.elToy();
	this.instance_16.parent = this;
	this.instance_16.setTransform(66,26.6,0.587,0.587,0,0,0,0.4,0.5);

	this.instance_17 = new lib.elToy();
	this.instance_17.parent = this;
	this.instance_17.setTransform(115.5,92.9,1.115,1.115,0,0,0,0.2,0.2);

	this.instance_18 = new lib.elToy();
	this.instance_18.parent = this;
	this.instance_18.setTransform(22.7,105.3,1.115,1.115,0,0,0,0.1,0.2);

	this.instance_19 = new lib.elToy();
	this.instance_19.parent = this;
	this.instance_19.setTransform(72.8,92.9,1.115,1.115,0,0,0,0.1,0.2);

	this.instance_20 = new lib.elToy();
	this.instance_20.parent = this;
	this.instance_20.setTransform(87.7,68.5,1.115,1.115,0,0,0,0.1,0.2);

	this.instance_21 = new lib.elToy();
	this.instance_21.parent = this;
	this.instance_21.setTransform(66.5,54.6,1.115,1.115,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17,p:{regX:0.2,regY:0.2,scaleX:1.115,scaleY:1.115,x:115.5,y:92.9}},{t:this.instance_16,p:{regX:0.4,regY:0.5,scaleX:0.587,scaleY:0.587,x:66,y:26.6}},{t:this.instance_15,p:{regX:0.2,regY:0.5,scaleX:0.587,scaleY:0.587,x:87.1,y:38.8}},{t:this.instance_14,p:{regX:0.4,regY:0.2,scaleX:0.587,scaleY:0.587,x:44.7,y:88}},{t:this.instance_13,p:{regY:0.5,scaleX:0.587,scaleY:0.587,x:130.4,y:112.7}}]},44).to({state:[{t:this.instance_17,p:{regX:0.1,regY:0.1,scaleX:1.282,scaleY:1.282,x:58.6,y:-92.8}},{t:this.instance_16,p:{regX:0.1,regY:0.1,scaleX:1.282,scaleY:1.282,x:83.1,y:-76.8}},{t:this.instance_15,p:{regX:0.1,regY:0.1,scaleX:1.282,scaleY:1.282,x:65.9,y:-48.8}},{t:this.instance_14,p:{regX:0.1,regY:0.1,scaleX:1.282,scaleY:1.282,x:8.4,y:-34.5}},{t:this.instance_13,p:{regY:0.1,scaleX:1.282,scaleY:1.282,x:114.9,y:-48.8}}]},634).to({state:[{t:this.instance_17,p:{regX:0.1,regY:0.1,scaleX:1.282,scaleY:1.282,x:58.6,y:-92.8}},{t:this.instance_16,p:{regX:0.1,regY:0.1,scaleX:1.282,scaleY:1.282,x:83.1,y:-76.8}},{t:this.instance_15,p:{regX:0.1,regY:0.1,scaleX:1.282,scaleY:1.282,x:65.9,y:-48.8}},{t:this.instance_14,p:{regX:0.1,regY:0.1,scaleX:1.282,scaleY:1.282,x:8.4,y:-34.5}},{t:this.instance_13,p:{regY:0.1,scaleX:1.282,scaleY:1.282,x:114.9,y:-48.8}}]},1).wait(91));

	// m4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("AEmCcIgWhHQAPAAAXgDQAugGAmgRQB6g1gDiLQAXAZAeAeQASAUgBAIQgFBJgvAxQglAng9AWQhBAXg/AAIgLAAg");
	var mask_graphics_44 = new cjs.Graphics().p("AEmCcIgWhHQAPAAAXgDQAugGAmgRQB6g1gDiLQAXAZAeAeQASAUgBAIQgFBJgvAxQglAng9AWQhBAXg/AAIgLAAg");
	var mask_graphics_107 = new cjs.Graphics().p("AEmCcIgWhHQAPAAAXgDQAugGAmgRQB6g1gDiLQAXAZAeAeQASAUgBAIQgFBJgvAxQglAng9AWQhBAXg/AAIgLAAg");
	var mask_graphics_108 = new cjs.Graphics().p("AEZCbIgThIQAQABAXgCQAugEAngPQB8gvAEiLQAVAZAcAgQASAVgBAIQgKBJgwAuQgnAmg+ATQg6ARg3AAIgbgBg");
	var mask_graphics_109 = new cjs.Graphics().p("AENCaIgQhJQAPACAXgBQAvgCAngNQB/gqAKiLQAUAbAbAhQAQAVgBAJQgNBIgzAsQgoAkg/AQQgyAMgvAAQgWAAgVgCg");
	var mask_graphics_110 = new cjs.Graphics().p("AEBCYIgNhJQAQACAXAAQAuABAogMQCAgkARiKQATAcAZAiQAPAWgBAJQgQBHg1AqQgqAihAANQgqAIgnAAQgeAAgdgFg");
	var mask_graphics_111 = new cjs.Graphics().p("AD1CWIgJhKQAPADAXABQAvADAogKQCCgeAXiJQARAdAYAjQAPAXgDAHQgTBIg3AnQgsAghAAKQggAFgfAAQgoAAglgIg");
	var mask_graphics_112 = new cjs.Graphics().p("ADqCTIgGhLQAPAEAXADQAuAEApgHQCDgYAeiIQAQAeAWAkQANAWgCAJQgXBGg4AlQguAdhAAHQgXADgXAAQgxAAgtgMg");
	var mask_graphics_113 = new cjs.Graphics().p("ADfCPIgChKQAPAEAXAEQAuAHApgGQCEgRAkiHIAjBEQAMAXgDAIQgaBFg6AiQgvAchBAEIgaAAQg8AAg1gRg");
	var mask_graphics_114 = new cjs.Graphics().p("ADVCLIAChKQAOAFAXAFQAtAJAqgEQCEgLAqiFQAOAfASAlQALAZgDAIQgdBEg8AfQgwAZhBABIgGAAQhHAAg9gXg");
	var mask_graphics_115 = new cjs.Graphics().p("AFUCkQhKgCg/gbIAFhKQAPAGAWAFQAtALAqgBQCEgGAxiCQAMAfAQAmQAKAZgDAIQghBDg9AcQgsAVg6AAIgMAAg");
	var mask_graphics_116 = new cjs.Graphics().p("AFKCmQhLgGg9geIAJhKQAOAHAWAHQAsANAqAAQCFABA2iAQALAgAOAmQAJAagEAIQgjBBg+AZQgoARgyAAIgZgBg");
	var mask_graphics_117 = new cjs.Graphics().p("AE/CnQhKgJg8ghIAMhJQAOAHAWAIQAsAPApACQCFAHA8h9QAJAgANAnQAIAagFAIQgmA/g/AXQgjAMgqAAQgTAAgUgCg");
	var mask_graphics_118 = new cjs.Graphics().p("AE0CjQhJgNg6gjIAPhJQAOAIAVAJQArARApAFQCFANBCh6QAIAgALApQAGAagFAHQgpA9hBAUQgeAJgiAAQgZAAgbgFg");
	var mask_graphics_119 = new cjs.Graphics().p("AEqCgQhJgRg4gmIAThIQANAIAVAKQAqAUApAGQCDAUBJh2QAGAgAJApQAFAagGAHQgsA8hBAQQgZAGgbAAQgfAAghgHg");
	var mask_graphics_120 = new cjs.Graphics().p("AEfCbQhHgUg3gpIAXhHQAMAJAVALQApAWApAIQCCAbBOhzQAFAgAGAqQAEAbgGAGQgvA5hCAOQgUADgVAAQgjAAgogLg");
	var mask_graphics_121 = new cjs.Graphics().p("AEVCXQhGgYg1gsIAbhFQAMAKATALQAoAYApAKQCAAhBVhvQACAhAFAqQACAbgGAGQgyA3hCAKQgPACgQAAQgoAAgtgPg");
	var mask_graphics_122 = new cjs.Graphics().p("AELCSQhFgbgygvIAehEQALAKATANQAnAaAoAMQB/AoBZhrQABAgADArQABAbgGAGQg1A0hDAGIgUABQgtAAgygTg");
	var mask_graphics_123 = new cjs.Graphics().p("AECCMQhFgegvgxIAhhBQALAJASAOQAmAcAnAOQB9AuBfhoQgBAiAAAqQAAAbgHAGQg3AxhDAEIgKAAQgxAAg2gZg");
	var mask_graphics_124 = new cjs.Graphics().p("AFmClQg2AAg6geQhCgigugzIAlhAQAKALASAOQAkAdAmAQQB7A0BkhiIgEBMQgCAbgHAFQg5AvhEAAIAAAAg");
	var mask_graphics_125 = new cjs.Graphics().p("AFaCkQg2gDg5ggQhAglgrg1IAng+QAKALARAPQAjAfAlASQB4A6BphdQgFAhgDAqQgDAbgHAFQg4Aog+AAIgJAAg");
	var mask_graphics_126 = new cjs.Graphics().p("AFNCjQg2gFg2gjQg/gpgog3IAqg8QAJANARAQQAhAgAkATQB1BABthYQgGAhgFAqQgFAbgHAFQg1Aig5AAIgTgBg");
	var mask_graphics_127 = new cjs.Graphics().p("AFBCiQg2gIg1gmQg8grgmg5IAug6QAIANAQARQAfAhAkAWQBxBFByhSQgIAggIAqQgFAagIAFQgyAdg0AAQgOAAgOgCg");
	var mask_graphics_128 = new cjs.Graphics().p("AE1ChQg1gLgzgoQg7gvgig6IAwg4QAIANAPASQAdAjAjAXQBuBLB1hNQgJAhgKApQgHAagIAEQgvAZgvAAQgTAAgSgEg");
	var mask_graphics_678 = new cjs.Graphics().p("Ak1ChQg1gLgzgoQg7gvgig6IAwg4QAIANAPASQAdAjAjAXQBuBLB1hNQgJAhgKApQgHAagIAEQgvAZgvAAQgTAAgSgEg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:58.3,y:15.6}).wait(30).to({graphics:mask_graphics_44,x:58.3,y:15.6}).wait(63).to({graphics:mask_graphics_107,x:58.3,y:15.6}).wait(1).to({graphics:mask_graphics_108,x:58,y:15.6}).wait(1).to({graphics:mask_graphics_109,x:57.6,y:15.6}).wait(1).to({graphics:mask_graphics_110,x:57.2,y:15.7}).wait(1).to({graphics:mask_graphics_111,x:56.8,y:15.8}).wait(1).to({graphics:mask_graphics_112,x:56.3,y:15.9}).wait(1).to({graphics:mask_graphics_113,x:55.8,y:16}).wait(1).to({graphics:mask_graphics_114,x:55.4,y:16.2}).wait(1).to({graphics:mask_graphics_115,x:54.9,y:16.4}).wait(1).to({graphics:mask_graphics_116,x:54.3,y:16.7}).wait(1).to({graphics:mask_graphics_117,x:53.8,y:16.9}).wait(1).to({graphics:mask_graphics_118,x:53.2,y:16.8}).wait(1).to({graphics:mask_graphics_119,x:52.6,y:16.7}).wait(1).to({graphics:mask_graphics_120,x:52,y:16.6}).wait(1).to({graphics:mask_graphics_121,x:51.3,y:16.6}).wait(1).to({graphics:mask_graphics_122,x:50.7,y:16.5}).wait(1).to({graphics:mask_graphics_123,x:50.1,y:16.5}).wait(1).to({graphics:mask_graphics_124,x:49.6,y:16.5}).wait(1).to({graphics:mask_graphics_125,x:49.1,y:16.4}).wait(1).to({graphics:mask_graphics_126,x:48.5,y:16.4}).wait(1).to({graphics:mask_graphics_127,x:48,y:16.4}).wait(1).to({graphics:mask_graphics_128,x:47.4,y:16.5}).wait(550).to({graphics:mask_graphics_678,x:-50.7,y:16.5}).wait(92));

	// l4
	this.instance_22 = new lib.l4();
	this.instance_22.parent = this;
	this.instance_22.setTransform(75.1,25.2,1.077,1.077,0,0,0,0.6,0.1);
	this.instance_22._off = true;

	var maskedShapeInstanceList = [this.instance_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(14).to({_off:false},0).wait(664).to({x:-84.9},0).wait(92));

	// m3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_14 = new cjs.Graphics().p("ADYEsQhXgUg/hDQgyg2gghRQgmhcgGhUIBPgPQACATAGAdQANA7AYAyQBOCiCjAWQgaAYggAfQgSASgKAAIgDgBg");
	var mask_1_graphics_44 = new cjs.Graphics().p("ADYEsQhXgUg/hDQgyg2gghRQgmhcgGhUIBPgPQACATAGAdQANA7AYAyQBOCiCjAWQgaAYggAfQgSASgKAAIgDgBg");
	var mask_1_graphics_86 = new cjs.Graphics().p("ADYEsQhXgUg/hDQgyg2gghRQgmhcgGhUIBPgPQACATAGAdQANA7AYAyQBOCiCjAWQgaAYggAfQgSASgKAAIgDgBg");
	var mask_1_graphics_87 = new cjs.Graphics().p("ADpEuQhYgQhCg/Qg2gzgkhPQgrhagLhUIBPgTQACATAIAdQAQA5AbAxQBXCeCkANQgZAZgeAiQgSASgKAAIgCAAg");
	var mask_1_graphics_88 = new cjs.Graphics().p("AD6EwQhZgLhGg8Qg4gwgohMQgwhYgPhTIBNgXQADASAKAdQATA4AeAvQBfCZClAEQgYAbgcAjQgRAUgLAAIgBAAg");
	var mask_1_graphics_89 = new cjs.Graphics().p("AELExQhZgGhJg4Qg7gsguhLQgzhVgUhRIBLgcQAFASALAcQAWA3AhAuQBnCTClgFQgWAcgaAkQgRAWgKAAIgBAAg");
	var mask_1_graphics_90 = new cjs.Graphics().p("AEbEyQhZgBhMg0Qg9gpgyhIQg4hSgYhQIBKggQAFASANAbQAZA2AjAsQBvCNCkgOQgUAdgYAmQgQAXgKAAIgBAAg");
	var mask_1_graphics_91 = new cjs.Graphics().p("ACEEHQg/gmg2hFQg9hPgdhPIBKgkQAFASAOAaQAdA1AlAqQB3CHCjgXQgTAegWAnQgPAYgKAAIgNABQhSAAhJgsg");
	var mask_1_graphics_92 = new cjs.Graphics().p("ACSEQQhBgig6hCQhAhLgihPIBHgnQAHASAPAYQAgA0AnAoQB+CACiggQgRAfgUAoQgNAZgLABIgdACQhJAAhEgkg");
	var mask_1_graphics_93 = new cjs.Graphics().p("ACgEYQhDgeg9g/QhEhHgmhNIBFgrQAHARARAYQAiAyAqAmQCFB5CfgpQgPAggRApQgMAagLABQgXAEgXAAQhAAAg+gdg");
	var mask_1_graphics_94 = new cjs.Graphics().p("ACvEgQhEgbhBg7QhIhDgqhKIBCgwQAJARASAXQAlAwArAjQCLByCegyQgOAhgPAqQgLAagKACQgfAHgeAAQg5AAg3gWg");
	var mask_1_graphics_95 = new cjs.Graphics().p("AC+EnQhGgXhDg3QhNhAgthHIA/gzQAKAQATAWQAnAuAuAhQCRBqCag7QgLAigNAqQgJAbgKADQgnAKgmAAQgwAAgxgQg");
	var mask_1_graphics_96 = new cjs.Graphics().p("ADNEuQhHgUhGgzQhQg7gxhFIA8g3QAKAQAVAVQAqAsAvAeQCXBhCXhCQgKAigLArQgHAcgKADQguAPguAAQgpAAgpgLg");
	var mask_1_graphics_97 = new cjs.Graphics().p("ADdEwQhIgPhJgwQhTg2g1hCIA5g6QALAPAWAUQAsApAxAcQCcBYCThLQgIAjgIAsQgGAbgKAEQg1AVg3AAQggAAghgHg");
	var mask_1_graphics_98 = new cjs.Graphics().p("ADuEyQhJgLhMgrQhXgyg4g+IA1g+QAMAOAXATQAvAnAyAYQChBQCOhUQgFAjgGAsQgEAcgKAFQg7AbhBAAQgXAAgYgDg");
	var mask_1_graphics_99 = new cjs.Graphics().p("AD+EzQhJgHhPgnQhZgsg8g7IAxhBQAOAOAYARQAwAkA0AWQCmBGCJhcQgEAjgDAsQgCAdgKAFQhCAjhKAAIgegBg");
	var mask_1_graphics_100 = new cjs.Graphics().p("AEPEzQhKgDhQgiQhdgng/g3IAuhEQAOANAZAQQAzAhA1ATQCpA8CEhkQgCAjAAAtQgBAdgJAFQhIAshVAAIgLAAg");
	var mask_1_graphics_101 = new cjs.Graphics().p("ACCEXQhegihCg0IAphFQAPALAaAPQA1AdA2AQQCsAyB+hrQAAAkACAsQABAdgJAGQhJAzhcACIgJAAQhFAAhOgbg");
	var mask_1_graphics_102 = new cjs.Graphics().p("ACPEeQhggchFgwIAlhIQAQALAbANQA2AbA3AMQCvAoB3hyQACAkAFAsQADAcgJAHQhGA3hcAIIgdABQg9AAhDgUg");
	var mask_1_graphics_103 = new cjs.Graphics().p("ACdElQhigWhIgsIAhhKQARAKAbALQA4AYA3AJQCyAeBwh5QAEAjAIAsQAEAdgIAGQhDA8hbANQgZADgbAAQgzAAg3gNg");
	var mask_1_graphics_104 = new cjs.Graphics().p("ACrErQhjgQhKgoIAchMQASAJAcAKQA4AUA4AGQCzAUBph/QAGAjAKArQAGAcgHAHQhAA/haASQgkAIgoAAQgnAAgrgIg");
	var mask_1_graphics_105 = new cjs.Graphics().p("AC5ExQhjgLhOgjIAahOQARAIAdAIQA6ARA4ADQCzAJBiiFQAIAiANArQAHAcgHAIQg8BChZAYQgvAMg2AAQgbAAgegDg");
	var mask_1_graphics_106 = new cjs.Graphics().p("ADIE1QhkgFhPgfIAVhPQASAHAdAHQA6ANA5AAQC0gBBZiLQAKAiAQAqQAIAbgGAIQg4BGhXAdQg7AThGAAIgdgBg");
	var mask_1_graphics_107 = new cjs.Graphics().p("AAjEfIAQhQQATAGAdAFQA8AKA4gEQCzgMBSiPQAMAhARApQALAbgGAIQg0BJhWAiQhEAbhYAAIgFAAQhhAAhPgZg");
	var mask_1_graphics_678 = new cjs.Graphics().p("AAjEfIAQhQQATAGAdAFQA8AKA4gEQCzgMBSiPQAMAhARApQALAbgGAIQg0BJhWAiQhEAbhYAAIgFAAQhhAAhPgZg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_1_graphics_14,x:30.5,y:30.1}).wait(30).to({graphics:mask_1_graphics_44,x:30.5,y:30.1}).wait(42).to({graphics:mask_1_graphics_86,x:30.5,y:30.1}).wait(1).to({graphics:mask_1_graphics_87,x:31.8,y:30.2}).wait(1).to({graphics:mask_1_graphics_88,x:33.1,y:30.4}).wait(1).to({graphics:mask_1_graphics_89,x:34.3,y:30.5}).wait(1).to({graphics:mask_1_graphics_90,x:35.4,y:30.6}).wait(1).to({graphics:mask_1_graphics_91,x:36.6,y:30.7}).wait(1).to({graphics:mask_1_graphics_92,x:37.7,y:30.8}).wait(1).to({graphics:mask_1_graphics_93,x:38.7,y:30.9}).wait(1).to({graphics:mask_1_graphics_94,x:39.8,y:31}).wait(1).to({graphics:mask_1_graphics_95,x:40.7,y:31.1}).wait(1).to({graphics:mask_1_graphics_96,x:41.7,y:31.3}).wait(1).to({graphics:mask_1_graphics_97,x:42.6,y:31.1}).wait(1).to({graphics:mask_1_graphics_98,x:43.4,y:30.9}).wait(1).to({graphics:mask_1_graphics_99,x:44.3,y:30.8}).wait(1).to({graphics:mask_1_graphics_100,x:45.1,y:30.7}).wait(1).to({graphics:mask_1_graphics_101,x:45.9,y:30.6}).wait(1).to({graphics:mask_1_graphics_102,x:46.9,y:30.6}).wait(1).to({graphics:mask_1_graphics_103,x:47.8,y:30.6}).wait(1).to({graphics:mask_1_graphics_104,x:48.7,y:30.7}).wait(1).to({graphics:mask_1_graphics_105,x:49.5,y:30.8}).wait(1).to({graphics:mask_1_graphics_106,x:50.4,y:31}).wait(1).to({graphics:mask_1_graphics_107,x:51.2,y:31.2}).wait(571).to({graphics:mask_1_graphics_678,x:51.2,y:31.2}).wait(92));

	// l3
	this.instance_23 = new lib.l3();
	this.instance_23.parent = this;
	this.instance_23.setTransform(77.4,52.9,1.077,1.077,0,0,0,0.6,0.1);
	this.instance_23._off = true;

	var maskedShapeInstanceList = [this.instance_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(14).to({_off:false},0).wait(664).to({x:-82.6},0).wait(92));

	// m2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_14 = new cjs.Graphics().p("AD5ELQAdgMAsgYQBagwBLg9QDwjEALkDQAoAcA1AhQAiAWgDAQQgUCPheB/QhMBnh5BZQiKBniCAyg");
	var mask_2_graphics_44 = new cjs.Graphics().p("AD5ELQAdgMAsgYQBagwBLg9QDwjEALkDQAoAcA1AhQAiAWgDAQQgUCPheB/QhMBnh5BZQiKBniCAyg");
	var mask_2_graphics_65 = new cjs.Graphics().p("AD5ELQAdgMAsgYQBagwBLg9QDwjEALkDQAoAcA1AhQAiAWgDAQQgUCPheB/QhMBnh5BZQiKBniCAyg");
	var mask_2_graphics_66 = new cjs.Graphics().p("ADSEMQAegKAtgVQBcgrBPg5QD7i2AakCQAmAfA0AjQAgAYgEARQgcCNhmB5QhSBih9BTQiQBeiFArg");
	var mask_2_graphics_67 = new cjs.Graphics().p("ACsENQAfgJAvgSQBeglBRg1QEGinApj/QAlAgAxAnQAeAagEAQQgkCLhtBzQhYBeiCBKQiVBWiHAjg");
	var mask_2_graphics_68 = new cjs.Graphics().p("ACJENQAfgGAvgQQBgggBVgvQEOiYA4j8QAjAiAvAqQAdAbgFAQQgtCIhzBuQhdBYiGBDQiZBNiJAbg");
	var mask_2_graphics_69 = new cjs.Graphics().p("ABmEOQAggEAwgNQBigbBXgqQEXiIBHj5QAgAlAtAsQAbAdgGAQQg0CFh6BnQhiBSiKA7QidBEiLAUg");
	var mask_2_graphics_70 = new cjs.Graphics().p("ABGEPQAfgDAygKQBjgVBZglQEfh4BVjzQAeAmAqAvQAZAegHAQQg8CBh/BgQhmBNiNAzQiiA6iLALg");
	var mask_2_graphics_71 = new cjs.Graphics().p("AAnEQQAggBAygHQBkgPBbggQElhnBjjuQAcAoAnAxQAYAggIAOQhEB+iEBYQhrBHiQArQikAxiMADg");
	var mask_2_graphics_72 = new cjs.Graphics().p("AgDGHIANh3QAgABAygEQBlgJBdgbQEqhVBxjpQAaAqAkAyQAVAigIAOQhLB7iKBQQhuBAiSAjQiUAih9AAIghAAg");
	var mask_2_graphics_73 = new cjs.Graphics().p("AglGFIAVh2QAfADAygBQBlgDBegWQEvhEB+jhQAYAsAhA0QATAigJAOQhSB2iOBIQhyA6iUAaQh0AUhnAAQguAAgqgEg");
	var mask_2_graphics_74 = new cjs.Graphics().p("AhFGBIAch0QAfAEAxACQBlADBggQQEygyCLjaQAVAsAeA3QARAkgKANQhYBxiSA/Qh1AziVASQhSAJhLAAQhQAAhHgLg");
	var mask_2_graphics_75 = new cjs.Graphics().p("AhjF6IAihyQAfAGAxAFQBlAJBggKQE1ghCXjSQASAuAbA5QAPAkgLANQheBsiWA2Qh4AtiVAIQgsADgoAAQh6AAhlgXg");
	var mask_2_graphics_76 = new cjs.Graphics().p("Ah3FtIAnhxQAfAHAxAHQBkANBhgGQE1gTChjLQAQAvAYA6QAOAlgMAMQhjBniYAxQh5AniXACIgVAAQifAAh9ghg");
	var mask_2_graphics_77 = new cjs.Graphics().p("ACmGMQirgGiFgpIAshvQAeAJAyAJQBjASBhgCQE2gFCpjEQAOAvAWA7QAMAlgMAMQhoBjiaAqQhsAdiBAAIgkAAg");
	var mask_2_graphics_78 = new cjs.Graphics().p("ACSGIQiqgMiEgvIAxhtQAeAKAxALQBiAWBhACQE2AJCyi9QAMAwATA8QAKAmgMALQhsBeicAjQhZAVhmAAQgoAAgrgEg");
	var mask_2_graphics_79 = new cjs.Graphics().p("AB/GEQiqgUiBg1IA1hrQAeAMAwANQBhAaBhAHQE1AWC6i0QAKAwAQA8QAJAngNAKQhwBaidAcQhGANhOAAQg9AAhBgIg");
	var mask_2_graphics_80 = new cjs.Graphics().p("ABsF/Qipgch/g6IA7hpQAcANAwAQQBgAeBgALQE1AjDBisQAIAxAOA9QAHAngOAKQh0BUieAWQg0AHg4AAQhPAAhXgOg");
	var mask_2_graphics_81 = new cjs.Graphics().p("ABZF4Qingjh8g/IA/hmQAcAOAvARQBeAjBgAPQEzAxDJikQAFAxALA+QAGAngOAJQh4BQieAOQgjAEgkAAQhhAAhrgXg");
	var mask_2_graphics_82 = new cjs.Graphics().p("ABIFxQimgqh5hFIBDhjQAcAPAuAUQBcAmBfAUQExA+DQibQADAxAIA+QAEAogOAIQh7BLifAHIgkABQhwAAh9ggg");
	var mask_2_graphics_83 = new cjs.Graphics().p("AA2FpQijgyh3hKIBIhgQAbARAtAVQBbArBeAXQEtBMDXiSQABAyAGA+QACAogPAIQh+BEifABIgCAAQh/AAiPgrg");
	var mask_2_graphics_84 = new cjs.Graphics().p("AEzGXQiAgFiOgyQihg5hzhPIBMhdQAaASAtAXQBZAvBcAcQEqBYDdiIQgBAxADA/QAAAogPAHQh1A5iOAAIgdAAg");
	var mask_2_graphics_85 = new cjs.Graphics().p("AEeGZQh/gLiLg4Qifg/hvhVIBPhZQAaATArAZQBYAzBbAfQElBmDjh+QgDAxAAA+QgCAogPAHQhrAuh8AAQgeAAgegCg");
	var mask_2_graphics_86 = new cjs.Graphics().p("AEJGbQh+gQiJg+QichHhrhZIBThWQAZAUAqAcQBVA2BaAkQEgBxDoh0QgFAxgDA/QgDAogQAGQhgAlhsAAQgrAAgtgGg");
	var mask_2_graphics_678 = new cjs.Graphics().p("AEJGbQh+gQiJg+QichHhrhZIBThWQAZAUAqAcQBVA2BaAkQEgBxDoh0QgFAxgDA/QgDAogQAGQhgAlhsAAQgrAAgtgGg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_2_graphics_14,x:86.2,y:38.1}).wait(30).to({graphics:mask_2_graphics_44,x:86.2,y:38.1}).wait(21).to({graphics:mask_2_graphics_65,x:86.2,y:38.1}).wait(1).to({graphics:mask_2_graphics_66,x:85.2,y:38.4}).wait(1).to({graphics:mask_2_graphics_67,x:84,y:38.6}).wait(1).to({graphics:mask_2_graphics_68,x:82.8,y:38.8}).wait(1).to({graphics:mask_2_graphics_69,x:81.6,y:39}).wait(1).to({graphics:mask_2_graphics_70,x:80.3,y:39}).wait(1).to({graphics:mask_2_graphics_71,x:78.9,y:39.1}).wait(1).to({graphics:mask_2_graphics_72,x:77.4,y:39.1}).wait(1).to({graphics:mask_2_graphics_73,x:75.9,y:39.3}).wait(1).to({graphics:mask_2_graphics_74,x:74.3,y:39.6}).wait(1).to({graphics:mask_2_graphics_75,x:72.6,y:40.1}).wait(1).to({graphics:mask_2_graphics_76,x:71.5,y:39.8}).wait(1).to({graphics:mask_2_graphics_77,x:70.3,y:39.6}).wait(1).to({graphics:mask_2_graphics_78,x:69.1,y:39.6}).wait(1).to({graphics:mask_2_graphics_79,x:67.8,y:39.6}).wait(1).to({graphics:mask_2_graphics_80,x:66.5,y:39.7}).wait(1).to({graphics:mask_2_graphics_81,x:65.2,y:39.9}).wait(1).to({graphics:mask_2_graphics_82,x:63.8,y:40.1}).wait(1).to({graphics:mask_2_graphics_83,x:62.4,y:40.4}).wait(1).to({graphics:mask_2_graphics_84,x:61,y:40.7}).wait(1).to({graphics:mask_2_graphics_85,x:59.7,y:41.1}).wait(1).to({graphics:mask_2_graphics_86,x:58.4,y:41.7}).wait(592).to({graphics:mask_2_graphics_678,x:58.4,y:41.7}).wait(92));

	// l2
	this.instance_24 = new lib.l2();
	this.instance_24.parent = this;
	this.instance_24.setTransform(76.9,66.5,1.077,1.077,0,0,0,0.6,0.1);
	this.instance_24._off = true;

	var maskedShapeInstanceList = [this.instance_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(14).to({_off:false},0).wait(664).to({x:-83.1},0).wait(92));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_14 = new cjs.Graphics().p("AFnIpQiogmilh4QiEhhh8iRQiOilhRiXIB/gaQATAiAjA0QBHBpBUBbQEMEjEvApQgaAqgdA4QgSAfgRAAIgFgBg");
	var mask_3_graphics_44 = new cjs.Graphics().p("AFnIpQiogmilh4QiEhhh8iRQiOilhRiXIB/gaQATAiAjA0QBHBpBUBbQEMEjEvApQgaAqgdA4QgSAfgRAAIgFgBg");
	var mask_3_graphics_45 = new cjs.Graphics().p("AF/IsQiqgcishvQiJhZiEiJQiYiehZiRIB9ghQAVAhAmAyQBNBkBZBWQEdETEwAYQgXArgaA6QgQAggSAAIgEAAg");
	var mask_3_graphics_46 = new cjs.Graphics().p("AGWIuQisgSiyhlQiNhQiNiCQigiUhiiNIB7goQAXAgApAwQBSBfBfBRQEsECExAGQgVAsgWA8QgPAigTAAIgCAAg");
	var mask_3_graphics_47 = new cjs.Graphics().p("AGrIvQitgIi3haQiShIiTh5QipiLhqiGIB5gwQAYAfAsAsQBYBbBiBLQE7DwExgLQgSAugTA8QgNAkgUAAIgBAAg");
	var mask_3_graphics_48 = new cjs.Graphics().p("ABWHjQiWhAiahwQixiBhxiBIB1g1QAaAcAuArQBeBWBnBFQFHDdEwgdQgPAugPA+QgMAmgUAAIgIAAQipAAi4hNg");
	var mask_3_graphics_49 = new cjs.Graphics().p("ABkH3QiZg3ihhnQi4h2h4h6IByg9QAcAbAxAoQBiBRBqA/QFUDJEuguQgNAvgLA+QgKAngUABQgZACgaAAQiWAAikg6g");
	var mask_3_graphics_50 = new cjs.Graphics().p("AByIKQicguimheQi/hrh/hzIBvhDQAdAZAzAmQBmBKBuA5QFgC1EqhAQgKAxgIA+QgHAogUACQgwAGgxAAQiBAAiOgpg");
	var mask_3_graphics_51 = new cjs.Graphics().p("ACAIbQiegkishUQjEhgiGhsIBqhKQAfAYA1AjQBrBEBxAyQFpChEmhRQgHAwgEA/QgFAogUAEQhGANhLAAQhrAAh1gbg");
	var mask_3_graphics_52 = new cjs.Graphics().p("ACNIqQiggbiwhKQjKhUiMhjIBnhQQAgAWA2AfQBvA+B0AsQFyCLEhhiQgFAxgBA/QgCAogUAFQhcAXhnAAQhTAAhbgQg");
	var mask_3_graphics_53 = new cjs.Graphics().p("ACaI4QiigSi0g/QjOhJiShbIBihWQAhAVA4AcQByA3B2AlQF6B2EahzQgBAxADA/QAAAogUAGQhzAkiGAAQg5AAg9gHg");
	var mask_3_graphics_54 = new cjs.Graphics().p("ACiJEQiigIi3g1QjSg9iXhSIBchcQAjATA6AYQB1AxB4AeQF/BgEUiEQABAyAHA/QACAngTAIQiLAzipAAIg6gBg");
	var mask_3_graphics_55 = new cjs.Graphics().p("ACnJCQikgDi4gwQjUg2iYhOIBZheQAjASA6AWQB3AuB5AaQGCBUEQiMQACAxAJA/QADAogSAHQiXA+i+AAIgXAAg");
	var mask_3_graphics_56 = new cjs.Graphics().p("AiyIXQjVgwichJIBXhhQAjARA8AVQB3AqB6AWQGFBIELiUQAEAxALA/QAEAngSAJQieBGjMACIgNAAQieAAiygog");
	var mask_3_graphics_57 = new cjs.Graphics().p("AivIeQjXgpidhEIBThkQAkAQA8ATQB5AmB7ATQGGA8EHicQAFAxANA+QAGAogTAIQibBLjMAJIg0ABQiMAAiegfg");
	var mask_3_graphics_58 = new cjs.Graphics().p("AisIlQjYgjifg/IBQhmQAkAOA9ARQB6AjB7APQGIAwECikQAHAxAOA+QAIAngTAJQiZBQjLAPQguADgvAAQh6AAiIgWg");
	var mask_3_graphics_59 = new cjs.Graphics().p("AipIrQjZgcihg7IBNhoQAlANA9APQB7AfB7AMQGKAkD9isQAIAxAQA9QAJAngSAKQiXBUjLAVQhBAHhGAAQhnAAhxgPg");
	var mask_3_graphics_60 = new cjs.Graphics().p("AihIwQjZgVijg2IBKhrQAlAMA+AOQB7AbB8AIQGLAYD3izQAKAwASA9QAKAmgSALQiUBZjKAbQhXALheAAQhSAAhZgJg");
	var mask_3_graphics_61 = new cjs.Graphics().p("AiPI1QjagPikgxIBHhtQAlALA+AMQB9AXB7AEQGMAMDxi6QAMAwAUA8QAKAmgRALQiRBdjJAhQhtASh4AAQg8AAg/gEg");
	var mask_3_graphics_62 = new cjs.Graphics().p("Ah8I5QjbgJimgsIBEhuQAmAJA+AKQB9ATB8AAQGLABDtjCQANAvAVA8QAMAmgRAMQiOBhjJAnQiCAaiVAAIhHgBg");
	var mask_3_graphics_63 = new cjs.Graphics().p("AhqI7QjagBingnIBAhxQAmAJA+AHQB+AQB8gEQGLgMDmjIQAPAvAXA6QANAmgQAMQiMBmjHAuQiZAii1AAIgQAAg");
	var mask_3_graphics_64 = new cjs.Graphics().p("AnZIgIA8hyQAnAHA+AGQB/AMB7gIQGLgYDgjPQAQAuAZA6QAOAmgQAMQiIBqjGA0QieApi/AEIg3ABQi5AAiSgeg");
	var mask_3_graphics_65 = new cjs.Graphics().p("AnHItIA5h1QAnAGA/AFQB+AIB8gMQGKgkDZjWQASAuAaA5QAQAlgQANQiFBvjEA5QidAui+AKQg/ADg7AAQiSAAh4gUg");
	var mask_3_graphics_678 = new cjs.Graphics().p("AnHItIA5h1QAnAGA/AFQB+AIB8gMQGKgkDZjWQASAuAaA5QAQAlgQANQiFBvjEA5QidAui+AKQg/ADg7AAQiSAAh4gUg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_3_graphics_14,x:-15.7,y:55.4}).wait(30).to({graphics:mask_3_graphics_44,x:-15.7,y:55.4}).wait(1).to({graphics:mask_3_graphics_45,x:-10.2,y:55.6}).wait(1).to({graphics:mask_3_graphics_46,x:-4.7,y:55.8}).wait(1).to({graphics:mask_3_graphics_47,x:0.8,y:55.9}).wait(1).to({graphics:mask_3_graphics_48,x:6.2,y:56}).wait(1).to({graphics:mask_3_graphics_49,x:11.7,y:56.1}).wait(1).to({graphics:mask_3_graphics_50,x:17.1,y:56.3}).wait(1).to({graphics:mask_3_graphics_51,x:22.5,y:56.6}).wait(1).to({graphics:mask_3_graphics_52,x:27.8,y:57}).wait(1).to({graphics:mask_3_graphics_53,x:33.2,y:57.5}).wait(1).to({graphics:mask_3_graphics_54,x:38.9,y:58.1}).wait(1).to({graphics:mask_3_graphics_55,x:41.7,y:57.8}).wait(1).to({graphics:mask_3_graphics_56,x:44.5,y:57.5}).wait(1).to({graphics:mask_3_graphics_57,x:47.3,y:57.3}).wait(1).to({graphics:mask_3_graphics_58,x:50.1,y:57.1}).wait(1).to({graphics:mask_3_graphics_59,x:52.9,y:57}).wait(1).to({graphics:mask_3_graphics_60,x:55.2,y:56.9}).wait(1).to({graphics:mask_3_graphics_61,x:56.6,y:56.9}).wait(1).to({graphics:mask_3_graphics_62,x:57.9,y:57}).wait(1).to({graphics:mask_3_graphics_63,x:59.2,y:57.1}).wait(1).to({graphics:mask_3_graphics_64,x:60.5,y:57.4}).wait(1).to({graphics:mask_3_graphics_65,x:61.7,y:57.7}).wait(613).to({graphics:mask_3_graphics_678,x:61.7,y:57.7}).wait(92));

	// l1
	this.instance_25 = new lib.l1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(72.8,96.6,1.077,1.077,0,0,0,40.1,13.2);
	this.instance_25._off = true;

	var maskedShapeInstanceList = [this.instance_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(14).to({_off:false},0).wait(664).to({x:-87.2},0).wait(92));

	// detail
	this.instance_26 = new lib.detail();
	this.instance_26.parent = this;
	this.instance_26.setTransform(79.2,71.8,1,1,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(13).to({regX:0.1,regY:0.3,scaleX:1.54,scaleY:1.54,x:113.3,y:21.6},14,cjs.Ease.get(0.61)).to({regY:0.2,scaleX:0.87,scaleY:0.87,x:71.3,y:9.5},15,cjs.Ease.get(-1)).wait(636).to({scaleX:1.65,scaleY:1.65,x:33.5,y:20.3},13,cjs.Ease.get(0.71)).to({regX:0,scaleX:1,scaleY:1,x:79.2,y:71.8},19,cjs.Ease.get(-1)).wait(60));

	// 1
	this.kub1 = new lib.kub1();
	this.kub1.parent = this;
	this.kub1.setTransform(88,46.9,0.324,0.324);

	this.timeline.addTween(cjs.Tween.get(this.kub1).wait(13).to({regX:0.1,regY:0.1,x:105.1,y:54.8},6).to({regX:0.2,regY:0.2,scaleX:0.28,scaleY:0.28,x:87.4,y:58.2},23).wait(636).to({regX:0,regY:0,scaleX:0.32,scaleY:0.32,x:88,y:46.9},22).wait(70));

	// 2
	this.kub2 = new lib.kub1();
	this.kub2.parent = this;
	this.kub2.setTransform(78.6,31.1,0.324,0.324);

	this.timeline.addTween(cjs.Tween.get(this.kub2).wait(13).to({regX:0.1,regY:0.1,x:80.5,y:21.4},6).to({regX:0.2,regY:0,scaleX:0.28,scaleY:0.28,x:72.6,y:33.5},23).wait(636).to({regX:0,scaleX:0.32,scaleY:0.32,x:78.6,y:31.1},22).wait(70));

	// 3
	this.kub3 = new lib.kub1();
	this.kub3.parent = this;
	this.kub3.setTransform(69.5,46.9,0.324,0.324);

	this.timeline.addTween(cjs.Tween.get(this.kub3).wait(13).to({regX:0.1,regY:0.1,x:57.7,y:54.8},6).to({regX:0.2,regY:0.2,scaleX:0.28,scaleY:0.28,x:58.9,y:58.2},23).wait(636).to({regX:0,regY:0,scaleX:0.32,scaleY:0.32,x:69.5,y:46.9},22).wait(70));

	// 1
	this.kub4 = new lib.kub1();
	this.kub4.parent = this;
	this.kub4.setTransform(52.7,76.3,0.324,0.324);

	this.timeline.addTween(cjs.Tween.get(this.kub4).wait(13).to({regX:0.1,regY:0.1,x:40.8,y:83.9},6).to({regX:0,regY:0.2,scaleX:0.28,scaleY:0.28,x:44.1,y:82.9},23).wait(636).to({regY:0,scaleX:0.32,scaleY:0.32,x:52.7,y:76.3},22).wait(70));

	// 2
	this.kub5 = new lib.kub1();
	this.kub5.parent = this;
	this.kub5.setTransform(43.6,92.3,0.324,0.324);

	this.timeline.addTween(cjs.Tween.get(this.kub5).wait(13).to({regX:0.1,regY:0.1,x:39.8,y:98.3},6).to({regX:0.2,regY:0,scaleX:0.28,scaleY:0.28,x:29.9,y:107.5},23).wait(636).to({regX:0,scaleX:0.32,scaleY:0.32,x:43.6,y:92.3},22).wait(70));

	// 3
	this.kub6 = new lib.kub1();
	this.kub6.parent = this;
	this.kub6.setTransform(62.3,92.3,0.324,0.324);

	this.timeline.addTween(cjs.Tween.get(this.kub6).wait(13).to({regX:0.1,regY:0.1,x:80.5,y:98.3},6).to({regX:0,regY:0,scaleX:0.28,scaleY:0.28,x:115.9,y:107.5},23).wait(636).to({scaleX:0.32,scaleY:0.32,x:62.3,y:92.3},22).wait(70));

	// 1
	this.kub7 = new lib.kub1();
	this.kub7.parent = this;
	this.kub7.setTransform(95.6,92.3,0.324,0.324);

	this.timeline.addTween(cjs.Tween.get(this.kub7).wait(13).to({regX:0.1,regY:0.1,x:90.9,y:90.5},6).to({regX:0.2,regY:0.2,scaleX:0.28,scaleY:0.28,x:72.6,y:82.9},23).wait(636).to({regX:0,regY:0,scaleX:0.32,scaleY:0.32,x:95.6,y:92.3},22).wait(70));

	// 2
	this.kub8 = new lib.kub1();
	this.kub8.parent = this;
	this.kub8.setTransform(114.2,92.3,0.324,0.324);

	this.timeline.addTween(cjs.Tween.get(this.kub8).wait(13).to({regX:0.1,regY:0.1,x:104.4,y:98.3},6).to({regX:0.2,regY:0,scaleX:0.28,scaleY:0.28,x:72.6,y:107.5},23).wait(636).to({regX:0,scaleX:0.32,scaleY:0.32,x:114.2,y:92.3},22).wait(70));

	// 3
	this.kub9 = new lib.kub1();
	this.kub9.parent = this;
	this.kub9.setTransform(104.7,76.3,0.324,0.324);

	this.timeline.addTween(cjs.Tween.get(this.kub9).wait(13).to({regX:0.1,regY:0.1,x:116.6,y:83.9},6).to({regX:0,regY:0.2,scaleX:0.28,scaleY:0.28,x:101.1,y:82.9},23).wait(636).to({regY:0,scaleX:0.32,scaleY:0.32,x:104.7,y:76.3},22).wait(70));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#2187C6","#6CB9E3"],[0.682,0.686],0.9,11,0,-8.9).s().p("ADeBTQgfgfAAgsQAAgcAOgZQAQgZAYgNQAYgOAeAAQAsAAAfAfQAhAeAAAsQgBAtgfAeQgfAfgtAAQguAAgfgfgAD6goQgTATgBAdQAAAiAZAUQAUAPAYAAQAcAAAUgUQAUgVAAgcQAAgbgUgVQgVgUgbAAQgcAAgVAUgAjcBTQgfgfAAgsQAAgdAOgYQAPgYAZgOQAZgOAdAAQAsAAAfAfQAgAeABAsQAAAtggAeQgfAfgsAAQgvAAgfgfgAjAgoQgTATgBAdQAAAiAaAUQASAPAaAAQAbAAAUgUQAUgUAAgdQAAgbgUgVQgUgUgcAAQgdAAgUAUgAN3BtIAAh+IhNB+IgiAAIAAjJIAnAAIAACCIBPiCIAhAAIAADJgAKxBtIAAh+IhNB+IgjAAIAAjJIAnAAIAACCIBPiCIAiAAIAADJgAG8BtIAAjJIBmAAIAAAlIhAAAIAACkgACHBtIg6iUIg6CUIgpAAIBPjJIAoAAIBQDJgAlIBtIAAhZIhGAAIAABZIgoAAIAAjJIAoAAIAABMIBGAAIAAhMIAoAAIAADJgAn/BtIgxhHIgvBHIgtAAIBGhoIhBhhIAsAAIArBBIAshBIAtAAIhCBhIBGBogAsQBtIAAjJIBxAAIAAAlIhJAAIAAAlIBJAAIAAAkIhJAAIAAA1IBJAAIAAAmgAt5BtIAAijIglAAIAAgmIBzAAIAAAmIgmAAIAACjgANFhxIArAAIgrBHg");
	this.shape.setTransform(237.3,81.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#055FA9").s().p("AItAiIAAgIIgtAAIAAg6IALAAIAAAwIAVAAIAAgwIALAAIAAAwIAMAAIAAASgAnKAiIAAgIIgtAAIAAg6IAMAAIAAAwIAUAAIAAgwIAMAAIAAAwIAMAAIAAASgAJ+ASQgJgJAAgMQAAgIAFgHQAEgHAHgEQAGgEAKAAQANAAAJAJQAJAJAAANQAAALgJAJQgJAJgNAAQgOAAgJgJgAKHgRQgGAGAAAJQAAAJAHAFQAGAEAHAAQAHAAAHgFQAFgHAAgHQAAgHgFgHQgGgGgIAAQgJAAgFAGgADgATIAIgIQADAFAFAAIAEgBIADgDIgWgsIANAAIAOAgIAMggIAMAAIgQApQgEAKgFAEQgGAEgFAAQgJAAgHgIgAAPASQgJgJAAgMQAAgHAEgIQAFgIAGgDQAHgEAJAAQANAAAJAJQAJAJAAANQAAALgJAJQgJAJgNAAQgNAAgJgJgAAXgRQgGAGAAAJQAAAIAHAGQAGAEAHAAQAIAAAGgFQAGgHAAgHQAAgHgGgHQgGgGgIAAQgIAAgGAGgAjAASQgJgKAAgLQAAgJAEgGQAEgIAIgDQAGgEAJAAQANAAAJAJQAKAJAAANQAAALgKAJQgJAJgNAAQgNAAgJgJgAi4gRQgFAFAAAKQAAAJAHAFQAFAEAHAAQAJAAAFgFQAGgGAAgIQAAgIgGgGQgGgGgIAAQgIAAgGAGgAl4ASQgJgJAAgMQAAgHAEgIQAFgIAGgDQAHgEAJAAQANAAAJAJQAJAJAAANQAAALgJAJQgJAJgNAAQgNAAgJgJgAlwgRQgGAGAAAJQAAAIAHAGQAGAEAHAAQAIAAAGgFQAGgHAAgHQAAgIgGgGQgFgGgJAAQgIAAgGAGgArvASQgJgJAAgMQAAgHAEgIQAFgIAGgDQAHgEAJAAQANAAAJAJQAJAJAAANQAAALgJAJQgJAJgNAAQgNAAgJgJgArngRQgGAGAAAJQAAAIAHAGQAGAEAHAAQAIAAAGgFQAGgHAAgHQAAgHgGgHQgGgGgIAAQgIAAgGAGgAObAaIgOgVIgOAVIgNAAIAVgeIgTgcIANAAIAMATIANgTIANAAIgTAcIAUAegANeAaIAAg6IAMAAIAAA6gAMxAaIAAg6IALAAIAAAWIACAAQAIAAAEACQAFABAEAFQADAEAAAGQAAAGgDAEQgDAEgEACQgDACgIAAgAM8APIADAAQAGAAADgCQADgBAAgFQAAgHgNAAIgCAAgAMXAaIAAgaIgUAAIAAAaIgLAAIAAg6IALAAIAAAWIAUAAIAAgWIAMAAIAAA6gALeAaIAAgaIgUAAIAAAaIgLAAIAAg6IALAAIAAAWIAUAAIAAgWIAMAAIAAA6gAJfAaIAAgkIgWAkIgKAAIAAg6IALAAIAAAlIAXglIAKAAIAAA6gAHrAaIgFgMIgYAAIgFAMIgMAAIAXg6IAMAAIAXA6gAHSADIAQAAIgIgTgAGsAaIgSgaIAAAaIgMAAIAAg6IAMAAIAAAUIAQgUIAOAAIgVAaIAXAggAF1AaIAAgkIgXAkIgKAAIAAg6IAMAAIAAAlIAXglIAJAAIAAA6gAE7AaIAAgaIgUAAIAAAaIgMAAIAAg6IAMAAIAAAWIAUAAIAAgWIAMAAIAAA6gADSAaIgHgkIgNAkIgKAAIgMgkIgHAkIgLAAIAKg6IALAAIAOAoIAOgoIAMAAIAKA6gACGAaIgGgkIgNAkIgKAAIgNgkIgGAkIgMAAIALg6IALAAIAOAoIAOgoIALAAIAKA6gAgMAaIgTgaIAAAaIgLAAIAAg6IALAAIAAAUIARgUIAOAAIgVAaIAWAggAjfAaIAAgaIgUAAIAAAaIgMAAIAAg6IAMAAIAAAWIAUAAIAAgWIALAAIAAA6gAkYAaIAAgaIgUAAIAAAaIgMAAIAAg6IAMAAIAAAWIAUAAIAAgWIALAAIAAA6gAmXAaIAAgkIgXAkIgKAAIAAg6IAMAAIAAAlIAWglIAKAAIAAA6gAoLAaIgFgMIgZAAIgFAMIgLAAIAXg6IALAAIAXA6gAokADIAQAAIgIgTgApJAaIgGgkIgNAkIgKAAIgNgkIgGAkIgMAAIALg6IALAAIAOAoIAOgoIALAAIAKA6gAqvAaIAAg6IAMAAQALAAADACQAFABACAFQADAEAAAFQAAAHgDADQgEAEgFABQgDABgJAAIAAAZgAqjgJIAJgBIADgCIABgDQAAgDgDgCQgCgBgFAAIgDAAgAsiAaIAAgQQgIAAgEgCQgFgBgDgEQgDgEAAgGQAAgFACgFQACgDAFgDQAFgBAJAAIAAgIIAMAAIAAAIIACAAQAWAAAAARQAAAFgCACQgBADgEADIgHADIgKABIAAAQgAsWAAIADAAQAGAAACgBQACgDAAgDQAAgCgCgDQgDgCgFAAIgDAAgAstgMQgBACAAADQAAAFACABQADABAEAAIADAAIAAgOIgCAAQgGAAgDACgAtOAaIAAgaIgUAAIAAAaIgLAAIAAg6IALAAIAAAWIAUAAIAAgWIAMAAIAAA6gAuGAaIAAgkIgXAkIgKAAIAAg6IAMAAIAAAlIAWglIAKAAIAAA6gAhpAJIAAgJIAVAAIAAAJg");
	this.shape_1.setTransform(238.6,61.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#06519E","#137EC0"],[0.682,0.714],0.3,8.2,-0.4,-10.7).s().p("Ar9B0IAAgeIibAAIAAjJIAoAAIAACmIBGAAIAAimIAnAAIAACmIArAAIAABBgAMdBWIAAjJIAqAAQAiAAAQAGQAPAGAIAOQAJAOAAASQAAAVgLAPQgMANgTAGQgMACgeAAIAABWgANFgkIAMAAQANAAAJgCQAEgCAFgFQADgFAAgHQAAgLgJgGQgIgEgSAAIgLAAgAGyBWIAAijIglAAIAAgmIBzAAIAAAmIglAAIAACjgABJBWIAAhYIhGAAIAABYIgnAAIAAjJIAnAAIAABMIBGAAIAAhMIAnAAIAADJgAm9BWIAAjJIByAAIAAAlIhKAAIAAAlIBKAAIAAAlIhKAAIAAA0IBKAAIAAAmg");
	this.shape_2.setTransform(238.8,42.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(770));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(193.3,76.4,304.9,95.6);
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