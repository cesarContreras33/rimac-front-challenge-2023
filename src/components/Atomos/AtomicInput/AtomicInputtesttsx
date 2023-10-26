import {ChangeEvent} from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AtomicInput from './AtomicInput';

test('renders AtomicInput component', () => {
  render(<AtomicInput label="Test Label" value="" onChange={() => {}}/>);

  const labelElement = screen.getByText('Test Label');
  const inputElement = screen.getByLabelText('Test Label');

  expect(labelElement).toBeTruthy();
  expect(inputElement).toBeTruthy()
});

test('handles input change', () => {
  let inputValue = '';
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    inputValue = e.target.value
  }

  render(<AtomicInput label="Test Label" value={inputValue} onChange={handleChange}/>);

  const inputElement = screen.getByLabelText('Test Label');

  fireEvent.change(inputElement, { target: { value: 'New Value' } });

  expect(inputValue).toBe('New Value');
});

test('handles input focus and blur', () => {
  let focused = false;

  const handleFocus = () => {
    focused = true;
  };

  const handleBlur = () => {
    focused = false;
  };

  render(
    <AtomicInput
      label="Test Label"
      value=""
      onChange={() => {}}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );

  const inputElement = screen.getByLabelText('Test Label');

  fireEvent.focus(inputElement);
  expect(focused).toBe(true);

  fireEvent.blur(inputElement);
  expect(focused).toBe(false);
});
