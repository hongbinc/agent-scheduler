import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { GoogleMapsWrapper } from './google.maps.wrapper';

@Component({
	selector: 'my-map',
	templateUrl: 'dev/map.component.html',
})

export class MapComponent {
	@Input() model;
	Map:any = null;
	Marker: any;

	constructor(private mWrapper: GoogleMapsWrapper){}
	
	ngOnInit() {
		this.mWrapper.GoogleMapsAPI.then(tGoogleMaps => {
			let vDiv = document.getElementById("map-container");
			let vLat = this.model.lat || 40.75;
			let vLng = this.model.lng || -74;
			this.Map = new tGoogleMaps.Map(vDiv, {
				center: { lat: vLat, lng: vLng },
				zoom: 14,
				scrollwheel: false
			});
		});
	}

	ngOnChanges(tChanges: { [propname: string]: SimpleChange }) {
		this.mWrapper.GoogleMapsAPI.then(tGoogleMaps => {
			this.addMarker(tGoogleMaps, this.model);
		});
	}

	addMarker(tGoogleMaps, model) {
		if (this.Map) {
			if (this.Marker) {
				this.Marker.setMap(null);
				this.Marker = null;
			}
			this.Marker = new tGoogleMaps.Marker({
				position: { lat: model.lat, lng: model.lng },
				map: this.Map,
				title: 'We can add data here...!'
			});
			this.Map.panTo(this.Marker.getPosition());
		}
	}
}