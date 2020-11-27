import ComponentLayer from 'interfaces/ComponentLayer'

const kwicSplit = (): ComponentLayer => {
  function splitSentence(sentence: String) {
    return sentence.split(' ')
  }

  function executeFunction(sentence: String) {
    return splitSentence(sentence)
  }

  return {
    executeFunction,
  }
}

export default kwicSplit
