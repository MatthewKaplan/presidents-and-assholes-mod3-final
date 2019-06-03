export const allPresidents = presidents => ({
  type: "ALL_PRESIDENTS",
  presidents
});

export const isLoading = loading => ({
  type: "IS_LOADING",
  loading
});

export const hasErrored = error => ({
  type: "HAS_ERRORED",
  error
});
