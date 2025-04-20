const mongoose = require("mongoose");

const conn = async function(){
    try{
        await mongoose.connect(`${process.env.URI}`);
        console.log("Database connected Successfully");
    }catch(error){
      console.log(error);
    }
}

conn();