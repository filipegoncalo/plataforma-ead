import React, { Component } from 'react';
import dataD from '../DataJSON/DataDisciplina';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../DashBoard/DashBoard.css';
import imgperfil from '../Img/image7.png'
import InsertInvitationIcon from '@material-ui/icons/InsertInvitationOutlined';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SchoolIcon from '@material-ui/icons/School';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class DashBoard extends Component {
    render() {

        const discList = dataD.map(disciplina => {
            return (
                <div>
                      <Col className="span-1-of-3">
                        <div type="button" className="card text-center discplinabg" style={{ width: '18em' }}>
                        <div className="iconcenter">
                            <SchoolIcon  style={{ color: 'white', fontSize: 100}}/>
                        </div>
                            <div className="card-body text-dark ">
                                <br></br>
                                <h4 className="card-title disctitle">{disciplina.name}</h4>
                            </div>
                        </div>
                    </Col>
                </div>
            )
        })

        var data = new Date();
        var mes  = data.getMonth()
        var hora = data.getHours();
        var min  = data.getMinutes();
        var dia  = data.getDate();
        var dias = new Array(
            'Dom','Seg','Ter','Qua','Qui','Sex','Sáb'
           );
        var str_data = dia + '/' + (mes+1);
        var str_hora = hora + ':' + min;

        return (
            <div>
                <div className="wrapper">
                    <div></div>
                    <div className="caixaBemvindo">
                        <h1>Olá user.name</h1> 
                    </div>
                </div>
                <div className="wrapper">
                    <div className="caixaPerfil">
                        <img align="left" src={imgperfil} className="card-img-top col-md-4 borderimg"/>
                        <InsertInvitationIcon style={{ color: 'white'}}/>
                        <a>  {dias[data.getDay()]}  {str_data}</a>
                        <br></br>
                        <br></br>
                        <a>Próxima Aula</a>
                        <br></br>
                        <AccessTimeIcon style={{ color: 'white'}} />
                        <a>{str_hora}</a>
                    </div>
                    <div className="caixaSala">
                        {discList}
                    </div>
                </div>
            </div>
        );
        
    }
}