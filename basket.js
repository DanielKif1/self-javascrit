//example data
const banana = {
    barcode: 780,
    price: 10,
};
const orange = {
    barcode: 560,
    price: 11,
};

const apple = {
    barcode: 123,
    price : 7,
};

const kiwi = {
    barcode : 234,
    price : 10,

};

const mango = {
    barcode : 340,
    price : 21,
};

// example of product catalog
 
const catalogue = [banana , orange , apple , kiwi , mango];
const basket = [];

 function scanItem(barcodeNumber){

//function style
  const found = catalogue.find((item)  => {

       if(item.barcode === barcodeNumber){
         
        return true;
       }
  });
  return found;
}

//function to  addItems

function addItemToBasket(item){
    const b = basket.push(item);

    return b;
}

//function to get the total 
 
function getBasketTotal(){
   console.log(basket);


   //functional method
   return basket.reduce( (accumulator , currentValue ) => {


    return accumulator + currentValue.price;
   },0)
   
  //procedural method
/*let total = 0;
  for(let item of basket){
    total = total.item.price;
  }

  return total;
  */
}

function removeItemBaket(productToremove){


    const IndexToRremove = basket.indexOf(productToremove);

    return basket.splice(IndexToRremove,1);
}

module.exports = { scanItem ,addItemToBasket, basket,getBasketTotal,removeItemBaket}; 