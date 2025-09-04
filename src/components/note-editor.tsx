"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	Bold,
	Italic,
	List,
	ListOrdered,
	Heading1,
	Heading2,
	Plus,
	Trash2,
	Save,
	Edit3,
	MoreHorizontal,
	Type,
	Menu,
	Keyboard,
	X,
	ChevronDown,
	ChevronUp,
	ArrowRightLeft,
	GripVertical,
} from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NoteBlock {
	id: string;
	type: "heading1" | "heading2" | "text" | "list" | "ordered-list";
	content: string;
	items?: string[];
}

interface NoteEditorProps {
	title?: string;
	initialBlocks?: NoteBlock[];
	onSave?: (title: string, blocks: NoteBlock[]) => void;
	readOnly?: boolean;
	showTitle?: boolean;
}

export function NoteEditor({
	title: initialTitle = "",
	initialBlocks = [],
	onSave,
	readOnly = false,
	showTitle = true,
}: NoteEditorProps) {
	const [title, setTitle] = useState(initialTitle);
	const [blocks, setBlocks] = useState<NoteBlock[]>(
		initialBlocks.length > 0
			? initialBlocks
			: [{ id: "1", type: "text", content: "" }]
	);
	const [isEditing, setIsEditing] = useState(!readOnly);
	const [showShortcuts, setShowShortcuts] = useState(false);
	const [draggedBlock, setDraggedBlock] = useState<string | null>(null);
	const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

	const addBlock = (afterId: string, type: NoteBlock["type"] = "text") => {
		const newBlock: NoteBlock = {
			id: Date.now().toString(),
			type,
			content: "",
			items: type.includes("list") ? [""] : undefined,
		};

		const index = blocks.findIndex((b) => b.id === afterId);
		const newBlocks = [...blocks];
		newBlocks.splice(index + 1, 0, newBlock);
		setBlocks(newBlocks);
	};

	const updateBlock = (id: string, updates: Partial<NoteBlock>) => {
		setBlocks(
			blocks.map((block) =>
				block.id === id ? { ...block, ...updates } : block
			)
		);
	};

	const deleteBlock = (id: string) => {
		if (blocks.length === 1) return;
		setBlocks(blocks.filter((block) => block.id !== id));
	};

	const addListItem = (blockId: string) => {
		const block = blocks.find((b) => b.id === blockId);
		if (block && block.items) {
			updateBlock(blockId, {
				items: [...block.items, ""],
			});
		}
	};

	const updateListItem = (
		blockId: string,
		itemIndex: number,
		value: string
	) => {
		const block = blocks.find((b) => b.id === blockId);
		if (block && block.items) {
			const newItems = [...block.items];
			newItems[itemIndex] = value;
			updateBlock(blockId, { items: newItems });
		}
	};

	const removeListItem = (blockId: string, itemIndex: number) => {
		const block = blocks.find((b) => b.id === blockId);
		if (block && block.items && block.items.length > 1) {
			const newItems = block.items.filter((_, i) => i !== itemIndex);
			updateBlock(blockId, { items: newItems });
		}
	};

	const handleSave = () => {
		onSave?.(title, blocks);
		setIsEditing(false);
	};

	const moveBlock = (fromIndex: number, toIndex: number) => {
		const newBlocks = [...blocks];
		const [movedBlock] = newBlocks.splice(fromIndex, 1);
		newBlocks.splice(toIndex, 0, movedBlock);
		setBlocks(newBlocks);
	};

	const handleDragStart = (e: React.DragEvent, blockId: string) => {
		setDraggedBlock(blockId);
		e.dataTransfer.effectAllowed = "move";
		e.dataTransfer.setData("text/plain", "");

		// Add drag preview styling
		if (e.currentTarget) {
			e.currentTarget.style.opacity = "0.5";
		}
	};

	const handleDragOver = (e: React.DragEvent, index: number) => {
		e.preventDefault();
		e.dataTransfer.dropEffect = "move";
		setDragOverIndex(index);
	};

	const handleDragLeave = () => {
		setDragOverIndex(null);
	};

	const handleDrop = (e: React.DragEvent, dropIndex: number) => {
		e.preventDefault();
		if (!draggedBlock) return;

		const dragIndex = blocks.findIndex((b) => b.id === draggedBlock);
		if (dragIndex !== -1 && dragIndex !== dropIndex) {
			moveBlock(dragIndex, dropIndex);
		}

		// Reset drag styling
		const draggedElement = document.querySelector(
			'[draggable="true"][style*="opacity: 0.5"]'
		);
		if (draggedElement) {
			(draggedElement as HTMLElement).style.opacity = "";
		}

		setDraggedBlock(null);
		setDragOverIndex(null);
	};

	const handleKeyDown = (e: React.KeyboardEvent, blockId: string) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			addBlock(blockId, "text");
		}
	};

	const handleSlashCommand = (blockId: string, content: string) => {
		// Only trigger on exact matches with space or enter
		if (content === "/h1 ") {
			updateBlock(blockId, { type: "heading1", content: "" });
		} else if (content === "/h2 ") {
			updateBlock(blockId, { type: "heading2", content: "" });
		} else if (content === "/ul ") {
			updateBlock(blockId, { type: "list", content: "", items: [""] });
		} else if (content === "/ol ") {
			updateBlock(blockId, { type: "ordered-list", content: "", items: [""] });
		}
	};

	const renderInsertButton = (afterBlockId: string) => (
		<div className="group/insert relative flex items-center justify-center py-1">
			<div className="opacity-0 group-hover/insert:opacity-100 transition-opacity">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="ghost"
							size="sm"
							className="h-6 w-6 p-0 rounded-full border border-muted hover:border-foreground"
						>
							<Plus className="h-3 w-3" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="center">
						<DropdownMenuItem onClick={() => addBlock(afterBlockId, "text")}>
							<Type className="h-4 w-4 mr-2" />
							Text
						</DropdownMenuItem>
						<DropdownMenuItem
							onClick={() => addBlock(afterBlockId, "heading1")}
						>
							<Heading1 className="h-4 w-4 mr-2" />
							Heading 1
						</DropdownMenuItem>
						<DropdownMenuItem
							onClick={() => addBlock(afterBlockId, "heading2")}
						>
							<Heading2 className="h-4 w-4 mr-2" />
							Heading 2
						</DropdownMenuItem>
						<DropdownMenuItem onClick={() => addBlock(afterBlockId, "list")}>
							<List className="h-4 w-4 mr-2" />
							Bullet List
						</DropdownMenuItem>
						<DropdownMenuItem
							onClick={() => addBlock(afterBlockId, "ordered-list")}
						>
							<ListOrdered className="h-4 w-4 mr-2" />
							Numbered List
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);

	const renderBlock = (block: NoteBlock, index: number) => {
		const isLast = index === blocks.length - 1;

		if (!isEditing) {
			return (
				<div
					key={block.id}
					className="group relative"
				>
					{block.type === "heading1" && (
						<h1 className="text-3xl font-bold mb-4">{block.content}</h1>
					)}
					{block.type === "heading2" && (
						<h2 className="text-2xl font-semibold mb-3">{block.content}</h2>
					)}
					{block.type === "text" && (
						<p className="mb-2 whitespace-pre-wrap">{block.content}</p>
					)}
					{block.type === "list" && block.items && (
						<ul className="list-disc list-inside mb-2">
							{block.items.map((item, i) => (
								<li key={i}>{item}</li>
							))}
						</ul>
					)}
					{block.type === "ordered-list" && block.items && (
						<ol className="list-decimal list-inside mb-2">
							{block.items.map((item, i) => (
								<li key={i}>{item}</li>
							))}
						</ol>
					)}
				</div>
			);
		}

		return (
			<div
				key={block.id}
				className={`relative transition-all duration-200 ${
					dragOverIndex === index
						? "bg-accent/50 rounded-md border-2 border-dashed border-primary/50 py-2 px-4"
						: ""
				}`}
				onDragOver={(e) => handleDragOver(e, index)}
				onDragLeave={handleDragLeave}
				onDrop={(e) => handleDrop(e, index)}
			>
				{(block.type === "text" ||
					block.type === "heading1" ||
					block.type === "heading2") && (
					<div className="group relative flex items-center gap-2">
						<div className="flex items-center gap-1">
							<div
								className="opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-grab active:cursor-grabbing p-1 hover:bg-accent rounded flex items-center justify-center mt-0"
								draggable
								onDragStart={(e) => handleDragStart(e, block.id)}
								onDragEnd={(e) => {
									(e.currentTarget as HTMLElement).style.opacity = "";
								}}
							>
								<GripVertical className="h-5 w-5 text-muted-foreground" />
							</div>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button
										variant="ghost"
										size="sm"
										className="opacity-20 group-hover:opacity-100 transition-opacity mt-0 h-6 w-6 p-0"
									>
										<Menu className="h-4 w-4" />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent
									align="start"
									className="w-64"
								>
									<div className="p-1 space-y-0.5">
										<div className="flex items-center justify-between px-2 py-1.5 hover:bg-accent rounded-sm">
											<div className="flex items-center flex-1">
												<Type className="h-4 w-4 mr-2 text-muted-foreground" />
												<span className="text-sm">Text</span>
											</div>
											<div className="flex gap-1">
												<button
													onClick={() =>
														updateBlock(block.id, { type: "text" })
													}
													className="p-1 hover:bg-background rounded"
													title="Transform to text"
												>
													<ArrowRightLeft className="h-3 w-3" />
												</button>
												<button
													onClick={() => addBlock(block.id, "text")}
													className="p-1 hover:bg-background rounded"
													title="Add text block below"
												>
													<Plus className="h-3 w-3" />
												</button>
											</div>
										</div>

										<div className="flex items-center justify-between px-2 py-1.5 hover:bg-accent rounded-sm">
											<div className="flex items-center flex-1">
												<Heading1 className="h-4 w-4 mr-2 text-muted-foreground" />
												<span className="text-sm">Heading 1</span>
											</div>
											<div className="flex gap-1">
												<button
													onClick={() =>
														updateBlock(block.id, { type: "heading1" })
													}
													className="p-1 hover:bg-background rounded"
													title="Transform to heading 1"
												>
													<ArrowRightLeft className="h-3 w-3" />
												</button>
												<button
													onClick={() => addBlock(block.id, "heading1")}
													className="p-1 hover:bg-background rounded"
													title="Add heading 1 below"
												>
													<Plus className="h-3 w-3" />
												</button>
											</div>
										</div>

										<div className="flex items-center justify-between px-2 py-1.5 hover:bg-accent rounded-sm">
											<div className="flex items-center flex-1">
												<Heading2 className="h-4 w-4 mr-2 text-muted-foreground" />
												<span className="text-sm">Heading 2</span>
											</div>
											<div className="flex gap-1">
												<button
													onClick={() =>
														updateBlock(block.id, { type: "heading2" })
													}
													className="p-1 hover:bg-background rounded"
													title="Transform to heading 2"
												>
													<ArrowRightLeft className="h-3 w-3" />
												</button>
												<button
													onClick={() => addBlock(block.id, "heading2")}
													className="p-1 hover:bg-background rounded"
													title="Add heading 2 below"
												>
													<Plus className="h-3 w-3" />
												</button>
											</div>
										</div>

										<div className="flex items-center justify-between px-2 py-1.5 hover:bg-accent rounded-sm">
											<div className="flex items-center flex-1">
												<List className="h-4 w-4 mr-2 text-muted-foreground" />
												<span className="text-sm">Bullet List</span>
											</div>
											<div className="flex gap-1">
												<button
													onClick={() =>
														updateBlock(block.id, {
															type: "list",
															items: block.items || [""],
														})
													}
													className="p-1 hover:bg-background rounded"
													title="Transform to bullet list"
												>
													<ArrowRightLeft className="h-3 w-3" />
												</button>
												<button
													onClick={() => addBlock(block.id, "list")}
													className="p-1 hover:bg-background rounded"
													title="Add bullet list below"
												>
													<Plus className="h-3 w-3" />
												</button>
											</div>
										</div>

										<div className="flex items-center justify-between px-2 py-1.5 hover:bg-accent rounded-sm">
											<div className="flex items-center flex-1">
												<ListOrdered className="h-4 w-4 mr-2 text-muted-foreground" />
												<span className="text-sm">Numbered List</span>
											</div>
											<div className="flex gap-1">
												<button
													onClick={() =>
														updateBlock(block.id, {
															type: "ordered-list",
															items: block.items || [""],
														})
													}
													className="p-1 hover:bg-background rounded"
													title="Transform to numbered list"
												>
													<ArrowRightLeft className="h-3 w-3" />
												</button>
												<button
													onClick={() => addBlock(block.id, "ordered-list")}
													className="p-1 hover:bg-background rounded"
													title="Add numbered list below"
												>
													<Plus className="h-3 w-3" />
												</button>
											</div>
										</div>
									</div>

									<DropdownMenuSeparator />
									<DropdownMenuItem
										onClick={() => deleteBlock(block.id)}
										className="text-red-600"
									>
										<Trash2 className="h-4 w-4 mr-2" />
										Delete Block
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
						<Textarea
							value={block.content}
							onChange={(e) => {
								const newContent = e.target.value;
								updateBlock(block.id, { content: newContent });
								handleSlashCommand(block.id, newContent);
							}}
							onKeyDown={(e) => handleKeyDown(e, block.id)}
							placeholder="Type something... (Try /h1 or /h2 followed by space)"
							className={`mb-0 min-h-[40px] resize-none flex-1 ${
								block.type === "heading1"
									? "text-3xl font-bold"
									: block.type === "heading2"
									? "text-2xl font-semibold"
									: ""
							}`}
							rows={1}
							onInput={(e) => {
								const target = e.target as HTMLTextAreaElement;
								target.style.height = "auto";
								target.style.height = target.scrollHeight + "px";
							}}
						/>
					</div>
				)}

				{(block.type === "list" || block.type === "ordered-list") &&
					block.items && (
						<div className="group relative flex items-start gap-2">
							<div className="flex items-start gap-1">
								<div
									className="opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-grab active:cursor-grabbing p-1 hover:bg-accent rounded flex items-center justify-center mt-0"
									draggable
									onDragStart={(e) => handleDragStart(e, block.id)}
									onDragEnd={(e) => {
										(e.currentTarget as HTMLElement).style.opacity = "";
									}}
								>
									<GripVertical className="h-5 w-5 text-muted-foreground" />
								</div>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button
											variant="ghost"
											size="sm"
											className="opacity-20 group-hover:opacity-100 transition-opacity mt-0 h-6 w-6 p-0"
										>
											<Menu className="h-4 w-4" />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent
										align="start"
										className="w-64"
									>
										<div className="p-1 space-y-0.5">
											<div className="flex items-center justify-between px-2 py-1.5 hover:bg-accent rounded-sm">
												<div className="flex items-center flex-1">
													<Type className="h-4 w-4 mr-2 text-muted-foreground" />
													<span className="text-sm">Text</span>
												</div>
												<div className="flex gap-1">
													<button
														onClick={() =>
															updateBlock(block.id, { type: "text" })
														}
														className="p-1 hover:bg-background rounded"
														title="Transform to text"
													>
														<ArrowRightLeft className="h-3 w-3" />
													</button>
													<button
														onClick={() => addBlock(block.id, "text")}
														className="p-1 hover:bg-background rounded"
														title="Add text block below"
													>
														<Plus className="h-3 w-3" />
													</button>
												</div>
											</div>

											<div className="flex items-center justify-between px-2 py-1.5 hover:bg-accent rounded-sm">
												<div className="flex items-center flex-1">
													<Heading1 className="h-4 w-4 mr-2 text-muted-foreground" />
													<span className="text-sm">Heading 1</span>
												</div>
												<div className="flex gap-1">
													<button
														onClick={() =>
															updateBlock(block.id, { type: "heading1" })
														}
														className="p-1 hover:bg-background rounded"
														title="Transform to heading 1"
													>
														<ArrowRightLeft className="h-3 w-3" />
													</button>
													<button
														onClick={() => addBlock(block.id, "heading1")}
														className="p-1 hover:bg-background rounded"
														title="Add heading 1 below"
													>
														<Plus className="h-3 w-3" />
													</button>
												</div>
											</div>

											<div className="flex items-center justify-between px-2 py-1.5 hover:bg-accent rounded-sm">
												<div className="flex items-center flex-1">
													<Heading2 className="h-4 w-4 mr-2 text-muted-foreground" />
													<span className="text-sm">Heading 2</span>
												</div>
												<div className="flex gap-1">
													<button
														onClick={() =>
															updateBlock(block.id, { type: "heading2" })
														}
														className="p-1 hover:bg-background rounded"
														title="Transform to heading 2"
													>
														<ArrowRightLeft className="h-3 w-3" />
													</button>
													<button
														onClick={() => addBlock(block.id, "heading2")}
														className="p-1 hover:bg-background rounded"
														title="Add heading 2 below"
													>
														<Plus className="h-3 w-3" />
													</button>
												</div>
											</div>

											<div className="flex items-center justify-between px-2 py-1.5 hover:bg-accent rounded-sm">
												<div className="flex items-center flex-1">
													<List className="h-4 w-4 mr-2 text-muted-foreground" />
													<span className="text-sm">Bullet List</span>
												</div>
												<div className="flex gap-1">
													<button
														onClick={() =>
															updateBlock(block.id, {
																type: "list",
																items: block.items || [""],
															})
														}
														className="p-1 hover:bg-background rounded"
														title="Transform to bullet list"
													>
														<ArrowRightLeft className="h-3 w-3" />
													</button>
													<button
														onClick={() => addBlock(block.id, "list")}
														className="p-1 hover:bg-background rounded"
														title="Add bullet list below"
													>
														<Plus className="h-3 w-3" />
													</button>
												</div>
											</div>

											<div className="flex items-center justify-between px-2 py-1.5 hover:bg-accent rounded-sm">
												<div className="flex items-center flex-1">
													<ListOrdered className="h-4 w-4 mr-2 text-muted-foreground" />
													<span className="text-sm">Numbered List</span>
												</div>
												<div className="flex gap-1">
													<button
														onClick={() =>
															updateBlock(block.id, {
																type: "ordered-list",
																items: block.items || [""],
															})
														}
														className="p-1 hover:bg-background rounded"
														title="Transform to numbered list"
													>
														<ArrowRightLeft className="h-3 w-3" />
													</button>
													<button
														onClick={() => addBlock(block.id, "ordered-list")}
														className="p-1 hover:bg-background rounded"
														title="Add numbered list below"
													>
														<Plus className="h-3 w-3" />
													</button>
												</div>
											</div>
										</div>

										<DropdownMenuSeparator />
										<DropdownMenuItem
											onClick={() => deleteBlock(block.id)}
											className="text-red-600"
										>
											<Trash2 className="h-4 w-4 mr-2" />
											Delete Block
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
							<div className="space-y-2 mb-2 flex-1">
								{block.items.map((item, itemIndex) => (
									<div
										key={itemIndex}
										className="flex items-center gap-2"
									>
										<span className="text-sm text-muted-foreground">
											{block.type === "list" ? "•" : `${itemIndex + 1}.`}
										</span>
										<Input
											value={item}
											onChange={(e) =>
												updateListItem(block.id, itemIndex, e.target.value)
											}
											placeholder="List item..."
											className="flex-1"
										/>
										{block.items!.length > 1 && (
											<Button
												variant="ghost"
												size="sm"
												onClick={() => removeListItem(block.id, itemIndex)}
											>
												<Trash2 className="h-4 w-4" />
											</Button>
										)}
									</div>
								))}
								<Button
									variant="ghost"
									size="sm"
									onClick={() => addListItem(block.id)}
									className="text-muted-foreground"
								>
									<Plus className="h-4 w-4 mr-1" /> Add item
								</Button>
							</div>
						</div>
					)}
			</div>
		);
	};

	return (
		<div className="w-full relative">
			{/* Keyboard Shortcuts Panel */}
			{!readOnly && showTitle && <div className="fixed bottom-4 right-4 z-50">
				<div
					className={`bg-background border rounded-lg shadow-lg transition-all duration-200 ${
						showShortcuts ? "w-72" : "w-auto"
					}`}
				>
					<div className="flex items-center justify-between p-2">
						<Button
							variant="ghost"
							size="sm"
							onClick={() => setShowShortcuts(!showShortcuts)}
							className="flex items-center gap-1"
						>
							<Keyboard className="h-4 w-4" />
							{showShortcuts ? (
								<ChevronDown className="h-3 w-3" />
							) : (
								<ChevronUp className="h-3 w-3" />
							)}
						</Button>
						{showShortcuts && (
							<Button
								variant="ghost"
								size="sm"
								onClick={() => setShowShortcuts(false)}
								className="h-6 w-6 p-0"
							>
								<X className="h-3 w-3" />
							</Button>
						)}
					</div>

					{showShortcuts && (
						<div className="p-3 pt-0 space-y-2 text-xs">
							<div className="font-semibold text-foreground">
								Keyboard Shortcuts
							</div>
							<div className="space-y-1">
								<div className="flex justify-between">
									<span className="text-muted-foreground">Enter</span>
									<span>New block</span>
								</div>
								<div className="flex justify-between">
									<span className="text-muted-foreground">Shift+Enter</span>
									<span>Line break</span>
								</div>
								<div className="flex justify-between">
									<span className="text-muted-foreground">/h1 + Space</span>
									<span>Heading 1</span>
								</div>
								<div className="flex justify-between">
									<span className="text-muted-foreground">/h2 + Space</span>
									<span>Heading 2</span>
								</div>
								<div className="flex justify-between">
									<span className="text-muted-foreground">/ul + Space</span>
									<span>Bullet List</span>
								</div>
								<div className="flex justify-between">
									<span className="text-muted-foreground">/ol + Space</span>
									<span>Numbered List</span>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>}

			{!readOnly && showTitle && <div className="flex items-center justify-between mb-8 pb-4 border-b">
				{isEditing ? (
					<input
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder="Note title..."
						className="text-3xl font-bold border-none p-0 h-auto bg-transparent outline-none flex-1 min-w-0"
						style={{ fontSize: "2rem", lineHeight: "2.5rem" }}
					/>
				) : (
					<h1 className="text-3xl font-bold">{title || "Untitled Note"}</h1>
				)}

				<div className="flex gap-2">
					{!readOnly && (
						<>
							{isEditing ? (
								<Button onClick={handleSave}>
									<Save className="h-4 w-4 mr-1" />
									Save
								</Button>
							) : (
								<Button
									variant="outline"
									onClick={() => setIsEditing(true)}
								>
									<Edit3 className="h-4 w-4 mr-1" />
									Edit
								</Button>
							)}
						</>
					)}
				</div>
			</div>}

			<div className="space-y-2">
				{blocks.map((block, index) => renderBlock(block, index))}
			</div>
		</div>
	);
}
