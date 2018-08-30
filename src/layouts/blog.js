import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Main = styled.main`
  padding: 0 1rem;
`

const TemplateWrapper = ({children, location}) => (
  <Main>
    <Helmet
      title='Superstylin | A Gatsby Starter with Style 🕶️'
      link={[
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Lato|Poppins:700i'
        }
      ]}
    />
    <Header>
      <h1><Link to='/'>Superstylin'</Link></h1>
    </Header>

    {children()}
  </Main>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
