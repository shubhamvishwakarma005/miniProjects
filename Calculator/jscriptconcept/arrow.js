const person ={
    name:'shubham',
    age:22,
    city:'mumbai',
    hobbies:["coding","reading books","playing"],
    playhobbies: function(){
        this.hobbies.forEach((hobby) => {
            console.log(this.name + "likes" + hobby);
        });
    }
}

person.playhobbies();


// const hobbies =["coding", "reading", "singing", "playing", "writing"]

// hobbies.forEach(hobby => {
//     console.log(hobby)
// });