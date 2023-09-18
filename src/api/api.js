const productItems = [
  
  
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "TShirt",
      price: 1200,
      rating: 2,
      category: "MensWear",
    },
    
    {
      id: 14,
      image:
        "https://images.unsplash.com/photo-1571380401583-72ca84994796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Iphone 6",
      price: 40000,
      rating: 2,
      category: "Mobile",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1622445275649-b1922cc3e837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "TShirt",
      price: 6000,
      rating: 3,
      category: "WomensWear",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJvdXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      name: "Trouser",
      price: 8000,
      rating: 3,
      category: "MensWear",
    },
    {
      id: 5,
      image:
        "https://plus.unsplash.com/premium_photo-1673758901405-32f0a6f625d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRyb3VzZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "Top",
      price: 1000,
      rating: 3,
      category: "WomensWear",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyb3VzZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "Jeans",
      price: 16000,
      rating: 3,
      category: "WomensWear",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "Shirt",
      price: 1900,
      rating: 4,
      category: "MensWear",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Shirt",
      price: 5000,
      rating: 2,
      category: "MensWear",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Iphone",
      price: 70000,
      rating: 5,
      category: "Mobile",
    },
      {
        id: 10,
        image:
          "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        name: "Bata shoes",
        price: 17000,
        rating: 5,
        category: "FootWear",
      },
      {
        id: 11,
        image:
          "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlZnJpZ2VyYXRvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Whirlpool Refrigerator",
        price: 37000,
        rating: 5,
        category: "Electronics",
      },
      {
        id: 12,
        image:
          "https://plus.unsplash.com/premium_photo-1661628680845-39b71e9be303?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGtleWJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        name: "Apple Keyboard",
        price: 1500,
        rating: 2,
        category: "Electronics",
      },
      {
        id: 13,
        image:
          "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Woodland shoes",
        price: 1600,
        rating: 3,
        category: "FootWear",
      },
      {
        id: 2,
        image:
          "https://plus.unsplash.com/premium_photo-1682342786341-239a41287013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "TShirt",
        price: 1500,
        rating: 2,
        category: "WomensWear",
      },
      {
        id: 15,
        image:
          "https://media.istockphoto.com/id/182915079/photo/microwave-oven.webp?b=1&s=170667a&w=0&k=20&c=r3WvXvScqbieIMprmT_TcY8lRTzsB64HfAg7MI-UNhA=",
        name: "Philips Oven",
        price: 12000,
        rating: 2,
        category: "Electronics",
      },
      {
        id: 16,
        image:
          "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWxlY3Ryb25pY3MlMjBob21lJTIwYXBwbGlhbmNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Samsung TV",
        price: 32000,
        rating: 3,
        category: "Electronics",
      },
      {
        id: 17,
        image:
          "https://images.unsplash.com/photo-1604837394598-5b700b11f5e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vYmlsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        name: "Iphone 11",
        price: 89000,
        rating: 4,
        category: "Mobile",
      },
      {
        id: 18,
        image:
          "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtleWJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        name: "AOC Keyboard",
        price: 7500,
        rating: 2,
        category: "Electronics",
      },
  ];

  export default productItems;