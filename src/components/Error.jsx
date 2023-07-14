import PropTypes from "prop-types"
import styled from '@emotion/styled'

const Texto = styled.div`
    background-color: #B7322C;
    color: #FFF;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: "Lato", sans-serif;
    font-weight: 700;
    text-align: center;
`

function Error({children}) {
  return (
    <Texto>{children}</Texto>
  )
}

Error.propTypes = {
    children: PropTypes.any
}

export default Error