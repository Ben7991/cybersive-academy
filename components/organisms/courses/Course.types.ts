export type FilterProps = {
  onSetFilter: (filter: Filters) => void;
  activeFilter: Filters;
};

export type CourseType = {
  image: string;
  category: Filters;
  title: string;
  description: string;
};

export type Filters = "all" | "defense" | "operations" | "offensive";
