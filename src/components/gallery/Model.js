import React, { useContext, useEffect } from 'react'
import "./model.css"
import Loader from '../Loader';
import { GlobalContext } from '../../context/global';
import { useParams} from 'react-router-dom';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { BookmarkContext } from '../../context/bookmark';


function Model() {

  const { pokemon } = useParams()
  const {
    getPokemon, loading, pokemon: pokemonItem
  } =  useContext(GlobalContext)

  const {
    allData,addData
  } =  useContext(BookmarkContext)
    

  useEffect(() => {
    if (pokemon) {
      getPokemon(pokemon);
    }
  }, [pokemon]);

  const present = allData.find(data => data.title === pokemon)

  let myLink = "";

  if (pokemonItem?.sprites?.other) {
    const { "official-artwork": link } = pokemonItem?.sprites?.other;
    myLink = link.front_default;
  }

  return (
    <div
    className="PokemonBg"
    style={{
      background: "#a9cce3",
    }}
  >
    <div onClick={() => {addData(pokemon, pokemonItem?.sprites?.other?.home.front_default)}}>
      {
        present === undefined ?
          <BookmarkBorderIcon style={{transform: 'scale(1.8)', padding: '20'}} />
        : <BookmarkIcon style={{transform: 'scale(1.8)', padding: '20'}} />
      }
    </div>
    {!loading ? (
      pokemonItem && (
        <>
          <div className="PokemonImage" >
            <img
              src={
                pokemonItem?.sprites?.other?.home.front_default
                  ? pokemonItem?.sprites?.other?.home.front_default
                  : myLink
              }
              alt=""
            />
          </div>
          <div className="PokemonBody" >
            <h2>{pokemonItem?.name}</h2>
            <div className="PokemonInfo" >
              <div className="PokemonInfoItem" >
                <h5>Name:</h5>
                <p>{pokemonItem?.name},</p>
              </div>

              <div className="PokemonInfoItem" >
                <h5>Type:</h5>
                {pokemonItem?.types?.map((type) => {
                  return <p key={type.type.name}>{type.type.name},</p>;
                })}
              </div>

              <div className="PokemonInfoItem" >
                <h5>Height:</h5>
                <p>{pokemonItem?.height}</p>
              </div>

              <div className="PokemonInfoItem" >
                <h5>Abilities:</h5>
                {pokemonItem?.abilities?.map((ability) => {
                  return (
                    <p key={ability.ability.name}>{ability.ability.name},</p>
                  );
                })}
              </div>

              <div className="PokemonInfoItem" >
                <h5>Stats:</h5>
                {pokemonItem?.stats?.map((stat) => {
                  return <p key={stat.stat.name}>{stat.stat.name},</p>;
                })}
              </div>

              <div className="PokemonInfoItem" >
                <h5>A few moves:</h5>
                {pokemonItem?.moves?.slice(0, 3).map((move) => {
                  return <p key={move.move.name}>{move.move.name},</p>;
                })}
              </div>
            </div>
          </div>
        </>
      )
    ) : (
      <div className="loader">
        <Loader />
      </div>
    )}
  </div>
  )
}

export default Model