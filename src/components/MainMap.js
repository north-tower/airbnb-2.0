import { useState } from 'react';
import Map, {Marker, Popup} from 'react-map-gl';
import { getCenter } from 'geolib';
import 'mapbox-gl/dist/mapbox-gl.css';

function MainMap({searchResults}) {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewState, setViewState] = useState({
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });

  return ( 
    <Map
      {...viewState}
      onMove={evt => setViewState(evt.viewState)}
      style={{width: 800, height: 2000}}
      mapStyle="mapbox://styles/miki007/clgcabeu3001m01mmogi3u0wv"
      mapboxAccessToken={process.env.mapbox_key}
    >
      {searchResults.map(result => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            onClick={() => {
              setSelectedLocation(result);
            }}
          >
            <p
              role='img'
              className="cursor-pointer text-2xl animate-bounce"
              aria-label='push-pin'
            >📌</p>
          </Marker>

          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              <p>{result.title}</p>
            </Popup>
          ) : ( false ) }
        </div>
      ))}
    </Map>
  );
}

export default MainMap;
