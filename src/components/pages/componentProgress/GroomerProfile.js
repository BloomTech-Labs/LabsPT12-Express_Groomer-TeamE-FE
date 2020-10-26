import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useOktaAuth } from '@okta/okta-react';
import axiosWithAuth from '../../../api/axiosWithAuth';
import GroomerEditForm from '../componentProgress/GroomerEditForm';
// Styling
import {EditOutlined} from '@ant-design/icons';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';

// Styling
const ProfileContainer = styled.div`
border:solid black 2px;
width: 90%;
margin: 0 auto;

.groomer-business-name{
  font-size:35px;
  margin-left:50px;
}

.section-header{
  display:flex;
  justify-content:space-around;
  margin-top:5px;
}

`;
const BannerImage = styled.img`
width:100%;
margin: 5px 0px;
`;
const Header = styled.header`
display: flex;
justify-content:space-between;
  h2{
  width:40%;
  font-size:25px;
  align-self:center;
  margin-left: 20px;
}
`;
const GroomerInfo = styled.div`
display:flex;
justify-content:space-evenly;

p{
  width:50%;
}
li{
  list-style-type:none;
}
.anticon-edit{
  align-self:flex-end;
}
`;


const GroomerProfile = () => {
  const { authState } = useOktaAuth();
  const [groomerData, setGroomerData] = useState({})
  const [showPopUp, setShowPopUp] = useState(true)

// axios call to get groomer data
  useEffect(() =>{
    axiosWithAuth()
    axios.get('http://localhost:8000/profiles/00ulthapbErVUwVJy4x6', {
      headers: {
          Authorization: `Bearer ${authState.idToken}`,
        },
    })
    .then(response =>{
      console.log(response)
      setGroomerData(response.data)
    })
    .catch(error =>{
      console.error(error)
    })
  },[authState, showPopUp])

  // Functions 
  function handleClick(e){
    e.preventDefault();
    console.log('clicked')
    setShowPopUp(true)
  }

  return (
    <ProfileContainer className="groomerProfileContainer">
    <Header>
      <h2>Express Groomers</h2>
      <Avatar
      style ={{margin:'10px'}}
      size={45} 
      icon={<UserOutlined/>}
      src = {groomerData.avatarUrl}
      />
    </Header>
    <section className="middle-content">
      <BannerImage className = "banner" 
      src={"https://via.placeholder.com/720x150"}
      />
      <div className ="section-header">
        <h2 className ="groomer-business-name">Groomer's Business Name</h2>
        <EditOutlined
        onClick ={handleClick} 
        style={{ color: 'black', fontSize:'25px' }}
        />
        {showPopUp ? <GroomerEditForm groomerData ={groomerData} setShowPopUp={setShowPopUp}/> : null }
      </div>
      <GroomerInfo className='information'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur sapien a elit iaculis faucibus. Donec molestie, lacus et consequat luctus, odio mi sagittis lacus, vitae blandit nibh libero quis justo. Sed ac pellentesque augue, vitae vestibulum quam. Pellentesque at laoreet ligula. Nunc aliquet lacus urna, vitae eleifend risus venenatis sit amet. Donec pellentesque mollis tortor sed tincidunt. Vestibulum fermentum egestas quam, quis posuere nisl pretium ut. Praesent suscipit porttitor erat. Suspendiss</p>
        <div className="business-hours">
          <ul>
            <li>999-999-9999</li>
            <li>{groomerData.email}</li>
            <br/>
            <li>123 Street Name</li>
            <li>City, State,Zip</li>
            <br/>
            <li>Hours of Operation</li>
            <li>Mon 12-12</li>
            <li>Mon 12-12</li>
            <li>Mon 12-12</li>
            <li>Mon 12-12</li>
            <li>Mon 12-12</li>
          </ul>
          <button>Go To Messages</button>
        </div>
      </GroomerInfo>
    </section>
    </ProfileContainer>
  );
};

export default GroomerProfile;