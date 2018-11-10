var dirList = ["moveUp", "moveDown", "moveLeft", "moveRight"];
var dirs = ["up", "down", "left", "right"];

for (var i = 0; i < 4; i++) {
    Blockly.Blocks[dirList[i]] = {
        init: function() {
            this.jsonInit({
                "type": dirList[i],
                "message0": "移動",
                "previousStatement": null,
                "nextStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
            });
        }
    };

    /*Blockly.JavaScript[dirList[i]] = function(block) {
        return '...;\n';
    };*/
}