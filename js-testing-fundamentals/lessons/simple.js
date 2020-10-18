const {sum, subtract} = require('../math')


test('sum adds numbers', ()=>{
  const result = sum(3, 7)
  const expected = 10
  expect(result).toBe(expected);
});

test('subtract subtract numbers', ()=>{
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);    
});

// test('sumAsync adds numbers', async () => {
//   const result = await sum(3, 7)
//   const expected = 10
//   expect(result).toBe(expected);
// });

// test('subtractAsync subtract numbers', async () => {
//   const result = await subtract(7, 3);
//   const expected = 4;
//   expect(result).toBe(expected);    
// });

async function test(title, callback) {
  try{
    await callback();
    console.log(`✔ ${title}`);
  }catch(error){
    console.log(`✖ ${title}`);
    console.error(error);
  }
}


function expect(actual) {
  return {
    toBe(expected){
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}