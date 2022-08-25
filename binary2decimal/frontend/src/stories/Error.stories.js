import React from "react";
import { ErrorText } from "../components/ErrorText";

export default {
    title: 'Components/ErrorText',
    component: ErrorText,

}

const Template = args => <ErrorText {...args} />

export const Primary = Template.bind({})
Primary.args = {
    error: "Por favor, insira um binário válido"
}
