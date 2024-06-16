const {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
})

test('156.5 yen should be 0.8694444444444445 pounds', function(){
    const pounds = fromYenToPound(156.5);
    expect(pounds).toBe(0.8694444444444445);
})

test("1.07 dollars should be 156.5 yens", function() {
    const yens = fromDollarToYen(1.07);
    expect(yens).toBe(156.5);
})

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(1);
    expect(dollars).toBe(1.07);
})
