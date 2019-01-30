/**
 * @desc Get user by user name
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** The name that needs to be fetched. Use user1 for testing.  */
  username: string;
}

export const init = new defs.User();

export async function request(params) {
  return pontFetch({
    url: '/user/{username}',
    params,
    method: 'get',
  });
}
