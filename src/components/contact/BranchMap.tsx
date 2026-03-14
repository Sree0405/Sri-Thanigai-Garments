"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useState } from "react";
import L from "leaflet";
import { branches } from "@/src/data/branches";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

function FlyToLocation({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  map.flyTo([lat, lng], 14, { duration: 1.5 });
  return null;
}

export default function BranchMap() {

  const [activeBranch, setActiveBranch] = useState(branches[0]);

  return (
    <section className="py-24 px-4 bg-muted/40">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_340px] gap-8">

        {/* MAP */}

        <div className="rounded-3xl overflow-hidden border border-gray-200 h-[450px] shadow-lg">

          <MapContainer
            center={[
              activeBranch.coordinates.lat,
              activeBranch.coordinates.lng
            ]}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >

            <TileLayer
              attribution="&copy; OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <FlyToLocation
              lat={activeBranch.coordinates.lat}
              lng={activeBranch.coordinates.lng}
            />

            {branches.map((branch) => (

              <Marker
                key={branch.id}
                position={[
                  branch.coordinates.lat,
                  branch.coordinates.lng
                ]}
                icon={markerIcon}
              >
<Popup>
  <div className="space-y-2 text-sm">

    <strong className="text-gray-900 block">
      {branch.name}
    </strong>

    <p className="text-gray-600">
      {branch.address.street}, {branch.address.area}
    </p>

    <p className="text-gray-600">
      {branch.address.city}, {branch.address.state}
    </p>

    <p className="text-gray-600">
      📞 {branch.contact.phone.join(", ")}
    </p>

    <p className="text-gray-600">
      ⏰ Today: {branch.hours.monday}
    </p>

    <p className="text-gray-600">
      Manager: {branch.manager}
    </p>

    <a
      href={branch.googleMaps}
      target="_blank"
      className="text-primary font-medium"
    >
      Get Directions →
    </a>

  </div>
</Popup>

              </Marker>

            ))}

          </MapContainer>

        </div>

        {/* LOCATION LIST */}

        <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-6 space-y-4">

          <h3 className="text-lg font-semibold text-gray-900">
            Our Branches
          </h3>

          {branches.map((branch) => (
<button
  key={branch.id}
  onClick={() => setActiveBranch(branch)}
  className={`
  w-full text-left p-4 rounded-xl border transition
  ${
    activeBranch.id === branch.id
      ? "border-primary bg-primary/5"
      : "border-gray-200 hover:border-primary"
  }
  `}
>

  <p className="font-medium text-gray-900">
    {branch.name}
  </p>

  <p className="text-sm text-gray-500">
    {branch.address.area}, {branch.address.city}
  </p>

  <p className="text-xs text-gray-500 mt-1">
    📞 {branch.contact.phone[0]}
  </p>

  <p className="text-xs text-gray-500">
    ⏰ {branch.hours.monday}
  </p>

</button>

          ))}

        </div>

      </div>

    </section>
  );
}