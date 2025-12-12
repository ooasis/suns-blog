import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const apiRoutePath = path.join(__dirname, '../app/api/newsletter')
const tempApiRoutePath = path.join(__dirname, '../app/api/newsletter.temp')

// Move API route out of the way for static export
if (fs.existsSync(apiRoutePath)) {
  console.log('Moving API route out of the way for static export...')
  fs.renameSync(apiRoutePath, tempApiRoutePath)
  console.log('API route moved successfully')
}
