/**
 * @desc Delete purchase order by ID
 */

import * as defs from '../../baseClass';
import yourCustomFetch from '../../../yourCustomFetch';

export class Params {
  /** ID of the order that needs to be deleted */
  orderId: number;
}

export const init = undefined;

export async function request(params) {
  return yourCustomFetch({
    url: '/store/order/{orderId}',
    params,
    method: 'delete',
  });
}
