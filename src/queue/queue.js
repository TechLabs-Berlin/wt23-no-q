// Priority Queue


export default class Queue {
    constructor() {
        // create empty array for users
        this.users = [];
    }
    // add user in the queue
    enqueue(user) {
        this.users.push(user);
    }

    // remove user from the queue
    dequeue() {
        // it removes the last element of the array and returns it
        return this.users.shift();
    }

    peek() {
        // it will just show you the first element of the array
        return this.users[0]
    }
    // get the size of the array

    getSize() {
        return this.users.length
    }

    isEmpty() {
        return this.getSize() === 0;
    }
}
