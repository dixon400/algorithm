class Stack:
    def __init__(self, items=[], limit=100):
        self.items = items
        self.limit = limit

    def isEmpty(self):
        return len(self.items) == 0

    def push(self, item):
        if len(self.items) < self.limit:
            self.items.append(item)
        else:
            raise Exception("Stack is full")

    def pop(self):
        if not self.isEmpty():
            return self.items.pop()
        else:
            raise Exception("Stack is empty")

    def peek(self):
        if not self.isEmpty():
            return self.items[-1]
        else:
            raise Exception("Stack is empty")

    def size(self):
        return len(self.items)

    def full(self):
        return len(self.items) == self.limit

    def search(self, target):
        for index, item in enumerate(self.items[::-1]):
            if item == target:
                return index
        return -1

    def empty(self):
        return self.isEmpty()


stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)

print("Stack size:", stack.size())
print("Stack is empty:", stack.empty())
print("Stack is full:", stack.full())
print("Search for 2:", stack.search(2))
print("Search for 5:", stack.search(5))

print("Popped item:", stack.pop())
print("Peeked item:", stack.peek())

print("Stack is empty:", stack.empty())