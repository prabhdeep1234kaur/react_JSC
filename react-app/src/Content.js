const Content = () => {
    const handleNameChange = () => {
      const names = ['Uoo', 'Tanya', 'Sam', 'Nelly'];
      const int = Math.floor(Math.random() * names.length); // Fix the index to be within bounds
      return names[int];
    }
    
    return (
      <main>
          <p>Hello {handleNameChange()}, your shopping list is as follows:</p>
      </main>
    );
  };
  
  export default Content