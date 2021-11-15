//commit js exercise 14

const pets = ['cat', 'dog', 'rat'];

let pluralPets =[]

pets.forEach((p)=>{
    p = p+'s';
    pluralPets.push(p)
})

console.log(pluralPets)