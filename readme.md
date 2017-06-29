# pokeball-shake [![Build Status](https://travis-ci.org/bukinoshita/pokeball-shake.svg?branch=master)](https://travis-ci.org/bukinoshita/pokeball-shake)

> Algorithm to determine how many times pokeball shakes


## Install

```
$ npm install --save pokeball-shake
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

returns a `promise`

#### catchRate

Type: `integer`<br/>
Required

Pokemon's catch rate

#### pokeball

Type: `string`<br/>
Required<br/>
Options: `pokeball`, `greatball`, `ultraball` and `safariball`

Pokeball's name

#### f

Type: `integer`<br/>
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

- [catch-pokemon](https://github.com/bukinoshita/catch-pokemon) — Algorithm to catch a pokemon
- [pokemon-capture-quote](https://github.com/bukinoshita/pokemon-capture-quote) — Pokemon capture quote
- [pokemon-f](https://github.com/bukinoshita/pokemon-f) — Algorithm to calculate `f` on capture pokemon method


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
