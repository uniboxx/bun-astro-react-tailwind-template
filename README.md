# Astro Kit: With React and Tailwind

You need bun installed to use this template or modify package.json to use another package manager:

- delete "bunx --bun" in all scripts
- modify "packagemanager" property to selected package manager

## To install bun on macOs, Linux, WSL:

- curl -fsSL https://bun.sh/install | bash

## To install bun on Windows:

- powershell -c "irm bun.sh/install.ps1|iex"

````sh
    bunx create-astro@latest --template uniboxx/bun-react-tailwind-template



## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   │
│   └── layouts/BaseLayout.astro
│   │
│   └── pages/
│       └── index.astro
└── package.json
````

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `bun install`          | Installs dependencies                            |
| `bun dev`              | Starts local dev server at `localhost:4321`      |
| `bun build`            | Build your production site to `./dist/`          |
| `bun preview`          | Preview your build locally, before deploying     |
| `bunx astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bunx astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
