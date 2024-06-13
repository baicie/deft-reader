import { action, makeObservable, observable } from "mobx";
import { singleton } from "tsyringe";

@singleton()
export class Demo {
  @observable
  public msg = "Hello";

  @action
  public doSth() {
    this.msg = "Hello World";
  }

  constructor() {
    makeObservable(this);
  }
}
