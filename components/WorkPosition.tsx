interface Props {
  position: string;
  company: string;
  timeRange: string;
}

export default function WorkPosition({ position, company, timeRange }: Props) {
  return (
    <div className="bg-primary p-4 flex flex-col items-start border-black border-2 rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
      <div className="font-bold">{company}</div>
      <div className="w-full flex justify-between text-sm">
        <div>{position}</div>
        <div className="font-mono">{timeRange}</div>
      </div>
    </div>
  );
}
