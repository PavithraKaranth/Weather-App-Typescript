import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import WeatherApp from './Weather';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/WeatherApp',
  component: WeatherApp,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as ComponentMeta<typeof WeatherApp>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WeatherApp> = (args) => (
  <WeatherApp  />
);

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
