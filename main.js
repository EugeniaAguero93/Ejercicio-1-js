const arrPizzaIngredients=["Harina", "Levadura", "Aceite", "Agua", "Sal", "Tomate", "Aceitunas", "Queso", "Palmitos", "Jamon"];

function iterarIngredients (arrPizzaIngredients){
    let arrPares = [] ;
    let arrImpares =[];
    for (let i = 0; i < arrPizzaIngredients.length; i++) {
    console.log(i,arrPizzaIngredients[i],arrPizzaIngredients[i].length,arrPizzaIngredients[i].length%2,arrPizzaIngredients[i].length%2===0);

            if (arrPizzaIngredients[i].length%2===0) {
                arrPares.push(arrPizzaIngredients[i]);                
            }else{
                arrImpares.push(arrPizzaIngredients[i]);
            }
        }
        console.log(`Los ingredientes pares son:  ${arrPares}\n`, `Los ingredientes impares son: ${arrImpares}`);
        
}
iterarIngredients(arrPizzaIngredients)
