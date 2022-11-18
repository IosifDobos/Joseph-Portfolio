import React, { useRef, useEffect, useCallback } from 'react';
import { MdClose } from 'react-icons/md';



const ModalPopup = ({ tempData, showModal, setShowModal }) => {
    const modalRef = useRef();

    console.log('We are here!');
    console.log(showModal);

    const closeModal = e => {
        setShowModal(false);
    }

    const keyPress = useCallback(e => {
        if (e.key === 'Escape' && showModal) {
            setShowModal(false)
            console.log('I pressed');
        }
    }, [showModal, setShowModal]);

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible'
        }
        return () => document.removeEventListener('keydown', keyPress);
    }, [showModal, keyPress]);

    return (
        <>
            {showModal === true ? (
                <div className="modal-background" id={tempData.id} onClick={closeModal} ref={modalRef}>
                    {/* <div className='modal-container' > */}
                    <div className='modal-wrapper'>
                        <div className="img-modal">
                            <img src={tempData.imageUrl} alt={tempData.imageUrl} />
                        </div>
                        <div className='modal-content'>
                            <h2>{tempData.title}</h2>
                            <span className='description'>{tempData.description}</span>
                            <span className='categories'><i className='fa fa-tag'> </i> {tempData.tools}</span>
                            <div className="link-btn">
                                <a href={tempData.demoUrl} className="btn-md" target="_blank" rel="noopener noreferrer">Live Demo</a>
                                <a href={tempData.githubUrl} className="btn-md btn-space" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                        </div>
                        <MdClose
                            aria-label='Close Modal'
                            className='close-btn'
                            onClick={() => setShowModal(false)}
                        />
                    </div>
                    {/* </div> */}
                </div>
            ) : null}
        </>
    );
};

export default ModalPopup;
