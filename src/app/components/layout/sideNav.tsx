import React from 'react'
import { Button } from '@mui/material'
import Link from 'next/link'

const SideNav = () => {
  return (
    <>
      <Link href={'/'}>
        <Button>Back to Home</Button>
      </Link>
    </>
  )
}

export default SideNav
