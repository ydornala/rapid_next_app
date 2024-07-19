import React, { useEffect, useRef } from "react";
import { mountRootParcel } from "single-spa";

const MountParcel = ({ configUrl }) => {
  const parcelDiv = useRef();

  useEffect(() => {
    let parcel;

    System.import(configUrl)
      .then((parcelConfig) => {
        parcel = mountRootParcel(parcelConfig, {
          domElement: parcelDiv.current,
        });
      })
      .catch((err) => {
        console.error(`Failed to load parcel: ${err.message}`);
      });

    return () => {
      if (parcel) {
        parcel.unmount();
      }
    };
  }, [configUrl]);

  return <div ref={parcelDiv}></div>;
};

export default MountParcel;
