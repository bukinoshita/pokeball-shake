import { getPokeball, Pokeballs } from 'get-pokeball'

export function pokeballShake(
  catchRate: number,
  pokeball: Pokeballs,
  f: number,
  statusAilment: number = 0
) {
  const ball = getPokeball(pokeball)
  const d = (catchRate * 100) / ball.value.d
  const x = (d * f) / 255 + statusAilment

  if (d >= 256) {
    return 3
  }

  if (x < 10) {
    return 0
  }

  if (x < 30) {
    return 1
  }

  if (x < 70) {
    return 2
  }

  return 3
}
