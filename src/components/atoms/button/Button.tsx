import { ButtonStyle } from './ButtonStyle'
import { saveAs } from 'file-saver';

const handleDownloadPdf = () => {
    const pdfUrl = '/ruta/al/archivo.pdf'; // reemplaza esto con la URL de tu archivo PDF
    const pdfName = 'nombre-del-archivo.pdf'; // reemplaza esto con el nombre que quieres darle al archivo
  
    saveAs(pdfUrl, pdfName);
  };
  
interface ButtonProps {
    label: string;
    type?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ label, type }) => (
    <>
        <ButtonStyle> {label} </ButtonStyle>
    </>
)

export default Button