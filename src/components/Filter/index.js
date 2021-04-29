import React, { Fragment, useState } from 'react';
import './index.styles.css';
import Button from '../Button';

const Filter = ({ }) => {
    const [yearSelected, setYearSelected] = useState(0);
    const [monthSelected, setMonthSelected] = useState('');

    const changeYear = (year) => {
        setYearSelected(year);
    }

    const changeMonth = (month) => {
        setMonthSelected(month);
    }

    const years = [2021, 2020, 2019];

    const months = ['Janeiro', 'Fervereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    return (
        <Fragment >
            <div className='years-container'>
            <div style={{textAlign: 'left', marginLeft: '15px', textTransform: 'uppercase', fontWeight: '600', color: '#546e7a'}}>Ano</div>
            {
                years.map(year => (
                    <div>
                        <div className={year === yearSelected ? 'option-date checked' : 'option-date '} onClick={() => changeYear(year)}>{year}</div>
                    </div>
                ))
            }

            <div style={{textAlign: 'left', marginLeft: '15px', marginTop: '20px', textTransform: 'uppercase', fontWeight: '600',  color: '#546e7a'}}>Meses</div>
            <div className='months-container'>
            {
                months.map(month => (
                    <div>
                        <div className={month === monthSelected ? 'option-date checked' : 'option-date '} onClick={() => changeMonth(month)}>{month}</div>
                    </div>
                ))
            }
              
            </div>
            <div style={{marginTop: '20px'}}>
                <Button value='Pesquisar' />
            </div>
          </div>
        </Fragment>
    )
}

export default Filter;