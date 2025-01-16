import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import DeliveryAddress from '../Form/DeliveryAddress'


const BuyNowModal = ({ closeModal, isOpen, orderInfo, qt, _id, customerName }) => {

   
    
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className=' relative z-20' onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto '>
                    <div className='flex w-full min-h-full items-center justify-center px-4 mt-32 mb-8 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className='w-full max-w-screen-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <Dialog.Title
                                    as='h3'
                                    className='text-lg font-medium text-center leading-6 text-gray-900'
                                >
                                    Check Out
                                </Dialog.Title>

                                <DeliveryAddress closeModal={closeModal} orderInfo={orderInfo} qt={qt} _id={_id} customerName={customerName}></DeliveryAddress>
                                
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>

                </div>
            </Dialog>
        </Transition>
    )
}

export default BuyNowModal