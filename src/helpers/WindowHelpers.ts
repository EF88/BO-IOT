import { useEffect, useState } from 'react'
import { isString } from 'lodash-es'

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window
  const remWidth = width / 16
  const remHeight = height / 16

  return {
    width: remWidth,
    height: remHeight,
  }
}

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

export const pxToRem = (val: string) => {
  if (isString(val)) {
    return parseFloat(val) / 16
  }

  return val / 16
}
