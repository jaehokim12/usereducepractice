export const indexInitialState = {
  text: '기본값',
  count: 0,
};

export const indexReducer = (state, action) => {
  switch (action.type) {
    case 'changeTokor': {
      return {
        ...state,
        text: '안녕하세요',
      };
    }
    case 'changeToEng': {
      return {
        ...state,
        text: 'hello',
      };
    }
    case 'minusCount': {
      return {
        ...state,
        count: state.count - 1,
      };
    }

    case 'plusCount': {
      return {
        ...state,
        count: state.count + 1,
      };
    }
  }
