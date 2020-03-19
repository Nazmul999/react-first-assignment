import React, { useState, useEffect } from 'react';

import './Account.css'

function Account(){ 
  const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
     
  
    },[])

    return <div className="usr-name">
    
    
    <h5 className="user-mail">
      User Name:
    {
      users.map(user => <h6>Name: {user.name}</h6> )
    }
    </h5>
    <h5 className="user-mail">
      User Email:
    {
      users.map(user => <h6>Email: {user.email}</h6> )
    }
    </h5>
    
    <h5 className="user-mail">
      User address:
    {
      users.map(user => <h6>Web: {user.website}</h6> )
    }
    </h5>
    <h5 className="user-mail">
      User address:
    {
      users.map(user => <h6>Phone: {user.phone}</h6> )
    }
    </h5>
  </div>
}

export default Account;