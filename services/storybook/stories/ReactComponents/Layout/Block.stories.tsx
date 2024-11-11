// import type { Meta, StoryObj } from '@storybook/react';
 
// import { YourComponent } from './YourComponent';
 
// //👇 This default export determines where your story goes in the story list
// const meta: Meta<typeof YourComponent> = {
//   component: YourComponent,
// };
 
// export default meta;
// type Story = StoryObj<typeof YourComponent>;
 
// export const FirstStory: Story = {
//   args: {
//     //👇 The args you need here will depend on your component
//   },
// };

import { Block as _Block } from '@kyh/react-components-layout';
import "@kyh/react-components-layout/style.css";

export default {
  title: "React Components/Layout/Block",
  component: _Block,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
}

export const BlockStory = {};