/**
 * ## Pokemon
 * Pokémon are the creatures that inhabit the world of the Pokémon games.
 * They can be caught using Pokéballs and trained by battling with other Pokémon.
 * Each Pokémon belongs to a specific species but may take on a variant
 * which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings.
 * - See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)) for greater detail.
 */
export interface PokemonModel {
  /** The identifier of the pokemon */
  id: number;
  /** The url to get the whole info about this pokemon */
  url?: string;
  /** The name of the pokemon  */
  name: string;
  /** The base experience gained for defeating this Pokémon */
  base_experience: number;
  /** The height of this Pokémon in decimetres */
  height: number;
  /** Set for exactly one Pokémon used as the default for each species */
  is_default: boolean;
  /** Order for sorting. Almost national order, except families are grouped together */
  order: number;
  /** The weight of this Pokémon in hectograms */
  weight: number;
  /** A link to a list of location areas, as well as encounter details pertaining to specific versions */
  location_area_encounters: string;

  /** A set of sprites used to depict this Pokémon in the game.
   * A visual representation of the various sprites can be found at [PokeAPI/sprites](https://github.com/PokeAPI/sprites#sprites)
   */
  sprites: PokemonSprites;
}

/**
 * A set of sprites used to depict this Pokémon in the game.
 * A visual representation of the various sprites can be found at [PokeAPI/sprites](https://github.com/PokeAPI/sprites#sprites)
 */
export interface PokemonSprites {
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null;
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null;
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null;
  /** The shiny female depiction of this Pokémon from the front in battle */
  front_shiny_female: string | null;
  /** The default depiction of this Pokémon from the back in battle */
  back_default: string | null;
  /** The shiny depiction of this Pokémon from the back in battle */
  back_shiny: string | null;
  /** The female depiction of this Pokémon from the back in battle */
  back_female: string | null;
  /** The shiny female depiction of this Pokémon from the back in battle */
  back_shiny_female: string | null;
  other: {
    'official-artwork': {
      front_default: string;
    }
  }
}
