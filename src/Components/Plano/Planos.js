import React, { Component } from 'react';
import data from '../DataJSON/DataPlano';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Grid/Grid.css';
import './Plano.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Planos extends Component {
    render() {

        const planoList = data.map(plano => {
            return (
                <div>
                    <Col className="span-1-of-3">
                        <div className="card text-center" style={{ width: '18em' }}>
                            <div className="overflow">
                            <img src={plano.image} className="card-img-top border-1 "/>
                            </div>
                            <div className="card-body text-dark border-2">
                                <h4 className="card-title">{plano.name}</h4>
                                <p className="card-text text-secondary">{plano.description}</p>
                                <p className="card-text text-secondary" >{plano.price}</p>
                                <br></br>
                                <a href="#" className="btn btn-outline-primary btnfont">Cadastrar</a>
                            </div>
                        </div>
                    </Col>
                </div>
            )
        })

        return (
            <div>
                <h1 className="center-text">Desbloqueie toda a Força do ensino</h1>
                <Container fluid="sd">
                    <Row className="justify-content-md-center">
                        {planoList}
                    </Row>
                </Container>
            </div>
        );

    }
}
