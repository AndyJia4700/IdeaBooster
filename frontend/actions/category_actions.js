import * as CategoriesUtil from "../util/category_util";

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";

export const receiveCategories = (categories) => ({
  type: RECEIVE_CATEGORIES,
  categories,
});

export const fetchCategories = () => dispatch => (
    CategoriesUtil.fetchCategories()
        .then(categories => dispatch(receiveCategories(categories)))
);