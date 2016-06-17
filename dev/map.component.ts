import { Component, Input } from '@angular/core';
import { GOOGLE_MAPS_DIRECTIVES, GOOGLE_MAPS_PROVIDERS } from 'angular2-google-maps/core';

@Component({
	selector: 'my-map',
	templateUrl: 'dev/map.component.html',
	styleUrls: ['dev/map.component.css'],
	directives: [GOOGLE_MAPS_DIRECTIVES]
})

export class MapComponent {
	title: string = 'Map Component';
	@Input() model;
}