import React, { useState, useEffect, useContext } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import mapboxgl from "mapbox-gl"
import StateContext from '../StateContext'
import UpdateContext from '../UpdateContext'

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

function Map(props) {
  const appState = useContext(StateContext)
  const dispatch = useContext(UpdateContext)
  const [viewport, setViewport] = useState({
    longitude: 79.08886,
    latitude: 21.146633,
    width: '33vw',
    height: '90vh',
    zoom: 15,
  })

  // const [posts, setPosts] = useState([]);
  // should call fetch passing the currLocation to get posts
  // in useEffect and pass currLocation as a dependancy

  // If location perms is given to website
  useEffect(() => {
    if ('geolocation' in navigator)
      navigator.geolocation.getCurrentPosition(pos => {
        dispatch({ type: 'setLocation', value: [pos.coords.longitude, pos.coords.latitude] })
        dispatch({ type: 'setCurrLocation', value: [pos.coords.longitude, pos.coords.latitude] })
        setViewport({
          longitude: pos.coords.longitude,
          latitude: pos.coords.latitude,
          width: '100%',
          height: '90vh',
          zoom: 15,
        })
      })
    // console.log(appState)
  }, [])

  const handleDblClick = evt => {
    dispatch({ type: 'setCurrLocation', value: evt.lngLat })

    console.table(appState)
    // setCurrLocation(evt.lngLat)
  }
  return (
    <div>
      <ReactMapGL className='mt-1 mr-9 map' {...viewport} onDblClick={handleDblClick} doubleClickZoom={false} mapStyle={'mapbox://styles/dna5769/ckn4km6x31sob17nzox3gjzdz'} onViewportChange={viewport => setViewport(viewport)} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN}>
        <Marker latitude={appState.currLocation[1]} longitude={appState.currLocation[0]}>
          <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='currentColor' className='bi bi-cursor' viewBox='0 0 16 16'>
            <path d='M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z' />
          </svg>
        </Marker>
        {/* We can display the locations of the nearby posts
            as well here */}
      </ReactMapGL>
    </div>
  )
}

export default Map
