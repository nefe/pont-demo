/**
 * @desc Updated user
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** name that need to be updated */
  username: string;
}

export const init = undefined;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/user/{username}',
    params: bodyParams,
    method: 'put',
  });
}
