import { FC, HTMLProps } from 'react';

interface CustomHeadingProps extends Omit<HTMLProps<HTMLHeadingElement>, 'loading'> {
  loading?: 'lazy' | 'eager';
}
const CustomHeadingComponent: FC<CustomHeadingProps> = ({ children, className, loading, ...rest }) => {
    return (
      <h2 className={className} {...rest} >
        {children}
      </h2>
    );
  };
  
  export default CustomHeadingComponent;