/**
 * @desc Returns pet inventories by status
 */

import * as defs from '../../baseClass';
import yourCustomFetch from '../../../yourCustomFetch';

export class Params {}

export const init = undefined;

export async function request(params) {
  return yourCustomFetch({
    url: '/store/inventory',
    params,
    method: 'get',
  });
}
