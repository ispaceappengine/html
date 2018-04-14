class JokeComponent {
    @Input('joke') data: Joke;
}

<joke *ngFor="let j of jokes" [joke]="j"></joke>
