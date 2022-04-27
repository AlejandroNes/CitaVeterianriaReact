import React from 'react'

const Header = () => {
  return (
    <ul className="nav py-3 d-flex justify-content-around" style={{ backgroundColor: "#2c2c54" }}>
      <li className="nav-item">
        <a className="nav-link text-white fw-normal active" aria-current="page" href="#">CITAS PARA MASCOTAS</a>
      </li>
      <div className='d-flex'>
        <li className="nav-item">
          <a className="nav-link text-white fw-light" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white fw-light" href="#">Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white fw-light">Tienda</a>
        </li>
      </div>
    </ul>
  )
}

export default Header