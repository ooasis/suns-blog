import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const apiRoutePath = path.join(__dirname, '../app/api/newsletter')
const tempApiRoutePath = path.join(__dirname, '../app/api/newsletter.temp')

// Restore API route after static export
if (fs.existsSync(tempApiRoutePath)) {
  console.log('Restoring API route after static export...')
  fs.renameSync(tempApiRoutePath, apiRoutePath)
  console.log('API route restored successfully')
}
