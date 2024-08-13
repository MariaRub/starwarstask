import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
`;

export const Table = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const Th = styled.th`
  background-color: #f5f5f5;
  padding: 12px 15px;
  border: 1px solid #ddd;
  text-align: left;
  font-weight: bold;
`;

export const Td = styled.td`
  padding: 12px 15px;
  border: 1px solid #ddd;
  text-align: left;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 20px; /* Расстояние между элементами */
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
  }

  &:hover:not(:disabled) {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  &:active:not(:disabled) {
    transform: scale(0.95);
  }
`;

export const PageInfo = styled.span`
  font-size: 16px;
  color: #333;
`;
