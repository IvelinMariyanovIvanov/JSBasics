function solve() {

    let productsDivArr = Array.from(document.getElementsByClassName('product'));
    let textArea = document.getElementsByTagName('textarea')[0];
    let productsList = [];
  
    productsDivArr.forEach(productDiv => {

       let addBtn= productDiv.children[3];

       addBtn.addEventListener('click', () => {
         let name = productDiv.children[1].textContent;
         let price = Number(productDiv.children[2].textContent.split(' ')[1]);

         let product = {name, price};
         productsList.push(product);
         
         textArea.textContent += `Added ${name} for ${price} to the cart\n`;

       });
    });
   
   let buyBtn = document.getElementById('exercise').lastElementChild;
   buyBtn.addEventListener('click', buy);

   function buy(){
      let distinctProductList = productsList.map(p=>p.name).filter((element, index, arr)=> {
         if(arr.indexOf(element) === index){
            return element;
         }
      });

      let totalPrice = productsList.map(p => p.price).reduce((a,b) => a+b);
      let price = (totalPrice).toFixed(2);
      textArea.textContent += `You bought ${distinctProductList.join(', ')} for ${price}.`;
   }
    
}










// let distinctProducts = productsList.map(p => p.name).filter((product, index, arr) => {
//     if(arr.indexOf(product) === index){
//         return product;
//     }
// });

// totalPrice = productsList.map(p =>p.price).reduce((a, b) => {return a+ b}).toFixed(2);

// textArea.textContent += `You bought ${distinctProducts.join(', ')} for ${totalPrice} \n`;