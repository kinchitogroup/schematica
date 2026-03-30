import type { ComponentDefinition } from '../types/components.js';

export const COMPONENT_LIBRARY: ComponentDefinition[] = [
	{
		id: 'resistor',
		name: 'Resistor',
		category: 'passives',
		description: 'Fixed resistor',
		symbol: 'R',
		prefix: 'R',
		keywords: ['resistor', 'resistance', 'ohm', 'passive'],
		pins: [
			{ id: '1', name: '1', x: -20, y: 0, direction: 'passive' },
			{ id: '2', name: '2', x: 20, y: 0, direction: 'passive' }
		]
	},
	{
		id: 'capacitor',
		name: 'Capacitor',
		category: 'passives',
		description: 'Fixed capacitor',
		symbol: 'C',
		prefix: 'C',
		keywords: ['capacitor', 'capacitance', 'farad', 'passive'],
		pins: [
			{ id: '1', name: '+', x: -20, y: 0, direction: 'passive' },
			{ id: '2', name: '-', x: 20, y: 0, direction: 'passive' }
		]
	},
	{
		id: 'capacitor-electrolytic',
		name: 'Capacitor (Electrolytic)',
		category: 'passives',
		description: 'Polarized electrolytic capacitor',
		symbol: 'C',
		prefix: 'C',
		keywords: ['capacitor', 'electrolytic', 'polarized', 'farad'],
		pins: [
			{ id: '1', name: '+', x: -20, y: 0, direction: 'passive' },
			{ id: '2', name: '-', x: 20, y: 0, direction: 'passive' }
		]
	},
	{
		id: 'inductor',
		name: 'Inductor',
		category: 'passives',
		description: 'Fixed inductor',
		symbol: 'L',
		prefix: 'L',
		keywords: ['inductor', 'inductance', 'henry', 'coil', 'passive'],
		pins: [
			{ id: '1', name: '1', x: -20, y: 0, direction: 'passive' },
			{ id: '2', name: '2', x: 20, y: 0, direction: 'passive' }
		]
	},
	{
		id: 'diode',
		name: 'Diode',
		category: 'semiconductors',
		description: 'General purpose diode',
		symbol: 'D',
		prefix: 'D',
		keywords: ['diode', 'rectifier', 'semiconductor'],
		pins: [
			{ id: 'A', name: 'A', x: -20, y: 0, direction: 'in' },
			{ id: 'K', name: 'K', x: 20, y: 0, direction: 'out' }
		]
	},
	{
		id: 'led',
		name: 'LED',
		category: 'semiconductors',
		description: 'Light emitting diode',
		symbol: 'D',
		prefix: 'D',
		keywords: ['led', 'light', 'diode', 'semiconductor'],
		pins: [
			{ id: 'A', name: 'A', x: -20, y: 0, direction: 'in' },
			{ id: 'K', name: 'K', x: 20, y: 0, direction: 'out' }
		]
	},
	{
		id: 'zener',
		name: 'Zener Diode',
		category: 'semiconductors',
		description: 'Zener diode for voltage regulation',
		symbol: 'D',
		prefix: 'D',
		keywords: ['zener', 'diode', 'voltage', 'regulation', 'semiconductor'],
		pins: [
			{ id: 'A', name: 'A', x: -20, y: 0, direction: 'in' },
			{ id: 'K', name: 'K', x: 20, y: 0, direction: 'out' }
		]
	},
	{
		id: 'npn',
		name: 'NPN Transistor',
		category: 'semiconductors',
		description: 'NPN bipolar junction transistor',
		symbol: 'Q',
		prefix: 'Q',
		keywords: ['npn', 'transistor', 'bjt', 'semiconductor'],
		pins: [
			{ id: 'B', name: 'B', x: -20, y: 0, direction: 'in' },
			{ id: 'C', name: 'C', x: 0, y: -20, direction: 'out' },
			{ id: 'E', name: 'E', x: 0, y: 20, direction: 'out' }
		]
	},
	{
		id: 'pnp',
		name: 'PNP Transistor',
		category: 'semiconductors',
		description: 'PNP bipolar junction transistor',
		symbol: 'Q',
		prefix: 'Q',
		keywords: ['pnp', 'transistor', 'bjt', 'semiconductor'],
		pins: [
			{ id: 'B', name: 'B', x: -20, y: 0, direction: 'in' },
			{ id: 'C', name: 'C', x: 0, y: -20, direction: 'out' },
			{ id: 'E', name: 'E', x: 0, y: 20, direction: 'out' }
		]
	},
	{
		id: 'nmos',
		name: 'N-Channel MOSFET',
		category: 'semiconductors',
		description: 'N-channel MOSFET transistor',
		symbol: 'Q',
		prefix: 'Q',
		keywords: ['nmos', 'mosfet', 'transistor', 'fet', 'semiconductor'],
		pins: [
			{ id: 'G', name: 'G', x: -20, y: 0, direction: 'in' },
			{ id: 'D', name: 'D', x: 0, y: -20, direction: 'out' },
			{ id: 'S', name: 'S', x: 0, y: 20, direction: 'out' }
		]
	},
	{
		id: 'pmos',
		name: 'P-Channel MOSFET',
		category: 'semiconductors',
		description: 'P-channel MOSFET transistor',
		symbol: 'Q',
		prefix: 'Q',
		keywords: ['pmos', 'mosfet', 'transistor', 'fet', 'semiconductor'],
		pins: [
			{ id: 'G', name: 'G', x: -20, y: 0, direction: 'in' },
			{ id: 'D', name: 'D', x: 0, y: -20, direction: 'out' },
			{ id: 'S', name: 'S', x: 0, y: 20, direction: 'out' }
		]
	},
	{
		id: 'op-amp',
		name: 'Op-Amp',
		category: 'ics',
		description: 'Generic operational amplifier',
		symbol: 'U',
		prefix: 'U',
		keywords: ['opamp', 'op-amp', 'amplifier', 'ic', 'analog'],
		pins: [
			{ id: 'IN+', name: 'IN+', x: -30, y: -10, direction: 'in' },
			{ id: 'IN-', name: 'IN-', x: -30, y: 10, direction: 'in' },
			{ id: 'OUT', name: 'OUT', x: 30, y: 0, direction: 'out' },
			{ id: 'V+', name: 'V+', x: 0, y: -20, direction: 'in' },
			{ id: 'V-', name: 'V-', x: 0, y: 20, direction: 'in' }
		]
	},
	{
		id: '555-timer',
		name: '555 Timer',
		category: 'ics',
		description: 'Classic 555 timer IC',
		symbol: 'U',
		prefix: 'U',
		keywords: ['555', 'timer', 'ic', 'oscillator', 'pwm'],
		pins: [
			{ id: '1', name: 'GND', x: -30, y: 20, direction: 'in' },
			{ id: '2', name: 'TRG', x: -30, y: 10, direction: 'in' },
			{ id: '3', name: 'OUT', x: 30, y: 10, direction: 'out' },
			{ id: '4', name: 'RST', x: 30, y: -10, direction: 'in' },
			{ id: '5', name: 'CV', x: 30, y: 0, direction: 'inout' },
			{ id: '6', name: 'THR', x: -30, y: 0, direction: 'in' },
			{ id: '7', name: 'DIS', x: -30, y: -10, direction: 'out' },
			{ id: '8', name: 'VCC', x: -30, y: -20, direction: 'in' }
		]
	},
	{
		id: 'voltage-regulator',
		name: 'Voltage Regulator',
		category: 'ics',
		description: 'Linear voltage regulator (e.g. LM7805)',
		symbol: 'U',
		prefix: 'U',
		keywords: ['regulator', 'ldo', 'voltage', '7805', 'ic', 'power'],
		pins: [
			{ id: 'IN', name: 'IN', x: -30, y: 0, direction: 'in' },
			{ id: 'GND', name: 'GND', x: 0, y: 20, direction: 'in' },
			{ id: 'OUT', name: 'OUT', x: 30, y: 0, direction: 'out' }
		]
	},
	{
		id: 'header-2pin',
		name: '2-Pin Header',
		category: 'connectors',
		description: '2-pin through-hole header connector',
		symbol: 'J',
		prefix: 'J',
		keywords: ['connector', 'header', 'pin', 'through-hole'],
		pins: [
			{ id: '1', name: '1', x: -20, y: -5, direction: 'passive' },
			{ id: '2', name: '2', x: -20, y: 5, direction: 'passive' }
		]
	},
	{
		id: 'header-4pin',
		name: '4-Pin Header',
		category: 'connectors',
		description: '4-pin through-hole header connector',
		symbol: 'J',
		prefix: 'J',
		keywords: ['connector', 'header', 'pin', 'through-hole'],
		pins: [
			{ id: '1', name: '1', x: -20, y: -15, direction: 'passive' },
			{ id: '2', name: '2', x: -20, y: -5, direction: 'passive' },
			{ id: '3', name: '3', x: -20, y: 5, direction: 'passive' },
			{ id: '4', name: '4', x: -20, y: 15, direction: 'passive' }
		]
	},
	{
		id: 'usb-c',
		name: 'USB-C Connector',
		category: 'connectors',
		description: 'USB Type-C connector',
		symbol: 'J',
		prefix: 'J',
		keywords: ['usb', 'usb-c', 'connector', 'power', 'data'],
		pins: [
			{ id: 'VBUS', name: 'VBUS', x: -30, y: -15, direction: 'in' },
			{ id: 'GND', name: 'GND', x: -30, y: -5, direction: 'in' },
			{ id: 'D+', name: 'D+', x: -30, y: 5, direction: 'inout' },
			{ id: 'D-', name: 'D-', x: -30, y: 15, direction: 'inout' }
		]
	},
	{
		id: 'vcc',
		name: 'VCC Power',
		category: 'power',
		description: 'Positive supply voltage symbol',
		symbol: 'PWR',
		prefix: 'PWR',
		keywords: ['vcc', 'power', 'supply', 'voltage', 'positive'],
		pins: [{ id: '1', name: 'PWR', x: 0, y: 10, direction: 'in' }]
	},
	{
		id: 'gnd',
		name: 'GND',
		category: 'power',
		description: 'Ground symbol',
		symbol: 'PWR',
		prefix: 'PWR',
		keywords: ['gnd', 'ground', 'power', 'reference'],
		pins: [{ id: '1', name: 'PWR', x: 0, y: -10, direction: 'passive' }]
	},
	{
		id: 'vbat',
		name: 'VBAT',
		category: 'power',
		description: 'Battery supply voltage symbol',
		symbol: 'PWR',
		prefix: 'PWR',
		keywords: ['vbat', 'battery', 'power', 'supply'],
		pins: [{ id: '1', name: 'PWR', x: 0, y: 10, direction: 'in' }]
	},
	{
		id: 'voltage-source',
		name: 'Voltage Source',
		category: 'power',
		description: 'Ideal voltage source',
		symbol: 'V',
		prefix: 'V',
		keywords: ['voltage', 'source', 'supply', 'power', 'ideal'],
		pins: [
			{ id: '+', name: '+', x: 0, y: -20, direction: 'out' },
			{ id: '-', name: '-', x: 0, y: 20, direction: 'in' }
		]
	},
	{
		id: 'push-button',
		name: 'Push Button',
		category: 'switches',
		description: 'Normally-open push button switch',
		symbol: 'SW',
		prefix: 'SW',
		keywords: ['button', 'switch', 'pushbutton', 'no', 'tactile'],
		pins: [
			{ id: '1', name: '1', x: -20, y: 0, direction: 'passive' },
			{ id: '2', name: '2', x: 20, y: 0, direction: 'passive' }
		]
	},
	{
		id: 'spdt',
		name: 'SPDT Switch',
		category: 'switches',
		description: 'Single pole double throw switch',
		symbol: 'SW',
		prefix: 'SW',
		keywords: ['switch', 'spdt', 'toggle'],
		pins: [
			{ id: 'C', name: 'COM', x: -20, y: 0, direction: 'passive' },
			{ id: 'A', name: 'A', x: 20, y: -10, direction: 'passive' },
			{ id: 'B', name: 'B', x: 20, y: 10, direction: 'passive' }
		]
	},
	{
		id: 'temp-sensor',
		name: 'Temperature Sensor',
		category: 'sensors',
		description: 'Generic temperature sensor (e.g. LM35)',
		symbol: 'U',
		prefix: 'U',
		keywords: ['temperature', 'sensor', 'lm35', 'thermistor'],
		pins: [
			{ id: 'VCC', name: 'VCC', x: -30, y: -10, direction: 'in' },
			{ id: 'OUT', name: 'OUT', x: 30, y: 0, direction: 'out' },
			{ id: 'GND', name: 'GND', x: -30, y: 10, direction: 'in' }
		]
	},
	{
		id: 'photoresistor',
		name: 'Photoresistor (LDR)',
		category: 'sensors',
		description: 'Light dependent resistor',
		symbol: 'R',
		prefix: 'R',
		keywords: ['ldr', 'light', 'photoresistor', 'sensor', 'photocell'],
		pins: [
			{ id: '1', name: '1', x: -20, y: 0, direction: 'passive' },
			{ id: '2', name: '2', x: 20, y: 0, direction: 'passive' }
		]
	}
];

export const CATEGORY_LABELS: Record<string, string> = {
	passives: 'Passives',
	semiconductors: 'Semiconductors',
	ics: 'ICs',
	connectors: 'Connectors',
	power: 'Power',
	sensors: 'Sensors',
	switches: 'Switches'
};
