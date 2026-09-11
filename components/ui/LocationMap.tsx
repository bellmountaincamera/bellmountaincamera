"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import Link from "next/link";

export function LocationMap() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <div className="map-panel">
        {loaded ? <iframe
          title="Map to Bell Mountain Camera inside Wild Goose Vintage and Thrift Store"
          src="https://www.google.com/maps?q=21810%20CA-18%20Unit%20%232%20Apple%20Valley%20CA%2092307&output=embed"
          referrerPolicy="no-referrer"
          className="h-full w-full border-0"
        /> : <div className="map-consent">
          <MapPin size={24} aria-hidden="true" />
          <p>Loading this map connects to Google and may use cookies.</p>
          <button type="button" className="cta-button cta-secondary" onClick={() => setLoaded(true)}>Load Google Map</button>
          <Link className="text-link" href="/cookies">Cookie details</Link>
        </div>}
      </div>
      {loaded && <p className="form-note text-center"><button type="button" className="text-link min-h-11" onClick={() => setLoaded(false)}>Hide Google Map</button>. Hiding the map does not clear Google cookies already stored.</p>}
    </div>
  );
}
