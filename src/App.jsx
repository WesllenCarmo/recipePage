import './App.css'
import RecipeCard from './components/RecipeCard.jsx'
import recipeImage from './assets/images/image-omelette.jpeg'

function App() {

  return (
    <div className="App">
      <RecipeCard
      recipeImage={recipeImage}
      title="Simple Omelette Recipe"
      description="An easy and quick dish, perfect for any meal. This classic omelette combines beaten  eggs cooked to perfection, optionally filled with you choice of cheese, vegetables, or meats."
      totalTime="10 minutes"
      prepTime="5 minutes"
      cookTime="5 minutes"
      ingredients={[
        "2-3 large eggs",
        "Salt, to taste",
        "Pepper, to taste",
        "1 tablespoon butter or oil",
        "Optional fillings: cheese, diced vegetables, cooked meats, herbs"
      ]}
      instructions={[
        {
          id: 1,
          title: "Beat the eggs",
          text: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffer texture.",
        },
        { id: 2,
          title: "Heat the pan",
          text: "Place a non-stick frying pan over medium heat and add butter or oil.",
        },
        { id: 3,
          title: "Cook the omelette",
          text: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
        },
        { id: 4,
          title: "Add fillings (optonal)",
          text: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen filling over one half of the omelette.",
        },
        {
          id: 5,
          title: "Fold and serve",
          text: "As the omelette continues to cook, carefully lift one edge and fold it over the filling. Let it cook for another minute, then slide it onto a plate.",
        },
        {
          id: 6,
          title: "Enjoy",
          text: "Serve hot, with additional salt and pepper if needed."
        }
      ]}
      nutrition={{
        calories: "277kcal",
        carbs: "0g",
        protein: "20g",
        fat: "22g"
      }}
      />
    </div>
  )
}

export default App
