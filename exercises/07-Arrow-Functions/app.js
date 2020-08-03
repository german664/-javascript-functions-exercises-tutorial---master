
   // From this line up Do not change code below
   let str = "John";
   const rapid = (string) => {
       let newString = [];
       for(let i=0; i < string.length; i++){
           if (string[i].toLowerCase() !== 'a' && string[i].toLowerCase() !== 'e' && string[i].toLowerCase() !== 'i' && string[i].toLowerCase() !== 'o' && string[i].toLowerCase() !== 'u') {
             newString.push(string[i])  
           }
       }
       return newString.join('').toUpperCase();
   }
   console.log(rapid(str));