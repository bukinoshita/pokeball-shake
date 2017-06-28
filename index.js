'use strict'

module.exports = (catchRate, ballMod, f, statusAilment = 0) => {
  return new Promise((resolve, reject) => {
    if (typeof catchRate !== 'number') {
      reject(new TypeError('Catch Rate is required and should be a number.'))
    }

    if (typeof ballMod !== 'number' || ballMod > 255 || ballMod < 150) {
      reject(new TypeError('Ball mod is required and should be a number.'))
    }

    if (typeof f !== 'number' || ballMod > 255 || ballMod < 1) {
      reject(new TypeError('f is required and should be a number.'))
    }

    const d = catchRate * 100 / ballMod
    const x = d * f / 255 + statusAilment

    if (d >= 256) {
      resolve(3)
    }

    if (x < 10) {
      resolve(0)
    } else if (x < 30) {
      resolve(1)
    } else if (x < 70) {
      resolve(2)
    }

    resolve(3)
  })
}
