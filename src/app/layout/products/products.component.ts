import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-products-page',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    animations: [routerTransition()]
})
export class ProductsComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
