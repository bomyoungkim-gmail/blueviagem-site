import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, variant = 'primary', to, href, className = '', ...props }) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const combinedClass = `${baseClass} ${variantClass} ${className}`;

  if (to) {
    return <Link to={to} className={combinedClass} {...props}>{children}</Link>;
  }
  
  if (href) {
    return <a href={href} className={combinedClass} {...props}>{children}</a>;
  }

  return <button className={combinedClass} {...props}>{children}</button>;
};

export default Button;
