(function(b){var a=new Class({Implements:[Options],options:{squeezeWidth:100,maxWidth:285},initialize:function(d,c){this.setOptions(c);this.list=document.id(d);this.parse();},parse:function(){var c=this.list.getElements("a"),e=new Fx.Elements(c,{wait:false,duration:250,transition:Fx.Transitions.Cubic.easeOut}),f=[],d=this.options;c.each(function(h,g){f.push(h.getStyle("width").toInt());h.addEvent("mouseenter",function(){var i={};i[g]={width:[h.getStyle("width").toInt(),d.maxWidth]};c.each(function(l,k){if(l!=h){var j=l.getStyle("width").toInt();if(j!=d.squeezeWidth){i[k]={width:[j,d.squeezeWidth]};}}},this);e.start(i);},this);},this);this.list.addEvent("mouseleave",function(){var g={};c.each(function(j,h){g[h]={width:[j.getStyle("width").toInt(),f[h]]};});e.start(g);});}});})(document.id);