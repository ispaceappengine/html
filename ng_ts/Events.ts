<joke-form   (jokeCreated)="addJoke($event)"> </joke-form>

The component is going to emit an event called jokeCreated whenever a user clicks the Create
button. When the jokeCreated event is emitted I want to call the addJoke function.

//output an event in function createJoke()
class JokeFormComponent {
  @Output() jokeCreated = new EventEmitter<Joke>();

  createJoke() {
  this.jokeCreated.emit(new Joke("A setup", "A punchline"));
  }
}
