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
		var self = this;
		console.log('Emitting - ', obj);
		var geocoder = new window.google.maps.Geocoder();
		geocoder.geocode({ 'address': obj.address }, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				var location = results[0].geometry.location;
				console.log('Location - ', location);
				self.modelForMap.emit({
					value: {
						lat: location.lat(),
						lng: location.lng()
					}
					/* Dummy data- 
						value: {
							lat: 40.779382,
							lng: -73.967013
						}
					*/
				});
			} else {
				alert('Geocode was not successful for the following reason: ' + status);
			}
		});
	}
}