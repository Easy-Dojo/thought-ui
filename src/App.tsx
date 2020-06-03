import React from 'react';
import Button, {ButtonSiz, ButtonType} from './components/Button/button';

function App() {
  return (
    <div className="App">
      <Button onClick={(e)=>{console.log(e)}}>Hello</Button>
      <Button disable>Disabled Button</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSiz.Large}>Large Primary Button</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSiz.Small}>Small Danger Button</Button>
      <Button target="_blank" btnType={ButtonType.Link} href="#">Link Button</Button>
      <Button btnType={ButtonType.Link} size={ButtonSiz.Small} disable>Small Danger Link</Button>
    </div>
  );
}

export default App;
