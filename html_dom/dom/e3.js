var font = "serif";
var backgroundColor = "whitebg"; 

function start()  {
	changeStyle( "serif", "whitebg" );

	document.getElementById( "graybg" ).addEventListener( "click", function() { changeStyle( font, "graybg" ); }, false);

	document.getElementById( "whitebg" ).addEventListener( "click", function() { changeStyle( font, "whitebg" ); },
false );
	
	document.getElementById( "serif" ).addEventListener(
"click", function() { changeStyle( "serif", backgroundColor ); }, false );
	
	document.getElementById( "sans" ).addEventListener( "click", function() { changeStyle( "sans", backgroundColor
); }, false );
}

function changeStyle( f, b ){
	font = f;
	backgroundColor = b;
	document.body.setAttribute("class", f + " " + b );
} // end function changeStyle

window.addEventListener( "load", start, false );
