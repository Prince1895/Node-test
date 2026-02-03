const fs=require('fs');
// fs.writeFileSync("./ds-b.txt","Hello Abes college ")
// fs.writeFileSync("./ABES.txt","Hii Abes college \n Hii Abes college \n Hii Abes college  ")
console.log(fs.readFileSync("./ABES.txt","utf-8"))
console.log(fs.readFileSync("./ds-b.txt","utf-8"))