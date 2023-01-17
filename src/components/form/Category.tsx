import { packageCategories } from '../../utils/categories'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'

interface Props {
  value: string
  onChange: (event: SelectChangeEvent) => void
}

export const Category = ({ value, onChange }:Props) => {
  const categories = Object.keys(packageCategories)

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Category"
        onChange={onChange}
      >
        {categories.map((category, index) => <MenuItem value={category} key={index}>{category}</MenuItem>)}
      </Select>
    </FormControl>
  )
}
