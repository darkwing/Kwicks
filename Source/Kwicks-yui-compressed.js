/*
Script: Kwicks

License: MIT-style license.

Copyright: Copyright (c) 2007-2009 [David Walsh](http://davidwalsh.name/).

Author: David Walsh (http://davidwalsh.name)
*/
var Kwicks=new Class({Implements:[Options],options:{squeezeWidth:100,maxWidth:285},initialize:function(b,a){this.setOptions(a);this.list=document.id(b);this.parse();},parse:function(){var a=this.list.getElements("a"),c=new Fx.Elements(a,{wait:false,duration:250,transition:Fx.Transitions.Cubic.easeOut}),d=[],b=this.options;a.each(function(f,e){d.push(f.getStyle("width").toInt());f.addEvent("mouseenter",function(){var g={};g[e]={width:[f.getStyle("width").toInt(),b.maxWidth]};a.each(function(j,i){if(j!=f){var h=j.getStyle("width").toInt();if(h!=b.squeezeWidth){g[i]={width:[h,b.squeezeWidth]};}}},this);c.start(g);},this);},this);this.list.addEvent("mouseleave",function(){var e={};a.each(function(g,f){e[f]={width:[g.getStyle("width").toInt(),d[f]]};});c.start(e);});}});