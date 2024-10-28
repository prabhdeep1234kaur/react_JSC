import { useState } from "react";
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
function App() {

  //data taken from content js
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


  //drilling functions too
  const handleCheck = (id) => { //arrow func
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
    <div className="App">

      <Header title="Shopping List"/>
      <Content 
        items={items} //being passed to content
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
