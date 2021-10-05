import styled from 'styled-components';
import SearchIcon from '../../assets/icons/magnifying_glass.svg';

const Search = () => {
  return (
    <SearchContainer>
      <SearchIcon />
      <input
        placeholder='디스콰이엇 검색하기'
        className='search-input'
        type='text'
      ></input>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  margin-left: 24px;
  background-color: #f5f5f7;
  border-radius: 32px;
  padding: 6px 6px 6px 8px;

  .search-input {
    border: none;
    background-color: rgba(0, 0, 0, 0);
    outline: none;
    font-size: 14px;
    ::placeholder {
      font-size: 14px;
      line-height: 1.6em;
      color: #8e8e8e;
    }
  }
`;

export default Search;
