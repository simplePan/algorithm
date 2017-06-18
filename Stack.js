/** 
 * 栈
 */
function Stack() {
    var items = [];

    this.push = function(element) {
        items.push(element);
    }

    this.pop = function() {
        return items.pop();
    }

    this.peek = function() {
        return items[items.length - 1];
    }

    this.isEmpty = function() {
        return items.length === 0;
    }

    this.clear = function() {
        items = [];
    }

    this.size = function() {
        return items.length;
    }

    function divideBy2Number(decNumber) {
        var remStack = new Stack(),
            rem,
            binaryString = '';

        while(decNumber) {
            rem = Math.floor(decNumber % 2);
            remStack.push(rem);
            decNumber = Math.floor(decNumber / 2);
        }

        while(!remStack.isEmpty()) {
            binaryString += remStack.pop().toString();
        }
        return binaryString;
    }
}