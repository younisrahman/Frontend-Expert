function createDom(root) {
  const node = document.createElement(root.type);

  if (root.attributes != null) {
    for (const [attribute, value] of Object.entries(root.attributes)) {
      node.setAttribute(attribute, value);
    }
  }

  root.children?.forEach((child) => {
    node.append(typeof child === "string" ? child : createDom(child));
  });

  return node;
}

// Do not edit the line below.
exports.createDom = createDom;
