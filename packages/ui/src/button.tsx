interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      className='p-2 text-red-500 border-2 border-indigo-600 min-w-40 '
      {...rest}>
      {children}
    </button>
  );
};
