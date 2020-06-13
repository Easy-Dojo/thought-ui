import {configure, addDecorator, addParameters} from "@storybook/react";
import '../src/styles/index.scss'
import React from "react";
import {withInfo} from "@storybook/addon-info";

const wrapperStyles: React.CSSProperties = {
    padding: '20px 40px'
}

const storyWrapper = (storyFn: any) => (
    <div style={wrapperStyles}>
        <h3>Component Demo</h3>
        {storyFn()}
    </div>
)

addDecorator(storyWrapper)
addDecorator(withInfo)
addParameters({info: {inline: true, header: false}})

configure(require.context('../src', true, /\.stories\.tsx$/), module);
