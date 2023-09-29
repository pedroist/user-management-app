import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/react'
import React, { FC } from 'react'

interface AddUserModalProps {
    isOpen: boolean
    onClose: () => void
}

export const AddUserModal: FC<AddUserModalProps> = ({isOpen, onClose}) => (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Add User</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            This is the body
            </ModalBody>
        <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
                Save
            </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
)
