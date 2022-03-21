import {Sections} from './types'
import {initPrompt, renderPrompt} from './utils'

const presentationMode = Boolean(process.env.PROMPT_PRESENTATION_MODE)
const PROMPT: Sections = presentationMode ? ['directory'] : ['directory', 'gitBranch', 'gitStatus']
const RPROMPT: Sections = presentationMode ? [] : ['kubernetes', 'node']

export async function run(binaryPath: string) {
  switch (process.argv[2]) {
    case 'prompt': {
      return await renderPrompt('prompt')
    }

    case 'left': {
      return await renderPrompt('sections', PROMPT)
    }

    case 'right': {
      return await renderPrompt('sections', RPROMPT)
    }

    case 'ps2': {
      return await renderPrompt('ps2')
    }

    case 'init': {
      return await initPrompt(process.argv[3], binaryPath)
    }

    default:
      return
  }
}
