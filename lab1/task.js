let stdobj = {
            name : "Hassam",
            class : "BS_CE",
            section : "C",
            marks: [70,80,40,60,90],
            attd : 70
}

console.log(stdobj.name);
console.log(stdobj.class);
console.log(stdobj.section);
if(stdobj.attd >= 75){

    for(let i = 0; i< stdobj.marks.length; i ++){
        if(stdobj.marks[i]>=50){

            if(stdobj.marks[i]>= 50 && stdobj.marks[i] <= 59){

                console.log("D Grade")


            }
            else if (stdobj.marks[i]>= 60 && stdobj.marks[i] <= 69){

                console.log("C Grade")


            }
            else if (stdobj.marks[i]>= 70 && stdobj.marks[i] <= 79){

                console.log("B Grade")


            }
            else if (stdobj.marks[i]>= 80 && stdobj.marks[i] <= 89){

                console.log("A Grade")


            }
            else if (stdobj.marks[i]>= 90 && stdobj.marks[i] <= 100){

                console.log("A1 Grade")


            }
            
        }
        else{
            console.log("you're failed in a course")
        }
    }
}else{
    console.log("you're failed due to short of attendance")
}
