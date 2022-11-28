export default class DoorModel {
  #number: number;
  #withGift: boolean;
  #selected: boolean;
  #opened: boolean;

  constructor(
    number: number,
    withGift = false,
    selected = false,
    opened = false
  ) {
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

  get closed() {
    return !this.#opened;
  }

  unselectDoor() {
    const selected = false;
    return new DoorModel(this.number, this.withGift, selected, this.opened);
  }

  selectDoor() {
    const selected = !this.selected;
    return new DoorModel(this.number, this.withGift, selected, this.opened);
  }

  openDoor() {
    const opened = true;
    return new DoorModel(this.number, this.withGift, this.selected, opened);
  }
}
