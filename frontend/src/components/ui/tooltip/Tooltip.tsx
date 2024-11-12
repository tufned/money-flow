import React, { cloneElement, FC, isValidElement, useState } from 'react';

interface TooltipProps {
  children: React.ReactElement<{ onMouseEnter: () => void; onMouseLeave: () => void }>;
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip: FC<TooltipProps> = ({ children, text, position = 'bottom' }) => {
  const [isHidden, setIsHidden] = useState(true);

  const generatePositionClass = () => {
    const spacing = '108%';
    switch (position) {
      case 'top':
        return `bottom-[${spacing}]`;
      case 'bottom':
        return `top-[${spacing}]`;
      case 'left':
        return `right-[${spacing}]`;
      case 'right':
        return `left-[${spacing}]`;
    }
  };

  const enhancedChildren = isValidElement(children)
    ? cloneElement(children, {
        onMouseEnter: () => setIsHidden(false),
        onMouseLeave: () => setIsHidden(true)
      })
    : children;

  return (
    <div className='relative flex justify-center items-center hover:'>
      {!isHidden && (
        <div
          className={`absolute ${generatePositionClass()} bg-primary rounded-md border border-dark py-1 px-2 text-xs whitespace-nowrap`}
        >
          {text}
        </div>
      )}
      {enhancedChildren}
    </div>
  );
};

export default Tooltip;
