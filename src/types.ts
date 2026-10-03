/**
 * Technical types and data structures for StabiX VenturiFlow Industrial Air Gun
 */

export interface Hotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  subtitle: string;
  description: string;
  metric?: string;
  spec?: string;
}

export interface SpecificationItem {
  category: string;
  parameter: string;
  value: string;
  baseline: string;
  variance: string;
  note?: string;
}

export interface SimulationResult {
  metric: string;
  conventional: string;
  redesigned: string;
  change: string;
  unit: string;
  advantage: string;
}

export interface BlueprintCallout {
  id: string;
  title: string;
  dimension: string;
  description: string;
  calloutNumber: string;
}
