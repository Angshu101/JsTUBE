//Assign Different role using function

// function AssignedRole(name,role){
// switch (role) {
//     case "admin":
//         return `${name} is a admin with all access `;
//         break; //its not necessary because in previous line return is present
//     case "subadmin":
//         return `${name} is a admin with  access to delete and add courses`;
//         break; //its not necessary because in previous line return is present
//     case "testprep":
//         return `${name} can acces only test related product`;
//         break; //its not necessary because in previous line return is present
//     default:
//         return `${name} is only a tour user with no acces`;
//         break;
// }
// }
//Below is the example of funtional programming that's a key feature of javascriptlanguage and gets more complex later we can assign funtion to a variable in JS HOw cool is that and Also Something called arrow funtion like without writting function (name....) we can write (name,..)=>
var AssignedRole= (name,role)=>{
    switch (role) {
        case "admin":
            return `${name} is a admin with all access `;
            break; //its not necessary because in previous line return is present
        case "subadmin":
            return `${name} is a admin with  access to delete and add courses`;
            break; //its not necessary because in previous line return is present
        case "testprep":
            return `${name} can acces only test related product`;
            break; //its not necessary because in previous line return is present
        default:
            return `${name} is only a tour user with no acces`;
            break;
    }
    }
console.log(AssignedRole("Angshu","admin"));
console.log(AssignedRole("Rohan","subadmin"));
console.log(AssignedRole("Shayak","user"));
console.log(AssignedRole("Ritik","admin"));
console.log(AssignedRole("Sanjay","testprep"));
