/** Review: stack & queue
 * 1. Stack: method LIFO (last in first out)
 * 2. Queue: method FIFO (first in first out)
 */

// Call back
const functionCallback = name => {
    console.log(`hello ${name}`);
}
function asyncOperation(name, callback) {
    callback(name)
}
asyncOperation('PhuocNhat', functionCallback)
