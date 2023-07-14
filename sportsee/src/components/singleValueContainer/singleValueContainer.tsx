import Image from 'next/image'
import React from 'react'

type singleValueContainerProps = {
    url: string,
    type: string,
    unity: string,
    number: number,
    color: string
}

export default function singleValueContainer({ url, type, unity, number, color } : singleValueContainerProps) {
  return (
    <div>
        <div>
            <Image src={url} alt=''/>
        </div>
        <div>
            <h5>{number}{unity}</h5>
            <span>{type}</span>
        </div>
    </div>
  )
}