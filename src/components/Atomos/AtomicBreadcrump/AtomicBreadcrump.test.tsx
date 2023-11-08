import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { test } from "vitest";

import AtomicBreadcrump from "./AtomicBreadcrump";
import {OPTIONS_QUOTES} from '@constants/constants'


describe('atomicBreadcrump unit testing',() => {
  const router = OPTIONS_QUOTES
  const component = <AtomicBreadcrump routes={router} />
  
  test('should array on breadcrump component', () => {
    render(component)
    expect(typeof router).toBe('object');
  });

  test('should render breadcrump component', () => {
    const {container} = render(component)   
    expect(container.innerHTML).toMatchSnapshot();
  });

  test('should show texts label', () => {
    render(component)
    expect(screen.getByText('Planes y Cobertura')).toBeInTheDocument() 
    expect(screen.getByText('Resumen')).toBeInTheDocument() 
  });

  test('should be num value from router ', () => {
    render(component)
    expect(screen.getByText(router[0].num)).toBeInTheDocument() // aplicar lo de bing    
  });

  test('should be the object structur from router array', () => {
       OPTIONS_QUOTES.forEach((ele) => {
        expect(ele).toHaveProperty('label')
        expect(ele).toHaveProperty('num')
        expect(ele).toHaveProperty('status')
       }) 
  });
  test('should be a boolean value on all object in array ', () => {
    OPTIONS_QUOTES.forEach(ele => {
      expect(typeof ele.label).toBe('string')
      expect(typeof ele.num).toBe('string')
      expect(typeof ele.status).toBe('boolean')
    })
  });

})