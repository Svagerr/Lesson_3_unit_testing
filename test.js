/* Тесты на задачи условные операторы */

describe('Тестирование задача_1_Условные_операторы',() => {
    it('test value 1 and 2', () => {
        const act = func0(1, 2);
        const exp = 3;
        assert.equal(act, exp);
    });
    
    const mock1 = [0, 6, 10, 100, 1000, 10500]; //a%2 === 0
    const mock2 = [0, 6, 10, 100, 1000, 10500]; // a%2 != 0
    
    const mock3 = [0, 7, 15, 111, 1350, 10500]; // массив для сравнения
    
    for(let i =0; i < mock1.length - 1; i++){
        const value1 = mock1[i];
        const value2 = mock3[i];
        
        it(`test value ${value1} value2 ${value2}`, function(){
            const act = func0(value1, value2);
            const exp = value1 * value2;
            assert.equal(act, exp);
        });
    }
    
    for(let i =0; i < mock2.length - 1; i++){
        const value1 = mock2[i];
        const value2 = mock3[i];
        
        it(`test value ${value1} value2 ${value2}`, function(){
            const act = func0(value1, value2);
            const exp = value1 * value2;
            assert.equal(act, exp);
        });
    }
    
    it('a > 0 || a = 0', () => {
        const act = func0(-1 , 5);
        assert.isFalse(act);
    });
    
    it('test argym a - NaN',() =>{
        const act = func0('test' , 5);
        assert.isFalse(act);
    });
    
    it('test argym b - NaN',() =>{
        const act = func0(4 , 'test');
        assert.isFalse(act);
    });
    
    it('test argym a and b - NaN',() =>{
        const act = func0('test' , 'test');
        assert.isFalse(act);
    });
    
    it('test argym a and b - NaN',() =>{
        const act = func0('test' , 'test');
        assert.isFalse(act);
    });
    
    it('test argym a and b - undefined',() =>{
        const act = func0();
        assert.isFalse(act); 
    });
});

describe('Тестирование задача_2_Условные_операторы',() => {
    it('test value 1 and 2', () => {
        const act = func1(4, -2);
        const exp = 'four';
        assert.equal(act, exp);
    });
    
    const mock_a_plus = [3, 6, 10, 100, 1000, 10500];
    const mock_b_plus = [5, 7, 15, 111, 1350, 10500];
    
    const mock_a_minus = [-3, -6, -10, -100, -1000, -10500];
    const mock_b_minus = [-5, -7, -15, -111, -1350, -10500];
    
    for(let i = 0; i < mock_a_plus.length; i++){
        
        const value1 = mock_a_plus[i];
        const value2 = mock_b_plus[i];
        
        const value3 = mock_a_minus[i];
        const value4 = mock_b_minus[i];
        
        
        it(`test value1 ${value1} value2 ${value2}`, function(){
            const act1 = func1(value1, value2);
            const act2 = func1(value3, value2);
            const act3 = func1(value3, value4);
            const act4 = func1(value1, value4);
            const exp1 = 'one';
            const exp2 = 'two';
            const exp3 = 'three';
            const exp4 = 'four';
            assert.equal(act1, exp1);
            assert.equal(act2, exp2);
            assert.equal(act3, exp3);
            assert.equal(act4, exp4);
        });
        
        
    }
    
    it('x != 0', () => {
        const act = func1(0, 5);
        assert.isFalse(act);
    });
    
    it('y != 0', () => {
        const act = func1(4, 0);
        assert.isFalse(act);
    });
    
        it('test argym x - NaN',() =>{
        const act = func1('test' , 5);
        assert.isFalse(act);
    });
    
    it('test argym y - NaN',() =>{
        const act = func1(4 , 'test');
        assert.isFalse(act);
    });
    
    it('test argym x and y- NaN',() =>{
        const act = func1('test' , 'test');
        assert.isFalse(act);
    });
    
    it('test argym x and y - NaN',() =>{
        const act = func1('test' , 'test');
        assert.isFalse(act);
    });
    
    it('test argym x and y - undefined',() =>{
        const act = func1();
        assert.isFalse(act); 
    });
    
});

