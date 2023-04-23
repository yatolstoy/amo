import type { Customer, Transaction } from "@typings/entities.ts";
import type { Embedded, Links, Page } from "@typings/utility.ts";

export type ReponseGetCustomers = Page & Links & {
  _embedded: {
    customers: ReponseGetCustomerById[];
  };
};

export type ReponseGetCustomerById = Links & Customer & {
  _embedded: Pick<Embedded, "segments" | "tags" | "contacts" | "companies" | "catalog_elements">;
};

export type RequestAddCustomer =
  & Partial<
    Pick<
      Customer,
      | "name"
      | "next_price"
      | "next_date"
      | "responsible_user_id"
      | "status_id"
      | "periodicity"
      | "created_by"
      | "updated_by"
      | "created_at"
      | "updated_at"
      | "custom_fields_values"
    >
  >
  & Pick<Embedded, "tags" | "segments">
  & { request_id?: string };

export type ResponseAddCustomers = Links & {
  _embedded: {
    customers: ResponseUpdateCustomerById[];
  };
};

export type RequestUpdateCustomer = RequestAddCustomer & Partial<Pick<Customer, "id">>;
export type ResponseUpdateCustomers = Links & {
  _embedded: {
    customers: ResponseUpdateCustomerById[];
  };
};

export type RequestUpdateCustomerById = RequestAddCustomer;
export type ResponseUpdateCustomerById = Links & Pick<Customer, "id"> & { request_id?: string };

export type ReponseGetTransactions = Page & Links & {
  _embedded: {
    transactions: Links & Transaction & Pick<Embedded, "customers" | "catalog_elements">;
  };
};

export type RequestAddTransactionsToCustomer =
  & Partial<Pick<Transaction, "comment" | "price" | "completed_at" | "created_by">>
  & Pick<Embedded, "catalog_elements">
  & { request_id?: string };

export type ResponseAddTransactionsToCustomer = Links & {
  _embedded: {
    customers: (Pick<Customer, "id"> & { request_id?: string })[];
  };
};

export type RequestUpdateBonusPoints = {
  redeem?: number;
  earn?: number;
};
export type ResponseUpdateBonusPoints = {
  bonus_points: number;
};
