function RecipeCard({recipeImage, title, description, totalTime, prepTime, cookTime, ingredients, instructions, nutrition}) {
    return (
        <div>
            <img src={recipeImage} alt={title} />
            <h1>{title}</h1>
            <p>{description}</p>
            <h3>Preparation time</h3>
            <ul>
                <li><span>Total:</span> Approximately {totalTime}</li>
                <li><span>Preparation:</span> {prepTime}</li>
                <li><span>Cooking:</span> {cookTime}</li>
            </ul>
            <h2>Ingredients</h2>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h2>Intructions</h2>
            <ol>
                {instructions.map((instruction) => (
                    <li key={instruction.id}>
                        <p>
                            <span>{instruction.title}: </span>
                            {instruction.text}
                        </p>
                    </li>
                ))}
            </ol>
            <h2>Nutrition</h2>
            <table>
                <tbody>
                    {Object.entries(nutrition).map(([label, value]) => (
                        <tr key={label}>
                            <td>{label.charAt(0).toUpperCase() + label.slice(1)}</td>
                            <td>{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default RecipeCard;