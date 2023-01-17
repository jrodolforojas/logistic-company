import { Typography } from '@mui/material'

interface Props {
  title: string
}

export const Title = ({ title }:Props) => {
  return (
    <Typography variant="h4" component="div">{title}</Typography>
  )
}
