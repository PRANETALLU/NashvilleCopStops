import React, { useState } from 'react';

function GeoVisualization() {
    const [showExternalHTML, setShowExternalHTML] = useState(false);


    return (
        <div className="GraphVisualization">
            <iframe
              title="External HTML"
              src={`${process.env.PUBLIC_URL}/traffic_stops_2012.html`}
              style={{ width: '100%', height: '800px', border: 'none' }}
            ></iframe>
        </div>
      );
}

export default GeoVisualization;