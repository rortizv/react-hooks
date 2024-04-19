import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';


describe('userCounter Test', () => {

    test('Must return default values', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, increment, decrement, reset } = result.current;

        expect(counter).toBe(0);
        expect(decrement).toBeInstanceOf(Function);
        expect(increment).toBeInstanceOf(Function);
        expect(reset).toBeInstanceOf(Function);
    });

    test('Must have the counter in 100', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;

        expect(counter).toBe(100);
    });

    test('Must increment the counter by 1', () => {
        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;

        act(() => {
            increment();
        });

        expect(result.current.counter).toBe(101);
    });

    test('Must decrement the counter by 1', () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;

        act(() => {
            decrement();
        });

        expect(result.current.counter).toBe(99);
    });

    test('Must reset the counter', () => {
        const { result } = renderHook(() => useCounter(100));
        const { increment, reset } = result.current;

        act(() => {
            increment();
            reset();
        });

        expect(result.current.counter).toBe(100);
    });

});