import React from "react";
import { Result } from "../components/Result";

export default {
    title: 'Components/Result',
    component: Result
}

const Template = args => <Result {...args} />

export const Primary = Template.bind({})
Primary.args = {
    result: "25",
}
