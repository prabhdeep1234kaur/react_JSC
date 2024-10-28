import { useState } from "react";
import { useEffect } from "react";
import Header from './Header';
import SearchItem from "./SearchItem";
import AddItem from "./AddItem";
import Content from './Content';
import Footer from './Footer';
function App() {

  //data taken from content js
  const[items, setItems] = useState(JSON.parse(localStorage.getItem('Shoppinglist')) || []); //add empty array usful when the app is loaded first time and has an empty array to set the state with
  const[search, setSearch] = useState("");

  //useEFfect : everytime items change we set new
  useEffect(()=>{
    localStorage.setItem('Shoppinglist', JSON.stringify(items));
  }, [items])

  //for form 
  const [newItem, setNewItem] = useState ("");

  //adding item
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id+1 : 1;
    const myNewItem = {id, checked: false, item};
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }

  //drilling functions too
  const handleCheck = (id) => { //arrow func
    const listItems = items.map((item)=>item.id === id ? {
      ...item, 
      checked: !item.checked //make it the opposite of what is being in arr
    } : item);
    setItems(listItems);
  }

  const handleDelete = (id) => {
    const newList = items.filter(
      (item)=>item.id !== id
    ); //clears new arr of filtered items which is not equal to id we sent, so removed the item
    setItems(newList);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    //add item funct
    addItem(newItem);
    setNewItem("");//empty the input
   
  }

  return (
    <div className="App">

      <Header title="Shopping List"/>
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content 
        items={items.filter(item => (item.item).toLowerCase().includes(search.toLocaleLowerCase()))} //being passed to content
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
