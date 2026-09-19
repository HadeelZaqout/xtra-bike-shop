import * as bootstrap from 'bootstrap';
import AOS from 'aos';

declare global {
  interface Window {
    bootstrap: typeof bootstrap;
    AOS: typeof AOS;
  }
}
