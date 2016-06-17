import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ListingModel} from './listing.model';
import {ListingsService} from './listings.service'

@Component({
    selector: 'my-listing',
    templateUrl: "/dev/listings.component.html",
})

export class Listings {
	@Input() listings;
	@Output() public modelForMap = new EventEmitter();

	constructor(private mListingsService: ListingsService) {}

	removeListing(obj) {
		this.mListingsService.removeListing(obj);
	}

	showListingInMap(obj: ListingModel) {
		console.log('Emitting - ', obj);
		this.modelForMap.emit({
			// value = obj;
			value: {
				lat: 40.779382,
				lng: -73.967013
			}
		});
	}
}