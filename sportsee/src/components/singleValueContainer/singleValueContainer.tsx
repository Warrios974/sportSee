import Image from 'next/image'
import React from 'react'
import style from './SingleValueContainer.module.css'
import { singleValueContainerProps } from '@/src/utils/models/Types'

export default function SingleValueContainer({ urlImage, type, unity, number, color } : singleValueContainerProps) {
  
  const styleCss = (value : string) => {

    let color

    switch (value) {
      case 'calorie':
        color = style.calorie
        break;
      case 'proteine':
        color = style.proteine
        break;
      case 'glucide':
        color = style.glucide
        break;
      case 'lipide':
        color = style.lipide
        break;
        
      default:
        color = style.imageContainer
        break;
    }

    return color
  }

  return (
    <div className={style.singleValueContainer}>
        <div className={styleCss(color)}>
            <Image src={urlImage} alt='' width={25} height={25}/>
        </div>
        <div className={style.descriptionContainer}>
            <h5>{number}{unity}</h5>
            <span>{type}</span>
        </div>
    </div>
  )
}