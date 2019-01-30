/**
 * @desc Delete purchase order by ID
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** ID of the order that needs to be deleted */
  orderId: number;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/store/order/{orderId}',
    params,
    method: 'delete',
  });
}
