// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
    return (
      <ul>
        {props.stack.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => props.onClick(index)}>x</button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default BurgerStack;
  