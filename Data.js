/* PRODUCTS DATA — edit only this file to add, change or delete categories, sections and products.

   CATEGORY (one card on the Products page):
     { id, name, tag, text, title (optional), products: [...]  }            -> page with products only
     { id, name, tag, text, title (optional), sections: [ {id, name, products:[...]}, ... ] }  -> page with tabs
   - id: short, lowercase, no spaces (use -), unique.
   - name: the card name. title: the bigger heading on the category page (if different from name).
   - tag: the small line on the card.
   PRODUCT: { name, text }  Optional: brand: "...", price: "...", image: "photo-file-name.jpg"
   To add: copy a block and change the text. To delete: remove the whole block.
   Keep the commas between blocks. The first section of a category is selected by default. */
const CATEGORIES = [
  {
    id: "elevators",
    name: "Elevators",
    tag: "XIO LIFT",
    text: "Elevators from XIO LIFT.",
    products: [
      { brand: "XIO LIFT", name: "Elevator model one", text: "Add the details of this elevator here: capacity, speed, floors, features." },
      { brand: "XIO LIFT", name: "Elevator model two", text: "Add the details of this elevator here: capacity, speed, floors, features." }
    ]
  },
  {
    id: "building-materials",
    name: "Building Materials",
    title: "Building Exterior & Interior Materials",
    tag: "Exterior, Interior",
    text: "Materials for the outside and inside of your building.",
    sections: [
      { id: "exterior", name: "Exterior", products: [
        { name: "Exterior product one", text: "A short description of this product goes here." },
        { name: "Exterior product two", text: "A short description of this product goes here." }
      ]},
      { id: "interior", name: "Interior", products: [
        { name: "Interior product one", text: "A short description of this product goes here." },
        { name: "Interior product two", text: "A short description of this product goes here." }
      ]}
    ]
  },
  {
    id: "solar-lithium-battery",
    name: "Solar & Lithium Battery",
    tag: "Solar, Lithium Battery",
    text: "Solar power and lithium battery solutions.",
    sections: [
      { id: "solar", name: "Solar", products: [
        { name: "Solar product one", text: "A short description of this product goes here." },
        { name: "Solar product two", text: "A short description of this product goes here." }
      ]},
      { id: "lithium-battery", name: "Lithium Battery", products: [
        { name: "Lithium battery one", text: "A short description of this product goes here." },
        { name: "Lithium battery two", text: "A short description of this product goes here." }
      ]}
    ]
  }
];