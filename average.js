(function () {
    var block = {
        type: 'average',
        color: EntryStatic.colorSet.blockMenu.calculation,
        skeleton: 'basic_string',
        statement: ['%1과 %2의 평균'],
        params: [
            { type: 'Input', params: { type: 'number', defaultValue: 0 } },
            { type: 'Input', params: { type: 'number', defaultValue: 0 } }
        ],
        func: function (sprite, script) {
            var a = Number(script.getNumberValue(0));
            var b = Number(script.getNumberValue(1));
            return (a + b) / 2;
        }
    };

    Entry.block.average = block;
    Entry.playground.blockMenu.addBlock(block, 'calc');
})();
