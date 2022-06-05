class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      previous: null,
      next: null
    }
    this.tail = this.head
    this.length = 1 //no. of nodes
  }
  //append
  append(value) {

    const newNode = {
      value: value,
      previous: null,
      next: null
    }
    newNode.previous = this.tail
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    this.printList()
  }
  //prepend
  prepend(value) {
    const newNode = {
      value: value,
      previous: null,
      next: null
    }
    newNode.next = this.head
    this.head.previous = newNode
    this.head = newNode
    this.length++
    this.printList()
  }
  //insert
  insert(value, index) {
    const newNode = {
      value: value,
      previous: null,
      next: null
    }
    const leader = this.traverseToIndex(index - 1)
    const fellowNode = leader.next
    leader.next = newNode
    newNode.previous = leader
    newNode.next = fellowNode
    fellowNode.previous = newNode
    this.length++
    this.printList()
  }
  //remove
  remove(index) {
    if (index > this.length)
      return "Not Available"
    else if (index === 0)
      this.head = null
    else {
      const leader = this.traverseToIndex(index - 1)
      const fellowNode = leader.next.next
      leader.next = fellowNode
      this.length--
      this.printList()
    }
  }
  //traverseToIndex
  traverseToIndex(index) {
    if (index > this.length) {
      return "OutOfBounds"
    }
    
    let currentNode
    let indexOfCurrentNode
    //if we want node which is in first half of linked list
    if (index < (this.length / 2)) {


       indexOfCurrentNode = 0
      currentNode = this.head
      while (indexOfCurrentNode !== index) {
        currentNode = currentNode.next
        indexOfCurrentNode = indexOfCurrentNode + 1
      }
    }
          //if we want node which is in other half of linked list

    else {
       indexOfCurrentNode = this.length - 1
      currentNode = this.tail
      while (index !== indexOfCurrentNode) {
        currentNode = currentNode.previous
        indexOfCurrentNode = indexOfCurrentNode - 1
      }

    }
    return currentNode
  }
  //printList
  printList() {
    if (!this.head) {
      return "Nothing"
    }
    let currNode = this.head
    let list = []

    while (currNode !== null) {
      list.push(currNode.value)
      currNode = currNode.next
    }
return list
  }
  //printlist from tail
  printListFromTail() {
    let currNode = this.tail
    let list = []
    while (currNode !== null) {
      list.push(currNode.value)
      currNode = currNode.previous
    }
return list
  }

}

const myLinkedList = new DoublyLinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.append(77)
myLinkedList.append(90)
myLinkedList.append(8)
myLinkedList.append(9)
myLinkedList.append(6)
myLinkedList.append(67)
myLinkedList.append(22)
// myLinkedList.insert(4, 1)
// myLinkedList.printListFromTail()
myLinkedList.traverseToIndex(8)
// console.log(myLinkedList)
// myLinkedList.remove(2)




