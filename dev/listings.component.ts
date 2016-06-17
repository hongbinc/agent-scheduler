import {Component, Input} from '@angular/core';
import {ListingModel} from './listing.model';
import {ListingsService} from './listings.service'

@Component({
    selector: 'my-listing',
    templateUrl: "/dev/listings.component.html"
})

export class Listings {
	@Input() listings;

	constructor(private mListingsService: ListingsService) {}

	removeListing(obj) {
		this.mListingsService.removeListing(obj);
	}
}