import * as chalk from 'chalk'
import build from './build'
import serve from './serve'

export default function main ([nodeArg, scriptArg, commandArg, ...args]: string[]) {
  console.log(chalk.white.bold('DerWeg version 0.0.0'))
  if (commandArg === 'build') {
    build(args)
  } else if (commandArg === 'serve') {
    serve(args)
  } else {
    help(scriptArg)
  }
}

function help (scriptArg: string) {
  console.log(`Usage:

${scriptArg} <command>

Commands:

build - Build the static site.
serve - Serve the development site.

`
  )
}
