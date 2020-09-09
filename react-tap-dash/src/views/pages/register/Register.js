import React, { Component } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { register } from '../../Components/UserFunctions'


class Register extends Component {
  constructor(){
    super()
    this.state ={
      f_name:'',
      l_nameu_email :'',
      u_email:'',
      u_password:''
    }
    
    this.onChange= this.onChange.bind(this)
    this.onSubmit= this.onSubmit.bind(this)
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit (e){
    e.preventDefault()

    const user ={
      f_name: this.state.f_name,
      l_name: this.state.l_name,
      u_email:this.state.u_email ,
      u_password:this.state.u_password
    }

    register(user).then(res =>{
      
        this.props.history.push('/login')
      
    })

  }


  render(){
    return (
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="9" lg="7" xl="6">
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm noValidate onSubmit={this.onSubmit} >
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="First Name" name="f_name" autoComplete="username" value={this.state.f_name} onChange={this.onChange} />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Last Name" name="l_name" autoComplete="username" value={this.state.l_name} onChange={this.onChange} />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>@</CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="email" placeholder="Email" name="u_email" autoComplete="Email" value={this.state.u_email} onChange={this.onChange} />
                     
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" name="u_password" placeholder="Password" autoComplete="current-password" value={this.state.u_password} onChange={this.onChange} />
                    </CInputGroup>
                   
                    <CButton type="submit" color="success" block>Create Account</CButton>
                  </CForm>
                </CCardBody>
                <CCardFooter className="p-4">
                  <CRow>
                    <CCol xs="12" sm="6">
                      <CButton className="btn-facebook mb-1" block><span>facebook</span></CButton>
                    </CCol>
                    <CCol xs="12" sm="6">
                      <CButton className="btn-twitter mb-1" block><span>twitter</span></CButton>
                    </CCol>
                  </CRow>
                </CCardFooter>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    )
  }



}

export default Register
