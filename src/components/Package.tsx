import { Package } from '../interfaces/Package'
import { blue } from '@mui/material/colors'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

interface Props {
  item: Package
}

export const PackageItem = ({ item }:Props) => {
  const { id, location, status, category } = item

  return (
    <Card sx={{ minWidth: 230, display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Package {id}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {status}
          </Typography>
          <Typography variant="body2">
            Location: {location}
            <br/>
            Category: {category}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Button</Button>
        </CardActions>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 160, height: 160, padding: 2, backgroundColor: blue[400] }}
        image='https://icons.iconarchive.com/icons/ph03nyx/super-mario/256/Question-Block-icon.png'
        alt={category}
      />
    </Card>
  )
}
