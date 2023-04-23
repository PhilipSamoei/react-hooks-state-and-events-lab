import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const[count, setCount] = useState(0);
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  class DarkMode extends React.Component {
    state = {
       setClass: JSON.parse(localStorage.getItem("Mode"))
     };
   
     handleChange = () => {
   
       if (JSON.parse(localStorage.getItem("Mode")) === true)
         this.setState({ setClass: false }, () => {
           localStorage.setItem("Mode", JSON.stringify(false));
         });
       else {
         this.setState({ setClass: true }, () => {
           localStorage.setItem("Mode", JSON.stringify(true));
         });
       }
    };
   
    render() {
      const { setClass } = this.state;
  

      return (
        <div className={appClass}>
          <div className="App dark">
            {/* for dark mode */}
          </div>

          <div className="App light">
            {/* for light mode */}
          </div>
          <header>
          <h2>Shopster</h2>
          <button onClick={() => setCount(count + 1)}>(mode)</button>
          </header>
          <ShoppingList items={itemData} />
          <div className={setClass ? "dark-mode" : "light-mode"}>
          <nav>Dark Mode</nav>
          <main>
          <h1>Light Mode</h1>
          <button onClick={this.handleChange}>Switch</button>
          </main>
          </div>
        </div>
      );
    }
  }
}
export default App;