import styles from './RecipeCard.module.css';
function RecipeCard({recipeImage, title, description, totalTime, prepTime, cookTime, ingredients, instructions, nutrition}) {
    return (
        <div className={styles.recipeSection}>
            <section className={styles.recipeHeader}>
                <img className={styles.recipeImage} src={recipeImage} alt={title} />
                <h1 className={styles.mainTitle}>{title}</h1>
                <p>{description}</p>
            </section>
            <section className={styles.preparation}>
                <h3 className={styles.terciaryTitle}>Preparation time</h3>
                <ul>
                    <li><strong>Total:</strong> Approximately {totalTime}</li>
                    <li><strong>Preparation:</strong> {prepTime}</li>
                    <li><strong>Cooking:</strong> {cookTime}</li>
                </ul>
            </section>
            <section className={styles.ingredients}>
                <h2 className={styles.secondaryTitle}>Ingredients</h2>
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </section>
            <section className={styles.instructions}>
                <h2 className={styles.secondaryTitle}>Intructions</h2>
                <ol>
                    {instructions.map((instruction) => (
                        <li key={instruction.id}>
                            <p>
                                <strong>{instruction.title}: </strong>
                                {instruction.text}
                            </p>
                        </li>
                    ))}
                </ol>
            </section>
            <section className={styles.nutrition}>
                <h2 className={styles.secondaryTitle}>Nutrition</h2>
                <p>The table below shows nutritional values per serving without the additional fillings.</p>
                <table>
                    <tbody>
                        {Object.entries(nutrition).map(([label, value]) => (
                            <tr key={label}>
                                <td>{label.charAt(0).toUpperCase() + label.slice(1)}</td>
                                <td><span className={styles.nutritionValues}>{value}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    )
}
export default RecipeCard;