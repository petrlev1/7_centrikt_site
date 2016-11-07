(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 332,
	height: 111,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



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
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
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



(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiNgEIjpmsIEDGcIHqATInnAPIkGGjg");
	this.shape.setTransform(37.5,43.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75.1,86.8);


(lib.detail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#53C7F0").s().p("AgPBIIAFgaQgQgJgKgIIgaAOQgOgNgJgSIAbgKQgGgJgBgNIgcgHQACgPAHgKIAaAIQAFgIALgGIgNgOQAMgEAOgCIALAOQANgBAJADIACgLQALACAOAIIgBALQALAFAJAIIALgEQAJAIAIALIgLAEQAGAKADAKIAQACQADANgBAKIgSgGQgCAJgGAIIAPASQgHAJgNAHIgQgVQgMAFgMgBIgDAaQgUgCgPgFgAgOgsQgPAFgEAOQgDAPANANQANARATAGIAOACQAPAAAJgJQAJgHgBgMQAAgMgLgMQgLgNgRgGQgKgDgHAAQgHAAgGACg");
	this.shape.setTransform(0.4,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1580C1").s().p("AgJAPIgFgIIAIgnIAUAaIABAEIgLAjQgGgIgHgKg");
	this.shape_1.setTransform(-7.4,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1580C1").s().p("AAHgPQABgKAJABQAEAAADACIgjApIgMAGQAbgZADgPg");
	this.shape_2.setTransform(6.3,6.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1580C1").s().p("AgQAPIgKgCIASgfIAjAHIgXAeQgIgBgMgDg");
	this.shape_3.setTransform(-0.2,7.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#055FA9","#06519E"],[0,1],-9.8,0,9.8,0).s().p("AAABcIAAAAIgFAAIgBgBIgCAAIgBAAIgCAAIgBgBIgCAAIgBAAIgBAAIgBgBIgBAAIgBAAIgBAAIgBgBIgBAAIgBAAIgBAAIgCgBIgBAAIgCgBIAAgBIABgBIAAgCIAAAAIAAgDIABAAIAAgCIAAgBIAAgCIAAgBIAAgCIABgBIAAgCIAAgBIAAgCIABAAIAAgCIgBAAIgBAAIAAgBIgBAAIAAAAIgBgBIgBAAIgBAAIgBgBIgBAAIAAgBIgBAAIgBAAIAAgBIgBAAIAAgBIgBAAIgBgBIAAAAIgBAAIgCgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBAAIAAAAIgBAAIgCABIgBABIAAAAIgBAAIgBABIAAAAIgBAAIAAABIgBAAIgBABIgBAAIgBAAIgBABIgBAAIAAAAIgBABIgBAAIgBAAIAAABIgBAAIAAAAIgBABIgBAAIgBAAIgBABIgBAAIAAABIgBAAIgBgBIAAgBIgBAAIAAgBIgBgBIgBgBIgBAAIAAgBIgDgCIAAgBIgCgCIAAgBIgBAAIgBgCIAAgBIgBgCIgCgBIgBgBIAAgBIgBgCIgBAAIgBgCIAAgBIAAgBIAGggIgBgBIgBAAIgBAAIgBAAIgBgBIgBAAIgBAAIAAAAIgBgBIgBAAIgBAAIgBAAIgBAAIgBAAIgBAAIAHguIABAAIABABIABAAIABAAIAAAAIACABIABAAIABAAIABAAIAAABIABAAIABAAIABAAIABABIAAAAIACAAIABAAIABABIABAAIAAAAIABAAIABABIABAAIAAAAIABAAIACABIABAAIABAAIAAAAIABABIALg0IAAAAIABABIAAAAIADACIAAABIABABIABAAIAAABIABACIAAAAIACACIAAABIABAAIAAAAIABABIAAABIACABIgOAzIAAAAIgBgBIAAAAIAAAAIgBgBIAAgBIAAAAIgBAAIAAgBIAAAAIgBAAIAAgBIgDgCIAAgBIAAAAIgBAAIAAgBIAAAAIAAABIAAABIAAACIABABIAAACIAAAAIAAABIABABIAAABIAAAAIAAACIABABIABAAIAAABIAAABIAAAAIABABIAAABIAAABIABAAIAAABIABABIgKAhIACACIAAABIABAAIABABIABABIADgBIABgBIABAAIAAAAIABgBIACgBIAAAAIADgBIAAAAIACgBIABAAIABgBIABgBIABAAIABAAIAAgBIADgBIAAAAIABAAIABgBIABgBIABAAIABAAIAAgBIABABIADACIABAAIAAABIABAAIAAABIABAAIABABIABAAIACACIACABIABABIABAAIAAAAIACABIAAABIACABIABAAIACABIABAAIADACIAAABIAAABIgBABIAAADIAAAAIAAACIgBABIAAABIAAABIAAADIAAABIAAABIgBABIAAACIAAABIAAACIgBABIAAACIAAAAIAAABIABABIABAAIABAAIABABIABAAIABABIACAAIABAAIABAAIABABIAAAAIAAAAIABABIABAAIACAAIABAAIABABIACAAIABAAIABAAIAQgYIAJAAIABgBIAEAAIAAAAIADAAIAAgBIABAAIABAAIABAAIAAgBIACAAIABAAIABAAIAAgBIABABIABACIABABIAAAAIAagiIABAAIAAABIABAAIABAAIABAAIABABIABAAIABAAIABAAIABABIAAAAIABAAIABAAIAAABIACAAIAAAAIACAAIAAABIABAAIABAAIABAAIAAABIghAnIgBAAIAAgBIgBAAIgBAAIAAAAIAAABIABABIABABIABABIABABIAAABIABABIACgBIABgBIAAAAIABAAIAAgBIABAAIABgBIABgBIABgBIACAAIAAgBIABAAIACgDIABAAIggAkIgBAAIgCACIgBAAIgBABIgBABIAAAAIgBABIgBABIgBAAIgBAAIgBABIAAgBIgBgBIAAAAIAAgBIgDgDIAAgBIgEgEIAAAAIgCgCIAAgBIgBgBIAAgBIgCgCIgBAAIAAABIgCAAIgBAAIgBAAIAAABIgCAAIgRAXgAhKAGIABABIABACIAAABIAAgCIAAAAIAAgCIAAAAIgBgBIgCAAgAAfAeIAAgBIAAgCIAAgGIAAgBIAAgCIgCgDIAAgBIgBgDIgBgBIgBgCIAAgBIgBgBIgCgDIgBgBIgCgCIgBAAIgDgBIgBgBIgBgBIgFgDIgCgBIgCgCIgDgBIgBgBIgBAAIAAgBIgIgCIgBAAIgCgBIgEAAIgCAAIgBAAIgCAAIgEAAIgDABIgBAAIgCABIgCABIgBAAIgBABIgBABIgBAAIgDADIgCACIgCACIAPgsIABgCIAAgBIADgFIABgBIACgBIADgCIABgBIADgCIAHgCIACAAIACAAIADAAIAJgbIAAABIgBABIAAADIAAABIAAADIgBABIAAABIgGAQIAGAAIAMADIAFACIACAAIACABIABABIADABIADADIACABIABABIADABIACADIACABIABACIABABIACACIACADIACABIAAACIACADIAAACIABACIACAFIAAACIABABIAAABIALgTIABAAIAAAAIABgBIABAAIAAAAIABgBIABAAIABAAIABgBIAAAAIABAAIAAgBIABAAIAAAAIABgBIABAAIgYAkIAAABIgBABIgBACIgaAkg");
	this.shape_4.setTransform(0.1,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-9.4,19.6,19);


(lib.click1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("An6ABID/m1IH4AAID+G0Ij9G1In5AAg");
	this.shape.setTransform(-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.8,-43.7,101.5,87.6);


(lib.kub1a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.click1();
	this.instance.parent = this;
	this.instance.setTransform(0.2,0.1);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Path();
	this.instance_1.parent = this;
	this.instance_1.setTransform(12.4,0.2,1,1,0,0,0,37.5,43.4);
	this.instance_1.alpha = 0.648;

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0559A4","rgba(45,154,211,0)"],[0.098,1],-24.1,13,15.4,-1).s().p("AAGjXIDvGvInpAAg");
	this.shape.setTransform(-25.9,-21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(33,135,198,0.6)","rgba(132,210,242,0)"],[0.004,0.996],6.9,-35.8,-9.4,-2.8).s().p("Aj7jZIH3AAIj8Gzg");
	this.shape_1.setTransform(0,-21.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#A0D9F4","#A0D9F4","#70CCF1"],[0,0.004,1],-37.8,0,37.9,0).s().p("Ah9DaIj8mzIH3AAID8Gzg");
	this.shape_2.setTransform(12.6,-21.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(5,89,164,0)","#2D9AD3"],[0.278,0.898],-5.1,-21.9,1.4,32.1).s().p("Aj6DTIEAmlID2Glg");
	this.shape_3.setTransform(0.1,22.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#06529F").s().p("Al6DaID+mzIH3AAIj9Gzg");
	this.shape_4.setTransform(12.7,21.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2E9BD4").s().p("Ah9G1Ij8m1ID8m0IH3AAIAANpg");
	this.shape_5.setTransform(-12.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.6,-43.7,101.4,87.6);


(lib.kub1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 4
	this.kub1a = new lib.kub1a();
	this.kub1a.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.kub1a).to({x:11.8,y:20.1},9).to({x:0,y:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.6,-43.7,101.4,87.6);


(lib.kub6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 4
	this.kub1a = new lib.kub1a();
	this.kub1a.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.kub1a).to({x:-24.7,y:-1.2},9).to({x:0,y:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.6,-43.7,101.4,87.6);


(lib.kub5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 4
	this.kub1a = new lib.kub1a();
	this.kub1a.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.kub1a).to({x:19.8,y:6.5},9).to({x:0,y:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.6,-43.7,101.4,87.6);


(lib.kub4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 4
	this.kub1a = new lib.kub1a();
	this.kub1a.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.kub1a).to({x:-13.6,y:-24.7},9).to({x:0,y:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.6,-43.7,101.4,87.6);


(lib.kub3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 4
	this.kub1a = new lib.kub1a();
	this.kub1a.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.kub1a).to({x:-12.3,y:19.8},9).to({x:0,y:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.6,-43.7,101.4,87.6);


(lib.kub2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 4
	this.kub1a = new lib.kub1a();
	this.kub1a.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.kub1a).to({x:14.8,y:-17.2},9).to({x:0,y:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.6,-43.7,101.4,87.6);


// stage content:



(lib._102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		var frequency=3;
		stage.enableMouseOver(frequency);
		this.kub1.addEventListener("mouseover",
		fl_MouseOverHandler_32.bind(this));
		
		function fl_MouseOverHandler_32()
		{
		    this.kub1.gotoAndPlay(2); 
		}
		
		
		
		var frequency=3;
		stage.enableMouseOver(frequency);
		this.kub1.addEventListener("mouseout", out.bind(this)); 
		 
		function out() 
		{ 
		  this.kub1.gotoAndPlay(11); 
		}
	}
	this.frame_22 = function() {
		var frequency=3;
		stage.enableMouseOver(frequency);
		this.kub2.addEventListener("mouseover",
		fl_MouseOverHandler_32.bind(this));
		
		function fl_MouseOverHandler_32()
		{
		    this.kub2.gotoAndPlay(2); 
		}
		
		
		var frequency=3;
		stage.enableMouseOver(frequency);
		this.kub2.addEventListener("mouseout", out.bind(this)); 
		 
		function out() 
		{ 
		  this.kub2.gotoAndPlay(11); 
		}
	}
	this.frame_23 = function() {
		var frequency=3;
		stage.enableMouseOver(frequency);
		this.kub3.addEventListener("mouseover",
		fl_MouseOverHandler_32.bind(this));
		
		function fl_MouseOverHandler_32()
		{
		    this.kub3.gotoAndPlay(2); 
		}
		
		
		var frequency=3;
		stage.enableMouseOver(frequency);
		this.kub3.addEventListener("mouseout", out.bind(this)); 
		 
		function out() 
		{ 
		  this.kub3.gotoAndPlay(11); 
		}
	}
	this.frame_24 = function() {
		var frequency=3;
		stage.enableMouseOver(frequency);
		this.kub4.addEventListener("mouseover",
		fl_MouseOverHandler_32.bind(this));
		
		function fl_MouseOverHandler_32()
		{
		    this.kub4.gotoAndPlay(2); 
		}
		
		
		var frequency=3;
		stage.enableMouseOver(frequency);
		this.kub4.addEventListener("mouseout", out.bind(this)); 
		 
		function out() 
		{ 
		  this.kub4.gotoAndPlay(11); 
		}
	}
	this.frame_25 = function() {
		var frequency=3;
		stage.enableMouseOver(frequency);
		this.kub5.addEventListener("mouseover",
		fl_MouseOverHandler_32.bind(this));
		
		function fl_MouseOverHandler_32()
		{
		    this.kub5.gotoAndPlay(2); 
		}
		
		
		var frequency=3;
		stage.enableMouseOver(frequency);
		this.kub5.addEventListener("mouseout", out.bind(this)); 
		 
		function out() 
		{ 
		  this.kub5.gotoAndPlay(11); 
		}
	}
	this.frame_26 = function() {
		var frequency=3;
		stage.enableMouseOver(frequency);
		this.kub6.addEventListener("mouseover",
		fl_MouseOverHandler_32.bind(this));
		
		function fl_MouseOverHandler_32()
		{
		    this.kub6.gotoAndPlay(2); 
		}
		
		
		var frequency=3;
		stage.enableMouseOver(frequency);
		this.kub6.addEventListener("mouseout", out.bind(this)); 
		 
		function out() 
		{ 
		  this.kub6.gotoAndPlay(11); 
		}
	}
	this.frame_27 = function() {
		var frequency=3;
		stage.enableMouseOver(frequency);
		this.kub7.addEventListener("mouseover",
		fl_MouseOverHandler_32.bind(this));
		
		function fl_MouseOverHandler_32()
		{
		    this.kub7.gotoAndPlay(2); 
		}
		
		
		var frequency=3;
		stage.enableMouseOver(frequency);
		this.kub7.addEventListener("mouseout", out.bind(this)); 
		 
		function out() 
		{ 
		  this.kub7.gotoAndPlay(11); 
		}
	}
	this.frame_28 = function() {
		var frequency=3;
		stage.enableMouseOver(frequency);
		this.kub8.addEventListener("mouseover",
		fl_MouseOverHandler_32.bind(this));
		
		function fl_MouseOverHandler_32()
		{
		    this.kub8.gotoAndPlay(2); 
		}
		
		
		var frequency=3;
		stage.enableMouseOver(frequency);
		this.kub8.addEventListener("mouseout", out.bind(this)); 
		 
		function out() 
		{ 
		  this.kub8.gotoAndPlay(11); 
		}
	}
	this.frame_29 = function() {
		var frequency=3;
		stage.enableMouseOver(frequency);
		this.kub9.addEventListener("mouseover",
		fl_MouseOverHandler_32.bind(this));
		
		function fl_MouseOverHandler_32()
		{
		    this.kub9.gotoAndPlay(2); 
		}
		
		
		var frequency=3;
		stage.enableMouseOver(frequency);
		this.kub9.addEventListener("mouseout", out.bind(this)); 
		 
		function out() 
		{ 
		  this.kub9.gotoAndPlay(11); 
		}
	}
	this.frame_31 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1).call(this.frame_22).wait(1).call(this.frame_23).wait(1).call(this.frame_24).wait(1).call(this.frame_25).wait(1).call(this.frame_26).wait(1).call(this.frame_27).wait(1).call(this.frame_28).wait(1).call(this.frame_29).wait(2).call(this.frame_31).wait(1));

	// 1
	this.kub1 = new lib.kub1();
	this.kub1.parent = this;
	this.kub1.setTransform(82.6,38.2,0.324,0.324);

	this.timeline.addTween(cjs.Tween.get(this.kub1).to({x:75.4,y:40.9},20).wait(12));

	// 2
	this.kub2 = new lib.kub2();
	this.kub2.parent = this;
	this.kub2.setTransform(63.9,14.2,0.324,0.324);

	this.timeline.addTween(cjs.Tween.get(this.kub2).to({x:66,y:25.1},20).wait(12));

	// 3
	this.kub3 = new lib.kub4();
	this.kub3.parent = this;
	this.kub3.setTransform(48.1,36.5,0.324,0.324);

	this.timeline.addTween(cjs.Tween.get(this.kub3).to({x:56.9,y:40.9},20).wait(12));

	// 1
	this.kub4 = new lib.kub6();
	this.kub4.parent = this;
	this.kub4.setTransform(34.5,63.1,0.324,0.324);

	this.timeline.addTween(cjs.Tween.get(this.kub4).to({x:40.1,y:70.3},20).wait(12));

	// 2
	this.kub5 = new lib.kub3();
	this.kub5.parent = this;
	this.kub5.setTransform(23,93.1,0.324,0.324);

	this.timeline.addTween(cjs.Tween.get(this.kub5).to({x:31,y:86.3},20).wait(12));

	// 3
	this.kub6 = new lib.kub1();
	this.kub6.parent = this;
	this.kub6.setTransform(53.3,93.1,0.324,0.324);

	this.timeline.addTween(cjs.Tween.get(this.kub6).to({x:49.7,y:86.3},20).wait(12));

	// 1
	this.kub7 = new lib.kub1();
	this.kub7.parent = this;
	this.kub7.setTransform(84.2,93.1,0.324,0.324);

	this.timeline.addTween(cjs.Tween.get(this.kub7).to({x:83,y:86.3},20).wait(12));

	// 2
	this.kub8 = new lib.kub5();
	this.kub8.parent = this;
	this.kub8.setTransform(111.6,91.5,0.324,0.324);

	this.timeline.addTween(cjs.Tween.get(this.kub8).to({x:101.6,y:86.3},20).wait(12));

	// 3
	this.kub9 = new lib.kub2();
	this.kub9.parent = this;
	this.kub9.setTransform(96.7,66.6,0.324,0.324);

	this.timeline.addTween(cjs.Tween.get(this.kub9).to({x:92.1,y:70.3},20).wait(12));

	// detail
	this.instance = new lib.detail();
	this.instance.parent = this;
	this.instance.setTransform(66.5,66.1,1,1,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#2187C6","#6CB9E3"],[0.682,0.686],0.9,11,0,-8.9).s().p("ADeBSQgfgfgBgsQAAgbAPgYQAPgZAYgOQAZgOAdAAQAtAAAfAfQAgAfAAArQAAAtgfAeQgfAfgtAAQguAAgfgggAD6goQgUAUAAAcQAAAiAZATQATAPAZAAQAcAAAUgTQATgVAAgcQAAgagTgVQgWgUgbAAQgcAAgUATgAjbBSQgggfAAgsQAAgbAPgYQAOgZAZgOQAZgOAdAAQAsAAAgAfQAgAfAAArQAAAtgfAeQggAfgsAAQgvAAgegggAi/goQgUAUAAAcQAAAiAZATQATAPAZAAQAcAAAUgTQATgUABgdQgBgagTgVQgVgUgcAAQgcAAgUATgAN3BtIAAh9IhOB9IgiAAIAAjJIAoAAIAACBIBOiBIAhAAIAADJgAKxBtIAAh9IhOB9IgjAAIAAjJIAoAAIAACBIBOiBIAiAAIAADJgAG7BtIAAjJIBnAAIAAAmIhAAAIAACjgACGBtIg5iTIg7CTIgnAAIBOjJIAnAAIBRDJgAlHBtIAAhZIhGAAIAABZIgoAAIAAjJIAoAAIAABNIBGAAIAAhNIAnAAIAADJgAn/BtIgwhIIgvBIIgtAAIBGhpIhChgIAsAAIAsBBIAshBIAtAAIhDBgIBGBpgAsQBtIAAjJIByAAIAAAmIhKAAIAAAlIBKAAIAAAjIhKAAIAAA1IBKAAIAAAmgAt5BtIAAijIglAAIAAgmIBzAAIAAAmIglAAIAACjgANEhxIArAAIgrBHg");
	this.shape.setTransform(229.5,75.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#055FA9").s().p("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");
	this.shape_1.setTransform(230.8,55.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#06519E","#137EC0"],[0.682,0.714],0.3,8.2,-0.4,-10.7).s().p("Ar9B0IAAgfIibAAIAAjIIAoAAIAACmIBGAAIAAimIAoAAIAACmIAqAAIAABBgAMdBVIAAjIIAqAAQAiAAAPAGQAPAGAJAOQAJAOAAATQAAAVgMAOQgLAOgTAGQgMABgfAAIAABVgANEgkIANAAQANAAAIgCQAFgCAEgFQADgEAAgHQAAgMgJgFQgHgEgSAAIgMAAgAGyBVIAAiiIglAAIAAgmIByAAIAAAmIglAAIAACigABIBVIAAhWIhFAAIAABWIgnAAIAAjIIAnAAIAABMIBFAAIAAhMIAoAAIAADIgAm8BVIAAjIIBxAAIAAAmIhKAAIAAAkIBKAAIAAAlIhKAAIAAA0IBKAAIAAAlg");
	this.shape_2.setTransform(231,35.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},21).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(139.3,37.5,351.1,205.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;