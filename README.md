Kwicks
=========

Kwicks is a MooTools plugin that enables dynamic navigation effects via lists.

![Screenshot](http://davidwalsh.name/dw-content/kwicks/kwicks-before.gif)


How to Use
----------

Kwicks can be initialized at any time but is generally initialized at the top of the document during the DOMREADY event.  The required argument is the ID of the list.
	
### HTML
	<div id="kwick">
		<ul id="kwicks">
			<li><a class="kwick john" href="http://en.wikipedia.org/wiki/John_lennon" title="John Lennon"><span>John Lennon</span></a></li>
			<li><a class="kwick paul" href="http://en.wikipedia.org/wiki/Paul_mccartney" title="Paul McCartney"><span>Paul McCartney</span></a></li>
			<li><a class="kwick george" href="http://en.wikipedia.org/wiki/George_harrison" title="George Harrison"><span>George Harrison</span></a></li>
			<li><a class="kwick ringo" href="http://en.wikipedia.org/wiki/Ringo_starr" title="Ringo Starr"><span>Ringo Starr</span></a></li>
		</ul>
	</div>
	
	
### Javascript
	window.addEvent('domready', function() {
		var kwicks = new Kwicks('kwicks');
	});

For specific usage and options, please read the documentation or visit [http://davidwalsh.name/js/kwicks](http://davidwalsh.name/js/kwicks)