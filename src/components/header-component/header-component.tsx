import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'header-component',
  styleUrl: 'header-component.css',
  shadow: true,
})
export class HeaderComponent {
  @Prop() logo: string = 'Logo';
  @Prop() menuItems: string;
  @Prop() rightSectionItems: string;
  @State() menuOpen: boolean = false;

  private parsedMenuItems: { link: string, name: string }[] = [];
  private parsedRightSectionItems: { link: string, name: string }[] = [];

  componentWillLoad() {
    if (this.menuItems) {
      this.parsedMenuItems = JSON.parse(this.menuItems);
    }

    if (this.rightSectionItems) {
      this.parsedRightSectionItems = JSON.parse(this.rightSectionItems);
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      document.getElementById('drawer').classList.add('is-active');
      document.getElementById('drawer').classList.add('is-visible');
    } else {
      document.getElementById('drawer').classList.remove('is-visible');
      setTimeout(() => {
        document.getElementById('drawer').classList.remove('is-active');
      }, 350);
    }
  }

  closeMenu() {
    this.menuOpen = false;
    document.getElementById('drawer').classList.remove('is-visible');
    setTimeout(() => {
      document.getElementById('drawer').classList.remove('is-active');
    }, 350);
  }

  render() {
    return (
      <header>
        <div class="logo">
          <img src={this.logo} height={40} width={160} />
        </div>

        <nav>
          {this.parsedMenuItems.map(item => (
            <a href={item.link}>{item.name}</a>
          ))}
        </nav>
        <div class="right-section">
          {this.parsedRightSectionItems.map(item => (
            <a href={item.link}>{item.name}</a>
          ))}
          <div class="menu-icon" onClick={() => this.toggleMenu()}>☰</div>
        </div>

        <section class="drawer drawer--left" id="drawer" data-drawer-target>
          <div class="drawer__overlay" data-drawer-close tabindex="-1" onClick={() => this.closeMenu()}></div>
          <div class="drawer__wrapper">
            <div class="drawer__header">
              <button class="close-button" onClick={() => this.closeMenu()}>✖</button>
            </div>
            <div class="drawer__content">
              {this.parsedMenuItems.map(item => (
                <a href={item.link} onClick={() => this.closeMenu()}>{item.name}</a>
              ))}
            </div>
          </div>
        </section>
      </header>
    );
  }
}
