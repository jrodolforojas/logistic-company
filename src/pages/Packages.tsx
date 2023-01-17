import { Grid } from '@mui/material'
import React from 'react'
import { PackageForm } from '../components/form/PackageForm'
import { PackageList } from '../components/PackageList'
import { Title } from '../components/Title'
import { defaultData } from '../utils/data'

export const Packages = () => {
  return (
    <div style={{ marginTop: 5 }}>
      <Title title='Packages'/>
      <Grid container direction="row" alignItems="flex-start" spacing={2}>
        <Grid item lg={5}>
          <PackageList packages={defaultData}/>
        </Grid>

        <Grid item lg={4} md xs sm>
          <Grid container direction='column'>
            <PackageForm/>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
