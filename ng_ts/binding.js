class JokeComponent {
    @Input('joke') data: Joke;
}

<joke *ngFor="let j of jokes" [joke]="j"></joke>
------------------------------------------------------------
<header (loginChanged)="loggedIn = $event"></header>
<sidebar (searchTermChanged)="searchTerm = $event"></sidebar>
<content [searchTerm]="searchTerm"></content>
-------------------------------------------------------------
<strong ngNonBindable> {{(5*5+1)/2}} </strong>
-------------------------------------------------------------
products: Product[] = [];
constructor() {
    this.products = MockData.Products;
}
-------------------------------------------------------------
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
class ProductComponent{
    @Input('product') data: Product;
    @Output() removed = new EventEmitter();

    delete() {
    this.removed.emit(this.product);
    }
}
<app-product class="col-md-3" [product]="p" *ngFor="let p of products"></app-product>
--------------------------------------------------------------
-------------------------------------------------------------
