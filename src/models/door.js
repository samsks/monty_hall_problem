export default class DoorModel {
  #number;
  #withGift;
  #selected;
  #opened;

  constructor(number, withGift = false, selected = false, opened = false) {
    this.#number = number;
    this.#withGift = withGift;
    this.#selected = selected;
    this.#opened = opened;
  }

  get number() {
    return this.#number;
  }

  get withGift() {
    return this.#withGift;
  }

  get selected() {
    return this.#selected;
  }

  get opened() {
    return this.#opened;
  }

  unselectDoor() {
    const selected = false;
    return new Door(this.number, this.withGift, selected, this.opened);
  }

  selectDoor() {
    const selected = !this.selected;
    return new Door(this.number, this.withGift, selected, this.opened);
  }

  openDoor() {
    const opened = true;
    return new Door(this.number, this.withGift, this.selected, opened);
  }
}
