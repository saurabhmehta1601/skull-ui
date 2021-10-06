import React from "react"
import Button from "./Button"

export default {
    title:'UI/Button',
    component: Button,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
}

const Template = (args) => <Button {...args} /> 
export const Default = Template.bind({})
Default.args = {
    label:"Button"
}