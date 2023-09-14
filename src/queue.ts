/** Node: node for a queue. */

class Node {
  val: number;
  next: Node | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  first: Node | null;
  last: Node | null;
  size: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val: number) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      if (this.last) {
        this.last.next = node;
        this.last = node;
      }
    }
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.first) {
      let print = this.first?.val;
      if (this.first == this.last) {
        this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return print;
    } else {
      throw new Error("error");
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first?.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

export default Queue;
