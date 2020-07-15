import *as React  from 'react';
import { Route } from "react-router-dom";
import { UsersBuilder } from '../containers/UsersBuilder';
import { UserDetails } from '../components/Users/UserDetails/UserDetails';
import '../components/Users/Users.css';

const RoutingUsers = () =>{
  
  
  
   
  return (

    <>

    <Route path="/" exact component={UsersBuilder} />
   
      
      <Route path="/:login" exact component={UserDetails} />
   
   </>
  );
  

}

export default RoutingUsers;

