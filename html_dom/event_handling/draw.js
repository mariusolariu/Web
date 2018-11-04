// Figure 13.4: draw.js 
// A simple drawing program. 
 //initialization function to insert cells into the table
function createCanvas()
{
	var side = 100;
	var tbody = document.getElementById( "tablebody" );
  
	for ( var i = 0; i < side; ++i )
	{
		var row = document.createElement( "tr" );
		
		for ( var j = 0; j < side; ++j )
		{
			var cell = document.createElement( "td" );
			row.appendChild( cell );
		} // end for

		tbody.appendChild( row );
	} // end for

	// register mousemove listener for the table
	document.getElementById( "canvas" ).addEventListener( 
		"mousemove", processMouseMove, false );

	document.getElementById("eraseB").addEventListener("click", eraseCanvas, false);
} // end function createCanvas

function eraseCanvas(){
	var canvas = document.getElementById("canvas");
	var rowsCount = canvas.rows.length;
	var columnsCount = canvas.rows[0].cells.length;

		for (var i = 0; i < rowsCount; i++){
			for (var j = 0; j < columnsCount; j++){
				canvas.rows[i].cells[j].setAttribute("class", "white");
			}

		}
}

// processes the onmousemove event
function processMouseMove( e )
{		 
	if ( e.target.tagName.toLowerCase() == "td" )
	{
		// turn the cell blue if the Ctrl key is pressed
		if ( e.ctrlKey )
		{
			e.target.setAttribute( "class", "blue" );
		} // end if

		// turn the cell red if the Shift key is pressed
		if ( e.shiftKey )
		{
			e.target.setAttribute( "class", "red" );
		} // end if

		//erase
		if ( e.altKey){
			e.target.setAttribute( "class", "white");
		}
	} // end if
} // end function processMouseMove

window.addEventListener( "load", createCanvas, false );
