'use strict'

import test from 'ava'
import pokemonF from 'pokemon-f'
import m from './'

test(async t => {
  const catchRate = 163
  const hpMax = 35
  const hpCurrent = 29
  const f = await pokemonF(hpMax, 'pokeball', hpCurrent)

  t.is(await m(catchRate, 'pokeball', f), 1)
})
