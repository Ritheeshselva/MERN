import React from 'react';
import { useState } from 'react';


function App(){
const [id, setid]= useState('');
const [fname, setfname]=useState('');
const [hotel, sethotel]=useState('');


return(
  <>
  <form >
  <label>Food-ID: 
    <input type="text"/>
  </label>
  <label>Food_Name: 
      <input type='text'/>
  </label>
  <label>Hotel_Name: 
    <input type='text'/>
  </label>
<label>Submit:
  <input type='submit'/>
</label>
</form>
  </>


)

}

export default App;
