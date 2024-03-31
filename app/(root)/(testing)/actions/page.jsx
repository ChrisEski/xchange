import CustomerList from "@/components/CustomerList";
import NewCustomerForm from "@/components/NewCustomerForm";

const Actions = async () => {
  return (
    <main className="border border-red-600 flex flex-col items-center gap-4 p-12">
      <h1>Customer List</h1>
      <NewCustomerForm />
      <CustomerList />
    </main>
  );
};

export default Actions;
