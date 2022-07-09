# tiptap-snippets-extension

[Tiptap 2 Extension](https://tiptap.dev) for adding snippets.

A ⭐️ to the repo if you 👍 / ❤️  what I'm doing would be much appreciated. If you're using this extension and making money from it, it'd be very kind of you to [:heart: Sponsor me](https://github.com/sponsors/sereneinserenade). If you're looking for a **dev to work you on your project's Rich Text Editor** with or as **a frontend developer, [DM me on Discord/Twitter/LinkedIn](https://github.com/sereneinserenade)👨‍💻🤩**.

I've made a bunch of extensions for Tiptap 2, some of them are **Google Docs like Commenting**, **Search and Replace**, **LanguageTool integration** with tiptap. You can check it our here https://github.com/sereneinserenade#a-glance-of-my-projects.

# Live Demo

Try it out live at https://sereneinserenade.github.io/tiptap-snippets-extension, and/or take a look at a demo-video below.

https://user-images.githubusercontent.com/45892659/173204796-0743a2c9-4465-46a2-bf57-8f1696d4353f.mov


## How to use

Copy-paste [`snippet.ts`](src/components/extensions/snippet.ts) file in your own repo and import `SnippetExtension` from that file and use that as an extension. For more details see [`Tiptap.vue`](src/components/Tiptap.vue) or the example implementations below. If you have any question, feel free to [open an issue](https://github.com/sereneinserenade/tiptap-snippets-extension/issues).

## Contributing

Show your ❤️ by ⭐️ing this repository! It means a lot.

Clone the repo, do something, make a PR(or not). You know what's the drill. Looking forward to your PRs, you amazing devs.

## Awesome peeps, who've starred this repo 🚀! Thank you!
[![Stargazers repo roster for @sereneinserenade/tiptap-snippets-extension](https://reporoster.com/stars/dark/sereneinserenade/tiptap-snippets-extension)](https://github.com/sereneinserenade/tiptap-snippets-extension/stargazers)


---

<details>
  <summary> Project Setup </summary>

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

</details>