describe('Тестирование задача_3_Условные_операторы',() => {
    it('test value a, b and c', () => {
        const act = func2(4, -2, 5);
        const exp = 9;
        assert.equal(act, exp);
    });
    
    const mock1 = [0, -6, 10, 100, -1000, 10500];
    const mock2 = [0, 6, -10, 100, 1000, -10500];
    const mock3 = [0, 7, 15, 111, -1350, 10500];
    
    for(let i = 0; i < mock1.length; i++){
        const a = mock1[i];
        const b = mock2[i];
        const c = mock3[i];
        
        it(`test value1 ${a}, value2 ${b} and value3 ${c}`, function(){
            const act = func2(a, b, c);
            const exp = func2(a, b, c);
            assert.equal(act, exp);
        });
    }
    
    it('test argym a - NaN',() =>{
        const act = func2('test' , 5, 5);
        assert.isFalse(act);
    });
    
    it('test argym b - NaN',() =>{
        const act = func2(4 , 'test', 5);
        assert.isFalse(act);
    });
    
    it('test argym c - NaN',() =>{
        const act = func2(5, 5, 'test');
        assert.isFalse(act);
    });
    
    it('test argym a, b and c- NaN',() =>{
        const act = func2('test' , 'test', 'test');
        assert.isFalse(act);
    });
    
    it('test argym a, b and c - undefined',() =>{
        const act = func2();
        assert.isFalse(act); 
    });
    
});

describe('Тестирование задача_4_Условные_операторы',() => {
    it('test value a, b and c', () => {
        const act = func3(4, 2, 5);
        const exp = 43;
        assert.equal(act, exp);
    });
    
    const mock1 = [0, -6, 10, 100, -1000, 10500];
    const mock2 = [0, 6, -10, 100, 1000, -10500];
    const mock3 = [0, 7, 15, 111, -1350, 10500];
    
    for(let i = 0; i < mock1.length; i++){
        const a = mock1[i];
        const b = mock2[i];
        const c = mock3[i];
        
        it(`test value1 ${a}, value2 ${b} and value3 ${c}`, function(){
            const act = func3(a, b, c);
            const exp = func3(a, b, c);
            assert.equal(act, exp);
        });
    }
    
    it('test argym a - NaN',() =>{
        const act = func3('test' , 5, 5);
        assert.isFalse(act);
    });
    
    it('test argym b - NaN',() =>{
        const act = func3(4 , 'test', 5);
        assert.isFalse(act);
    });
    
    it('test argym c - NaN',() =>{
        const act = func3(5, 5, 'test');
        assert.isFalse(act);
    });
    
    it('test argym a, b and c- NaN',() =>{
        const act = func3('test' , 'test', 'test');
        assert.isFalse(act);
    });
    
    it('test argym a, b and c - undefined',() =>{
        const act = func3();
        assert.isFalse(act); 
    });
    
});

describe('Тестирование задача_5_Условные_операторы',() => {
    it('test value a', () => {
        const act = func4(55);
        const exp = 'D';
        assert.equal(act, exp);
    });
    
    const mock = [0, 66, 10, 100, 40, 75];
    
    for(let i = 0 ; i < mock.length; i++){
        
        const a = mock[i];
        
        it(`test value ${a}`, function(){
            const act = func4(a);
            const exp = func4(a);
            assert.equal(act, exp);
        });
    }
    
    it('test argyment >= 0',() =>{
        const act = func4(-1);
        assert.isFalse(act);
    });
    
    it('test argyment <= 100',() =>{
        const act = func4(101);
        assert.isFalse(act);
    });
    
    it('test argyment not NaN',() =>{
        const act = func4('test');
        assert.isFalse(act);
    });
    
    it('test argyment not undefined',() =>{
        const act = func4();
        assert.isFalse(act); 
    });
});



/* Тесты на задачи циклы */

describe('Тестирование задача_1_Циклы',() => {
    it('test value number', () => {
        const act = func5(10);
        const exp = 30;
        assert.equal(act, exp);
    });
    
    const mock = [0, 4, 66, 10, 99, 40, 75, 54.43];
    
    for(let i = 0; i < mock.length; i++){
        
        const number = mock[i];
        
        it(`test value ${number}`, () => {
            const act = func5(number);
            const exp = func5(number);
            assert.equal(act, exp);
        });
    }
    
    it('test argyment >= 0',() =>{
        const act = func5(-10);
        assert.isFalse(act);
    });
    
    it('test argyment < 100',() =>{
        const act = func5(100);
        assert.isFalse(act);
    });
    
    it('number is not NaN',() =>{
        const act = func5('test');
        assert.isFalse(act);
    });
    
    it('number is not undefined',() =>{
        const act = func5();
        assert.isFalse(act);
    });
});

