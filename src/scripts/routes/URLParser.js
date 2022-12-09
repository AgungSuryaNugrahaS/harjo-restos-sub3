export default {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      action: urlsSplits[3] || null,
    };
  },

  _urlCombiner(splitedUrl) {
    const resource = splitedUrl.resource ? `/${splitedUrl.resource}` : '/';
    const id = splitedUrl.id ? '/:id' : '';
    const action = splitedUrl.action ? `/${splitedUrl.action}` : '';

    return resource + id + action;
  },
};
