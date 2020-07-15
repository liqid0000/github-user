import * as React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';
import {User} from  './User/User';


type user = {
  id: string,
  login: string,
  avatar_url: string,  
 };

type UsersProps = {
  users: Array<user>,
  setUsers: React.Dispatch<React.SetStateAction<user[]>>,  
  scrollable: any,
};


export const Users: React.FC<UsersProps> = ({users,setUsers,scrollable}) => {


const [loadMore, setLoadMore] = useState(true);

  useEffect(() => {
    loadUsers(loadMore);
    setLoadMore(false);
  }, [loadMore]);

  useEffect(() => {
    const list = document.getElementById('list-group')
    if(scrollable) {      
      if(list){
        list.addEventListener('scroll', (e) => {
          const el = e.target;
          if(el && el.scrollTop + el.clientHeight === el.scrollHeight) {
            setLoadMore(true);
          }
        });         
      }
     
     
    } else {      
      window.addEventListener('scroll', () => {
        if (list && window.scrollY + window.innerHeight === list.clientHeight + list.offsetTop) {
          setLoadMore(true);
        }
      });    
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
    
      if ((window.innerHeight + window.scrollY -10) >= document.body.offsetHeight) {
        setLoadMore(true);
        
      }
    });
  }, [users]);

  const getUsersLastId = () =>{
    let id;    
    (users.length > 0) ? id= users[users.length-1].id : id=0;
    return id
  }


  const loadUsers = (load: Boolean) =>{
    const id_user = getUsersLastId();
   
    if(load ){
      axios.get("https://api.github.com/users?since="  + id_user  + "&per_page=10")
      .then(res => {
         const userss = [...res.data].map(user =>{
             return {id: user.id, login: user.login,
               avatar_url: user.avatar_url}
         });                               
          setUsers([...users, ...userss])
      }).catch((err) => {
          console.log(err);
      });
    }
    
  }
  
  

  return (    

<div id="list-group " className="card-deck" >
{
 
    users.map((user: user, _i) => 
    <User {...user}  />   
   
    )     

    
  }
 {loadMore ? <div className="spinner-border" role="status">
    <span className="sr-only">Loading...</span>
</div> : null}

  </div> 
  
  );
}



