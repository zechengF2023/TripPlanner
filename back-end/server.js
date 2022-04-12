require('dotenv').config({ silent: true })
const server = require("./app")
const port = process.env.PORT || 3000
const listener = server.listen(port, function () {
  console.log(`Server running on port: ${port}`)
})
const close = () => {
  listener.close()
}
module.exports = {
  close: close,
}

