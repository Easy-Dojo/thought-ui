import React from 'react';
import Button, {ButtonSiz, ButtonType} from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from "./components/Button/menuItem";

function App() {
    return (
        <div className="App">
            <Button onClick={(e) => {
                console.log(e)
            }}>Hello</Button>
            <Button disable>Disabled Button</Button>
            <Button btnType={ButtonType.Primary} size={ButtonSiz.Large}>Large Primary Button</Button>
            <Button btnType={ButtonType.Danger} size={ButtonSiz.Small}>Small Danger Button</Button>
            <Button target="_blank" btnType={ButtonType.Link} href="#">Link Button</Button>
            <Button btnType={ButtonType.Link} size={ButtonSiz.Small} disable>Small Danger Link</Button>
            <hr/>

            <Menu defaultIndex={0}>
                <MenuItem index={0}>
                    menu 1
                </MenuItem>
                <MenuItem  index={1} disabled>
                    menu 2
                </MenuItem>
                <MenuItem  index={2}>
                    menu 3
                </MenuItem>
            </Menu>
        </div>
    );
}

export default App;
