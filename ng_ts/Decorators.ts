<h4 #header>View Jokes</h4>

class JokeListComponent {
  //instance of the child components that exists inside this components view
  @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>; //toArray possible
  @ViewChild("header") headerEl: ElementRef; //reference to template variable
-----------------------------------------
class ProductComponent{
  @Input() product: Product;
...
}
-----------------------------------------
