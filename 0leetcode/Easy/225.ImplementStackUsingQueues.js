
var MyStack = function() {
    this.top = null;
    this.size = 0
    this.data = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    ++ this.size
    this.data.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.data(-1);
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    MyStack
};


var obj = new MyStack()
  obj.push(225)
  var param_2 = obj.pop()
  var param_3 = obj.top()
  var param_4 = obj.empty()

  console.log({obj,
                param_2,
                param_3,
                param_4});
/** 
 * Your MyStack object will be instantiated and called as such:
  
 */