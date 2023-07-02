import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    
  },
};

export const Primary = {
  args: {
    primary: 'primary',
    children: 'Primary',
  },
};

export const Secondary = {
  args: {
    primary: 'secondary',
    children: 'Secondary',
  },
};

export const Outlined = {
  args: {
    primary: 'outlined',
    children: 'Outlined',
  },
};


export const Large = {
  args: {
    size: 'large',
    children: "Large"
  },
};

export const Medium = {
  args: {
    size: 'medium',
    children: "Medium"
  },
};

export const Small = {
  args: {
    size: 'small',
    children: "Small"
  },
};
