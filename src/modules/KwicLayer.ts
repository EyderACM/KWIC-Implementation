import kwicSplit from './KwicSplit'
import kwicCombinations from './KwicCombinations'
import kwicAlphabetizer from './KwicAlphabetizer'

const kwicLayer = () => {
  function determineKwic(sentence: String) {
    const splitSentece = kwicSplit.splitSentence(sentence)
    const sentenceCombinations = kwicCombinations.combineWords(splitSentece)
    const alphabetized = kwicAlphabetizer.alphabetize(sentenceCombinations)
    return kwicAlphabetizer.sortSentences(alphabetized)
  }

  return {
    determineKwic,
  }
}

export default kwicLayer()
