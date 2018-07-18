/**
 * @desc Find purchase order by ID
 */

import * as defs from '../../baseClass';
import yourCustomFetch from '../../../yourCustomFetch';

export class Params {
  /** ID of pet that needs to be fetched */
  orderId: number;
}

export const init = new defs.Order();

export async function request(params) {
  return yourCustomFetch({
    url: '/store/order/{orderId}',
    params,
    method: 'get',
  });
}
