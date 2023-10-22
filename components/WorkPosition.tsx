"use client";
interface Props {
  position: string;
  company: string;
  timeRange: string;
  workDescription: string[];
}

import { useEffect, useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";

export default function WorkPosition(
  { company, timeRange, workDescription }: Props,
) {
  const [showContent, setShowContent] = useState(false);
  const [contentHeight, setContentHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [showContent]);

  return (
    <div className="w-full max-w-md rounded-md border-2 border-black shadow">
      <button
        role="button"
        aria-expanded={showContent}
        style={{ borderBottom: showContent ? "solid 2px" : "0px" }}
        className="flex w-full items-center justify-between rounded-[5px] border-black bg-primary p-5 font-bold"
        onClick={() => {
          setShowContent(!showContent);
        }}
      >
        <div className="text-black bg-primary flex flex-col space-y-1 items-start">
            <div>{company}</div>
          <div className="font-normal text-sm font-mono">{timeRange}</div>
        </div>
        <FiPlus
          style={{ transform: `rotate(${showContent ? "45deg" : "0"})` }}
          className="ml-4 min-h-[24px] min-w-[24px] transition-transform ease-in-out"
        />
      </button>
      <div
        ref={contentRef}
        style={{ height: showContent ? `${contentHeight}` : "0" }}
        className="overflow-hidden rounded-[5px] font-bold transition-[height] ease-in-out"
      >
        <ul className="p-5 flex flex-col space-y-4">
          {workDescription.map((desc, i) => <li key={i}>- {desc}</li>)}
        </ul>
      </div>
    </div>
  );
}
