const pizzaswings = [
  {
    name: "Pepperoni Pizza",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 12,
        medium: 15,
        large: 18,
      },
    ],
    category: "Universe Best Pizzas",
    image:
      "https://www.armourmeats.com/wp-content/uploads/2019/01/Quick-and-Easy-Pepperoni-Pizza-700x700.jpg",
    description:
      "Pepperoni pizza is an American pizza variety which includes one of the country's most beloved toppings.",
  },
  {
    name: "New York-Style Pizza",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 12,
        medium: 15,
        large: 18,
      },
    ],
    category: "Universe Best Pizzas",
    image:
      "https://www.biggerbolderbaking.com/wp-content/uploads/2021/02/New-York-Style-Pizza-Thumbnail1-scaled.jpg",
    description:
      "New York-style pizza is a large, thin-crusted pizza that evolved from the classic Neapolitan-style pizza, brought to New York City by Italian immigrants during the early 1900s.",
  },
  {
    name: "Chicago-Style Deep Dish Pizza",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 12,
        medium: 15,
        large: 18,
      },
    ],
    category: "Universe Best Pizzas",
    image:
      "https://cdn.tasteatlas.com/images/dishes/ea31100f001e498ab9878a1f30a743f8.jpg?mw=1300",
    description:
      "Detroit-style pizza is a square pizza characterized by a thick deep-dish crisp crust and inverted toppings.",
  },
  {
    name: "Sicilian Pizza",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 12,
        medium: 15,
        large: 18,
      },
    ],
    category: "Universe Best Pizzas",
    image:
      "https://www.seriouseats.com/thmb/h5FSmhowCRHsbwbWpNUEn0AiT-o=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__05__20160503-spicy-spring-pizza-recipe-37-f00f24dc467f4bad82d5434d7c28c12e.jpg",
    description:
      "This variety of pizza is made by placing the stretched dough on the grates over hot coals, cooking it one side, flipping the dough, and topping it in reverse – cheese first, sauce second.",
  },
  {
    name: "Stromboli",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 12,
        medium: 15,
        large: 18,
      },
    ],
    category: "Universe Best Pizzas",
    image:
      "http://irepo.primecp.com/2018/09/386280/Italian-Hoagie-Stromboli_ExtraLarge1000_ID-2906604.jpg?v=2906604",
    description:
      "The American stromboli is a savory type of turnover filled with classic pizza ingredients: mozzarella or other types of cheese, Italian meats like salami, pepperoni, bresaola, and capocollo, and sometimes even vegetables.",
  },
  {
    name: "Pizza al padellino",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 12,
        medium: 15,
        large: 18,
      },
    ],
    category: "Universe Best Pizzas",
    image:
      "https://www.ricette-bimby.com/wp-content/uploads/2018/10/pizza-al-tegamino-bimby.jpg",
    description:
      "Pizza al padellino is an Italian pizza variety that is baked and served in small, round pans.",
  },
  {
    name: "Tomato Pie",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 12,
        medium: 15,
        large: 18,
      },
    ],
    category: "Universe Best Pizzas",
    image:
      "https://cdn.shopify.com/s/files/1/0205/9582/articles/New_Jersey_resized_1200x800.jpg?v=1600428947",
    description:
      "Tomato pie (New Jersey-style) is a thin-crusted dish that inverts the typical pizza's , sauce on the bottom, cheese on top, formula, and it is basically pizza in reverse. ",
  },
  {
    //------------------------------------------ Veterterian Pizzas ----------------------------------------------------------------------------------------------------

    name: "Margherita Pizza",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 12,
        medium: 15,
        large: 18,
      },
    ],
    category: "Vegeterian Pizzas",
    image:
      "https://cdn.loveandlemons.com/wp-content/uploads/2019/09/margherita-pizza-500x500.jpg",
    description:
      "The pizza base is made by mixing yeast, sugar, olive oil, salt, and all-purpose flour in a big bowl.",
  },
  {
    name: "Jalapeno & Red Paprika Pizza",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 12,
        medium: 15,
        large: 18,
      },
    ],
    category: "Vegeterian Pizzas",
    image: "https://s23209.pcdn.co/wp-content/uploads/2012/05/Jalapeno-Popper-PizzaIMG_1697-600x900.jpg?p=270",
    description:
      "This pizza is amazing and can become more delicious if we will add some more cheese in it. Ingredients are yeast, sugar, olive oil, salt, and all-purpose flour in a big bowl. After mixing all the ingredients, it is baked by adding Jalapeno and Paprika with corns over the cheese layer. The base is made crunchy to give it best taste. It can be made more tasty by sprinkling chili flakes and Oregano as per the taste.",
  },
  {
    name: "Spinach and Onion Pizza",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 12,
        medium: 15,
        large: 18,
      },
    ],
    category: "Vegeterian Pizzas",
    image:
      "https://i1.wp.com/www.myhumblekitchen.com/wp-content/uploads/2013/04/roasted_garlic_pizza.jpg?resize=660%2C463",
    description:
      "This french onion pizza is exactly what we need this December. A simple, no-fuss kind of dinner that could not be more comforting.",
  },
  {
    name: "Orange cheddar and mozzarella Pizza",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 12,
        medium: 15,
        large: 18,
      },
    ],
    category: "Vegeterian Pizzas",
    image: "https://cdn.theatlantic.com/thumbor/QuIN4IpSKkfBbAnzDQYEnKJeszA=/0x52:1000x614/720x405/media/img/mt/2014/10/shutterstock_53696794/original.jpg",
    description:
      "Some people don’t like pizza that have toppings on it they just like cheese, so this pizza is for them which have two different cheese. it is baked by adding cheddar cheese and mozzarella over the pizza base.",
  },
  {
    //------------------------------------------ Famous Wings ----------------------------------------------------------------------------------------------------

    name: "Cha Cha Chicken",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 15,
        medium: 20,
        large: 30,
      },
    ],
    category: "Famous Wings",
    image:
      "https://i.pinimg.com/originals/2b/7d/33/2b7d334a5cc6aa5849ae866f52519e9a.jpg",
    description: " One of the kind Wings for Lunch or just in general.",
  },
  {
    name: "Fire on the Mountain",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 15,
        medium: 20,
        large: 30,
      },
    ],
    category: "Famous Wings",
    image:
      "https://images.squarespace-cdn.com/content/v1/5bfc60f25417fc954a8e4c42/1597173091757-BFXW8V9QEX4RA0778TEC/ke17ZwdGBToddI8pDm48kJ6o_yZYpjQkfZPjF3vytdp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USZYvAGzzady3VC96TTNoNmzRoZPQk3rse1pdh5DxnMvzrD36oouzk3SSBf3bbVhnA/wings-pint-brick-wall-optimized.jpg?format=2500w",
    description:
      "Do you like hot wings? This one will test your passion of hot wings.",
  },
  {
    name: " Turntable Chicken Jazz",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 15,
        medium: 20,
        large: 30,
      },
    ],
    category: "Famous Wings",
    image:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/newscms/2017_04/1190790/new_york_city_turntable_chicken_jazz_chicken_wings-1190790.jpg",
    description: "The best wings for Netflix and Chill",
  },
  {
    name: "Habanero Honey Boneless Wings",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 15,
        medium: 20,
        large: 30,
      },
    ],
    category: "Famous Wings",
    image:
      "https://lilluna.com/wp-content/uploads/2018/05/honey-bbq-wings-resize-5.jpg",
    description: "Boneless wings with honey and life choices. ",
  },
  {
    name: "Jumbo Wings",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 15,
        medium: 20,
        large: 30,
      },
    ],
    category: "Famous Wings",
    image:
      "https://honkytonkbbq.com/wp-content/uploads/2020/10/wings72.jpg",
    description:
      "Are you very angry? Say no more! This caramelized onion wings will do the job.",
  },
  {
    name: "Chimichurri Wings",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 15,
        medium: 20,
        large: 30,
      },
    ],
    category: "Famous Wings ",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/11/3/2/FNK_Argentinian-Chimichurri-Chicken-Wings_s4x3.jpg.rend.hgtvcom.616.462.suffix/1479214836671.jpeg",
    description:
      "Are you a Blogger or Vlogger? This one is a must to share to the World",
  },
  {
    name: "Hibachi Chicken",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 15,
        medium: 20,
        large: 30,
      },
    ],
    category: "Famous Wings",
    image:
      "https://raster-static.postmates.com/?url=com.postmates.img.prod.s3.amazonaws.com%2F012fe34a-b827-48a0-95ab-c99dceb6a633%2Forig.jpg&quality=85&w=500&h=0&mode=auto&format=webp&v=4",
    description:
      "What is better than an original wing? The answer is Hibachi Chicken.",
  },
];

export default pizzaswings;
