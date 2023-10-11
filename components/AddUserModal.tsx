import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Input, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react'
import React, { FC, useCallback } from 'react'
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { UserInput } from '../interfaces/user'

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    type: Yup.string().required('Type is required'),
    age: Yup.number().required('Age is required').positive('Age must be a positive number'),
    location: Yup.string().required('Location is required'),
  });

interface AddUserModalProps {
    isOpen: boolean
    onClose: () => void
    onSubmit: (userInput: UserInput) => void // eslint-disable-line no-unused-vars
}

export const AddUserModal: FC<AddUserModalProps> = ({isOpen, onClose, onSubmit}) => {
    const onSubmitForm = useCallback(
        async(values) => {
            onSubmit(values);
            onClose();
        },
        [onSubmit, onClose]
    );

    const initialValues = {
        name: '',
        email: '',
        type: '',
        age: 0,
        location: '',
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmitForm}
            >
                {({ handleSubmit, errors, touched }) => (
                    <form onSubmit={handleSubmit}>
                        <ModalOverlay />
                        <ModalContent>
                        <ModalHeader>Add User</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <FormControl isInvalid={!!(errors.name && touched.name)}>
                                <FormLabel htmlFor="name">Name:</FormLabel>
                                <Field
                                    as={Input}
                                    id="name"
                                    name="name"
                                    type="text"
                                    variant="filled"
                                    cursor="text"
                                    placeholder="Name"
                                />
                                <FormErrorMessage>{errors.name}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!(errors.email && touched.email)}>
                                <FormLabel htmlFor="email">Email:</FormLabel>
                                <Field
                                    as={Input}
                                    id="email"
                                    name="email"
                                    type="email"
                                    variant="filled"
                                    cursor="text"
                                    placeholder="Email"
                                />
                                <FormErrorMessage>{errors.email}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!(errors.type && touched.type)}>
                                <FormLabel htmlFor="type">Type:</FormLabel>
                                <Field
                                    as={Input}
                                    id="type"
                                    name="type"
                                    type="text"
                                    variant="filled"
                                    cursor="text"
                                    placeholder="Type"
                                />
                                <FormErrorMessage>{errors.type}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!(errors.age && touched.age)}>
                                <FormLabel htmlFor="age">Age:</FormLabel>
                                <Field
                                    as={Input}
                                    id="age"
                                    name="age"
                                    type="number"
                                    variant="filled"
                                    cursor="text"
                                    placeholder="Age"
                                />
                                <FormErrorMessage>{errors.age}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!(errors.location && touched.location)}>
                                <FormLabel htmlFor="location">Location:</FormLabel>
                                <Field
                                    as={Input}
                                    id="location"
                                    name="location"
                                    type="text"
                                    variant="filled"
                                    cursor="text"
                                    placeholder="Location"
                                />
                                <FormErrorMessage>{errors.location}</FormErrorMessage>
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" colorScheme='blue' mr={3}>
                                Save
                            </Button>
                        </ModalFooter>
                        </ModalContent>
                    </form>
                )}
            </Formik>
        </Modal>
    )
}
