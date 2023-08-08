function correspondingNode(tree1, tree2, node1) {
  const stack1 = [tree1];
  const stack2 = [tree2];

  while (stack1.length > 0) {
    const curr1 = stack1.pop();
    const curr2 = stack2.pop();

    if (curr1 === node1) {
      return curr2;
    }

    stack1.push(...curr1.children);
    stack2.push(...curr2.children);
  }
}

function correspondingNode(tree1, tree2, node1) {
  const path = [];

  let currNode = node1;
  while (currNode !== tree1) {
    const parent = currNode.parentNode;
    const currIndex = Array.from(parent.children).indexOf(currNode);
    path.push(currIndex);
    currNode = parent;
  }

  return path.reduceRight((foundNode, childIndex) => {
    return foundNode.children[childIndex];
  }, tree2);
}
