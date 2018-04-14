<div class="card card-block" *ngFor="let joke of jokes">
  <h4 class="card-title">{{joke.setup}}</h4>
  <p class="card-text" [hidden]="joke.hide">{{joke.punchline}}</p>
  <a class="btn btn-primary"
  (click)="joke.hide = !joke.hide">Tell Me
  </a>
</div>
