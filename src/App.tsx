import React from 'react';
import Button, {ButtonSiz, ButtonType} from './components/Button/button';

function App() {
  return (
    <div className="App">
      <Button disable>Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSiz.Large}>Hello</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com">Baidu</Button>
      <header className="App-header">
        <h1>Hello H1</h1>
        <h2>Hello H2</h2>
        <h3>Hello H3</h3>
        <h4>Hello H4</h4>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <hr/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
