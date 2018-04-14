<joke-form 
  (jokeCreated)="addJoke($event)"> ②
</joke-form>

The component is going to emit an event called jokeCreated whenever a user clicks the Create
button. When the jokeCreated event is emitted I want to call the addJoke function.
