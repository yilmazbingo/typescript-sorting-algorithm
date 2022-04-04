// entire goal is we dont want if array is string or number inside of if statement
// we are sepating concerns. writing a class for numbers who has compare and swap methods
import { NumbersCollection } from "./NumbersCollection";

// we do not need this anymore
interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}
// we are not passing NumbersCollection as a type anymore. Instead we pass Sortable
export abstract class Sorter {
  //  child class will implement those methods
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  // length is getter
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      // after each round, maximum value bubble its way to the last position.
      // then we start from begining till the last sorted element
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
