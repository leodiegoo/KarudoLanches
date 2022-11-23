import { trpc } from "@/utils/trpc";

function AllTenants() {
  const { isLoading, data } = trpc.tenant.allTentans.useQuery();

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
