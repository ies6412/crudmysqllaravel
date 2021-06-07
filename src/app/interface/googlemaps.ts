import { NumberFormatStyle } from "@angular/common";

export interface Marker {
    position: {
      lat: number,
      lng: number,
    };
    title: string;
  }
