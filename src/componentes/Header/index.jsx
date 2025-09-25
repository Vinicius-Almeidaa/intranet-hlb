import './styles.css'
import Logo from './assets/logo.png'

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="brand">
                    <img className='logo' src={Logo} alt="Minebea Intraet" />
                </div>

                {/* <div className="search">
          <input placeholder="Digite o que você procura..." />
          <button style={{padding:'10px 14px', border:'1px solid #e5e7eb', background:'#fff', borderRadius:10, cursor:'pointer'}}>🔍</button>
        
        </div> */}
            </div>
        </header>
    )
}
