const fullFormat = () => {
  const now = new Date()
  let time = now.getFullYear()
  time += ('0' + (now.getMonth() + 1)).slice(-2)
  time += ('0' + now.getDate()).slice(-2)
  time += ('0' + now.getHours()).slice(-2)
  time += ('0' + now.getMinutes()).slice(-2)
  time += ('0' + now.getSeconds()).slice(-2)
  time += now.getMilliseconds()
  return time
}

module.exports = {
  fullFormat
}