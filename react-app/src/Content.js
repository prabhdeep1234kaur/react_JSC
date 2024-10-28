import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
    /**
     * name : current state; 
     * setName: setting the change in it
     * usetState(default Value init)
     * we have set name as "Prabh" > default
     * when handleNameChange is called (on click) > we are setting setName : state changed
     * 
     * */
    const[items, setItems] = useState([
      {
        id: 1,
        checked: true,
        item: 'Beige Shoes from Call It Spring'
      },
      {
        id: 2,
        checked: false,
        item: 'Maroon handbag from Coach'
      },
      {
        id: 3,
        checked: false,
        item: 'Sunglasses from Prada'
      }
    ]);//not directly changing it

    const handleCheck = (id) => { //arrow func
      /*
      using higher order function MAP
      1. changing the array list by first looping through it using map
      2. matching the id being checked with array id
      3. if it matches (?), lets change the array from existing to current and checked value to opposite of whatever exists
      4. if it doesn't match (:), lets not change the checked item.

      This won't change the default value and when reload, it goes back to the default state
      */
      
      const listItems = items.map((item)=>item.id === id ? {
        ...item, 
        checked: !item.checked //make it the opposite of what is being in arr
      } : item);
      setItems(listItems); //changing the state (of "checked value in array")
      localStorage.setItem('Shoppinglist', JSON.stringify(listItems)); //saved under Shoppinglist in our local storage

    }

    const handleDelete = (id) => {
      const newList = items.filter(
        (item)=>item.id !== id
      ); //clears new arr of filtered items which is not equal to id we sent, so removed the item
      setItems(newList);
      localStorage.setItem('Shoppinglist', JSON.stringify(newList));
    }

    return (
      <main>
          {items.length ? (
            <ul>
            {items.map((item) => ( //each item in react needs a key : its mandatory => to identify the change/added/removed : react uses response for change
              <li className="item" key={item.id}>
                <input 
                  type="checkbox"
                  onChange={()=>handleCheck(item.id)} //anonymous func
                  checked={item.checked}
                />
                <label 
                  style={(item.checked) ? {textDecoration: "line-through"} : null}
                  onDoubleClick={()=>handleCheck(item.id)}
                >{item.item}
                </label>
                {/*<button>Delete</button>*/}
                <FaTrashAlt 
                  onClick={()=>handleDelete(item.id)}
                  role="button" 
                  tabIndex="0" 
                />
              </li>
            ))}
            </ul>
          ) : (
            <p style={{
              marginTop : '2rem'
            }} >Your List is Empty</p>
          )}
          
      </main>
    );
  };

  //() is not added after some func : otherwise they will be clicked immediatly like handleNameChange
  //handleClick2 is not clicked : because it is anonymous function

  //npm install react-icons --save || npm install react-icons -D : utilizes es6 imports and utilizes only we need
  
  export default Content