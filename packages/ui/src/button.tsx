interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <div className="border border-green-500 p-2 bg-green-100">
      <span className="text-[12px] italic text-slate-400">Button UI from Packages/UI</span>
      <br/>
      <button
        className='p-2 text-red-500 border-2 border-indigo-600 min-w-40 bg-indigo-300'
        {...rest}>
        {children}
      </button>
    </div>
  );
};
