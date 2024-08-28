"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import FilterButton from "./FilterButton";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex border border-primary-800">
      <FilterButton
        activeFilter={activeFilter}
        filter="all"
        handleFilter={handleFilter}
      >
        All
      </FilterButton>
      <FilterButton
        activeFilter={activeFilter}
        filter="small"
        handleFilter={handleFilter}
      >
        1&mdash;3 guests
      </FilterButton>
      <FilterButton
        activeFilter={activeFilter}
        filter="medium"
        handleFilter={handleFilter}
      >
        4&mdash;7 guests
      </FilterButton>
      <FilterButton
        activeFilter={activeFilter}
        filter="large"
        handleFilter={handleFilter}
      >
        8&mdash;12 guests
      </FilterButton>
    </div>
  );
}

export default Filter;
