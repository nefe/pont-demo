/**
 * @desc Finds Pets by tags
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** Tags to filter by */
  tags: any[];
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/pet/findByTags',
    params,
    method: 'get',
  });
}
