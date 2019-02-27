import React from 'react';
import { createGlobalStyle } from "styled-components";
import getData from '../hooks/getData';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';
import Loader from '../components/Loader';
import ContactForm from '../components/ContactForm';
const API = 'https://us-central1-gndx-cv.cloudfunctions.net/me';

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Lato:300,400|Roboto:300,400,500');
    @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    background: #f5f5f5;
  }
`;

const App = () => {
  const data = getData(API);
  return data.length === 0 ? <><GlobalStyle /><Loader /></> : (
    <Main>
      <GlobalStyle />
      <Sidebar>
        <About
          avatar={data.avatar}
          name={data.name}
          profession={data.profession}
          bio={data.bio}
          address={data.address}
          social={data.social}
        />
      </Sidebar>
      <Info>
        <ContactForm />
        <Education data={data.education} />
        <Experience data={data.experience} />
        <Certificates data={data.certificate} />
        <Skills data={data.skills} />
      </Info>
    </Main>
  )
};

export default App;