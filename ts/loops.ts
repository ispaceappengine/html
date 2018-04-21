class SimpleChange {
constructor(previousValue: any, currentValue: any)
previousValue : any
currentValue : any
isFirstChange() : boolean
}
ngOnChanges(changes: SimpleChanges) {
console.log(`ngOnChanges - data is ${this.data}`);
for (let key in changes) {
console.log(`${key} changed.
Current: ${changes[key].currentValue}.
Previous: ${changes[key].previousValue}`);
}
}
-----------------------------------------------------
