import React from 'react';

import { Button } from './styles';

interface ButtonProps {
  onClick?(): void;
}

const ButtonComponent: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <Button onClick={onClick} type="button">
      {children}
    </Button>
  );
};

export default ButtonComponent;
