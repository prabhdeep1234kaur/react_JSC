import ItemList from "./ItemList";

const Content = ({items, handleCheck, handleDelete}) => {
    return (
      <>
        {items.length ? (
          <ItemList 
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ) : (
          <p style={{
            marginTop : '2rem'
          }} >Your List is Empty</p>
        )}
      </>
    );
  };

  //() is not added after some func : otherwise they will be clicked immediatly like handleNameChange
  //handleClick2 is not clicked : because it is anonymous function

  //npm install react-icons --save || npm install react-icons -D : utilizes es6 imports and utilizes only we need
  
  export default Content