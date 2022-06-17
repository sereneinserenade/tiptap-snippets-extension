<script setup lang="ts">
import { ref } from 'vue';

import StarterKit from '@tiptap/starter-kit';
import { EditorContent, useEditor } from '@tiptap/vue-3';

import { SnippetExtension } from './extensions';

const emit = defineEmits(['newSnippet'])

interface Snippet {
  name: string
  content: string
}


const snippetName = ref("")

const editor = useEditor({
  content: '<p>Example of Snippets with tiptap. 🎉 If you 👍 / ❤️ what I\'m doing, consider 🌟ing the repo, I and the Open-Source-Community appreciate it very much ❤️. </p><p></p><p>Drag a snippet from right and drop it in the line above and see the magic!</p><p>PS: you can create a new snippet from current editor content by giving it a name and pressing "create snippet" button</p>',
  extensions: [StarterKit, SnippetExtension],
})

const logHtml = () => {
  const snippet: Snippet = {
    name: snippetName.value,
    content: editor.value?.getHTML() || "<p> Snippet failed </p>"
  }

  emit('newSnippet', snippet)
}

</script>

<template>
  <section class="flex gap-1rem">
    <i-input v-model="snippetName" placeholder="New snippet name...">
      <template #prepend>
        <b>Create new snippet from current editor content.</b>
      </template>
    </i-input>

    <i-button @click="logHtml"> Create </i-button>
  </section>

  <editor-content :editor="editor" />
</template>

<style lang="scss">
.ProseMirror {
  &:focus {
    outline: none !important;
  }
}
</style>
