/**
 * @desc uploads an image
 */

import * as defs from '../../baseClass';
import yourCustomFetch from '../../../yourCustomFetch';

export class Params {
  /** ID of pet to update */
  petId: number;
  /** Additional data to pass to server */
  additionalMetadata?: string;
  /** file to upload */
  file?: File;
}

export const init = new defs.ApiResponse();

export async function request(params) {
  return yourCustomFetch({
    url: '/pet/{petId}/uploadImage',
    params,
    method: 'post',
  });
}
