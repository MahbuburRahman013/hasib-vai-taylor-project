import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function CustomModal() {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const titles = [
        "The Secrets of the Ancient World",
        "A Journey Through Time",
        "Innovations That Changed the World",
        "Mysteries of the Deep Ocean",
        "Exploring the Final Frontier: Space",
        "The Rise and Fall of Empires"
    ];

    return (
        <div>
            <Button className='py-1 lg:px-4 md:px-4 px-2 !bg-[#A57C00] hover:bg-[#C09B30] transition duration-300 !rounded-full lg:text-base text-sm !text-white font-semibold' onClick={onOpen}>Publish with us</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {
                            titles.map((title, index) => {
                               
                            const dynamicTitle = title.split(' ').join('-');

                                return (
                                    <Link to={`/dynamicContent/${dynamicTitle}`} key={index}>
                                        <Button className='my-3' onClick={onClose}>{title}</Button>
                                    </Link>
                                )
                            })
                        }
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default CustomModal