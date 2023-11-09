import { Container, Modal, Stepper } from '@mantine/core';
import { useState } from 'react';
import AddLocation from '../addLocation/AddLocation';
import { useAuth0 } from '@auth0/auth0-react';
import UploadImage from '../uploadImage/UploadImage';
import BasicDetails from '../basicDetails/BasicDetails';
import Facilities from '../Facilities/Facilities';

const AddPropertyModal = ({ opened, setOpened }) => {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const { user } = useAuth0();

  const [propertyDetails, setPropertyDetails] = useState({
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

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      closeOnClickOutside
      size={'90rem'}
    >
      <Container h={'28rem'} w={'100%'}>
        {screen.availWidth < '768' ? (
          <span>
            cannot access from mobile screen, please try access from tablet,
            laptop or more large screen
          </span>
        ) : (
          <Stepper
            active={active}
            onStepClick={setActive}
            breakpoint="sm"
            allowNextStepsSelect={false}
          >
            <Stepper.Step label="Location" description="Address">
              <AddLocation
                nextStep={nextStep}
                propertyDetails={propertyDetails}
                setPropertyDetails={setPropertyDetails}
              />
            </Stepper.Step>
            <Stepper.Step label="Upload" description="Property Image">
              <UploadImage
                propertyDetails={propertyDetails}
                setPropertyDetails={setPropertyDetails}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            </Stepper.Step>
            <Stepper.Step label="Details" description="Property Descriptions">
              <BasicDetails
                propertyDetails={propertyDetails}
                setPropertyDetails={setPropertyDetails}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            </Stepper.Step>
            <Stepper.Step label="Facilitties" description="Facility Details">
              <Facilities
                propertyDetails={propertyDetails}
                setPropertyDetails={setPropertyDetails}
                prevStep={prevStep}
                setOpened={setOpened}
                setActive={setActive}
              />
            </Stepper.Step>
            <Stepper.Completed>
              Completed, click back button to get to previous step
            </Stepper.Completed>
          </Stepper>
        )}
      </Container>
    </Modal>
  );
};

export default AddPropertyModal;
