import React, { useState, useEffect } from 'react';
import Parcel from 'single-spa-react/parcel';
import { useHistory } from 'react-router-dom';

const ReactParcel = () => {
  const history = useHistory();
  const [config, setConfig] = useState();

  useEffect(() => {
    System.import('@sampleApp/react-parcel-app').then((data) => {
      setConfig(data)
    }, () => {
      history.push('/error/500')
    })
  }, [history])

  return (
    <>
      {config && (
        <Parcel config={config} />
      )}
    </>
  )
}

export default ReactParcel;
