import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
// Fontawesome
import 'font-awesome/css/font-awesome.min.css';

const GroomerProfile = () => {
  const { authState } = useOktaAuth();

  return (
    <div className="groomerProfileContainer">
    <header>
      <h2>Express Groomers</h2>
      <div>Search</div>
      <button>Search </button>
      <img src="https://via.placeholder.com/50x50"/>
    </header>
    

      <img src="https://via.placeholder.com/720x100"/>
      <h2>Groomer's Business Name</h2>
      <button>Edit</button>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur sapien a elit iaculis faucibus. Donec molestie, lacus et consequat luctus, odio mi sagittis lacus, vitae blandit nibh libero quis justo. Sed ac pellentesque augue, vitae vestibulum quam. Pellentesque at laoreet ligula. Nunc aliquet lacus urna, vitae eleifend risus venenatis sit amet. Donec pellentesque mollis tortor sed tincidunt. Vestibulum fermentum egestas quam, quis posuere nisl pretium ut. Praesent suscipit porttitor erat. Suspendiss</p>
      <div className='information'>
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