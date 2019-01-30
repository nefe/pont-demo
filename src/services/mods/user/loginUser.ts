/**
 * @desc Logs user into the system
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** The user name for login */
  username: string;
  /** The password for login in clear text */
  password: string;
}

export const init = '';

export async function request(params) {
  return pontFetch({
    url: '/user/login',
    params,
    method: 'get',
  });
}
