
function ingredient(A, S) {
    return A.filter(recipe => {
      const recipeIngredients = new Set(recipe);
      return recipe.split('').every(ingredient => S.includes(ingredient) && S.split(ingredient).length - 1 >= recipeIngredients.size);
    }).length;
  }

console.log(ingredient( ["az", "azz", "zza", "zzz", "zzzz"], "azzz"))