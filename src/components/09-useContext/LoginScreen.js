import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const {setUser} = useContext(UserContext);

    const userlogin = {
        id:123,
        name:'pablo',
        email: 'pablo@gmail.com'
    } 

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <button 
                className='btn btn-primary' 
                onClick={()=> setUser(userlogin)}
            >
                Login
            </button>
        </div>
    )
}
