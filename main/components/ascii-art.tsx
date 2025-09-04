interface AsciiArtProps {
  art: string
  className?: string
}

export function AsciiArt({ art, className = "" }: AsciiArtProps) {
  return <div className={`ascii-art text-muted-foreground ${className}`}>{art}</div>
}

export const asciiArts = {
  computer: `
    ┌─────────────────────────────────────┐
    │  ████████████████████████████████   │
    │  █                              █   │
    │  █  > Building the future...    █   │
    │  █  > One line at a time        █   │
    │  █                              █   │
    │  ████████████████████████████████   │
    └─────────────────────────────────────┘
  `,

  rocket: `
         /\\
        /  \\
       |    |
       |    |
      /|    |\\
     / |____| \\
    |  ______  |
    | |      | |
    |_|______|_|
       \\    /
        \\  /
         \\/
  `,

  code: `
    { "developer": {
        "name": "Emil Sabri",
        "skills": ["AI", "Full Stack", "DevOps"],
        "status": "Building awesome things"
      }
    }
  `,

  terminal: `
    ┌─ terminal ─────────────────────────┐
    │ $ whoami                           │
    │ emil-sabri                         │
    │ $ cat skills.txt                   │
    │ Computer Vision ✓                  │
    │ Full Stack Development ✓           │
    │ DevOps & Automation ✓              │
    │ $ _                                │
    └────────────────────────────────────┘
  `,
}
