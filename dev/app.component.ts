import {Component} from '@angular/core';
import {LocalStorage, SessionStorage} from "./WebStorage";
import {ListingModel} from './ListingModel';

@Component({
    selector: 'my-app',
    templateUrl: "/dev/app.component.html"
})
export class AppComponent {
	@LocalStorage('agentName') 
	public username: string = 'Vintesh';

	@LocalStorage('listing')
	public listing: Array<string> = [];
	
	makeEditable(address, name) {
		// this.listing.push(new ListingModel(address, name));
	}
}