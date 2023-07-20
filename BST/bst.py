class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None

    def insert(self, value):
        if self.root is None:
            self.root = Node(value)
        else:
            self._insert_recursive(self.root, value)

    def _insert_recursive(self, node, value):
        if value < node.value:
            if node.left is None:
                node.left = Node(value)
            else:
                self._insert_recursive(node.left, value)
        else:
            if node.right is None:
                node.right = Node(value)
            else:
                self._insert_recursive(node.right, value)

    def search(self, value):
        return self._search_recursive(self.root, value)

    def _search_recursive(self, node, value):
        if node is None or node.value == value:
            return node
        if value < node.value:
            return self._search_recursive(node.left, value)
        return self._search_recursive(node.right, value)

    def delete(self, value):
        self.root = self._delete_recursive(self.root, value)

    def _delete_recursive(self, node, value):
        if node is None:
            return node

        if value < node.value:
            node.left = self._delete_recursive(node.left, value)
        elif value > node.value:
            node.right = self._delete_recursive(node.right, value)
        else:
            if node.left is None:
                return node.right
            elif node.right is None:
                return node.left
            else:
                successor = self._find_min(node.right)
                node.value = successor.value
                node.right = self._delete_recursive(node.right, successor.value)

        return node

    def _find_min(self, node):
        current = node
        while current.left is not None:
            current = current.left
        return current

    def inorder_traversal(self):
        elements = []
        self._inorder_traversal_recursive(self.root, elements)
        return elements

    def _inorder_traversal_recursive(self, node, elements):
        if node is not None:
            self._inorder_traversal_recursive(node.left, elements)
            elements.append(node.value)
            self._inorder_traversal_recursive(node.right, elements)


bst = BST()
bst.insert(5)
bst.insert(3)
bst.insert(7)
bst.insert(1)
bst.insert(4)
bst.insert(6)
bst.insert(8)

print(bst.inorder_traversal())  # Output: [1, 3, 4, 5, 6, 7, 8]

print(bst.search(4))  # Output: <Node object at 0x7fbd7b39cb20>

bst.delete(7)

print(bst.inorder_traversal())  # Output: [1, 3, 4, 5, 6, 8]
