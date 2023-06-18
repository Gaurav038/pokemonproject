import React, { useContext, useState } from "react";
import "./gallery.css";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { GlobalContext } from "../../context/global";
import Loader from "../Loader";
import { FilterBar } from "../Filter/FilterBar";

function Gallery() {
  const navigate = useNavigate();
  const {
    loading,
    allPokemon,
    allPokemonData,
    next,
  } =  useContext(GlobalContext)

  return (
    <>
      <div className="gallery">
        <FilterBar />
        <InfiniteScroll
          className="content"
          dataLength={allPokemon?.count || []}
          next={next}
          hasMore={true}
          loader={<Loader />}
        >
          {
          loading 
          ? <Loader />
          :  allPokemonData.map((value) => {
              return (
                <div
                  className="wrapper"
                  key={value.id}
                  onClick={() => {
                    navigate(`/pokemon/${value.name}`);
                  }}
                >
                  <img
                    className="main-image"
                    src={value.sprites.other.home.front_shiny}
                    alt=""
                  />

                  <div className="user">
                    <div className="userDetail">
                      <div className="userName">
                        <p>{value.name}</p>
                      </div>
                    </div>
                    <div className="PokemonInfoItem" >
                      <h5>Type:</h5>
                      {value?.types?.map((type) => {
                        return <p key={type.type.name}>{type.type.name},</p>;
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
        </InfiniteScroll>
      </div>
    </>
  );
}

export default Gallery;
