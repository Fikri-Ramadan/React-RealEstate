import {
  Box,
  Button,
  Group,
  NumberInput,
  TextInput,
  Textarea,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { validateString } from '../../utils/common';

const BasicDetails = ({
  propertyDetails,
  setPropertyDetails,
  nextStep,
  prevStep,
}) => {
  const form = useForm({
    initialValues: {
      title: propertyDetails?.title,
      description: propertyDetails?.description,
      price: propertyDetails?.price,
    },
    validate: {
      title: (value) => validateString(value),
      description: (value) => validateString(value),
      price: (value) =>
        value < 1000 ? 'value must be greater than $999' : null,
    },
  });

  const { title, description, price } = form.values;

  const handleSubmit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setPropertyDetails((prev) => ({ ...prev, title, description, price }));
      nextStep();
    }
  };

  return (
    <Box maw="50%" mx="auto" my="md">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <TextInput
          withAsterisk
          label="Title"
          placeholder="Property Name"
          {...form.getInputProps('title')}
          mb={'sm'}
        />
        <Textarea
          withAsterisk
          label="Description"
          placeholder="Description"
          {...form.getInputProps('description')}
          mb={'sm'}
        />
        <NumberInput
          withAsterisk
          label="Price"
          placeholder="<=$1000"
          {...form.getInputProps('price')}
          mb={'sm'}
        />
        <Group mt={'xl'} justify="center">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button type="sumbit">Next</Button>
        </Group>
      </form>
    </Box>
  );
};

export default BasicDetails;
