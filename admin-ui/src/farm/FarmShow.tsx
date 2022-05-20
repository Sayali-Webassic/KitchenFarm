import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { FARM_TITLE_FIELD } from "./FarmTitle";

export const FarmShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="FarmActivity"
          target="FarmId"
          label="Farm Activities"
        >
          <Datagrid rowClick="show">
            <TextField label="Activity Date" source="activityDate" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <ReferenceField label="Farm" source="farm.id" reference="Farm">
              <TextField source={FARM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
