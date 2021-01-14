import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { api } from "../services/api/api";
import { Item } from "../components/Item";
import { Header } from "../components/Header";
import { Filter } from "../components/Filter";
import { SearchIcon } from "../components/SearchIcon";

const Store = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState(items);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedSneaker, setSelectedSneaker] = useState("");

  const handleChange = (event) => setSearch(event.target.value);
  useEffect(() => {
    const getItems = async () => {
      try {
        let res = await api.get();
        const data = await res.data;
        console.log(data.results);
        setItems(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getItems();
  }, []);
  useEffect(() => {
    const filterResults = items.filter((sneaker) =>
      sneaker.color.includes(search)
    );
    setSearchResults(filterResults);
  }, [search, items]);
  return (
    <StoreContainer>
      <Header alt="Person Avatar" title="Sneakers" src="/stockPicture.jpg" />
      <Main>
        <FilterContainer>
          <SearchIcon />
          <Filter
            placeholder="Search for your sneaker"
            value={search}
            onChange={handleChange}
          />
        </FilterContainer>
        <ItemArea>
          {searchResults.map((sneaker) => {
            return (
              <Item
                key={sneaker.id}
                item={sneaker}
                handleClick={() => handleClick(sneaker)}
              />
            );
          })}
        </ItemArea>
      </Main>
    </StoreContainer>
  );
};

const StoreContainer = styled.div``;
const Main = styled.main`
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  width: 60%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    width: 98%;
    margin-left: 0;
    margin-right: 0;
  }
`;

const ItemArea = styled.section`
  display: flex;
  flex-flow: row wrap;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #bdbdbd;
  margin: 25px 0;
`;

export default Store;
