class PrintManager {
  constructor() {
    this.queue = [];
  }

  queuePrintJob(document) {
    this.queue.push(document);
  }

  run() {
    while(this.queue.length > 0) {
      this.print(this.queue.shift());
    }
  }

  print(value) {
    console.log(value);
  }
}

const printManager = new PrintManager();

printManager.queuePrintJob('First Doc');
printManager.queuePrintJob('Second Doc');
printManager.queuePrintJob('Third Doc');
printManager.run();