import ComponentLayer from 'interfaces/ComponentLayer'

const kwicAlphabetizer = (): ComponentLayer => {
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  }

  function alphabetize(words: String[][]) {
    const sentences = []
    for (let i = 0; i < words.length; i++) {
      const sentence = words[i].join(' ')
      sentences.push(capitalize(sentence))
    }
    return sentences
  }

  function sortSentences(sentences: String[]) {
    return sentences.sort()
  }

  function executeFunction(words: String[][]) {
    const alphabethized = alphabetize(words)
    return sortSentences(alphabethized)
  }

  return {
    executeFunction,
  }
}

export default kwicAlphabetizer
