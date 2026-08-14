(function () {
    if (typeof Entry === 'undefined') {
        console.error('Entry를 찾을 수 없습니다.');
        return;
    }

    if (typeof EntryStatic === 'undefined') {
        console.error('EntryStatic을 찾을 수 없습니다.');
        return;
    }

    var block = {
        type: 'average',
        color: EntryStatic.colorSet.blockMenu.calculation,
        skeleton: 'basic_string',
        statement: ['%1과 %2의 평균'],
        params: [
            {
                type: 'Input',
                params: {
                    type: 'number',
                    defaultValue: 0
                }
            },
            {
                type: 'Input',
                params: {
                    type: 'number',
                    defaultValue: 0
                }
            }
        ],
        func: function (sprite, script) {
            var a = Number(script.getNumberValue(0));
            var b = Number(script.getNumberValue(1));

            return (a + b) / 2;
        }
    };

    Entry.block.average = block;

    if (
        Entry.playground &&
        Entry.playground.blockMenu &&
        typeof Entry.playground.blockMenu.addBlock === 'function'
    ) {
        Entry.playground.blockMenu.addBlock(block, 'calc');
        console.log('평균 블록이 추가되었습니다!');
    } else {
        console.error('Entry.playground.blockMenu.addBlock을 찾을 수 없습니다.');
    }
})();