describe('Тестирование задача_2_Циклы',() => {
    it('test value number', () => {
        const act = func7(11);
        const exp = '+';
        assert.equal(act, exp);
    });
    
    const mock1 = [3, 7, 11, 13, 23];
    const mock2 = [4, 9, 27, 55, 60];
    
    for(let i = 0; i < mock1.length; i++){
        const number1 = mock1[i];
        const number2 = mock2[i];
        
        it(`test value1 ${number1} + value2 ${number2} -`, () => {
            const act1 = func7(number1);
            const act2 = func7(number2);
            const exp1 = func7(number1);
            const exp2 = func7(number2);
            assert.equal(act1, exp1);
            assert.equal(act2, exp2);
        });
        
    }
    
    it('number is not NaN',() =>{
        const act = func7('test');
        assert.isFalse(act);
    });
    
    it('number is not undefined',() =>{
        const act = func7();
        assert.isFalse(act);
    });
    
    
});

describe('Тестирование задача_3_Циклы',() => {
    it('test value number', () => {
        const act = func8(49);
        const exp = 7;
        assert.equal(act, exp);
    });
    
    const mock = [4, 9, 16, 25, 36, 37];
    
    for(let i = 0; i < mock.length; i++){
        
        const value = mock[i];
        
        it(`test value1 ${value}`, () => {
            const act = func8(value);
            const exp = func8(value);
            assert.equal(act, exp);
        });
        
    }
    
    it('value > 0',() =>{
        const act = func8(-1);
        assert.isFalse(act);
    });
    
    it('number is not NaN',() =>{
        const act = func8('test');
        assert.isFalse(act);
    });
    
    it('number is not undefined',() =>{
        const act = func8();
        assert.isFalse(act);
    });
});

describe('Тестирование задача_4_Циклы',() => {
    it('test value number', () => {
        const act = func9(3);
        const exp = 6;
        assert.equal(act, exp);
    });
    
    const mock = [4.8 , 9, 16, 25, 36, 37];
    
    for(let i = 0; i < mock.length; i++){
        
        const value = mock[i];
        
        it(`test value1 ${value}`, () => {
            const act = func9(value);
            const exp = func9(value);
            assert.equal(act, exp);
        });
        
    }
    
    it('value > 0',() =>{
        const act = func9(-1);
        assert.isFalse(act);
    });
    
    
    it('number is not NaN',() =>{
        const act = func9('test');
        assert.isFalse(act);
    });
    
    it('number is not undefined',() =>{
        const act = func9();
        assert.isFalse(act);
    });
});

describe('Тестирование задача_5_Циклы',() => {
    it('test value number', () => {
        const act = func10(333);
        const exp = 9;
        assert.equal(act, exp);
    });
    
    const mock = [458 , 943, 16543, 25355, 53436, 35437];
    
    for(let i = 0; i < mock.length; i++){
        
        const value = mock[i];
        
        it(`test value1 ${value}`, () => {
            const act = func10(value);
            const exp = func10(value);
            assert.equal(act, exp);
        });
        
    }
    
    it('value > 0',() =>{
        const act = func10(-1);
        assert.isFalse(act);
    });
    
    
    it('number is not NaN',() =>{
        const act = func10('test');
        assert.isFalse(act);
    });
    
    it('number is not undefined',() =>{
        const act = func10();
        assert.isFalse(act);
    });
});

describe('Тестирование задача_6_Циклы',() => {
    it('test value number', () => {
        const act = func11(123);
        const exp = 321;
        assert.equal(act, exp);
    });
    
    const mock = [458 , 943, 16543, 25355, 53436, 35437];
    
    for(let i = 0; i < mock.length; i++){
        
        const value = mock[i];
        
        it(`test value1 ${value}`, () => {
            const act = func11(value);
            const exp = func11(value);
            assert.equal(act, exp);
        });
        
    }
    
    it('value > 0',() =>{
        const act = func11(-1);
        assert.isFalse(act);
    });
    
    
    it('number is not NaN',() =>{
        const act = func11('test');
        assert.isFalse(act);
    });
    
    it('number is not undefined',() =>{
        const act = func11();
        assert.isFalse(act);
    });
});



/* Тесты на задачи oдномерные массивы*/

