Blockly.Blocks['Declarations/declarations'] = {
	init: function () {
		this.jsonInit({
			"type": "Declarations/declarations",
			"message0": "declare %1 %2 ; %3 ",
			"args0": [{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "decls",
					"type": "input_statement",
					"check": ["Declaration", "epsilon"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},

			],
			"colour": 57,
			"output": "Declarations",


			"inputsInline": true,
			"tooltip": "declarations",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Expression/conc'] = {
	init: function () {
		this.jsonInit({
			"type": "Expression/conc",
			"message0": "%1 || %2 %3 ",
			"args0": [{
					"name": "Expression",
					"type": "input_value",
					"check": ["Expression"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Expression",
					"type": "input_value",
					"check": ["Expression"]
				},

			],
			"colour": 353,
			"output": "Expression",


			"inputsInline": true,
			"tooltip": "conc",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Ttype/string'] = {
	init: function () {
		this.jsonInit({
			"type": "Ttype/string",
			"message0": "string",

			"colour": 226,
			"output": "Ttype",


			"inputsInline": true,
			"tooltip": "string",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Statement/asgStat'] = {
	init: function () {
		this.jsonInit({
			"type": "Statement/asgStat",
			"message0": "%1 := %2 %3 ",
			"args0": [{
					"name": "var",
					"type": "field_input",
					"text": ""
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Expression",
					"type": "input_value",
					"check": ["Expression"]
				},

			],
			"colour": 95,

			"previousStatement": "Statement",
			"nextStatement": "Statement",
			"inputsInline": true,
			"tooltip": "asgStat",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Statement/whileStat'] = {
	init: function () {
		this.jsonInit({
			"type": "Statement/whileStat",
			"message0": "while %1 %2 do %3 %4 od %5 ",
			"args0": [{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Expression",
					"type": "input_value",
					"check": ["Expression"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "body",
					"type": "input_statement",
					"check": ["Statement", "epsilon"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},

			],
			"colour": 284,

			"previousStatement": "Statement",
			"nextStatement": "Statement",
			"inputsInline": true,
			"tooltip": "whileStat",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Expression/natCon'] = {
	init: function () {
		this.jsonInit({
			"type": "Expression/natCon",
			"message0": "%1 ",
			"args0": [{
					"name": "natcon",
					"type": "field_number",
					"value": 0
				},

			],
			"colour": 248,
			"output": "Expression",


			"inputsInline": true,
			"tooltip": "natCon",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Expression/add'] = {
	init: function () {
		this.jsonInit({
			"type": "Expression/add",
			"message0": "%1 + %2 %3 ",
			"args0": [{
					"name": "Expression",
					"type": "input_value",
					"check": ["Expression"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Expression",
					"type": "input_value",
					"check": ["Expression"]
				},

			],
			"colour": 181,
			"output": "Expression",


			"inputsInline": true,
			"tooltip": "add",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Expression/sub'] = {
	init: function () {
		this.jsonInit({
			"type": "Expression/sub",
			"message0": "%1 - %2 %3 ",
			"args0": [{
					"name": "Expression",
					"type": "input_value",
					"check": ["Expression"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Expression",
					"type": "input_value",
					"check": ["Expression"]
				},

			],
			"colour": 23,
			"output": "Expression",


			"inputsInline": true,
			"tooltip": "sub",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Declaration/decl'] = {
	init: function () {
		this.jsonInit({
			"type": "Declaration/decl",
			"message0": "%1 : %2 %3 ",
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
					"name": "Ttype",
					"type": "input_value",
					"check": ["Ttype"]
				},

			],
			"colour": 38,

			"previousStatement": "Declaration",
			"nextStatement": "Declaration",
			"inputsInline": true,
			"tooltip": "decl",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Program/program'] = {
	init: function () {
		this.jsonInit({
			"type": "Program/program",
			"message0": "begin %1 %2 %3 end %4 ",
			"args0": [{
					"name": "Declarations",
					"type": "input_value",
					"check": ["Declarations"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "body",
					"type": "input_statement",
					"check": ["Statement", "epsilon"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},

			],
			"colour": 120,



			"inputsInline": false,
			"tooltip": "",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Statement/ifElseStat'] = {
	init: function () {
		this.jsonInit({
			"type": "Statement/ifElseStat",
			"message0": "if %1 %2 then %3 %4 else %5 %6 fi %7 ",
			"args0": [{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Expression",
					"type": "input_value",
					"check": ["Expression"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "thenPart",
					"type": "input_statement",
					"check": ["Statement", "epsilon"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "elsePart",
					"type": "input_statement",
					"check": ["Statement", "epsilon"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},

			],
			"colour": 85,

			"previousStatement": "Statement",
			"nextStatement": "Statement",
			"inputsInline": true,
			"tooltip": "ifElseStat",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Ttype/natural'] = {
	init: function () {
		this.jsonInit({
			"type": "Ttype/natural",
			"message0": "natural",

			"colour": 267,
			"output": "Ttype",


			"inputsInline": true,
			"tooltip": "natural",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Expression/idP'] = {
	init: function () {
		this.jsonInit({
			"type": "Expression/idP",
			"message0": "%1 ",
			"args0": [{
					"name": "name",
					"type": "field_input",
					"text": ""
				},

			],
			"colour": 191,
			"output": "Expression",


			"inputsInline": true,
			"tooltip": "idP",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['String/string'] = {
	init: function () {
		this.jsonInit({
			"type": "String/string",
			"message0": "\" %1 %2 \" %3 ",
			"args0": [{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "StringName",
					"type": "field_input",
					"text": "String"
				},
				{
					"name": "",
					"type": "input_dummy"
				},

			],
			"colour": 215,
			"output": "String",


			"inputsInline": true,
			"tooltip": "",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Expression/strCon'] = {
	init: function () {
		this.jsonInit({
			"type": "Expression/strCon",
			"message0": "%1 ",
			"args0": [{
					"name": "string",
					"type": "input_value",
					"check": ["String"]
				},

			],
			"colour": 327,
			"output": "Expression",


			"inputsInline": true,
			"tooltip": "strCon",
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