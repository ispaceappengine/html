class JokeListComponent {
  //instance of the child components that exists inside this components view
  @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>; //toArray possible
