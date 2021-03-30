
const path = require('path')
const fs = require('fs').promises
const initParams = (config) => {
  return {
    directory: 'dist',
    ...config
  }
}

class CountSize {
  constructor (config) {
    this.config = initParams(config)
    this.size = 0
  }
  async start () {
    const absDir = path.join(__dirname, this.config.directory)
    await this.count(absDir)
    return this.size
  }
  async count (absDir) {
    const dirList = await fs.readdir(absDir)
    const promiseList = []
    dirList.forEach( item => {
      let url = path.resolve(absDir, item)
      promiseList.push(this.promiseFun(url))
    })
    await Promise.all(promiseList)
  }

  async promiseFun (absDir) {
    return new Promise(async (resolve, reject) => {
      const fileType = await fs.stat(absDir)
      if (fileType.isFile()) {
        this.size += fileType.size
        resolve()
      } else {
        await this.count(absDir)
        resolve()
      }
    })
  }
}

module.exports = CountSize