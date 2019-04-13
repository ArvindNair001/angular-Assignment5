export class CounterService{
  activeActions = 0
  inactiveActions = 0;
  // statusChanged = new EventEmitter<number>();

  constructor() { }

  onActive(){
    this.activeActions++;
    console.log('active count is '+this.activeActions);
  }
  onInactive(){
    this.inactiveActions++;
    console.log('inactive count is '+this.inactiveActions);
  }
}
