Blockly.Blocks['Machine/machine'] = {
	init: function () {
		this.jsonInit({
			"type": "Machine/machine",
			"message0": "machine %1 %2 %3 ",
			"args0": [{
					"name": "id",
					"type": "field_input",
					"text": ""
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "states",
					"type": "input_statement",
					"check": ["State", "epsilon"]
				},

			],
			"colour": 90,



			"inputsInline": false,
			"tooltip": "",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Trans/transition'] = {
	init: function () {
		this.jsonInit({
			"type": "Trans/transition",
			"message0": "on %1 %2 to %3 %4 ",
			"args0": [{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "on",
					"type": "field_input",
					"text": ""
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "to",
					"type": "field_input",
					"text": ""
				},

			],
			"colour": 178,

			"previousStatement": "Trans",
			"nextStatement": "Trans",
			"inputsInline": true,
			"tooltip": "transition",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['State/state'] = {
	init: function () {
		this.jsonInit({
			"type": "State/state",
			"message0": "state %1 %2 { %3 %4 } %5 ",
			"args0": [{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "id",
					"type": "field_input",
					"text": ""
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "transitions",
					"type": "input_statement",
					"check": ["Trans", "epsilon"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},

			],
			"colour": 312,

			"previousStatement": "State",
			"nextStatement": "State",
			"inputsInline": true,
			"tooltip": "state",
			"helpUrl": ""
		});
	}
}
Blockly.BlockSvg.START_HAT = true;
var workspace = Blockly.inject('blockDiv', {
	toolbox: document.getElementById('toolbox'),
	collapse: true,
	toolboxPosition: 'start', // end
	trashcan: true
});
workspace.addChangeListener(Blockly.Events.disableOrphans);

//Storage options
BlocklyStorage.backupOnUnload();
window.setTimeout(BlocklyStorage.restoreBlocks, 0);

function xmlText() {
	var xml = Blockly.Xml.workspaceToDom(workspace);
	var xml_text = Blockly.Xml.domToPrettyText(xml);
	document.getElementById('textarea').value = xml_text;
}