import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [firstname, setfirstname] = useState('');
  const [lastname,setLastname]=useState('');
  const[fullname,setFullname]=useState('');

  const handleSubmit = (event)=>{
    event.preventDefault();
    if(firstname==='' || lastname===''){
      alert("Please fill out this field");
    }
    else{
      const firstname=event.target.firstname.value;
    const lastname=event.target.lastname.value;
    setFullname(`${firstname} ${lastname}`)
    }
    
  }

  return (
    <>
      <div style={{ textAlign: 'center' }}>Full Name Display</div>
<div>
  <form onSubmit={handleSubmit}>
    <label htmlFor="firstname">First Name: </label>
    <input type="text" id="firstname" name="firstname" required />
    <br /><br />

    <label htmlFor="lastname">Last Name: </label>
    <input type="text" id="lastname" name="lastname" required/>
    <br /><br />

    <button type="submit">Submit</button>
  </form>
</div>
<div>Full Name : {fullname}</div>

         </>
  )
}

export default App
