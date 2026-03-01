"use client";
import { useState } from "react";

export default function PublicationAccordion({ data }: any) {
  const [openYear, setOpenYear] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      {data.map((item: any) => {
        const isOpen = openYear === item.year;

        return (
          <div
            key={item.year}
            className="bg-white border border-brand-light rounded-xl overflow-hidden transition-all duration-300"
          >
            {/* Header */}
            <button
              onClick={() =>
                setOpenYear(isOpen ? null : item.year)
              }
              className="w-full px-6 py-4 flex justify-between items-center text-left font-semibold text-lg hover:bg-brand-light transition"
            >
              <span className="text-brand-primary">
                {item.year}
              </span>

              {/* Rotating Icon */}
              <span
                className={`text-brand-secondary text-xl transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                +
              </span>
            </button>

            {/* Animated Content */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 bg-brand-soft space-y-4">
                  {item.papers.map((paper: any, i: number) => (
                    <div
                      key={i}
                      className="p-4 bg-white rounded-lg border border-brand-light hover:shadow-md transition duration-300 cursor-pointer"
                      onClick={() => window.open(paper.link, paper.link.startsWith("http") ? "_blank" : "_self")}
                    >

                      <p className="font-medium text-gray-800">
                        {paper.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        {paper.journal}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {paper.authors}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}