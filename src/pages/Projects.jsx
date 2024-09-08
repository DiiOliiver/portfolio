import React from "react";
import { CCard, CCardBody, CCardText, CCol, CLink, CRow } from '@coreui/react'
import BreadcrumbsComponent from '../components/breadcrumbs/BreadcrumbsComponent'
import { Chip, IconButton, ImageList, ImageListItem, ImageListItemBar, Stack } from '@mui/material'
import CIcon from '@coreui/icons-react'
import {
  cibGithub,
  cibGoogleChrome
} from '@coreui/icons'

const imgDefault = '/img/dev.png'

const itemData = [
  {
    img: '/img/portfolio3.png',
    title: 'Portfolio',
    year: '2024',
    tags: 'Publico,React,Typescript',
    rep: 'https://github.com/DiiOliiver/portfolio',
    featured: true,
  },
  {
    img: window.innerWidth >= 780 ? '/img/spring_react.png' : imgDefault,
    title: 'SGNPI',
    year: '2022-2024',
    tags: 'Privado,Springboot,React',
  },
  {
    img: window.innerWidth >= 780 ? '/img/spring_react.png' : imgDefault,
    title: 'EMS',
    year: '2022-2024',
    tags: 'Privado,Springboot,React',
  },
  {
    img: window.innerWidth >= 780 ? '/img/spring_react.png' : imgDefault,
    title: 'JUMP',
    year: '2022-2024',
    tags: 'Privado,Springboot,React',
  },
  {
    img: window.innerWidth >= 780 ? '/img/spring_vue.png' : imgDefault,
    title: 'ATAS',
    year: '2022-2024',
    tags: 'Privado,Springboot,Vue',
  },
  {
    img: window.innerWidth >= 780 ? '/img/laravel.png' : imgDefault,
    title: 'Gerenciador de produtos para estoque',
    year: '2024',
    tags: 'Prova,Docker,Laravel 11,Laravel Sanctum,MySQL',
    rep: 'Público,https://github.com/DiiOliiver/gpe-api',
  },
  {
    img: window.innerWidth >= 780 ? '/img/node.png' : imgDefault,
    title: 'API Faker (JSON Server)',
    year: '2024',
    tags: 'Teste,Node',
    rep: 'Público,https://github.com/DiiOliiver/api-json-server',
  },
  {
    img: window.innerWidth >= 780 ? '/img/node.png' : imgDefault,
    title: 'Banco 2',
    year: '2023',
    tags: 'Curso,Node,Typescript',
    rep: 'Público,https://github.com/DiiOliiver/dio-account-node-ts',
  },
  {
    img: window.innerWidth >= 780 ? '/img/node.png' : imgDefault,
    title: 'Medidor de ram',
    year: '2023',
    tags: 'Curso,Node,Javascript',
    rep: 'Público,https://github.com/DiiOliiver/medidor-ram-node',
  },
  {
    img: window.innerWidth >= 780 ? '/img/java.png' : imgDefault,
    title: 'Primeiros passos (Clone do Pong)',
    year: '2022',
    tags: 'Curso,Java,Game',
    rep: 'Público,https://github.com/DiiOliiver/curso_game_projeto_02',
  },
  {
    img: window.innerWidth >= 780 ? '/img/java.png' : imgDefault,
    title: 'Primeiros passos (Movimentação)',
    year: '2022',
    tags: 'Curso,Java,Game',
    rep: 'Público,https://github.com/DiiOliiver/curso_game_projeto_01',
  },
  {
    img: window.innerWidth >= 780 ? '/img/node.png' : imgDefault,
    title: 'API Node',
    year: '2022',
    tags: 'Público,Teste,Node,Express',
    rep: 'https://github.com/DiiOliiver/solid_api_node',
  },
  {
    img: window.innerWidth >= 780 ? '/img/spring_vue.png' : imgDefault,
    title: 'SGIQI',
    year: '2021-2022',
    tags: 'Privado,Springboot,Vue',
  },
  {
    img: window.innerWidth >= 780 ? '/img/spring_vue.png' : imgDefault,
    title: 'SITI',
    year: '2021',
    tags: 'Privado,Springboot,Vue',
  },
  {
    img: window.innerWidth >= 780 ? '/img/spring_vue.png' : imgDefault,
    title: 'SIIMPP',
    year: '2021',
    tags: 'Privado,Springboot,Vue',
  },
  {
    img: window.innerWidth >= 780 ? '/img/yii2.png' : imgDefault,
    title: 'Flex Doc',
    year: '2018-2021',
    tags: 'Privado,Yii2,Javascript',
  },
  {
    img: window.innerWidth >= 780 ? '/img/yii2.png' : imgDefault,
    title: 'DashBuilder Kuiper',
    year: '2018-2021',
    tags: 'Privado,Yii2,Javascript',
  },
  {
    img: window.innerWidth >= 780 ? '/img/laravel.png' : imgDefault,
    title: 'Elysium Autorizador',
    year: '2018-2021',
    tags: 'Privado,Laravel,Vue',
  },
  {
    img: window.innerWidth >= 780 ? '/img/laravel.png' : imgDefault,
    title: 'Portal Unimed',
    year: '2018-2021',
    tags: 'Privado,Laravel',
  },
  {
    img: window.innerWidth >= 780 ? '/img/angular.png' : imgDefault,
    title: 'Banco',
    year: '2021',
    tags: 'Público,Curso,Angular',
    rep: 'https://github.com/DiiOliiver/curso-angular-bytebank',
  },
  {
    img: window.innerWidth >= 780 ? '/img/svelte.png' : imgDefault,
    title: 'Calculadora',
    year: '2021',
    tags: 'Público,Curso,Svelte',
    rep: 'https://github.com/DiiOliiver/estudo-calculadora',
  },
  {
    img: window.innerWidth >= 780 ? '/img/spring_vue.png' : imgDefault,
    title: 'Agenda',
    year: '2021',
    tags: 'Público,Prova,Vue,Springboot,PostgreSQL',
    rep: 'https://github.com/DiiOliiver/vue-agenda',
  },
  {
    img: window.innerWidth >= 780 ? '/img/react.png' : imgDefault,
    title: 'Projeto Moveit',
    year: '2021',
    tags: 'Público,Curso,React',
    rep: 'https://github.com/DiiOliiver/moveit-nlw4',
  },
  {
    img: window.innerWidth >= 780 ? '/img/vue.png' : imgDefault,
    title: 'Tabela de Campeonato Brasileiro',
    year: '2020',
    tags: 'Público,Curso,Vue.js',
    rep: 'https://github.com/DiiOliiver/curso-vuejs',
  },
  {
    img: window.innerWidth >= 780 ? '/img/laravel.png' : imgDefault,
    title: 'Laravel Permission',
    year: '2018',
    tags: 'Público,Teste,Laravel 5,MySQL',
    rep: 'https://github.com/DiiOliiver/laravel-permission-teste',
  },
  {
    img: window.innerWidth >= 780 ? '/img/laravel.png' : imgDefault,
    title: 'Projeto curso',
    year: '2018',
    tags: 'Público,Prova,Laravel 5,MySQL',
    rep: 'https://github.com/DiiOliiver/projeto-curso',
  },
];

