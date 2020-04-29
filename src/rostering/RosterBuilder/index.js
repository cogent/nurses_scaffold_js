import fs from 'fs'

const loadNurses = filename => {
  const contents = fs.readFileSync(filename)
  return JSON.parse(contents)
}

const build = ({filename, startDate, endDate}) => {
  const nurses = loadNurses(filename)

  throw 'RosterBuilder#build Not Implemented'
}

export const RosterBuilder = {
  build
}
