test('test common matcher', ()=>{
  expect(2 + 2).toBe(4)
  expect(2 + 2).not.toBe(5)
})

test('test to be true or false', function () {
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
})

test('test object', function () {
  expect({name: 'llr'}).toEqual({name: 'llr'})
})
