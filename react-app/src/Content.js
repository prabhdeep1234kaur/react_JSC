import { useState } from "react";

const Content = () => {
    /**
     * name : current state; 
     * setName: setting the change in it
     * usetState(default Value init)
     * we have set name as "Prabh" > default
     * when handleNameChange is called (on click) > we are setting setName : state changed
     * 
     * */
    const[name, setName] = useState('Prabh');//not directly changing it

    const [count, setCount] = useState(0); //default is 0

    const handleNameChange = () => {
      const names = ['Uoo', 'Tanya', 'Sam', 'Nelly'];
      const int = Math.floor(Math.random() * names.length); // Fix the index to be within bounds
      //return names[int];
      setName(names[int]); //state is setting here
    }

    const handleClick = () =>{
      setCount(count + 1);
      setCount(count + 1);
      console.log(count);
    }

    const handleClick2 = () =>{
      console.log(count);
    }
    return (
      <main>
          <p onDoubleClick={handleClick}>
            Hello {name}, your shopping list is as follows:
          </p>

          <button onClick={handleNameChange}>Click it!</button>

          <button onClick={handleClick}>Click name</button>

          <button onClick={handleClick2}>Click Event</button>
      </main>
    );
  };

  //() is not added after some func : otherwise they will be clicked immediatly like handleNameChange
  //handleClick2 is not clicked : because it is anonymous function
  
  export default Content