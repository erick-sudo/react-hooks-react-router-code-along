import React from 'react';

function Login() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <div>
            <label>Username:</label>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
}

export default Login;