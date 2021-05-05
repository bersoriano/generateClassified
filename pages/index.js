import React from 'react';
import Head from 'next/head'
import CustomModal from '../components/Modal/Modal';
import Classified from '../components/Classified';
export default function Home() {
  const startConfig = {
    shortDescription: true,
    longDescription: false,
    date: true,
    options: true,
    checkbox: false,
    selection: false,
    slider: false,
    publish: false
  }
  const detailsConfig = {
    shortDescription: false,
    longDescription: true,
    date: false,
    options: false,
    checkbox: true,
    selection: true,
    slider: true,
    publish: false    
  }
  const summaryConfig = {
    shortDescription: false,
    longDescription: false,
    date: false,
    options: false,
    checkbox: false,
    selection: true,
    slider: false,
    publish: true    
  }    
  const [step1, setStep1] = React.useState(
    {
      flowName: "Start listing",
      title: "Sample title1",
      shortDescription: "Describe you item",
      description: "Sample description",
      date: "18/05/2021",
      option: "Male",
      active: true,
      age: 18,
      size: 200,
      config: startConfig
  });
  const [step2, setStep2] = React.useState(
    {
      flowName: "Add details",      
      title: "Sample title2",
      shortDescription: "Describe you item",      
      description: "Sample description",
      date: "18/05/2021",
      option: "Male",
      active: true,
      age: 18,
      size: 200,
      config: detailsConfig      
  });  
  const [step3, setStep3] = React.useState(
    {
      flowName: "Summary and Publish",      
      title: "Sample title2",
      shortDescription: "Describe you item",
      description: "Sample description",
      date: "18/05/2021",
      option: "Male",
      active: true,
      age: 18,
      size: 200,
      config: summaryConfig      
  });    
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Create a new classified
        </h1>
        <div className="modal-container">
          <CustomModal
            modalConfig={step1}>
          </CustomModal>
          <CustomModal 
            modalConfig={step2}>
          </CustomModal>  
          <CustomModal 
            modalConfig={step3}>
          </CustomModal>                  
        </div>
        <Classified ></Classified>
      </main>

      <style jsx>{`
        .classified {
          border: 1px solid silver;
          padding: 1rem 2rem;
          margin: 2rem;
          min-width: 30vw;
          max-width: 40vw;
          min-height: 30vh;
          border-radius: 1rem;
        }
        .modal-container {
          flex-direction: row;
          display: flex;
        }
        .modal-container div {
          margin: 1rem;
          border: 1px solid red;
        }
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
        .MuiFormControl-root {
          width: 100%;
        }
        .MuiButton-containedPrimary {
          margin: 1rem;
        }
      `}</style>
    </div>
  )
}
