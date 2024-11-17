import { useState } from 'react';
import './App.css';
import logo from './assets/react.svg';

const items = [
  'persistence',
  'patience',
  'consistent',
  'interest',
  'time management',
];

function Header({ title }) {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
}

function Main({ recipes }) {
  return (
    <>
      <h2>welcome to react</h2>
      <main>
        <img src={logo} alt="react_logo" height={100} />
        <ul>
          {recipes.map((recipe, index) => (
            <li
              key={index}
              style={{ listStyleType: 'none', fontWeight: 'lighter' }}
            >
              {recipe}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

function Footer({ symbol, date }) {
  return (
    <>
      <hr />
      <h3>
        copyright {symbol} {date}
      </h3>
    </>
  );
}

function App() {
  const [status, setStatus] = useState(true);
  
  return (
    <>
      <div>
        <h4 style={{fontWeight: 'lighter'}}>User is <span style={status ? {color: 'red'} : {color: 'green'}}>{status ? 'offline' : 'online'}</span> .</h4>
        <div>
          <button onClick={()=> setStatus(!status)}>{status ? 'login' : 'logout'}</button>
        </div>
      </div>
      <Header title="Learn REACT" />
      <Main recipes={items} />
      <Footer date={new Date().getFullYear()} symbol="©" />
    </>
  );
}

export default App;
