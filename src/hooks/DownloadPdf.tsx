import { saveAs } from 'file-saver';
import cv from '../../src/assets/cv.pdf'

const handleDownloadPdf = () => {
    const pdfUrl = cv; 
    const pdfName = 'Galit-Bixio-CV.pdf'; 

    saveAs(pdfUrl, pdfName);
  };
  
  export default handleDownloadPdf