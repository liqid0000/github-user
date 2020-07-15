import *as React  from 'react';
import { useState } from 'react';

import { Users } from '../components/Users/Users';

import '../components/Users/Users.css';
export const UsersBuilder: React.FC<any> = () => { 

  type user =  {
    id: string,
    login: string,
    avatar_url: string,        
   };

  const [ users, setUsers ] = useState<Array<user>>( [] );
  
     
  return (

     <Users users = {users} setUsers={setUsers} scrollable />
  );
  

}





