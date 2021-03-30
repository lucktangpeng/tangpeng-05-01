const {createServer} = require('http')
const path = require('path')
const url = require('url')
const fs = require('fs').promises
const {createReadStream} = require('fs')
const server = createServer(async (req, res) => {
  const absdir = path.join(__dirname, 'dist')
  const {pathname} = url.parse(req.url)
  const PathName = decodeURIComponent(pathname)
  const absFile = path.join(absdir, PathName)
  try {
    const fileObj = await fs.stat(absFile)
    if (fileObj.isFile()) {
      createReadStream(absFile).pipe(res)
    } else {
      res.setHeader("Content-type", "text/html;charset=utf-8")
      res.end('成功了')
    }
  } catch(e) {
    res.setHeader("Content-type", "text/html;charset=utf-8")
    res.end('NOT FOUND')
  }
  
})

server.listen('1234', () => {
  console.log(`启动路径  localhost:1234`)
})