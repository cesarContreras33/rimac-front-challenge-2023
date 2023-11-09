import { describe, test } from "vitest";
import AtomicResumenCard from "./AtomicResumenCard";
import { render } from "@testing-library/react";

describe('resumen card unit testing', () => {
  
  const dataclient = {
    name: 'Juan',
    lastname: 'Perez',
    email: 'juan@gmail.com',
    tipoDoc:'DNI',
    nroDoc:'10899944',
    nroCell:'985668733',
    birthDay:"02-04-1990",
    polPriv:false,
    polCom:false,
    plan:"plan en casa y clinica",
    price:"3000"
  }

  const {container} = render(<AtomicResumenCard dataclient={dataclient}/>)

  test('props cant be no empty', () => {
    expect(dataclient).toBeTruthy()
  });

  test('props can be object ', () => {
    expect(typeof dataclient).toBe('object')
  });

  test('props can be correct type ', () => {
    expect(typeof dataclient.name).toBe('string')
    expect(typeof dataclient.lastname).toBe('string')
    expect(typeof dataclient.email).toBe('string')
    expect(typeof dataclient.tipoDoc).toBe('string')
    expect(typeof dataclient.nroDoc).toBe('string')
    expect(typeof dataclient.nroCell).toBe('string')
    expect(typeof dataclient.birthDay).toBe('string')
    expect(typeof dataclient.polPriv).toBe('boolean')
    expect(typeof dataclient.polCom).toBe('boolean')
    expect(typeof dataclient.plan).toBe('string')
    expect(typeof dataclient.price).toBe('string')
  });

  test('should render component', () => {
    expect(container.innerHTML).toMatchSnapshot()
  });
});

