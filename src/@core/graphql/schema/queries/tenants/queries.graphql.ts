import gql from "graphql-tag";

export const AllTenantsQuery = gql`
  query AllTenants {
    allTenants {
      id
      name
    }
  }
`;
