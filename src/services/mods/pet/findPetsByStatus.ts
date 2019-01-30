/**
 * @desc Finds Pets by status
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** Status values that need to be considered for filter */
  status: any[];
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/pet/findByStatus',
    params,
    method: 'get',
  });
}
