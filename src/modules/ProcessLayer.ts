import kwicSplit from './KwicSplit'
import Layer from './Layer'

const ProcessLayer = () => {
  const layer = Object.create(Layer())

  layer.determineKwic = (sentence: String) => {
    const availableLayers = layer.layers
    let processedSentence = sentence
    for (let objLayer of availableLayers) {
      processedSentence = objLayer.executeFunction(processedSentence)
    }
    return processedSentence
  }

  return layer
}

export default ProcessLayer
