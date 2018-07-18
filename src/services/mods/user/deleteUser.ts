/**
 * @desc Delete user
 */

import * as defs from '../../baseClass';
import yourCustomFetch from '../../../yourCustomFetch';

export class Params {
  /** The name that needs to be deleted */
  username: string;
}

export const init = undefined;

export async function request(params) {
  return yourCustomFetch({
    url: '/user/{username}',
    params,
    method: 'delete',
  });
}
