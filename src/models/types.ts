/**
 * Debounce options for the strategies that the debounce would use.
 *
 * @public
 */
export interface DebounceOptions {
  leading?: boolean;
  trailing?: boolean;
}

/**
 * The type returned by the {@link debounce} function. Basically is the function the
 * {@link debounce} receives but debounced and with a method `cancel()` to cancel pending timeouts.
 *
 * @param Params - The arguments type of the function.
 *
 * @public
 */
export interface DebouncedFunction<Params extends any[]> {
  (...args: Params): void;
  cancel(): void;
}
