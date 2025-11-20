let url = require("url");
let googleUrl = "http://www.google.com:80/hello?id=100&age=21"
console.log(googleUrl)
let urlRef = url.parse(googleUrl,true)
console.log(urlRef)
console.log(urlRef.pathname)
console.log(urlRef.query.id)
console.log(urlRef.query.age)
console.log(urlRef.port)
console.log(urlRef.hostname)