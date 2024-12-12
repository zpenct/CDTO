import React from "react";
import styled from "styled-components";
import { TBook, TChar, THouse, TProduct, TSpell } from "../../types";

export const BookCard: React.FC<{ book: TBook }> = ({ book }) => (
  <Card>
    <CardImage src={book.cover} alt={book.title} loading="lazy" />
    <CardContent>
      <CardTitle>{book.title}</CardTitle>
      <CardText>Released At: {book.releaseDate}</CardText>
      <CardText>Original title : {book.originalTitle}</CardText>
    </CardContent>
  </Card>
);

export const CharacterCard: React.FC<{ character: TChar }> = ({
  character,
}) => (
  <Card>
    <CardImage src={character.image} alt={character.fullName} loading="lazy" />
    <CardContent>
      <CardTitle>{character.fullName}</CardTitle>
      <CardText>Nickname: {character.nickname}</CardText>
      <CardText>House: {character.hogwartsHouse}</CardText>
      <CardText>Interpreted By: {character.interpretedBy}</CardText>
    </CardContent>
  </Card>
);

export const HouseCard: React.FC<{ house: THouse }> = ({ house }) => (
  <Card>
    <CardContent>
      <CardTitle
        style={{
          fontSize: "3rem",
          borderRadius: "0.5rem",
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      >
        {house.emoji}
      </CardTitle>
      <CardText>{house.house}</CardText>
      <CardText>Founder: {house.founder}</CardText>
      <CardText>Animal: {house.animal}</CardText>
      <CardText>Colors: {house.colors.join(", ")}</CardText>
    </CardContent>
  </Card>
);

export const SpellCard: React.FC<{ spell: TSpell }> = ({ spell }) => (
  <Card>
    <CardContent>
      <CardTitle>
        {spell.spell}
      </CardTitle>
      <SpellUse>{spell.use}</SpellUse>
    </CardContent>
  </Card>
);

interface ProductCardProps {
  product: TProduct;
  onAddToCart: (product: TProduct) => void;
}

export const ProductCard = React.memo(
  ({ product, onAddToCart }: ProductCardProps) => {
    return (
      <Card>
        <CardImage
          src={product.image}
          alt={product.title}
          style={{ height: "200px", objectFit: "cover" }}
          loading="lazy"
        />
        <CardContent>
          <CardTitle>{product.title}</CardTitle>
          <CardText>${product.price}</CardText>
          <ButtonCart onClick={() => onAddToCart(product)}>
            Add to Cart
          </ButtonCart>
        </CardContent>
      </Card>
    );
  }
);

const Card = styled.div`
  max-width: 18rem;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: #fff;
`;

const CardImage = styled.img`
  width: 100%;
`;

const CardContent = styled.div`
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
`;

const CardTitle = styled.h2`
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const CardText = styled.p`
  color: #7f8c8d;
  margin: 0.25rem 0;
  font-size: 0.875rem;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const SpellUse = styled.p`
  color: #7f8c8d;
  padding: 0 1rem 1rem;
  font-size: 0.875rem;

  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 0 0.75rem 0.75rem;
  }
`;

//Make thisn button in bottom right
const ButtonCart = styled.button`
  align-self: end;
  padding: 0.5rem 1rem;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;
