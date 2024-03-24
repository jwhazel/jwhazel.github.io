$(".thumbnail").unveil();

//Instantiate Leaflet as a generic non-geo based tile system
	var map = L.map('leaflet', {
		minZoom: 1,
		maxZoom: 4,
		center: [0, 0],
		zoom: 1,
		attributionControl:false,
		crs: L.CRS.Simple
	})
	
	//The layer added to the map
	var newspaper = null;

	$('.thumbnail-container').click(function(){
		var meta = $(this).data('meta');
		launchLeaflet(meta);
	})


	function launchLeaflet(config){
		$('#leaflet-container').addClass('active');
		$('#date-published').text(config.date);
		$('#read-more').attr('href', config.url);

		//Setup leaflet
		var h = config.h,
		    w = config.w,
		    url = 'pages/' + config.file;


		//calculate the edges of the image, in coordinate space
		var southWest = map.unproject([0, h], map.getMaxZoom()-1);
		var northEast = map.unproject([w, 0], map.getMaxZoom()-1);
		var bounds = new L.LatLngBounds(southWest, northEast);


		//Clear any old papers, this prevents overlaps
		if(newspaper !== null){
			newspaper.remove();
		}


		//add the image to leaflet and restrict panning to it's max size
		newspaper = L.imageOverlay(url, bounds).addTo(map);
		map.setMaxBounds(bounds);
	}

	$('#close-leaflet').click(function(){
		console.log('fired')
		$('#leaflet-container').removeClass('active');
	})