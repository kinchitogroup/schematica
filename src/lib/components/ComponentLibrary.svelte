<script lang="ts">
	import { COMPONENT_LIBRARY, CATEGORY_LABELS } from '../data/component-library.js';
	import type { ComponentCategory, ComponentDefinition } from '../types/components.js';

	let searchQuery = $state('');
	let expandedCategories = $state<Set<ComponentCategory>>(
		new Set(['passives', 'semiconductors', 'ics', 'connectors', 'power', 'sensors', 'switches'])
	);

	const filtered = $derived(() => {
		const q = searchQuery.trim().toLowerCase();
		if (!q) return COMPONENT_LIBRARY;
		return COMPONENT_LIBRARY.filter(
			(c) =>
				c.name.toLowerCase().includes(q) ||
				c.description.toLowerCase().includes(q) ||
				c.keywords.some((k) => k.includes(q))
		);
	});

	const grouped = $derived(() => {
		const map = new Map<ComponentCategory, ComponentDefinition[]>();
		for (const comp of filtered()) {
			const list = map.get(comp.category) ?? [];
			list.push(comp);
			map.set(comp.category, list);
		}
		return map;
	});

	function toggleCategory(cat: ComponentCategory) {
		const next = new Set(expandedCategories);
		if (next.has(cat)) {
			next.delete(cat);
		} else {
			next.add(cat);
		}
		expandedCategories = next;
	}

	function onDragStart(event: DragEvent, comp: ComponentDefinition) {
		if (!event.dataTransfer) return;
		event.dataTransfer.effectAllowed = 'copy';
		event.dataTransfer.setData(
			'application/schematica-component',
			JSON.stringify({ type: 'component', definitionId: comp.id })
		);
	}
</script>

<aside class="flex flex-col h-full w-64 bg-gray-900 border-r border-gray-800 select-none">
	<div class="p-3 border-b border-gray-800">
		<h2 class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Components</h2>
		<div class="relative">
			<svg
				class="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500 pointer-events-none"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M9 3a6 6 0 100 12A6 6 0 009 3zM1 9a8 8 0 1114.32 4.906l3.387 3.387a1 1 0 01-1.414 1.414l-3.387-3.387A8 8 0 011 9z"
					clip-rule="evenodd"
				/>
			</svg>
			<input
				type="text"
				placeholder="Search..."
				bind:value={searchQuery}
				class="w-full bg-gray-800 text-gray-200 text-sm rounded pl-8 pr-3 py-1.5 outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-600"
			/>
			{#if searchQuery}
				<button
					onclick={() => (searchQuery = '')}
					class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
					aria-label="Clear search"
				>
					<svg class="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
						<path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			{/if}
		</div>
	</div>

	<div class="flex-1 overflow-y-auto">
		{#if filtered().length === 0}
			<p class="text-gray-500 text-sm text-center mt-8 px-4">No components match "{searchQuery}"</p>
		{:else}
			{#each [...grouped().entries()] as [category, components]}
				<div>
					<button
						class="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider hover:bg-gray-800 transition-colors"
						onclick={() => toggleCategory(category)}
					>
						<span>{CATEGORY_LABELS[category]}</span>
						<span class="flex items-center gap-1">
							<span class="text-gray-600 normal-case font-normal">{components.length}</span>
							<svg
								class="w-3 h-3 transition-transform {expandedCategories.has(category)
									? 'rotate-0'
									: '-rotate-90'}"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clip-rule="evenodd"
								/>
							</svg>
						</span>
					</button>

					{#if expandedCategories.has(category)}
						<ul>
							{#each components as comp (comp.id)}
								<li>
									<div
										draggable="true"
										ondragstart={(e) => onDragStart(e, comp)}
										class="flex items-center gap-2.5 px-3 py-2 cursor-grab active:cursor-grabbing hover:bg-gray-800 transition-colors group"
										title={comp.description}
										role="listitem"
									>
										<span
											class="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded bg-gray-800 group-hover:bg-gray-700 text-blue-400 text-xs font-mono font-bold transition-colors"
										>
											{comp.symbol}
										</span>
										<div class="min-w-0">
											<p class="text-sm text-gray-200 truncate leading-tight">{comp.name}</p>
											<p class="text-xs text-gray-500 truncate leading-tight">{comp.description}</p>
										</div>
									</div>
								</li>
							{/each}
						</ul>
					{/if}
				</div>
			{/each}
		{/if}
	</div>

	<div class="p-2 border-t border-gray-800">
		<p class="text-xs text-gray-600 text-center">
			{filtered().length} component{filtered().length !== 1 ? 's' : ''}
		</p>
	</div>
</aside>
