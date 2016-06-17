import {Component} from '@angular/core';
import {LocalStorage, SessionStorage} from "./WebStorage";
import {ListingModel} from './listing.model';

@Component({
    selector: 'my-app',
    template: `
        <div id="map"></div>
        <h1>Agent Schedular11</h1>
        
        <input type="text" [readonly]="isNameEditable" [(ngModel)]="agentName" />
        <button (click)="isNameEditable = !isNameEditable;">Edit</button>

        <form class="form form-inline">
        	<input type="text" #name class="form-control" placeholder="Name"/>
        	<input type="text" #address class="form-control" placeholder="Address" />
       		<button class="btn-primary" (click)="addListing(name.value, address.value)">Add Listing</button>
       	</form>
    `,
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