import './App.css';
import logo from './assets/react.svg';

const items = [
  'persistence',
  'patience',
  'consistent',
  'interest',
  'time management',
];
let title = 'Some of the recipe to learn REACT';
let year = '2024';
let symbol = '©';

function Header({ _title }) {
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

function Footer({ _year, _symbol }) {
  return (
    <>
      <hr />
      <h3>
        copyright {symbol} {year}
      </h3>
    </>
  );
}

function App() {
  return (
    <>
      <Header _title={title} date={new Date().getFullYear()} />
      <Main recipes={items} />
      <Footer _year={year} _symbol={symbol} />
    </>
  );
}

export default App;
