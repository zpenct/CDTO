import { TFilter, useAllCollections } from "../hooks";
import  {
  BookCard,
  CharacterCard,
  HouseCard,
  SpellCard,
} from "../components/item";
import Container from "../components/layout/container";
import { TBook, TChar, THouse, TSpell } from "../types";
import HeroSection from "../components/layout/hero";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

function HarryPotterPage() {
  const [searchParams] = useSearchParams();

  const [filter, setFilter] = useState<TFilter>({
    search: searchParams.get("search") ?? "",
    page: Number(searchParams.get("page")) || 1,
    type: searchParams.get("type") ?? "",
  });

  const [books, chars, spells, houses] = useAllCollections(filter);

  return (
    <>
      <HeroSection setFilter={setFilter} />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          paddingBottom: 100,
          paddingTop: 100,
        }}
      >
        {(filter.type === "books" || filter.type === "") && (
          <Container isLoading={books.isLoading} titleSection="Book">
            {books.data?.map((item: TBook) => (
              <BookCard key={item.number} book={item} />
            ))}
          </Container>
        )}
        {(filter.type === "characters" || filter.type === "") && (
          <Container isLoading={chars.isLoading} titleSection="Character">
            {chars.data?.map((item: TChar, index: number) => (
              <CharacterCard key={index} character={item} />
            ))}
          </Container>
        )}
        {(filter.type === "houses" || filter.type === "") && (
          <Container isLoading={houses.isLoading} titleSection="Houses">
            {houses.data?.map((item: THouse, index: number) => (
              <HouseCard key={index} house={item} />
            ))}
          </Container>
        )}
        {(filter.type === "spells" || filter.type === "") && (
          <Container isLoading={spells.isLoading} titleSection="Spells">
            {spells.data?.map((item: TSpell, index: number) => (
              <SpellCard key={index} spell={item} />
            ))}
          </Container>
        )}
      </main>
    </>
  );
}

export default HarryPotterPage;
