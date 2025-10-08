import { image } from "framer-motion/client"

export const Categories = [
  {
    title: "Sarees",
    slug: "sarees",
    image: "https://www.taneira.com/on/demandware.static/-/Sites-Taneira-Library/default/dw17214a7a/HomePage/ShopByCategory/Sarees_003_M.png",
  },
  {
    title: "Kurtas",
    slug: "kurtas",
    image: "https://www.taneira.com/on/demandware.static/-/Sites-Taneira-Library/default/dwfb416bed/HomePage/ShopByCategory/Kurtas_003_M.png",
  },
  {
    title: "Short Tops",
    slug: "short-tops",
    image: "https://www.taneira.com/on/demandware.static/-/Sites-Taneira-Library/default/dw1cd25b1b/HomePage/ShopByCategory/ShortTops_003_M.png",
  },
  {
    title: "Lehengas",
    slug: "lehengas",
    image: "https://www.taneira.com/on/demandware.static/-/Sites-Taneira-Library/default/dw8d3e577f/HomePage/ShopByCategory/Lehengas_003_M.png",
  },


]
export const occasions = [
  {
    title: "Formal Wear",
    slug: "sarees",
    image: "https://www.taneira.com/on/demandware.static/-/Sites-Taneira-Library/default/dw9904c422/HomePage/ShopByOccasion/new/Shop%20By%20Occassion_HM7.jpg"
  },
  {
    title: "Casual Wear",
    slug: "kurtas",
    image: "https://www.taneira.com/on/demandware.static/-/Sites-Taneira-Library/default/dw7007b33c/HomePage/ShopByOccasion/new/Shop%20By%20Occassion_HM6.jpg"
  },
  {
    title: "Festive Wear",
    slug: "short-tops",
    image: "https://www.taneira.com/on/demandware.static/-/Sites-Taneira-Library/default/dwbb0c965a/HomePage/ShopByOccasion/new/Shop%20By%20Occassion_HM8.jpg"
  },
  {
    title: "Reception Ready",
    slug: "lehengas",
    image: "https://www.taneira.com/on/demandware.static/-/Sites-Taneira-Library/default/dw86f4f2d7/HomePage/ShopByOccasion/new/Shop%20By%20Occassion_HM3.jpg"
  },
  // {
  //     title: "Mehandi Magic",
  //     slug: "blouses",
  //     image: "https://www.taneira.com/on/demandware.static/-/Sites-Taneira-Library/default/dw1baf597f/HomePage/ShopByOccasion/new/Shop%20By%20Occassion_HM2.jpg"
  // },

]


