import React, { FunctionComponent } from 'react';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: FunctionComponent<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}
