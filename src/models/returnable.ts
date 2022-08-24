/**
 * Typed return utility for functions
 * 
 * @template T The type of the return value
 * @template E The type of the error
 */
export class Returnable<T, E = string | null> {
  constructor(
    public readonly wasSuccessful: boolean,
    public readonly data: T,
    public readonly error: E,
  ) {}
}

/**
 * Alternative to `Promise<Returnable<T, E>>`.
 * 
 * @template T The type of the return value
 * @template E The type of the error
 * 
 * @see Returnable
 */
export type PromiseReturnable<T, E = string | null> = Promise<Returnable<T, E>>;
