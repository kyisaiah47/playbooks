"use client";

import { Editor } from "@tiptap/react";
import { useState, useEffect, useCallback } from "react";
import { GripVertical, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DragHandleProps {
	editor: Editor;
}

export function DragHandle({ editor }: DragHandleProps) {
	const [isDragging, setIsDragging] = useState(false);
	const [dragHandlePos, setDragHandlePos] = useState<{
		top: number;
		left: number;
	} | null>(null);
	const [hoveredNode, setHoveredNode] = useState<Element | null>(null);

	const updateDragHandle = useCallback(() => {
		if (!editor) return;

		const { selection } = editor.state;
		const { $from } = selection;

		// Find the current block node
		let depth = $from.depth;
		while (
			depth > 0 &&
			$from.node(depth).type.name !== "paragraph" &&
			$from.node(depth).type.name !== "heading" &&
			$from.node(depth).type.name !== "questionNode"
		) {
			depth--;
		}

		if (depth === 0) {
			setDragHandlePos(null);
			return;
		}

		const pos = $from.before(depth);
		const dom = editor.view.domAtPos(pos);
		const node = dom.node as Element;

		if (node && node.getBoundingClientRect) {
			const rect = node.getBoundingClientRect();
			const editorRect = editor.view.dom.getBoundingClientRect();

			setDragHandlePos({
				top: rect.top - 55,
				left: 0,
			});
			setHoveredNode(node);
		}
	}, [editor]);

	const handleMouseMove = useCallback(
		(e: MouseEvent) => {
			if (!editor) return;

			const target = e.target as Element;
			const editorElement = editor.view.dom;

			// Check if we're hovering over a block element OR the drag handle itself
			let blockElement = target;

			// If hovering over drag handle, keep it visible
			if (target.closest('.drag-handle-container')) {
				return;
			}

			while (blockElement && blockElement !== editorElement) {
				if (
					blockElement.matches(
						'p, h1, h2, h3, h4, h5, h6, [data-type="question-node"], blockquote, pre, li'
					)
				) {
					const rect = blockElement.getBoundingClientRect();
					const editorRect = editorElement.getBoundingClientRect();

					setDragHandlePos({
						top: rect.top - 55,
						left: 0,
					});
					setHoveredNode(blockElement);
					return;
				}
				blockElement = blockElement.parentElement!;
			}

			setDragHandlePos(null);
			setHoveredNode(null);
		},
		[editor]
	);

	const handleDragStart = (e: React.DragEvent) => {
		if (!hoveredNode || !editor) return;

		setIsDragging(true);

		// Find the position in the editor for this DOM node
		const pos = editor.view.posAtDOM(hoveredNode, 0);
		const $pos = editor.state.doc.resolve(pos);

		// Select the entire node
		const nodeStart = $pos.before($pos.depth);
		const nodeEnd = $pos.after($pos.depth);

		editor
			.chain()
			.focus()
			.setTextSelection({ from: nodeStart, to: nodeEnd })
			.run();

		// Store the selected content for dropping
		e.dataTransfer.setData(
			"text/plain",
			editor.state.selection.content().content.toString()
		);
	};

	const handleDragEnd = () => {
		setIsDragging(false);
	};

	const handleAddBlock = () => {
		if (!hoveredNode || !editor) return;

		// Find position after the hovered node
		const pos = editor.view.posAtDOM(hoveredNode, 0);
		const $pos = editor.state.doc.resolve(pos);
		const after = $pos.after($pos.depth);

		// Insert a new paragraph after the current block
		editor
			.chain()
			.focus()
			.insertContentAt(after, { type: "paragraph" })
			.setTextSelection(after + 1)
			.run();
	};

	useEffect(() => {
		if (!editor) return;

		const editorElement = editor.view.dom.parentElement;

		if (editorElement) {
			editorElement.addEventListener("mousemove", handleMouseMove);

			return () => {
				editorElement.removeEventListener("mousemove", handleMouseMove);
			};
		}
	}, [editor, handleMouseMove]);

	if (!dragHandlePos) return null;

	return (
		<div
			className="absolute z-10 flex items-center gap-1 drag-handle-container"
			style={{
				top: dragHandlePos.top,
				left: dragHandlePos.left,
			}}
		>
			{/* Add Block Button */}
			<Button
				variant="ghost"
				size="sm"
				onClick={handleAddBlock}
				className="w-6 h-6 p-0 opacity-60 hover:opacity-100 transition-opacity rounded-sm hover:bg-muted bg-background border"
			>
				<Plus className="w-3 h-3" />
			</Button>

			{/* Drag Handle */}
			<div
				draggable
				onDragStart={handleDragStart}
				onDragEnd={handleDragEnd}
				className={`cursor-grab active:cursor-grabbing p-1 rounded-sm opacity-60 hover:opacity-100 transition-all duration-200 hover:bg-muted bg-background border ${
					isDragging ? "opacity-50" : ""
				}`}
			>
				<GripVertical className="w-3 h-3 text-muted-foreground" />
			</div>
		</div>
	);
}
