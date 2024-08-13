import React from 'react';
import { useParams } from 'react-router-dom';
import { ResourcesType } from '../../types/SWApi';
import CategoryTable from '../CategoryTable.tsx/CategotyTable';
import { Container, Title } from './CategoryPageStyles';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: keyof typeof ResourcesType }>();
  const title =  category![0].toUpperCase() + category!.slice(1);

  return (
    <Container>
        <Title>{title}</Title>
        {category && <CategoryTable category={category} />}
    </Container>
  );
};

export default CategoryPage;