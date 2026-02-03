const fs=require('fs');
// fs.writeFileSync("./ds-b.txt","Hello Abes college ")
// fs.writeFileSync("./ABES.txt","Hii Abes college \n Hii Abes college \n Hii Abes college  ")
// console.log(fs.readFileSync("./ABES.txt","utf-8"))
// console.log(fs.readFileSync("./ds-b.txt","utf-8"))
// fs.writeFile("./abes.txt","we code in java",()=>{});
// fs.writeFileSync("./A1.txt","Hello Abes college ")
// fs.writeFile("./A1.txt","Hello Abes college ",()=>{})
// fs.readFileSync("./A1.txt","utf-8")
// fs.readFile("./A1.txt","utf-8",()=>{})
// fs.readFile("./ds-b.txt","utf-8",(err,result)=>{
// if(err){
//     console.log("Error",err);
// }
// else{
//     console.log(result);
// }
// })

// fs.appendFileSync("./abes.txt","PHD")
// fs.appendFile("./abes.txt","Prince",(err)=>{
//     if(err){
//         console.log(err);
//     }
// })

fs.cpSync("./abes.txt","./A1.txt")
fs.cp("./abes.txt","./A1.txt",(err)=>{
    if(err){
        console.Console.log(err)
    }
})

