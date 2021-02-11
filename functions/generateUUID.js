import { getRandomBytes } from "expo-random"

function concatBytes(target, value) {
  // move bits one byte to the left
  // then replace those values
  return (target << 8) | value
}

// guide used to generate uuids
// https://developer.akamai.com/blog/2019/09/09/how-generating-universally-unique-identifiers-uuids-edge

export default function generateUUID() {
  // This should be compliant with the uuid v4 specification
  const randomBytes = getRandomBytes(16)
  let uuid = ""

  randomBytes.forEach((value, index) => {
    // separated the string into the segments
    if (index === 4 || index === 6 || index === 8 || index === 10) uuid += "-"

    if (index === 6) {
      // beginning of segment 3
      // clear the first 4 bits
      let bin = value & 0b00001111
      // replace those bits with 0b0100
      bin = bin | (0b0100 << 4)

      uuid += concatBytes(bin, randomBytes[7]).toString(16)
    } else if (index === 8) {
      // beginning of segment 4
      let bin = value & 0b00111111
      bin = bin | (0b10 << 6)

      uuid += concatBytes(bin, randomBytes[9]).toString(16)
    } else if (index !== 7 && index !== 9) {
      // 7 and 9 have already been added
      if (value < 16) uuid += "0"
      uuid += value.toString(16)
    }
  })

  return uuid
}