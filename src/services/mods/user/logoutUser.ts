/**
 * @desc Logs out current logged in user session
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/user/logout',
    params,
    method: 'get',
  });
}
