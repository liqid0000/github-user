import * as React from 'react';
import {Link} from 'react-router-dom';

type user = {
    id: string,
    login: string,
    avatar_url: string,
};

export const User: React.FC<user> = ({id,login,avatar_url}) => { 
  
   return (    
       
    <Link to={'/' + login} key={id}>
    <div className="card" style={{width: '18rem'}} >      
    <div className="card-body">
    <img className="card-img-top" src={avatar_url} alt="Card image cap" />
    <h5 className="card-title">{login}</h5>
       
    </div>
    </div>      
     </Link>

   )
};

