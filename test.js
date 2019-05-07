describe('Тестирование функции прибавления', function() {
    it('test value 1 and 2', function (){
        const act = calculate(1, 2);
        const exp = 3;
        assert.equal(act, exp);
    });
    
    
    
    const mock1 = [0, 5, 10, 100, 1000, 10500];
    const mock2 = [0, 7, 15, 111, 1350, 10500];
    
    for(let i =0; i < mock1.length - 1; i++){
        const value1 = mock1[i];
        const value2 = mock2[i];
        
        it(`test value ${value1} value2 ${value2}`, function(){
            
            const act = calculate(value1, value2);
            const exp = value1 + value2;
            
            assert.equal(act, exp);
        });
    }
    
    it('test value -1 and 5', function(){
        const act = calculate(-1 , 5);
        const exp = false;
            
            assert.isFalse(act);
    });
    
    it('test value 1 and 1000000', function(){
        const act = calculate(1 , 1000000);
        
            
            assert.isFalse(act);
    });
    
     it('test first arg NaN', () => {
        const act = calculate('test' , 10500);
        
            
            assert.isFalse(act);
    });
    
    it('test two arg NaN', () => {
        const act = calculate(5 , 'test');
        
            
            assert.isFalse(act);
    });
    
    it('test two arg NaN', () => {
        const act = calculate('test' , 'test');
        
            
            assert.isFalse(act);
    });
    
    it('test a i b arg undefind', () => {
        const act = calculate('test' , 'test');
        
            
            assert.isFalse(act);
    });
    
     it('test a+b > 999999', () => {
        const act = calculate(999999 , 1);
        
            assert.isFalse(act);
    });
});    
         
describe('Тестирование функции умножения', function() {
    it('test value 1 and 2', function (){
        const act = multiply(5, 2);
        const exp = 10;
        assert.equal(act, exp);
    });
    
    const mock1 = [0, 5, 10, 100, 1000,10500, 999999];
    const mock2 = [0, 7, 15, 111 , 123, 3, 1];
    
    for(let i =0; i < mock1.length - 1; i++){
        
        const value1 = mock1[i];
        const value2 = mock2[i];
        
        it(`test value ${value1} value2 ${value2}`, function(){
            const act = multiply(value1, value2);
            const exp = value1 * value2;
            assert.equal(act, exp);
        });
    }
    
   
    it("a больше нуля", function(){
        const act = multiply(-1, 5);
        assert.isFalse(act);
    });
    
    it("b меньше 1000000", function(){
        const act = multiply(1, 1000000);
        assert.isFalse(act);
    });
    it("b больше нуля", function(){
        const act = multiply(5, -4);
        assert.isFalse(act);
    });
    
    it("a меньше 1000000", function(){
        const act = multiply(1000000, 10000);
        assert.isFalse(act);
    });
    
    it('первое значение аргумента NaN', () => {
        const act = multiply('test', 5);
        assert.isFalse(act);
    });
    
    it('второе значение аргумента NaN', () => {
        const act = multiply(5, 'test');
        assert.isFalse(act);
    });
    
    it('первый и второй аргумент undefined', () => {
        const act = multiply();
        assert.isFalse(act);
    }); 
    
    it('если полученое значение больше 6 цифт', () => {
        const act = multiply(500000, 2);
        const exp = 1000000;
        assert.isFalse(act, exp);
    });
});

