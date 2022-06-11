/* eslint-disable import/no-extraneous-dependencies */
import { Extension } from '@tiptap/core'
import { Plugin } from 'prosemirror-state'
import { DOMParser } from 'prosemirror-model'

function wrapHtmlInTemplate(value: string): HTMLSpanElement {
  const element = document.createElement('span')
  element.innerHTML = `${value.trim()}`
  return element
}

export const SnippetExtension = Extension.create({
  name: 'snippet',
  addProseMirrorPlugins() {
    return [
      new Plugin({
        props: {
          handleDrop(view, event: DragEvent | any): boolean {
            if (!event) return false

            event.preventDefault()

            const coordinates = view.posAtCoords({
              left: event.clientX,
              top: event.clientY,
            })

            const snippetContent = event.dataTransfer.getData('snippet')

            const parsedContent = DOMParser
              .fromSchema(view.state.schema)
              .parseSlice(wrapHtmlInTemplate(snippetContent))

            if (coordinates) {
              const dropTransaction = view.state.tr.insert(coordinates.pos, parsedContent.content)

              dropTransaction.setMeta('isSnippetDropTransaction', true)

              view.dispatch(dropTransaction)
            }

            return false
          },
        },
      }),
    ]
  },
})
