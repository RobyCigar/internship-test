import React, { Component } from 'react';
import clone from 'clone';
import { Row, Col } from 'antd';
import LayoutWrapper from '../../components/utility/layoutWrapper.js';
import basicStyle from '../../settings/basicStyle';
import IsoWidgetsWrapper from './widgets-wrapper';
import IsoWidgetBox from './widget-box';
import CardWidget from './card/card-widgets';
import ProgressWidget from './progress/progress-widget';
import SingleProgressWidget from './progress/progress-single';
import ReportsWidget from './report/report-widget';
import StickerWidget from './sticker/sticker-widget';
import SaleWidget from './sale/sale-widget';
import VCardWidget from './vCard/vCard-widget';
import SocialWidget from './social-widget/social-widget';
import SocialProfile from './social-widget/social-profile-icon';
import userpic from '../../image/user1.png';
import { TableViews, tableinfos, dataList } from '../Tables/antTables';
import * as rechartConfigs from '../Charts/recharts/config';
import { StackedAreaChart } from '../Charts/recharts/charts/';
import { GoogleChart } from '../Charts/googleChart/';
import * as googleChartConfigs from '../Charts/googleChart/config';
import IntlMessages from '../../components/utility/intlMessages';

const tableDataList = clone(dataList);
tableDataList.size = 5;

export default class extends Component {
  render() {
    const { rowStyle, colStyle } = basicStyle;
    const wisgetPageStyle = {
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'flex-start',
      overflow: 'hidden',
    };

    const chartEvents = [
      {
        eventName: 'select',
        callback(Chart) {},
      },
    ];

    const stackConfig = {
      ...rechartConfigs.StackedAreaChart,
      width: window.innerWidth < 450 ? 300 : 500,
    };
    return (
      <LayoutWrapper>

      </LayoutWrapper>
    );
  }
}
