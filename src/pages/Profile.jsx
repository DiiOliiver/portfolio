import React from "react";
import { CCard, CCardBody, CCardSubtitle, CCardText, CCardTitle, CCol, CRow } from '@coreui/react'
import BreadcrumbsComponent from '../components/breadcrumbs/BreadcrumbsComponent'
import RatingComponent from '../components/rating/RatingComponent'

const Profile = () => {
  const lists = [
    {
      description: 'Página inicial',
      href: '/',
      status: 'INACTIVE'
    },
    {
      description: 'Informação pessoal',
      href: '/profile',
      status: 'ACTIVE'
    },
  ]

  return (
    <>
      <BreadcrumbsComponent lists={lists} />
      <CRow className='mt-4'>
        <CCol md={6}>
          <CCard className='profile-card'>
            <CCardBody>
              <CCardSubtitle as={'h3'} style={{ borderBottom: 'outset 1px' }}>Resumo da experiência profissional:</CCardSubtitle><br/>
              <CCardText as={'p'} className='profile-card-text'>
                Comecei minha jornada na programação em 2018. Naquele mesmo ano, pedi transferência do meu setor atual para o time de desenvolvimento, onde comecei a trabalhar com PHP utilizando os frameworks Yii2 e Laravel, além de PostgreSQL. Também passei a utilizar JavaScript com Vue.js e tive meu primeiro contato com Docker, Scrum e Kanban. Naquela época, eu trabalhava em uma empresa terceirizada de planos de saúde.
                <br/>
                <br/>
                Permanecei nessa empresa até 2021, quando alcancei a posição de Desenvolvedor Júnior 4. Nesse ano, recebi uma proposta para trabalhar em um instituto de tecnologia P&D. Aceitei a oportunidade e comecei como Desenvolvedor de Software Júnior, usando Java com Spring Boot e JavaScript com Vue.js e React.js. Aos poucos, fui progredindo na carreira até alcançar minha posição atual como Desenvolvedor de Software Sênior 1.
                <br/>
                <br/>
                Essa trajetória me proporcionou uma sólida experiência em diversas tecnologias e metodologias ágeis, e estou sempre em busca de novos desafios e oportunidades para continuar crescendo na área de desenvolvimento de software.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md={window.innerWidth < 780 ? 6 : 3}>
          <CCard className='profile-card'>
            <CCardBody>
              <RatingComponent title='Vue.js' value={5} />
              <RatingComponent title='JavaScript' value={5} />
              <RatingComponent title='SpringBoot' value={5} />
              <RatingComponent title='Scrum' value={5} />
              <RatingComponent title='Github' value={4} />
              <RatingComponent title='Java' value={4} />
              <RatingComponent title='TypeScript' value={4} />
              <RatingComponent title='PostgreSQL' value={4} />
              <RatingComponent title='MySQL' value={4} />
              <RatingComponent title='Laravel' value={4} />
              {
                window.innerWidth < 780 ?
                  <>
                    <RatingComponent title='PHP' value={3} />
                    <RatingComponent title='Quasar' value={3} />
                    <RatingComponent title='React' value={3} />
                    <RatingComponent title='Jira' value={3} />
                    <RatingComponent title='Bitbucket' value={3} />
                    <RatingComponent title='Docker' value={3} />
                    <RatingComponent title='MongoDB' value={3} />
                    <RatingComponent title='Python' value={2} />
                    <RatingComponent title='Svelte' value={2} />
                  </> : <></>
              }
            </CCardBody>
          </CCard>
        </CCol>
        {
          window.innerWidth >= 780 ?
            <CCol md={3}>
              <CCardBody className='mt-3'>
                <RatingComponent title='PHP' value={3} />
                <RatingComponent title='Quasar' value={3} />
                <RatingComponent title='React' value={3} />
                <RatingComponent title='Jira' value={3} />
                <RatingComponent title='Bitbucket' value={3} />
                <RatingComponent title='Docker' value={3} />
                <RatingComponent title='MongoDB' value={3} />
                <RatingComponent title='Python' value={2} />
                <RatingComponent title='Svelte' value={2} />
              </CCardBody>
            </CCol> : <></>
        }
      </CRow>
    </>
  )
}

export default Profile;