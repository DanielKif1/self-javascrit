const { scanItem, addItemToBasket, basket ,getBasketTotal, removeItemBaket } = require("../basket");

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

// example of products catalog
 
const items = [banana , orange , apple , kiwi , mango];

//jest 

describe("Shopping basket", ()=> {

    it("It should return the barcode and the price items", () => {

        const resultItem = scanItem(340); //exercise step
        expect(resultItem).toEqual(mango); // verifacation step

    })


   it("it should add the items to the basket", () =>{

    addItemToBasket(banana);
    expect(basket).toContain(banana);
   }) ;


   it("calculate the total price in the  basket" , () => {

     addItemToBasket(kiwi);
     const total = addItemToBasket();
     expect(total).toBe(20); // banana+ kiwi

   });

   it("it should remove the item in the basket",() =>{

      removeItemBaket(banana);
      expect(basket).not.toContain(banana);

   })


});


