import { Package } from '../interfaces/Package'
import { PackageItem } from './Package'
import { Grid } from '@mui/material'

interface Props {
  packages: Package[]
}

export const PackageList = ({ packages }:Props) => {
  return (
    <Grid container direction='column' spacing={3} style={{ padding: 5 }}>
      {packages.map((box, index) =>
        <Grid item key={index}>
          <PackageItem item={box}/>
        </Grid>
      )}
    </Grid>
  )
}
