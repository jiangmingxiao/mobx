import {observable} from 'mobx';

class TestStore{
    @observable list = []
    addList (item) {
        this.list.push(item);
    }
    delList (item) {
        this.list = this.list.filter((temp) => {
            return temp != item;
        })
    }
}

const testStore = new TestStore();

export default testStore;
