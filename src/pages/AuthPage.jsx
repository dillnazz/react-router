import React from 'react'

const AuthPage = () => {
  return (
    <div>AuthPage
        <div style={{
            width:500,
            margin:"50px auto",
        textAlign:"center"
            
        }}>
        <form>
            <label>
                Name
                <input type="text"/>
            </label>
            <br/>
            <br/>
            <label>
                Email
                <input type="text"/>
            </label>
            <br/>
            <br/>
            <input type="submit"/>
        </form>
        </div>
    </div>
  )
}

export default AuthPage