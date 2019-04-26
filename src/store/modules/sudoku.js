const state = {
  VALUES: [
    // 2 x 2
    [
      { o: '4' },
      { o: '3', default: true },
      { o: '2', default: true },
      { o: '1', default: true }
    ],
    [
      { o: '1', default: true },
      { o: '2', default: true },
      { o: '3' },
      { o: '4', default: true }
    ],
    [
      { o: '3', default: true },
      { o: '4', default: true },
      { o: '1', default: true },
      { o: '2' }
    ],
    [
      { o: '2', default: true },
      { o: '1' },
      { o: '4', default: true },
      { o: '3', default: true }
    ]
    // 3 X 3
    // 1
    /*[
      { o: '7' }, // o -> original
      { o: '2', default: true },
      { o: '6', default: true },
      { o: '4' },
      { o: '9' },
      { o: '3' },
      { o: '8', default: true },
      { o: '1', default: true },
      { o: '5' }
    ],
    // 2
    [
      { o: '3', default: true },
      { o: '1' },
      { o: '5' },
      { o: '7', default: true },
      { o: '2' },
      { o: '8', default: true },
      { o: '9' },
      { o: '4' },
      { o: '6', default: true }
    ],
    // 3
    [
      { o: '4', default: true },
      { o: '8' },
      { o: '9' },
      { o: '4' },
      { o: '5', default: true },
      { o: '1' },
      { o: '2' },
      { o: '3' },
      { o: '7', default: true }
    ],
    // 4
    [
      { o: '8' },
      { o: '5', default: true },
      { o: '2' },
      { o: '1', default: true },
      { o: '4' },
      { o: '7', default: true },
      { o: '6' },
      { o: '9', default: true },
      { o: '3' }
    ],
    // 5
    [
      { o: '6' },
      { o: '7' },
      { o: '3', default: true },
      { o: '9', default: true },
      { o: '8' },
      { o: '5', default: true },
      { o: '1', default: true },
      { o: '2' },
      { o: '4' }
    ],
    // 6
    [
      { o: '9' },
      { o: '4', default: true },
      { o: '1' },
      { o: '3', default: true },
      { o: '6' },
      { o: '2', default: true },
      { o: '7' },
      { o: '5', default: true },
      { o: '8' }
    ],
    // 7
    [
      { o: '1', default: true },
      { o: '9' },
      { o: '4' },
      { o: '8' },
      { o: '3', default: true },
      { o: '6' },
      { o: '5' },
      { o: '7' },
      { o: '2', default: true }
    ],
    // 8
    [
      { o: '5', default: true },
      { o: '6' },
      { o: '7' },
      { o: '2', default: true },
      { o: '1' },
      { o: '4', default: true },
      { o: '3' },
      { o: '8' },
      { o: '9', default: true }
    ],
    // 9
    [
      { o: '2' },
      { o: '3', default: true },
      { o: '8', default: true },
      { o: '5' },
      { o: '7' },
      { o: '9' },
      { o: '4', default: true },
      { o: '6', default: true },
      { o: '1' }
    ]*/
  ]
};

const getters = {
  VALUES: state => state.VALUES
}

const mutations = {

  UPDATE_VALUE (state, { i, j, val, vm }) { // Update with user changes
    state.VALUES[i][j] = Object.assign({}, val)

    console.log({ VALUES: state.VALUES })
  }
};

const actions = {

  UPDATE_VALUE ({ commit }, { i, j, val, vm }) {
    console.log({ UPDATE_VALUES: { i, j, val, vm } })

    // UDPATE IN DB

    commit('UPDATE_VALUE', { i, j, val, vm })
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
