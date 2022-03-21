# @jacobwgillespie/prompt

This is my personal terminal prompt, powered by TypeScript. It is subjective and doesn't offer any way to customize the prompt without editing the source.

## Architecture

The possible prompt sections are defined in `src/sections.ts`, and the sections displayed for `PROMPT` or `RPROMPT` are defined in `src/index.ts`.

## Installation

```bash
$ yarn global add @jacobwgillespie/prompt
```

### ZSH

Add the following to your `.zshrc`:

```zsh
eval "$(prompt init zsh)"
```

### Fish

Add the following to your `~/.config/fish/config.fish`:

```fish
prompt init fish | source
```

### Bash

Add the following to your `.bash_profile`:

```bash
eval "$(prompt init bash)"
```

## License

MIT License, see `LICENSE`.
