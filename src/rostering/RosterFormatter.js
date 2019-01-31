class RosterFormatter {
  constructor(loggingFunction, roster){
    this.roster = roster
    this.loggingFunction = loggingFunction;
  }

  output() {
    this.loggingFunction(this._formattedRoster())
  }

  _formattedRoster() {
    return this.roster.reduce((completeOutput, shift) => {
      return completeOutput + this._shiftLine(shift) + '\n'
    }, '')
  }

  _shiftLine(shift){
    return shift.date.toDateString() + ' | ' + shift.shiftType + ' | ' + this._nursesForShift(shift) 
  }

  _nursesForShift(shift){
    return shift.nurses.map((nurse) => {
      return nurse.name
    }).join(', ')
  }

}

module.exports.RosterFormatter = RosterFormatter;