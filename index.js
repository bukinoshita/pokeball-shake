'use strict'

const getPokeball = require('get-pokeball')

module.exports = async (catchRate, pokeball, f, statusAilment = 0) => {
  if (typeof catchRate !== 'number') {
    throw new TypeError('Catch Rate is required and should be a number.')
  }

  if (typeof pokeball !== 'string') {
    throw new TypeError('Pokeball is required and should be a string.')
  }

  if (typeof f !== 'number' || f > 255 || f < 1) {
    throw new TypeError('f is required and should be a number.')
  }

  const ball = await getPokeball(pokeball)
  const d = catchRate * 100 / ball.value.d
  const x = d * f / 255 + statusAilment

  if (d >= 256) {
    return 3
  }

  if (x < 10) {
    return 0
  } else if (x < 30) {
    return 1
  } else if (x < 70) {
    return 2
  }

  return 3
}
