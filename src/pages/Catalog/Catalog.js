import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useParams } from "react-router";
import { category as cate } from "../../api/tmdbApi";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
function Catalog() {
  const { category } = useParams();
  console.log(category);
  return (
    <>
      <PageHeader>{category === cate.movie ? "Movie" : "Tv Series"}</PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category}></MovieGrid>
        </div>
      </div>
    </>
  );
}

export default Catalog;
