import SingleCustomer from "./SingleCustomer";
import { Customer } from "@/lib/models";

const CustomerList = async () => {
  const customers = await Customer.find();

  return (
    <div className="flex flex-col">
      {customers.map((customer) => (
        <SingleCustomer
          key={customer._id}
          customer={customer}
        />
      ))}
    </div>
  );
};

export default CustomerList;
