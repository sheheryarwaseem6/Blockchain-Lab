//make 2 arrays and find second name of an array into another array


// let array1 = ["Sheheryar Waseem", "Abdal Shakir", "Hamza Ilyas"]
// let array2=["Shakir", "Ilyas","Waseem"]
// let newArray;

// array1.forEach((element, index) => {
//     array2.forEach((item)=>{
//         newArray = element.split(" ")
//         if (newArray[1] === item) {
//             console.log(`${item} is the father name of ${element} found at the indes number ${index}`)
            
//         }

        
//     })
    
// });


// 2d array and loop

students=["sheheryar","hamza","abdal"]
subjects=["maths","physics","chemistry","computer"]
marks=[[90,80,70,60],[80,70,60,50],[70,60,50,40],[60,50,40,30]]


for(let i=0;i<students.length;i++){
    console.log(students[i])
    for(let j=0;j<subjects.length;j++){
        console.log(`${subjects[j]} : ${marks[i][j]}`)
    }
    console.log("\n")
}
