import { mergeAttributes, Node } from "@tiptap/react"
import { ReactNodeViewRenderer } from "@tiptap/react"
import { QuestionNode as QuestionNodeComponent } from "@/components/tiptap-node/question-node/question-node"

export interface QuestionNodeOptions {
  /**
   * HTML attributes to add to the question element.
   * @default {}
   */
  HTMLAttributes?: Record<string, any>
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    questionNode: {
      /**
       * Insert a question node
       */
      insertQuestion: (question: {
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
        parseHTML: (element) => element.getAttribute("data-question-id"),
        renderHTML: (attributes) => {
          if (!attributes.id) {
            return {}
          }
          return {
            "data-question-id": attributes.id,
          }
        },
      },
      text: {
        default: "",
        parseHTML: (element) => element.getAttribute("data-question-text"),
        renderHTML: (attributes) => {
          if (!attributes.text) {
            return {}
          }
          return {
            "data-question-text": attributes.text,
          }
        },
      },
      category: {
        default: "",
        parseHTML: (element) => element.getAttribute("data-question-category"),
        renderHTML: (attributes) => {
          if (!attributes.category) {
            return {}
          }
          return {
            "data-question-category": attributes.category,
          }
        },
      },
      helpText: {
        default: "",
        parseHTML: (element) => element.getAttribute("data-question-help"),
        renderHTML: (attributes) => {
          if (!attributes.helpText) {
            return {}
          }
          return {
            "data-question-help": attributes.helpText,
          }
        },
      },
      response: {
        default: "",
        parseHTML: (element) => element.getAttribute("data-question-response"),
        renderHTML: (attributes) => {
          if (!attributes.response) {
            return {}
          }
          return {
            "data-question-response": attributes.response,
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
      insertQuestion:
        (question) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: {
              id: question.id,
              text: question.text,
              category: question.category,
              helpText: question.helpText,
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