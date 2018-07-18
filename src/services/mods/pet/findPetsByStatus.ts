/**
 * @desc Finds Pets by status
 */

import * as defs from '../../baseClass';
import yourCustomFetch from '../../../yourCustomFetch';

export class Params {
  /** Status values that need to be considered for filter */
  status: any[];
}

export const init = [];

export async function request(params) {
  return yourCustomFetch({
    url: '/pet/findByStatus',
    params,
    method: 'get',
  });
}
