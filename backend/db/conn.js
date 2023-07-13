const mongoose = require("mongoose");

async function main (){
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(
            'mongodb+srv://temple:felipe@cluster0.lvbamfb.mongodb.net/temple-directory?retryWrites=true&w=majority'
        );
    }catch (error){
        console.log(`Erro: ${error}`);
    }
}

module.exports = main;