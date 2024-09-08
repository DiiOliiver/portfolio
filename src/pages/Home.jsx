import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CCol,
  CImage, CLink,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibLinkedin, cibGithub, cilCloudDownload } from '@coreui/icons'
import BreadcrumbsComponent from '../components/breadcrumbs/BreadcrumbsComponent'
import { Skeleton } from '@mui/material'

const Home = () => {
  const [ loading, setLoading ] = useState(true);

  if (loading) {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  const lists = [
    {
      description: 'Página inicial',
      href: '/',
      status: 'ACTIVE'
    },
  ]

  return (
    <>
      <BreadcrumbsComponent lists={lists} />
      <CRow>
        <CCol sm={{ order: 1, offset: '12'}}  md={{ order: 0, offset: '12'}}  lg={8}>
          <CCard className='profile-card'>
            <CCardBody>
              <CCardText as={'p'} className='profile-card-text'>
                <section style={{ height: '100%' }}>
                  <CCardTitle as={'h2'} className='profile-title'>Diego Feitosa De Oliveira</CCardTitle>
                  <CCardSubtitle as={'h5'}>Desenvolvedor de Software</CCardSubtitle><br/>
                  <CCardText as={'p'}>
                    Profissional com experiência em desenvolvimento e manutenção de sistemas web, atuando na resolução de problemas.
                    <br/><br/>
                    Realizo atividades fullstack, trabalhando principalmente com as linguagens Java, Javascript e SQL com o uso de frameworks e a arquitetura MVC.
                    <br/><br/>
                    Experiência na área com:<br/>
                    - Java com Springboot<br/>
                    - PHP com Laravel e Yii2.<br/>
                    - SQL com PostgreSQL, MySQL, Oracle e DB2.<br/>
                    - NoSQL com Redis e MongoDB.<br/>
                    - Javascript com Vue, React, Jquery, Svelte, Angular, Node e Typescript.<br/>
                    - CSS com Bootstrap, Materialize, Core.ui e Vuetify.<br/>
                    - Mobile híbrido com framework Quasar + Cordova<br/>
                  </CCardText>
                </section>
                <section className='mt-5 mb-2'>
                  <div>
                    <CLink as={'a'} href='https://github.com/DiiOliiver' target='_blank'>
                      <CIcon className='home-cicon' icon={cibLinkedin} width={30}/>
                    </CLink>
                    &nbsp;
                    Linkedin
                  </div>
                  <div className='mt-3'>
                    <CLink as={'a'} href='https://github.com/DiiOliiver' target='_blank'>
                      <CIcon className='home-cicon' icon={cibGithub} width={30}/>
                    </CLink>
                    &nbsp;
                    Github
                  </div>
                  <div className='mt-3'>
                    <CLink as={'a'} href='/pdf/diego_feitosa_de_oliveira.pdf' download>
                      <CIcon className='home-cicon' icon={cilCloudDownload} width={30}/>
                    </CLink>
                    &nbsp;
                    Currículo
                  </div>
                </section>
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        {
          screen.width > 1000 &&
          <CCol sm={{ order: 0, offset: '12'}}  md={{ order: 1, offset: '12'}} lg={4}>
            {
              loading ?
                <Skeleton
                  variant="rectangular"
                  width={470}
                  height={472}
                /> :
                <CImage src={'https://github.com/DiiOliiver.png'} className='home-picture mt-5'/>
            }
          </CCol>
        }
      </CRow>
    </>
  )
}

export default Home;