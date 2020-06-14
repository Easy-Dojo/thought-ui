import {FC} from 'react'

import Menu, {MenuProps} from "./menu";
import MenuItem, {MenuItemProps} from "./menuItem";
import SubMenu, {SubMenuProps} from "./subMenu";

export type IMenuComponent = FC<MenuProps> & {
    Item: FC<MenuItemProps>,
    SubMenu: FC<SubMenuProps>,
}

const FinalMenu = Menu as IMenuComponent;

FinalMenu.Item = MenuItem;
FinalMenu.SubMenu = SubMenu;

export default FinalMenu;
