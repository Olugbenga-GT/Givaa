import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = {
  __name: "FormButton",
  __ssrInlineRender: true,
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: [
          "px-8 py-1.5 text-white rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2",
          _ctx.classes,
          __props.disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-105 active:scale-95"
        ],
        disabled: __props.disabled
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Form/Button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Button-C1JHmXnj.mjs.map
