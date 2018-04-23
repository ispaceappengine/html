class JokeComponent {
    @Input('joke') data: Joke;
}

<joke *ngFor="let j of jokes" [joke]="j"></joke>
-----------------------------
<header (loginChanged)="loggedIn = $event"></header>
<sidebar (searchTermChanged)="searchTerm = $event"></sidebar>
<content [searchTerm]="searchTerm"></content>
------------------------------
<strong ngNonBindable> {{(5*5+1)/2}} </strong>
------------------------------
------------------------------
-------------------------------
------------------------------
