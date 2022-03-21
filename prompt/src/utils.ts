import ansiStyles from 'ansi-styles'
import {EscapeCode} from 'ansi-styles/escape-code'
import * as sections from './sections'
import {Sections} from './types'

const shell = process.argv[3]
export function escapeForShell(ansiCode: string) {
  switch (shell) {
    case 'sh':
    case 'bash':
      return '\x01' + ansiCode + '\x02'
    case 'zsh':
      return '%{' + ansiCode + '%}'
    case 'fish':
      return ansiCode
    default:
      return ansiCode
  }
}

export function escapeForRegex(input: string) {
  return input.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
}

export const kubernetesBlue: EscapeCode.CodePair = {
  open: `\u001B[38;5;33m`,
  close: `\u001B[39m`,
}

export function color(style: EscapeCode.CodePair, text: string) {
  return `${escapeForShell(style.open)}${text}${escapeForShell(style.close)}`
}

export async function renderPrompt(style: 'prompt' | 'sections' | 'ps2', sectionNames: Sections = []) {
  const promptChar = color(ansiStyles.bold, '❯ ')

  switch (style) {
    case 'prompt':
      return console.log(
        process.argv[4] === '0' ? color(ansiStyles.magenta, promptChar) : color(ansiStyles.red, promptChar),
      )

    case 'ps2':
      return console.log(color(ansiStyles.yellow, promptChar))

    case 'sections':
      const promptParts = await Promise.all(sectionNames.map((section) => sections[section]()))
      const prompt = promptParts.filter((part) => part !== '')
      return console.log(color(ansiStyles.bold, prompt.join(' ')))

    default:
      throw new Error(`Unknown style: ${style}`)
  }
}

export async function initPrompt(shell: string, binaryPath: string) {
  switch (shell) {
    case 'zsh':
      return console.log(
        `
custom_prompt() {
  exit_code="$?"
  ${binaryPath} left zsh
  ${binaryPath} prompt zsh $exit_code
}

custom_rprompt() {
  ${binaryPath} right zsh
}

custom_ps2() {
  ${binaryPath} ps2 zsh
}

PROMPT='
$(custom_prompt)'
RPROMPT='$(custom_rprompt)'
PS2='$(custom_ps2)'

present() {
  if [ -z "$PROMPT_PRESENTATION_MODE" ]; then
    export PROMPT_PRESENTATION_MODE=1
  else
    unset PROMPT_PRESENTATION_MODE
  fi
}
      `.trim(),
      )

    case 'bash':
      return console.log(
        `
custom_prompt() {
  exit_code="$?"
  PS1=$(printf "\\n%s %s\\n%s" "$(${binaryPath} left bash)" "$(${binaryPath} right bash)" "$(${binaryPath} prompt bash $exit_code)")
  PS2=$(${binaryPath} ps2 bash)
}
PROMPT_COMMAND=custom_prompt

present() {
  if [ -z "$PROMPT_PRESENTATION_MODE" ]; then
    export PROMPT_PRESENTATION_MODE=1
  else
    unset PROMPT_PRESENTATION_MODE
  fi
}
      `.trim(),
      )

    case 'fish':
      return console.log(
        `
function fish_prompt
  set last_exit $status
  echo ""
  ${binaryPath} left fish
  ${binaryPath} prompt fish $last_exit
end

function fish_right_prompt
  ${binaryPath} right fish
end

function present
  if test "$PROMPT_PRESENTATION_MODE" = "1"
    set -e PROMPT_PRESENTATION_MODE
  else
    set -X PROMPT_PRESENTATION_MODE "1"
  end
end
      `.trim(),
      )

    default:
      throw new Error(`Unknown shell: ${shell}`)
  }
}
