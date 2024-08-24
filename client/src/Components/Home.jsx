import React , {useEffect , useState } from 'react';
import '../index.css'; // Ensure this line is present to import Tailwind CSS
import MainCard from './MainCard';
import CarousalCard from './CarousalCard';
import xml2js from 'xml2js';
import { XMLParser } from 'fast-xml-parser';
const parser = new XMLParser();

export default function Home() {
  
  const [articles , setArticles] = useState([]);   
  const [hinduData , sethinduData] = useState({});
  const [toiData , setToiData] = useState({});
  const [ectData , setEctData] = useState({});
  const [hindustanTimesData , setHindustanTimesData] = useState({});

  useEffect(() => {   
  fetchNewsTOI();
  fetchNewsTheHindu();
  fetchNews();
  fetchNewsTheECT();
  fetchNewsHindustanTimes();
  } , [])


  async function fetchNewsHindustanTimes(){
    try{
      const response = await fetch('http://localhost:3000/proxyforHT')
      const xml = await response.text();
    //   console.log('xml is ]]]]]]]]]]]]] ',xml)
      const data = await convertXmlToJson(xml)
      const keys = Object.keys(data);
      if (keys.length > 0) {
        delete data[keys[0]];
      }
      setHindustanTimesData(data);
     }catch(error){
       console.log(error);
     }
    }

  async function fetchNewsTheECT(){
    try{
      const response = await fetch('http://localhost:3000/proxyforECT')
      const xml = await response.text();
    //   console.log('xml is ]]]]]]]]]]]]] ',xml)
      const data = await convertXmlToJson(xml)
      const keys = Object.keys(data);
      if (keys.length > 0) {
        delete data[keys[0]];
      }
      setEctData(data);
     }catch(error){
       console.log(error);
     }
  }
  async function fetchNews(){
    try{
     const response = await fetch('https://newsdata.io/api/1/news?apikey=pub_513913ca8f16b3bf5b85ba8ababdc83156ad4&country=in&language=en&category=technology');
     const data = await response.json();
     const dataArray = data.results.slice(1,11);
     setArticles(dataArray);
    }catch(error){
      console.log(error);
    }
}

async function fetchNewsTheHindu(){
  try{
   const response = await fetch('http://localhost:3000/proxy')
   const xml = await response.text();

   const data = await convertXmlToJson(xml)
   const keys = Object.keys(data);
   if (keys.length > 0) {
     delete data[keys[0]];
   }
    sethinduData(data);
  }catch(error){
    console.log(error);
  }
}

async function fetchNewsTOI(){
  try{
    const response = await fetch('http://localhost:3000/proxyforTOI')
    const xml = await response.text();
  //   console.log('xml is ]]]]]]]]]]]]] ',xml)
    const data = await convertXmlToJson(xml)
    const keys = Object.keys(data);
    if (keys.length > 0) {
      delete data[keys[0]];
    }
    setToiData(data);
   }catch(error){
     console.log(error);
   }
}

function convertXmlToJson(xml) {
    try {
      const jsonObj = parser.parse(xml);
      return jsonObj;
    } catch (err) {
      console.error('Error parsing XML:', err);
      throw err;
    }
  }
  

    return (
     
<div className='flex flex-col justify-center min-h-screen bg-customPurple px-20'>

    <h1 className='md:ml-20 sm:justify-center text-4xl font-bold mt-10 mb-5  text-black'>Hot Topics</h1>
 
         <CarousalCard  articles={articles}/>
           
            <h1 className='md:ml-20 text-4xl font-bold mt-10 mb-5 text-black'>Latest News</h1>

<div className='relative flex flex-wrap gap-4' >
            {hinduData && hinduData.rss && hinduData.rss.channel && <MainCard toiArticles={hinduData.rss.channel} heading="The Hindu" />}
            {toiData && toiData.rss && toiData.rss.channel && <MainCard toiArticles={toiData.rss.channel} heading="Times of India"/>}
            {ectData && ectData.rss && ectData.rss.channel && <MainCard toiArticles={ectData.rss.channel} heading="The Economic Times"/>}
          {hindustanTimesData && hindustanTimesData.rss && hindustanTimesData.rss.channel && <MainCard toiArticles={hindustanTimesData.rss.channel} heading="Hindustan Times"/>}
        </div>
        </div>
    );
}