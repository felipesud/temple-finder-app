const mongoose = require("mongoose");

async function main (){
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect('mongodb+srv://felipesud:28jWkaSKdXGltl9p@cluster0.lvbamfb.mongodb.net/?retryWrites=true&w=majority' );
        console.log("Connected to the DB")
    }catch (error){
        console.log(`Erro: ${error}`);
    }
}

module.exports = main;