"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";

const Tiptap = ({ content, onChange }) => {
  const handleChange = (newContent) => {
    onChange(newContent);
  };

  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class:
          "rounded-bl-md rounded-br-md border-b border-r border-l border-neutral-300 p-3 flex flex-col justify-start text-neutral-700 items-start w-full gap-3 font-medium text-[16px] outline-none",
      },
    },
    onUpdate: () => {
      handleChange(editor.getHTML());
    },
  });

  return (
    <div className="w-full px-4">
      <Toolbar
        editor={editor}
        content={content}
      />
      <EditorContent
        style={{ whiteSpace: "pre-line" }}
        editor={editor}
      />
    </div>
  );
};

export default Tiptap;
