import ComponentLayer from 'interfaces/ComponentLayer'

const Layer = () => {
  const layers = []

  return {
    layers,

    addLayer: (layer: ComponentLayer): void => {
      layers.push(layer)
    },

    removeLastLayer: (): void => {
      layers.pop()
    },
    getLayersAmount: (): number => {
      return layers.length
    },
  }
}

export default Layer
