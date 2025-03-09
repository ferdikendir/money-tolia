export type NavigationItem =
    | NavigationLink;

export interface NavigationLink {
    type: 'link' | 'header';
    route?: string | any;
    label: string;
    routerLinkActiveOptions?: { exact: boolean };
    children?: Array<NavigationLink>;
}
