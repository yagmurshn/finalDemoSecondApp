import axios from 'axios';
import cloneDeep from 'lodash.clonedeep';

export default {
  namespaced: true,
  state: {
    apiMapping: {},
  },
  mutations: {
    SET_ONLOAD(state, payload) {
      state.apiMapping = payload;
    },
  },
  actions: {
    fetchOnload({ commit }) {
      const fullUrl = `${process.env.VUE_APP_API_ENDPOINT}/execute/onload/${process.env.VUE_APP_APP_ID}?runtime=true`;
      axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
      return axios
        .get(fullUrl)
        .then((response) => {
          const resp = response.data.data;
          if (resp) commit('SET_ONLOAD', resp);
          return resp;
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error('Error on fetchOnload', err);
          throw new Error('Execute onload could not be sent!');
        });
    },
    saveRecord(context, payload) {
      const url = 'https://api.airtable.com/v0/appowVLaDxd4jCBPI/tbl0rHvw7lOWPcPjH';
      axios.defaults.headers.common.Authorization = 'Bearer patYrMLMZW8KWfcI4.0888aac59fa50c9f4f5107d94e60e3f66501bf79d85b24d6333d156f17df9446';
      axios.defaults.headers.common['Content-Type'] = 'application/json';
      return axios
        .post(url, payload)
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log(response);
          return true;
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error('Error on saveRecord', err);
          throw new Error('Record could not be saved!');
        });
    },
  },
  getters: {
    getApiMappingWithChain: (state) => (completion) => {
      const regex = /(?:{{\s*)?functions\.([\w.]+)(?:\s*}})?/;
      const match = completion.match(regex);
      if (!match || !match[1]) {
        return null;
      }
      const chain = match[1];
      const keys = chain.split('.');
      const apiName = keys[0];
      let value = cloneDeep(state.apiMapping?.[apiName]);
      if (!value || !value?.data) return null;
      for (const key of keys.slice(1)) {
        if (!value || !value?.hasOwnProperty(key)) {
          return null;
        }
        value = value[key];
      }
      return value;
    },
  },
};
