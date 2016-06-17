import {Component} from '@angular/core';
import {LocalStorage, SessionStorage} from "./WebStorage";
import {ListingModel} from './listing.model';
import {Listings} from './listings.component';
import {MapComponent} from './map.component';
import {ListingsService} from './listings.service';

@Component({
    selector: 'my-app',
    directives: [Listings, MapComponent],
    templateUrl: "/dev/app.component.html",
})

export class AppComponent {
	isNameEditable = true;
	listings = [];
	currentListing = {
		lat: 51.678418,
		lng: 7.809007
	};

	constructor(private mListingsService: ListingsService) { 
		this.listings = mListingsService.getAllListing();
	}

	@LocalStorage('agentName') 
	agentName: string = 'Vintesh';

	addListing(name, address) {
		this.mListingsService.addListing(new ListingModel(name.value, address.value));
		name.value = "";
		address.value = "";
	}

	isEditable() {
		return this.isNameEditable;
	}

	changeMapValues($event) {
		this.currentListing = $event.value;
	}
}