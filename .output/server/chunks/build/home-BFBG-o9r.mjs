import { _ as __nuxt_component_0$1 } from './nuxt-link-By8o4mKy.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc, a as useRoute } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _imports_0 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_1_3428'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1_3428)'%3e%3cpath%20d='M4%2021V9L12%203L20%209V21H14V14H10V21H4Z'%20fill='%231C1B1F'/%3e%3c/g%3e%3c/svg%3e";
const _imports_1 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_1_3443'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1_3443)'%3e%3cpath%20d='M5.65%208L3.5%205.9L4.9%204.45L7.05%206.6L5.65%208ZM11%205V2H13V5H11ZM18.4%208L16.95%206.6L19.1%204.5L20.5%205.9L18.4%208ZM9%2022V17L6%2014V9H18V14L15%2017V22H9ZM11%2020H13V16.175L16%2013.175V11H8V13.175L11%2016.175V20Z'%20fill='%231C1B1F'/%3e%3c/g%3e%3c/svg%3e";
const _imports_2 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_1_3438'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1_3438)'%3e%3cpath%20d='M5.5%2017.5C3.96667%2017.5%202.66667%2016.9667%201.6%2015.9C0.533333%2014.8333%200%2013.5333%200%2012C0%2010.4667%200.533333%209.16667%201.6%208.1C2.66667%207.03333%203.96667%206.5%205.5%206.5C6.11667%206.5%206.70833%206.60833%207.275%206.825C7.84167%207.04167%208.35%207.35%208.8%207.75L10.5%209.3L9%2010.65L7.45%209.25C7.18333%209.01667%206.88333%208.83333%206.55%208.7C6.21667%208.56667%205.86667%208.5%205.5%208.5C4.53333%208.5%203.70833%208.84167%203.025%209.525C2.34167%2010.2083%202%2011.0333%202%2012C2%2012.9667%202.34167%2013.7917%203.025%2014.475C3.70833%2015.1583%204.53333%2015.5%205.5%2015.5C5.86667%2015.5%206.21667%2015.4333%206.55%2015.3C6.88333%2015.1667%207.18333%2014.9833%207.45%2014.75L15.2%207.75C15.65%207.35%2016.1583%207.04167%2016.725%206.825C17.2917%206.60833%2017.8833%206.5%2018.5%206.5C20.0333%206.5%2021.3333%207.03333%2022.4%208.1C23.4667%209.16667%2024%2010.4667%2024%2012C24%2013.5333%2023.4667%2014.8333%2022.4%2015.9C21.3333%2016.9667%2020.0333%2017.5%2018.5%2017.5C17.8833%2017.5%2017.2917%2017.3917%2016.725%2017.175C16.1583%2016.9583%2015.65%2016.65%2015.2%2016.25L13.5%2014.7L15%2013.35L16.55%2014.75C16.8167%2014.9833%2017.1167%2015.1667%2017.45%2015.3C17.7833%2015.4333%2018.1333%2015.5%2018.5%2015.5C19.4667%2015.5%2020.2917%2015.1583%2020.975%2014.475C21.6583%2013.7917%2022%2012.9667%2022%2012C22%2011.0333%2021.6583%2010.2083%2020.975%209.525C20.2917%208.84167%2019.4667%208.5%2018.5%208.5C18.1333%208.5%2017.7833%208.56667%2017.45%208.7C17.1167%208.83333%2016.8167%209.01667%2016.55%209.25L8.8%2016.25C8.35%2016.65%207.84167%2016.9583%207.275%2017.175C6.70833%2017.3917%206.11667%2017.5%205.5%2017.5Z'%20fill='%231C1B1F'/%3e%3c/g%3e%3c/svg%3e";
const _imports_3 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_1_3433'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1_3433)'%3e%3cpath%20d='M7.5%2016.5L14.5%2014.5L16.5%207.5L9.5%209.5L7.5%2016.5ZM12%2013.5C11.5833%2013.5%2011.2292%2013.3542%2010.9375%2013.0625C10.6458%2012.7708%2010.5%2012.4167%2010.5%2012C10.5%2011.5833%2010.6458%2011.2292%2010.9375%2010.9375C11.2292%2010.6458%2011.5833%2010.5%2012%2010.5C12.4167%2010.5%2012.7708%2010.6458%2013.0625%2010.9375C13.3542%2011.2292%2013.5%2011.5833%2013.5%2012C13.5%2012.4167%2013.3542%2012.7708%2013.0625%2013.0625C12.7708%2013.3542%2012.4167%2013.5%2012%2013.5ZM12%2022C10.6167%2022%209.31667%2021.7375%208.1%2021.2125C6.88333%2020.6875%205.825%2019.975%204.925%2019.075C4.025%2018.175%203.3125%2017.1167%202.7875%2015.9C2.2625%2014.6833%202%2013.3833%202%2012C2%2010.6167%202.2625%209.31667%202.7875%208.1C3.3125%206.88333%204.025%205.825%204.925%204.925C5.825%204.025%206.88333%203.3125%208.1%202.7875C9.31667%202.2625%2010.6167%202%2012%202C13.3833%202%2014.6833%202.2625%2015.9%202.7875C17.1167%203.3125%2018.175%204.025%2019.075%204.925C19.975%205.825%2020.6875%206.88333%2021.2125%208.1C21.7375%209.31667%2022%2010.6167%2022%2012C22%2013.3833%2021.7375%2014.6833%2021.2125%2015.9C20.6875%2017.1167%2019.975%2018.175%2019.075%2019.075C18.175%2019.975%2017.1167%2020.6875%2015.9%2021.2125C14.6833%2021.7375%2013.3833%2022%2012%2022ZM12%2020C14.2167%2020%2016.1042%2019.2208%2017.6625%2017.6625C19.2208%2016.1042%2020%2014.2167%2020%2012C20%209.78333%2019.2208%207.89583%2017.6625%206.3375C16.1042%204.77917%2014.2167%204%2012%204C9.78333%204%207.89583%204.77917%206.3375%206.3375C4.77917%207.89583%204%209.78333%204%2012C4%2014.2167%204.77917%2016.1042%206.3375%2017.6625C7.89583%2019.2208%209.78333%2020%2012%2020Z'%20fill='%231C1B1F'/%3e%3c/g%3e%3c/svg%3e";
const _imports_4 = "data:image/svg+xml,%3csvg%20width='25'%20height='26'%20viewBox='0%200%2025%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.6667%2016.125H8.33341C6.03223%2016.125%204.16675%2017.9905%204.16675%2020.2917V22.375H12.5001H20.8334V20.2917C20.8334%2017.9905%2018.9679%2016.125%2016.6667%2016.125Z'%20stroke='%231C1B1F'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12.5002%2011.9583C14.8013%2011.9583%2016.6668%2010.0929%2016.6668%207.79167C16.6668%205.49048%2014.8013%203.625%2012.5002%203.625C10.199%203.625%208.3335%205.49048%208.3335%207.79167C8.3335%2010.0929%2010.199%2011.9583%2012.5002%2011.9583Z'%20stroke='%231C1B1F'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const _imports_5 = "data:image/png;base64,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";
const _imports_6 = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M20.4167%2034.331C18.35%2034.331%2016.6666%2032.7643%2016.4333%2030.7643H24.4C24.1667%2032.7643%2022.4833%2034.331%2020.4167%2034.331ZM31.5667%2022.3477V15.0644C31.5667%2014.7811%2031.55%2014.4977%2031.5333%2014.2311C30.8833%2014.4311%2030.1833%2014.5477%2029.4667%2014.5477C25.7667%2014.5477%2022.75%2011.5477%2022.75%207.83108C22.75%206.58108%2023.0833%205.41441%2023.7%204.41441C22.6667%204.08108%2021.5667%203.91441%2020.4167%203.91441C14.2666%203.91441%209.26659%208.91441%209.26659%2015.0644V22.3477L6.58325%2025.081V30.7643H13.9333C14.1833%2034.1477%2016.9667%2036.831%2020.4167%2036.831C23.8667%2036.831%2026.6667%2034.1477%2026.9%2030.7643H34.25V25.081L31.5667%2022.3477Z'%20fill='%231D1D1D'%20fill-opacity='0.9'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M29.4667%2012.0477C30.0333%2012.0477%2030.5667%2011.9311%2031.0667%2011.7311C32.6%2011.0977%2033.6833%209.59775%2033.6833%207.83108C33.6833%205.51441%2031.8%203.63108%2029.4667%203.63108C28.0333%203.63108%2026.7667%204.34775%2026%205.43108C25.5333%206.11441%2025.25%206.93108%2025.25%207.83108C25.25%2010.1644%2027.15%2012.0477%2029.4667%2012.0477Z'%20fill='%239AE54C'/%3e%3c/svg%3e";
const _sfc_main$1 = {
  __name: "LayoutHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const isActive = (path) => {
      return route.path === path;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "flex items-center space-x-2 justify-between pb-14" }, _attrs))} data-v-0202f844><aside class="flex items-center space-x-2 space-x-8" data-v-0202f844>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center space-x-2 space-x-2 transition-all duration-100 hover:font-semibold",
        "active-class": "font-semibold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="home" data-v-0202f844${_scopeId}><p class="${ssrRenderClass([{ "font-semibold": isActive("/") }, "text-sm font-light"])}" data-v-0202f844${_scopeId}> Home </p>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "home"
              }),
              createVNode("p", {
                class: ["text-sm font-light", { "font-semibold": isActive("/") }]
              }, " Home ", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ideas",
        class: ["flex items-center space-x-2 transition-all duration-100 hover:font-semibold", { "font-semibold": isActive("/ideas") }],
        "active-class": "font-semibold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="idea" data-v-0202f844${_scopeId}><p class="${ssrRenderClass([{ "font-semibold": isActive("/ideas") }, "text-sm font-light"])}" data-v-0202f844${_scopeId}> Ideas </p>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_1,
                alt: "idea"
              }),
              createVNode("p", {
                class: ["text-sm font-light", { "font-semibold": isActive("/ideas") }]
              }, " Ideas ", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/collections",
        class: ["flex items-center space-x-2 transition-all duration-100 hover:font-semibold", { "font-semibold": isActive("/collections") }],
        "active-class": "font-semibold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_2)} alt="collections" data-v-0202f844${_scopeId}><p class="${ssrRenderClass([{ "font-semibold": isActive("/collections") }, "text-sm font-light"])}" data-v-0202f844${_scopeId}> Collections </p>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_2,
                alt: "collections"
              }),
              createVNode("p", {
                class: ["text-sm font-light", { "font-semibold": isActive("/collections") }]
              }, " Collections ", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/explore",
        class: ["flex items-center space-x-2 transition-all duration-100 hover:font-semibold", { "font-semibold": isActive("/explore") }],
        "active-class": "font-semibold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_3)} alt="explore" data-v-0202f844${_scopeId}><p class="${ssrRenderClass([{ "font-semibold": isActive("/explore") }, "text-sm font-light"])}" data-v-0202f844${_scopeId}> Explore </p>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_3,
                alt: "explore"
              }),
              createVNode("p", {
                class: ["text-sm font-light", { "font-semibold": isActive("/explore") }]
              }, " Explore ", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/profile",
        class: ["flex items-center space-x-2 transition-all duration-100 hover:font-semibold", { "font-semibold": isActive("/profile") }],
        "active-class": "font-semibold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_4)} alt="profile" data-v-0202f844${_scopeId}><p class="${ssrRenderClass([{ "font-semibold": isActive("/profile") }, "text-sm font-light"])}" data-v-0202f844${_scopeId}> Profile </p>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_4,
                alt: "profile"
              }),
              createVNode("p", {
                class: ["text-sm font-light", { "font-semibold": isActive("/profile") }]
              }, " Profile ", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</aside><aside class="flex items-center space-x-2 space-x-4" data-v-0202f844><img${ssrRenderAttr("src", _imports_5)} alt="user" class="w-8 h-8 rounded-full object-cover border-2 border-gray-200 hover:border-primary transition-all cursor-pointer" data-v-0202f844><img${ssrRenderAttr("src", _imports_6)} alt="user" class="w-8 h-8 rounded-full object-cover border-2 border-gray-200 hover:border-primary transition-all cursor-pointer" data-v-0202f844></aside></header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0202f844"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutHeader = __nuxt_component_0;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "py-8 px-6 md:px-12 lg:px-20" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_LayoutHeader, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<footer>My App Footer</footer></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const home = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { home as default };
//# sourceMappingURL=home-BFBG-o9r.mjs.map
