const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
    try{
        const response = await fetch(url, optionsObj);
        if(!response.ok) throw Error('Please reload the app');    
    } catch(err){
        errMsg = err.message;
    } finally {//always execute
        return errMsg; //whatever happens it just returns this
    }
}

export default apiRequest;

//option object will have either rrquest, delete, update etc