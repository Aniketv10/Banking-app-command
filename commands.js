const fs = require("fs");
const file = "userData.json"

const readFile = fileName => {
  try {
    return JSON.parse(fs.readFileSync(fileName));
  } catch (e) {
    return [];
  }
};

const writeFile = (fileName, content) => {
  try {
    fs.writeFileSync(fileName, JSON.stringify(content));
    console.log("success");
  } catch (e) {
    console.log(e);
  }
};

const add = (AccountNo, amount) => {
  let bankingList = readFile(file);

  let index = bankingList.findIndex(x => x.AccountNo === AccountNo);

   if (index === -1) {
     bankingList.push({ AccountNo, amount });
   } else {
    console.log("User Already Exists")
   }
  writeFile(file, bankingList);
};

 const credit = (AccountNo,amount) => {
     let bankingList = readFile(file);
     let index = bankingList.findIndex(x => x.AccountNo === AccountNo);
  
     if (index === -1) {
       bankingList.push({ AccountNo, amount });
     } else {
       bankingList[index].amount += amount;
     }
  
     writeFile(file, bankingList);
   };


const debit = (AccountNo,amount) => {

  let bankingList = readFile(file);
//   console.log("amount:" + amount);
//   console.log("AccountNo:" + AccountNo);
  let index = bankingList.findIndex(x => x.AccountNo === AccountNo);
  console.log(index)

  if (index === -1) {
    bankingList.push({ AccountNo, amount });
  } else {
    bankingList[index].amount = bankingList[index].amount - amount;
    // console.log("bankingList:" + bankingList[index].amount)
    // console.log("amount:" + amount)
}

  writeFile(file, bankingList);
};

const printAllUser = () => {
  let bankingList = readFile(file);

  console.log(bankingList);
};

const totalBalance = AccountNo => {
  let bankingList = readFile(file);

  let index = bankingList.findIndex(x => x.AccountNo === AccountNo);

  if (index !== -1) {
    console.log(`Account No: ${AccountNo} & Total Balance is ${bankingList[index].amount}`);
  } else {
    console.log(`${AccountNo} not found`)
  }
};

module.exports = {
  add,
  credit,
  debit,
  printAllUser,
  totalBalance
};
