import React, { useState } from "react";
import * as styles from "@/components/styles/Search.styles";
import SearchIcon from "@/assets/svg/Search.svg";
import Image from "next/image";

interface SIProps {
  isSearch: boolean;
  setIsSearch: Function;
  input: string;
  setInput: Function;
  setOperateFilter: Function;
}

const SearchInput = ({
  isSearch,
  setIsSearch,
  input,
  setInput,
  setOperateFilter,
}: SIProps) => {
  const handleOnClickSearch = () => {
    setIsSearch(!isSearch);
  };

  const handleInputChange = (event: any) => {
    setInput(event.target.value);
  };

  return (
    <>
      {isSearch ? (
        <styles.SearchExpandBox>
          <styles.SearchInput
            value={input}
            placeholder="제휴하려는 가게를 찾아보세요!"
            onChange={handleInputChange}
          />
          <styles.SearchIconBox
            onClick={() => {
              setOperateFilter((prev: any) => ({
                ...prev,
                name: input,
              }));
            }}
          >
            <SearchIcon alt="search icon" />
          </styles.SearchIconBox>
        </styles.SearchExpandBox>
      ) : (
        <styles.SearchBox onClick={handleOnClickSearch}>
          <SearchIcon alt="search icon" />
        </styles.SearchBox>
      )}
    </>
  );
};

export default SearchInput;
