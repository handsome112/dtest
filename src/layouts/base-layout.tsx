import * as React from 'react';
import { IUIConfig } from 'src/interfaces';
import PrimaryLayout from './primary-layout';
import PublicLayout from './public-layout';
import DefaultLayout from './default-layout';
import AuthLayout from './auth-layout';
import MaintenanceLayout from './maintenance-layout';

interface DefaultProps {
  children: any;
  appConfig?: IUIConfig;
  layout?: string;
  maintenanceMode?: boolean;
}

const LayoutMap = {
  maintenance: MaintenanceLayout,
  primary: PrimaryLayout,
  public: PublicLayout,
  auth: AuthLayout,
  default: DefaultLayout
};

export default class BaseLayout extends React.PureComponent<DefaultProps> {
  render() {
    const { children, layout, maintenanceMode = false } = this.props;
    if (maintenanceMode) {
      return <MaintenanceLayout />;
    }

    const Container = layout && LayoutMap[layout] ? LayoutMap[layout] : LayoutMap.public;
    return (
      <>
        <Container>{children}</Container>
      </>
    );
  }
}
