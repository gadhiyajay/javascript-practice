// // Object for Product
// // Product Name, Price, Quantity, Discount, 
// // Selling Function that returns Selling Price
// const product = {
    // productName : "PS4",
    // price : 25000,
    // quantity : 1,
    // discount : 30,
    // get SellingPrice(){
    //     return this.price-(this.price*(this.discount/100));
    // }
// }
// console.log("The final price for the PlayStation would be : "+product.SellingPrice)
// function create(productName, price, quantity, discount){
//     return{
//     productName : productName,
//     price : price,
//     quantity : quantity,
//     discount : discount,
//     get SellingPrice(){
//         return this.price-(this.price*(this.discount/100));
//     }
//     }
// }
// const stuf = create("PS4", 20000, 2, 30)
// console.log(stuf)
// console.log(stuf.SellingPrice)
const myobj = {
    "word": "mercy",
    "results": [
      {
        "definition": "a disposition to be kind and forgiving",
        "partOfSpeech": "noun",
        "synonyms": [
          "mercifulness"
        ],
        "typeOf": [
          "humaneness"
        ],
        "hasTypes": [
          "pity",
          "mildness",
          "lenity",
          "leniency",
          "compassion",
          "lenience",
          "kindness",
          "forgivingness"
        ]
      },
      {
        "definition": "leniency and compassion shown toward offenders by a person or agency charged with administering justice",
        "partOfSpeech": "noun",
        "synonyms": [
          "clemency",
          "mercifulness"
        ],
        "typeOf": [
          "leniency",
          "lenience"
        ],
        "hasTypes": [
          "commutation",
          "free pardon",
          "respite",
          "pardon",
          "quarter",
          "amnesty",
          "re-sentencing",
          "reprieve"
        ],
        "examples": [
          "he threw himself on the mercy of the court"
        ]
      },
      {
        "definition": "the feeling that motivates compassion",
        "partOfSpeech": "noun",
        "synonyms": [
          "mercifulness"
        ],
        "typeOf": [
          "compassion",
          "compassionateness"
        ],
        "hasTypes": [
          "forgiveness"
        ]
      },
      {
        "definition": "alleviation of distress; showing great kindness toward the distressed",
        "partOfSpeech": "noun",
        "typeOf": [
          "succour",
          "ministration",
          "relief",
          "succor"
        ],
        "examples": [
          "distributing food and clothing to the flood victims was an act of mercy"
        ]
      },
      {
        "definition": "something for which to be thankful",
        "partOfSpeech": "noun",
        "typeOf": [
          "blessing",
          "boon"
        ],
        "examples": [
          "it was a mercy we got out alive"
        ]
      }
    ],
    "syllables": {
      "count": 2,
      "list": [
        "mer",
        "cy"
      ]
    },
    "pronunciation": {
      "all": "'mɜrsi"
    },
    "frequency": 4.4
  }
  console.log(myobj)
  const list = document.querySelector("ul")
  for (let i=0; i < myobj.results.length;i++)
  {
    const listItem = document.createElement("li");
    listItem.textContent = myobj.results[i].definition;
    list.appendChild(listItem)
  }