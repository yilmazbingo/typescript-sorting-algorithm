import { Sorter } from "./Sorter";

// we could inheritance from sorter
export class NumbersCollection extends Sorter {
  // with this syntac we do not need declaration of data:number[]
  constructor(public data: number[]) {
    super();
  }
  //   with "get length()" we will access length as a property. we wont call a method.
  // collection=new NUmbersCollection ==> collection.length we are not calling length(). using it as property

  get length(): number {
    return this.data.length;
  }
  //   we could just hafe leftIndex cause we compare it to leftIndex+1. this makes it clear
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