describe('Тестирование функции минус', () => {
    it('тест значение 1 и 2', function (){
        const act = minus(4, 3);
        const exp = 1;
        assert.equal(act, exp);
    });
    
    const arr1 = [-999999, -500000, -1000, 0, 4000, 100000, 999999];
    const arr2 = [-948475, -375456, -9999, 0, 3564, 145045, 888888];
    
    for(let i =0; i < arr1.length - 1; i++){
        
        const value1 = arr1[i];
        const value2 = arr2[i];
        
        it(`тест значение1 ${value1} значение2 ${value2}`, () =>{
            const act = minus(value1, value2);
            const exp = value1 - value2;
            assert.equal(act, exp);
        });
    }
    
    it('1-й аргумент больше -1000000', () => {
        const act = minus(-1000000 , 0);
        assert.isFalse(act);
    }); 
    
     it('2-й аргумент меньше 1000000', () => {
        const act = minus(564 , 1000000);
        assert.isFalse(act);
    });
    
    it('1-й аргумент больше -1000000', () => {
        const act = minus(1000000 , -100);
        assert.isFalse(act);
    }); 
    
     it('2-й аргумент меньше -1000000', () => {
        const act = minus(564 , -1000000);
        assert.isFalse(act);
    });
    
    it('1-й аргумент Nan', () => {
        const act = minus('test' , 546);
        assert.isFalse(act);
    });
    
    it('2-й аргумент Nan', () => {
        const act = minus(435, 'test');
        assert.isFalse(act);
    });
    
    it('1-й и 2-й аргумент Nan', () => {
        const act = minus('test', 'test');
        assert.isFalse(act);
    });
    
    it('1-й и 2-й аргумент undefind', () => {
        const act = minus();
        assert.isFalse(act);
    });
    
    it('Разница меньше -999999', () => {
        const act = minus(-990000, 10000);
        const exp = -1000000;
        assert.isFalse(act, exp);
    });
    
    it('Разница больше 999999', () => {
        const act = minus(990000, -10000);
        const exp = 1000000;
        assert.isFalse(act, exp);
    });
});

describe("Тестирование функции деления", () => {
    it('тест работы функции', () => {
        const act = division(5, 2);
        const exp = 2.5;
        assert.equal(act, exp);
    });
    
    const arr1 = [-999999, -500000, -1000, 0, 4000, 100000, 999999];
    const arr2 = [-948475, -375456, -9999, -3, 3564, 145045, 888888];
    
    for(let i = 0; i < arr1.length-1; i++){
        
        const value1 = arr1[i];
        const value2 = arr2[i];
        
        it(`тест значение1 ${value1} значение2 ${value2}`, () => {
            const act = division(value1, value2);
            const exp = value1 / value2;
            assert.equal(act, exp);
        });
    }
    
    it('1-й аргумент больше -1000000', () => {
        const act = division(-1000000 , 0);
        assert.isFalse(act);
    }); 
    
     it('2-й аргумент меньше 1000000', () => {
        const act = division(564 , 1000000);
        assert.isFalse(act);
    });
    
    it('1-й аргумент больше -1000000', () => {
        const act = division(1000000 , -100);
        assert.isFalse(act);
    }); 
    
     it('2-й аргумент меньше -1000000', () => {
        const act = division(564 , -1000000);
        assert.isFalse(act);
    });
    
    it('1-й аргумент Nan', () => {
        const act = division('test' , 546);
        assert.isFalse(act);
    });
    
    it('2-й аргумент Nan', () => {
        const act = division(435, 'test');
        assert.isFalse(act);
    });
    
    it('1-й и 2-й аргумент Nan', () => {
        const act = division('test', 'test');
        assert.isFalse(act);
    });
    
    it('1-й и 2-й аргумент undefind', () => {
        const act = division();
        assert.isFalse(act);
    });
    
    it('1-й и 2-й аргумент undefind', () => {
        const act = division();
        assert.isFalse(act);
    });
    
    it('2-й аргумент 0', () => {
        const act = division(55, 0);
        assert.isFalse(act);
    });
    
      it('Если деление меньше -999999', () => {
        const act = division(-0.1, 0.0000001);
        const exp = -1000000;
        assert.isFalse(act, exp);
    });
    
    it('Если деление больше 999999', () => {
        const act = division(0.1, 0.0000001);
        const exp = 1000000;
        assert.isFalse(act, exp);
    });
});
