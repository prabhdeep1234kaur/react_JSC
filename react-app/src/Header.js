const Header = ({title}) => {
    const headerStyle={
      backgroundColor: 'teal',
      color: '#fff'
    };

    return (
      <header>
        <h1>{title}</h1>
      </header>
    );
  };

  //default prop : allow us to set value for the prop extented in the component : if no value provided, default is used
  Header.defaultProps = {
    title: "Default Title"
  }
  
  export default Header;
  