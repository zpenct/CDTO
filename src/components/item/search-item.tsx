import React from "react";
import { Input } from "../ui/input";
import { useSearchParams } from "react-router-dom";
import { TFilter } from "../../hooks";

interface Props {
  className?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  setFilter?: (filter: TFilter | ((prev: TFilter) => TFilter)) => void;
}

const SearchInput: React.FC<Props> = ({
  setFilter,
  className,
  placeholder,
  ...rest
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = React.useState(
    searchParams.get("search") ?? ""
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchParams({ search: searchTerm });
    setFilter?.((prev) => ({
      ...prev,
      search: searchTerm,
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    rest.onChange?.(e.target.value);
  };

  return (
    <form onSubmit={onSubmit} style={{ height: "40px" }}>
      <Input
        type="search"
        value={searchTerm}
        onChange={handleChange}
        className={className}
        placeholder={placeholder}
      />
    </form>
  );
};

export default SearchInput;