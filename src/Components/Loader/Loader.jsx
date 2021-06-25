import React from 'react'
import { LoaderDiv } from './Loader.style'

import loaderImg from 'Assets/images/Line-Preloader.gif'

export default function Loader(props) {
  return (
    <LoaderDiv {...props}>
      <img className='loader' src={loaderImg} alt='Loading...' />
    </LoaderDiv>
  )
}
