import React from "react";
import Content from "./Content";
import SearchFilter from "./SearchFilter";

const Home = ({
  data,
  loading,
  handleSearch,
  search,
  handleRegion,
  region,
}) => {
  return (
    <>
      <SearchFilter
        handleSearch={handleSearch}
        handleRegion={handleRegion}
        region={region}
      />
      <Content data={data} loading={loading} search={search} region={region} />
    </>
  );
};

export default Home;
