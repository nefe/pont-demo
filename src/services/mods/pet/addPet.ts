/**
 * @desc Add a new pet to the store
 */

import * as defs from '../../baseClass';
import yourCustomFetch from '../../../yourCustomFetch';

export class Params {}

export const init = undefined;

export async function request(params, bodyParams) {
  return yourCustomFetch({
    url: '/pet',
    params: bodyParams,
    method: 'post',
  });
}
