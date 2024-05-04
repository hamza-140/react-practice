import { useEffect, useState } from 'react';

function Api() {
  const [pokemon, setPokemon] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    if (buttonDisabled) return;
    const id = Math.floor(Math.random() * (500 - 1) + 1);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch Pokemon details");
      }
      const data = await response.json();
      setPokemon(data);
      setButtonDisabled(true);
      setTimeout(() => {
        setButtonDisabled(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {pokemon ? (
        <div>
          <img style={{ width: '220px', height: '220px' }} src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
          <h2>{pokemon.name}</h2>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button className="new" onClick={fetchPokemon} disabled={buttonDisabled}>New</button>
    </div>
  );
}

export default Api;
