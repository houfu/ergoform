import {parseSelectItems, SelectItem} from "@classes/ModelItems/SelectItems/SelectItem";

describe('SelectItem -- ', ()=> {
    describe('SelectItems Parsers should work.', function () {
        it('Blank items are blank.', function () {
            let testItems1 = parseSelectItems('');
            expect(testItems1).toEqual([]);
        });
        it('Single items should work.', function () {
            let result: SelectItem[] = [new SelectItem('test1')];
            let testItems1 = parseSelectItems('["test1"]');
            expect(testItems1).toEqual(result);
            let testItems2 = parseSelectItems('"test1"');
            expect(testItems2).toEqual(result);
            result.push(new SelectItem('test2'));
            let testItems3 = parseSelectItems('["test1", "test2"]');
            expect(testItems3).toEqual(result);
        });
        it('Pair items should work.', function () {
            let result: SelectItem[] = [new SelectItem('key1', 'value1')];
            let testItems1 = parseSelectItems('["key1": "value1"]');
            expect(testItems1).toEqual(result);
            let testItems2 = parseSelectItems('"key1" : "value1"');
            expect(testItems2).toEqual(result);
            result.push(new SelectItem('test2'));
            let testItems3 = parseSelectItems('["key1": "value1", "test2" : "test2"]');
            expect(testItems3).toEqual(result);
        });
        it('Mixed items should work.', function () {
            let result: SelectItem[] = [new SelectItem('key1', 'value1'), new SelectItem('test2')];
            let testItems1 = parseSelectItems('["key1": "value1", "test2"]');
            expect(testItems1).toEqual(result);
        });
    });
});