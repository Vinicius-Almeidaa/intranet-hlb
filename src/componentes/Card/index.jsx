import Protheus from './assets/protheus.jpg'
import Qualyteam from './assets/qualyteam.PNG'
import './styles.css';

export default function Card() {
    return (
        <article className="card">
            <div className="card__conteudo">
                <div className="conteudo__rodape">
                    <ul className='apps-grid'>
                        <li>
                            <a href="https://minebea.qualyteam.com.br/login/Login.aspx" target="_blank" rel="noopener noreferrer">
                                <img src={Qualyteam} alt="sistema do SGI" />
                            </a>
                            <span>QualyTeamm</span>
                        </li>
                        <li>
                            <a href="http://srvhl7:1236/webapp/" target="_blank" rel="noopener noreferrer">
                                <img src={Protheus} alt="sistema protheus base oficial" />
                            </a>
                            <span>Protheus Base Oficial</span>
                        </li>
                       <li>
                            <a href="" target="_blank" rel="noopener noreferrer">
                                <img src={Protheus} alt="sistema protheus base teste" />
                            </a>
                            <span>Protheus Base Teste</span>
                        </li>
                      <li>
                            <a href="" target="_blank" rel="noopener noreferrer">
                                <img src={Protheus} alt="sistema protheus" />
                            </a>
                            <span>Protheus</span>
                        </li>
                    </ul>
                </div>
            </div>
        </article>
    );
}



