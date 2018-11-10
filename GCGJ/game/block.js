var dirList = ["moveUp", "moveDown", "moveLeft", "moveRight"];
var dirs = ["up", "down", "left", "right"];

Blockly.Blocks[dirList[0]] = {
    init: function() {
        this.appendDummyInput()
            .appendField(dirs[0]);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks[dirList[1]] = {
    init: function() {
        this.appendDummyInput()
            .appendField(dirs[1]);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks[dirList[2]] = {
    init: function() {
        this.appendDummyInput()
            .appendField(dirs[2]);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks[dirList[3]] = {
    init: function() {
        this.appendDummyInput()
            .appendField(dirs[3]);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript[dirList[0]] = function(block) {
    return 'move(0);\n';
};
Blockly.JavaScript[dirList[1]] = function(block) {
    return 'move(1);\n';
};
Blockly.JavaScript[dirList[2]] = function(block) {
    return 'move(2);\n';
};
Blockly.JavaScript[dirList[3]] = function(block) {
    return 'move(3);\n';
};