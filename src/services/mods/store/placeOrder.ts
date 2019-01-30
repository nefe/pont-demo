/**
 * @desc Place an order for a pet
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = new defs.Order();

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/store/order',
    params: bodyParams,
    method: 'post',
  });
}
