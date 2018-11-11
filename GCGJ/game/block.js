var dirList = ["moveLeft", "moveUp", "moveRight", "moveDown"];
var dirs = ["左", "上", "右", "下"];

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
Blockly.Blocks["mine"] = {
    init: function() {
        this.appendDummyInput()
            .appendField("挖掘");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript[dirList[0]] = function(block) {
    return t('move(0)');
};
Blockly.JavaScript[dirList[1]] = function(block) {
    return t('move(1)');
};
Blockly.JavaScript[dirList[2]] = function(block) {
    return t('move(2)');
};
Blockly.JavaScript[dirList[3]] = function(block) {
    return t('move(3)');
};
Blockly.JavaScript["mine"] = function(block) {
    return t('mine()');
};

function t(a) {
    return 'tasks.push("' + a + '");\n';
}