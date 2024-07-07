export function getStrArray(str: string, len: number) {
  const arr = []
  while (str !== '') {
    let text = str.substr(0, len)
    // If the next line exists and the first character of the next line is not a space
    if (str.charAt(len) !== '' && str.charAt(len) !== ' ') {
      const index = text.lastIndexOf(' ')
      if (index !== -1) text = text.substr(0, index)
    }
    str = str.replace(text, '').trim()
    arr.push(text)
  }
  return arr
}
