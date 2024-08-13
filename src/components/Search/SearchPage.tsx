import axios from "axios";
import { debounce } from "lodash";
import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ResourcesType } from "../../types/SWApi";
import logo from "../../logo.svg"
import { Logo, Description, SearchInput, ResultsContainer, CategoryContainer, CategoryTitle, ResultsList, ResultItem, CategoryButton, SearchContainer } from "./SearchPageStyles";

function SearchPage() {

    interface CategoryResult {
      type: string;
      results: { name?: string; title?: string }[];
    }
  
    const [query, setQuery] = useState('');
    const [categoryResults, setCategoryResults] = useState<CategoryResult[]>([]);
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
    };
  
   
  
    const fetchResults = async () => {
      try {
        const requests = Object.values(ResourcesType).map((type) =>
          axios.get(`https://swapi.dev/api/${type}/?search=${query}`)
            .then(response => ({
              type,
              results: response.data.results.slice(0, 3), 
            }))
        );
  
        const results = await Promise.all(requests);
        setCategoryResults(results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    const debouncedFetchResults = useCallback(debounce(fetchResults, 500), [query]);
  
    useEffect(() => {
      if (query) {
        debouncedFetchResults();
      }
      return () => {
        debouncedFetchResults.cancel();
        setCategoryResults([]);
      };
    }, [query, debouncedFetchResults]);
  
    const navigate = useNavigate();
    
    const handleCategoryClick = (category: string) => {
      navigate(`/category/${category}`);  
    };
  
    return (
      <SearchContainer>
          <Logo src={logo} />
          <Description>
            What do you want to see? Start typing 
          </Description>
          <SearchInput type="search" autoComplete="off" name="search-form" id="search-form" 
            onChange={handleInputChange} placeholder="Search..." />
           <ResultsContainer>
            {categoryResults.map((category) => (
              <CategoryContainer key={category.type}>
                <CategoryTitle>{category.type}</CategoryTitle>
                <ResultsList>
                  {category.results.map((result, index) => (
                    <ResultItem key={index}>{result.name || result.title}</ResultItem>  
                  ))}
                </ResultsList>
                <CategoryButton onClick={() => handleCategoryClick(category.type)}>
                  Some Button for {category.type}
                </CategoryButton>
              </CategoryContainer>
            ))}
             </ResultsContainer>
      </SearchContainer>
    );
  }

  export default SearchPage;