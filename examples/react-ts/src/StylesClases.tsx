import { FC } from 'react';

type Props = {
  className: 'string'
};

const MyComponent: FC<Props> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
};

export default MyComponent;
