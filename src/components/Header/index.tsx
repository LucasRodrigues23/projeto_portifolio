import { HeaderStyled } from "./styles"
import Button from '../../assets/button.png'
import Logo2 from '../../assets/logo2.png'


export const Header = () => {
    return (
        <>
            <HeaderStyled>
                <div>
                    <button onClick={() => console.log('abrir menu')}><img src={Button} alt="" /></button>
                    <img src={Logo2} alt="Logo" />
                </div>
            </HeaderStyled>
        </>
    )
}