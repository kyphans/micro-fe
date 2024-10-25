interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      className='text-red-500 border-2 border-indigo-600 w-40'
      {...rest}>
      {children}
    </button>
  );
};