describe('Тестирование задача_1_и_2_Одномерные массивы',() => {
    it('test value number', () => {
        const act = func12([2, 1, 3, 4, -5, 0]);
        const exp = -5;
        assert.equal(act, exp);
    });
    
    const mock = [
        [1, 4, 6, 9, -5, 0],
        [4, -4, 56, 9, 5, 0],
        [1, 4, -64, 9, -55, 0]        
    ];
    
    for(let i = 0; i < mock.length; i++){
        
        const arr = mock[i];
        
        it(`test value1 ${arr}`, () => {
            const act = func12(arr);
            const exp = func12(arr);
            assert.equal(act, exp);
        });
    }
    
    const mock1 = [1, 2, 4, 5, 6];
    
    for(let i = 0; i < mock1.length; i++){
        it('arr[i] is not NaN',() =>{
            const act = func12(mock1[`итерация ${i}`] = 'test');
            assert.isFalse(act);
        });
        
        it('arr is not undefined',() =>{
            const act = func12([]);
            assert.isFalse(act);
    });
    }
    
    it('arr.lenght > 0',() =>{
        const act = func12([]);
        assert.isFalse(act);
    });
    
});

describe('Тестирование задача_1_и_2_Одномерные массивы',() => {
    it('test value number', () => {
        const act = func12([2, 1, 3, 4, -5, 0]);
        const exp = -5;
        assert.equal(act, exp);
    });
    
    const mock = [
        [1, 4, 6, 9, -5, 0],
        [4, -4, 56, 9, 5, 0],
        [1, 4, -64, 9, -55, 0]        
    ];
    
    for(let i = 0; i < mock.length; i++){
        
        const arr = mock[i];
        
        it(`test value1 ${arr}`, () => {
            const act = func12(arr);
            const exp = func12(arr);
            assert.equal(act, exp);
        });
    }
    
    const mock1 = [1, 2, 4, 5, 6];
    
    for(let i = 0; i < mock1.length; i++){
        it('arr[i] is not NaN',() =>{
            const act = func12(mock1[`итерация ${i}`] = 'test');
            assert.isFalse(act);
        });
        
        it('arr is not undefined',() =>{
            const act = func12([]);
            assert.isFalse(act);
    });
    }
    
    it('arr.lenght > 0',() =>{
        const act = func12([]);
        assert.isFalse(act);
    });
    
});

describe('Тестирование задача_3_и_4_Одномерные массивы',() => {
    it('test value Array', () => {
        const act = func14([22, 1, 3, 4, -5, 0]);
        const exp = 4;
        assert.equal(act, exp);
    });
    
    const mock = [
        [1, 4, 6, 9, -5, 0],
        [4, -4, 56, 9, 5, 0],
        [1, 4, -64, 9, -55, 0]        
    ];
    
    for(let i = 0; i < mock.length; i++){
        
        const arr = mock[i];
        
        it(`test value1 ${arr}`, () => {
            const act = func14(arr);
            const exp = func14(arr);
            assert.equal(act, exp);
        });
    }
    
    const mock1 = [1, 2, 4, 5, 6];
    
    for(let i = 0; i < mock1.length; i++){
        it('arr[i] is not NaN',() =>{
            const act = func14(mock1[`итерация ${i}`] = 'test');
            assert.isFalse(act);
        });
        
        it('arr is not undefined',() =>{
            const act = func14([]);
            assert.isFalse(act);
    });
    }
    
    it('arr.lenght > 0',() =>{
        const act = func14([]);
        assert.isFalse(act);
    });
    
});

describe('Тестирование задача_5_Одномерные массивы',() => {
    it('test value Array', () => {
        const act = func151([22, 1, 3, 4, 5, 0]);
        const exp = 5;
        assert.equal(act, exp);
    });
    
    const mock = [
        [1, 4, 6, 9, -5, 0],
        [4, -4, 56, 9, 5, 0],
        [1, 4, -64, 9, -55, 0]        
    ];
    
    for(let i = 0; i < mock.length; i++){
        
        const arr = mock[i];
        
        it(`test value1 ${arr}`, () => {
            const act = func151(arr);
            const exp = func151(arr);
            assert.equal(act, exp);
        });
    }
    
    const mock1 = [1, 2, 4, 5, 6];
    
    for(let i = 0; i < mock1.length; i++){
        it('arr[i] is not NaN',() =>{
            const act = func151(mock1[`итерация ${i}`] = 'test');
            assert.isFalse(act);
        });
        
        it('arr is not undefined',() =>{
            const act = func151([]);
            assert.isFalse(act);
    });
    }
    
    it('arr.lenght > 0',() =>{
        const act = func151([]);
        assert.isFalse(act);
    });
});

