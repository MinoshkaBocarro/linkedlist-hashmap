import 'normalize.css';
import './style.css';
import { createHashMap } from './hash-map';

// import { LinkedList } from './linked-list';

// const linkedListTest = new LinkedList();
// console.log(linkedListTest);
// console.log(linkedListTest.size());
// console.log(linkedListTest.at(0));
// console.log(linkedListTest.append(1));
// console.log(linkedListTest.headNode);
// console.log(linkedListTest.tailNode);
// console.log(linkedListTest.list);
// console.log(linkedListTest.append(2));
// console.log(linkedListTest.headNode);
// console.log(linkedListTest.list);
// console.log(linkedListTest.tailNode);
// console.log(linkedListTest.append(3));
// console.log(linkedListTest.headNode);
// console.log(linkedListTest.list);
// console.log(linkedListTest.tailNode);
// console.log(linkedListTest.append(4));
// console.log(linkedListTest.at(2));
// console.log(linkedListTest.headNode);
// console.log(linkedListTest.list);
// console.log(linkedListTest.tailNode);
// console.log(linkedListTest.size());
// console.log(linkedListTest.prepend(-1));
// console.log(linkedListTest.headNode);
// console.log(linkedListTest.list);
// console.log(linkedListTest.tailNode);
// console.log(linkedListTest.prepend(-2));
// console.log(linkedListTest.headNode);
// console.log(linkedListTest.list);
// console.log(linkedListTest.tailNode);
// console.log(linkedListTest.prepend(-3));
// console.log(linkedListTest.headNode);
// console.log(linkedListTest.list);
// console.log(linkedListTest.tailNode);
// console.log(linkedListTest.at(2));
// console.log(linkedListTest.prepend(-4));
// console.log(linkedListTest.headNode);
// console.log(linkedListTest.list);
// console.log(linkedListTest.tailNode);
// console.log(linkedListTest.size());
// console.log(linkedListTest.head());
// console.log(linkedListTest.tail());
// console.log(linkedListTest.at(8));
// console.log(linkedListTest.at(56));
// console.log(linkedListTest.list);
// console.log(linkedListTest.pop());
// console.log(linkedListTest.tailNode);
// console.log(linkedListTest.list);
// console.log(linkedListTest.contains(2));
// console.log(linkedListTest.contains('eighty'));
// console.log(linkedListTest.list);
// console.log(linkedListTest.find(2));
// console.log(linkedListTest.find(3));
// console.log(linkedListTest.find(-4));
// console.log(linkedListTest.find(0));
// console.log(linkedListTest.toString());
// console.log(linkedListTest.insertAt('1 value', 0));
// console.log(linkedListTest.insertAt('2 value', 2));
// console.log(linkedListTest.insertAt('3 value', 8));
// console.log(linkedListTest.insertAt('4 value', 10));
// console.log(linkedListTest.tailNode);
// console.log(linkedListTest.size());
// console.log(linkedListTest.insertAt('5 value', 12));
// console.log(linkedListTest.list);
// console.log(linkedListTest.removeAt(0));
// console.log(linkedListTest.removeAt(2));
// console.log(linkedListTest.size());
// console.log(linkedListTest.removeAt(8));
// console.log(linkedListTest.size());
// console.log(linkedListTest.removeAt(9));
// console.log(linkedListTest.tailNode);

const newHashMap = createHashMap();
console.log(newHashMap.hashMap);
console.log(newHashMap.length());
newHashMap.set('apple', 'red');
newHashMap.set('dog', 'brown');
console.log(newHashMap.length());
console.log(newHashMap.hashMap);
console.log(newHashMap.get('apple'));
console.log(newHashMap.get('alppe'));
console.log(newHashMap.has('apple'));
console.log(newHashMap.has('alppe'));
console.log(newHashMap.length());
console.log(newHashMap.remove('apple'));
console.log(newHashMap.hashMap);
console.log(newHashMap.remove('alppe'));
console.log(newHashMap.length());
newHashMap.set('apple', 'red');
console.log(newHashMap.hashMap);
console.log(newHashMap.length());
newHashMap.set('elephant', 'gray');
console.log(newHashMap.clear());
console.log(newHashMap.hashMap);
console.log(newHashMap.length());
console.log('set apple again');
newHashMap.set('apple', 'red');
newHashMap.set('carrot', 'orange');
console.log(newHashMap.hashMap);
newHashMap.set('elephant', 'gray');
console.log(newHashMap.hashMap);
newHashMap.set('frog', 'green');
console.log(newHashMap.hashMap);
newHashMap.set('grape', 'purple');
console.log(newHashMap.hashMap);
newHashMap.set('hat', 'black');
console.log(newHashMap.hashMap);
newHashMap.set('ice cream', 'white');
console.log(newHashMap.hashMap);
newHashMap.set('jacket', 'blue');
console.log(newHashMap.hashMap);
newHashMap.set('kite', 'pink');
console.log(newHashMap.hashMap);
newHashMap.set('lion', 'golden');
console.log(newHashMap.hashMap);
console.log(newHashMap.values());
console.log(newHashMap.entries());
newHashMap.set('hippo', 'grey');
console.log(newHashMap.hashMap);
newHashMap.set('basket', 'blacl');
console.log(newHashMap.hashMap);
console.log(newHashMap.hashMap);
console.log(newHashMap.length());
