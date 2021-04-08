// kaart - preview van de kaart
var myMap, preview;
var clicks = 0; 
var btnzoek = document.getElementById('btn-zoek');

document.getElementsByTagName('body').onload = getAPIdata();

function getClicks() {
    clicks += 1;
    console.log(clicks);
    return clicks;
}
function getLat() {
    var latitude = 0;
    var plaatsnaam = document.getElementById('plaatsnaam');
    var onderregel = document.getElementById('onderregel');
    var btnreload = document.getElementById('btn-reload');
    var plaats = document.getElementById('plaats')
    
    btnreload.style.visibility = "hidden";
    
    if (clicks == 0) {
        latitude = 53.11705;
        plaatsnaam.innerHTML = 'Locatie 1:';
        onderregel.innerHTML = '53.11705 ; 4.82637';
        plaats.innerHTML = 'Texel, Nederland';
    }
    else if (clicks == 1) {
        latitude = 62.39838;
        plaatsnaam.innerHTML = 'Locatie 2:';
        onderregel.innerHTML = '62.39838 ; 10.17134';
        plaats.innerHTML = 'Knutshø, Noorwegen';
    }
    else if (clicks == 2) {
        latitude = 28.03008;
        plaatsnaam.innerHTML = 'Locatie 3:';
        onderregel.innerHTML = '28.03008 ; -97.04209';
        plaats.innerHTML = 'Rockport Beach, Verenigde Staten';
    }
    else if (clicks == 3) {
        latitude = 29.60679;
        plaatsnaam.innerHTML = 'Locatie 4:';
        onderregel.innerHTML = '29.60679 ; 26.50183';
        plaats.innerHTML = 'Qara Oasis, Egypte';
    }
    else if (clicks == 4) {
        latitude = 45.85757;
        plaatsnaam.innerHTML = 'Locatie 5:';
        onderregel.innerHTML = '45.85757 ; 74.78228';
        plaats.innerHTML = 'Karaoy Қараой, Kazachstan';
    }
    else if (clicks => 5) {
        latitude = 0;
        plaatsnaam.innerHTML = 'Dit waren alle opties om te landen.';
        onderregel.innerHTML = 'Klik op de knop om te herstarten.';
        plaats.innerHTML = '';
        btnreload.style.visibility = "visible";
    }
    return latitude;
}
function getLng() {
    var longitude = 0;

    if (clicks == 0){
        longitude = 4.82637;
    }
    else if (clicks == 1) {
        longitude = 10.17134;
    }
    else if (clicks == 2) {
        longitude = -97.04209;
    }
    else if (clicks == 3) {
        longitude = 26.50183;
    }
    else if (clicks == 4) {
        longitude = 74.78228;
    }
    else if (clicks == 5) {
        longitude = 0;
    }
    
    return longitude;
}
function initMap() {
	// style voor de kaart
	var myStyles =[
		 {
		 	featureType: "poi",
		 	elementType: "labels",
		 	stylers: [{ visibility: "off" }]
		 },
		 {
		 	featureType: 'transit',
		 	elementType: 'labels',
		 	stylers: [{visibility: 'off'}]
		 }
	];
	// opties voor de kaart 
	var mapOptions = {
		center: {
			lat: getLat(), 
			lng: getLng()
		},
		zoom: 14,
		clickableIcons: false,
		styles: myStyles,
        zoomControl: true,
		mapTypeControl: false,
		streetViewControl: false,
		scaleControl: false,
	};
    var mapOptions2 = {
		center: {
			lat: getLat(), 
			lng: getLng()
		},
		zoom: 14,
		clickableIcons: false,
		styles: myStyles,
        draggable: false,
        scrollwheel: false,
        disableDefaultUI: true,
        mapTypeId: 'satellite'
	};
	// maken van de kaart en aan de pagina toevoegen
	myMap = new google.maps.Map(document.getElementById('maps'), mapOptions);
    
    preview = new google.maps.Map(document.getElementById('preview'), mapOptions2);
    
    var locatieMarker = new google.maps.Marker({
		position: {
			lat: getLat(), 
			lng: getLng(),
		},
		map: myMap,
		title: 'Landingsplek'
	});
	
}

