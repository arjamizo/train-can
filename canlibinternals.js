module.exports = {
  log(msg) {
    document.body.appendChild(Object.assign(document.createElement('div'), {innerHTML: msg}))
  }
}
