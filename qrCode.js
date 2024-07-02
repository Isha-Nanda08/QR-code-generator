// QR code generator



// 1. use the inquirer npm package to get the user input
// 2.use the qr-image npm package to turn the user entered url into a qr code image
// 3. create a txt file to save the user input using the native fs code

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
.prompt([{
    message:"Type in your URL",
    name:"URL"
}])
.then((answers)=>{
    const url=answers.URL;
    var qr_svg=qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr.png"));
})
.catch((error)=>{
    if(error.isTtyError){
        console.log("Prompt couldn't be rendered in the current environment");
    }else{

    }
});




