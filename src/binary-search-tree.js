const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this._root = null;
  }
  
  root() {
    if (this._root) {
      return { 'value': this._root.value, data: this._root.value };
    }
    return null;
  }

  add(value) {
    this._root = addWithin(this._root, value);
    
    function addWithin(node, value) {
      if (node === undefined || !node) {
        return new Node(value);
      }

      if (node.value === value) {
        return node;
      }

      if (value < node.value) {
        node.left = addWithin(node.left, value);
      } else {
        node.right = addWithin(node.right, value);
      }
      return node; 
    }
  }

  has(value) {
    return searchWithin(this._root, value);

    function searchWithin(node,value) {
      if (!node) {
        return false;
      }

      if (node.value === value) {
        return true;
      }

      if (value < node.value ) {
        return searchWithin(node.left, value);
      }

      if (value > node.value) {
        return searchWithin(node.right, value);
      }
    }
  }

  find(value) {
    return findNode(this._root, value);

    function findNode(node, value) {
      if (node) {
        if (node.value === value) {
          return { 'value': value , data: value };
        }
        if (value < node.value) {
          return findNode(node.left, value);
        }
        if (value > node.value) {
          return findNode(node.right, value);
        }
      }
      return null;
    }
  }

  remove(value) {
    this.root = removeNode(this._root, value);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }
      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.value = minFromRight.value;

        node.right = removeNode(node.right, minFromRight.value);

        return node;
      }
    }
  }

  min() {
    if (!this._root) {
      return null;
    }

    let node = this._root;
    while (node.left) {
      node = node.left;
    }
    return node.value;
  }

  max() {
    if (!this._root) {
      return null;
    }

    let node = this._root;
    while (node.right) {
      node = node.right;
    }
    return node.value;
  }
}


module.exports = {
  BinarySearchTree
};