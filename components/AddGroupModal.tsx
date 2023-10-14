import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react'
import React, { FC, useCallback } from 'react'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'
import { GroupInput } from '../interfaces/group'

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
})

interface AddGroupModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (groupInput: GroupInput) => void // eslint-disable-line no-unused-vars
}

export const AddGroupModal: FC<AddGroupModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const onSubmitForm = useCallback(
    async (values) => {
      onSubmit(values)
      onClose()
    },
    [onSubmit, onClose]
  )

  const initialValues = {
    name: '',
  }

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
              <ModalHeader>Add Group</ModalHeader>
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
              </ModalBody>
              <ModalFooter>
                <Button type="submit" colorScheme="blue" mr={3}>
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
