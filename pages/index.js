import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { api } from "../services/api/api";
import { Item } from "../components/Item";
import { Header } from "../components/Header";

export const Store = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState(items);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        let res = await api.fetch();
        const data = await res.json();
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
    </StoreContainer>
  );
};

const StoreContainer = styled.div``;

export default Store;
