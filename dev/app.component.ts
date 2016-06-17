import {Component} from '@angular/core';
import {LocalStorage, SessionStorage} from "./WebStorage";
import {ListingModel} from './ListingModel';

@Component({
    selector: 'my-app',
    template: `
        <div id="map"></div>
        <h1>Agent Schedular11</h1>
        <p>Hello World!!</p>
        <form>
       		<div type="text" placeholder="Agent Name"></div>
       	</form>
    `,
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