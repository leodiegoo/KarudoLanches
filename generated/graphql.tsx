import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};

export type AccountCreateManyUserInput = {
  access_token: InputMaybe<Scalars['String']>;
  expires_at: InputMaybe<Scalars['Int']>;
  id: InputMaybe<Scalars['String']>;
  id_token: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token: InputMaybe<Scalars['String']>;
  scope: InputMaybe<Scalars['String']>;
  session_state: InputMaybe<Scalars['String']>;
  token_type: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

export type AccountCreateManyUserInputEnvelope = {
  data: InputMaybe<Array<AccountCreateManyUserInput>>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};

export type AccountCreateNestedManyWithoutUserInput = {
  connect: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany: InputMaybe<AccountCreateManyUserInputEnvelope>;
};

export type AccountCreateOrConnectWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountCreateWithoutUserInput = {
  access_token: InputMaybe<Scalars['String']>;
  expires_at: InputMaybe<Scalars['Int']>;
  id: InputMaybe<Scalars['String']>;
  id_token: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token: InputMaybe<Scalars['String']>;
  scope: InputMaybe<Scalars['String']>;
  session_state: InputMaybe<Scalars['String']>;
  token_type: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

export type AccountListRelationFilter = {
  every: InputMaybe<AccountWhereInput>;
  none: InputMaybe<AccountWhereInput>;
  some: InputMaybe<AccountWhereInput>;
};

export type AccountProviderProviderAccountIdCompoundUniqueInput = {
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
};

export type AccountScalarWhereInput = {
  AND: InputMaybe<Array<AccountScalarWhereInput>>;
  NOT: InputMaybe<Array<AccountScalarWhereInput>>;
  OR: InputMaybe<Array<AccountScalarWhereInput>>;
  access_token: InputMaybe<StringNullableFilter>;
  expires_at: InputMaybe<IntNullableFilter>;
  id: InputMaybe<StringFilter>;
  id_token: InputMaybe<StringNullableFilter>;
  provider: InputMaybe<StringFilter>;
  providerAccountId: InputMaybe<StringFilter>;
  refresh_token: InputMaybe<StringNullableFilter>;
  scope: InputMaybe<StringNullableFilter>;
  session_state: InputMaybe<StringNullableFilter>;
  token_type: InputMaybe<StringNullableFilter>;
  type: InputMaybe<StringFilter>;
  userId: InputMaybe<StringFilter>;
};

export type AccountUpdateManyMutationInput = {
  access_token: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  id_token: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AccountUpdateManyWithWhereWithoutUserInput = {
  data: AccountUpdateManyMutationInput;
  where: AccountScalarWhereInput;
};

export type AccountUpdateManyWithoutUserInput = {
  connect: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany: InputMaybe<AccountCreateManyUserInputEnvelope>;
  delete: InputMaybe<Array<AccountWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<AccountScalarWhereInput>>;
  disconnect: InputMaybe<Array<AccountWhereUniqueInput>>;
  set: InputMaybe<Array<AccountWhereUniqueInput>>;
  update: InputMaybe<Array<AccountUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany: InputMaybe<Array<AccountUpdateManyWithWhereWithoutUserInput>>;
  upsert: InputMaybe<Array<AccountUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AccountUpdateWithWhereUniqueWithoutUserInput = {
  data: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountUpdateWithoutUserInput = {
  access_token: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  id_token: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AccountUpsertWithWhereUniqueWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  update: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountWhereInput = {
  AND: InputMaybe<Array<AccountWhereInput>>;
  NOT: InputMaybe<Array<AccountWhereInput>>;
  OR: InputMaybe<Array<AccountWhereInput>>;
  access_token: InputMaybe<StringNullableFilter>;
  expires_at: InputMaybe<IntNullableFilter>;
  id: InputMaybe<StringFilter>;
  id_token: InputMaybe<StringNullableFilter>;
  provider: InputMaybe<StringFilter>;
  providerAccountId: InputMaybe<StringFilter>;
  refresh_token: InputMaybe<StringNullableFilter>;
  scope: InputMaybe<StringNullableFilter>;
  session_state: InputMaybe<StringNullableFilter>;
  token_type: InputMaybe<StringNullableFilter>;
  type: InputMaybe<StringFilter>;
  user: InputMaybe<UserWhereInput>;
  userId: InputMaybe<StringFilter>;
};

export type AccountWhereUniqueInput = {
  id: InputMaybe<Scalars['String']>;
  provider_providerAccountId: InputMaybe<AccountProviderProviderAccountIdCompoundUniqueInput>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type DateTimeFieldUpdateOperationsInput = {
  set: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals: InputMaybe<Scalars['DateTime']>;
  gt: InputMaybe<Scalars['DateTime']>;
  gte: InputMaybe<Scalars['DateTime']>;
  in: InputMaybe<Array<Scalars['DateTime']>>;
  lt: InputMaybe<Scalars['DateTime']>;
  lte: InputMaybe<Scalars['DateTime']>;
  not: InputMaybe<NestedDateTimeFilter>;
  notIn: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals: InputMaybe<Scalars['DateTime']>;
  gt: InputMaybe<Scalars['DateTime']>;
  gte: InputMaybe<Scalars['DateTime']>;
  in: InputMaybe<Array<Scalars['DateTime']>>;
  lt: InputMaybe<Scalars['DateTime']>;
  lte: InputMaybe<Scalars['DateTime']>;
  not: InputMaybe<NestedDateTimeNullableFilter>;
  notIn: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumRoleFieldUpdateOperationsInput = {
  set: InputMaybe<Role>;
};

export type EnumRoleFilter = {
  equals: InputMaybe<Role>;
  in: InputMaybe<Array<Role>>;
  not: InputMaybe<NestedEnumRoleFilter>;
  notIn: InputMaybe<Array<Role>>;
};

export type IntNullableFilter = {
  equals: InputMaybe<Scalars['Int']>;
  gt: InputMaybe<Scalars['Int']>;
  gte: InputMaybe<Scalars['Int']>;
  in: InputMaybe<Array<Scalars['Int']>>;
  lt: InputMaybe<Scalars['Int']>;
  lte: InputMaybe<Scalars['Int']>;
  not: InputMaybe<NestedIntNullableFilter>;
  notIn: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneTenant: Tenant;
  deleteManyTenant: AffectedRowsOutput;
  deleteOneTenant: Maybe<Tenant>;
  updateManyTenant: AffectedRowsOutput;
  updateOneTenant: Maybe<Tenant>;
};


export type MutationCreateOneTenantArgs = {
  data: TenantCreateInput;
};


export type MutationDeleteManyTenantArgs = {
  where: InputMaybe<TenantWhereInput>;
};


export type MutationDeleteOneTenantArgs = {
  where: TenantWhereUniqueInput;
};


export type MutationUpdateManyTenantArgs = {
  data: TenantUpdateManyMutationInput;
  where: InputMaybe<TenantWhereInput>;
};


export type MutationUpdateOneTenantArgs = {
  data: TenantUpdateInput;
  where: TenantWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals: InputMaybe<Scalars['DateTime']>;
  gt: InputMaybe<Scalars['DateTime']>;
  gte: InputMaybe<Scalars['DateTime']>;
  in: InputMaybe<Array<Scalars['DateTime']>>;
  lt: InputMaybe<Scalars['DateTime']>;
  lte: InputMaybe<Scalars['DateTime']>;
  not: InputMaybe<NestedDateTimeFilter>;
  notIn: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals: InputMaybe<Scalars['DateTime']>;
  gt: InputMaybe<Scalars['DateTime']>;
  gte: InputMaybe<Scalars['DateTime']>;
  in: InputMaybe<Array<Scalars['DateTime']>>;
  lt: InputMaybe<Scalars['DateTime']>;
  lte: InputMaybe<Scalars['DateTime']>;
  not: InputMaybe<NestedDateTimeNullableFilter>;
  notIn: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumRoleFilter = {
  equals: InputMaybe<Role>;
  in: InputMaybe<Array<Role>>;
  not: InputMaybe<NestedEnumRoleFilter>;
  notIn: InputMaybe<Array<Role>>;
};

export type NestedIntNullableFilter = {
  equals: InputMaybe<Scalars['Int']>;
  gt: InputMaybe<Scalars['Int']>;
  gte: InputMaybe<Scalars['Int']>;
  in: InputMaybe<Array<Scalars['Int']>>;
  lt: InputMaybe<Scalars['Int']>;
  lte: InputMaybe<Scalars['Int']>;
  not: InputMaybe<NestedIntNullableFilter>;
  notIn: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains: InputMaybe<Scalars['String']>;
  endsWith: InputMaybe<Scalars['String']>;
  equals: InputMaybe<Scalars['String']>;
  gt: InputMaybe<Scalars['String']>;
  gte: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<Scalars['String']>>;
  lt: InputMaybe<Scalars['String']>;
  lte: InputMaybe<Scalars['String']>;
  not: InputMaybe<NestedStringFilter>;
  notIn: InputMaybe<Array<Scalars['String']>>;
  startsWith: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains: InputMaybe<Scalars['String']>;
  endsWith: InputMaybe<Scalars['String']>;
  equals: InputMaybe<Scalars['String']>;
  gt: InputMaybe<Scalars['String']>;
  gte: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<Scalars['String']>>;
  lt: InputMaybe<Scalars['String']>;
  lte: InputMaybe<Scalars['String']>;
  not: InputMaybe<NestedStringNullableFilter>;
  notIn: InputMaybe<Array<Scalars['String']>>;
  startsWith: InputMaybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set: InputMaybe<Scalars['DateTime']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement: InputMaybe<Scalars['Int']>;
  divide: InputMaybe<Scalars['Int']>;
  increment: InputMaybe<Scalars['Int']>;
  multiply: InputMaybe<Scalars['Int']>;
  set: InputMaybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  allTenants: Maybe<Array<Maybe<Tenant>>>;
  tenant: Maybe<Tenant>;
  tenants: Array<Tenant>;
};


export type QueryTenantArgs = {
  where: TenantWhereUniqueInput;
};


export type QueryTenantsArgs = {
  after: InputMaybe<TenantWhereUniqueInput>;
  before: InputMaybe<TenantWhereUniqueInput>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum Role {
  Admin = 'ADMIN',
  Deliveryman = 'DELIVERYMAN',
  Tenant = 'TENANT',
  User = 'USER'
}

export type SessionCreateManyUserInput = {
  expires: Scalars['DateTime'];
  id: InputMaybe<Scalars['String']>;
  sessionToken: Scalars['String'];
};

export type SessionCreateManyUserInputEnvelope = {
  data: InputMaybe<Array<SessionCreateManyUserInput>>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};

export type SessionCreateNestedManyWithoutUserInput = {
  connect: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany: InputMaybe<SessionCreateManyUserInputEnvelope>;
};

export type SessionCreateOrConnectWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionCreateWithoutUserInput = {
  expires: Scalars['DateTime'];
  id: InputMaybe<Scalars['String']>;
  sessionToken: Scalars['String'];
};

export type SessionListRelationFilter = {
  every: InputMaybe<SessionWhereInput>;
  none: InputMaybe<SessionWhereInput>;
  some: InputMaybe<SessionWhereInput>;
};

export type SessionScalarWhereInput = {
  AND: InputMaybe<Array<SessionScalarWhereInput>>;
  NOT: InputMaybe<Array<SessionScalarWhereInput>>;
  OR: InputMaybe<Array<SessionScalarWhereInput>>;
  expires: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  sessionToken: InputMaybe<StringFilter>;
  userId: InputMaybe<StringFilter>;
};

export type SessionUpdateManyMutationInput = {
  expires: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SessionUpdateManyWithWhereWithoutUserInput = {
  data: SessionUpdateManyMutationInput;
  where: SessionScalarWhereInput;
};

export type SessionUpdateManyWithoutUserInput = {
  connect: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany: InputMaybe<SessionCreateManyUserInputEnvelope>;
  delete: InputMaybe<Array<SessionWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<SessionScalarWhereInput>>;
  disconnect: InputMaybe<Array<SessionWhereUniqueInput>>;
  set: InputMaybe<Array<SessionWhereUniqueInput>>;
  update: InputMaybe<Array<SessionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany: InputMaybe<Array<SessionUpdateManyWithWhereWithoutUserInput>>;
  upsert: InputMaybe<Array<SessionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type SessionUpdateWithWhereUniqueWithoutUserInput = {
  data: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionUpdateWithoutUserInput = {
  expires: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SessionUpsertWithWhereUniqueWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  update: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionWhereInput = {
  AND: InputMaybe<Array<SessionWhereInput>>;
  NOT: InputMaybe<Array<SessionWhereInput>>;
  OR: InputMaybe<Array<SessionWhereInput>>;
  expires: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  sessionToken: InputMaybe<StringFilter>;
  user: InputMaybe<UserWhereInput>;
  userId: InputMaybe<StringFilter>;
};

export type SessionWhereUniqueInput = {
  id: InputMaybe<Scalars['String']>;
  sessionToken: InputMaybe<Scalars['String']>;
};

export type StringFieldUpdateOperationsInput = {
  set: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains: InputMaybe<Scalars['String']>;
  endsWith: InputMaybe<Scalars['String']>;
  equals: InputMaybe<Scalars['String']>;
  gt: InputMaybe<Scalars['String']>;
  gte: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<Scalars['String']>>;
  lt: InputMaybe<Scalars['String']>;
  lte: InputMaybe<Scalars['String']>;
  mode: InputMaybe<QueryMode>;
  not: InputMaybe<NestedStringFilter>;
  notIn: InputMaybe<Array<Scalars['String']>>;
  startsWith: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains: InputMaybe<Scalars['String']>;
  endsWith: InputMaybe<Scalars['String']>;
  equals: InputMaybe<Scalars['String']>;
  gt: InputMaybe<Scalars['String']>;
  gte: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<Scalars['String']>>;
  lt: InputMaybe<Scalars['String']>;
  lte: InputMaybe<Scalars['String']>;
  mode: InputMaybe<QueryMode>;
  not: InputMaybe<NestedStringNullableFilter>;
  notIn: InputMaybe<Array<Scalars['String']>>;
  startsWith: InputMaybe<Scalars['String']>;
};

export type Tenant = {
  __typename?: 'Tenant';
  User: Array<User>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type TenantUserArgs = {
  after: InputMaybe<UserWhereUniqueInput>;
  before: InputMaybe<UserWhereUniqueInput>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

export type TenantCreateInput = {
  User: InputMaybe<UserCreateNestedManyWithoutTenantInput>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type TenantUpdateInput = {
  User: InputMaybe<UserUpdateManyWithoutTenantInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description: InputMaybe<StringFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TenantUpdateManyMutationInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description: InputMaybe<StringFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TenantWhereInput = {
  AND: InputMaybe<Array<TenantWhereInput>>;
  NOT: InputMaybe<Array<TenantWhereInput>>;
  OR: InputMaybe<Array<TenantWhereInput>>;
  User: InputMaybe<UserListRelationFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  description: InputMaybe<StringFilter>;
  id: InputMaybe<StringFilter>;
  name: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
};

export type TenantWhereUniqueInput = {
  id: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  role: Role;
  tenant: Maybe<Tenant>;
  tenantId: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type UserCreateManyTenantInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  email: InputMaybe<Scalars['String']>;
  emailVerified: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  image: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  role: InputMaybe<Role>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateManyTenantInputEnvelope = {
  data: InputMaybe<Array<UserCreateManyTenantInput>>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};

export type UserCreateNestedManyWithoutTenantInput = {
  connect: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<UserCreateOrConnectWithoutTenantInput>>;
  create: InputMaybe<Array<UserCreateWithoutTenantInput>>;
  createMany: InputMaybe<UserCreateManyTenantInputEnvelope>;
};

export type UserCreateOrConnectWithoutTenantInput = {
  create: UserCreateWithoutTenantInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutTenantInput = {
  accounts: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  email: InputMaybe<Scalars['String']>;
  emailVerified: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  image: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  role: InputMaybe<Role>;
  sessions: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type UserListRelationFilter = {
  every: InputMaybe<UserWhereInput>;
  none: InputMaybe<UserWhereInput>;
  some: InputMaybe<UserWhereInput>;
};

export type UserScalarWhereInput = {
  AND: InputMaybe<Array<UserScalarWhereInput>>;
  NOT: InputMaybe<Array<UserScalarWhereInput>>;
  OR: InputMaybe<Array<UserScalarWhereInput>>;
  createdAt: InputMaybe<DateTimeFilter>;
  email: InputMaybe<StringNullableFilter>;
  emailVerified: InputMaybe<DateTimeNullableFilter>;
  id: InputMaybe<StringFilter>;
  image: InputMaybe<StringNullableFilter>;
  name: InputMaybe<StringNullableFilter>;
  role: InputMaybe<EnumRoleFilter>;
  tenantId: InputMaybe<StringNullableFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
};

export type UserUpdateManyMutationInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  image: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutTenantInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutTenantInput = {
  connect: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<UserCreateOrConnectWithoutTenantInput>>;
  create: InputMaybe<Array<UserCreateWithoutTenantInput>>;
  createMany: InputMaybe<UserCreateManyTenantInputEnvelope>;
  delete: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect: InputMaybe<Array<UserWhereUniqueInput>>;
  set: InputMaybe<Array<UserWhereUniqueInput>>;
  update: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutTenantInput>>;
  updateMany: InputMaybe<Array<UserUpdateManyWithWhereWithoutTenantInput>>;
  upsert: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutTenantInput>>;
};

export type UserUpdateWithWhereUniqueWithoutTenantInput = {
  data: UserUpdateWithoutTenantInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutTenantInput = {
  accounts: InputMaybe<AccountUpdateManyWithoutUserInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  image: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  sessions: InputMaybe<SessionUpdateManyWithoutUserInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithWhereUniqueWithoutTenantInput = {
  create: UserCreateWithoutTenantInput;
  update: UserUpdateWithoutTenantInput;
  where: UserWhereUniqueInput;
};

export type UserWhereInput = {
  AND: InputMaybe<Array<UserWhereInput>>;
  NOT: InputMaybe<Array<UserWhereInput>>;
  OR: InputMaybe<Array<UserWhereInput>>;
  accounts: InputMaybe<AccountListRelationFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  email: InputMaybe<StringNullableFilter>;
  emailVerified: InputMaybe<DateTimeNullableFilter>;
  id: InputMaybe<StringFilter>;
  image: InputMaybe<StringNullableFilter>;
  name: InputMaybe<StringNullableFilter>;
  role: InputMaybe<EnumRoleFilter>;
  sessions: InputMaybe<SessionListRelationFilter>;
  tenant: InputMaybe<TenantWhereInput>;
  tenantId: InputMaybe<StringNullableFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
};

export type AllTenantsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTenantsQuery = { __typename?: 'Query', allTenants: Array<{ __typename?: 'Tenant', id: string, name: string } | null> | null };


export const AllTenantsDocument = gql`
    query AllTenants {
  allTenants {
    id
    name
  }
}
    `;

export function useAllTenantsQuery(options?: Omit<Urql.UseQueryArgs<AllTenantsQueryVariables>, 'query'>) {
  return Urql.useQuery<AllTenantsQuery>({ query: AllTenantsDocument, ...options });
};