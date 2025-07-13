import React from 'react'
import './Services.css'
import { Link } from 'react-router-dom';
import { Button } from '../button-component/Button';
import Footer from '../footer-component/Footer';
import { services } from '../common/common';


function Services() {
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
                        <th>GEAR AVAILABLITY</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map((service, index) => (
                        <tr key={index}>
                            <td>{service.id}</td>
                            <td>{service.service}</td>
                            <td>{service.serviceCost}</td>
                            <td>
                                <img src={service.imgUrl} alt="Travel Image"
                                    className="services__item__img" />
                            </td>
                            <td>{service.maxEnrollment}</td>
                            <td>{
                                service.gearAvl ?
                                    <Button buttonStyle='btn--primary'
                                        buttonSize='btn--medium'
                                        btnColor={'#007BFF'}
                                        fontColor={'#fff'}
                                        link={`/products`} >
                                        GET GEAR <i className="fas fa-shopping-cart" style={{ marginRight: '10px', marginLeft: '10px' }} />
                                    </Button>
                                    : 'Gears are not available. Please bring your own items'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Footer
                description={'We are here to help you with your adventure needs. Contact us for more information. 000-888-666-444'}
                warning={'These adventures are not for the faint hearted. Need advisor support please contact 000-888-555-666'}
            />
        </>
    )
}

export default Services
