import React from 'react';
import {Modal} from '@material-ui/core';
import './filter-tab.styles.css';

const FilterTab = ({open, onClose, onOpen}) => {

    return (
        <div className='filterTab'>
            <button type="button" onClick={onOpen}>
                Open Modal
                </button>
                <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                some
                </Modal>
        </div>
    )
}

export default FilterTab;