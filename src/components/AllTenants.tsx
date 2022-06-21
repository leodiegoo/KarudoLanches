import { useAllTenantsQuery } from "../../generated/graphql";

function AllTenants() {
  const [result] = useAllTenantsQuery();
  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message} </p>;

  return (
    <div>
      <h1>AllTenants</h1>
      <p>There are {data?.allTenants?.length} tenant(s) in the database</p>
      <ul>
        {data?.allTenants?.map((tenant) => (
          <li key={tenant?.id}>{tenant?.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default AllTenants;
