
import { describe, test } from "vitest";
import CustomRouter from '@routers/CustomRouter'
import AtomicNavBtn from "./AtomicNavBtn";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


describe('AtomicNavBtn component unit testing',() => {
  test('should route to back', () => {
    render(
      <CustomRouter>
        <AtomicNavBtn/>
      </CustomRouter>
    )

    const navBtn = screen.getByText('Volver')
    expect(navBtn).toBeInTheDocument();
  })
})
  


