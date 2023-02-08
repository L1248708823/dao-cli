/* ---------------------------------- 自动生成 Bin文件---------------------------------- */
import fs from 'fs'
const path = './src/commands'
const binPath = './bin'
function createBin() {
  const files = fs.readdirSync(path)
  files?.forEach((file) => {
    if (!/.*\.ts/.test(file))
      return
    const fileName = file.slice(0, -3)
    const content = `#!/usr/bin/env node
'use strict'
import '../dist/${fileName}.mjs'`

    const newBinPath = `${binPath}\\${fileName}.mjs`
    fs.writeFileSync(newBinPath, content)
  })
}
createBin()
