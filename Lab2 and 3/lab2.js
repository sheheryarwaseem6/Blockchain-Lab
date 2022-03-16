// array= [1,2,3,["sheri","Hamza","Abdal"],5]

// array.map((element, index) => {
//     console.log(element)
//     console.log(index)
// });


let students =[
    [
    
        {
            name: "Yahya",
            fatherName:"khan",
            course:"eng",
            marks:57,
            attendance:85
        },
        {
            name: "Hussain",
            fatherName:"Ali",
            course:"eng",
            marks:90,
            attendance:75
        },
        {
            name: "Abu Bakr",
            fatherName:"Khan",
            course:"eng",
            marks:87,
            attendance:85
        },
    ],
    [
    
        {
            name: "Ahmed",
            fatherName:"khan",
            course:"Blockchain",
            marks:57,
            attendance:85
        },
        {
            name: "Hamza",
            fatherName:"ilyas",
            course:"Blockchain",
            marks:88,
            attendance:75
        },
        {
            name: "yasir",
            fatherName:"arafat",
            course:"Blockchain",
            marks:87,
            attendance:88
        },
    ],


]

students.map((element)=>{
    return element.map((item)=>{
        if(item.marks <85){
            console.log(`dear ${item.name} s/o ${item.fatherName} you're fail in ${item.course}! you need atleast 85 marks`)
        }
        else if(item.attendance < 85){
            console.log(`dear ${item.name} s/o ${item.fatherName} you're faiLED due to attendance`)
        }
        else{
            console.log(`dear ${item.name} s/o ${item.fatherName} COngratulations You're Pass in ${item.course} `)
        }
    })
})
