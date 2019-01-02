require("yargs")
  .usage("$0 <cmd> [args]")
  .option("start-date", {
    alias: "s",
    describe: "the first date of the period to roster, in YYYY-MM-DD format"
  })
  .option("end-date", {
    alias: "e",
    describe: "the final date of the period to roster, in YYYY-MM-DD format"
  })
  .option("filename", {
    alias: "f",
    describe: "a nurses file to import"
  })
  .demandOption(["start-date", "end-date", "filename"])
  .command(
    "$0",
    "Build a nurses roster",
    () => {},
    argv => {
      console.log("this command will be run by default")
    }
  )
  .help().argv
