import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FarmList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Farms"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Farm Type" source="farmType" />
        <TextField label="Height Area" source="heightArea" />
        <TextField label="ID" source="id" />
        <TextField label="Length Area" source="lengthArea" />
        <TextField
          label="Sunlight Availability"
          source="sunlightAvailability"
        />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Width Area" source="widthArea" />
      </Datagrid>
    </List>
  );
};
