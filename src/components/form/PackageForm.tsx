import { useState } from 'react'
import { Category } from './Category'
import { PackageLocation } from './Location'
import { Button, FormControl, Grid, SelectChangeEvent, TextField, Typography } from '@mui/material'

export const PackageForm = () => {
  const [category, setCategory] = useState<string>('')

  const handleCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string)
  }

  return (
    <FormControl fullWidth>
      <Typography variant="h5" component="div">Create package</Typography>
      <form style={{ marginTop: 20 }}>
        <Grid container direction='column' spacing={2}>
          <Grid item>
            <TextField fullWidth label="Name" variant="outlined" />
          </Grid>
          <Grid item>
            <Category value={category} onChange={handleCategory}/>
          </Grid>
          <Grid item>
            <PackageLocation/>
          </Grid>
          <Grid item>
            <Button variant="contained">Submit</Button>
          </Grid>
        </Grid>
      </form>
    </FormControl>
  )
}
