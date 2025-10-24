class TreeNode {
    constructor(data){
            this.data = data;
            this.children = [];
    }
    addChild(childNode){
            this.children.push(childNode);
    }
}
let root = new TreeNode("Root - A");
let child1 = new TreeNode("Child - B");
let child2 = new TreeNode("Child - C");     
let grandChild1 = new TreeNode("GrandChild - D");
let grandChild2 = new TreeNode("GrandChild - E");
let grandChild3 = new TreeNode("GrandChild - F");
let grandChild4 = new TreeNode("GrandChild - G");

root.addChild(child1);
root.addChild(child2);
child1.addChild(grandChild1);
child1.addChild(grandChild2);
child2.addChild(grandChild3);
child2.addChild(grandChild4);
console.log(root);
console.log(child1);
console.log(child2);
console.log(grandChild1);
console.log(grandChild2);
console.log(grandChild3);
console.log(grandChild4);