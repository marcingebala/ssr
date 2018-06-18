import { observable, computed } from 'mobx';

class Store {
  @observable name = 'Marcin';
  @computed get decorated() {
    return `${this.name} is awesome!`;
  }
}

export default Store;
