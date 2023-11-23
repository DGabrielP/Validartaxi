'use strict'

let car = {
    brand: 'Chevrolet',
    model: 'Camaro',
    color: 'Negro',
    produtionyear: 2020,
    plate: 'ABJ007',
    registrationnumber: 'E0399239',
    Cuancaaireaprov: true

 };
  function validate(carro) {
    let currentyear = 2023;
    let age = currentyear - car.produtionyear;
    if ( age < 10 ) {
        return true;
    } else {
        return false;
    }
  }
  let result = validate(car);

  alert('el resultado de su vehiculo es ' + result);


  

