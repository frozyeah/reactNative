const appReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'GET_MODE': {
      return ({
        ...state,
        nightMode: state.nightMode
      });
    }
    case 'CHANGE_MODE': {
      return ({
        ...state,
        nightMode: action.data
      })
    }
    case 'GET_PLANS': {
      return ({
        ...state,
        plannerList: state.plannerList
      })
    }
    case 'CHANGE_PLANS': {
      return ({
        ...state,
        plannerList: action.data
      })
    }
  }
  return state;
}

export default appReducer