// src/components/IngredientList.jsx
const IngredientList = (props) => {
    return (
      <ul>
        {props.ingredients.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => props.onClick(ingredient)}>+</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default IngredientList;
  