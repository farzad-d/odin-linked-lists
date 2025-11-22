import LinkedList from "./linked-list.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("dolphin");
// list.removeAt(0);

console.log(list.toString());
// console.log(list.pop());
// console.log(list.head());
// console.log(list.tail());
// console.log(list.size());
// console.log(list.at(5));
// console.log(list.contains("cat"));
// console.log(list.find("cat"));
