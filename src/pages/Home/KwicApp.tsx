import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import KwicLayer from 'modules/ProcessLayer'
import HomePresentation from './HomePresentation'
import kwicSplit from 'modules/KwicSplit'
import kwicCombination from 'modules/KwicCombinations'
import kwicAlphabetizer from 'modules/KwicAlphabetizer'

const KwicApp = () => {
  const [kwicWords, setKwicWords] = useState<String[]>([])
  const { handleSubmit, register } = useForm()

  function onSubmit(values) {
    const processLayer = KwicLayer()
    const splitModule = kwicSplit()
    const combinationModule = kwicCombination()
    const alphabetizeModule = kwicAlphabetizer()

    processLayer.addLayer(splitModule)
    processLayer.addLayer(combinationModule)
    processLayer.addLayer(alphabetizeModule)

    const processedWord = processLayer.determineKwic(values.word)
    setKwicWords(processedWord)
  }

  return <HomePresentation {...{ kwicWords, handleSubmit, onSubmit, register }} />
}

export default KwicApp
