// Packages
import test from 'ava'
import pokemonF from 'pokemon-f'

// Root
import m from '.'

test('pokebal shake', async t => {
  const catchRate = 163
  const hpMax = 35
  const hpCurrent = 29
  const f = await pokemonF(hpMax, 'pokeball', hpCurrent)

  t.is(await m(catchRate, 'pokeball', f), 1)
})

test('burned', async t => {
  const catchRate = 163
  const hpMax = 35
  const hpCurrent = 29
  const f = await pokemonF(hpMax, 'pokeball', hpCurrent)

  t.is(await m(catchRate, 'pokeball', f, 12), 2)
})

test('frozen', async t => {
  const catchRate = 163
  const hpMax = 35
  const hpCurrent = 29
  const f = await pokemonF(hpMax, 'pokeball', hpCurrent)

  t.is(await m(catchRate, 'pokeball', f, 25), 2)
})

test('catchRate error', async t => {
  const catchRate = '163'
  const hpMax = 35
  const hpCurrent = 29
  const f = await pokemonF(hpMax, 'pokeball', hpCurrent)
  const error = await t.throwsAsync(m(catchRate, 'pokeball', f))

  t.is(error.message, 'Catch Rate is required and should be a number')
})

test('pokeball error', async t => {
  const catchRate = 163
  const hpMax = 35
  const hpCurrent = 29
  const f = await pokemonF(hpMax, 'pokeball', hpCurrent)
  const error = await t.throwsAsync(m(catchRate, 2, f))

  t.is(error.message, 'Pokeball is required and should be a string')
})

test('f error', async t => {
  const catchRate = 163
  const error = await t.throwsAsync(m(catchRate, 'pokeball', 256))

  t.is(error.message, 'f is required and should be a number between 1-255')
})
