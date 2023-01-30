import React, { memo } from 'react'
import routes from './route'
import { useRoutes } from 'react-router-dom'

const App = memo(() => {
  return (
    <div>
      {
        useRoutes(routes)
      }
    </div>
  )
})

export default App