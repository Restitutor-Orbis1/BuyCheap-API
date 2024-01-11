const app = require('express')()
const bodyParser = require('body-parser')

app.use(bodyParser.json()) // for parsing application/json


const port = 8000

const items = [
  {
    "name": "onion",
    "price": 2.99,
    "store": "Marjane"
  },
  {
    "name": "onion",
    "price": 3.49,
    "store": "Carrefour"
  },
  {
    "name": "onion",
    "price": 2.79,
    "store": "Aswak Assalam"
  },
  {
    "name": "onion",
    "price": 3.19,
    "store": "Label'Vie"
  },
  {
    "name": "onion",
    "price": 2.89,
    "store": "Acima"
  },
  {
    "name": "onion",
    "price": 3.99,
    "store": "Marjane"
  },
  {
    "name": "tomato",
    "price": 6.99,
    "store": "Acima"
  },
  {
    "name": "tomato",
    "price": 5.99,
    "store": "Metro"
  },
  {
    "name": "tomato",
    "price": 7.49,
    "store": "BIM"
  },
  {
    "name": "tomato",
    "price": 6.49,
    "store": "Super U"
  },
  {
    "name": "tomato",
    "price": 5.79,
    "store": "Marjane"
  },
  {
    "name": "tomato",
    "price": 6.29,
    "store": "Carrefour"
  }
]
app.get("/",(req,res)=>{
  items.sort(function(a, b) {
    // Compare 'name' properties alphabetically
    var nameComparison = a.name.localeCompare(b.name);
  
    // If 'name' properties are equal, compare 'age' properties
    if (nameComparison === 0) {
      return a.price - b.price;
    }
  
    return nameComparison;
  });  
  return res.json(items
      )
})

items.sort(function(a, b) {
  // Compare 'name' properties alphabetically
  var nameComparison = a.name.localeCompare(b.name);

  // If 'name' properties are equal, compare 'age' properties
  if (nameComparison === 0) {
    return a.age - b.age;
  }

  return nameComparison;
});

app.listen(port,()=>{
    console.log("i am listening !!!!")
})


