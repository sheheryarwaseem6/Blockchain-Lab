//make 2 arrays and find second name of an array into another array


let array1 = ["Sheheryar Waseem", "Abdal Shakir", "Hamza Ilyas"]
let array2=["Shakir", "Ilyas","Waseem"]
let newArray;

array1.forEach((element, index) => {
    array2.forEach((item)=>{
        newArray = element.split(" ")
        if (newArray[1] === item) {
            console.log(`${item} is the father name of ${element} found at the indes number ${index}`)
            
        }

        
    })
    
});