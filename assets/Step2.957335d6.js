import{d as e,cr as t,cs as i,h as s,o,i as r,j as a,bz as d,m as n}from"./index.a566a5ca.js";import{D as m}from"./index.0bc70a10.js";import{D as p}from"./index.ba5d05b1.js";import{A as c}from"./index.585ce7e7.js";import{_ as j}from"./index.de81c9ed.js";import{step2Schemas as l}from"./data.2505cb7f.js";import{u as f}from"./useForm.bcdd98b4.js";import"./responsiveObserve.c545f1cc.js";import"./index.2bf786a7.js";import"./index.f6c4400a.js";import"./findIndex.4bfde90d.js";import"./isEqual.ec621c06.js";import"./_baseProperty.74f89655.js";import"./toInteger.baf86ce7.js";import"./index.e7777da2.js";import"./index.85488c04.js";import"./SearchOutlined.7c3ad112.js";import"./DownOutlined.dd4e6399.js";import"./CheckOutlined.22d125f3.js";import"./index.d21f5957.js";import"./index.27065d05.js";import"./UpOutlined.d8022224.js";import"./index.cf22a6d5.js";import"./EyeOutlined.77d25fed.js";import"./index.ce5f6841.js";import"./colors.51f7f813.js";import"./RightOutlined.91e3265a.js";import"./index.5274dc7a.js";import"./types.e18f0e7b.js";import"./Tree.cca5e8c3.js";import"./util.1a686b9e.js";import"./useAttrs.64188c7e.js";import"./index.8d91dadc.js";import"./uuid.70d5a034.js";import"./index.954e87ef.js";import"./index.dcc4c8d5.js";import"./useTimeout.e434fe9c.js";import"./useWindowSizeFn.3467e9f6.js";import"./index.adcbe97e.js";import"./index.11164d45.js";import"./domUtils.a46c7224.js";import"./_stringToArray.1cfb153c.js";import"./RightOutlined.b48611f5.js";import"./useScrollTo.e749e6c6.js";import"./animation.831cbf1f.js";import"./FullscreenOutlined.eb4af258.js";import"./index.4e27a778.js";import"./index.b77e5e9f.js";import"./LeftOutlined.b219af0e.js";import"./download.6d573c3b.js";var u=e({components:{BasicForm:j,[c.name]:c,[p.name]:p,[m.name]:m,[m.Item.name]:m.Item},emits:["next","prev"],setup(e,{emit:t}){const[i,{validate:s,setProps:o}]=f({labelWidth:80,schemas:l,actionColOptions:{span:14},resetButtonOptions:{text:"上一步"},submitButtonOptions:{text:"提交"},resetFunc:async function(){t("prev")},submitFunc:async function(){try{const e=await s();o({submitButtonOptions:{loading:!0}}),setTimeout((()=>{o({submitButtonOptions:{loading:!1}}),t("next",e)}),1500)}catch(e){}}});return{register:i}}});const b=d("data-v-01481d2f");t("data-v-01481d2f");const x={class:"step2"},O=n(" ant-design@alipay.com "),g=n(" test@example.com "),v=n(" Vben "),_=n(" 500元 ");i();const h=b(((e,t,i,d,n,m)=>{const p=s("a-alert"),c=s("a-descriptions-item"),j=s("a-descriptions"),l=s("a-divider"),f=s("BasicForm");return o(),r("div",x,[a(p,{message:"确认转账后，资金将直接打入对方账户，无法退回。","show-icon":""}),a(j,{column:1,class:"mt-5"},{default:b((()=>[a(c,{label:"付款账户"},{default:b((()=>[O])),_:1}),a(c,{label:"收款账户"},{default:b((()=>[g])),_:1}),a(c,{label:"收款人姓名"},{default:b((()=>[v])),_:1}),a(c,{label:"转账金额"},{default:b((()=>[_])),_:1})])),_:1}),a(l),a(f,{onRegister:e.register},null,8,["onRegister"])])}));u.render=h,u.__scopeId="data-v-01481d2f";export default u;