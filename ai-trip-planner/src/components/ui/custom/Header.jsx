import React from 'react'
import { Button } from '../button'
import SignInPopup from './SignInPopup'
import SignIn from './SignInPopup'

function Header() {
  return (
    <div className='p-2 shadow-sm flex justify-between items-center px-3'>
        <img src="/vite.svg" alt="Logo" />
        <div>
          {/* <Button>Sign in</Button> */}
          <SignIn/>
        </div>
    </div>
  )
}

export default Header
