it('Equality', () => {
  const a = 1;

  expect(a).equal(1);
  expect(a, 'Deveria ser 1').not.be.equal(2);
  expect(a).to.be.equal(1);
  expect(a).not.to.be.equal(2);
})

it('Truthy', () => {
  const a = true;
  const b = null;
  let c;

  expect(a).to.be.true;
  expect(true).to.be.true;
  expect(b).to.be.null;
  expect(c).to.be.undefined;
  expect(c).to.not.be.null;
})

it('Object Equality', () => {
  const obj = {
    a: 1,
    b: 2
  }

  expect(obj).equal(obj)
  expect(obj).equals(obj)
  expect(obj).eq(obj)
  //expect(obj).equal({a: 1, b:2}) // Dessa forma dará erro, pois a referência do objeto é diferente.
  expect(obj,'Pra dar certo').to.be.deep.equal({ a: 1, b: 2 })//Valida o conteúdo
  expect(obj, 'Pra dar certo 2').eql({ a: 1, b: 2 })//Valida o conteúdo
  expect(obj).include({a:1})//Valida se há uma propriedade no objeto
  expect(obj).to.have.property('b')//Valida se há essa propriedade
  expect(obj).to.have.property('b', 2)//Valida se há essa propriedade e se o valor é 2
  expect(obj).to.not.be.empty
  expect({}).to.be.empty
})

it('Arrays', () => {
  const arr = [1,2,3]

  expect(arr).to.have.members([1,2,3])
  expect(arr).to.include.members([1,3])
  expect(arr).not.to.be.empty
  expect([]).to.be.empty

})

it('Types', () => {
  const num = 1
  const str = 'Str'

  expect(num).to.be.a('number')
  expect(str).to.be.a('string')
  expect({}).to.be.an('object')
  expect([]).to.be.an('array')
})

it('String', () => {
  const str = 'String de teste'

  expect(str).to.be.equal('String de teste')
  expect(str).to.have.length(15)
  expect(str).to.contains('de')
  //comparação utilizando regex
  expect(str).to.match(/de/)//string em qualquer lugar
  expect(str).to.match(/^String/)//texto inicia com 'String'
  expect(str).to.match(/teste$/)//texto termina com 'teste'
  expect(str).to.match(/.{15}/)//qtd de qualquer caracteres

})


it('Numbers', () => {
  const number = 4
  const floatNumber = 5.23

  expect(number).to.be.equal(4)
  expect(number).to.be.above(3)//acima de
  expect(number).to.be.below(7)//abaixo de
  expect(floatNumber).to.be.equal(5.23)
  expect(floatNumber).to.be.closeTo(5.2, 0.05)//aproximadamente com margem de ... pra cima ou pra baixo
  
  

})

























