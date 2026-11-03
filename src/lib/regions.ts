/**
 * Region display helpers.
 *
 * The directory's `state` / `stateSlug` fields hold the region name for every
 * record: a US state for US records, and the province for Canadian records
 * (which carry `country: 'CA'`). Wherever the UI names a region on its own
 * (page headings, browse grids, breadcrumbs), Canadian regions are labeled
 * with their country, e.g. "Ontario, Canada", so a province is never
 * presented as if it were a US state.
 */
export function regionLabel(state: string, country?: string): string {
  return country === 'CA' ? `${state}, Canada` : state;
}

export function locationRegionLabel(location: { state: string; country?: string }): string {
  return regionLabel(location.state, location.country);
}
