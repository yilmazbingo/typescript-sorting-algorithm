import { Sorter } from "./Sorter";

class Node {
  next: Node | null = null; //setting default value as null
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  // if child class does not define constructor we do not need to call super(). Sorter construtor will be called for us instead
  head: Node | null = null;
  //   even though I say void but we are still use "return". void means we are not returning any specific value.
  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let tail = this.head;
    // initially "tail=head" but if tail or head has "next" property, then this next is the tail
    while (tail.next) {
      tail = tail.next;
    }
    // By default node.next=null
    tail.next = node;
  }
  // length is optional. it might be helpful in some cases
  get length(): number {
    if (!this.head) {
      return 0;
    }
    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }

  // we use this when swapping
  at(index: number): Node {
    if (!this.head) {
      throw new Error("index out of bounds");
    }
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    // if we hit out of while loop, we throw error. Otherwise ts would give warning because we should be returning "Node"
    throw new Error("INdex out of bounds");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("List is empty");
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }
  swap(leftIndex: number, rightIndex: number): void {
    //rather than just swapping nodes, we find the previous ones and change the next values
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);
    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }
  print(): void {
    if (!this.head) {
      return;
    }
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      //  this return error because "let node = this.head" ts infers that type of node will be Node but since "node=node.next" and node.next can be null, it shows error
      node = node.next;
    }
  }
}
