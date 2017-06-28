'use strict'

import test from 'ava'
import pokemonF from 'pokemon-f'
import m from './'

test(async t => {
  const catchRate = 163
  const hpMax = 35
  const hpCurrent = 29
  const ball = 12
  const ballMod = 255

  t.is(await m(catchRate, ballMod, pokemonF(hpMax, ball, hpCurrent)), 1)
})
