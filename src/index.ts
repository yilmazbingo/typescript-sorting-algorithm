//the comparison and swapping has to be customized based on the type of data we are working with.
// comparison and swapping logic will be extracted in to different class
import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
// we changed collection type to Interface. numberCollection satisfis this interface
// const sorter = new Sorter(numbersCollection);

// sorter.sort();
// console.log(numbersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();
