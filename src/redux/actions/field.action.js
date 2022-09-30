export const SET_FIELD_CHART_LIST = '[FIELD_STORE] Set field chart list';
export const SET_FIELD_VOLT_CHART_LIST = '[FIELD_STORE] Set field volt chart list';

export const GET_FIELD_CHART_LIST = '[FIELD_STORE] Get field chart list';
export const requestFieldChartList = (field, onSuccess, onError) => ({
  type: GET_FIELD_CHART_LIST,
  field,
  onSuccess,
  onError
});

export const REQUEST_PROBE_CALIBRATION = '[FIELD_STORE] Request probe calibration';
export const requestChartProbeCalibration = (field, onSuccess, onError) => ({
  type: REQUEST_PROBE_CALIBRATION,
  field,
  onSuccess,
  onError
});

export const REQUEST_FIELD_VOLT_CHART_LIST = '[FIELD_STORE] Request field volt chart list';
export const requestFieldVoltChartList = (field, onSuccess, onError) => ({
  type: REQUEST_FIELD_VOLT_CHART_LIST,
  field,
  onSuccess,
  onError
});
