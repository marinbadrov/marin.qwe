interface Props {
  children: JSX.Element;
}

export default function IconWrapper({ children }: Props) {
  return (
    <div className="cursor-pointer mr-4 flex justify-center items-center h-8 w-8 rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
      {children}
    </div>
  );
}
