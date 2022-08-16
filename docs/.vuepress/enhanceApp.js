import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import IyeedIU from 'iyeed-ui';
export default async ({
  Vue
}) => {
  if (typeof process === 'undefined') {
    Vue.use(ElementUI);
    Vue.use(IyeedIU)
  }
}