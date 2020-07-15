import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

export const UserDetails: React.FC<any> = ({match}) => { 
  
    const [user, setUser] = useState(Object);


    useEffect(() => {        
        loadUsers();  
       
    }
    ,[])

    const loadUsers = () =>{
        if ( match.params.login ) {
            if (user)  {           
               axios.get("https://api.github.com/users/" + match.params.login)
                    .then( response => {
                        
                       let { login, avatar_url, html_url, name, public_repos} =  response.data;
                        setUser( { login, avatar_url, html_url, name, public_repos} );
                    } ).catch((err) => {
                        console.log(err);
                    });
                    
            }
        }
    }

    

   return (    
    
    <div className="container" style={{padding: '60px'}}>
    <h1 className="page-header">{user.login}</h1>
    <div className="row">
    
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="text-center">
          <img src={user.avatar_url} className="avatar img-circle img-thumbnail" alt="avatar" />
         
        </div>
      </div>
     
      <div className="col-md-8 col-sm-6 col-xs-12 personal-info">
        <h3>Personal info</h3>
        <form className="form-horizontal" role="form">
          <div className="form-group">
            <label className="col-lg-3 control-label"><strong>First name:</strong></label>
            <div className="col-lg-8">
           {user.name}
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-3 control-label"><strong>Public Repositories</strong></label>
            <div className="col-lg-8">
              {user.public_repos}
            </div>
          </div>              
          <div className="form-group">
            <label className="col-md-3 control-label"></label>
            <div className="col-md-8">
            <a href={user.html_url} className="btn btn-info" role="button">Github Profile</a>
              <span></span>
              <Link to="/">
              <input className="btn btn-default" value="Back" type="reset" />
              </Link>              
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  

   );
}

