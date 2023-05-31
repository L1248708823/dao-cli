/* eslint-disable no-console */
/*
 * @Description: 执行文件
 */
import c from 'kleur'
import { version } from '../../package.json'
function main() {
  console.log('------------热烈欢迎-----------')
  handleArgs()
}

/**
 * @description: 处理入参
 * @return {*}
 */
function handleArgs() {
  const cwd = process.cwd()
  // 移除所有的 ”false“ 类型元素,Boolean 是个函数
  // 第一个参数是node 第二个参数是这个库【dao】
  const args = process.argv.slice(2).filter(Boolean)
  if (args.length === 1 && (args[0] === '--version' || args[0] === '-v')) {
    console.log(`dao-cli v${version}`)
    return
  }

  if (args.length === 1 && ['-h', '--help'].includes(args[0]))
    console.log(c.green(c.bold('dao-cli')) + c.yellow(` use the right package manager111 v${version}\n`))
    // console.log(`ni   ${dash}  install`)
    // console.log(`nr   ${dash}  run`)
    // console.log(`nx   ${dash}  execute`)
    // console.log(`nu   ${dash}  upgrade`)
    // console.log(`nun  ${dash}  uninstall`)
    // console.log(`nci  ${dash}  clean install`)
    // console.log(`na   ${dash}  agent alias`)
    // console.log(c.yellow('\ncheck https://github.com/antfu/ni for more documentation.'))
}
main()
