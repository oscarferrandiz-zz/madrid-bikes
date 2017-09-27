const stationsSelector = (stations, filters) => (
  stations.filter(s => {
    const allow =
    (s.dock_bikes > 0 && filters.dock_bikes) ||
    (s.dock_bikes === 0 && !filters.dock_bikes) ||
    (s.free_bases > 0 && filters.free_bases) ||
    (s.free_bases === 0 && !filters.free_bases);

    if (allow) return s;
  })
);

export { stationsSelector };
