import React from 'react'
import { Button } from '../button'

function Header() {
  return (
    <div className='p-2 shadow-sm flex justify-between items-center px-3'>
        <img src="/vite.svg" alt="Logo" />
        <div>
          <Button>Sign in</Button>
        </div>
    </div>
  )
}

export default Header
