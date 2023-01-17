import { Box } from '@mui/material'
import { Navbar } from './components/Navbar'
import { Packages } from './pages/Packages'

function App () {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar/>
      <Box sx={{ flexGrow: 1 }} style={{ padding: 20 }}>
        <Packages/>
      </Box>

    </Box>
  )
}

export default App
