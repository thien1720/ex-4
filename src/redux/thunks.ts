// import { Action } from 'redux';
// import { ThunkAction } from 'redux-thunk';
// import { RootState } from './';

// export function fetchThunk(
//   url: string,
//   method: 'get' | 'post' | 'delete' | 'put' = 'get',
//   body?: object | FormData,
//   auth = true,
//   contentType?: string,
// ): ThunkAction<Promise<any>, RootState, null, Action<string>> {
//   return async (dispatch, getState) => {
//     const res = await fetch(url, {
//       credentials: 'include',
//       method,
//       body: typeof body === 'object' ? JSON.stringify(body) : body,
      
//     });

//     const json = await res.json();

//     // if (res.status === RESPONSE_STATUS_UNAUTHORIZED) {
//     //   // dispatch logout, remove access token here.
//     // }

//     return json;
//     // throw new Error('Error');
//   };
// }
export {}