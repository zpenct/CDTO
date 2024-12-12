import React from "react";
import styled from "styled-components";

interface ContainerProps {
  isLoading: boolean;
  skeletonCount?: number;
  children: React.ReactNode;
  titleSection?: string;
  subtitleSection?: string;
}

const Container: React.FC<ContainerProps> = ({
  isLoading,
  skeletonCount = 3,
  children,
  titleSection,
  subtitleSection,
}) => {
  return (
    <Root>
      <Title>{titleSection}</Title>
      <Subtitle>{subtitleSection}</Subtitle>
      {isLoading ? (
        Array(skeletonCount)
          .fill(0)
          .map((_, index) => <SkeletonCard key={index} />)
      ) : (
        <GridWrapper>{children}</GridWrapper>
      )}
    </Root>
  );
};

export default Container;

const Root = styled.div`
  margin: 0 auto;
  max-width: 1200px;

  @media (max-width: 900px) {
    padding: 8px;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkeletonCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  background: #f5f5f5;
  animation: pulse 1.5s infinite;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sedikit bayangan untuk card */
  height: 300px; /* Ukuran tetap untuk skeleton card */

  @keyframes pulse {
    0% {
      background-color: #f5f5f5;
    }
    50% {
      background-color: #e0e0e0;
    }
    100% {
      background-color: #f5f5f5;
    }
  }

  & > div {
    height: 150px; /* Ukuran gambar skeleton */
    width: 100%; /* Membuat gambar memanjang memenuhi lebar */
    background: #ccc;
    border-radius: 4px;
    margin-bottom: 16px;
  }

  & > span {
    flex: 1;
    height: 16px;
    background: #ccc;
    border-radius: 4px;
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
`;
