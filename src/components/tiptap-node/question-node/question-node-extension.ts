import { mergeAttributes, Node } from "@tiptap/react"
import { ReactNodeViewRenderer } from "@tiptap/react"
import { QuestionNode as QuestionNodeComponent } from "@/components/tiptap-node/question-node/question-node"

export interface QuestionNodeOptions {
  /**
   * HTML attributes to add to the prompt element.
   * @default {}
   */
  HTMLAttributes?: Record<string, any>
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    questionNode: {
      /**
       * Insert a prompt node
       */
      insertPrompt: (prompt: {
        id: string
        text: string
        category: string
        helpText?: string
      }) => ReturnType
    }
  }
}

export const QuestionNode = Node.create<QuestionNodeOptions>({
  name: "questionNode",

  group: "block",

  atom: true,

  addOptions() {
    return {
      HTMLAttributes: {},
    }
  },

  addAttributes() {
    return {
      id: {
        default: null,
        parseHTML: (element) => element.getAttribute("data-prompt-id"),
        renderHTML: (attributes) => {
          if (!attributes.id) {
            return {}
          }
          return {
            "data-prompt-id": attributes.id,
          }
        },
      },
      text: {
        default: "",
        parseHTML: (element) => element.getAttribute("data-prompt-text"),
        renderHTML: (attributes) => {
          if (!attributes.text) {
            return {}
          }
          return {
            "data-prompt-text": attributes.text,
          }
        },
      },
      category: {
        default: "",
        parseHTML: (element) => element.getAttribute("data-prompt-category"),
        renderHTML: (attributes) => {
          if (!attributes.category) {
            return {}
          }
          return {
            "data-prompt-category": attributes.category,
          }
        },
      },
      helpText: {
        default: "",
        parseHTML: (element) => element.getAttribute("data-prompt-help"),
        renderHTML: (attributes) => {
          if (!attributes.helpText) {
            return {}
          }
          return {
            "data-prompt-help": attributes.helpText,
          }
        },
      },
      response: {
        default: "",
        parseHTML: (element) => element.getAttribute("data-prompt-response"),
        renderHTML: (attributes) => {
          if (!attributes.response) {
            return {}
          }
          return {
            "data-prompt-response": attributes.response,
          }
        },
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: "div[data-type='question-node']",
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(
        {
          "data-type": "question-node",
        },
        this.options.HTMLAttributes,
        HTMLAttributes
      ),
    ]
  },

  addCommands() {
    return {
      insertPrompt:
        (prompt) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: {
              id: prompt.id,
              text: prompt.text,
              category: prompt.category,
              helpText: prompt.helpText,
              response: "",
            },
          })
        },
    }
  },

  addNodeView() {
    return ReactNodeViewRenderer(QuestionNodeComponent, {
      as: "div",
    })
  },
})