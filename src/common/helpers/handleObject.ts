export function handleNormalizeObject(mongoObject: { [key: string]: any }) {
  const arrayObjects = Object.values(mongoObject)

  const normalizedEntries = arrayObjects.map(object => {
    const objectEntries = Object.entries(object)
    const newObject = objectEntries.reduce((acc, entry) => {
      const newKey = entry[0].toString().toLowerCase().split(' ').join('')

      return {
        ...acc,
        [newKey]: entry[1]
      }
    }, {})

    return newObject
  })

  return normalizedEntries
}
