import side1 from "@/public/menu/side1.png";
import side2 from "@/public/menu/side2.png";
import side3 from "@/public/menu/side3.png";
import side4 from "@/public/menu/side4.png"

import entree1 from "@/public/menu/entree1.png";
import entree2 from "@/public/menu/entree2.png";
import entree3 from "@/public/menu/entree3.png";
import entree4 from "@/public/menu/entree4.png";

import appetizer1 from "@/public/menu/appetizer1.png";
import appetizer2 from "@/public/menu/appetizer2.png";
import appetizer3 from "@/public/menu/appetizer3.png";

import special1 from "@/public/menu/special1.png";
import special2 from "@/public/menu/special2.png";
import special3 from "@/public/menu/special3.png";

/*
{
  name: "",
  price: -1,
  src: ,
  vegan: ,
  spice: ,
  type: "",
  description: ""
},
*/

function GetSideDishes() {
  return [
    {
      name: "House Salad with Fresh Cherry Tomatoes",
      price: -1,
      src: side1,
      vegan: true,
      spice: 0,
      type: "side",
      description: "A crisp medley of romaine and mixed greens tossed with sweet cherry tomatoes, crunchy cucumber slices, and a sprinkle of shredded carrots. Served with your choice of dressing, this salad is a refreshing start or complement to any meal.",
      shortDescription: "A crisp salad of romaine and mixed greens with cherry tomatoes, cucumber, and carrots."
    },
    {
      name: "Roasted Tomato Basil Soup",
      price: -1,
      src: side2,
      vegan: false,
      spice: 0,
      type: "side",
      description: "A rich and velvety soup made with slow roasted tomatoes, fresh basil, and a hint of garlic. Finished with a drizzle of cream and olive oil, this comforting classic is served with a sprinkle of freshly cracked black pepper. Perfect for dipping crusty bread or enjoying as a warm starter.",
      shortDescription: "A rich, velvety soup of roasted tomatoes, basil, and garlic finished with cream and olive oil."
    },
    {
      name: "Chilled Green Pea and Dill Soup",
      price: -1,
      src: side3,
      vegan: false,
      spice: 0,
      type: "side",
      description: "A creamy and refreshing blend of sweet green peas, fresh dill, and a hint of lemon zest. Served chilled and topped with a drizzle of cream and a sprinkle of cracked black pepper, this soup is a perfect appetizer for warm days or as a light, vibrant starter.",
      shortDescription: "A refreshing chilled soup blending green peas, dill, and lemon zest with a creamy finish."
    },
    {
      name: "Fresh Miracle Cabbage Stir Fry",
      price: -1,
      src: side4,
      vegan: true,
      spice: 2,
      type: "side",
      description: "Tender cabbage leaves stir fried to perfection with a hint of smoky wok hei, infused with dried red chilies for a touch of heat. Lightly seasoned with soy sauce and a drizzle of sesame oil, this dish is simple yet irresistibly flavorful. A versatile side that pairs beautifully with any main course.",
      shortDescription: "A flavorful stir fry of tender cabbage with smoky wok hei and a touch of heat."
    },
  ];
}

function GetAppetizers() {
  return [
    {
      name: "Collard Greens Salad with Fried Plantain and Sumac",
      price: -1,
      src: appetizer1,
      vegan: true,
      spice: 0,
      type: "appetizer",
      description: "A delightful fusion of earthy collard greens, crispy fried plantains, and tangy sumac for a zesty twist. Tossed with ribbons of fennel, briny olives, and a touch of citrus, this salad offers a perfect balance of sweetness, crunch, and bold flavors. A refreshing and hearty appetizer to awaken your taste buds.",
      shortDescription: "A zesty salad combining collard greens, crispy plantains, and tangy sumac."
    },
    {
      name: "Tangy Balsamic Pasta with Sungold Tomatoes",
      price: -1,
      src: appetizer2,
      vegan: false,
      spice: 0,
      type: "",
      description: "A vibrant dish featuring al dente pasta tossed with burst Sungold tomatoes and a drizzle of tangy balsamic glaze. Fresh basil leaves and a hint of garlic round out the flavors, making this appetizer a delightful combination of sweet, tangy, and herbaceous notes. A simple yet elegant start to your meal.",
      shortDescription: "A vibrant pasta dish with Sungold tomatoes, tangy balsamic glaze, and fresh basil."
    },
    {
      name: "Earthy Coconut Braised Mushrooms with Ginger and Scallions",
      price: -1,
      src: appetizer3,
      vegan: true,
      spice: 1,
      type: "appetizer",
      description: "A luscious blend of mushrooms simmered in creamy coconut milk, and spiced with a touch of turmeric. Tossed with sweet roasted cherry tomatoes and finished with a scattering of fresh scallions, this dish brings bold, earthy flavors. A rich, satisfying appetizer perfect for sharing or savoring solo.",
      shortDescription: "A rich appetizer of mushrooms braised in coconut milk with turmeric, cherry tomatoes, and scallions."
    },
  ];
}

