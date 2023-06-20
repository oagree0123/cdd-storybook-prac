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
    label: 'Primary',
  },
};

export const Secondary = {
  args: {
    primary: 'secondary',
    label: 'Secondary',
  },
};

export const Outlined = {
  args: {
    primary: 'outlined',
    label: 'Outlined',
  },
};


export const Large = {
  args: {
    size: 'large',
  },
};

export const Medium = {
  args: {
    size: 'medium',
  },
};

export const Small = {
  args: {
    size: 'small',
  },
};
