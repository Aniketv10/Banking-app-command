const yargs = require("yargs");
const commands = require("./commands");

let command = yargs.argv._[0];
let AccountNo = yargs.argv.AccountNo;
let amount = yargs.argv.amount;

if (command === "add") {
  if (AccountNo && amount) {
    commands.add(AccountNo, amount);
  }
}else if (command === "credit") {
    if (AccountNo) {
      commands.credit(AccountNo,amount);
    }
  } else if (command === "debit") {
  if (AccountNo) {
    commands.debit(AccountNo,amount);
  }
} else if (command === "printAllUser") {
  commands.printAllUser();
} else if (command === "totalBalance") {
  if (AccountNo) {
    commands.totalBalance(+AccountNo);
  }
} else {
  console.log("Error, Please Use Proper Command");
}

