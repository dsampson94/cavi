import React from 'react';
import { arrayOf, node, oneOfType } from 'prop-types';

import { retrieveUserClientListFromLocalStorage } from '../../../tools/storage/localStorage';

import { CLIENT_FIELDS, FIELD_CHARTS, FIELD_SETUP, FIELD_TEMPERATURES } from '../../../tools/general/system-variables.util';
import { mappedUserData } from '../side-bar/Sidebar.util';

import TopBar from '../top-bar/TopBar';
import SideBar from '../side-bar/SideBar';

import './content-container.scss';

const ContentContainer = ({
                            children,
                            view,
                            clientRequestParams,
                            mappedFieldList,
                            setActiveLoadPeriod,
                            setActiveFieldName,
                            showChartsSideBar,
                            showClientsSideBar,
                            showSetupSideBar,
                            setShowSetupSideBar,
                            setShowClientsSideBar
                          }) => {
  switch (view) {
    case CLIENT_FIELDS:
      return <ClientFieldsContentContainer children={ children }
                                           showClientsSideBar={ showClientsSideBar }
                                           setShowClientsSideBar={ setShowClientsSideBar }
                                           clientRequestParams={ clientRequestParams }
                                           view={ view } />;

    case FIELD_CHARTS:
      return <FieldChartsContentContainer children={ children }
                                          showChartsSideBar={ showChartsSideBar }
                                          mappedFieldList={ mappedFieldList }
                                          clientRequestParams={ clientRequestParams }
                                          setActiveLoadPeriod={ setActiveLoadPeriod }
                                          setActiveFieldName={ setActiveFieldName }
                                          view={ view } />;
    case FIELD_TEMPERATURES:
      return <FieldTemperaturesChartsContentContainer children={ children }
                                                      showChartsSideBar={ showChartsSideBar }
                                                      mappedFieldList={ mappedFieldList }
                                                      clientRequestParams={ clientRequestParams }
                                                      setActiveLoadPeriod={ setActiveLoadPeriod }
                                                      setActiveFieldName={ setActiveFieldName }
                                                      view={ view } />;
    case FIELD_SETUP:
      return <FieldSetupContentContainer children={ children }
                                         showSetupSideBar={ showSetupSideBar }
                                         setShowSetupSideBar={ setShowSetupSideBar }
                                         clientRequestParams={ clientRequestParams }
                                         setActiveFieldName={ setActiveFieldName }
                                         view={ view } />;
  }
};

ContentContainer.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired
};

export default ContentContainer;

const ClientFieldsContentContainer = ({ children, view, showClientsSideBar, setShowClientsSideBar, clientRequestParams }) => {

  const userAccount = retrieveUserClientListFromLocalStorage();
  const mappedUser = mappedUserData(userAccount);

  return (
    <div className="content-container">
      <TopBar showSideBar={ showClientsSideBar }
              setShowSideBar={ setShowClientsSideBar }
              clientRequestParams={ clientRequestParams }
              view={ view } />

      <div className="content-container__screen">
        <SideBar showSideBar={ showClientsSideBar }
                 mappedUserData={ mappedUser }
                 setShowSideBar={ setShowClientsSideBar }
                 view={ view } />
        { children }
      </div>
    </div>
  );
};

ClientFieldsContentContainer.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired
};

const FieldChartsContentContainer = ({
                                       children,
                                       view,
                                       showChartsSideBar,
                                       clientRequestParams,
                                       mappedFieldList,
                                       setActiveLoadPeriod,
                                       setActiveFieldName
                                     }) => {

  const userAccount = retrieveUserClientListFromLocalStorage();
  const mappedUser = mappedUserData(userAccount);

  return (
    <div className="content-container">
      <TopBar clientRequestParams={ clientRequestParams }
              mappedFieldList={ mappedFieldList }
              view={ view } />

      <div className="content-container__screen">
        <SideBar showSideBar={ showChartsSideBar }
                 mappedUserData={ mappedUser }
                 mappedFieldList={ mappedFieldList }
                 setActiveLoadPeriod={ setActiveLoadPeriod }
                 setActiveFieldName={ setActiveFieldName }
                 view={ view } />
        { children }
      </div>
    </div>
  );
};

FieldChartsContentContainer.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired
};

const FieldTemperaturesChartsContentContainer = ({
                                                   children,
                                                   view,
                                                   showChartsSideBar,
                                                   clientRequestParams,
                                                   mappedFieldList,
                                                   setActiveLoadPeriod,
                                                   setActiveFieldName
                                                 }) => {

  const userAccount = retrieveUserClientListFromLocalStorage();
  const mappedUser = mappedUserData(userAccount);

  return (
    <div className="content-container">
      <TopBar clientRequestParams={ clientRequestParams }
              mappedFieldList={ mappedFieldList }
              view={ view } />

      <div className="content-container__screen">
        <SideBar showSideBar={ showChartsSideBar }
                 mappedUserData={ mappedUser }
                 mappedFieldList={ mappedFieldList }
                 setActiveLoadPeriod={ setActiveLoadPeriod }
                 setActiveFieldName={ setActiveFieldName }
                 view={ view } />
        { children }
      </div>
    </div>
  );
};

FieldTemperaturesChartsContentContainer.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired
};

const FieldSetupContentContainer = ({
                                      children,
                                      view,
                                      showSetupSideBar,
                                      setShowSetupSideBar,
                                      clientRequestParams,
                                      setActiveLoadPeriod,
                                      setActiveFieldName
                                    }) => {

  const userAccount = retrieveUserClientListFromLocalStorage();
  const mappedUser = mappedUserData(userAccount);

  return (
    <div className="content-container">
      <TopBar clientRequestParams={ clientRequestParams }
              view={ view } />

      <div className="content-container__screen">
        <SideBar showSideBar={ showSetupSideBar }
                 mappedUserData={ mappedUser }
                 setActiveLoadPeriod={ setActiveLoadPeriod }
                 setActiveFieldName={ setActiveFieldName }
                 view={ view } />
        { children }
      </div>
    </div>
  );
};

FieldSetupContentContainer.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired
};
