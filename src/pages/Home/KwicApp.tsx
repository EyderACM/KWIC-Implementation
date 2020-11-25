import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import KwicLayer from 'modules/KwicLayer'
import HomePresentation from './HomePresentation'

const KwicApp = () => {
  const [kwicWords, setKwicWords] = useState<String[]>([])
  const { handleSubmit, register } = useForm()

  function onSubmit(values) {
    setKwicWords(KwicLayer.determineKwic(values.word))
  }

  return <HomePresentation {...{ kwicWords, handleSubmit, onSubmit, register }} />
}

export default KwicApp
