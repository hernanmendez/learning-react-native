import { getRandomBytes } from "expo-random"

function in8bits(number) {
  let binary = number.toString(2)
  let formattedBinary = "";
  for (let i = 0; i < 8 - binary.length; i++) formattedBinary += "0"
  formattedBinary += binary
  return formattedBinary
}

function replaceFirstBits(binary, string) {
  return string + binary.substring(string.length)
}

// guide used to generate uuids
// https://developer.akamai.com/blog/2019/09/09/how-generating-universally-unique-identifiers-uuids-edge

export default function generateUUID() {
  // This should be compliant with uuid v4
  const randomBytes = getRandomBytes(16)
  let string = ""

  randomBytes.forEach((value, index) => {
    // separated the string into the segments
    if (index === 4 || index === 6 || index === 8 || index === 10) string += "-"

    if (index === 6) {
      // beginning of segment 3
      const binary = replaceFirstBits(in8bits(randomBytes[6]), "0100") + in8bits(randomBytes[7])
      string += parseInt(binary, 2).toString(16)
    } else if (index === 8) {
      // beginning of segment 4
      const binary = replaceFirstBits(in8bits(randomBytes[8]), "10") + in8bits(randomBytes[9])
      string += parseInt(binary, 2).toString(16)
    } else if (index !== 7 && index !== 9) {
      // those values have already been added in previous steps
      if (value < 16) string += "0"
      string += value.toString(16)
    }
  })

  return string
}