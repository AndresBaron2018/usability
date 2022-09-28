import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import logo from '../../Multimedia/Photos/Logo.png';
import 'react-tabs/style/react-tabs.css';
import './Home.css'
import BasicNotions from '../../components/BasicNotions'
import BibliographicReferences from '../../components/BibliographicReferences'
import EvaluationMethods from '../../components/EvaluationMethods'
import Lifecycle from '../../components/Lifecycle'
import UsabilityAccessibility from '../../components/UsabilityAccessibility'
import UsabilityEngineering from '../../components/UsabilityEngineering'
import WebDesign from '../../components/WebDesign'

const Home = () => {
    return (
        <section alt="control y gestion empresarial">
            <div className="wrapper">
                <div className="one"></div>
                <div className="logo">
                    <h1 className="slogan">Juan Andres Baron Baron</h1>
                    <img src={logo} itemProp="image" alt="gestion empresarial" />
                </div>

                <div className="body">
                    <div className="header">
                        <Tabs className="header-right">
                            <TabList>
                                <Tab className='tap-list aling'>Usabilidad: nociones básicas para los profesionales de la información</Tab>
                                <Tab className='tap-list aling'>Usabilidad y accesibilidad</Tab>
                                <Tab className='tap-list aling'>Ingeniería de usabilidad</Tab>
                                <Tab className='tap-list aling'>Ciclo de vida de la ingeniera de usabilidad</Tab>
                                <Tab className='tap-list aling'>Métodos de evaluación de usabilidad</Tab>
                                <Tab className='tap-list aling'>Diseño web centrado en el usuario</Tab>
                                <Tab className='tap-list aling'>Referencias bibliográficas</Tab>
                            </TabList>

                            <TabPanel>
                                <BasicNotions />
                            </TabPanel>
                            <TabPanel>
                                <UsabilityAccessibility />
                            </TabPanel>
                            <TabPanel>
                                <UsabilityEngineering />
                            </TabPanel>
                            <TabPanel>
                                <Lifecycle />
                            </TabPanel>
                            <TabPanel>
                                <EvaluationMethods />
                            </TabPanel>
                            <TabPanel>
                                <WebDesign />
                            </TabPanel>
                            <TabPanel>
                                <BibliographicReferences />
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;



