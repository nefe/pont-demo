/**
 * @desc Creates list of users with given input array
 */

import * as defs from '../../baseClass';
import yourCustomFetch from '../../../yourCustomFetch';

export class Params {}

export const init = undefined;

export async function request(params, bodyParams) {
  return yourCustomFetch({
    url: '/user/createWithList',
    params: bodyParams,
    method: 'post',
  });
}
