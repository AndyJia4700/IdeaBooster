export const fetchLocations = () =>
  $.ajax({
    url: "/api/locations",
  });
