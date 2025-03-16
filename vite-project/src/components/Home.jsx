import React, { useState } from 'react';

const Home = () => {

const [name, setName] = useState('');
const [isLoggedIn, setIsLoggedIn] = useState(false);

const handleLoginLogout = () => {
if (isLoggedIn) {

setName('');
setIsLoggedIn(false);
} else {

setIsLoggedIn(true);
}
};

const handleInputChange = (event) => {
setName(event.target.value);
};

return (
<div>
<h2>Home Page</h2>
{isLoggedIn ? (
<div>
<h1>Welcome, {name}!</h1>
<button onClick={handleLoginLogout}>Logout</button>
</div>
) : (
<div>
<input
type="text"
value={name}
onChange={handleInputChange}
placeholder="Enter your name"
/>
<button
onClick={handleLoginLogout}
disabled={name.trim() === ''}
>
Login
</button>
</div>
)}
</div>
);
};

export default Home;

