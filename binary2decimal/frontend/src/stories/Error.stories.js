import React from "react";
import { Error } from "../components/ErrorText";

export default {
    title: 'Components/ErrorText',
    component: Error
}

const Template = args => <Error {...args} />

export const Primary = Template.bind({})
Primary.args = {
    error: "Por favor, insira um binário válido"
}
