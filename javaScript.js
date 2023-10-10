// Prompt the user to enter a list of froyo flavor.
const userInputString = prompt(
    "///////////// Menu ///////////////\n" + 
    "Vanilla\nStrawberry\nCoffee\n" +
    "Please enter a list of comma-separated froyo flavors: ",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
  // Split the user input into an array of flavors
  const flavorsArray = userInputString.split(',');
  console.table(flavorsArray)

  //listing how many of each flavor they have ordered
  
   console.table(countFlavors(flavorsArray));

   function countFlavors(flavorsArr) {
    const flavors = {
        vanilla: 0,
        strawberry: 0,
        coffee: 0,
       };  
    for(let i=0; i<flavorsArr.length; i++){
        if(flavorsArr[i]==="vanilla"){
            flavors.vanilla += 1
        }
        else if(flavorsArr[i]==="strawberry"){
            flavors.strawberry += 1
        }
        else if(flavorsArr[i]==="coffee"){
            flavors.coffee += 1
        } 
       }
    return flavors
   }
  