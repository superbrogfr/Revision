const flashcardsFrontBack = [
`Carbohydrates:
Compounds made of sugars and starches that provide energy for the body.`,
`Simple carbohydrates:
Sugars that digest quickly and cause rapid blood glucose increases.`,
`Complex carbohydrates:
Starches and fibre that digest slowly, providing longer-lasting energy.`,
`Sources of simple carbohydrates:
Fruits, honey, milk, table sugar.`,
`Sources of complex carbohydrates:
Whole grains, potatoes, beans, vegetables.`,
`Digestion of simple carbohydrates:
Broken down quickly into glucose for immediate energy.`,
`Digestion of complex carbohydrates:
Gradually broken into glucose, releasing energy over time.`,
`Blood glucose effects:
Simple carbohydrates spike blood sugar; complex carbohydrates keep levels steady.`,
`Health benefits:
Complex carbohydrates support digestive health and stable energy; too many simple sugars may harm health.`,
`Amino acids:
Building blocks of proteins required for body growth and repair.`,
`Complete proteins:
Contain all essential amino acids, found in meat, fish, eggs, dairy, soy.`,
`Incomplete proteins:
Lack one or more essential amino acids, found in most plant foods.`,
`Protein complementation:
Combining plant proteins (e.g. beans with rice) to obtain all essential amino acids.`,
`Saturated fats:
Fats with no double bonds, mainly from animal sources, linked to raised cholesterol.`,
`Unsaturated fats:
Fats with one or more double bonds, mainly from plants and fish, beneficial for heart health.`,
`Essential fatty acids:
Fats the body cannot make, required for brain function, cell health and inflammation control.`,
`Functions of fats:
Provide energy, absorb fat-soluble vitamins, protect organs and insulate the body.`,
`Glycaemic index (GI):
A measure of how quickly a carbohydrate food raises blood glucose.`,
`Managing blood sugar:
Choosing low-GI carbohydrates, balancing meals, and spacing intake throughout the day.`
];


