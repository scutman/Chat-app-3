import React from 'react';
import Contact from './Contact'

const ContactList = [
    {
    name: 'Brad',
    avatar: 'https://upload.wikimedia.org/wikipedia/fr/thumb/7/7a/Logo_Daria.svg/1032px-Logo_Daria.svg.png',
    online: true
  },
  {
    name: 'ST',
    avatar: 'https://upload.wikimedia.org/wikipedia/fr/thumb/7/7a/Logo_Daria.svg/1032px-Logo_Daria.svg.png',
    online : true
  },
  { 
    name: 'SV',
    avatar: 'https://upload.wikimedia.org/wikipedia/fr/thumb/7/7a/Logo_Daria.svg/1032px-Logo_Daria.svg.png',
    online: true
  },
  {
    name: 'T',
    avatar: 'https://upload.wikimedia.org/wikipedia/fr/thumb/7/7a/Logo_Daria.svg/1032px-Logo_Daria.svg.png',
    online: true
  },
  {  

    name: 'V',
    avatar: 'https://upload.wikimedia.org/wikipedia/fr/thumb/7/7a/Logo_Daria.svg/1032px-Logo_Daria.svg.png',
    online: true
  }
]

const MyContactList = () =>{
    return(
        <div>
            {ContactList.map(e =>
                <Contact {...e} /> )}
        </div>
    )
}
export default MyContactList