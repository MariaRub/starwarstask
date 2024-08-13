import styled from 'styled-components';

export const SearchContainer = styled.div`
  text-align: center;
  padding: 20px;
  min-height: 100vh;
`;

export const ResultsContainer = styled.div`
  max-height: 500px;
  overflow-y: auto;
`;

export const Logo = styled.img`
  height: 80px;
  pointer-events: none;
`;

export const Description = styled.p`
  color: #333;
  font-size: 1.5rem;
`;

export const SearchInput = styled.input`
  padding: 10px;
  width: 400px;
  border-radius: 5px;
  border: 1px solid #007bff;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: #0056b3;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const CategoryContainer = styled.div`
  border-radius: 5px;
  border: 1px solid #007bff;
  width: 400px;
  margin: auto;
`;

export const CategoryTitle = styled.div`
  color: #007bff;
  margin-bottom: 10px;
  background-color: #f0f0ff;
  font-size: 1.5em;
  font-weight: bold;
`;

export const ResultsList = styled.ul`
  list-style-type: none;
  padding: 0;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ResultItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #e9f2ff;
  }
`;

export const CategoryButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
  margin-bottom: 5px;
  &:hover {
    background-color: #0056b3;
  }
`;
