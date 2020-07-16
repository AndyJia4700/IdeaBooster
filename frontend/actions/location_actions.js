import * as LocationsUtil from "../util/location_util";

export const RECEIVE_LOCATION = "RECEIVE_LOCATION";

const receiveLocations = (Locations) => ({
  type: RECEIVE_LOCATION,
  Locations,
});

export const fetchLocations = () => dispatch =>(
    LocationsUtil.fetchLocations()
        .then(Locations => dispatch(receiveLocations(Locations)))
);
