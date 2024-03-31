import { deleteCustomer } from "@/lib/actions";
import DeleteCustomerButton from "./DeleteCustomerButton";

const DeleteCustomerForm = ({ id }) => {
  return (
    <form action={deleteCustomer}>
      <input
        type="hidden"
        name="id"
        value={id}
      />
      <DeleteCustomerButton />
    </form>
  );
};

export default DeleteCustomerForm;