function GetEntrees() {
  return [
    {
      name: "Smoky Black Bean Tacos with Sweet chopped Salsa",
      price: -1,
      src: entree1,
      vegan: true,
      spice: 2,
      type: "entree",
      description: "Warm corn tortillas filled with a hearty mix of smoky black beans, spiced tofu cubes, and fresh pico de gallo. Topped with crunchy shredded cabbage and a hint of lime, these tacos are a perfect blend of zest and flavor, making them a delightful way to kick off your meal.",
      shortDescription: "Hearty tacos with smoky black beans, spiced tofu, pico de gallo, and a hint of lime."
    },
    {
      name: "Vietnamese Bok Choy Pho with Fresh Tofu Sticks and Mushrooms",
      price: -1,
      src: entree2,
      vegan: true,
      spice: 1,
      type: "entree",
      description: "A soul soothing bowl of traditional Vietnamese pho with a modern twist. Delicate rice noodles float in a fragrant broth infused with star anise, cinnamon, and ginger. Topped with crisp bok choy, golden fried tofu sticks, and earthy mushrooms, this dish is garnished with fresh herbs, scallions, and a splash of lime.",
      shortDescription: "A modern twist on Vietnamese pho with rice noodles, aromatic broth, tofu sticks, mushrooms, and crisp bok choy."
    },
    {
      name: "Spicy Gochujang Sesame Noodles",
      price: -1,
      src: entree3,
      vegan: true,
      spice: 4,
      type: "entree",
      description: "Chewy noodles coated in a rich, spicy gochujang sauce with a nutty sesame twist. Tossed with crispy kale, fresh basil, and a sprinkle of toasted sesame seeds, this dish delivers a fiery kick balanced by earthy and herbaceous flavors. A bold and satisfying choice for spice lovers seeking a vibrant Korean inspired meal.",
      shortDescription: "Vibrant noodles in a spicy gochujang sauce with sesame, kale, and basil."
    },
    {
      name: "Braised Miso Polenta with Spring Vegetables and Tofu",
      price: -1,
      src: entree4,
      vegan: true,
      spice: 1,
      type: "entree",
      description: "Creamy polenta infused with savory miso, providing a rich, umami base for this vibrant dish. Topped with tender spring vegetables like asparagus, snow peas, and scallions, alongside golden pan seared tofu and shiitake mushrooms",
      shortDescription: "Creamy miso-infused polenta topped with spring vegetables, tofu, and shiitake mushrooms."
    },
  ];
}

function GetSpecials() {
  return [
    {
      name: "Fragrant Charred Kale with Citrus and Green Tahini",
      price: -1,
      src: special1,
      vegan: true,
      spice: 0,
      type: "special",
      description: "A vibrant plate of lightly charred kale, complemented by juicy segments of grapefruit and orange for a tangy sweet contrast. Drizzled with creamy green tahini and topped with crispy shallots and toasted sesame seeds, this dish offers a perfect harmony of smoky, citrusy, and nutty flavors. A bold and refreshing creation, ideal for those seeking a unique plant based delight.",
      shortDescription: "A vibrant dish of charred kale with tangy citrus segments and creamy green tahini."
    },
    {
      name: "Creamy Hummus Bowl with Merguez Spiced Tempeh",
      price: -1,
      src: special2,
      vegan: true,
      spice: 2,
      type: "special",
      description: "Silky, house made hummus topped with crispy, merguez spiced tempeh crumbles for a smoky, aromatic flair. Garnished with shaved fennel, red onion, and a drizzle of olive oil, this dish offers a harmonious blend of creamy, zesty, and bold flavors. Perfect as a centerpiece for sharing or a hearty indulgence for one.",
      shortDescription: "A silky hummus bowl topped with merguez spiced tempeh, fennel, and red onion."
    },
    {
      name: "Pan Roasted Sweet Potatoes with Crunchy Tempeh",
      price: -1,
      src: special3,
      vegan: true,
      spice: 1,
      type: "special",
      description: "Perfectly caramelized sweet potato halves, pan roasted to bring out their natural sweetness, are topped with crispy tempeh crumbles for a satisfying crunch. Finished with fresh apple chunks, a drizzle of maple glaze, and a garnish of fragrant cilantro, this dish offers a harmonious blend of sweet, savory, and tangy flavors. A standout creation that’s as nourishing as it is delicious.",
      shortDescription: "Pan roasted sweet potatoes topped with crispy tempeh, apple chunks, and a drizzle of maple glaze."
    },
  ];
}

function GetDesserts() {
  return [

  ];
}

function GetDrinks() {
  return [

  ];
}

export { GetSideDishes, GetAppetizers, GetEntrees, GetSpecials, GetDesserts, GetDrinks };
