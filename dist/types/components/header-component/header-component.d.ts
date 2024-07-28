export declare class HeaderComponent {
    logo: string;
    menuItems: string;
    rightSectionItems: string;
    menuOpen: boolean;
    private parsedMenuItems;
    private parsedRightSectionItems;
    componentWillLoad(): void;
    toggleMenu(): void;
    closeMenu(): void;
    render(): any;
}