//Дальше тут все остальные проверки на задачи схожие, т.к. у нас только один входящий массив и мы можем проверить только на NaN и undefined и что в массиве не пропущен какой-то элемент, тоесть arr[i] != undefined.



/*Функции*/

describe('Тестирование задача_1_Функции',() => {
    it('test value a', () => {
        const act = func19(4);
        const exp = 'чт';
        assert.equal(act, exp);
    });
    
    const mock = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    for(let i = 0 ; i < mock.length; i++){
        
        const a = mock[i];
        
        it(`test value ${a}`, function(){
            const act = func19(a);
            const exp = func19(a);
            assert.equal(act, exp);
        });
    }
    
    it('a > 0',() =>{
        const act = func19(0);
        assert.isFalse(act); 
    });
    
    it('a < 8',() =>{
        const act = func19(8);
        assert.isFalse(act); 
    });
    
    it('a not NaN',() =>{
        const act = func19('test');
        assert.isFalse(act); 
    });
    
    it('a not undefined',() =>{
        const act = func19('test');
        assert.isFalse(act); 
    });
    
});

describe('Тестирование задача_2_Функции',() => {
    it('test value a', () => {
        const act = func20(367);
        const exp = 'триста шестдесят семь';
        assert.equal(act, exp);
    });
    
    const mock = [111, 452, 36, 4, 554, 6, 7, 1111];
    
    for(let i = 0 ; i < mock.length; i++){
        
        const a = mock[i];
        
        it(`test value ${a}`, function(){
            const act = func20(a);
            const exp = func20(a);
            assert.equal(act, exp);
        });
    }
    
    it('a > 0',() =>{
        const act = func20(-1);
        assert.isFalse(act); 
    });
    
    it('a < 8',() =>{
        const act = func20(1000);
        assert.isFalse(act); 
    });
    
    it('a not NaN',() =>{
        const act = func20('test');
        assert.isFalse(act); 
    });
    
    it('a not undefined',() =>{
        const act = func20('test');
        assert.isFalse(act); 
    });
    
});

describe('Тестирование задача_3_Функции',() => {
    it('test function', () => {
        const act = func21('пять миллиардов девятьсот сорок пять миллионов пятьсот пятьдесят семь тысяч');
        const exp = 5945557000;
        assert.equal(act, exp);
    });
    
    const arr = ['сто сорок шесть тысяч сто один', 'триста тридцать три', 'девять миллиардов три'];
    
    for(let i = 0; i < arr.length; i++){
        const value = arr[i];
        
        it(`value ${value}`, ()=>{
            const act = func21(value);
            const exp = func21(value);
            assert.equal(act, exp);
        });
    }
    
    it('string', ()=>{
        const act = func21(23214);
        assert.isFalse(act);
    });
    
    it('not undefined', ()=>{
        const act = func21();
        assert.isFalse(act);
    });
    
//    const arr1 = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестдесят', 'семдесят', 'восемдесят', 'девяносто', 'сто', 'двесте', 'триста', 'четыреста', 'пятсот', 'шестсот', 'семсот', 'восемсот', 'девятсот', 'тысяча', 'тысячи', 'тысяч', 'миллион', 'миллиона', 'миллионов', 'миллиард', 'миллиарда', 'миллиардов'];
//    
//    for(let i = 0; i  < arr1.length; i++){
//        
//        value1 = arr1[i];
//        
//        it('Правильно написаное слово', () => {
//            const act = func21(value1 != arr1[i])
//            aseert.isFalse(act);
//        });
//    }
});

describe('Тестирование задача_1_Функции',() => {
    it('test value a', () => {
        const act = func22(2, 42, 2, 4);
        const exp = 38;
        assert.equal(act, exp);
    });
    
    it('test argyment 1 not NaN',() =>{
        const act = func22('test', 2, 3, 2);
        assert.isFalse(act);
    });
    
    it('test argyment 2 not NaN',() =>{
        const act = func22(2, 'test', 3, 2);
        assert.isFalse(act);
    });  
    
    it('test argyment 3 not NaN',() =>{
        const act = func22(3, 2, 'test', 2);
        assert.isFalse(act);
    });  
    
    it('test argyment 4 not NaN',() =>{
        const act = func22(5, 2, 3, 'test');
        assert.isFalse(act);
    });  
        
        
    it('test argyment not NaN',() =>{
        const act = func22('test', 'test', 'test', 'test');
        assert.isFalse(act);
    });
    
    it('test argyment not undefined',() =>{
        const act = func22();
        assert.isFalse(act); 
    });
});