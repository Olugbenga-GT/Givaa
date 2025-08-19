import { ref, mergeProps, withCtx, createTextVNode, unref, createVNode, watch, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as _sfc_main$3 } from './Button-C1JHmXnj.mjs';
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

const _sfc_main$2 = {
  __name: "ReuseablesCard",
  __ssrInlineRender: true,
  props: {
    cardId: {
      type: [Number, String],
      default: 1
    },
    title: {
      type: String,
      default: "Valentine Gift"
    },
    subtitle: {
      type: String,
      default: "Curated by Valentine"
    },
    image: {
      type: String,
      default: ""
    },
    imageType: {
      type: String,
      default: "nature",
      validator: (value) => ["nature", "food", "travel", "portrait", "random"].includes(value)
    }
  },
  setup(__props) {
    const props = __props;
    const imageUrl = ref("");
    const imageError = ref(false);
    const imageCategories = {
      nature: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop"
      ],
      food: [
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop"
      ],
      travel: [
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop"
      ],
      portrait: [
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=400&h=300&fit=crop"
      ],
      random: [
        "https://picsum.photos/400/300?random=1",
        "https://picsum.photos/400/300?random=2",
        "https://picsum.photos/400/300?random=3"
      ]
    };
    const getRandomImage = () => {
      const category = imageCategories[props.imageType];
      const randomIndex = Math.floor(Math.random() * category.length);
      return category[randomIndex];
    };
    watch(
      () => props.imageType,
      () => {
        imageUrl.value = getRandomImage();
        imageError.value = false;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cursor-pointer group" }, _attrs))} data-v-b470966d><div class="relative rounded-2xl h-[12rem] w-[20rem] bg-gray-200 overflow-hidden" data-v-b470966d><p class="absolute top-4 right-4 h-10 w-10 rounded-full bg-gray-600 text-white flex items-center justify-center z-10 font-bold shadow-lg" data-v-b470966d>${ssrInterpolate(__props.cardId)}</p><img${ssrRenderAttr("src", imageUrl.value)}${ssrRenderAttr("alt", __props.title)} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-v-b470966d><div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" data-v-b470966d></div></div><div class="mt-3" data-v-b470966d><p class="font-semibold text-xl" data-v-b470966d>${ssrInterpolate(__props.title)}</p><p class="text-[#9C9C9E]" data-v-b470966d>${ssrInterpolate(__props.subtitle)}</p></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/reuseables/Card.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Card = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b470966d"]]);
const _sfc_main$1 = {
  __name: "FormModal",
  __ssrInlineRender: true,
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    closeOnBackdrop: {
      type: Boolean,
      default: true
    },
    showCloseButton: {
      type: Boolean,
      default: true
    }
  },
  emits: ["update:isOpen", "close"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.isOpen) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 z-50 flex items-center justify-center p-4" }, _attrs))} data-v-a9431107><div class="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" data-v-a9431107></div>`);
        if (__props.isOpen) {
          _push(`<div class="relative bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 overflow-hidden" data-v-a9431107><button class="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200" data-v-a9431107> × </button>`);
          if (_ctx.$slots.header || __props.title) {
            _push(`<div class="px-6 py-4 border-b border-gray-200" data-v-a9431107>`);
            ssrRenderSlot(_ctx.$slots, "header", {}, () => {
              _push(`<h3 class="text-lg font-semibold text-gray-900" data-v-a9431107>${ssrInterpolate(__props.title)}</h3>`);
            }, _push, _parent);
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="px-6 py-4" data-v-a9431107>`);
          ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Form/Modal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Modal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a9431107"]]);
const _sfc_main = {
  __name: "home",
  __ssrInlineRender: true,
  setup(__props) {
    const showModal = ref(false);
    const catalogue = [
      {
        id: 1,
        title: "Valentine Gift",
        subtitle: "Curated by Valentine",
        image: "",
        imageType: "nature",
        tags: ["romance", "gifts", "special"],
        rating: 4.8,
        price: 49.99
      },
      {
        id: 2,
        title: "Summer Collection",
        subtitle: "Best summer outfits 2024",
        image: "",
        imageType: "portrait",
        tags: ["fashion", "summer", "trendy"],
        rating: 4.5,
        price: 79.99
      },
      {
        id: 3,
        title: "Gourmet Delights",
        subtitle: "Fine dining experiences",
        image: "",
        imageType: "food",
        tags: ["food", "gourmet", "dining"],
        rating: 4.9,
        price: 120
      },
      {
        id: 4,
        title: "Travel Adventures",
        subtitle: "Explore the world",
        image: "",
        imageType: "travel",
        tags: ["travel", "adventure", "explore"],
        rating: 4.7,
        price: 299.99
      },
      {
        id: 5,
        title: "Urban Photography",
        subtitle: "City life captured",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
        imageType: "random",
        tags: ["photography", "urban", "city"],
        rating: 4.6,
        price: 89.99
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-6" }, _attrs))}><header class="flex justify-between items-center pb-16"><aside><p class="font-light text-sm text-[#1D1D1DB2]">Hey Gastt 👋</p><p class="text-xl">Welcome Back</p></aside><aside>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        class: "bg-blue-400",
        onClick: ($event) => showModal.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` + Curate Gifts `);
          } else {
            return [
              createTextVNode(" + Curate Gifts ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</aside></header><main><section class="flex justify-between border-b-1]"><h1 class="text-2xl font-semibold">Top Pick</h1><aside>Left</aside></section><section><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(catalogue, (card) => {
        _push(ssrRenderComponent(Card, {
          key: card.id,
          "card-id": card.id,
          title: card.title,
          subtitle: card.subtitle,
          image: card.image,
          "image-type": card.imageType
        }, null, _parent));
      });
      _push(`<!--]--></div></section></main>`);
      _push(ssrRenderComponent(Modal, {
        "is-open": unref(showModal),
        onClose: ($event) => showModal.value = false
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section${_scopeId}><h1${_scopeId}>Modal Content</h1><p${_scopeId}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod labore ratione culpa laudantium? Non aliquid soluta debitis inventore alias, perferendis nemo deleniti? Possimus minima repudiandae quo cupiditate odio repellat doloribus fuga animi fugit, dolorum quaerat, molestias rem illum a, provident nobis vel eos. Tempora numquam facere minus quod pariatur quo alias deleniti dolore hic qutae sed, a aspernatur inventore aliquid nostrum delenitdignissimos dolorum facere. Doloremque consequuntur ipsam quis aut. Dolor, consectetur amet excepturi omnis doloribus nesciunt sint laudantium eum eius ab voluptates illum possimus! Illo commodi corrupti esse culpa! </p></section>`);
          } else {
            return [
              createVNode("section", null, [
                createVNode("h1", null, "Modal Content"),
                createVNode("p", null, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod labore ratione culpa laudantium? Non aliquid soluta debitis inventore alias, perferendis nemo deleniti? Possimus minima repudiandae quo cupiditate odio repellat doloribus fuga animi fugit, dolorum quaerat, molestias rem illum a, provident nobis vel eos. Tempora numquam facere minus quod pariatur quo alias deleniti dolore hic qutae sed, a aspernatur inventore aliquid nostrum delenitdignissimos dolorum facere. Doloremque consequuntur ipsam quis aut. Dolor, consectetur amet excepturi omnis doloribus nesciunt sint laudantium eum eius ab voluptates illum possimus! Illo commodi corrupti esse culpa! ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=home-Cu-DEnUr.mjs.map
