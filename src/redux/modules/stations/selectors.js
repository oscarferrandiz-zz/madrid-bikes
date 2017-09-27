const stationsSelector = (stations, filter) => (filter === 'all' ? stations : stations.filter(s => !!s[filter]));

export { stationsSelector };
