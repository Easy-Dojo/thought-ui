import {action} from "@storybook/addon-actions";
import React from "react";
import Button from "./button";

const styles: React.CSSProperties = {
    textAlign: "center"
}
const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>

export default {
    title: 'Button',
    component: Button,
    decorators: [CenterDecorator],
};

export const DefaultButton = () =>
    <Button onClick={action('clicked')}>Default Button</Button>;

DefaultButton.story = {
    name: '默认按钮',
};

export const buttonWithDifferentSize = () =>
    <>
        <Button size="lg">Large Button</Button>
        <Button>Default Button</Button>
        <Button size="sm">Small Button</Button>
    </>

export const buttonWithDifferentType = () =>
    <>
        <Button btnType="primary">Primary Button</Button>
        <Button btnType="default">Default Button</Button>
        <Button btnType="danger">Danger Button</Button>
        <Button btnType="link" href="https://www.baidu.com" target="_blank">Link Button</Button>
    </>
