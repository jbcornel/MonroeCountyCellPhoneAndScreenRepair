import React, { Component } from 'react';
import {Dropdown, DropdownButton, Modal, Button, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './pricesStyle.css';
import iphonePhoto from './iphonePricesPhoto.jpg';
import samsungPhoto from './samsungPricePhoto.jpg';
import phoneContactPhoto from './phoneContactPhoto.jpg';


class Prices extends Component {

    constructor() {
        super();

       
        this.state = {
            showContactModal: false,
             showModal: false,
             company: '',
             modalTitle: '',
             screenRepairPrice: '',
             batteryPrice: '',
             chargingPortPrice: '',
             homeButtonPrice: '',
             frontCameraPrice: '',

             

           }
      }
      
    handleOpenModal (type, phone) {
        if (type === 'iphone'){
        this.setState({showModal: !this.state.showModal, company: type, modalTitle: phone.name, screenRepairPrice: phone.screenRepairPrice,
        batteryPrice: phone.batteryPrice, chargingPortPrice: phone.chargingPortPrice, homeButtonPrice: phone.homeButtonPrice,
    frontCameraPrice: phone.frontCameraPrice})
        }
        else if(type==='samsung'){
                this.setState({showModal: !this.state.showModal, company: type, modalTitle: phone.name, 
                    screenRepairPrice: phone.screenRepairPrice,
                    batteryPrice: phone.batteryPrice,})
        }
       }
       handleCloseModal () {
        this.setState({showModal: !this.state.showModal})
       }

       handleContactModal () {
        this.setState({showContactModal: !this.state.showContactModal})
       }
    
    render() {
        const arrayOfIphones = [
            {
            
                name: 'iPhone 11',
                screenRepairPrice: '$119',
                batteryPrice: '$TBA',
                chargingPortPrice: '$TBA',
                homeButtonPrice: 'N/A',
                frontCameraPrice: '$TBA',
            },
            {
            
                name: 'iPhone XS MAX OLED Screen',
                screenRepairPrice: '$159',
                batteryPrice: '$TBA',
                chargingPortPrice: '$TBA',
                homeButtonPrice: 'N/A',
                frontCameraPrice: '$TBA',
            },
            {
                name: 'iPhone XS',
                screenRepairPrice: '$109 OLED Screen',
                batteryPrice: '$TBA',
                chargingPortPrice: '$TBA',
                homeButtonPrice: 'N/A',
                frontCameraPrice: '$TBA',
                
            },
            {
                name: 'iphone X',
                screenRepairPrice: '$99 OLED Screen',
                batteryPrice: '$70',
                chargingPortPrice: '$49',
                homeButtonPrice: 'N/A',
                frontCameraPrice: '$55',
            },
            {
                name: 'iphone XR',
                screenRepairPrice: '$99 LCD',
                batteryPrice: '$65',
                chargingPortPrice: '$49',
                homeButtonPrice: 'N/A',
                frontCameraPrice: '$55',
        
            },
            {
                name: 'iphone 8+',
                screenRepairPrice: '$69',
                batteryPrice: '$TBA',
                chargingPortPrice: '$TBA',
                homeButtonPrice: 'TBA',
                frontCameraPrice: '$TBA',
        
            },
            {
                name: 'iphone 8',
                screenRepairPrice: '$69',
                batteryPrice: '$TBA',
                chargingPortPrice: '$TBA',
                homeButtonPrice: 'TBA',
                frontCameraPrice: '$TBA',
        
            },
            {
                name: 'iphone 7+',
                screenRepairPrice: '$69',
                batteryPrice: '$TBA',
                chargingPortPrice: '$TBA',
                homeButtonPrice: 'TBA',
                frontCameraPrice: '$TBA',
        
            },
            {
                name: 'iphone 7',
                screenRepairPrice: '$69',
                batteryPrice: '$TBA',
                chargingPortPrice: '$TBA',
                homeButtonPrice: 'TBA',
                frontCameraPrice: '$TBA',
        
            },
            {
                name: 'iphone 6s+',
                screenRepairPrice: '$69',
                batteryPrice: '$TBA',
                chargingPortPrice: '$TBA',
                homeButtonPrice: 'TBA',
                frontCameraPrice: '$TBA',
        
            },
            {
                name: 'iphone 6s',
                screenRepairPrice: '$69',
                batteryPrice: '$TBA',
                chargingPortPrice: '$TBA',
                homeButtonPrice: 'TBA',
                frontCameraPrice: '$TBA',
        
            },
            {
                name: 'iphone 6',
                screenRepairPrice: '$59',
                batteryPrice: '$TBA',
                chargingPortPrice: '$TBA',
                homeButtonPrice: 'TBA',
                frontCameraPrice: '$TBA',
        
            },
            {
                name: 'iphone 6+',
                screenRepairPrice: '$59',
                batteryPrice: '$TBA',
                chargingPortPrice: '$TBA',
                homeButtonPrice: 'TBA',
                frontCameraPrice: '$TBA',
        
            },

        
        
    ]
    const arrayOfSamsungs = [
        {
            name:'S20',
            screenRepairPrice: '$329',
            batteryPrice: 'TBA'
        },
        {
            name:'S10 Lite',
            screenRepairPrice: '$229',
            batteryPrice: 'TBA'
        },
        {
            name:'S10 5G',
            screenRepairPrice: '$329',
            batteryPrice: 'TBA'
        },
        {
            name:'S10+',
            screenRepairPrice: '$299',
            batteryPrice: 'TBA'
        },
        {
            name:'S10',
            screenRepairPrice: '$289',
            batteryPrice: 'TBA'
        },
        {
            name:'S10e',
            screenRepairPrice: '$219',
            batteryPrice: 'TBA'
        },
        {
            name:'S9+',
            screenRepairPrice: '$249',
            batteryPrice: 'TBA'
        },
        {
            name:'S9',
            screenRepairPrice: '$239',
            batteryPrice: 'TBA'
        },
        {
            name:'S8',
            screenRepairPrice: '$229',
            batteryPrice: 'TBA'
        },
        {
            name:'Note 10+',
            screenRepairPrice: '$369',
            batteryPrice: 'TBA'
        },
        {
            name:'Note 10',
            screenRepairPrice: '$349',
            batteryPrice: 'TBA'
        },
        {
            name:'Note 10 Lite',
            screenRepairPrice: '$249',
            batteryPrice: 'TBA'
        },
        {
            name:'Note 9',
            screenRepairPrice: '$239',
            batteryPrice: 'TBA'
        },
        {
            name:'Note 8',
            screenRepairPrice: '$229',
            batteryPrice: 'TBA'
        },
        
    ]
        
           
        return (
        
        
        <div className='pricesDropdown'>
            {/* <h1 style={{color: 'red'}}>THIS PAGE IS STILL IN PRODUCTION, CONTENT BELOW THIS IS NOT VALID AND IS VOID CURRENTLY</h1> */}
            {/* iphone modal */}
         <Modal show={this.state.showModal} onHide={() => this.handleCloseModal()}> 
        <Modal.Header closeButton>
        <Modal.Title>{this.state.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {this.state.company ==='iphone'&&
            
            <ul>
                <li>Screen replacement: {this.state.screenRepairPrice}</li>
                <li>Battery replacement: {this.state.batteryPrice}</li>
                <li>Charging port replacement: {this.state.chargingPortPrice}</li>
                <li>Home button replacement: {this.state.homeButtonPrice}</li>
                <li>Front camera replacement: {this.state.frontCameraPrice}</li>
            </ul>
         }

         {this.state.company ==='samsung' &&
            <ul>
                <li>Screen replacement: {this.state.screenRepairPrice}</li>
                <li>Battery replacement: {this.state.batteryPrice}</li>
            </ul>
         
         }
            
        
            
            <p style={{paddingTop: '10rem'}}>schedule an appointment: call 734-731-9094</p>
            <a style={{textDecoration: 'none', color: '#5bc0de'}} target='_blank'  rel="noopener 
noreferrer"href='https://www.facebook.com/monroecountycellphonerepair'>Follow and like us on facebook!</a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={() => this.handleCloseModal()}>
            Close
          </Button>
          
        </Modal.Footer>
        
      </Modal>

         {/* this modal is made as a contact sheet modal */}
      <Modal show={this.state.showContactModal} onHide={() => this.handleContactModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ul>
                <li>Call or text: 734-731-9094</li>
                <li>Email: josephbcornell@gmail.com</li>
                <li>Snapchat: joeycornelll</li>
                <li><a style={{textDecoration: 'none', color: '#5bc0de'}} target='_blank' rel="noopener 
noreferrer" href='https://www.facebook.com/monroecountycellphonerepair'>Message us on Facebook</a></li>
            </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => this.handleContactModal()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


      <Card className='dropdownCard'>
             <Card.Img variant="top" src={iphonePhoto} /> 
        <Card.Body>
            <Card.Title>Shop iPhone Repairs</Card.Title>
            <Card.Text>
                 check our selection of iPhone repairs
            </Card.Text>
            <DropdownButton drop='right' size='md' variant="info" id="dropdown-basic-button" title="iPhones">
            <Dropdown.Item  onClick={() => this.handleOpenModal('iphone', arrayOfIphones[0])} variant="info" as="button">iPhone 11</Dropdown.Item>
            <Dropdown.Item  onClick={() => this.handleOpenModal('iphone', arrayOfIphones[1])} variant="info" as="button">iPhone XS MAX</Dropdown.Item>
            <Dropdown.Item  onClick={() => this.handleOpenModal('iphone', arrayOfIphones[2])} variant="info" as="button">iPhone XS</Dropdown.Item>
            <Dropdown.Item  onClick={() => this.handleOpenModal('iphone', arrayOfIphones[3])} variant="info" as="button">iPhone X</Dropdown.Item>
            <Dropdown.Item  onClick={() => this.handleOpenModal('iphone', arrayOfIphones[4])} variant="info" as="button">iPhone XR</Dropdown.Item>
            <Dropdown.Item  onClick={() => this.handleOpenModal('iphone', arrayOfIphones[4])} variant="info" as="button">iPhone 8+</Dropdown.Item>
            <Dropdown.Item  onClick={() => this.handleOpenModal('iphone', arrayOfIphones[4])} variant="info" as="button">iPhone 8</Dropdown.Item>
            <Dropdown.Item  onClick={() => this.handleOpenModal('iphone', arrayOfIphones[4])} variant="info" as="button">iPhone 7+</Dropdown.Item>
            <Dropdown.Item  onClick={() => this.handleOpenModal('iphone', arrayOfIphones[4])} variant="info" as="button">iPhone 7</Dropdown.Item>
            <Dropdown.Item  onClick={() => this.handleOpenModal('iphone', arrayOfIphones[4])} variant="info" as="button">iPhone 6s & 6s+</Dropdown.Item>
            <Dropdown.Item  onClick={() => this.handleOpenModal('iphone', arrayOfIphones[4])} variant="info" as="button">iPhone 6 & 6+</Dropdown.Item>
        </DropdownButton>
            </Card.Body>
      </Card>
      <Card className='dropdownCard'>
             <Card.Img variant="top" src={samsungPhoto} />
        <Card.Body>
            <Card.Title>Shop Samsung Repairs</Card.Title>
            <Card.Text>
                 check our selection of Samsung Galaxy and Note repairs
            </Card.Text>
            <DropdownButton  drop='right' size='md' variant="info" id="dropdown-basic-button" title="Samsung">
            <Dropdown.Item  onClick={() => this.handleOpenModal('samsung', arrayOfSamsungs[0])} variant="info" as="button">S20</Dropdown.Item>
            <Dropdown.Item  onClick={() => this.handleOpenModal('samsung', arrayOfSamsungs[1])} variant="info" as="button">S10 Lite</Dropdown.Item>
            <Dropdown.Item  onClick={() => this.handleOpenModal('samsung', arrayOfSamsungs[2])} variant="info" as="button">S10 5G</Dropdown.Item>
            <Dropdown.Item  onClick={() => this.handleOpenModal('samsung', arrayOfSamsungs[3])} variant="info" as="button">S10+</Dropdown.Item>
            <Dropdown.Item  onClick={() => this.handleOpenModal('samsung', arrayOfSamsungs[4])} variant="info" as="button">S10</Dropdown.Item>
            <Dropdown.Item  onClick={() => this.handleOpenModal('samsung', arrayOfSamsungs[5])} variant="info" as="button">S10e</Dropdown.Item>
            <Dropdown.Item  onClick={() => this.handleOpenModal('samsung', arrayOfSamsungs[6])} variant="info" as="button">S9+</Dropdown.Item>
            <Dropdown.Item  onClick={() => this.handleOpenModal('samsung', arrayOfSamsungs[7])} variant="info" as="button">S9</Dropdown.Item>
            <Dropdown.Item  onClick={() => this.handleOpenModal('samsung', arrayOfSamsungs[8])} variant="info" as="button">S8</Dropdown.Item>
            <Dropdown.Item  onClick={() => this.handleOpenModal('samsung', arrayOfSamsungs[9])} variant="info" as="button">Note 10+</Dropdown.Item>
            <Dropdown.Item  onClick={() => this.handleOpenModal('samsung', arrayOfSamsungs[10])} variant="info" as="button">Note 10</Dropdown.Item>
            <Dropdown.Item  onClick={() => this.handleOpenModal('samsung', arrayOfSamsungs[11])} variant="info" as="button">Note 10 Lite</Dropdown.Item>
            <Dropdown.Item  onClick={() => this.handleOpenModal('samsung', arrayOfSamsungs[12])} variant="info" as="button">Note 9</Dropdown.Item>
            <Dropdown.Item  onClick={() => this.handleOpenModal('samsung', arrayOfSamsungs[13])} variant="info" as="button">Note 8</Dropdown.Item>
        </DropdownButton>
            </Card.Body>
      </Card>
      <Card className='dropdownCard'>
             <Card.Img variant="top" src={phoneContactPhoto} />
        <Card.Body>
            <Card.Title>Shop Other Repairs</Card.Title>
            <Card.Text>
                 contact us to schedule an appointment or to see if we offer repairs on your device!
            </Card.Text>
            <Button onClick={() => this.handleContactModal()} size='md' variant="info">
            Contact Us
        </Button>
            </Card.Body>
      </Card>
      
        {/* <DropdownButton  drop='right' size='lg' className='dropdownItem' variant="info" id="dropdown-basic-button" title="iPhones">
            <Dropdown.Item  variant="info" as="button">iPhone XS MAX</Dropdown.Item>
            <Dropdown.Item variant="info" as="button">iPhone XS</Dropdown.Item>
            <Dropdown.Item variant="info" as="button">iPhone X</Dropdown.Item>
            <Dropdown.Item variant="info" as="button">iPhone XR</Dropdown.Item>
        </DropdownButton>
        <DropdownButton drop='right' size='lg' className='dropdownItem' variant="info" id="dropdown-basic-button" title="iPhones">
            <Dropdown.Item  variant="info" as="button">iPhone XS MAX</Dropdown.Item>
            <Dropdown.Item variant="info" as="button">iPhone XS</Dropdown.Item>
            <Dropdown.Item variant="info" as="button">iPhone X</Dropdown.Item>
            <Dropdown.Item variant="info" as="button">iPhone XR</Dropdown.Item>
        </DropdownButton>
        <DropdownButton drop='right' size='lg' className='dropdownItem'variant="info" id="dropdown-basic-button" title="iPhones">
            <Dropdown.Item  variant="info" as="button">iPhone XS MAX</Dropdown.Item>
            <Dropdown.Item variant="info" as="button">iPhone XS</Dropdown.Item>
            <Dropdown.Item variant="info" as="button">iPhone X</Dropdown.Item>
            <Dropdown.Item variant="info" as="button">iPhone XR</Dropdown.Item>
        </DropdownButton>
        <DropdownButton  drop='right' size='lg' className='dropdownItem' variant="info" id="dropdown-basic-button" title="iPhones">
            <Dropdown.Item  variant="info" as="button">iPhone XS MAX</Dropdown.Item>
            <Dropdown.Item variant="info" as="button">iPhone XS</Dropdown.Item>
            <Dropdown.Item variant="info" as="button">iPhone X</Dropdown.Item>
            <Dropdown.Item variant="info" as="button">iPhone XR</Dropdown.Item>
        </DropdownButton> */}
        
        

</div>
    
    )
}
}

export default Prices