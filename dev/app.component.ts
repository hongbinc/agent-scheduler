import {Component} from '@angular/core';
import {LocalStorage, SessionStorage} from "./WebStorage";
import {ListingModel} from './listing.model';
import {Listings} from './listings.component';
import {ListingsService} from './listings.service';

@Component({
    selector: 'my-app',
    directives: [Listings],
    templateUrl: "/dev/app.component.html"
})

export class AppComponent {
	isNameEditable = true;
	listings = [];

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
}