export const products = [
  {
    id: 1,
    title: "Dark Wine Maheshwari Silk Cotton Handloom Saree",
    category: "sarees",
    price: 4500,
    minimumOrderQuanty: [{ qty: 1, price: 999 },],
    sizes: [{ size: "12*18", price: 999 }],
    colors: ["red", "black"],
    brand: "Thenmozhi Designs",
    video: "/videos/product1.mp4",
    images: [
      "https://thenmozhidesigns.com/cdn/shop/files/3S2A2614.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/3S2A2618.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/3S2A2636.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/3S2A2626.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/3S2A2637.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/3S2A2649.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/3S2A2652.jpg"
    ],
    discount: 15,
    description: "Elevate your ethnic wardrobe with this Dark Wine Maheshwari Silk Cotton Handloom Saree by Thenmozhi Designs. Crafted from premium silk cotton fabric, this handloom saree beautifully blends traditional craftsmanship with modern elegance. The rich dark wine shade, adorned with intricate block prints and faux zari, makes it perfect for weddings, festive wear, and special occasions. Lightweight yet luxurious, this saree drapes gracefully and ensures all-day comfort. It comes with an unstitched pink blouse piece (70 cm x 1.1 m) that complements the saree’s design. A must-have silk cotton saree for women who love authentic handloom sarees with a touch of sophistication.",
    product_specs: {
      "Category": "Saree",
      "Fabrics": "Silk Cotton",
      "Origin": "Rajasthan",
      "Occasion": "Festive Wear",
      "Craft": "Block Printed",
      "Blouse Type": "Unstitched Blouse Piece",
      "Blouse Color": "Pink",
      "Blouse Dimension": "70 cm x 1.1 m",
      "Color": "Pink",
      "Zari": "Faux Zari",
      "Wash Care": "Dry Clean"
    },
    rating: 4.5,
    reviews: [
      {
        username: "Ashra Ashick",
        rating: 4,
        reviewTitle: "Red linen saree",
        comment: "Amazing ..color and the texture is stunning .. easy to drape .. having long length .. very breezy and of high quality.",
        date: "08/29/2025"
      },
      {
        username: "Meera Nair",
        rating: 5,
        reviewTitle: "Elegant Kanjivaram Silk",
        comment: "Absolutely beautiful saree, the zari work is exquisite. Perfect for weddings and festivals. Got lots of compliments!",
        date: "08/27/2025"
      },
      {
        username: "Priya Sharma",
        rating: 3,
        reviewTitle: "Cotton Handloom Saree",
        comment: "Fabric is soft and comfortable for daily wear but the color is slightly lighter than shown in the picture.",
        date: "08/25/2025"
      },
      {
        username: "Sana Khan",
        rating: 5,
        reviewTitle: "Designer Georgette Saree",
        comment: "Loved the flowy material and the embroidery is very fine. Easy to drape and looks very stylish.",
        date: "08/20/2025"
      },
      {
        username: "Lakshmi Iyer",
        rating: 4,
        reviewTitle: "Traditional Banarasi Saree",
        comment: "Rich fabric and intricate golden work. A bit heavy but that’s expected for Banarasi. Totally worth the price!",
        date: "08/18/2025"
      },
      {
        username: "Neha Verma",
        rating: 2,
        reviewTitle: "Printed Chiffon Saree",
        comment: "The print is nice but the fabric quality was not as expected. Feels a bit flimsy.",
        date: "08/15/2025"
      }
    ],
    sku: "MH-DARKWINEMAHESHWARI-109",
    availabilityStatus: "In stock",
    stock: 10,
    shippingInformation: "Ships in 1 week",
    returnPolicy: "7 day return",
    updatedAt: "2025-09-30T08:00:00.000Z",
    sales: 150,
    isTrending: true
  },
  {
    id: 2,
    title: "Red Zari Checked Chettinad Saree",
    category: "sarees",
    brand: "Thenmozhi Designs",
    video: "/videos/product2.mp4",
    images: [
      "https://thenmozhidesigns.com/cdn/shop/files/RedzaricheckedChettinadsaree_1.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/RedzaricheckedChettinadsaree_2.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/RedzaricheckedChettinadsaree_4.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/RedzaricheckedChettinadsaree_5.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/RedzaricheckedChettinadsaree_6.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/RedzaricheckedChettinadsaree_3.jpg"
    ]
    ,
    price: 4500,
    discount: 15,
    description: "Elevate your ethnic wardrobe with this Dark Wine Maheshwari Silk Cotton Handloom Saree by Thenmozhi Designs. Crafted from premium silk cotton fabric, this handloom saree beautifully blends traditional craftsmanship with modern elegance. The rich dark wine shade, adorned with intricate block prints and faux zari, makes it perfect for weddings, festive wear, and special occasions. Lightweight yet luxurious, this saree drapes gracefully and ensures all-day comfort. It comes with an unstitched pink blouse piece (70 cm x 1.1 m) that complements the saree’s design. A must-have silk cotton saree for women who love authentic handloom sarees with a touch of sophistication.",
    product_specs: {
      "Category": "Saree",
      "Fabrics": "Silk Cotton",
      "Origin": "Rajasthan",
      "Occasion": "Festive Wear",
      "Craft": "Block Printed",
      "Blouse Type": "Unstitched Blouse Piece",
      "Blouse Color": "Pink",
      "Blouse Dimension": "70 cm x 1.1 m",
      "Color": "Pink",
      "Zari": "Faux Zari",
      "Wash Care": "Dry Clean"
    },
    rating: 3.8,
    reviews: [
      {
        username: "Ashra Ashick",
        rating: 4,
        reviewTitle: "Red linen saree",
        comment: "Amazing ..color and the texture is stunning .. easy to drape .. having long length .. very breezy and of high quality.",
        date: "08/29/2025"
      },
      {
        username: "Meera Nair",
        rating: 5,
        reviewTitle: "Elegant Kanjivaram Silk",
        comment: "Absolutely beautiful saree, the zari work is exquisite. Perfect for weddings and festivals. Got lots of compliments!",
        date: "08/27/2025"
      },
      {
        username: "Priya Sharma",
        rating: 3,
        reviewTitle: "Cotton Handloom Saree",
        comment: "Fabric is soft and comfortable for daily wear but the color is slightly lighter than shown in the picture.",
        date: "08/25/2025"
      },
      {
        username: "Sana Khan",
        rating: 5,
        reviewTitle: "Designer Georgette Saree",
        comment: "Loved the flowy material and the embroidery is very fine. Easy to drape and looks very stylish.",
        date: "08/20/2025"
      },
      {
        username: "Lakshmi Iyer",
        rating: 4,
        reviewTitle: "Traditional Banarasi Saree",
        comment: "Rich fabric and intricate golden work. A bit heavy but that’s expected for Banarasi. Totally worth the price!",
        date: "08/18/2025"
      },
      {
        username: "Neha Verma",
        rating: 2,
        reviewTitle: "Printed Chiffon Saree",
        comment: "The print is nice but the fabric quality was not as expected. Feels a bit flimsy.",
        date: "08/15/2025"
      }
    ],
    sku: "MH-DARKWINEMAHESHWARI-109",
    availabilityStatus: "In stock",
    stock: 20,
    shippingInformation: "Estimated delivery in 3-4 days",
    returnPolicy: "7 day return",
    updatedAt: "2025-09-29T10:15:00.000Z",
    sales: 120,
    isTrending: false
  },
  {
    id: 3,
    title: "Black and Green Chettinad Cotton Saree",
    category: "sarees",
    brand: "Thenmozhi Designs",
    video: "/videos/product3.mp4",
    images: [
      "https://thenmozhidesigns.com/cdn/shop/files/BlackandgreenChettinadcottonsaree_5.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/BlackandgreenChettinadcottonsaree_4.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/BlackandgreenChettinadcottonsaree_6.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/BlackandgreenChettinadcottonsaree_1.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/BlackandgreenChettinadcottonsaree_2.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/BlackandgreenChettinadcottonsaree_3.jpg"
    ],
    price: 4500,
    discount: 15,
    description: "Elevate your ethnic wardrobe with this Dark Wine Maheshwari Silk Cotton Handloom Saree by Thenmozhi Designs. Crafted from premium silk cotton fabric, this handloom saree beautifully blends traditional craftsmanship with modern elegance. The rich dark wine shade, adorned with intricate block prints and faux zari, makes it perfect for weddings, festive wear, and special occasions. Lightweight yet luxurious, this saree drapes gracefully and ensures all-day comfort. It comes with an unstitched pink blouse piece (70 cm x 1.1 m) that complements the saree’s design. A must-have silk cotton saree for women who love authentic handloom sarees with a touch of sophistication.",
    product_specs: {
      "Category": "Saree",
      "Fabrics": "Silk Cotton",
      "Origin": "Rajasthan",
      "Occasion": "Festive Wear",
      "Craft": "Block Printed",
      "Blouse Type": "Unstitched Blouse Piece",
      "Blouse Color": "Pink",
      "Blouse Dimension": "70 cm x 1.1 m",
      "Color": "Pink",
      "Zari": "Faux Zari",
      "Wash Care": "Dry Clean"
    },
    rating: 4.5,
    reviews: [
      {
        username: "Ashra Ashick",
        rating: 4,
        reviewTitle: "Red linen saree",
        comment: "Amazing ..color and the texture is stunning .. easy to drape .. having long length .. very breezy and of high quality.",
        date: "08/29/2025"
      },
      {
        username: "Meera Nair",
        rating: 5,
        reviewTitle: "Elegant Kanjivaram Silk",
        comment: "Absolutely beautiful saree, the zari work is exquisite. Perfect for weddings and festivals. Got lots of compliments!",
        date: "08/27/2025"
      },
      {
        username: "Priya Sharma",
        rating: 3,
        reviewTitle: "Cotton Handloom Saree",
        comment: "Fabric is soft and comfortable for daily wear but the color is slightly lighter than shown in the picture.",
        date: "08/25/2025"
      },
      {
        username: "Sana Khan",
        rating: 5,
        reviewTitle: "Designer Georgette Saree",
        comment: "Loved the flowy material and the embroidery is very fine. Easy to drape and looks very stylish.",
        date: "08/20/2025"
      },
      {
        username: "Lakshmi Iyer",
        rating: 4,
        reviewTitle: "Traditional Banarasi Saree",
        comment: "Rich fabric and intricate golden work. A bit heavy but that’s expected for Banarasi. Totally worth the price!",
        date: "08/18/2025"
      },
      {
        username: "Neha Verma",
        rating: 2,
        reviewTitle: "Printed Chiffon Saree",
        comment: "The print is nice but the fabric quality was not as expected. Feels a bit flimsy.",
        date: "08/15/2025"
      }
    ],
    sku: "MH-DARKWINEMAHESHWARI-109",
    availabilityStatus: "In stock",
    stock: 10,
    shippingInformation: "Ships in 1 week",
    returnPolicy: "7 day return",
    updatedAt: "2025-09-27T09:00:00.000Z",
    sales: 95,
    isTrending: false
  },
  {
    id: 4,
    title: "Rust Brown Chettinad Cotton Saree",
    category: "sarees",
    brand: "Thenmozhi Designs",
    video: "/videos/product4.mp4",
    images: [
      "https://thenmozhidesigns.com/cdn/shop/files/352A3923.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/352A3920.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/352A3905.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/352A3917.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/352A3883.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/352A3952.jpg"
    ],
    price: 5500,
    discount: 15,
    description: "Elevate your ethnic wardrobe with this Dark Wine Maheshwari Silk Cotton Handloom Saree by Thenmozhi Designs. Crafted from premium silk cotton fabric, this handloom saree beautifully blends traditional craftsmanship with modern elegance. The rich dark wine shade, adorned with intricate block prints and faux zari, makes it perfect for weddings, festive wear, and special occasions. Lightweight yet luxurious, this saree drapes gracefully and ensures all-day comfort. It comes with an unstitched pink blouse piece (70 cm x 1.1 m) that complements the saree’s design. A must-have silk cotton saree for women who love authentic handloom sarees with a touch of sophistication.",
    product_specs: {
      "Category": "Saree",
      "Fabrics": "Silk Cotton",
      "Origin": "Rajasthan",
      "Occasion": "Festive Wear",
      "Craft": "Block Printed",
      "Blouse Type": "Unstitched Blouse Piece",
      "Blouse Color": "Pink",
      "Blouse Dimension": "70 cm x 1.1 m",
      "Color": "Pink",
      "Zari": "Faux Zari",
      "Wash Care": "Dry Clean"
    },
    rating: 4.1,
    reviews: [
      {
        username: "Ashra Ashick",
        rating: 4,
        reviewTitle: "Red linen saree",
        comment: "Amazing ..color and the texture is stunning .. easy to drape .. having long length .. very breezy and of high quality.",
        date: "08/29/2025"
      },
      {
        username: "Meera Nair",
        rating: 5,
        reviewTitle: "Elegant Kanjivaram Silk",
        comment: "Absolutely beautiful saree, the zari work is exquisite. Perfect for weddings and festivals. Got lots of compliments!",
        date: "08/27/2025"
      },
      {
        username: "Priya Sharma",
        rating: 3,
        reviewTitle: "Cotton Handloom Saree",
        comment: "Fabric is soft and comfortable for daily wear but the color is slightly lighter than shown in the picture.",
        date: "08/25/2025"
      },
      {
        username: "Sana Khan",
        rating: 5,
        reviewTitle: "Designer Georgette Saree",
        comment: "Loved the flowy material and the embroidery is very fine. Easy to drape and looks very stylish.",
        date: "08/20/2025"
      },
      {
        username: "Lakshmi Iyer",
        rating: 4,
        reviewTitle: "Traditional Banarasi Saree",
        comment: "Rich fabric and intricate golden work. A bit heavy but that’s expected for Banarasi. Totally worth the price!",
        date: "08/18/2025"
      },
      {
        username: "Neha Verma",
        rating: 2,
        reviewTitle: "Printed Chiffon Saree",
        comment: "The print is nice but the fabric quality was not as expected. Feels a bit flimsy.",
        date: "08/15/2025"
      }
    ],
    sku: "MH-DARKWINEMAHESHWARI-109",
    availabilityStatus: "In stock",
    stock: 10,
    shippingInformation: "Ships in 1 week",
    returnPolicy: "7 day return",
    updatedAt: "2025-09-26T12:45:00.000Z",
    sales: 200,
    isTrending: true
  },
  {
    id: 5,
    title: "Pastel Pistachio Green Floral Block Printed suit set",
    category: "kurtas",
    brand: "Thenmozhi Designs",
    video: "/videos/product5.mp4",
    images: [
      "https://thenmozhidesigns.com/cdn/shop/files/PastelPistachioGreenFloralBlockPrintedsuitset_2.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/PastelPistachioGreenFloralBlockPrintedsuitset_3.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/PastelPistachioGreenFloralBlockPrintedsuitset_4.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/PastelPistachioGreenFloralBlockPrintedsuitset_6.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/PastelPistachioGreenFloralBlockPrintedsuitset_1.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/PastelPistachioGreenFloralBlockPrintedsuitset_5.jpg"
    ]
    ,
    price: 4500,
    discount: 15,
    description: "Elevate your ethnic wardrobe with this Dark Wine Maheshwari Silk Cotton Handloom Saree by Thenmozhi Designs. Crafted from premium silk cotton fabric, this handloom saree beautifully blends traditional craftsmanship with modern elegance. The rich dark wine shade, adorned with intricate block prints and faux zari, makes it perfect for weddings, festive wear, and special occasions. Lightweight yet luxurious, this saree drapes gracefully and ensures all-day comfort. It comes with an unstitched pink blouse piece (70 cm x 1.1 m) that complements the saree’s design. A must-have silk cotton saree for women who love authentic handloom sarees with a touch of sophistication.",
    product_specs: {
      "Category": "Saree",
      "Fabrics": "Silk Cotton",
      "Origin": "Rajasthan",
      "Occasion": "Festive Wear",
      "Craft": "Block Printed",
      "Blouse Type": "Unstitched Blouse Piece",
      "Blouse Color": "Pink",
      "Blouse Dimension": "70 cm x 1.1 m",
      "Color": "Pink",
      "Zari": "Faux Zari",
      "Wash Care": "Dry Clean"
    },
    rating: 4.5,
    reviews: [
      {
        username: "Ashra Ashick",
        rating: 4,
        reviewTitle: "Red linen saree",
        comment: "Amazing ..color and the texture is stunning .. easy to drape .. having long length .. very breezy and of high quality.",
        date: "08/29/2025"
      },
      {
        username: "Meera Nair",
        rating: 5,
        reviewTitle: "Elegant Kanjivaram Silk",
        comment: "Absolutely beautiful saree, the zari work is exquisite. Perfect for weddings and festivals. Got lots of compliments!",
        date: "08/27/2025"
      },
      {
        username: "Priya Sharma",
        rating: 3,
        reviewTitle: "Cotton Handloom Saree",
        comment: "Fabric is soft and comfortable for daily wear but the color is slightly lighter than shown in the picture.",
        date: "08/25/2025"
      },
      {
        username: "Sana Khan",
        rating: 5,
        reviewTitle: "Designer Georgette Saree",
        comment: "Loved the flowy material and the embroidery is very fine. Easy to drape and looks very stylish.",
        date: "08/20/2025"
      },
      {
        username: "Lakshmi Iyer",
        rating: 4,
        reviewTitle: "Traditional Banarasi Saree",
        comment: "Rich fabric and intricate golden work. A bit heavy but that’s expected for Banarasi. Totally worth the price!",
        date: "08/18/2025"
      },
      {
        username: "Neha Verma",
        rating: 2,
        reviewTitle: "Printed Chiffon Saree",
        comment: "The print is nice but the fabric quality was not as expected. Feels a bit flimsy.",
        date: "08/15/2025"
      }
    ],
    sku: "MH-DARKWINEMAHESHWARI-109",
    availabilityStatus: "In stock",
    stock: 10,
    shippingInformation: "Ships in 1 week",
    returnPolicy: "7 day return",
    updatedAt: "2025-09-25T11:20:00.000Z",
    sales: 80,
    isTrending: false
  },
  {
    id: 6,
    title: "Red and white block printed suit set",
    category: "kurtas",
    brand: "Thenmozhi Designs",
    video: "/videos/product6.mp4",
    images: [
      "https://thenmozhidesigns.com/cdn/shop/files/Redandwhiteblockprintedsuitset_2.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/Redandwhiteblockprintedsuitset_1.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/Redandwhiteblockprintedsuitset_3.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/Redandwhiteblockprintedsuitset_6.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/Redandwhiteblockprintedsuitset_5.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/Redandwhiteblockprintedsuitset_4.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/Redandwhiteblockprintedsuitset_7.jpg"
    ],
    price: 4500,
    discount: 15,
    description: "Elevate your ethnic wardrobe with this Dark Wine Maheshwari Silk Cotton Handloom Saree by Thenmozhi Designs. Crafted from premium silk cotton fabric, this handloom saree beautifully blends traditional craftsmanship with modern elegance. The rich dark wine shade, adorned with intricate block prints and faux zari, makes it perfect for weddings, festive wear, and special occasions. Lightweight yet luxurious, this saree drapes gracefully and ensures all-day comfort. It comes with an unstitched pink blouse piece (70 cm x 1.1 m) that complements the saree’s design. A must-have silk cotton saree for women who love authentic handloom sarees with a touch of sophistication.",
    product_specs: {
      "Category": "Saree",
      "Fabrics": "Silk Cotton",
      "Origin": "Rajasthan",
      "Occasion": "Festive Wear",
      "Craft": "Block Printed",
      "Blouse Type": "Unstitched Blouse Piece",
      "Blouse Color": "Pink",
      "Blouse Dimension": "70 cm x 1.1 m",
      "Color": "Pink",
      "Zari": "Faux Zari",
      "Wash Care": "Dry Clean"
    },
    rating: 4.5,
    reviews: [
      {
        username: "Ashra Ashick",
        rating: 4,
        reviewTitle: "Red linen saree",
        comment: "Amazing ..color and the texture is stunning .. easy to drape .. having long length .. very breezy and of high quality.",
        date: "08/29/2025"
      },
      {
        username: "Meera Nair",
        rating: 5,
        reviewTitle: "Elegant Kanjivaram Silk",
        comment: "Absolutely beautiful saree, the zari work is exquisite. Perfect for weddings and festivals. Got lots of compliments!",
        date: "08/27/2025"
      },
      {
        username: "Priya Sharma",
        rating: 3,
        reviewTitle: "Cotton Handloom Saree",
        comment: "Fabric is soft and comfortable for daily wear but the color is slightly lighter than shown in the picture.",
        date: "08/25/2025"
      },
      {
        username: "Sana Khan",
        rating: 5,
        reviewTitle: "Designer Georgette Saree",
        comment: "Loved the flowy material and the embroidery is very fine. Easy to drape and looks very stylish.",
        date: "08/20/2025"
      },
      {
        username: "Lakshmi Iyer",
        rating: 4,
        reviewTitle: "Traditional Banarasi Saree",
        comment: "Rich fabric and intricate golden work. A bit heavy but that’s expected for Banarasi. Totally worth the price!",
        date: "08/18/2025"
      },
      {
        username: "Neha Verma",
        rating: 2,
        reviewTitle: "Printed Chiffon Saree",
        comment: "The print is nice but the fabric quality was not as expected. Feels a bit flimsy.",
        date: "08/15/2025"
      }
    ],
    sku: "MH-DARKWINEMAHESHWARI-109",
    availabilityStatus: "In stock",
    stock: 10,
    shippingInformation: "Ships in 1 week",
    returnPolicy: "7 day return",
    updatedAt: "2025-09-24T15:10:00.000Z",
    sales: 140,
    isTrending: true
  },
  {
    id: 7,
    title: "Light Green Mangalagiri Plain Cotton Saree",
    category: "sarees",
    brand: "Thenmozhi Designs",
    video: "/videos/product7.mp4",
    images: [
      "https://thenmozhidesigns.com/cdn/shop/files/352A1558.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/352A1562.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/352A1590.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/352A1594.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/352A1578.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/352A1574.jpg"
    ],
    price: 4500,
    discount: 15,
    description: "Elevate your ethnic wardrobe with this Dark Wine Maheshwari Silk Cotton Handloom Saree by Thenmozhi Designs. Crafted from premium silk cotton fabric, this handloom saree beautifully blends traditional craftsmanship with modern elegance. The rich dark wine shade, adorned with intricate block prints and faux zari, makes it perfect for weddings, festive wear, and special occasions. Lightweight yet luxurious, this saree drapes gracefully and ensures all-day comfort. It comes with an unstitched pink blouse piece (70 cm x 1.1 m) that complements the saree’s design. A must-have silk cotton saree for women who love authentic handloom sarees with a touch of sophistication.",
    product_specs: {
      "Category": "Saree",
      "Fabrics": "Silk Cotton",
      "Origin": "Rajasthan",
      "Occasion": "Festive Wear",
      "Craft": "Block Printed",
      "Blouse Type": "Unstitched Blouse Piece",
      "Blouse Color": "Pink",
      "Blouse Dimension": "70 cm x 1.1 m",
      "Color": "Pink",
      "Zari": "Faux Zari",
      "Wash Care": "Dry Clean"
    },
    rating: 4.5,
    reviews: [
      {
        username: "Ashra Ashick",
        rating: 4,
        reviewTitle: "Red linen saree",
        comment: "Amazing ..color and the texture is stunning .. easy to drape .. having long length .. very breezy and of high quality.",
        date: "08/29/2025"
      },
      {
        username: "Meera Nair",
        rating: 5,
        reviewTitle: "Elegant Kanjivaram Silk",
        comment: "Absolutely beautiful saree, the zari work is exquisite. Perfect for weddings and festivals. Got lots of compliments!",
        date: "08/27/2025"
      },
      {
        username: "Priya Sharma",
        rating: 3,
        reviewTitle: "Cotton Handloom Saree",
        comment: "Fabric is soft and comfortable for daily wear but the color is slightly lighter than shown in the picture.",
        date: "08/25/2025"
      },
      {
        username: "Sana Khan",
        rating: 5,
        reviewTitle: "Designer Georgette Saree",
        comment: "Loved the flowy material and the embroidery is very fine. Easy to drape and looks very stylish.",
        date: "08/20/2025"
      },
      {
        username: "Lakshmi Iyer",
        rating: 4,
        reviewTitle: "Traditional Banarasi Saree",
        comment: "Rich fabric and intricate golden work. A bit heavy but that’s expected for Banarasi. Totally worth the price!",
        date: "08/18/2025"
      },
      {
        username: "Neha Verma",
        rating: 2,
        reviewTitle: "Printed Chiffon Saree",
        comment: "The print is nice but the fabric quality was not as expected. Feels a bit flimsy.",
        date: "08/15/2025"
      }
    ],
    sku: "MH-DARKWINEMAHESHWARI-109",
    availabilityStatus: "In stock",
    stock: 10,
    shippingInformation: "Ships in 1 week",
    returnPolicy: "7 day return",
    updatedAt: "2025-09-23T08:55:00.000Z",
    sales: 170,
    isTrending: true
  },
  {
    id: 8,
    title: "Kanchi Silk Cotton Violet Saree",
    category: "sarees",
    brand: "Thenmozhi Designs",
    video: "/videos/product8.mp4",
    images: [
      "https://thenmozhidesigns.com/cdn/shop/files/MUKR8168_f75fe734-a073-4c4d-aa65-893fe7818f66.png",
      "https://thenmozhidesigns.com/cdn/shop/files/MUKR8168_bc42380b-7125-4657-9ce9-076b8ab3e58b.png",
      "https://thenmozhidesigns.com/cdn/shop/files/MUKR8187_b41225a5-53b0-4477-a61a-8225048f17ec.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/6.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/MUKR8199_cdddf44d-956a-41ef-8526-66a2b5707bfe.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/MUKR8168.webp",
      "https://thenmozhidesigns.com/cdn/shop/files/8.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/MUKR8192_1.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/MUKR8168_ca68cf49-b402-4b7f-85f4-4269a6c1d676.jpg"
    ],
    price: 4500,
    discount: 15,
    description: "Elevate your ethnic wardrobe with this Dark Wine Maheshwari Silk Cotton Handloom Saree by Thenmozhi Designs. Crafted from premium silk cotton fabric, this handloom saree beautifully blends traditional craftsmanship with modern elegance. The rich dark wine shade, adorned with intricate block prints and faux zari, makes it perfect for weddings, festive wear, and special occasions. Lightweight yet luxurious, this saree drapes gracefully and ensures all-day comfort. It comes with an unstitched pink blouse piece (70 cm x 1.1 m) that complements the saree’s design. A must-have silk cotton saree for women who love authentic handloom sarees with a touch of sophistication.",
    product_specs: {
      "Category": "Saree",
      "Fabrics": "Silk Cotton",
      "Origin": "Rajasthan",
      "Occasion": "Festive Wear",
      "Craft": "Block Printed",
      "Blouse Type": "Unstitched Blouse Piece",
      "Blouse Color": "Pink",
      "Blouse Dimension": "70 cm x 1.1 m",
      "Color": "Pink",
      "Zari": "Faux Zari",
      "Wash Care": "Dry Clean"
    },
    rating: 4.5,
    reviews: [
      {
        username: "Ashra Ashick",
        rating: 4,
        reviewTitle: "Red linen saree",
        comment: "Amazing ..color and the texture is stunning .. easy to drape .. having long length .. very breezy and of high quality.",
        date: "08/29/2025"
      },
      {
        username: "Meera Nair",
        rating: 5,
        reviewTitle: "Elegant Kanjivaram Silk",
        comment: "Absolutely beautiful saree, the zari work is exquisite. Perfect for weddings and festivals. Got lots of compliments!",
        date: "08/27/2025"
      },
      {
        username: "Priya Sharma",
        rating: 3,
        reviewTitle: "Cotton Handloom Saree",
        comment: "Fabric is soft and comfortable for daily wear but the color is slightly lighter than shown in the picture.",
        date: "08/25/2025"
      },
      {
        username: "Sana Khan",
        rating: 5,
        reviewTitle: "Designer Georgette Saree",
        comment: "Loved the flowy material and the embroidery is very fine. Easy to drape and looks very stylish.",
        date: "08/20/2025"
      },
      {
        username: "Lakshmi Iyer",
        rating: 4,
        reviewTitle: "Traditional Banarasi Saree",
        comment: "Rich fabric and intricate golden work. A bit heavy but that’s expected for Banarasi. Totally worth the price!",
        date: "08/18/2025"
      },
      {
        username: "Neha Verma",
        rating: 2,
        reviewTitle: "Printed Chiffon Saree",
        comment: "The print is nice but the fabric quality was not as expected. Feels a bit flimsy.",
        date: "08/15/2025"
      }
    ],
    sku: "MH-DARKWINEMAHESHWARI-109",
    availabilityStatus: "In stock",
    stock: 10,
    shippingInformation: "Ships in 1 week",
    returnPolicy: "7 day return",
    updatedAt: "2025-09-22T13:40:00.000Z",
    sales: 130,
    isTrending: false
  },
  {
    id: 9,
    title: "Light Blue Printed Co-ord Set",
    category: "kurtas",
    brand: "Thenmozhi Designs",
    video: "/videos/product9.mp4",
    images: [
      "https://thenmozhidesigns.com/cdn/shop/files/IMG_9277.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/IMG_9276_dd467481-f706-4520-8a20-697d0a6de3fb.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/IMG_9269.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/IMG_9279.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/IMG_9294.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/IMG_9309.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/IMG_9311.jpg"
    ],
    price: 4500,
    discount: 15,
    description: "Elevate your ethnic wardrobe with this Dark Wine Maheshwari Silk Cotton Handloom Saree by Thenmozhi Designs. Crafted from premium silk cotton fabric, this handloom saree beautifully blends traditional craftsmanship with modern elegance. The rich dark wine shade, adorned with intricate block prints and faux zari, makes it perfect for weddings, festive wear, and special occasions. Lightweight yet luxurious, this saree drapes gracefully and ensures all-day comfort. It comes with an unstitched pink blouse piece (70 cm x 1.1 m) that complements the saree’s design. A must-have silk cotton saree for women who love authentic handloom sarees with a touch of sophistication.",
    product_specs: {
      "Category": "Saree",
      "Fabrics": "Silk Cotton",
      "Origin": "Rajasthan",
      "Occasion": "Festive Wear",
      "Craft": "Block Printed",
      "Blouse Type": "Unstitched Blouse Piece",
      "Blouse Color": "Pink",
      "Blouse Dimension": "70 cm x 1.1 m",
      "Color": "Pink",
      "Zari": "Faux Zari",
      "Wash Care": "Dry Clean"
    },
    rating: 4.5,
    reviews: [
      {
        username: "Ashra Ashick",
        rating: 4,
        reviewTitle: "Red linen saree",
        comment: "Amazing ..color and the texture is stunning .. easy to drape .. having long length .. very breezy and of high quality.",
        date: "08/29/2025"
      },
      {
        username: "Meera Nair",
        rating: 5,
        reviewTitle: "Elegant Kanjivaram Silk",
        comment: "Absolutely beautiful saree, the zari work is exquisite. Perfect for weddings and festivals. Got lots of compliments!",
        date: "08/27/2025"
      },
      {
        username: "Priya Sharma",
        rating: 3,
        reviewTitle: "Cotton Handloom Saree",
        comment: "Fabric is soft and comfortable for daily wear but the color is slightly lighter than shown in the picture.",
        date: "08/25/2025"
      },
      {
        username: "Sana Khan",
        rating: 5,
        reviewTitle: "Designer Georgette Saree",
        comment: "Loved the flowy material and the embroidery is very fine. Easy to drape and looks very stylish.",
        date: "08/20/2025"
      },
      {
        username: "Lakshmi Iyer",
        rating: 4,
        reviewTitle: "Traditional Banarasi Saree",
        comment: "Rich fabric and intricate golden work. A bit heavy but that’s expected for Banarasi. Totally worth the price!",
        date: "08/18/2025"
      },
      {
        username: "Neha Verma",
        rating: 2,
        reviewTitle: "Printed Chiffon Saree",
        comment: "The print is nice but the fabric quality was not as expected. Feels a bit flimsy.",
        date: "08/15/2025"
      }
    ],
    sku: "MH-DARKWINEMAHESHWARI-109",
    availabilityStatus: "In stock",
    stock: 10,
    shippingInformation: "Ships in 1 week",
    returnPolicy: "7 day return",
    updatedAt: "2025-09-24T13:40:00.000Z",
    sales: 130,
    isTrending: false
  },
  {
    id: 10,
    title: "Black & Red Narayanpet Saree",
    category: "sarees",
    brand: "Thenmozhi Designs",
    video: "/videos/product10.mp4",
    images: [
      "https://thenmozhidesigns.com/cdn/shop/files/Black_Narayanpet.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/Black_Narayanpet_Sarees.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/Narayanpet_Saree.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/3S2A9594.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/3S2A9605.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/3S2A9620.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/3S2A9651.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/3S2A9659.jpg",
      "https://thenmozhidesigns.com/cdn/shop/files/3S2A9670.jpg"
    ],
    price: 4500,
    discount: 15,
    description: "Elevate your ethnic wardrobe with this Dark Wine Maheshwari Silk Cotton Handloom Saree by Thenmozhi Designs. Crafted from premium silk cotton fabric, this handloom saree beautifully blends traditional craftsmanship with modern elegance. The rich dark wine shade, adorned with intricate block prints and faux zari, makes it perfect for weddings, festive wear, and special occasions. Lightweight yet luxurious, this saree drapes gracefully and ensures all-day comfort. It comes with an unstitched pink blouse piece (70 cm x 1.1 m) that complements the saree’s design. A must-have silk cotton saree for women who love authentic handloom sarees with a touch of sophistication.",
    product_specs: {
      "Category": "Saree",
      "Fabrics": "Silk Cotton",
      "Origin": "Rajasthan",
      "Occasion": "Festive Wear",
      "Craft": "Block Printed",
      "Blouse Type": "Unstitched Blouse Piece",
      "Blouse Color": "Pink",
      "Blouse Dimension": "70 cm x 1.1 m",
      "Color": "Pink",
      "Zari": "Faux Zari",
      "Wash Care": "Dry Clean"
    },
    rating: 4.5,
    reviews: [
      {
        username: "Ashra Ashick",
        rating: 4,
        reviewTitle: "Red linen saree",
        comment: "Amazing ..color and the texture is stunning .. easy to drape .. having long length .. very breezy and of high quality.",
        date: "08/29/2025"
      },
      {
        username: "Meera Nair",
        rating: 5,
        reviewTitle: "Elegant Kanjivaram Silk",
        comment: "Absolutely beautiful saree, the zari work is exquisite. Perfect for weddings and festivals. Got lots of compliments!",
        date: "08/27/2025"
      },
      {
        username: "Priya Sharma",
        rating: 3,
        reviewTitle: "Cotton Handloom Saree",
        comment: "Fabric is soft and comfortable for daily wear but the color is slightly lighter than shown in the picture.",
        date: "08/25/2025"
      },
      {
        username: "Sana Khan",
        rating: 5,
        reviewTitle: "Designer Georgette Saree",
        comment: "Loved the flowy material and the embroidery is very fine. Easy to drape and looks very stylish.",
        date: "08/20/2025"
      },
      {
        username: "Lakshmi Iyer",
        rating: 4,
        reviewTitle: "Traditional Banarasi Saree",
        comment: "Rich fabric and intricate golden work. A bit heavy but that’s expected for Banarasi. Totally worth the price!",
        date: "08/18/2025"
      },
      {
        username: "Neha Verma",
        rating: 2,
        reviewTitle: "Printed Chiffon Saree",
        comment: "The print is nice but the fabric quality was not as expected. Feels a bit flimsy.",
        date: "08/15/2025"
      }
    ],
    sku: "MH-DARKWINEMAHESHWARI-109",
    availabilityStatus: "In stock",
    stock: 10,
    shippingInformation: "Ships in 1 week",
    returnPolicy: "7 day return",
    updatedAt: "2025-09-22T13:40:00.000Z",
    sales: 230,
    isTrending: true
  },
  {
    "id": 2002,
    "title": "Burnt Orange and Purple Border Chettinad Cotton Blouse",
    "category": "blouse",
    "brand": "Thenmozhi Designs",
    "video": "https://www.instagram.com/reel/DOPyBSCkZe0/",
    "images": [
      "https://thenmozhidesigns.com/cdn/shop/files/BurntorangeandpurpleborderChettinadcottonsaree_1.jpg?v=1758160772&width=800",
      "https://thenmozhidesigns.com/cdn/shop/files/BurntorangeandpurpleborderChettinadcottonsaree_5.jpg?v=1758160772&width=800",
      "https://thenmozhidesigns.com/cdn/shop/files/BurntorangeandpurpleborderChettinadcottonsaree_2.jpg?v=1758160772&width=800"
    ],
    "price": 1299,
    "discount": 10,
    "description": "A beautifully crafted burnt orange and purple border Chettinad cotton blouse from Thenmozhi Designs. Perfect to pair with traditional sarees, this handloom cotton blouse blends vibrant colors with comfort and elegance, suitable for festive wear, casual gatherings, and ethnic occasions.",
    "product_specs": {
      "Category": "Blouse",
      "Fabrics": "Cotton",
      "Origin": "Tamil Nadu",
      "Occasion": "Festive / Casual Wear",
      "Craft": "Handloom",
      "Blouse Type": "Ready-to-wear",
      "Blouse Color": "Burnt Orange, Purple",
      "Blouse Dimension": "Standard Size",
      "Color": "Burnt Orange, Purple",
      "Wash Care": "Hand Wash / Mild Detergent"
    },
    "rating": 4.4,
    "reviews": [
      {
        "username": "Anjali Menon",
        "rating": 5,
        "reviewTitle": "Vibrant and Comfortable",
        "comment": "Beautiful colors and very comfortable. Fits perfectly with my saree.",
        "date": "09/2025"
      },
      {
        "username": "Rohit Sharma",
        "rating": 4,
        "reviewTitle": "Good Quality",
        "comment": "Soft cotton and well stitched. The border is gorgeous.",
        "date": "08/2025"
      },
      {
        "username": "Priya Nair",
        "rating": 5,
        "reviewTitle": "Perfect for Festive Wear",
        "comment": "Looks ethnic and elegant. Highly recommend for traditional occasions.",
        "date": "08/2025"
      },
      {
        "username": "Lakshmi Iyer",
        "rating": 4,
        "reviewTitle": "Nice Handloom Blouse",
        "comment": "Lovely handloom texture and vibrant colors. Fits true to size.",
        "date": "07/2025"
      }
    ],
    "sku": "CH-COTTON-BLOUSE-002",
    "availabilityStatus": "In stock",
    "stock": 25,
    "shippingInformation": "Ships in 3–5 business days",
    "returnPolicy": "7 day return (if unused & in original condition)",
    "minimumOrderQuantity": [
      { "qty": 1, "price": 1299 }
    ],
    "sizes": [
      { "size": "Standard", "price": 1299 }
    ],
    "colors": ["Burnt Orange", "Purple"],
    "updatedAt": "2025-09-23T08:55:00.000Z",
    "sales": 85,
    "isTrending": true,
    "link": "https://thenmozhidesigns.com/products/burnt-orange-and-purple-border-chettinad-cotton-blouse"
  }, {
    "id": 2003,
    "title": "Deep Wine, Pink, and Black Border Chettinad Cotton Blouse",
    "category": "blouse",
    "brand": "Thenmozhi Designs",
    "video": null,
    "images": [
      "https://thenmozhidesigns.com/cdn/shop/files/Deep_wine_pink_and_black_border_Chettinad_cotton_saree_1.jpg?v=1758515763&width=800",
      "https://thenmozhidesigns.com/cdn/shop/files/Deep_wine_pink_and_black_border_Chettinad_cotton_saree_2.jpg?v=1758515762&width=800"
    ],
    "price": 1399,
    "discount": 10,
    "description": "A stunning deep wine, pink, and black border Chettinad cotton blouse from Thenmozhi Designs. Handloom-crafted for comfort and elegance, it pairs perfectly with traditional sarees for festive occasions, casual gatherings, or ethnic events.",
    "product_specs": {
      "Category": "Blouse",
      "Fabrics": "Cotton",
      "Origin": "Tamil Nadu",
      "Occasion": "Festive / Casual Wear",
      "Craft": "Handloom",
      "Blouse Type": "Ready-to-wear",
      "Blouse Color": "Deep Wine, Pink, Black",
      "Blouse Dimension": "Standard Size",
      "Color": "Deep Wine, Pink, Black",
      "Wash Care": "Hand Wash / Mild Detergent"
    },
    "rating": 4.5,
    "reviews": [
      {
        "username": "Meera Nair",
        "rating": 5,
        "reviewTitle": "Elegant and Comfortable",
        "comment": "Lovely color combination and fits perfectly. Very comfortable for festive wear.",
        "date": "09/2025"
      },
      {
        "username": "Priya Sharma",
        "rating": 4,
        "reviewTitle": "Good Handloom Blouse",
        "comment": "Soft cotton, true to size, and the borders look gorgeous.",
        "date": "08/2025"
      },
      {
        "username": "Anjali Menon",
        "rating": 5,
        "reviewTitle": "Perfect for Ethnic Occasions",
        "comment": "Highly recommend for traditional events. Color and fabric are excellent.",
        "date": "08/2025"
      },
      {
        "username": "Lakshmi Iyer",
        "rating": 4,
        "reviewTitle": "Vibrant and Stylish",
        "comment": "Great handloom texture, vibrant colors, and comfortable to wear.",
        "date": "07/2025"
      }
    ],
    "sku": "CH-COTTON-BLOUSE-003",
    "availabilityStatus": "In stock",
    "stock": 20,
    "shippingInformation": "Ships in 3–5 business days",
    "returnPolicy": "7 day return (if unused & in original condition)",
    "minimumOrderQuantity": [
      { "qty": 1, "price": 1399 }
    ],
    "sizes": [
      { "size": "Standard", "price": 1399 }
    ],
    "colors": ["Deep Wine", "Pink", "Black"],
    "updatedAt": "2025-09-23T08:55:00.000Z",
    "sales": 65,
    "isTrending": true,
    "link": "https://thenmozhidesigns.com/products/deep-wine-pink-and-black-border-chettinad-cotton-blouse"
  }, {
    "id": 2004,
    "title": "Black Model Blouse",
    "category": "blouse",
    "brand": "Thenmozhi Designs",
    "video": "https://thenmozhidesigns.com/cdn/shop/videos/c/vp/f90be60da1d6463fb9da6c34c3d3a059/f90be60da1d6463fb9da6c34c3d3a059.HD-1080p-2.5Mbps-43634179.mp4?v=0",
    "images": [
      "https://thenmozhidesigns.com/cdn/shop/files/PRAK4169copy.jpg?v=1740974226&width=800",
      "https://thenmozhidesigns.com/cdn/shop/files/PRAK4171copy.jpg?v=1740974226&width=800",
      "https://thenmozhidesigns.com/cdn/shop/files/PRAK4176copy.jpg?v=1740974226&width=800"
    ],
    "price": 1499,
    "discount": 15,
    "description": "A sleek and elegant black model blouse from Thenmozhi Designs. Handloom-crafted for comfort and style, this blouse pairs perfectly with traditional sarees for festive occasions, casual gatherings, or ethnic events.",
    "product_specs": {
      "Category": "Blouse",
      "Fabrics": "Cotton / Silk Blend",
      "Origin": "Tamil Nadu",
      "Occasion": "Festive / Casual Wear",
      "Craft": "Handloom",
      "Blouse Type": "Ready-to-wear",
      "Blouse Color": "Black",
      "Blouse Dimension": "Standard Size",
      "Color": "Black",
      "Wash Care": "Hand Wash / Mild Detergent"
    },
    "rating": 4.5,
    "reviews": [
      {
        "username": "Anjali Menon",
        "rating": 5,
        "reviewTitle": "Elegant and Comfortable",
        "comment": "Beautiful black blouse, fits perfectly and feels very comfortable.",
        "date": "09/2025"
      },
      {
        "username": "Rohit Sharma",
        "rating": 4,
        "reviewTitle": "Good Quality",
        "comment": "Soft fabric, handloom texture is visible. Looks great with sarees.",
        "date": "08/2025"
      },
      {
        "username": "Priya Nair",
        "rating": 5,
        "reviewTitle": "Perfect for Festive Wear",
        "comment": "Highly recommend for traditional occasions. Elegant design and fabric quality.",
        "date": "08/2025"
      },
      {
        "username": "Lakshmi Iyer",
        "rating": 4,
        "reviewTitle": "Stylish Handloom Blouse",
        "comment": "Vibrant texture and comfortable to wear. True to size.",
        "date": "07/2025"
      }
    ],
    "sku": "BL-MODEL-BLOUSE-004",
    "availabilityStatus": "In stock",
    "stock": 30,
    "shippingInformation": "Ships in 3–5 business days",
    "returnPolicy": "7 day return (if unused & in original condition)",
    "minimumOrderQuantity": [
      { "qty": 1, "price": 1499 }
    ],
    "sizes": [
      { "size": "Standard", "price": 1499 }
    ],
    "colors": ["Black"],
    "updatedAt": "2025-09-23T08:55:00.000Z",
    "sales": 50,
    "isTrending": true,
    "link": "https://thenmozhidesigns.com/products/black-model-blouse"
  }, {
    "id": 2005,
    "title": "Black Full Sleeve Blouse",
    "category": "blouse",
    "brand": "Thenmozhi Designs",
    "video": null,
    "images": [
      "https://thenmozhidesigns.com/cdn/shop/files/36E2693F-81C0-4174-8CAD-90DB9A94C4F3.jpg?v=1748930003&width=800",
      "https://thenmozhidesigns.com/cdn/shop/files/72EC9485-F3A9-4DBF-BECA-9AF888B68408.jpg?v=1748930003&width=800",
      "https://thenmozhidesigns.com/cdn/shop/files/0634FDAB-29C4-4805-B8E3-A9288C08C4E7.jpg?v=1748930003&width=800",
      "https://thenmozhidesigns.com/cdn/shop/files/IMG_2973.heic?v=1748930003&width=800"
    ],
    "price": 1599,
    "discount": 10,
    "description": "Elegant black full sleeve blouse from Thenmozhi Designs, crafted for a sophisticated ethnic look. Perfect for pairing with traditional sarees, this handloom blouse combines style, comfort, and versatility for festive, casual, and formal occasions.",
    "product_specs": {
      "Category": "Blouse",
      "Fabrics": "Cotton / Silk Blend",
      "Origin": "Tamil Nadu",
      "Occasion": "Festive / Casual / Formal Wear",
      "Craft": "Handloom",
      "Blouse Type": "Full Sleeve",
      "Blouse Color": "Black",
      "Blouse Dimension": "Standard Size",
      "Color": "Black",
      "Wash Care": "Hand Wash / Mild Detergent"
    },
    "rating": 4.5,
    "reviews": [
      {
        "username": "Anjali Menon",
        "rating": 5,
        "reviewTitle": "Stylish Full Sleeve Blouse",
        "comment": "Elegant design, fits perfectly, and feels very comfortable.",
        "date": "09/2025"
      },
      {
        "username": "Rohit Sharma",
        "rating": 4,
        "reviewTitle": "Good Quality",
        "comment": "Soft fabric and handloom texture. Looks great with sarees.",
        "date": "08/2025"
      },
      {
        "username": "Priya Nair",
        "rating": 5,
        "reviewTitle": "Perfect for Festive Wear",
        "comment": "Highly recommend for traditional occasions. Elegant design and fabric quality.",
        "date": "08/2025"
      },
      {
        "username": "Lakshmi Iyer",
        "rating": 4,
        "reviewTitle": "Comfortable and Trendy",
        "comment": "Full sleeves add a stylish touch. Fits true to size and very comfortable.",
        "date": "07/2025"
      }
    ],
    "sku": "BL-FS-BLOUSE-005",
    "availabilityStatus": "In stock",
    "stock": 20,
    "shippingInformation": "Ships in 3–5 business days",
    "returnPolicy": "7 day return (if unused & in original condition)",
    "minimumOrderQuantity": [
      { "qty": 1, "price": 1599 }
    ],
    "sizes": [
      { "size": "Standard", "price": 1599 }
    ],
    "colors": ["Black"],
    "updatedAt": "2025-09-23T08:55:00.000Z",
    "sales": 60,
    "isTrending": true,
    "link": "https://thenmozhidesigns.com/products/black-full-sleeve-blouse"
  }, {
    "id": 2006,
    "title": "White and Lavender Border Chettinad Cotton Blouse",
    "category": "blouse",
    "brand": "Thenmozhi Designs",
    "video": "https://www.instagram.com/reel/DO2Ufr8gb-D/",
    "images": [
      "https://thenmozhidesigns.com/cdn/shop/files/352A0274_70351ca4-5ad3-40d2-a327-392fc97ca50d.jpg?v=1758515025&width=800",
      "https://thenmozhidesigns.com/cdn/shop/files/352A0290.jpg?v=1758158948&width=800"
    ],
    "price": 1299,
    "discount": 10,
    "description": "A beautifully handloom-crafted white and lavender border Chettinad cotton blouse from Thenmozhi Designs. Perfect to pair with traditional sarees, this cotton blouse combines elegance, comfort, and vibrant ethnic appeal, suitable for festive occasions and casual gatherings.",
    "product_specs": {
      "Category": "Blouse",
      "Fabrics": "Cotton",
      "Origin": "Tamil Nadu",
      "Occasion": "Festive / Casual Wear",
      "Craft": "Handloom",
      "Blouse Type": "Ready-to-wear",
      "Blouse Color": "White, Lavender",
      "Blouse Dimension": "Standard Size",
      "Color": "White, Lavender",
      "Wash Care": "Hand Wash / Mild Detergent"
    },
    "rating": 4.4,
    "reviews": [
      {
        "username": "Anjali Menon",
        "rating": 5,
        "reviewTitle": "Elegant and Comfortable",
        "comment": "Soft fabric, beautiful colors, fits perfectly with my saree.",
        "date": "09/2025"
      },
      {
        "username": "Rohit Sharma",
        "rating": 4,
        "reviewTitle": "Good Quality",
        "comment": "Handloom texture is lovely and the blouse looks elegant.",
        "date": "08/2025"
      },
      {
        "username": "Priya Nair",
        "rating": 5,
        "reviewTitle": "Perfect Festive Wear",
        "comment": "Highly recommend for traditional occasions. Very stylish and comfortable.",
        "date": "08/2025"
      },
      {
        "username": "Lakshmi Iyer",
        "rating": 4,
        "reviewTitle": "Vibrant Handloom Blouse",
        "comment": "Vibrant border and comfortable fit. True to size.",
        "date": "07/2025"
      }
    ],
    "sku": "WH-LAV-CBLOUSE-006",
    "availabilityStatus": "In stock",
    "stock": 25,
    "shippingInformation": "Ships in 3–5 business days",
    "returnPolicy": "7 day return (if unused & in original condition)",
    "minimumOrderQuantity": [
      { "qty": 1, "price": 1299 }
    ],
    "sizes": [
      { "size": "Standard", "price": 1299 }
    ],
    "colors": ["White", "Lavender"],
    "updatedAt": "2025-09-23T08:55:00.000Z",
    "sales": 40,
    "isTrending": true,
    "link": "https://thenmozhidesigns.com/products/white-and-lavender-border-chettinad-cotton-blouse"
  }, {
    "id": 2007,
    "title": "Red Sleeveless Blouse",
    "category": "blouse",
    "brand": "Thenmozhi Designs",
    "video": "https://www.instagram.com/reel/DHm8vG4Sn8-/",
    "images": [
      "https://thenmozhidesigns.com/cdn/shop/files/PRAK9192.jpg?v=1744461160&width=800",
      "https://thenmozhidesigns.com/cdn/shop/files/PRAK9187.jpg?v=1744461160&width=800",
      "https://thenmozhidesigns.com/cdn/shop/files/PRAK9181.jpg?v=1744461160&width=800"
    ],
    "price": 1399,
    "discount": 10,
    "description": "A vibrant red sleeveless blouse from Thenmozhi Designs. Handloom-crafted for style and comfort, this sleeveless blouse pairs perfectly with traditional sarees for festive occasions, casual gatherings, and ethnic events. Lightweight and elegant, it allows easy movement while maintaining a chic look.",
    "product_specs": {
      "Category": "Blouse",
      "Fabrics": "Cotton / Silk Blend",
      "Origin": "Tamil Nadu",
      "Occasion": "Festive / Casual / Formal Wear",
      "Craft": "Handloom",
      "Blouse Type": "Sleeveless",
      "Blouse Color": "Red",
      "Blouse Dimension": "Standard Size",
      "Color": "Red",
      "Wash Care": "Hand Wash / Mild Detergent"
    },
    "rating": 4.5,
    "reviews": [
      {
        "username": "Anjali Menon",
        "rating": 5,
        "reviewTitle": "Chic and Comfortable",
        "comment": "Love the fit and color. Perfect for my saree. Very stylish and comfortable.",
        "date": "09/2025"
      },
      {
        "username": "Rohit Sharma",
        "rating": 4,
        "reviewTitle": "Good Quality",
        "comment": "Handloom texture is visible and fabric feels soft. Looks elegant.",
        "date": "08/2025"
      },
      {
        "username": "Priya Nair",
        "rating": 5,
        "reviewTitle": "Festive Favorite",
        "comment": "Sleeveless design is perfect for hot days. Fits well and looks vibrant.",
        "date": "08/2025"
      },
      {
        "username": "Lakshmi Iyer",
        "rating": 4,
        "reviewTitle": "Stylish Handloom Blouse",
        "comment": "Great color and comfortable fit. True to size.",
        "date": "07/2025"
      }
    ],
    "sku": "RED-SL-BLOUSE-007",
    "availabilityStatus": "In stock",
    "stock": 30,
    "shippingInformation": "Ships in 3–5 business days",
    "returnPolicy": "7 day return (if unused & in original condition)",
    "minimumOrderQuantity": [
      { "qty": 1, "price": 1399 }
    ],
    "sizes": [
      { "size": "Standard", "price": 1399 }
    ],
    "colors": ["Red"],
    "updatedAt": "2025-09-23T08:55:00.000Z",
    "sales": 45,
    "isTrending": true,
    "link": "https://thenmozhidesigns.com/products/red-sleeveless-blouse"
  }, {
    "id": 2008,
    "title": "French Violet Anarkali Chettinad Salwar",
    "category": "salwar suits",
    "brand": "Thenmozhi Designs",
    "video": "https://www.instagram.com/p/DM6iLwLSzIw/",
    "images": [
      "https://thenmozhidesigns.com/cdn/shop/files/FrenchvioletAnarkaliChettinadsalwar_4_89462342-342a-4fec-a5a6-309af5a527a6.jpg?v=1757481200&width=800",
      "https://thenmozhidesigns.com/cdn/shop/files/FrenchvioletAnarkaliChettinadsalwar_6_2b4a2662-1621-4f01-a9ba-e7294a43820f.jpg?v=1757481200&width=800",
      "https://thenmozhidesigns.com/cdn/shop/files/FrenchvioletAnarkaliChettinadsalwar_8_4ad12957-25e8-43c6-b6f7-70bef59a7c33.jpg?v=1757481200&width=800",
      "https://thenmozhidesigns.com/cdn/shop/files/FrenchvioletAnarkaliChettinadsalwar_3_240a2353-86c9-4da5-964e-8ba663f5a76e.jpg?v=1757481200&width=800",
      "https://thenmozhidesigns.com/cdn/shop/files/FrenchvioletAnarkaliChettinadsalwar_2_dee54506-bbb9-48bf-84ca-4a7d639dfc92.jpg?v=1757481200&width=800"
    ],
    "price": 2750,
    "discount": 10,
    "description": "The French Violet Anarkali Chettinad Salwar by Thenmozhi Designs is a stunning ethnic ensemble. Crafted with Chettinad cotton, this Anarkali combines traditional artistry with modern elegance. Perfect for festive occasions, casual gatherings, and cultural events, it offers comfort and grace in every drape.",
    "product_specs": {
      "Category": "Salwar Kameez",
      "Fabrics": "Chettinad Cotton with lining",
      "Origin": "Tamil Nadu",
      "Occasion": "Festive / Casual / Cultural Wear",
      "Craft": "Handloom",
      "Top Length": "46 inches",
      "Pant Pattern": "Straight",
      "Dupatta": "Included",
      "Color": "French Violet",
      "Wash Care": "Hand Wash / Mild Detergent"
    },
    "rating": 4.6,
    "reviews": [
      {
        "username": "Anjali Menon",
        "rating": 5,
        "reviewTitle": "Elegant Anarkali",
        "comment": "Beautiful color and perfect fit. Loved the handloom texture and fabric quality.",
        "date": "09/2025"
      },
      {
        "username": "Rohit Sharma",
        "rating": 4,
        "reviewTitle": "Good Quality",
        "comment": "Soft fabric with visible handloom craftsmanship. Very comfortable to wear.",
        "date": "08/2025"
      },
      {
        "username": "Priya Nair",
        "rating": 5,
        "reviewTitle": "Perfect Festive Wear",
        "comment": "The design is elegant and perfect for cultural events. Received many compliments.",
        "date": "08/2025"
      },
      {
        "username": "Lakshmi Iyer",
        "rating": 4,
        "reviewTitle": "Stylish and Comfortable",
        "comment": "Loved the flow and texture. True to size and very easy to carry.",
        "date": "07/2025"
      }
    ],
    "sku": "FV-ANARKALI-008",
    "availabilityStatus": "In stock",
    "stock": 15,
    "shippingInformation": "Ships in 3–5 business days",
    "returnPolicy": "7 day return (if unused & in original condition)",
    "minimumOrderQuantity": [
      { "qty": 1, "price": 2750 }
    ],
    "sizes": [
      { "size": "Standard", "price": 2750 }
    ],
    "colors": ["French Violet"],
    "updatedAt": "2025-09-23T08:55:00.000Z",
    "sales": 35,
    "isTrending": true,
    "link": "https://thenmozhidesigns.com/products/french-violet-anarkali-chettinad-salwar"
  }, {
    "id": 12,
    "title": "Royal Blue Block Printed Salwar Suit",
    "category": "salwar suits",
    "brand": "Thenmozhi Designs",
    "video": "https://www.instagram.com/reel/DOAT5o7kfES/",
    "images": [
      "https://thenmozhidesigns.com/cdn/shop/files/RoyalBlueBlockPrintedSalwarSuit_4.jpg?v=1755858195&width=800",
      "https://thenmozhidesigns.com/cdn/shop/files/RoyalBlueBlockPrintedSalwarSuit_5.jpg?v=1755858195&width=800",
      "https://thenmozhidesigns.com/cdn/shop/files/RoyalBlueBlockPrintedSalwarSuit_2.jpg?v=1755858195&width=800"
    ],
    "price": 2499,
    "discount": 12,
    "description": "A striking Royal Blue Block Printed Salwar Suit from Thenmozhi Designs. Handcrafted with premium cotton fabric, this elegant set features intricate block prints that highlight traditional artistry. Designed for festive occasions, cultural events, and casual gatherings, it offers both comfort and timeless charm.",
    "product_specs": {
      "Category": "Salwar Suit",
      "Fabrics": "Cotton with Block Print",
      "Origin": "Tamil Nadu",
      "Occasion": "Festive / Cultural / Casual Wear",
      "Craft": "Hand Block Print",
      "Top Length": "46 inches",
      "Pant Pattern": "Straight",
      "Dupatta": "Included",
      "Color": "Royal Blue",
      "Wash Care": "Hand Wash / Mild Detergent"
    },
    "rating": 4.7,
    "reviews": [
      {
        "username": "Meera Krishnan",
        "rating": 5,
        "reviewTitle": "Elegant & Comfortable",
        "comment": "The block print design is beautiful and fabric feels soft. Perfect for summer wear.",
        "date": "09/2025"
      },
      {
        "username": "Rohini Iyer",
        "rating": 4,
        "reviewTitle": "Traditional Yet Stylish",
        "comment": "Loved the color combination and fit. Dupatta is lightweight and easy to drape.",
        "date": "08/2025"
      },
      {
        "username": "Shreya Menon",
        "rating": 5,
        "reviewTitle": "Festive Favorite",
        "comment": "Received many compliments for this outfit at a family gathering. Worth the price!",
        "date": "08/2025"
      },
      {
        "username": "Ananya R",
        "rating": 4,
        "reviewTitle": "Good Quality Fabric",
        "comment": "The cotton fabric is breathable and comfortable for all-day wear.",
        "date": "07/2025"
      }
    ],
    "sku": "RB-BLOCK-SALWAR-009",
    "availabilityStatus": "In stock",
    "stock": 20,
    "shippingInformation": "Ships in 3–5 business days",
    "returnPolicy": "7 day return (if unused & in original condition)",
    "minimumOrderQuantity": [
      { "qty": 1, "price": 2499 }
    ],
    "sizes": [
      { "size": "Standard", "price": 2499 }
    ],
    "colors": ["Royal Blue"],
    "updatedAt": "2025-09-23T09:10:00.000Z",
    "sales": 28,
    "isTrending": true,
    "link": "[https://thenmozhidesigns.com/products/royal-blue-block-printed-salwar-suit](https://thenmozhidesigns.com/products/royal-blue-block-printed-salwar-suit)"
  },
  {
    "id": 11,
    "title": "Pink with Black Anarkali Chettinad Salwar",
    "category": "salwar suits",
    "brand": "Thenmozhi Designs",
    "video": "https://www.instagram.com/reel/DOaEbvMEcqZ",
    "images": [
      "https://thenmozhidesigns.com/cdn/shop/files/PinkwithblackAnarkaliChettinadsalwar_13.jpg?v=1757403689&width=800",
      "https://thenmozhidesigns.com/cdn/shop/files/PinkwithblackAnarkaliChettinadsalwar_15.jpg?v=1757481119&width=800",
      "https://thenmozhidesigns.com/cdn/shop/files/PinkwithblackAnarkaliChettinadsalwar_8.jpg?v=1757481223&width=800",
      "https://thenmozhidesigns.com/cdn/shop/files/PinkwithblackAnarkaliChettinadsalwar_11.jpg?v=1757481223&width=800"
    ],
    "price": 2899,
    "discount": 15,
    "description": "This Pink with Black Anarkali Chettinad Salwar from Thenmozhi Designs is a perfect fusion of elegance and tradition. Featuring a graceful Anarkali silhouette with authentic Chettinad fabric detailing, this outfit is ideal for festive occasions, weddings, and cultural events. Its unique color contrast enhances the charm, while the breathable fabric ensures comfort throughout the day.",
    "product_specs": {
      "Category": "Salwar Suit",
      "Fabrics": "Cotton Blend with Chettinad Weave",
      "Origin": "Tamil Nadu",
      "Occasion": "Festive / Weddings / Cultural Wear",
      "Craft": "Handloom Chettinad",
      "Top Length": "48 inches",
      "Pant Pattern": "Straight",
      "Dupatta": "Included",
      "Color": "Pink with Black",
      "Wash Care": "Hand Wash / Mild Detergent"
    },
    "rating": 4.6,
    "reviews": [
      {
        "username": "Divya S",
        "rating": 5,
        "reviewTitle": "Elegant & Festive",
        "comment": "The pink and black contrast looks stunning. Fabric quality is really good.",
        "date": "09/2025"
      },
      {
        "username": "Harini R",
        "rating": 4,
        "reviewTitle": "Beautiful Outfit",
        "comment": "Loved the Anarkali flare and the Chettinad design. Dupatta is lightweight and stylish.",
        "date": "08/2025"
      },
      {
        "username": "Sneha K",
        "rating": 5,
        "reviewTitle": "Perfect for Weddings",
        "comment": "Received many compliments wearing this salwar. Looks rich and traditional.",
        "date": "08/2025"
      },
      {
        "username": "Aishwarya P",
        "rating": 4,
        "reviewTitle": "Comfortable and Stylish",
        "comment": "Fits perfectly and fabric is breathable. Highly recommend.",
        "date": "07/2025"
      }
    ],
    "sku": "PNK-BLK-ANARKALI-010",
    "availabilityStatus": "In stock",
    "stock": 18,
    "shippingInformation": "Ships in 3–5 business days",
    "returnPolicy": "7 day return (if unused & in original condition)",
    "minimumOrderQuantity": [
      { "qty": 1, "price": 2899 }
    ],
    "sizes": [
      { "size": "Standard", "price": 2899 }
    ],
    "colors": ["Pink", "Black"],
    "updatedAt": "2025-09-23T09:20:00.000Z",
    "sales": 22,
    "isTrending": true,
    "link": "[https://thenmozhidesigns.com/products/pink-with-black-anarkali-chettinad-salwar](https://thenmozhidesigns.com/products/pink-with-black-anarkali-chettinad-salwar)"
  }

]




