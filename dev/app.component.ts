import {Component} from '@angular/core';
import {LocalStorage, SessionStorage} from "./WebStorage";
import {ListingModel} from './ListingModel';

@Component({
    selector: 'my-app',
    template: `
        <h1>Agent Schedular11</h1>
        <p>Hello World!!</p>
       	<div #agent type="text" [(ngModel)]="username" placeholder="Agent Name" (click)="makeEditable(name, locationLat, locationLan, address)"/>
    `,
})
export class AppComponent {
	@LocalStorage('agentName') 
	public username: string = 'Vintesh';
	@LocalStorage('listing')
	public listing: Array<string> = [];
	makeEditable(a,b,c,d) {
		this.listing.push(new ListingModel(a, b, c, d));
	}
}