import {
  Heading2,
  Heading3,
  Heading4,
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
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "@/components/ui/separator";

const Toolbar = ({ editor }) => {
  if (!editor) {
    return null;
  }
  return (
    <div className="border border-neutral-200 rounded-tl-lg rounded-tr-lg border-b-0 p-2 flex gap-2 flex-wrap">
      {/* HEADING 2 */}
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
        <Heading2 className="w-4 h-4" />
      </button>

      {/* HEADING 3 */}
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 3 }).run();
        }}
        className={
          editor.isActive("heading", { level: 3 })
            ? "bg-neutral-100 border border-neutral-200 p-2 rounded-lg"
            : "p-2 rounded-lg border border-transparent text-neutral-700 hover:bg-neutral-100  hover:border-neutral-200"
        }
      >
        <Heading3 className="w-4 h-4" />
      </button>

      {/* HEADING 4 */}
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 4 }).run();
        }}
        className={
          editor.isActive("heading", { level: 4 })
            ? "bg-neutral-100 border border-neutral-200 p-2 rounded-lg"
            : "p-2 rounded-lg border border-transparent text-neutral-700 hover:bg-neutral-100  hover:border-neutral-200"
        }
      >
        <Heading4 className="w-4 h-4" />
      </button>

      {/* BOLD */}
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

      {/* ITALICS */}
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

      {/* UNDERLINE */}
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
        <Underline className="w-4 h-4" />
      </button>

      {/* STRIKE */}
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
        <Strikethrough className="w-4 h-4" />
      </button>

      {/* TEXT ALIGN LEFT */}
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().setTextAlign("left").run();
        }}
        className={
          editor.isActive({ textAlign: "left" })
            ? "bg-neutral-100 border border-neutral-200 p-2 rounded-lg"
            : "p-2 rounded-lg border border-transparent text-neutral-700 hover:bg-neutral-100  hover:border-neutral-200"
        }
      >
        <AlignLeft className="w-4 h-4" />
      </button>

      {/* TEXT ALIGN CENTER */}
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().setTextAlign("center").run();
        }}
        className={
          editor.isActive({ textAlign: "center" })
            ? "bg-neutral-100 border border-neutral-200 p-2 rounded-lg"
            : "p-2 rounded-lg border border-transparent text-neutral-700 hover:bg-neutral-100  hover:border-neutral-200"
        }
      >
        <AlignCenter className="w-4 h-4" />
      </button>

      {/* TEXT ALIGN RIGHT */}
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().setTextAlign("right").run();
        }}
        className={
          editor.isActive({ textAlign: "right" })
            ? "bg-neutral-100 border border-neutral-200 p-2 rounded-lg"
            : "p-2 rounded-lg border border-transparent text-neutral-700 hover:bg-neutral-100  hover:border-neutral-200"
        }
      >
        <AlignRight className="w-4 h-4" />
      </button>

      {/* ORDERED LIST */}
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
        <ListOrdered className="w-4 h-4" />
      </button>

      {/* BULLET LIST */}
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
        <List className="w-4 h-4" />
      </button>

      {/* CODE */}
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleCode().run();
        }}
        className={
          editor.isActive("code")
            ? "bg-neutral-100 border border-neutral-200 p-2 rounded-lg"
            : "p-2 rounded-lg border border-transparent text-neutral-700 hover:bg-neutral-100  hover:border-neutral-200"
        }
      >
        <Code className="w-4 h-4" />
      </button>

      {/* BLOCKQUOTE */}
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
        <Quote className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Toolbar;
