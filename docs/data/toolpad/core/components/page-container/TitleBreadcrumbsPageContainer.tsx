import * as React from 'react';
import { PageContainer } from '@toolpad/core/PageContainer';
import { AppProvider } from '@toolpad/core/AppProvider';
import { useDemoRouter } from '@toolpad/core/internals/demo';
import { Paper, useTheme } from '@mui/material';

const NAVIGATION = [
  {
    segment: 'home',
    title: 'Home',
    children: [
      {
        segment: 'orders',
        title: 'Orders',
      },
    ],
  },
];

export default function TitleBreadcrumbsPageContainer() {
  const router = useDemoRouter('/home/orders');

  const theme = useTheme();

  return (
    <AppProvider
      branding={{ title: 'ACME' }}
      navigation={NAVIGATION}
      router={router}
      theme={theme}
    >
      <Paper sx={{ width: '100%' }}>
        <PageContainer />
      </Paper>
    </AppProvider>
  );
}
