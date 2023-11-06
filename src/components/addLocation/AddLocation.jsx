import { useForm } from '@mantine/form';
import { Button, Group, Select, TextInput } from '@mantine/core';
import useCountries from '../../hooks/useCountries';
import { validateString } from '../../utils/common';
import Map from '../map/Map';

const AddLocation = ({ propertyDetails, setPropertyDetails, nextStep }) => {
  const { getAll } = useCountries();

  const form = useForm({
    initialValues: {
      country: propertyDetails?.country,
      city: propertyDetails?.city,
      address: propertyDetails?.address,
    },

    validate: {
      country: (value) => validateString(value),
      city: (value) => validateString(value),
      address: (value) => validateString(value),
    },
  });

  const { country, city, address } = form.values;

  const handleSumbit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setPropertyDetails((prev) => ({ ...prev, country, city, address }));
      nextStep();
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSumbit();
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '3rem',
        }}
      >
        {/* left side */}
        <div
          style={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <Select
            w={'100%'}
            withAsterisk
            label="country"
            searchable
            clearable
            data={getAll()}
            {...form.getInputProps('country', { type: 'input' })}
          />

          <TextInput
            w={'100%'}
            withAsterisk
            label="city"
            {...form.getInputProps('city', { type: 'input' })}
          />

          <TextInput
            w={'100%'}
            withAsterisk
            label="address"
            {...form.getInputProps('address', { type: 'input' })}
          />
        </div>

        {/* right side */}
        <div
          style={{
            flex: '1',
          }}
        >
          <Map address={address} city={city} country={country} />
        </div>
      </div>

      <Group justify="center" mt={'xl'}>
        <Button type="sumbit">Next Step</Button>
      </Group>
    </form>
  );
};

export default AddLocation;
