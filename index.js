#!/usr/bin/env node
fs = require("fs")

const validateArgs = (args) => {
  let errors = [];

  if(isNaN(args["start-date"])){
    errors.push("please provide valid start date");
  }

  if(isNaN(args["end-date"])){
    errors.push("please provide valid end date");
  }

  if(!fs.existsSync(args["filename"])){
    errors.push("input file does not exist");
  }

  if(args["start-date"] > args["end-date"]){
    errors.push("please provide a valid date range");
  }

  if(errors.length > 0) {
    console.log("\n" + errors.length + " parameter errors found:");
    console.log("===============================")
    errors.forEach(function(error){
      console.log("- " + error);
    })
    console.log("\n");
    process.exit()
  }
}

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
  .coerce(["start-date", "end-date"], Date.parse)
  .demandOption(["start-date", "end-date", "filename"])
  .command(
    "$0",
    "Build a nurses roster",
    () => {},
    argv => {
      validateArgs(argv)
    }
  )
  .help().argv
