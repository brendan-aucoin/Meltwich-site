$(document).ready(function(){
    addMenu();
});
function addMenu(){
   const menuContainer = document.getElementById("menu-container");
   for(let i =0; i < foodSections.length;i++){
       menuContainer.innerHTML += `<h2 class = "food-menu-title">${foodSections[i].title} </h2><hr>`;

       menuContainer.innerHTML += `<section class="food-menu" id = "food-menu-section-${i}">`;
       //for each individual item array
       foodSections[i].items.forEach(item =>{
           document.getElementById(`food-menu-section-${i}`).innerHTML += `<div class = "food-menu-item">
           <h3>${item.name}</h3>
           <p>${item.ingredients}</p>
           <p class = "food-price">${item.price} </p>
           </div>`;
       });
       menuContainer.innerHTML += `</section>`;
   }
}
//the array of sections for the food menu
const foodSections = [
    // the elements consist of an object with a title and an array of items
    {
        title:"Burgers",
        // the array of items consist of objects containing all the specific information for each item
        items:[
            {
                name:"The Standard Burger",
                ingredients:"American Cheese",
                price:"$9.99"
            },
            {
                name:"Double Standard",
                ingredients:"Double the Meat & Cheese",
                price:"$13.99"
            },
            {
                name:"Smokey Banquet Burger",
                ingredients:"Smoked Cheddar, Hickory Smoked Bacon",
                price:"$13.99"
            },
            {
                name:"Crispy Chicken Burger",
                ingredients:"American Cheese, Teriyaki Grilled Onion, Siracha Slaw",
                price:"$10.00"
            }
        ]
    },
    {
        title:"Grilled Cheese",
        items:[
            {
                name:"Guac & Roll",
                ingredients:"Jalapeno Havarti, Smashed Avacodo & Tomato Corn Salsa",
                price:"$6.99"
            },
            {
                name:"Mac Attack",
                ingredients:"Cheddar, Mac & Cheese, Hickory Smoked Bacon, Ketchup-Siracha Drizze",
                price:"$7.99"
            },
            {
                name:"Chipoltle Tuna Melt",
                ingredients:"Jalapeno Havarti, Tomato Corn Salsa, Lettuce",
                price:"$6.99"
            },
            {
                name:"Meltwich Mushroom Melt",
                ingredients:"Mozzarella, Teriyaki Grilled Muchroom & Onion, Siracha Slaw, Mayo",
                price:"$10.00"
            },
            {
                name:"Southern Fried Chicken Melt",
                ingredients:"American & Cheddar Cheese, Chipotle, Buttermilk Dill, Tomato Corn Salsa, Pickle, Lettuce",
                price:"$11.99"
            },
            {
                name:"Bacon Avacodo",
                ingredients:"Cheddar, Tomator Corn Salsa, Lettuce, Chipotle",
                price:"$7.00"
            },
            {
                name:"Tattooed Chicken Club",
                ingredients:"Cheddar, Grilled Chicken Breast, Hickory Smoked Bacon, Tomato, Lettuc, Pesto Aioli",
                price:"$9.99"
            },
            {
                name:"The Godfather",
                ingredients:"Mozzarella, Grilled Chicken Breast, Prosciutto, Tomato, Grilled Onion, Pesto Aioli & Balsamic Glaze",
                price:"$12.75"
            },
            {
                name:"The Big Melt",
                ingredients:"Our Standard Buger on pressed Grilled Cheese Buns",
                price:"$14.00"
            },
            {
                name:"The Monster Melt",
                ingredients:"Our Standard Burger with Mac & Cheese, Hickory Smoked Bacon on Pressed Grilled Cheese Buns",
                price:"$14.50"
            }
        ]
    },
    
];

