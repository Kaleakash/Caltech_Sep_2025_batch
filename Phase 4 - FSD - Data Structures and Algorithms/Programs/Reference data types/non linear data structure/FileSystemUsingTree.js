class FileSystemNode {
    constructor(name, isFile = false) {
        this.name = name;
        this.isFile = isFile;
        this.children = isFile ? null : [];
    }
}

class FileSystem {
    constructor() {
        this.root = new FileSystemNode('root');
    }

    // Helper to find a node by path
    findNode(path) {
        if (path === '/' || path === '') return this.root;
        const parts = path.split('/').filter(Boolean);
        let current = this.root;
        for (let part of parts) {
            if (!current.children) return null;
            current = current.children.find(child => child.name === part);
            if (!current) return null;
        }
        return current;
    }

    // Create folder or file
    create(path, name, isFile = false) {
        const parent = this.findNode(path);
        if (!parent || parent.isFile) {
            console.log('Invalid path');
            return;
        }
        if (parent.children.some(child => child.name === name)) {
            console.log('Name already exists');
            return;
        }
        parent.children.push(new FileSystemNode(name, isFile));
    }

    // List contents of a folder
    list(path) {
        const node = this.findNode(path);
        if (!node || node.isFile) {
            console.log('Invalid path');
            return;
        }
        node.children.forEach(child => {
            console.log(child.name + (child.isFile ? ' [file]' : ' [folder]'));
        });
    }

    // Print the whole tree
    print(node = this.root, indent = '') {
        console.log(indent + node.name + (node.isFile ? ' [file]' : ''));
        if (!node.isFile && node.children) {
            node.children.forEach(child => this.print(child, indent + '  '));
        }
    }
}

// Example usage:
const fs = new FileSystem();
fs.create('/', 'Documents');
fs.create('/Documents', 'Resume.docx', true);
fs.create('/', 'Photos');
fs.create('/Photos', 'Vacation', false);
fs.create('/Photos/Vacation', 'beach.png', true);

console.log('List /:');
fs.list('/');

console.log('\nList /Photos:');
fs.list('/Photos');

console.log('\nFile System Structure:');
fs.print();
