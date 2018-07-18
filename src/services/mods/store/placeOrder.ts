/**
 * @desc Place an order for a pet
 */

import * as defs from '../../baseClass';
import yourCustomFetch from '../../../yourCustomFetch';

export class Params {}

export const init = new defs.Order();

export async function request(params, bodyParams) {
  return yourCustomFetch({
    url: '/store/order',
    params: bodyParams,
    method: 'post',
  });
}
