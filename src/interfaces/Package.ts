import { packageCategories } from '../utils/categories'

export interface Package {
  id: string
  location: string
  category: keyof typeof packageCategories
  status: string
}
