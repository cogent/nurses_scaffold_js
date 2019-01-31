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
      return completeOutput + this._shiftLine(shift) + "\n"
    }, '')
  }

  _shiftLine(shift){
    return shift.date.toDateString() + " | " + shift.shiftType + " | " + this._nursesForShift(shift) 
  }

  _nursesForShift(shift){
    return shift.nurses.reduce((memo, nurse) => {
      return memo + (memo.length > 0 ? ", " : "") + nurse.name
    }, '')
  }

}

module.exports.RosterFormatter = RosterFormatter;