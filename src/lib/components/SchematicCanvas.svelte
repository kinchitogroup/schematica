<script lang="ts">
	import { COMPONENT_LIBRARY } from '../data/component-library.js';
	import type { PlacedComponent } from '../types/components.js';

	let placedComponents = $state<PlacedComponent[]>([]);
	let isDragOver = $state(false);
	let canvasEl = $state<HTMLDivElement | null>(null);

	let instanceCounter = 0;

	function getDefinition(id: string) {
		return COMPONENT_LIBRARY.find((c) => c.id === id);
	}

	function getLabel(definitionId: string, index: number) {
		const def = getDefinition(definitionId);
		if (!def) return `U${index}`;
		return `${def.prefix}${index}`;
	}

	function onDragOver(event: DragEvent) {
		if (!event.dataTransfer?.types.includes('application/schematica-component')) return;
		event.preventDefault();
		event.dataTransfer.dropEffect = 'copy';
		isDragOver = true;
	}

	function onDragLeave(event: DragEvent) {
		if (event.currentTarget === event.target) {
			isDragOver = false;
		}
	}

	function onDrop(event: DragEvent) {
		isDragOver = false;
		event.preventDefault();
		const raw = event.dataTransfer?.getData('application/schematica-component');
		if (!raw) return;

		let payload: { type: string; definitionId: string };
		try {
			payload = JSON.parse(raw);
		} catch {
			return;
		}

		if (payload.type !== 'component') return;

		const rect = canvasEl?.getBoundingClientRect();
		if (!rect) return;

		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		instanceCounter++;
		const label = getLabel(payload.definitionId, instanceCounter);

		placedComponents.push({
			instanceId: `${payload.definitionId}-${instanceCounter}`,
			definitionId: payload.definitionId,
			x,
			y,
			rotation: 0,
			label,
			value: ''
		});
	}

	function removeComponent(instanceId: string) {
		placedComponents = placedComponents.filter((c) => c.instanceId !== instanceId);
	}

	let draggingInstance = $state<string | null>(null);
	let dragOffsetX = $state(0);
	let dragOffsetY = $state(0);

	function onComponentMouseDown(event: MouseEvent, instanceId: string) {
		event.stopPropagation();
		const comp = placedComponents.find((c) => c.instanceId === instanceId);
		if (!comp) return;
		draggingInstance = instanceId;
		dragOffsetX = event.clientX - comp.x;
		dragOffsetY = event.clientY - comp.y;
	}

	function onCanvasMouseMove(event: MouseEvent) {
		if (!draggingInstance || !canvasEl) return;
		const rect = canvasEl.getBoundingClientRect();
		const idx = placedComponents.findIndex((c) => c.instanceId === draggingInstance);
		if (idx === -1) return;
		placedComponents[idx].x = event.clientX - rect.left - dragOffsetX + placedComponents[idx].x;
		placedComponents[idx].y = event.clientY - rect.top - dragOffsetY + placedComponents[idx].y;
		dragOffsetX = event.clientX - rect.left;
		dragOffsetY = event.clientY - rect.top;
	}

	function onCanvasMouseUp() {
		draggingInstance = null;
	}

	function onComponentMouseMoveCanvas(event: MouseEvent) {
		if (!draggingInstance || !canvasEl) return;
		const rect = canvasEl.getBoundingClientRect();
		const nx = event.clientX - rect.left;
		const ny = event.clientY - rect.top;
		const idx = placedComponents.findIndex((c) => c.instanceId === draggingInstance);
		if (idx === -1) return;
		placedComponents[idx].x = nx - dragOffsetX;
		placedComponents[idx].y = ny - dragOffsetY;
	}
</script>

<div
	bind:this={canvasEl}
	class="relative flex-1 bg-gray-950 overflow-hidden {isDragOver
		? 'ring-2 ring-inset ring-blue-500'
		: ''}"
	ondragover={onDragOver}
	ondragleave={onDragLeave}
	ondrop={onDrop}
	onmousemove={onComponentMouseMoveCanvas}
	onmouseup={onCanvasMouseUp}
	role="application"
	aria-label="Schematic canvas"
>
	<svg class="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<pattern id="grid-small" width="10" height="10" patternUnits="userSpaceOnUse">
				<path d="M 10 0 L 0 0 0 10" fill="none" stroke="#1f2937" stroke-width="0.5" />
			</pattern>
			<pattern id="grid-large" width="100" height="100" patternUnits="userSpaceOnUse">
				<rect width="100" height="100" fill="url(#grid-small)" />
				<path d="M 100 0 L 0 0 0 100" fill="none" stroke="#374151" stroke-width="1" />
			</pattern>
		</defs>
		<rect width="100%" height="100%" fill="url(#grid-large)" />
	</svg>

	{#if placedComponents.length === 0 && !isDragOver}
		<div class="absolute inset-0 flex items-center justify-center pointer-events-none">
			<div class="text-center">
				<svg
					class="w-12 h-12 mx-auto mb-3 text-gray-700"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1"
				>
					<rect x="3" y="3" width="7" height="7" rx="1" />
					<rect x="14" y="3" width="7" height="7" rx="1" />
					<rect x="3" y="14" width="7" height="7" rx="1" />
					<path d="M17.5 14v6M14.5 17h6" />
				</svg>
				<p class="text-gray-600 text-sm">Drag components from the panel to place them</p>
			</div>
		</div>
	{/if}

	{#if isDragOver}
		<div class="absolute inset-0 flex items-center justify-center pointer-events-none">
			<p class="text-blue-400 text-sm font-medium bg-gray-900/80 px-4 py-2 rounded-lg">
				Drop to place component
			</p>
		</div>
	{/if}

	{#each placedComponents as comp (comp.instanceId)}
		{@const def = getDefinition(comp.definitionId)}
		{#if def}
			<div
				class="absolute group cursor-move"
				style="left: {comp.x}px; top: {comp.y}px; transform: translate(-50%, -50%) rotate({comp.rotation}deg);"
				onmousedown={(e) => onComponentMouseDown(e, comp.instanceId)}
				role="button"
				tabindex="0"
				aria-label="{def.name} {comp.label}"
				onkeydown={(e) => {
					if (e.key === 'Delete' || e.key === 'Backspace') removeComponent(comp.instanceId);
				}}
			>
				<div
					class="relative flex flex-col items-center px-3 py-2 rounded border border-gray-700 bg-gray-900 hover:border-blue-500 hover:bg-gray-800 transition-colors min-w-[60px]"
				>
					<span class="text-blue-400 font-mono font-bold text-lg leading-none">{def.symbol}</span>
					<span class="text-gray-300 text-xs mt-0.5 whitespace-nowrap">{def.name}</span>
					<span class="text-gray-500 text-xs">{comp.label}</span>

					<button
						class="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gray-700 hover:bg-red-600 text-gray-400 hover:text-white opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center"
						onclick={(e) => {
							e.stopPropagation();
							removeComponent(comp.instanceId);
						}}
						aria-label="Remove {comp.label}"
					>
						<svg class="w-2.5 h-2.5" viewBox="0 0 20 20" fill="currentColor">
							<path
								fill-rule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>
				</div>
			</div>
		{/if}
	{/each}
</div>
