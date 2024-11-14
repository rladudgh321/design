import { Box as _Box } from '@kyh/react-components-layout';
import "@kyh/react-components-layout/style.css";

export default {
  title: "React Components/Layout/Box",
  component: _Box,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  },
}

export const BoxStory = {
  args: {
    as: 'button',
    padding: '5',
    background: 'pink',
    boxShadow: 'xl',
    borderRadius: 'md'
  }
};