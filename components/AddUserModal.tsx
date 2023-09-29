import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/react'
import React, { FC, useCallback } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { UserInput } from '../interfaces/user'

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
    avatar: Yup.string(),
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    type: Yup.string().required('Type is required'),
    groups: Yup.array().of(Yup.string()),
    age: Yup.number().required('Age is required').positive('Age must be a positive number'),
    location: Yup.string().required('Location is required'),
  });

interface AddUserModalProps {
    isOpen: boolean
    onClose: () => void
    onSubmit: (userInput: UserInput) => void
}

export const AddUserModal: FC<AddUserModalProps> = ({isOpen, onClose, onSubmit}) => {
    const onSubmitForm = useCallback(
        async(values, { resetForm }) => {
            console.log('Submitted:', values);

            // TODO: Add user to context
            resetForm();
        },
        [onSubmit]
    );

    // Initial values for the form fields
    const initialValues = {
        avatar: '',
        name: '',
        email: '',
        type: '',
        groups: [],
        age: 0,
        location: '',
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add User</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmitForm}
                    >
                        <Form>
                            <div>
                            <label htmlFor="avatar">Avatar:</label>
                            <Field type="text" id="avatar" name="avatar" />
                            </div>
                            <div>
                            <label htmlFor="name">Name:</label>
                            <Field type="text" id="name" name="name" />
                            <ErrorMessage name="name" component="div" className="error" />
                            </div>
                            <div>
                            <label htmlFor="email">Email:</label>
                            <Field type="email" id="email" name="email" />
                            <ErrorMessage name="email" component="div" className="error" />
                            </div>
                            <div>
                            <label htmlFor="type">Type:</label>
                            <Field type="text" id="type" name="type" />
                            <ErrorMessage name="type" component="div" className="error" />
                            </div>
                            <div>
                            <label htmlFor="groups">Groups:</label>
                            <Field type="text" id="groups" name="groups" />
                            <ErrorMessage name="groups" component="div" className="error" />
                            </div>
                            <div>
                            <label htmlFor="age">Age:</label>
                            <Field type="number" id="age" name="age" />
                            <ErrorMessage name="age" component="div" className="error" />
                            </div>
                            <div>
                            <label htmlFor="location">Location:</label>
                            <Field type="text" id="location" name="location" />
                            <ErrorMessage name="location" component="div" className="error" />
                            </div>
                            <button type="submit">Submit</button>
                        </Form>
                    </Formik>
                </ModalBody>
            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Save
                </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
