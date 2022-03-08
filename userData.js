// const fs = require('fs');

// const userData = () => {

//     try{
//         const bufferData = fs.readFileSync('userData.json')
//         const dataJson = bufferData.toString()
//         return JSON.parse(dataJson)
//     }catch(e){
//         return[]
//     }
// }

// const addUser = (objectValue) => {
//     const getUser = userData()
//     const duplicateUser = getUser.find(data => objectValue.createUserName === data.createUserName && objectValue.phoneNumber === data.phoneNumber)
    
//     if(duplicateUser){
//         return false
//     }
    
//     const finalValue = [...getUser,objectValue]
//     saveUser(finalValue)
//     return true
// }

// //  const creaditUser = (credit) => {
// //     console.log("Adding Somethong!!")
// //  }

// const saveUser = getUser => {
//     const user = JSON.stringify(getUser)
//     fs.writeFileSync('userData.json', user)
// }



// module.exports = {
//     addUser,
//     // creaditUser
// }





