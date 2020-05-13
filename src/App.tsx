import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { VerifyContract } from "./components/verify-contract/VerifyContract";
import { ContractFetcher } from "./components/contract-fetcher/ContractFetcher";
// import { Configuration } from './components/configuration/Configuration';
import { remixClient } from './remix/RemixClient';
import { Accordion, AccordionElement } from './components/common';


const App: React.FC = () => {

    useEffect(() => {
        const load = async () => {
            try {
                await remixClient.createClient();
            } catch(err) {
                console.log(err)
            }
        }
        load()
    }, [])

  return (
      <div id="wrapper">
        <Container>
            <main role="main">
                <Accordion>
                    <AccordionElement
                        headerText="Contract Fetcher"
                        iconClass="fa fa-refresh"
                        eventKey="0"> 
                        <ContractFetcher/>
                    </AccordionElement>
                    <AccordionElement
                        headerText="Verifier"
                        iconClass="fa fa-refresh"
                        eventKey="1"> 
                        <VerifyContract/>
                    </AccordionElement>
                </Accordion>
            </main>    
        </Container>
      </div>
  )
}

export default App;