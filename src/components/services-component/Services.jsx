import React, { useState } from 'react'
import './Services.css'
import { Link } from 'react-router-dom';
import { Button } from '../button-component/Button';
import Footer from '../footer-component/Footer';
import { services } from '../common/common';

function Services() {

    const [counts, setCounts] = useState({});

    const addToCart = (serviceId, maxEnrollment) => {
        setCounts(prevCounts => {
            const currentCount = prevCounts[serviceId] || 0;
            if (currentCount < maxEnrollment) {
                return { ...prevCounts, [serviceId]: currentCount + 1 };
            }
            return prevCounts;
        });
        console.log(`Service with id ${serviceId} and ${maxEnrollment} added to cart.`);
    };

    const resetCount = (serviceId) => {
        setCounts(prevCounts => ({ ...prevCounts, [serviceId]: 0 }));
    };

    const resetAll = () => {
        setCounts({});
        console.log('All counts reset to 0.');
    }

    return (
        <>
            <table className="services-table">
                <thead>
                    <tr>
                        <th>SERVICE ID</th>
                        <th>SERVICE NAME</th>
                        <th>SERVICE COST</th>
                        <th>SERVICE(S) TO CHOOSE (Note: you can opt for maximum 4 services)</th>
                        <th>MAX ENROLLMENT PER GROUP</th>
                        <th>ADD TO CART</th>
                        <th>GEAR AVAILABLITY</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map((service, index) => {
                        const count = counts[service.id] || 0;
                        return (
                            <tr key={index}>
                                <td>{service.id}</td>
                                <td>{service.service}</td>
                                <td>{service.serviceCost}</td>
                                <td>
                                    <img src={service.imgUrl} alt="Travel Image"
                                        className="services__item__img" />
                                </td>
                                <td>{service.maxEnrollment}</td>
                                <td>
                                    { counts[service.id] !== undefined && counts[service.id] > 0 
                                    && count < service.maxEnrollment ? 
                                        <Button buttonStyle='btn--primary'
                                            buttonSize='btn--medium'
                                            btnColor={'#ccc'}
                                            fontColor={'black'}
                                            onClick={() => addToCart(service.id, service.maxEnrollment)} >
                                            {counts[service.id]} ADDED <i className="fas fa-shopping-cart" style={{ marginRight: '10px', marginLeft: '10px' }} />
                                        </Button>
                                        : 
                                    count < service.maxEnrollment ? (
                                        <Button buttonStyle='btn--primary'
                                            buttonSize='btn--medium'
                                            btnColor={'#007BFF'}
                                            fontColor={'#fff'}
                                            onClick={() => addToCart(service.id, service.maxEnrollment)} >
                                            ADD TO CART <i className="fas fa-shopping-cart" style={{ marginRight: '10px', marginLeft: '10px' }} />
                                        </Button>
                                    ) : (
                                        <Button buttonStyle='btn--primary'
                                            buttonSize='btn--medium'
                                            btnColor={'#ccc'}
                                            fontColor={'black'}
                                            onClick={() => resetCount(service.id)} >
                                            RESET
                                        </Button>
                                    )}
                                </td>
                                <td>{
                                    service.gearAvl ?
                                        <Button buttonStyle='btn--primary'
                                            buttonSize='btn--medium'
                                            btnColor={'#007BFF'}
                                            fontColor={'#fff'}
                                            link={`/products`} >
                                            GET GEAR
                                        </Button>
                                        : 'Gears are not available. Please bring your own items'}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="services__button__container">
                {(() => {
                    const totalCount = Object.values(counts).reduce((sum, val) => sum + (val || 0), 0);
                    return (
                        <>
                            <div className="services__items-count">ITEMS ({totalCount})</div>
                            <Button buttonStyle='btn--primary'
                                buttonSize='btn--medium'
                                btnColor={'#007BFF'}
                                fontColor={'#fff'}
                                onClick={resetAll} >
                                RESET ALL
                            </Button>
                        </>
                    );
                })()}
            </div>
            <Footer
                description={'We are here to help you with your adventure needs. Contact us for more information. 000-888-666-444'}
                warning={'These adventures are not for the faint hearted. Need advisor support please contact 000-888-555-666'}
            />
        </>
    )
}

export default Services
