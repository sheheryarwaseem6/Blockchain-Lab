let stdobj = {
            name : "Hassam",
            class : "BS_CE",
            section : "C",
            marks: [70,80],
            attd : 75
}

console.log(stdobj.name);
console.log(stdobj.class);
console.log(stdobj.section);
if(stdobj.attd >=75){
   if(stdobj.marks[0]>= 70 && stdobj.marks[0]<=79){
       console.log("Subject # 1 -- Grade B")
   }
   if(stdobj.marks[1]>= 80 && stdobj.marks[1]<=89){
       console.log("Subject # 2 -- Grade A")
   }
} else {
    console.log("Short of Attendence!");
}
