/**
 * @desc Logs out current logged in user session
 */

import * as defs from '../../baseClass';
import yourCustomFetch from '../../../yourCustomFetch';

export class Params {}

export const init = undefined;

export async function request(params) {
  return yourCustomFetch({
    url: '/user/logout',
    params,
    method: 'get',
  });
}
