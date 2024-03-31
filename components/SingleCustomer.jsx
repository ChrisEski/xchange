import DeleteCustomerForm from "./DeleteCustomerForm";
import { Button } from "./ui/button";

const SingleCustomer = ({ customer }) => {
  return (
    <div className="flex justify-between items-center w-[550px] p-2 border-b border-neutral-300">
      <span>{customer.name}</span>
      <span>{customer.email}</span>
      <div className="flex gap-3">
        <Button variant="outline">Edit</Button>
        <DeleteCustomerForm id={customer._id.toString()} />
      </div>
    </div>
  );
};

export default SingleCustomer;