const Projects = () => {
  const lists = [
    {
      description: 'Página inicial',
      href: '/',
      status: 'INACTIVE'
    },
    {
      description: 'Projetos',
      href: '/projects',
      status: 'ACTIVE'
    },
  ]

  const srcset = (image, width, height, rows = 1, cols = 1) => {
    return {
      src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${width * cols}&h=${
        height * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  const filter = 'invert(99%) sepia(100%) saturate(18%) hue-rotate(209deg) brightness(106%) contrast(100%)'

  return (
    <>
      <BreadcrumbsComponent lists={lists} />
      <CRow>
        <CCol md={12}>
          <CCard className='profile-card mt-2 mb-4'>
            <CCardBody>
              <CCardText as={'p'} style={{ fontSize: 15 }}>
                Aqui você encontra alguns dos principais projetos que desenvolvi nos últimos anos, com foco em soluções robustas utilizando tecnologias modernas.
                <br/><br/>
                Entre os destaques, estão projetos como o SGNPI, EMS, JUMP e ATAS, todos implementados entre 2022 e 2024. Eles utilizam frameworks como Springboot, React e Vue, refletindo minha versatilidade tanto no frontend quanto no backend. Embora sejam projetos privados, cada um demonstra meu comprometimento com qualidade e inovação no desenvolvimento de software.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md={12}>
          <ImageList
            sx={{
              height: 800,
              transform: 'translateZ(0)',
            }}
            rowHeight={200}
            gap={1}
          >
            {itemData.map((item) => {
              let cols = item.featured ? 2 : 2;
              let rows = item.featured ? 2 : 2;

              if (window.innerWidth >= 780) {
                cols = item.featured ? 2 : 1;
                rows = item.featured ? 2 : 1;
              }


              return (
                <ImageListItem key={item.img} cols={cols} rows={rows}>
                  <img
                    {...srcset(item.img, 800, 200, rows, cols)}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    sx={{
                      background:
                        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                    }}
                    title={
                      <>
                        <b>{item.title}</b> - {item.year}
                      </>
                    }
                    subtitle={
                      <Stack direction="row" spacing={1} className='mt-3'>
                        {
                          item.tags.split(',').map((item, key) => {
                            return <Chip key={key} label={item} color="default" size='small' />
                          })
                        }
                      </Stack>
                    }
                    actionIcon={
                      <section>
                        {
                          item.rep &&
                          <CLink as={'a'} href={item.rep} target='_blank'>
                            <CIcon
                              className='cicon me-3'
                              style={{ filter }}
                              icon={cibGithub}
                              width={20}
                            />
                          </CLink>
                        }
                        {
                          item.web &&
                          <CLink as={'a'} href={item.web} target='_blank'>
                            <CIcon
                              className='cicon me-3'
                              style={{ filter }}
                              icon={cibGoogleChrome}
                              width={20}
                            />
                          </CLink>
                        }
                      </section>
                    }
                    position="top"
                    actionPosition="right"
                  />
                </ImageListItem>
              );
            })}
          </ImageList>
        </CCol>
      </CRow>
    </>
  )
}

export default Projects;