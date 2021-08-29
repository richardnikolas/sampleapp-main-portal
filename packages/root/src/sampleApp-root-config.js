import { registerApplication, start } from 'single-spa';

registerApplication({
  name: '@sampleApp/main-portal-app',
  app: () => System.import('@sampleApp/main-portal-app'),
  activeWhen: ['/']
});

start({ urlRerouteOnly: true });