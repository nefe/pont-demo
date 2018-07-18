/**
 * @desc Updated user
 */

import * as defs from '../../baseClass';
import yourCustomFetch from '../../../yourCustomFetch';

export class Params {
  /** name that need to be updated */
  username: string;
}

export const init = undefined;

export async function request(params, bodyParams) {
  return yourCustomFetch({
    url: '/user/{username}',
    params: bodyParams,
    method: 'put',
  });
}
