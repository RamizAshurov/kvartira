import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Asteroid from './asteroid-item';
import ControlPanel from './control-panel';

const Button = styled.button`
  background-color: rgb(248, 102, 0);
  border-radius: 6px;
  display: block;
  font-size: 18px;
  line-height: 1.5;
  margin: 24px auto 0;
  padding: 8px 12px;
  transition: background-color 0.15s ease-in;
  &:hover {
    background-color: rgba(124, 51, 0)
  }
  &.disabled {
    background-color: #dedede;
    color: rgba(0, 0, 0, 0.26);
    cursor: auto;
  }
`

const Container = styled.div`
  margin-bottom: 100px;
  min-width: 320px;
  @media screen and (max-width: 576px) {
    padding: 0 24px 0 48px
  }
`

const AsteroidsList = ({ status, asteroids, getMoreAsteroids, addToCart }) => {
  const location = useLocation()

  return (
      <Container>
          <ControlPanel />
          <div>
          {
            asteroids.map(({id, close_approach_data, estimated_diameter, name, is_potentially_hazardous_asteroid, absolute_magnitude_h, in_cart}) => (
                <Asteroid 
                    key={id} 
                    id={id}
                    approach_date={close_approach_data[0].close_approach_date}
                    miss_distance={close_approach_data[0].miss_distance}
                    diameter={estimated_diameter.meters.estimated_diameter_max}
                    name={name}
                    is_hazardous={is_potentially_hazardous_asteroid}
                    magnitude={absolute_magnitude_h}
                    inCart={in_cart}
                    addToCart={addToCart}
                />
            ))
          }
          {
            location.pathname === "/" && (
              <Button 
                onClick={getMoreAsteroids}
                className={status === "loading" ? "disabled" : ""}
              >Загрузить еще</Button>
            )
          }
          </div>
      </Container>
  )
}

export default AsteroidsList