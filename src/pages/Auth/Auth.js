import React from 'react'
import './Auth.css'
import Left from '../../components/A-left/A-left'

const Auth = () => {
  return (
    <div>
        <div className="Auth">
            <Left />
            <div className="a-right">
                <form action="" className='infoForm authForm'>
                    <h3>Log In</h3>

                    <div className="">
                        <input 
                            type="text" 
                            placeholder='Usernames' 
                            className='infoInput'
                            name='username'
                        />  
                    </div>
                    <div className="">
                        <input 
                            type="text" 
                            placeholder='Password' 
                            className='infoInput'
                            name='password'
                        />  
                    </div>
                    <div className="">
                        <span style={{fontSize: '12px'}}>Dont't have an account Sign up!</span>
                    </div>
                    <button className='button infoButton' type='submit'>Login</button>
                </form>
                {/* <form action="" className='infoForm authForm'>
                    <h3>Sign up</h3>

                    <div className="">
                        <input 
                            type="text" 
                            placeholder='First Name' 
                            className='infoInput'
                            name='firstname'
                        />
                        <input 
                            type="text" 
                            placeholder='Last Name' 
                            className='infoInput'
                            name='lastname'
                        />
                    </div>
                    <div className="">
                        <input 
                            type="text" 
                            placeholder='Usernames' 
                            className='infoInput'
                            name='username'
                        />  
                    </div>
                    <div className="">
                        <input 
                            type="text" 
                            placeholder='Password' 
                            className='infoInput'
                            name='password'
                        />  
                        <input 
                            type="text" 
                            placeholder='Confirm Password' 
                            className='infoInput'
                            name='confirmpass'
                        /> 
                    </div>
                    <div className="">
                        <span style={{fontSize: '12px'}}>Already have an account. Login!</span>
                    </div>
                    <button className='button infoButton' type='submit'>Signup</button>
                </form> */}
            </div>
        </div>
    </div>
  )
}


export default Auth