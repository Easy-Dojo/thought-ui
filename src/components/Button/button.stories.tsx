import {action} from "@storybook/addon-actions";
import React from "react";
import Button from "./button";

export default {
    title: 'Button',
    component: Button,
};

export const DefaultButton = () =>
    <Button onClick={action('clicked')}>Default Button</Button>;

export const buttonWithDifferentSize = () =>
    <>
        <Button size="sm">Small Button</Button>
        <br/><br/>
        <Button>Default Button</Button>
        <br/><br/>
        <Button size="lg">Large Button</Button>
    </>

export const buttonWithDifferentType = () =>
    <>
        <Button btnType="primary">Primary Button</Button>
        <br/><br/>
        <Button btnType="default">Default Button</Button>
        <br/><br/>
        <Button btnType="danger">Danger Button</Button>
        <br/><br/>
        <Button btnType="link" href="https://www.baidu.com" target="_blank">Link Button</Button>
    </>
