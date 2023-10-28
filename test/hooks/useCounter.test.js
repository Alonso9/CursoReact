import { useCounter } from '../../src/hooks/useCounter';
import { renderHook, act } from '@testing-library/react';

describe('Pruebas en el useCounter', () => {
  test('Test debe retornar valores por defecto', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, dencrement, increment, reset } = result.current;

    expect(counter).toBe(10);
    expect(dencrement).toEqual(expect.any(Function)); // Equal para evaluar solo si son objectos o funciones
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('Test debe retornar 100', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test('Test debe hacer el incremento', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, increment } = result.current;

    act(() => {
      increment(2);
    });

    expect(result.current.counter).toBe(102);
  });
});
