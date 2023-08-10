import React, { PropsWithChildren } from 'react'
import { USER_MAIN_DATA } from '../../../src/data/data'

type LayoutBoardProps = PropsWithChildren<{
  params: { boardid: string, }
}>

export default function LayoutBoard( {params, children} : LayoutBoardProps) {
  
  return (
    <>
      {children}
    </>
  )
}
