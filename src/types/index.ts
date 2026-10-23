/**
 * 路由数据类型
 */
export type RouterType = {
  path: string;
  name: string;
  title: string;
  icon?: string;
  redirect?: string;
  component?: any;
  children?: RouterType[];
  meta?: {
    keepAlive?: boolean;
    hideNav?: boolean;
    hideAuthorizedCookie?: boolean;
  };
};