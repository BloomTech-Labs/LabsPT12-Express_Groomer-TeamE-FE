import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useOktaAuth } from '@okta/okta-react';
// Styling
import {EditOutlined} from '@ant-design/icons';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const GroomerProfile = () => {
  const { authState } = useOktaAuth();
  const [groomerData, setGroomerData] = useState([])

// // axios call to get groomer data
//   useEffect(() =>{
//     axios.get('http://localhost:8000/profile')
//     .then(response =>{
//       setGroomerData(response.data)
//     })
//     .catch(error =>{
//       console.error(error)
//     })
//   },[])

  return (
    <div className="groomerProfileContainer">
    <header>
      <h2>Express Groomers</h2>
      <div  style={{ border: 'solid black 1px'}}>Search</div>
      <button>Search </button>
      <Avatar size={45} icon={<UserOutlined/>}/>
    </header>
    

      <img src="https://via.placeholder.com/720x100"/>
      <h2>Groomer's Business Name</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur sapien a elit iaculis faucibus. Donec molestie, lacus et consequat luctus, odio mi sagittis lacus, vitae blandit nibh libero quis justo. Sed ac pellentesque augue, vitae vestibulum quam. Pellentesque at laoreet ligula. Nunc aliquet lacus urna, vitae eleifend risus venenatis sit amet. Donec pellentesque mollis tortor sed tincidunt. Vestibulum fermentum egestas quam, quis posuere nisl pretium ut. Praesent suscipit porttitor erat. Suspendiss</p>
      <div className='information'>
      <EditOutlined style={{ color: 'black', fontSize:'25px' }}/>
        <ul>
          <li>999-999-9999</li>
          <li>123 Street Name</li>
          <li>City, State,Zip</li>
          <li>Hours of Operation</li>
          <li>Mon 12-12</li>
          <li>Mon 12-12</li>
          <li>Mon 12-12</li>
          <li>Mon 12-12</li>
          <li>Mon 12-12</li>
        </ul>
        <button>Go To Messages</button>
      </div>
    </div>
  );
};

export default GroomerProfile;