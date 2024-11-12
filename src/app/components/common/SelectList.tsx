import { FilterProduct } from "@/app/DTOs/product.dto";
import { Select } from "@chakra-ui/react";

const SelectList = ({ listItems, setRatingMin }: any) => {
  return (
    <Select
      placeholder="Choisissez une option"
      variant="filled"
      size="md"
      cursor="pointer"
      width={"20em"}
      onChange={(ev: any) => {
        setRatingMin(ev.target.value);
      }}
    >
      {listItems?.map((item: FilterProduct, index: number) => (
        <option value={item.value} key={index}>
          {item.name}
        </option>
      ))}
    </Select>
  );
};

export default SelectList;
