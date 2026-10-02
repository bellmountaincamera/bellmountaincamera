import Link from "next/link";

export function LocationMap() {
  return (
    <div>
      <div className="map-panel">
        <iframe
          title="Map to Bell Mountain Camera inside Wild Goose Vintage and Thrift Store"
          src="https://www.google.com/maps?q=21810%20CA-18%20Unit%20%232%20Apple%20Valley%20CA%2092307&output=embed"
          referrerPolicy="no-referrer"
          loading="eager"
          className="h-full w-full border-0"
        />
      </div>
      <p className="form-note text-center">Google Maps may use cookies. <Link className="text-link" href="/cookies">Cookie details</Link></p>
    </div>
  );
}
