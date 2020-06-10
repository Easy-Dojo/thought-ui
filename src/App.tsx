import React from 'react';
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Icon from "./components/Icon/icon";

library.add(fas)

function App() {
    return (
        <div className="App">
            <Icon icon='coffee' theme='danger'/>
            <Button onClick={(e) => {
                console.log(e)
            }}>Hello</Button>
            <Button disable>Disabled Button</Button>
            <Button btnType='primary' size='lg'>Large Primary Button</Button>
            <Button btnType='danger' size='sm'>Small Danger Button</Button>
            <Button target="_blank" btnType='link' href="#">Link Button</Button>
            <Button btnType='link' size='sm' disable>Small Danger Link</Button>
            <hr/>

            <Menu mode="horizontal" onSelect={(index) => {
                alert(index)
            }} defaultOpenSubMenus={[]} defaultIndex="0">
                <MenuItem>
                    menu 1
                </MenuItem>
                <MenuItem disabled>
                    menu 2
                </MenuItem>
                <SubMenu title="dropdown">
                    <MenuItem>
                        dropdown 1
                    </MenuItem>
                    <MenuItem>
                        dropdown 2
                    </MenuItem>
                </SubMenu>
                <MenuItem>
                    menu 3
                </MenuItem>
            </Menu>
        </div>
    );
}

export default App;
