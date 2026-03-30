export type ComponentCategory =
	| 'passives'
	| 'semiconductors'
	| 'ics'
	| 'connectors'
	| 'power'
	| 'sensors'
	| 'switches';

export interface Pin {
	id: string;
	name: string;
	x: number;
	y: number;
	direction: 'in' | 'out' | 'inout' | 'passive';
}

export interface ComponentDefinition {
	id: string;
	name: string;
	category: ComponentCategory;
	description: string;
	symbol: string;
	pins: Pin[];
	keywords: string[];
	prefix: string;
}

export interface PlacedComponent {
	instanceId: string;
	definitionId: string;
	x: number;
	y: number;
	rotation: number;
	label: string;
	value: string;
}

export interface DragPayload {
	type: 'component';
	definitionId: string;
}
