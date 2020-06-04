import React from 'react';
import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from "./components/Menu/menuItem";

function App() {
    return (
        <div className="App">
            <Button onClick={(e) => {
                console.log(e)
            }}>Hello</Button>
            <Button disable>Disabled Button</Button>
            <Button btnType='primary' size='lg'>Large Primary Button</Button>
            <Button btnType='danger' size='sm'>Small Danger Button</Button>
            <Button target="_blank" btnType='link' href="#">Link Button</Button>
            <Button btnType='link' size='sm' disable>Small Danger Link</Button>
            <hr/>

            <Menu mode="vertical" defaultIndex={0}>
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
