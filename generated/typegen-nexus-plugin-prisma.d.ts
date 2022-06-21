import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
    first?: boolean
    last?: boolean
    before?: boolean
    after?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'DateTime'

// Prisma model type definitions
interface PrismaModels {
  Tenant: Prisma.Tenant
  Account: Prisma.Account
  Session: Prisma.Session
  User: Prisma.User
  VerificationToken: Prisma.VerificationToken
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    tenants: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'createdAt' | 'updatedAt' | 'User'
      ordering: 'id' | 'name' | 'description' | 'createdAt' | 'updatedAt' | 'User'
    }
    accounts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'userId' | 'type' | 'provider' | 'providerAccountId' | 'refresh_token' | 'access_token' | 'expires_at' | 'token_type' | 'scope' | 'id_token' | 'session_state' | 'user'
      ordering: 'id' | 'userId' | 'type' | 'provider' | 'providerAccountId' | 'refresh_token' | 'access_token' | 'expires_at' | 'token_type' | 'scope' | 'id_token' | 'session_state' | 'user'
    }
    sessions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'sessionToken' | 'userId' | 'expires' | 'user'
      ordering: 'id' | 'sessionToken' | 'userId' | 'expires' | 'user'
    }
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'email' | 'emailVerified' | 'image' | 'accounts' | 'sessions' | 'role' | 'tenant' | 'tenantId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'name' | 'email' | 'emailVerified' | 'image' | 'accounts' | 'sessions' | 'role' | 'tenant' | 'tenantId' | 'createdAt' | 'updatedAt'
    }
    verificationTokens: {
      filtering: 'AND' | 'OR' | 'NOT' | 'identifier' | 'token' | 'expires'
      ordering: 'identifier' | 'token' | 'expires'
    }
  },
  Tenant: {
    User: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'email' | 'emailVerified' | 'image' | 'accounts' | 'sessions' | 'role' | 'tenant' | 'tenantId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'name' | 'email' | 'emailVerified' | 'image' | 'accounts' | 'sessions' | 'role' | 'tenant' | 'tenantId' | 'createdAt' | 'updatedAt'
    }
  }
  Account: {

  }
  Session: {

  }
  User: {
    accounts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'userId' | 'type' | 'provider' | 'providerAccountId' | 'refresh_token' | 'access_token' | 'expires_at' | 'token_type' | 'scope' | 'id_token' | 'session_state' | 'user'
      ordering: 'id' | 'userId' | 'type' | 'provider' | 'providerAccountId' | 'refresh_token' | 'access_token' | 'expires_at' | 'token_type' | 'scope' | 'id_token' | 'session_state' | 'user'
    }
    sessions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'sessionToken' | 'userId' | 'expires' | 'user'
      ordering: 'id' | 'sessionToken' | 'userId' | 'expires' | 'user'
    }
  }
  VerificationToken: {

  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    tenant: 'Tenant'
    tenants: 'Tenant'
    account: 'Account'
    accounts: 'Account'
    session: 'Session'
    sessions: 'Session'
    user: 'User'
    users: 'User'
    verificationToken: 'VerificationToken'
    verificationTokens: 'VerificationToken'
  },
  Mutation: {
    createOneTenant: 'Tenant'
    updateOneTenant: 'Tenant'
    updateManyTenant: 'AffectedRowsOutput'
    deleteOneTenant: 'Tenant'
    deleteManyTenant: 'AffectedRowsOutput'
    upsertOneTenant: 'Tenant'
    createOneAccount: 'Account'
    updateOneAccount: 'Account'
    updateManyAccount: 'AffectedRowsOutput'
    deleteOneAccount: 'Account'
    deleteManyAccount: 'AffectedRowsOutput'
    upsertOneAccount: 'Account'
    createOneSession: 'Session'
    updateOneSession: 'Session'
    updateManySession: 'AffectedRowsOutput'
    deleteOneSession: 'Session'
    deleteManySession: 'AffectedRowsOutput'
    upsertOneSession: 'Session'
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'AffectedRowsOutput'
    deleteOneUser: 'User'
    deleteManyUser: 'AffectedRowsOutput'
    upsertOneUser: 'User'
    createOneVerificationToken: 'VerificationToken'
    updateOneVerificationToken: 'VerificationToken'
    updateManyVerificationToken: 'AffectedRowsOutput'
    deleteOneVerificationToken: 'VerificationToken'
    deleteManyVerificationToken: 'AffectedRowsOutput'
    upsertOneVerificationToken: 'VerificationToken'
  },
  Tenant: {
    id: 'String'
    name: 'String'
    description: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    User: 'User'
  }
  Account: {
    id: 'String'
    userId: 'String'
    type: 'String'
    provider: 'String'
    providerAccountId: 'String'
    refresh_token: 'String'
    access_token: 'String'
    expires_at: 'Int'
    token_type: 'String'
    scope: 'String'
    id_token: 'String'
    session_state: 'String'
    user: 'User'
  }
  Session: {
    id: 'String'
    sessionToken: 'String'
    userId: 'String'
    expires: 'DateTime'
    user: 'User'
  }
  User: {
    id: 'String'
    name: 'String'
    email: 'String'
    emailVerified: 'DateTime'
    image: 'String'
    accounts: 'Account'
    sessions: 'Session'
    role: 'Role'
    tenant: 'Tenant'
    tenantId: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  VerificationToken: {
    identifier: 'String'
    token: 'String'
    expires: 'DateTime'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  Tenant: Typegen.NexusPrismaFields<'Tenant'>
  Account: Typegen.NexusPrismaFields<'Account'>
  Session: Typegen.NexusPrismaFields<'Session'>
  User: Typegen.NexusPrismaFields<'User'>
  VerificationToken: Typegen.NexusPrismaFields<'VerificationToken'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  