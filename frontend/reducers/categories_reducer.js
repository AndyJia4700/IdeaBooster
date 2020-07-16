import {
  RECEIVE_CATEGORIES,
  RECEIVE_CATEGORIE
} from "../actions/category_actions";

const categoriesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CATEGORIES:
        return Object.assign({}, state, action.categories);
    case RECEIVE_CATEGORIE:
        return Object.assign({}, state, {[action.categoryId]: action.category});
    default:
        return state;
  }
};

export default categoriesReducer;
