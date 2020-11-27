class Directory {
  constructor(fileName) {
    this.fileName = fileName;
    this.subDirectoryList = [];
    this.pathPrefix = '';
  }

  getFileName() {
    return this.fileName;
  }

  getSubDirectoryList() {
    return this.subDirectoryList;
  }

  getPathPrefix() {
    return this.pathPrefix;
  }

  setPathPrefix(pathPrefix) {
    this.pathPrefix = pathPrefix;
  }

  addSubDirectoryList(subDir) {
    subDir.setPathPrefix(this.getPath());
    this.subDirectoryList.push(subDir);
  }

  getPath() {
    return `${this.getPathPrefix()}/${this.getFileName()}`;
  }
}

function findDirectories(directory) {
  const subDirectoryList = directory.getSubDirectoryList();

  if (subDirectoryList.length > 0) {
    subDirectoryList.forEach(subDir => {
      console.log(subDir.getPath());
      findDirectories(subDir);
    });
  }
}

const root = new Directory('.');

const amy = new Directory('Amy');
const bob =  new Directory('Bob');

const coding = new Directory('Coding');
const Eng = new Directory('Eng');

const cooking = new Directory('Cooking');
const music = new Directory('Music');

root.addSubDirectoryList(amy);
root.addSubDirectoryList(bob);

amy.addSubDirectoryList(coding);
amy.addSubDirectoryList(Eng);

bob.addSubDirectoryList(cooking);
bob.addSubDirectoryList(music);

findDirectories(root);