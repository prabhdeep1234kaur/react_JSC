import { useState, useEffect } from "react";
import Header from './Header';
import SearchItem from "./SearchItem";
import AddItem from "./AddItem";
import Content from './Content';
import Footer from './Footer';
import apiRequest from "./apiRequest";

function App() {
  const API_URL = 'http://localhost:3500/items' //it is const and won't change the url
  const [items, setItems] = useState([]); //inital loading the app with this state
  const [newItem, setNewItem] = useState ("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //useEFfect : everytime items change we set new not onload like with setAndSaveitem
  useEffect(()=>{
    //on load time: happens one time and load data from api, but then managed via state
    //async with useEffect : Call async func.
    const fetchItems = async () => {
      try{
        const response = await fetch(API_URL);
        //look for error
        if(!response.ok) throw Error('Did not receive expected data');        
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null); 
      }catch(err){
        setFetchError(err.message);
      }finally{
        setIsLoading(false);
      }
    }
    //calling the async function : fetchItem does not return a value. therefore, this async IIFE is not required. just make a call to fetchitems()
    setTimeout(() => { //to replicate a server API (slowness)
      (async () => await fetchItems())();
    }, 2000);
  }, [])


  //adding item
  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id+1 : 1;
    const myNewItem = {id, checked: false, item};
    const listItems = [...items, myNewItem];
    setItems(listItems);

    //CRUD operation : UPDATE/POST
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }
    const result = await apiRequest(API_URL, postOptions);
    if(result) setFetchError(result);
  }

  //drilling functions too
  const handleCheck = async (id) => { //arrow func
    const listItems = items.map((item)=>item.id === id ? {
      ...item, 
      checked: !item.checked
    } : item);
    setItems(listItems);

    //CRUD operation : UPDATE/PATCH
    const myItem = listItems.filter(
      (item)=>item.id === id
    );
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: myItem[0].checked })
    };
    const reqUrl =  `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if(result) setFetchError(result);

  }

  const handleDelete = async (id) => {
    const newList = items.filter(
      (item)=>item.id !== id
    ); //clears new arr of filtered items which is not equal to id we sent, so removed the item
    setItems(newList);

    //CRUD operation : DELETE
    const deleteOptions = {  method: 'DELETE' };
    const reqUrl =  `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if(result) setFetchError(result);
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
      <main>
        {
          isLoading && <p> Loading Items ... </p>
        }
        {
          fetchError && <p style={{color: "red"}}>{`Error: ${fetchError}`}</p>
        }
        {!fetchError && !isLoading && <Content 
          items={items.filter(item => (item.item).toLowerCase().includes(search.toLocaleLowerCase()))} //being passed to content
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
