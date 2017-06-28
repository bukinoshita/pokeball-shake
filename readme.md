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

const f = pokemonF(35, 12, 29)
pokeballShake(163, 255, f)
// => Pokeball shaked `1` time before pokemon goes free.
```


## API

### pokeballShake(catchRate, ballMod, f, [statusAilment])

returns a `promise`

#### catchRate

Type: `number`<br/>
Required

Pokemon's catch rate

#### ballMod

Type: `number`<br/>
Required<br/>
Options:
- Poké Ball: `255`
- Great Ball: `200`
- Ultra Ball: `150`
- Safari Ball: `150`

Ball mod value

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
- 25 if frozen or asleep


## Related

- [catch-pokemon](https://github.com/bukinoshita/catch-pokemon) — Pokemon game - Gotta catch 'em all
- [pokemon-capture-quote](https://github.com/bukinoshita/pokemon-capture-quote) — Pokemon capture quote
- [pokemon-f](https://github.com/bukinoshita/pokeball-shake-quote) — Algorithm to calculate `f` on capture pokemon method


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
