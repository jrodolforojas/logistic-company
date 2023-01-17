import { AppBar, Button, Toolbar, Typography } from '@mui/material'

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logistic company
        </Typography>
        <Button color="inherit">Packages</Button>
        <Button color="inherit">Route</Button>
      </Toolbar>
    </AppBar>
  )
}
