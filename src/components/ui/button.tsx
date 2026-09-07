export const Button = ({children, className, asChild, ...props}: any) => {
  const Tag = asChild ? 'span' : 'button';
  return (<Tag className={className} {...props}>{children}</Tag>);
};
export default Button;