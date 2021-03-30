class NodeElement {
  constructor (element, next) {
    this.element = element
    this.next = next
  }
}

class linked {
  constructor (head, size) {
    this.head = null
    this.size = 0
  }
  add (index, element) {
    if (arguments.length === 1) {
      element = index
      index = this.size
    }
    if (this.size === 0) {
      const head = this.head
      this.head = new NodeElement(element, head)
    } else {
      const prevNode = this._getNode(index -1)
      prevNode.next = new NodeElement(element, prevNode.next)
    }
    this.size++
  }
  remove (index) {
    let retNode
    if (index === 0) {
      const retNode = this.head
      this.head = retNode.next
    } else {
      const beforNode = this._getNode(index - 1)
      retNode = beforNode.next
      beforNode.next = beforNode.next.next
    }
    
    this.size--
    return retNode
  }
  _getNode (index) {
    let headNode = this.head
    for (let i=0; i < index; i++) {
      headNode = headNode.next
    }
    return headNode
  }
}


class Queue {
  constructor () {
    this.linkedList = new linked()
  }
  enQueue (data) {
    this.linkedList.add(data)
  }
  deQueue () {
    return this.linkedList.remove(0)
  }
}
const q = new  Queue()
q.enQueue('node1')
q.enQueue('node2')
q.enQueue('node3')
q.deQueue()
q.deQueue()
console.log(q)