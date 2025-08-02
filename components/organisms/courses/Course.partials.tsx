"use client";

import { FiFilter } from "react-icons/fi";
import { useState } from "react";

import { CourseType, FilterProps, Filters } from "./Course.types";
import Button from "@/components/atoms/button/Button";
import Image from "next/image";
import Headline from "@/components/atoms/headline/Headline";

const FILTERS: Array<{ key: Filters; title: string }> = [
  { key: "all", title: "All" },
  { key: "defense", title: "Defensive Security Track" },
  { key: "operations", title: "Security Operations Track" },
  { key: "offensive", title: "Ofensive Security Track" },
];

export function MobileFilter({ activeFilter, onSetFilter }: FilterProps) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="relative lg:hidden">
      <Button
        el="button"
        type="button"
        variant="light"
        className="flex gap-1 items-center px-4 cursor-pointer"
        onClick={() => setShowFilters(!showFilters)}
      >
        <FiFilter className="text-xl" />
        <span>Filter</span>
      </Button>
      {showFilters && (
        <div className="absolute top-10 right-0 z-[5] bg-white w-64 flex flex-col shadow-lg border border-gray-300 rounded-md">
          {FILTERS.map((filter) => (
            <button
              key={filter.key}
              onClick={() => {
                onSetFilter(filter.key);
                setShowFilters(false);
              }}
              className={`text-left py-2 px-4 inline-block border-b border-b-gray-400 cursor-pointer ${
                filter.key === activeFilter
                  ? "bg-gray-300"
                  : "hover:bg-gray-100"
              }`}
            >
              {filter.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function Tabs({ activeFilter, onSetFilter }: FilterProps) {
  return (
    <div className="hidden lg:flex lg:gap-2">
      {FILTERS.map((filter) => (
        <button
          key={filter.key}
          type="button"
          onClick={() => onSetFilter(filter.key)}
          className={`inline-block py-1.5 px-4 border border-gray-400 cursor-pointer rounded-md ${
            filter.key === activeFilter ? "bg-gray-300" : "hover:bg-gray-100"
          }`}
        >
          {filter.title}
        </button>
      ))}
    </div>
  );
}

export function Course({ category, description, image, title }: CourseType) {
  return (
    <div className="h-full bg-white rounded-md overflow-hidden border border-gray-200 shadow-md relative">
      <span className="inline-block absolute top-4 left-4 bg-[var(--dark-blue-200)] rounded-2xl text-white py-1 px-3 shadow-xl">
        {category.slice(0, 1).toUpperCase() + category.slice(1).toLowerCase()}
      </span>
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="inline-block w-full h-[250px] object-cover"
      />
      <div className="bg-white p-3 xl:p-4">
        <Headline tag="h4" className="mb-2">
          {title}
        </Headline>
        <p className="mb-4">{description}</p>
      </div>
    </div>
  );
}
