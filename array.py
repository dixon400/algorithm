class MyArray:

  def __init__(self):
    self.dictionary = {}
    self.length = 0

  def push(self, value):
    self.dictionary[self.length] = value
    self.length += 1

  def pop(self):
    if self.length == 0:
        return None
    self.length -= 1
    return self.dictionary.pop(self.length)


arr = MyArray()
arr.push(1)
arr.push(2)
print(arr.pop())

