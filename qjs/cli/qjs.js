const { run } = require("@easy-install/easy-install")
const { join } = require("path")
run(join(__dirname, "qjs.json"), "qjs")
