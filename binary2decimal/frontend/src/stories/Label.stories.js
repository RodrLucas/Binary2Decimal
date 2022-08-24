import React from "react";
import { Label } from "../components/Label";

export default {
    title: 'Components/Label',
    component: Label
}

const Template = args => <Label {...args} />

export const Primary = Template.bind({})
Primary.args = {
    text: "Insira o binário"
}
