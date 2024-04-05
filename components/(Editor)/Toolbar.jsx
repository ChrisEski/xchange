import {
  Heading2,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  List,
  ListOrdered,
  Quote,
  Code,
  Undo,
  Redo,
} from "lucide-react";
import { Button } from "../ui/button";

const Toolbar = ({ editor, content }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="p-3 rounded-tl-md rounded-tr-md flex justify-between items-start gap-5 w-full h-[60px] flex-wrap border border-neutral-300">
      <div className="flex justify-start items-center gap-5 w-full lg:w-10/12 flex-wrap">
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={
            editor.isActive("bold")
              ? "bg-neutral-100 border border-neutral-200 p-2 rounded-lg"
              : "p-2 rounded-lg border border-transparent text-neutral-700 hover:bg-neutral-100  hover:border-neutral-200"
          }
        >
          <Bold className="w-4 h-4" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          className={
            editor.isActive("italic")
              ? "bg-neutral-100 border border-neutral-200 p-2 rounded-lg"
              : "p-2 rounded-lg border border-transparent text-neutral-700 hover:bg-neutral-100  hover:border-neutral-200"
          }
        >
          <Italic className="w-4 h-4" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleUnderline().run();
          }}
          className={
            editor.isActive("underline")
              ? "bg-neutral-100 border border-neutral-200 p-2 rounded-lg"
              : "p-2 rounded-lg border border-transparent text-neutral-700 hover:bg-neutral-100  hover:border-neutral-200"
          }
        >
          <Underline className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleStrike().run();
          }}
          className={
            editor.isActive("strike")
              ? "bg-neutral-100 border border-neutral-200 p-2 rounded-lg"
              : "p-2 rounded-lg border border-transparent text-neutral-700 hover:bg-neutral-100  hover:border-neutral-200"
          }
        >
          <Strikethrough className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 2 }).run();
          }}
          className={
            editor.isActive("heading", { level: 2 })
              ? "bg-neutral-100 border border-neutral-200 p-2 rounded-lg"
              : "p-2 rounded-lg border border-transparent text-neutral-700 hover:bg-neutral-100  hover:border-neutral-200"
          }
        >
          <Heading2 className="w-5 h-5" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBulletList().run();
          }}
          className={
            editor.isActive("bulletList")
              ? "bg-neutral-100 border border-neutral-200 p-2 rounded-lg"
              : "p-2 rounded-lg border border-transparent text-neutral-700 hover:bg-neutral-100  hover:border-neutral-200"
          }
        >
          <List className="w-5 h-5" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleOrderedList().run();
          }}
          className={
            editor.isActive("orderedList")
              ? "bg-neutral-100 border border-neutral-200 p-2 rounded-lg"
              : "p-2 rounded-lg border border-transparent text-neutral-700 hover:bg-neutral-100  hover:border-neutral-200"
          }
        >
          <ListOrdered className="w-5 h-5" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBlockquote().run();
          }}
          className={
            editor.isActive("blockquote")
              ? "bg-neutral-100 border border-neutral-200 p-2 rounded-lg"
              : "p-2 rounded-lg border border-transparent text-neutral-700 hover:bg-neutral-100  hover:border-neutral-200"
          }
        >
          <Quote className="w-5 h-5" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().setCode().run();
          }}
          className={
            editor.isActive("code")
              ? "bg-neutral-100 border border-neutral-200 p-2 rounded-lg"
              : "p-2 rounded-lg border border-transparent text-neutral-700 hover:bg-neutral-100  hover:border-neutral-200"
          }
        >
          <Code className="w-5 h-5" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().undo().run();
          }}
          className={
            editor.isActive("undo")
              ? "bg-neutral-100 border border-neutral-200 p-2 rounded-lg"
              : "p-2 rounded-lg border border-transparent text-neutral-700 hover:bg-neutral-100  hover:border-neutral-200"
          }
        >
          <Undo className="w-5 h-5" />
        </button>
      </div>
      <Button disabled={!content}>Save</Button>
    </div>
  );
};

export default Toolbar;
