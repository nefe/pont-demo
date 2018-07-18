declare namespace defs {
  export class ApiResponse {
    /** code */
    code?: number;

    /** message */
    message?: string;

    /** type */
    type?: string;
  }

  export class Category {
    /** id */
    id?: number;

    /** name */
    name?: string;
  }

  export class Order {
    /** complete */
    complete?: boolean;

    /** id */
    id?: number;

    /** petId */
    petId?: number;

    /** quantity */
    quantity?: number;

    /** shipDate */
    shipDate?: string;

    /** Order Status */
    status?: 'placed' | 'approved' | 'delivered';
  }

  export class Pet {
    /** category */
    category?: defs.Category;

    /** id */
    id?: number;

    /** name */
    name?: string;

    /** photoUrls */
    photoUrls?: any[];

    /** pet status in the store */
    status?: 'available' | 'pending' | 'sold';

    /** tags */
    tags?: defs.Tag[];
  }

  export class Tag {
    /** id */
    id?: number;

    /** name */
    name?: string;
  }

  export class User {
    /** email */
    email?: string;

    /** firstName */
    firstName?: string;

    /** id */
    id?: number;

    /** lastName */
    lastName?: string;

    /** password */
    password?: string;

    /** phone */
    phone?: string;

    /** User Status */
    userStatus?: number;

    /** username */
    username?: string;
  }
}

declare namespace API {
  /**
   * Everything about your Pets
   */
  export namespace pet {
    /**
     * Add a new pet to the store
     * /pet
     */
    export namespace addPet {
      export class Params {}

      export type Response = any;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.Pet,
      ): Promise<any>;
    }

    /**
     * Update an existing pet
     * /pet
     */
    export namespace updatePet {
      export class Params {}

      export type Response = any;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.Pet,
      ): Promise<any>;
    }

    /**
     * Finds Pets by status
     * /pet/findByStatus
     */
    export namespace findPetsByStatus {
      export class Params {
        /** Status values that need to be considered for filter */
        status: any[];
      }

      export type Response = defs.Pet[];
      export const init: Response;
      export function request(params: Params): Promise<defs.Pet[]>;
    }

    /**
     * Finds Pets by tags
     * /pet/findByTags
     */
    export namespace findPetsByTags {
      export class Params {
        /** Tags to filter by */
        tags: any[];
      }

      export type Response = defs.Pet[];
      export const init: Response;
      export function request(params: Params): Promise<defs.Pet[]>;
    }

    /**
     * Find pet by ID
     * /pet/{petId}
     */
    export namespace getPetById {
      export class Params {
        /** ID of pet to return */
        petId: number;
      }

      export type Response = defs.Pet;
      export const init: Response;
      export function request(params: Params): Promise<defs.Pet>;
    }

    /**
     * Updates a pet in the store with form data
     * /pet/{petId}
     */
    export namespace updatePetWithForm {
      export class Params {
        /** ID of pet that needs to be updated */
        petId: number;
        /** Updated name of the pet */
        name?: string;
        /** Updated status of the pet */
        status?: string;
      }

      export type Response = any;
      export const init: Response;
      export function request(params: Params): Promise<any>;
    }

    /**
     * Deletes a pet
     * /pet/{petId}
     */
    export namespace deletePet {
      export class Params {
        /** api_key */
        api_key?: string;
        /** Pet id to delete */
        petId: number;
      }

      export type Response = any;
      export const init: Response;
      export function request(params: Params): Promise<any>;
    }

    /**
     * uploads an image
     * /pet/{petId}/uploadImage
     */
    export namespace uploadFile {
      export class Params {
        /** ID of pet to update */
        petId: number;
        /** Additional data to pass to server */
        additionalMetadata?: string;
        /** file to upload */
        file?: File;
      }

      export type Response = defs.ApiResponse;
      export const init: Response;
      export function request(params: Params): Promise<defs.ApiResponse>;
    }
  }

  /**
   * Access to Petstore orders
   */
  export namespace store {
    /**
     * Returns pet inventories by status
     * /store/inventory
     */
    export namespace getInventory {
      export class Params {}

      export type Response = any;
      export const init: Response;
      export function request(params: Params): Promise<any>;
    }

    /**
     * Place an order for a pet
     * /store/order
     */
    export namespace placeOrder {
      export class Params {}

      export type Response = defs.Order;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.Order,
      ): Promise<defs.Order>;
    }

    /**
     * Find purchase order by ID
     * /store/order/{orderId}
     */
    export namespace getOrderById {
      export class Params {
        /** ID of pet that needs to be fetched */
        orderId: number;
      }

      export type Response = defs.Order;
      export const init: Response;
      export function request(params: Params): Promise<defs.Order>;
    }

    /**
     * Delete purchase order by ID
     * /store/order/{orderId}
     */
    export namespace deleteOrder {
      export class Params {
        /** ID of the order that needs to be deleted */
        orderId: number;
      }

      export type Response = any;
      export const init: Response;
      export function request(params: Params): Promise<any>;
    }
  }

  /**
   * Operations about user
   */
  export namespace user {
    /**
     * Create user
     * /user
     */
    export namespace createUser {
      export class Params {}

      export type Response = any;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.User,
      ): Promise<any>;
    }

    /**
     * Creates list of users with given input array
     * /user/createWithArray
     */
    export namespace createUsersWithArrayInput {
      export class Params {}

      export type Response = any;
      export const init: Response;
      export function request(params: Params, bodyParams: any): Promise<any>;
    }

    /**
     * Creates list of users with given input array
     * /user/createWithList
     */
    export namespace createUsersWithListInput {
      export class Params {}

      export type Response = any;
      export const init: Response;
      export function request(params: Params, bodyParams: any): Promise<any>;
    }

    /**
     * Logs user into the system
     * /user/login
     */
    export namespace loginUser {
      export class Params {
        /** The user name for login */
        username: string;
        /** The password for login in clear text */
        password: string;
      }

      export type Response = string;
      export const init: Response;
      export function request(params: Params): Promise<string>;
    }

    /**
     * Logs out current logged in user session
     * /user/logout
     */
    export namespace logoutUser {
      export class Params {}

      export type Response = any;
      export const init: Response;
      export function request(params: Params): Promise<any>;
    }

    /**
     * Get user by user name
     * /user/{username}
     */
    export namespace getUserByName {
      export class Params {
        /** The name that needs to be fetched. Use user1 for testing.  */
        username: string;
      }

      export type Response = defs.User;
      export const init: Response;
      export function request(params: Params): Promise<defs.User>;
    }

    /**
     * Updated user
     * /user/{username}
     */
    export namespace updateUser {
      export class Params {
        /** name that need to be updated */
        username: string;
      }

      export type Response = any;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.User,
      ): Promise<any>;
    }

    /**
     * Delete user
     * /user/{username}
     */
    export namespace deleteUser {
      export class Params {
        /** The name that needs to be deleted */
        username: string;
      }

      export type Response = any;
      export const init: Response;
      export function request(params: Params): Promise<any>;
    }
  }
}
