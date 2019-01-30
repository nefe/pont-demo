/**
 * @desc Find purchase order by ID
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** ID of pet that needs to be fetched */
  orderId: number;
}

export const init = new defs.Order();

export async function request(params) {
  return pontFetch({
    url: '/store/order/{orderId}',
    params,
    method: 'get',
  });
}
