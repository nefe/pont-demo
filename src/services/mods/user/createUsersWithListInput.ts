/**
 * @desc Creates list of users with given input array
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = undefined;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/user/createWithList',
    params: bodyParams,
    method: 'post',
  });
}
