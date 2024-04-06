"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const DOMElement = ({ body }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    editable: false,
    content: body,
    editorProps: {
      attributes: {
        class: "px-4",
      },
    },
  });

  return <EditorContent editor={editor} />;
};

export default DOMElement;
