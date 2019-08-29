// Code generated by Prisma (prisma@1.23.0-test.3). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  menuItem: (where?: MenuItemWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  menuItem: (where: MenuItemWhereUniqueInput) => MenuItemNullablePromise;
  menuItems: (args?: {
    where?: MenuItemWhereInput;
    orderBy?: MenuItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<MenuItem>;
  menuItemsConnection: (args?: {
    where?: MenuItemWhereInput;
    orderBy?: MenuItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => MenuItemConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createMenuItem: (data: MenuItemCreateInput) => MenuItemPromise;
  updateMenuItem: (args: {
    data: MenuItemUpdateInput;
    where: MenuItemWhereUniqueInput;
  }) => MenuItemPromise;
  updateManyMenuItems: (args: {
    data: MenuItemUpdateManyMutationInput;
    where?: MenuItemWhereInput;
  }) => BatchPayloadPromise;
  upsertMenuItem: (args: {
    where: MenuItemWhereUniqueInput;
    create: MenuItemCreateInput;
    update: MenuItemUpdateInput;
  }) => MenuItemPromise;
  deleteMenuItem: (where: MenuItemWhereUniqueInput) => MenuItemPromise;
  deleteManyMenuItems: (where?: MenuItemWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  menuItem: (
    where?: MenuItemSubscriptionWhereInput
  ) => MenuItemSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type MenuItemOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "price_ASC"
  | "price_DESC"
  | "pictureURL_ASC"
  | "pictureURL_DESC"
  | "published_ASC"
  | "published_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "name_ASC"
  | "name_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserUpdateOneWithoutMenuItemsInput {
  create?: Maybe<UserCreateWithoutMenuItemsInput>;
  update?: Maybe<UserUpdateWithoutMenuItemsDataInput>;
  upsert?: Maybe<UserUpsertWithoutMenuItemsInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export type MenuItemWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface MenuItemUpdateWithWhereUniqueWithoutAuthorInput {
  where: MenuItemWhereUniqueInput;
  data: MenuItemUpdateWithoutAuthorDataInput;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  email?: Maybe<String>;
  password: String;
  name: String;
  menuItems?: Maybe<MenuItemCreateManyWithoutAuthorInput>;
}

export interface MenuItemUpdateManyWithoutAuthorInput {
  create?: Maybe<
    MenuItemCreateWithoutAuthorInput[] | MenuItemCreateWithoutAuthorInput
  >;
  delete?: Maybe<MenuItemWhereUniqueInput[] | MenuItemWhereUniqueInput>;
  connect?: Maybe<MenuItemWhereUniqueInput[] | MenuItemWhereUniqueInput>;
  set?: Maybe<MenuItemWhereUniqueInput[] | MenuItemWhereUniqueInput>;
  disconnect?: Maybe<MenuItemWhereUniqueInput[] | MenuItemWhereUniqueInput>;
  update?: Maybe<
    | MenuItemUpdateWithWhereUniqueWithoutAuthorInput[]
    | MenuItemUpdateWithWhereUniqueWithoutAuthorInput
  >;
  upsert?: Maybe<
    | MenuItemUpsertWithWhereUniqueWithoutAuthorInput[]
    | MenuItemUpsertWithWhereUniqueWithoutAuthorInput
  >;
  deleteMany?: Maybe<MenuItemScalarWhereInput[] | MenuItemScalarWhereInput>;
  updateMany?: Maybe<
    | MenuItemUpdateManyWithWhereNestedInput[]
    | MenuItemUpdateManyWithWhereNestedInput
  >;
}

export interface UserUpsertWithoutMenuItemsInput {
  update: UserUpdateWithoutMenuItemsDataInput;
  create: UserCreateWithoutMenuItemsInput;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  menuItems_every?: Maybe<MenuItemWhereInput>;
  menuItems_some?: Maybe<MenuItemWhereInput>;
  menuItems_none?: Maybe<MenuItemWhereInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface MenuItemSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<MenuItemWhereInput>;
  AND?: Maybe<
    MenuItemSubscriptionWhereInput[] | MenuItemSubscriptionWhereInput
  >;
  OR?: Maybe<MenuItemSubscriptionWhereInput[] | MenuItemSubscriptionWhereInput>;
  NOT?: Maybe<
    MenuItemSubscriptionWhereInput[] | MenuItemSubscriptionWhereInput
  >;
}

export interface MenuItemCreateInput {
  id?: Maybe<ID_Input>;
  title: String;
  price: Float;
  pictureURL: String;
  published?: Maybe<Boolean>;
  author?: Maybe<UserCreateOneWithoutMenuItemsInput>;
}

export interface MenuItemUpdateManyDataInput {
  title?: Maybe<String>;
  price?: Maybe<Float>;
  pictureURL?: Maybe<String>;
  published?: Maybe<Boolean>;
}

export interface UserCreateOneWithoutMenuItemsInput {
  create?: Maybe<UserCreateWithoutMenuItemsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface MenuItemScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  price?: Maybe<Float>;
  price_not?: Maybe<Float>;
  price_in?: Maybe<Float[] | Float>;
  price_not_in?: Maybe<Float[] | Float>;
  price_lt?: Maybe<Float>;
  price_lte?: Maybe<Float>;
  price_gt?: Maybe<Float>;
  price_gte?: Maybe<Float>;
  pictureURL?: Maybe<String>;
  pictureURL_not?: Maybe<String>;
  pictureURL_in?: Maybe<String[] | String>;
  pictureURL_not_in?: Maybe<String[] | String>;
  pictureURL_lt?: Maybe<String>;
  pictureURL_lte?: Maybe<String>;
  pictureURL_gt?: Maybe<String>;
  pictureURL_gte?: Maybe<String>;
  pictureURL_contains?: Maybe<String>;
  pictureURL_not_contains?: Maybe<String>;
  pictureURL_starts_with?: Maybe<String>;
  pictureURL_not_starts_with?: Maybe<String>;
  pictureURL_ends_with?: Maybe<String>;
  pictureURL_not_ends_with?: Maybe<String>;
  published?: Maybe<Boolean>;
  published_not?: Maybe<Boolean>;
  AND?: Maybe<MenuItemScalarWhereInput[] | MenuItemScalarWhereInput>;
  OR?: Maybe<MenuItemScalarWhereInput[] | MenuItemScalarWhereInput>;
  NOT?: Maybe<MenuItemScalarWhereInput[] | MenuItemScalarWhereInput>;
}

export interface UserCreateWithoutMenuItemsInput {
  id?: Maybe<ID_Input>;
  email?: Maybe<String>;
  password: String;
  name: String;
}

export interface MenuItemUpsertWithWhereUniqueWithoutAuthorInput {
  where: MenuItemWhereUniqueInput;
  update: MenuItemUpdateWithoutAuthorDataInput;
  create: MenuItemCreateWithoutAuthorInput;
}

export interface MenuItemUpdateInput {
  title?: Maybe<String>;
  price?: Maybe<Float>;
  pictureURL?: Maybe<String>;
  published?: Maybe<Boolean>;
  author?: Maybe<UserUpdateOneWithoutMenuItemsInput>;
}

export interface MenuItemWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  price?: Maybe<Float>;
  price_not?: Maybe<Float>;
  price_in?: Maybe<Float[] | Float>;
  price_not_in?: Maybe<Float[] | Float>;
  price_lt?: Maybe<Float>;
  price_lte?: Maybe<Float>;
  price_gt?: Maybe<Float>;
  price_gte?: Maybe<Float>;
  pictureURL?: Maybe<String>;
  pictureURL_not?: Maybe<String>;
  pictureURL_in?: Maybe<String[] | String>;
  pictureURL_not_in?: Maybe<String[] | String>;
  pictureURL_lt?: Maybe<String>;
  pictureURL_lte?: Maybe<String>;
  pictureURL_gt?: Maybe<String>;
  pictureURL_gte?: Maybe<String>;
  pictureURL_contains?: Maybe<String>;
  pictureURL_not_contains?: Maybe<String>;
  pictureURL_starts_with?: Maybe<String>;
  pictureURL_not_starts_with?: Maybe<String>;
  pictureURL_ends_with?: Maybe<String>;
  pictureURL_not_ends_with?: Maybe<String>;
  published?: Maybe<Boolean>;
  published_not?: Maybe<Boolean>;
  author?: Maybe<UserWhereInput>;
  AND?: Maybe<MenuItemWhereInput[] | MenuItemWhereInput>;
  OR?: Maybe<MenuItemWhereInput[] | MenuItemWhereInput>;
  NOT?: Maybe<MenuItemWhereInput[] | MenuItemWhereInput>;
}

export interface UserUpdateInput {
  email?: Maybe<String>;
  password?: Maybe<String>;
  name?: Maybe<String>;
  menuItems?: Maybe<MenuItemUpdateManyWithoutAuthorInput>;
}

export interface UserUpdateManyMutationInput {
  email?: Maybe<String>;
  password?: Maybe<String>;
  name?: Maybe<String>;
}

export interface MenuItemCreateManyWithoutAuthorInput {
  create?: Maybe<
    MenuItemCreateWithoutAuthorInput[] | MenuItemCreateWithoutAuthorInput
  >;
  connect?: Maybe<MenuItemWhereUniqueInput[] | MenuItemWhereUniqueInput>;
}

export interface MenuItemUpdateManyMutationInput {
  title?: Maybe<String>;
  price?: Maybe<Float>;
  pictureURL?: Maybe<String>;
  published?: Maybe<Boolean>;
}

export interface MenuItemCreateWithoutAuthorInput {
  id?: Maybe<ID_Input>;
  title: String;
  price: Float;
  pictureURL: String;
  published?: Maybe<Boolean>;
}

export interface UserUpdateWithoutMenuItemsDataInput {
  email?: Maybe<String>;
  password?: Maybe<String>;
  name?: Maybe<String>;
}

export interface MenuItemUpdateManyWithWhereNestedInput {
  where: MenuItemScalarWhereInput;
  data: MenuItemUpdateManyDataInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface MenuItemUpdateWithoutAuthorDataInput {
  title?: Maybe<String>;
  price?: Maybe<Float>;
  pictureURL?: Maybe<String>;
  published?: Maybe<Boolean>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValues {
  id: ID_Output;
  email?: String;
  password: String;
  name: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  name: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface MenuItemPreviousValues {
  id: ID_Output;
  title: String;
  price: Float;
  pictureURL: String;
  published: Boolean;
}

export interface MenuItemPreviousValuesPromise
  extends Promise<MenuItemPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  price: () => Promise<Float>;
  pictureURL: () => Promise<String>;
  published: () => Promise<Boolean>;
}

export interface MenuItemPreviousValuesSubscription
  extends Promise<AsyncIterator<MenuItemPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  price: () => Promise<AsyncIterator<Float>>;
  pictureURL: () => Promise<AsyncIterator<String>>;
  published: () => Promise<AsyncIterator<Boolean>>;
}

export interface MenuItem {
  id: ID_Output;
  title: String;
  price: Float;
  pictureURL: String;
  published: Boolean;
}

export interface MenuItemPromise extends Promise<MenuItem>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  price: () => Promise<Float>;
  pictureURL: () => Promise<String>;
  published: () => Promise<Boolean>;
  author: <T = UserPromise>() => T;
}

export interface MenuItemSubscription
  extends Promise<AsyncIterator<MenuItem>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  price: () => Promise<AsyncIterator<Float>>;
  pictureURL: () => Promise<AsyncIterator<String>>;
  published: () => Promise<AsyncIterator<Boolean>>;
  author: <T = UserSubscription>() => T;
}

export interface MenuItemNullablePromise
  extends Promise<MenuItem | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  price: () => Promise<Float>;
  pictureURL: () => Promise<String>;
  published: () => Promise<Boolean>;
  author: <T = UserPromise>() => T;
}

export interface AggregateMenuItem {
  count: Int;
}

export interface AggregateMenuItemPromise
  extends Promise<AggregateMenuItem>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateMenuItemSubscription
  extends Promise<AsyncIterator<AggregateMenuItem>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface MenuItemEdge {
  node: MenuItem;
  cursor: String;
}

export interface MenuItemEdgePromise
  extends Promise<MenuItemEdge>,
    Fragmentable {
  node: <T = MenuItemPromise>() => T;
  cursor: () => Promise<String>;
}

export interface MenuItemEdgeSubscription
  extends Promise<AsyncIterator<MenuItemEdge>>,
    Fragmentable {
  node: <T = MenuItemSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface MenuItemSubscriptionPayload {
  mutation: MutationType;
  node: MenuItem;
  updatedFields: String[];
  previousValues: MenuItemPreviousValues;
}

export interface MenuItemSubscriptionPayloadPromise
  extends Promise<MenuItemSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = MenuItemPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = MenuItemPreviousValuesPromise>() => T;
}

export interface MenuItemSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<MenuItemSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = MenuItemSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = MenuItemPreviousValuesSubscription>() => T;
}

export interface MenuItemConnection {
  pageInfo: PageInfo;
  edges: MenuItemEdge[];
}

export interface MenuItemConnectionPromise
  extends Promise<MenuItemConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<MenuItemEdge>>() => T;
  aggregate: <T = AggregateMenuItemPromise>() => T;
}

export interface MenuItemConnectionSubscription
  extends Promise<AsyncIterator<MenuItemConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<MenuItemEdgeSubscription>>>() => T;
  aggregate: <T = AggregateMenuItemSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface User {
  id: ID_Output;
  email?: String;
  password: String;
  name: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  name: () => Promise<String>;
  menuItems: <T = FragmentableArray<MenuItem>>(args?: {
    where?: MenuItemWhereInput;
    orderBy?: MenuItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  menuItems: <T = Promise<AsyncIterator<MenuItemSubscription>>>(args?: {
    where?: MenuItemWhereInput;
    orderBy?: MenuItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  name: () => Promise<String>;
  menuItems: <T = FragmentableArray<MenuItem>>(args?: {
    where?: MenuItemWhereInput;
    orderBy?: MenuItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "MenuItem",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
export const prisma = new Prisma();
