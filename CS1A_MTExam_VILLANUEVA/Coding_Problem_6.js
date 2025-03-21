let createList = prompt("Do you want to create a grocery list? (y/n)").toLowerCase();

if (createList === "y") {
    let groceryList = []; 
    let itemCount = Number(prompt("How many items do you want to add?")); 
    for (let i = 0; i < itemCount; i++) {
        let item = prompt(`Enter item ${i + 1}:`);
        groceryList.push(item); 
    }

    
    let groceryList_Sort = [...groceryList].sort(); 
    let groceryList_Reverse = [...groceryList].reverse(); 

   
    alert(`Grocery List: ${groceryList.join(", ")}`);
    alert(`Sorted List: ${groceryList_Sort.join(", ")}`);
    alert(`Reversed List: ${groceryList_Reverse.join(", ")}`);
}
