import {Component} from '@angular/core';
import {LocalStorage, SessionStorage} from "./WebStorage";
import {ListingModel} from './listing.model';

@Component({
    selector: 'my-app',
    templateUrl: "/dev/app.component.html"
})

export class AppComponent {
	isNameEditable = false;

	@LocalStorage('agentName') 
	agentName: string = 'Vintesh';

	@LocalStorage('listing')
	listing = [];
	
	addListing(address, name) {
		var x = new ListingModel(name, address);
		console.log('Adding = ', x);
		this.listing.push(x);
		console.log('This.Listing - ', this.listing);
	}

	isEditable() {
		return this.isNameEditable;
	}
}