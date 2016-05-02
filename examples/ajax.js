		url:"http://ispacevm30.researchstudio.at/geoserver/focus/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=focus:geofence_sbg_caro&maxFeatures=50&outputFormat=text%2Fxml%3B+subtype%3Dgml%2F3.2",
		//url:"http://ispacevm30.researchstudio.at/sos41/service?service=SOS&request=GetCapabilities",
	//	url:"http://ispacevm30.researchstudio.at/sos42/service?service=SOS&request=GetCapabilities",
		//url:"http://ispacevm30.researchstudio.at/focus/service?service=SOS&request=GetCapabilities",
			//url: "https://gist.githubusercontent.com/geronimoooooooo/a916893a267fbd2b2701/raw/39d85d6b67fc2cb7abce16a5fc8ccebba11692c5/multi.geojson",
			// url: "http://ispacevm20.researchstudio.at/focusgeofence/service",

// Using the core $.ajax() method
$.ajax({
 
    // The URL for the request
    url: "post.php",
 
    // The data to send (will be converted to a query string)
    data: {
        id: 123
    },
 
    // Whether this is a POST or GET request
    type: "GET",
 
    // The type of data we expect back
    dataType : "json",
})
  // Code to run if the request succeeds (is done);
  // The response is passed to the function
  .done(function( json ) {
     $( "<h1>" ).text( json.title ).appendTo( "body" );
     $( "<div class=\"content\">").html( json.html ).appendTo( "body" );
  })
  // Code to run if the request fails; the raw request and
  // status codes are passed to the function
  .fail(function( xhr, status, errorThrown ) {
    alert( "Sorry, there was a problem!" );
    console.log( "Error: " + errorThrown );
    console.log( "Status: " + status );
    console.dir( xhr );
  })
  // Code to run regardless of success or failure;
  .always(function( xhr, status ) {
    alert( "The request is complete!" );
  });
#############################################################################################################
<body>

<button>Send an HTTP POST request to a page and get the result back</button>
<script>
 $.ajax({
        url: "http://ispacevm20.researchstudio.at/focusgeofence/service",
        method: "POST",
        data: JSON.stringify({"a":"b"}),
        dataType: 'json',
        contentType: "application/json",
         success: function(result,status,jqXHR ){
             console.log("hi");
         },
         error(jqXHR, textStatus, errorThrown){
             console.log("fehler");
         }
    }); 

</script>
</body>
