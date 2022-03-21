export interface NextObserver<T> {
  next: (value: T) => void | Promise<void>
  error?: (err: any) => void | Promise<void>
  complete?: () => void | Promise<void>
}

export interface ErrorObserver<T> {
  next?: (value: T) => void | Promise<void>
  error: (err: any) => void | Promise<void>
  complete?: () => void | Promise<void>
}

export interface CompletionObserver<T> {
  next?: (value: T) => void | Promise<void>
  error?: (err: any) => void | Promise<void>
  complete: () => void | Promise<void>
}

export type Observer<T> = NextObserver<T> | ErrorObserver<T> | CompletionObserver<T>
