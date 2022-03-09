import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import VueMeta from 'vue-meta'


Vue.use(VeeValidate);
Vue.use(VueMeta);
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartFull } from '@fortawesome/free-solid-svg-icons'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faRubleSign } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarFull} from '@fortawesome/free-regular-svg-icons'
import { faStar as faStarEmpty } from '@fortawesome/free-solid-svg-icons'
import { faShirt } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faCreditCard } from '@fortawesome/free-regular-svg-icons'
import { faCopy  } from '@fortawesome/free-regular-svg-icons'
import { faBars  } from '@fortawesome/free-solid-svg-icons'
import { faX  } from '@fortawesome/free-solid-svg-icons'




/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faUserSecret , faUser, faHeart, faShoppingBag,
   faChevronRight,faRubleSign , faStarEmpty, faShirt ,
   faClock,faCreditCard, faStarFull, faCopy,faHeartFull
   ,faBars,faX)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false




new Vue({
  VeeValidate,
  render: h => h(App),
}).$mount('#app')
