import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	template: '<router-outlet></router-outlet>',
})
export class BasicLayoutComponent implements OnInit {

	constructor() { }

	ngOnInit(): void { }
}