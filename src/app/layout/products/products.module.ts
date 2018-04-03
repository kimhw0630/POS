import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, ProductsRoutingModule, PageHeaderModule],
    declarations: [ProductsComponent]
})
export class ProductsModule {}


