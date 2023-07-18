 const mongoose = require("mongoose");
 async function main (){
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect('mongodb+srv://felipesud:28jWkaSKdXGltl9p@cluster0.lvbamfb.mongodb.net/temple-directory?retryWrites=true&w=majority' );
        console.log("Connected to the DB")
    }catch (error){
        console.log(`Erro: ${error}`);
     }
 }

module.exports = main;


// const mongoose = require("mongoose");

// async function main() {
//     try {
//         mongoose.set("strictQuery", true);
//         await mongoose.connect('mongodb://localhost:27017/temple-directory');
//         console.log("Connected to the local DB");
//     } catch (error) {
//         console.log(`Error: ${error}`);
//     }
// }

// module.exports = main;
