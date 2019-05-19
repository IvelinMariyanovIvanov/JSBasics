function solve() {
  let profit = 0;
  let allProductsInStorage = { };

  let allTextAreas = (document.getElementsByTagName('textarea'));
  let allButtons = document.getElementsByTagName('button');
  let loadBtn = allButtons[0];
  let buyBtn = allButtons[1];
  let endDayBtn = allButtons[2];
  let result = allTextAreas[2];

  loadBtn.addEventListener('click', ()=> {
    let loadAreaProducts = JSON.parse(document.getElementsByTagName('textarea')[0].value);

    loadAreaProducts.forEach(product => {
      if(!allProductsInStorage.hasOwnProperty(product.name)){
        allProductsInStorage[product.name] = {
          price : product.price,
          quantity : product.quantity
        }
      } else{
        allProductsInStorage[product.name] = {
          price : product.price,
          quantity : allProductsInStorage[product.name].quantity + product.quantity
        }
      }
    });

    console.log(allProductsInStorage);
    
   for (let property in allProductsInStorage) {
    let quantity = allProductsInStorage[property].quantity;
    let name = property;
    let price = allProductsInStorage[property].price;

    result.textContent += `Successfully added ${quantity} ${name}. Price: ${price}` + "\n";
   }
  });

  buyBtn.addEventListener('click', () => {
    let buyProduct = JSON.parse(allTextAreas[1].value);
  
    if(allProductsInStorage.hasOwnProperty(buyProduct.name) && allProductsInStorage[buyProduct.name].quantity >= buyProduct.quantity){
      allProductsInStorage[buyProduct.name].quantity -= buyProduct.quantity;
      profit += Number(buyProduct.price) * Number(buyProduct.quantity);
      result.textContent += `${buyProduct.quantity} ${buyProduct.name} sold for ${buyProduct.quantity * buyProduct.price}. \n`
    } else {
      result.textContent += 'Cannot complete order.' +'\n';
    }
  });

  endDayBtn.addEventListener('click', ()=> {
    result.textContent += `Profit: ${profit.toFixed(2)}`;
  });
 


  let buyProductsArea = allTextAreas[1].value;
  let logAreae = allTextAreas[2];
 
}

