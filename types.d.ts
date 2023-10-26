import { AsyncThunkAction } from '@reduxjs/toolkit'

type FetchDataClientAction = AsyncThunkAction<any, void, AsyncThunkConfig>

declare module 'redux' {
  interface Dispatch<A extends FetchDataClientAction> {
    (action: A): A
  }
}
