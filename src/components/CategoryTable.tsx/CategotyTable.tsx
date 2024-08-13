// CategoryTable.tsx
import React, { useEffect, useState } from 'react';
import fieldsConfig from '../fieldsConfig.json';
import { fetchCategoryData } from '../../api/searchByCategory';
import { Button, Container, PageInfo, PaginationContainer, Table, Td, Th, Tr } from './CategoryTableStyles';

interface CategoryTableProps {
  category: keyof typeof fieldsConfig;
}

const CategoryTable: React.FC<CategoryTableProps> = ({ category }) => {
  const [data, setData] = useState<any[]>([]);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);
  const [prevPageUrl, setPrevPageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);


  const initialUrl = `https://swapi.dev/api/${category}/`;
  debugger
  const fieldsToDisplay = fieldsConfig[category] || [];

  const loadData = async (url: string) => {
    setLoading(true);
    const result = await fetchCategoryData(url);
    if (result) {
      setTotalCount(result.count)
      setData(result.results);
      setNextPageUrl(result.next);
      setPrevPageUrl(result.previous);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData(initialUrl);
  }, [category]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (data.length === 0) {
    return <p>No data found for {category}</p>;
  }

  const rowsPerPage = 10;
  const totalPages = Math.ceil(totalCount/rowsPerPage)

  return (
    <Container>
    {fieldsToDisplay.length > 0 && (
      <>
        <Table>
            <Tr>
              {fieldsToDisplay.map((field) => (
                <Th key={field}>{field}</Th>
              ))}
            </Tr>
            {data.map((item, index) => (
              <Tr key={index}>
                {fieldsToDisplay.map((field) => (
                  <Td key={field}>{item[field]}</Td>
                ))}
              </Tr>
            ))}
        </Table>
        
        <PaginationContainer>
            <Button onClick={() => {prevPageUrl && loadData(prevPageUrl); setCurrentPage(currentPage - 1)}} disabled={!prevPageUrl}>
              Previous
            </Button>
            <PageInfo>{currentPage} of {totalPages}</PageInfo>
            <Button onClick={() => {nextPageUrl && loadData(nextPageUrl); setCurrentPage(currentPage + 1)}} disabled={!nextPageUrl}>
              Next
            </Button>
        </PaginationContainer>
      </>
    )}
  </Container>

    
  );
};

export default CategoryTable;
