/* eslint-disable no-param-reassign */
export default ({ store, ssrContext }) => {
  if (ssrContext) {
    ssrContext.nuxt.vuex = { state: JSON.parse(JSON.stringify(store.state)) };
  }
};
