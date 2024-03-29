import styled from "@emotion/styled"
import PropTypes from "prop-types"

const Resultado = styled.div`
  color:#FFF;
  font-family: "Lato", sans-serif;

  display:flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`

const Imagen = styled.img`
  display:block;
  width: 110px;
`

const Texto = styled.p`
  font-size: 18px;
  span{
    font-weight: 700;
  }

`

const Precio = styled.p`
  font-size: 24px;
  span{
    font-weight: 700;
  }
`

function Cotizacion({resultado}) {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <div>
        <Resultado>
            <Imagen 
              src={`https://cryptocompare.com/${IMAGEURL}`} 
              alt="Imagen cripto" 
            />
            <div>
              <Precio>El precio es de: <span>{PRICE}</span></Precio>
              <Texto>El precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
              <Texto>El precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
              <Texto>Variacion del precio en las ultimas 24H: <span>{CHANGEPCT24HOUR}</span></Texto>
              <Texto>Ultima actualizacion: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Resultado>
    </div>
  )
}

Cotizacion.propTypes = {
  resultado : PropTypes.object
}

export default Cotizacion