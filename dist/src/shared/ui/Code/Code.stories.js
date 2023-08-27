import { Code } from './Code';
var meta = {
    title: 'shared/Code',
    component: Code,
    tags: ['autodocs'],
};
export default meta;
export var Normal = {
    args: {
        text: 'export default {\n'
            + '    title: \'shared/Code\',\n'
            + '    component: Code,\n'
            + '    argTypes: {\n'
            + '        backgroundColor: { control: \'color\' },\n'
            + '    },\n'
            + '} as ComponentMeta<typeof Code>;\n'
            + '\n'
            + 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n'
            + '\n'
            + 'export const Normal = Template.bind({});',
    },
};
