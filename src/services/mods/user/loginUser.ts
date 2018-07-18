/**
 * @desc Logs user into the system
 */

import * as defs from '../../baseClass';
import yourCustomFetch from '../../../yourCustomFetch';

export class Params {
  /** The user name for login */
  username: string;
  /** The password for login in clear text */
  password: string;
}

export const init = '';

export async function request(params) {
  return yourCustomFetch({
    url: '/user/login',
    params,
    method: 'get',
  });
}
