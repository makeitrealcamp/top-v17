import { FC, CSSProperties } from 'react';

const styles: CSSProperties = {
  backgroundColor: 'red',
  color: 'white',
  padding: '20px',
};

const InlineStyleComponent: FC = ({ children }) => <div style={styles}>{children}</div>;

export default InlineStyleComponent;
