const dataDefaults = {
  country: 'uk',
  pretty: '1',
  encoding: 'json',
  listing_type: 'buy',
  action: 'search_listings',
};

export default function urlForQueryAndPage(key, value, page) {
  const data = {
    ...dataDefaults,
    [key]: value,
    page,
  };

  const querystring = Object.keys(data)
    .map(key => `${key}=${encodeURIComponent(data[key])}`)
    .join('&');

  return 'https://api.nestoria.co.uk/api?' + querystring;
}
