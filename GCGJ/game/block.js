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
    move(0);
    console.log(dirs[0]);
    return '...;\n';
};
Blockly.JavaScript[dirList[1]] = function(block) {
    move(1);
    console.log(dirs[1]);
    return '...;\n';
};
Blockly.JavaScript[dirList[2]] = function(block) {
    move(2);
    console.log(dirs[2]);
    return '...;\n';
};
Blockly.JavaScript[dirList[3]] = function(block) {
    move(3);
    console.log(dirs[3]);
    return '...;\n';
};