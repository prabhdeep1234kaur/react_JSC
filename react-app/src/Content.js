const Content = () => {
    const handleNameChange = () => {
      const names = ['Uoo', 'Tanya', 'Sam', 'Nelly'];
      const int = Math.floor(Math.random() * names.length); // Fix the index to be within bounds
      return names[int];
    }

    const handleClick = () =>{
      console.log("You clicked it");
    }
    const handleClick2 = (name) =>{
      console.log("You clicked "+name);
    }
    const handleClick3 = (e) =>{
      //full event logged with e;
      console.log(e.target.innerText); 
    }
    return (
      <main>
          <p onDoubleClick={handleClick}>
            Hello {handleNameChange()}, your shopping list is as follows:
          </p>
          <button onClick={handleClick}>Click it!</button>
          <button onClick={() => handleClick2("Pingu")}>Click name</button>
          <button onClick={(e) => handleClick3(e)}>Click Event</button>
      </main>
    );
  };

  //() is not added after some func : otherwise they will be clicked immediatly like handleNameChange
  //handleClick2 is not clicked : because it is anonymous function
  
  export default Content