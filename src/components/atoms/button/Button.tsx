import { ButtonStyle } from './ButtonStyle'

interface ButtonProps {
    label: string;
    type?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
    <>
        <ButtonStyle onClick={onClick}> {label} </ButtonStyle>
    </>
)

export default Button