<script setup lang="ts">
import { ref } from 'vue';
import Tiptap from './Tiptap.vue'

interface Snippet {
  name: string
  content: string
}

const snippets = ref<Snippet[]>(
  [
    {
      name: "Test",
      content: "<p> This is a test. </p>"
    },
    {
      name: "Some demo",
      content: "<p><strong>This is bold.</strong> <em>This is italic. </em><code>This is code</code> chill it out bro!</p>"
    }
  ]
  )

const onDragStart = (event: DragEvent, snippet: Snippet) => {
  event?.dataTransfer?.setData('text/html', snippet.content)
}

const addSnippet = (s: Snippet) => {
  snippets.value = [...snippets.value, s]
}
</script>

<template>
  <main class="snippet-example-container container flex">
    <section class="editor-section">
      <tiptap @newSnippet="addSnippet" />
    </section>

    <section class="snippet-section gap-1rem">
      <article v-for="snippet in snippets" draggable="true" class="snippet" @dragstart="onDragStart($event, snippet)"
        key="snippet.name">
        <i-tooltip placement="right" size="md">
          <b> {{ snippet.name }} </b>
          <template #body>
            <div v-html="snippet.content" />
          </template>
        </i-tooltip>
      </article>
    </section>
  </main>
</template>

<style lang="scss">
.snippet-example-container {
  margin: 2rem 0 0 0;
  gap: 1em;

  .editor-section {
    width: 70%;
    padding: 1rem;
    border: 1px dashed gray;
    border-radius: 8px;
  }

  .snippet-section {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    border: 1px dashed gray;
    border-radius: 8px;

    .snippet {
      padding: 8px 1rem;
      border: 1px solid gray;
      border-radius: 8px;
      cursor: pointer;
    }
  }
}
</style>
