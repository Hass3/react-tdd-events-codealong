import { useState } from "react";

function App() {
  const[isChecked, setIsChecked] = useState(false)
  return (
    <div>
      <h1>Selected Pizza Topping</h1>
      <input 
      type="checkbox"
      id="pepperoni"
      checked={isChecked}
      aria-checked={isChecked}
      onChange={(e)=> setIsChecked(e.target.checked)}
    />
    <label htmlFor="pepperoni">Add pepperoni</label>
    <h2>Your Toppings:</h2>
    <ul>
      <li>Cheese</li>
      {isChecked ? <li>Pepperoni</li> : null}
    </ul>
    </div>
  )
}

export default App;
