import fs from 'fs/promises'
import path from 'path'

async function readAndImportAllJSON(folderPath: string) {
    const folders = await fs.readdir(folderPath)

    const result: any = {}

    for await (const file of folders) {
        const name = file.split('.')[0]

        result[name] = await readAndImportJSON(path.join(folderPath, file))
    }

    return result
}

async function readAndImportJSON(file: string) {
    const content = await fs.readFile(file, 'utf-8')

    return JSON.parse(content)
}

export default defineEventHandler(async () => {
    const fullPath = path.resolve(process.cwd(), '..', 'languages', 'languages')

    const languages: any = {}

    const folders = await fs.readdir(fullPath)

    for await (const folder of folders) {
        languages[folder] = await readAndImportAllJSON(path.join(fullPath, folder))
    }

    return languages
})
