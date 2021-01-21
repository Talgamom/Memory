import React from 'react';
import '../../styles/pages/Series.css';
import {Link} from 'react-router-dom'

function Series () {
    return (
        <div className='Series'>
            <h1>Series</h1>
            <Link to='/AddSerie'>
                <span>
                Adicionar Serie                        
                </span>
            </Link>
        </div>        
    );
}

export default Series;