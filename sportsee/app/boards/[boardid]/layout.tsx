import { LayoutBoardProps } from '@/src/utils/models/Types'
import React, { PropsWithChildren } from 'react'

export default function LayoutBoard( {params, children} : LayoutBoardProps) {
  
  return (
    <>
      {children}
    </>
  )
}
