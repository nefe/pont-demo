/**
 * @desc Delete user
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** The name that needs to be deleted */
  username: string;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/user/{username}',
    params,
    method: 'delete',
  });
}
