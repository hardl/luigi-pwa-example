Luigi.setConfig({
  navigation: {
    validWebcomponentUrls: ['.*?'],
    viewGroupSettings: {
      vg1: {
        // customData: {
        //   foo: 'bar'
        // }
      },
      vg2: {
        // customData: {
        //   foo: 'bar2'
        // }
      }
    },
    addNavHrefs: true,
    nodes: [
      {
        pathSegment: 'home',
        label: 'home',
        context: {
          someValue: 'random'
        },
        children: [
          {
            pathSegment: 'mfe1',
            label: 'MFE 1',
            icon: 'home',
            viewGroup: 'vg1',
            tabNav: true,
            keepSelectedForChildren: true,
            context: {
              title: 'header sadgfas'
            },
            children: [
              {
                pathSegment: 'tab1',
                label: 'Tab 1 sdgfsa',
                icon: 'home',
                viewUrl: './mfe.html#1'
              },
              {
                pathSegment: 'tab2',
                label: 'Tab 2',
                icon: 'home',
                viewUrl: './mfe.html#2'
              },
              {
                pathSegment: 'tab3',
                label: 'Tab 3',
                icon: 'home',
                viewUrl: './mfe.html#3'
              }
            ]
          },
          
          
          
          {
            pathSegment: 'deploymentcontainers',
            label: 'deploymentcontainers 1',
            icon: 'home',
            viewUrl: './mfe.html',
            viewGroup: 'vg1',
            keepSelectedForChildren: true,
            
            children: [
              {
                pathSegment: ':id',
                virtualTree: false,
                context: {
                  title: 'header'
                },
                children: [
                  {
                    pathSegment: 'tab1',
                    label: 'Tab 1',
                    icon: 'home',
                    viewUrl: 'mfe.html#1'
                  },
                  {
                    pathSegment: 'tab2',
                    label: 'Tab 2',
                    icon: 'home',
                    viewUrl: 'mfe.html#2'
                  },
                  {
                    pathSegment: 'tab3',
                    label: 'Tab 3',
                    icon: 'home',
                    viewUrl: 'mfe.html#3'
                  }
                ]
              }
            ]
          },
          
          
          {
            label: 'Ext',
            externalLink: {
                url: 'https://sap.com',
                sameWindow: true
            }
        },
          {
            pathSegment: 'mfe2',
            label: 'MFE 2',
            icon: 'home',
            viewUrl: 'mfe.html#2',
            viewGroup: 'vg2'
          },
          {
            pathSegment: 'mfe3',
            label: 'MFE 3',
            icon: 'home',
            viewUrl: 'mfe.html#3',
            viewGroup: 'vg2'
          }
        ]
      }
    ]
  },
  routing: {
    useHashRouting: true
  },
  settings: {
    responsiveNavigation: 'semiCollapsible',
    header: {
      title: 'Luigi PWA Example',
      // disabled: true
    },
    addNavHrefs: true
  }
});
