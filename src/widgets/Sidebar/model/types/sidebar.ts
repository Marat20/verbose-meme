export type SidebarItemType = {
  path: string;
  text: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
};
