class Linter {
  constructor() {
    this.stack = [];
  }

  lint = (text) => {
    for (let i = 0; i < text.length; i++) {
      const target = text.charAt(i);

      if (this.openingBrace(target)) {
        this.stack.push(target);
      } else if (this.closingBrace(target)) {
        if (this.closesMostRecentOpeningBrace(target)) {
          this.stack.pop();
        } else {
          console.log(`Incorrect closing brace: ${target} at index #${i}`);
        }
      }
    }

    if (this.stack.length > 0) {
      console.log('does not have a closing brace');
    }
  }

  openingBrace = (char) => {
    return ["(", "[", "{"].includes(char);
  }

  closingBrace = (char) => {
    return [")", "]", "}"].includes(char);
  }

  openingBraceOf = (char) => {
    const brace = {};
    brace[")"] = "(";
    brace["]"] = "[";
    brace["}"] = "{";

    return brace[char];
  }

  mostRecentOpeningBrace = () => {
    return this.stack[this.stack.length - 1];
  };

  closesMostRecentOpeningBrace = (char) => {
    return this.openingBraceOf(char) === this.mostRecentOpeningBrace();
  };
}

const linter = new Linter();
linter.lint("(var x = { y : [1,2,3]})");