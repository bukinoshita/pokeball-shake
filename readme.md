# pokeball-shake [![Build Status](https://travis-ci.org/bukinoshita/pokeball-shake.svg?branch=master)](https://travis-ci.org/bukinoshita/pokeball-shake)

> Algorithm to determine how many times pokeball shakes

## Install

```
$ yarn add pokeball-shake
```

## Usage

```js
const pokeballShake = require('pokeball-shake')
const pokemonF = require('pokemon-f')

const f = await pokemonF(35, 'greatball', 29)

pokeballShake(163, 'greatball', f)
// => Pokeball shaked `2` time before pokemon goes free.
```

## API

### pokeballShake(catchRate, pokeball, f, [statusAilment])

#### catchRate

Type: `number`<br/>
Required

Pokemon's catch rate

#### pokeball

Type: `string`<br/>
Options: `pokeball`, `greatball`, `ultraball` and `safariball`<br/>
Required

Pokeball's name

#### f

Type: `number`<br/>
Required

Algorithm to calculate `f`<br/>
Use [pokemon-f](https://github.com/bukinoshita/pokemon-f) to calculate `f`.

#### statusAilment

Type: `number`<br/>
Default: `0`<br/>
Options:

- `12` if poisoned, burned, or paralyzed
- `25` if frozen or asleep

## Related

- [pokemon-game](https://github.com/bukinoshita/pokemon-game) — Pokemon game — Get 'em all
- [pokedex-api](https://github.com/bukinoshita/pokedex-api) — Pokedex API
- [pokemon-catch-probability](https://github.com/bukinoshita/pokemon-catch-probability) — Check probabilty to catch a pokemon
- [get-pokeball](https://github.com/bukinoshita/get-pokeball) — Get pokeball information
- [catch-pokemon](https://github.com/bukinoshita/catch-pokemon) — Algorithm to catch a pokemon
- [pokemon-capture-quote](https://github.com/bukinoshita/pokemon-capture-quote) — Pokemon capture quote
- [pokemon-f](https://github.com/bukinoshita/pokemon-f) — Algorithm to calculate `f` on capture pokemon method

## License

MIT © [Bu Kinoshita](https://bukinoshita.com)
