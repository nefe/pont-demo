/**
 * @desc Finds Pets by tags
 */

import * as defs from '../../baseClass';
import yourCustomFetch from '../../../yourCustomFetch';

export class Params {
  /** Tags to filter by */
  tags: any[];
}

export const init = [];

export async function request(params) {
  return yourCustomFetch({
    url: '/pet/findByTags',
    params,
    method: 'get',
  });
}
