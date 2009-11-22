/*
Script: Kwicks

License: MIT-style license.

Copyright: Copyright (c) 2007-2009 [David Walsh](http://davidwalsh.name/).

Author: David Walsh (http://davidwalsh.name)
*/
var Kwicks = new Class({

	Implements: [Options],

	options: {
		squeezeWidth: 100,
		maxWidth: 285
	},

	initialize: function(list,options) {
		this.setOptions(options);
		this.list = document.id(list);
		this.parse();
	},

	parse: function() {
		var items = this.list.getElements('a'),
			fx = new Fx.Elements(items, {wait: false, duration: 250, transition:Fx.Transitions.Cubic.easeOut}),
			startWidths = [],
			options = this.options;
		items.each(function(item,i) {
			startWidths.push(item.getStyle('width').toInt());
			item.addEvent('mouseenter',function(){
				var fxSettings = {};
				fxSettings[i] = {
					'width': [item.getStyle('width').toInt(),options.maxWidth]
				};
				items.each(function(sibling,ii) {
					if(sibling != item) {
						var w = sibling.getStyle('width').toInt();
						if (w != options.squeezeWidth) {
							fxSettings[ii] = {
								'width': [w,options.squeezeWidth] 
							};
						}
					}
				},this);
				fx.start(fxSettings);
			},this);
		},this);
		this.list.addEvent('mouseleave',function() {
			var fxSettings = {};
			items.each(function(item,i) {
				fxSettings[i] = {
					width: [item.getStyle('width').toInt(), startWidths[i]]
				};
			});
			fx.start(fxSettings);
		});
	}
});