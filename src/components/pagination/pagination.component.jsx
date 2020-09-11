import React from 'react';
import {Pagination} from '@material-ui/lab'

import './pagination.styles.css';

const PaginationBox = ({pages, onChange}) => {

    return (
        <div className='paginationBlock'>
            <Pagination count={pages} className='pagination' onChange={onChange}/>
        </div> 
    )
}

export default PaginationBox;