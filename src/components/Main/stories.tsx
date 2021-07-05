import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Title Default',
    description: 'Description Default'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'Boilerplate Reactjs',
  description: 'ReactJS, TypeScript, Jest, Styled Components e StoryBook'
}

export const Default: Story = (args) => <Main {...args} />
