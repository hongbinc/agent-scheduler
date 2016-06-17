import { Component, Input } from '@angular/core';
import { GoogleMapsWrapper } from './google.maps.wrapper';

@Component({
	selector: 'my-native-map',
})

export class MapComponent {
	@Input() model;
	
	constructor(private mGoogleMapsWrapper: GoogleMapsWrapper) {
		
	}

	
}