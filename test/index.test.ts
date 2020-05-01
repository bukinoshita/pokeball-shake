import { pokemonF } from 'pokemon-f'
import { Pokeballs } from 'get-pokeball'

import { pokeballShake } from '../source'

test('pokebal shake', () => {
  const catchRate = 163
  const hpMax = 35
  const hpCurrent = 29
  const f = pokemonF(hpMax, Pokeballs.Pokeball, hpCurrent) as number

  expect(pokeballShake(catchRate, Pokeballs.Pokeball, f)).toBe(1)
})

test('poisoned, burned, or paralyzed', () => {
  const catchRate = 163
  const hpMax = 35
  const hpCurrent = 29
  const f = pokemonF(hpMax, Pokeballs.Pokeball, hpCurrent) as number

  expect(pokeballShake(catchRate, Pokeballs.Pokeball, f, 12)).toBe(2)
})

test('frozen or asleep', () => {
  const catchRate = 163
  const hpMax = 35
  const hpCurrent = 29
  const f = pokemonF(hpMax, Pokeballs.Pokeball, hpCurrent) as number

  expect(pokeballShake(catchRate, Pokeballs.Pokeball, f, 25)).toBe(2)
})
