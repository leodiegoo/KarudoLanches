import { trpc } from "src/server/trpc";

function AllTenants() {
  const { data, isLoading } = trpc.useQuery(["example.allTenants"]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>AllTenants</h1>
      <p>There are {data?.length} tenant(s) in the database</p>
      <ul>
        {data?.map((tenant) => (
          <li key={tenant?.id}>{tenant?.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default AllTenants;
