/**
 * Generated by orval v6.5.3 🍺
 * Do not edit manually.
 * Navtrack.Api
 * OpenAPI spec version: 1.0
 */
import type { LocationModel } from './locationModel';

export interface TripModel {
  startLocation: LocationModel;
  endLocation: LocationModel;
  locations: LocationModel[];
  distance: number;
  duration: number;
  maxSpeed?: number | null;
  averageSpeed?: number | null;
  averageAltitude?: number | null;
}
