import ComponentLayer from 'interfaces/ComponentLayer'

const kwicCombination = (): ComponentLayer => {
  function arrayRotate(arr) {
    arr.unshift(arr.pop())
    return arr
  }

  function combineWords(words: String[]): String[][] {
    const combinations = []
    for (let i = 0; i < words.length; i++) {
      words = arrayRotate(words)
      combinations.push(arrayRotate([...words]))
    }
    return combinations
  }

  function executeFunction(words: String[]) {
    return combineWords(words)
  }

  return {
    executeFunction,
  }
}

export default kwicCombination
