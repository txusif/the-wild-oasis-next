function FilterButton({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`px-5 py-2 hover:bg-primary-700 ${filter === activeFilter ? "bg-primary-700" : ""}`}
    >
      {children}
    </button>
  );
}

export default FilterButton;