const flashcardsQA = [
  {
    question: "What are carbohydrates?",
    choices: ["Energy-providing compounds", "Fats", "Vitamins", "Proteins"],
    answer: "Energy-providing compounds"
  },
  {
    question: "What is the difference between simple and complex carbohydrates?",
    choices: ["Fibre content", "Digestion speed and structure", "Only calories", "Vitamin content"],
    answer: "Digestion speed and structure"
  },
  {
    question: "Which foods are sources of simple carbohydrates?",
    choices: ["Legumes", "Fruits and sugars", "Seeds", "Whole grains"],
    answer: "Fruits and sugars"
  },
  {
    question: "Which foods are sources of complex carbohydrates?",
    choices: ["Meat", "Milk", "Fruits and honey", "Whole grains and vegetables"],
    answer: "Whole grains and vegetables"
  },
  {
    question: "How are simple carbohydrates digested?",
    choices: ["Not digested", "Quickly into glucose", "Slowly into amino acids", "Stored as protein"],
    answer: "Quickly into glucose"
  },
  {
    question: "How are complex carbohydrates digested?",
    choices: ["Quickly into glucose", "Slowly into glucose", "Into fatty acids", "Not digested"],
    answer: "Slowly into glucose"
  },
  {
    question: "What effect do simple carbohydrates have on blood glucose?",
    choices: ["No change", "Gradual rise", "Lower glucose", "Rapid rise"],
    answer: "Rapid rise"
  },
  {
    question: "What effect do complex carbohydrates have on blood glucose?",
    choices: ["No effect", "Rapid rise", "Drop", "Gradual rise"],
    answer: "Gradual rise"
  },
  {
    question: "What is the health benefit of complex carbohydrates?",
    choices: ["Sustained energy and fibre", "Quick sugar boost", "Increases cholesterol", "Builds muscle"],
    answer: "Sustained energy and fibre"
  },
  {
    question: "Give an example of a carbohydrate-rich food.",
    choices: ["Chicken", "Butter", "Rice", "Cheese"],
    answer: "Rice"
  },
  {
    question: "What is the main function of carbohydrates?",
    choices: ["Muscle repair", "DNA synthesis", "Hormone production", "Energy"],
    answer: "Energy"
  },
  {
    question: "What happens with inadequate carbohydrate intake?",
    choices: ["Fatigue", "Better immunity", "Bone loss", "Hair growth"],
    answer: "Fatigue"
  },
  {
    question: "What happens with excessive carbohydrate intake?",
    choices: ["Improved mood", "Muscle loss", "Dehydration", "Weight gain"],
    answer: "Weight gain"
  },
  {
    question: "What is blood sugar also called?",
    choices: ["Lactose", "Sucrose", "Glucose", "Starch"],
    answer: "Glucose"
  },
  {
    question: "What is the glycaemic index (GI)?",
    choices: ["Carb calorie content", "Protein quality", "How fast carbs raise blood sugar", "Fat quality"],
    answer: "How fast carbs raise blood sugar"
  },
  {
    question: "What is the glycaemic load (GL)?",
    choices: ["Amount of fibre", "Fat content", "GI adjusted for portion size", "Protein content"],
    answer: "GI adjusted for portion size"
  },
  {
    question: "How can blood sugar be managed through carbs?",
    choices: ["Eat only sugar", "Eat more fat", "Avoid water", "Choose low-GI foods"],
    answer: "Choose low-GI foods"
  },
  {
    question: "What are amino acids?",
    choices: ["Protein building blocks", "Fats", "Carbohydrates", "Minerals"],
    answer: "Protein building blocks"
  },
  {
    question: "How many essential amino acids are there?",
    choices: ["20", "9", "3", "11"],
    answer: "9"
  },
  {
    question: "What are complete proteins?",
    choices: ["Contain all essential amino acids", "Contain only carbs", "Are plant only", "Lack amino acids"],
    answer: "Contain all essential amino acids"
  },
  {
    question: "What are incomplete proteins?",
    choices: ["Contain all amino acids", "Contain only fats", "Lack one or more essential amino acids", "Have vitamins only"],
    answer: "Lack one or more essential amino acids"
  },
  {
    question: "What is protein complementation?",
    choices: ["Adding vitamins to protein", "Combining plant foods for all amino acids", "Cooking protein with carbs", "Eating more fat"],
    answer: "Combining plant foods for all amino acids"
  },
  {
    question: "Give an example of protein complementation.",
    choices: ["Fish and chips", "Bread and butter", "Beans and rice", "Milk and cereal"],
    answer: "Beans and rice"
  },
  {
    question: "What are saturated fats?",
    choices: ["Fats with no double bonds", "Fats with double bonds", "Sugars", "Healthy plant oils"],
    answer: "Fats with no double bonds"
  },
  {
    question: "What are unsaturated fats?",
    choices: ["Sugars", "Fats with one or more double bonds", "Proteins", "Solid fats"],
    answer: "Fats with one or more double bonds"
  },
  {
    question: "Give a source of saturated fat.",
    choices: ["Fish", "Olive oil", "Butter", "Nuts"],
    answer: "Butter"
  },
  {
    question: "Give a source of unsaturated fat.",
    choices: ["Beef fat", "Butter", "Olive oil", "Cream"],
    answer: "Olive oil"
  },
  {
    question: "What are essential fatty acids?",
    choices: ["Fats we must eat", "Proteins", "Fats we produce", "Sugars"],
    answer: "Fats we must eat"
  },
  {
    question: "Give an example of essential fatty acid.",
    choices: ["Omega-3", "Saturated fat", "Trans fat", "Sucrose"],
    answer: "Omega-3"
  },
  {
    question: "What is the role of fats?",
    choices: ["Energy, vitamin absorption, protection", "Hydration", "Protein synthesis", "Hormone only"],
    answer: "Energy, vitamin absorption, protection"
  }
];
