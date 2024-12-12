import styled from "styled-components";
import SearchInput from "../../item/search-item";
import { TFilter } from "../../../hooks";
import Dropdown from "../../ui/select";
import { useSearchParams } from "react-router-dom";

interface Props {
  setFilter: (filter: TFilter | ((prev: TFilter) => TFilter)) => void;
}
const HeroSection: React.FC<Props> = ({ setFilter }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSelect = (option: string) => {
    setFilter((prev) => ({ ...prev, type: option }));
    setSearchParams({ type: option });
  };

  const options = [
    { value: "", label: "Semua" },
    { value: "books", label: "Book" },
    { value: "characters", label: "Character" },
    { value: "spells", label: "Spell" },
    { value: "houses", label: "House" },
  ];

  return (
    <Hero>
      <HeroTitle>Lorem ipsum dolor sit </HeroTitle>
      <HeroDescription>
        Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
        consectetur
      </HeroDescription>
      <div
        style={{
          width: "90vw",
          maxWidth: 600,
          margin: "0 auto",
          padding: 20,
          display: "flex",
          justifyContent: "center",
          gap: 10,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div style={{ flex: 1, minWidth: "200px" }}>
          <SearchInput setFilter={setFilter} placeholder="Enter your search" />
        </div>
        <div style={{ width: 170 }}>
          <Dropdown
            options={options}
            onSelect={handleSelect}
            placeholder="Choose an option"
            selected_={searchParams.get("type")}
          />
        </div>
      </div>
    </Hero>
  );
};

export default HeroSection;

const Hero = styled.header`
  background-image: url("/bg.png");
  background-size: cover;
  background-position: center;
  padding: 100px 0;
  text-align: center;
  margin-top: -100px;
`;

const HeroTitle = styled.h1`
  color: #fff;
  font-size: 48px;
  font-weight: bold;
`;

const HeroDescription = styled.p`
  color: #eeee;
  font-size: 16px;
  margin-top: 10px;
`;
