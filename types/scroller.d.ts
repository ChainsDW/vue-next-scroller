import { App } from 'vue'
import { CComponent } from './component.d.ts'

export interface  ScrollerProps{
  height: number;
  data: Array<any>;
  ease?: boolean;
  speed?: number;
  holdUp?: number;
  showLine?: number;
}

export declare class CScroller extends CComponent {
  $props: ScrollerProps
}

export function install(app: App): void
