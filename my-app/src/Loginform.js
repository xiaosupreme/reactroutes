import React, { useState } from 'react';
import App from './home';
import './main.css';
const LoginForm = () => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [loggedIn, setLoggedIn] = useState(false);
 const [error, setError] = useState('');
 const users = [
 { username: 'adam', password: 'rootpass' },
 { username: 'king', password: 'safepass' },
 { username: 'zero', password: 'safepass' },
 ];
 const handleLogin = () => {
 const user = users.find(user => user.username === username && user.password ===
password);
 if (user) {
 setLoggedIn(true);
 setError('');
 } else {
 setLoggedIn(false);
 setError('Invalid combination of username and password');
 }
 };
 const handleLogout = () => {
 setLoggedIn(false);
 setUsername('');
 setPassword('');
 };

 return (
 <div>
 {loggedIn ? (
 <div >
 <App/>
 <button class='butlogout' onClick={handleLogout}>Logout</button>
 </div>
 ) : (
 <div class="primecontain">
 <p class="title">Login</p>
 <input type="text" class="input" placeholder="Username"value={username}
onChange={(e) => setUsername(e.target.value)}/>
 <br />
 <hr width='300px' color="white"/><br/>
 <br />
 <input type="password" class="input" placeholder="Password"
value={password} onChange={(e) => setPassword(e.target.value)}/>
 <br />
 <hr width='300px' color="white"/><br/>
 <br />
 {error && <p class='message'>{error}</p>}
 <br />
 <button class='butcal' onClick={handleLogin}>Login</button>

 </div>
 )}
 </div>
 );
};
export default LoginForm;