/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');

// TODO - add other action types -> (DONE)
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');
export const CHANGE_TAGS = createActionName('CHANGE_TAG');


// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });

// TODO - add other action creators ->(DONE)
export const changeDuration = payload => ({payload, type:CHANGE_DURATION});
export const changeTags = payload => ({payload, type: CHANGE_TAGS});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types -> (DONE)
    case CHANGE_DURATION:
      return {
        ...statePart,
        duration: action.payload,
      };
    case CHANGE_TAGS:
      return {
        ...statePart,
        chosenTags: action.payload,
      };
    default:
      return statePart;
  }
}
