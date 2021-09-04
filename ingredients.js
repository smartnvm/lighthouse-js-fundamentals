const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let count = 0;
let items = ingredients.length
do {
  console.log(ingredients[count]);
  count++;
} while (count < items)

// Write a for loop that prints out the contents of ingredients:
for (const item of ingredients) {
  console.log(item)
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let i = items - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}