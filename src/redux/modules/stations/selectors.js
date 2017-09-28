const stationsSelector = stations => stations.filter(s => !s.no_available);

export { stationsSelector };
