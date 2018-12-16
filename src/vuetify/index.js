import Vue from 'vue';
import Vuetify from 'vuetify/es5/components/Vuetify';
import VApp from 'vuetify/es5/components/VApp';
import VGrid from 'vuetify/es5/components/VGrid';
import VToolbar from 'vuetify/es5/components/VToolbar';
import VCard from 'vuetify/es5/components/VCard';
import VBtn from 'vuetify/es5/components/VBtn';
import VIcon from 'vuetify/es5/components/VIcon';
import VDialog from 'vuetify/es5/components/VDialog';
import VDivider from 'vuetify/es5/components/VDivider';
import VFooter from 'vuetify/es5/components/VFooter';
import VList from 'vuetify/es5/components/VList';
import VMenu from 'vuetify/es5/components/VMenu';
import VTooltip from 'vuetify/es5/components/VTooltip';
import VTextField from 'vuetify/es5/components/VTextField';
import VSelect from 'vuetify/es5/components/VSelect';
import VProgressLinear from 'vuetify/es5/components/VProgressLinear';
import { Ripple } from 'vuetify/es5/directives';
import 'vuetify/dist/vuetify.min.css';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  theme: {
    primary: '#8BC34A',
  },
  components: {
    VApp,
    VGrid,
    VToolbar,
    VCard,
    VBtn,
    VIcon,
    VDialog,
    VDivider,
    VFooter,
    VList,
    VMenu,
    VTooltip,
    VTextField,
    VSelect,
    VProgressLinear
  },
  directives: {
    Ripple
  }
});
