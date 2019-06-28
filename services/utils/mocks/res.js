

function render(path, attr) {
  this.renderingPath = path;
  this.renderingAttr = attr;
}

function send(file) {
  this.sendingFile = file;
}

function sendFile(file) {
  this.sendingFile = file;
}

function redirect(path) {
  this.redirectingTo = path;
}


const generate = () => {
  return {
    render,
    redirect,
    send,
    sendFile,
  };
};


module.exports = {
  generate,
};
