import { useContext } from 'react';
import { Box, Button, Group, NumberInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMutation } from 'react-query';
import { createProperty } from '../../utils/api';
import { useAuth0 } from '@auth0/auth0-react';
import UserDetailsContext from '../../context/UserDetailsContext';
import useProperties from '../../hooks/useProperties';
import { toast } from 'react-toastify';

const Facilities = ({
  propertyDetails,
  setPropertyDetails,
  prevStep,
  setOpened,
  setActive,
}) => {
  const form = useForm({
    initialValues: {
      bedrooms: propertyDetails?.Facilities?.bedrooms,
      parkings: propertyDetails?.Facilities?.parkings,
      bathrooms: propertyDetails?.Facilities?.bathrooms,
    },
    validate: {
      bedrooms: (value) => (value < 1 ? 'must have atleast one room' : null),
      bathrooms: (value) =>
        value < 1 ? 'must have atleast one bathroom' : null,
    },
  });

  const { bedrooms, parkings, bathrooms } = form.values;

  const handleSubmit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setPropertyDetails((prev) => ({
        ...prev,
        facilities: { bedrooms, parkings, bathrooms },
      }));
      mutate();
    }
  };

  // Hit API for create residency
  const { user } = useAuth0();
  const {
    userDetails: { token },
  } = useContext(UserDetailsContext);
  const { refetch: refetchProperties } = useProperties();

  const { mutate, isLoading: submitting } = useMutation({
    mutationFn: () =>
      createProperty(
        {
          ...propertyDetails,
          facilities: { bedrooms, parkings, bathrooms },
          userEmail: user?.email,
        },
        token
      ),
    onError: ({ res }) =>
      toast.error(res?.data?.message, { position: 'bottom-right' }),
    onSuccess: () =>
      toast.success('Added Successfully', { position: 'bottom-right' }),
    onSettled: () => {
      setPropertyDetails({
        title: '',
        description: '',
        price: 0,
        country: '',
        city: '',
        address: '',
        image: null,
        facilities: {
          bedrooms: 0,
          parkings: 0,
          bathrooms: 0,
        },
        userEmail: user?.email,
      });
      setOpened(false);
      setActive(0);
      refetchProperties();
    },
  });

  return (
    <Box maw="30%" mx="auto" my="md">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <NumberInput
          withAsterisk
          label="No of bedrooms"
          min={0}
          {...form.getInputProps('bedrooms')}
          mb={'sm'}
        />
        <NumberInput
          label="No of Parkings"
          min={0}
          {...form.getInputProps('parkings')}
          mb={'sm'}
        />
        <NumberInput
          withAsterisk
          label="No of Bathrooms"
          min={0}
          {...form.getInputProps('bathrooms')}
          mb={'sm'}
        />
        <Group justify="center" mt={'xl'}>
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button type="submit" color="green" disabled={submitting}>
            {submitting ? 'Submitting' : 'Add Property'}
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default Facilities;
