/**
 * @desc Deletes a pet
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** api_key */
  api_key?: string;
  /** Pet id to delete */
  petId: number;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/pet/{petId}',
    params,
    method: 'delete',
  });
}
