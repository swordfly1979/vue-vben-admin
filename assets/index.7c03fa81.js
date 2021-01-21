import{d as e,r as o,cr as t,cs as r,h as i,o as s,i as n,bz as p,j as d,m as a}from"./index.a566a5ca.js";import{C as l}from"./index.a1e2dc61.js";import"./index.b49e62b0.js";import"./index.2bf786a7.js";import{_ as c}from"./index.de81c9ed.js";import m from"./PersonTable.796cb0b8.js";import{_ as f}from"./index.1b767185.js";import{u}from"./useForm.bcdd98b4.js";import"./index.e7777da2.js";import"./UpOutlined.d8022224.js";import"./DownOutlined.dd4e6399.js";import"./LeftOutlined.b219af0e.js";import"./RightOutlined.91e3265a.js";import"./responsiveObserve.c545f1cc.js";import"./index.f6c4400a.js";import"./findIndex.4bfde90d.js";import"./isEqual.ec621c06.js";import"./_baseProperty.74f89655.js";import"./toInteger.baf86ce7.js";import"./index.85488c04.js";import"./SearchOutlined.7c3ad112.js";import"./CheckOutlined.22d125f3.js";import"./index.d21f5957.js";import"./index.27065d05.js";import"./index.cf22a6d5.js";import"./EyeOutlined.77d25fed.js";import"./index.ce5f6841.js";import"./colors.51f7f813.js";import"./index.5274dc7a.js";import"./types.e18f0e7b.js";import"./Tree.cca5e8c3.js";import"./util.1a686b9e.js";import"./useAttrs.64188c7e.js";import"./index.8d91dadc.js";import"./index.585ce7e7.js";import"./uuid.70d5a034.js";import"./index.954e87ef.js";import"./index.dcc4c8d5.js";import"./useTimeout.e434fe9c.js";import"./useWindowSizeFn.3467e9f6.js";import"./index.adcbe97e.js";import"./index.11164d45.js";import"./domUtils.a46c7224.js";import"./_stringToArray.1cfb153c.js";import"./RightOutlined.b48611f5.js";import"./useScrollTo.e749e6c6.js";import"./animation.831cbf1f.js";import"./FullscreenOutlined.eb4af258.js";import"./index.ba5d05b1.js";import"./index.4e27a778.js";import"./index.b77e5e9f.js";import"./download.6d573c3b.js";import"./index.a51628c3.js";import"./index.be64ae83.js";import"./zh_CN.8094f4d6.js";import"./CaretDownFilled.7c972e8a.js";import"./scrollTo.c9242ea7.js";import"./transButton.fe643f31.js";import"./clickOutside.fb7b2a60.js";import"./useSortable.6348db1d.js";import"./CheckOutlined.42a21925.js";import"./SettingOutlined.74fa68dd.js";import"./useExpose.99213a4b.js";import"./useTable.e4b556f0.js";import"./index.327858b4.js";import"./index.726e5344.js";import"./usePageContext.0bdca749.js";const j=[{label:"付晓晓",value:"1"},{label:"周毛毛",value:"2"}],b=[{label:"私密",value:"1"},{label:"公开",value:"2"}],x=[{field:"f1",component:"Input",label:"仓库名",required:!0},{field:"f2",component:"Input",label:"仓库域名",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"仓库管理员",componentProps:{options:j},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"审批人",componentProps:{options:j},required:!0},{field:"f5",component:"RangePicker",label:"生效日期",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"仓库类型",componentProps:{options:b},required:!0,colProps:{offset:2}}],P=[{field:"t1",component:"Input",label:"任务名",required:!0},{field:"t2",component:"Input",label:"任务描述",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"执行人",componentProps:{options:j},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"责任人",componentProps:{options:j},required:!0},{field:"t5",component:"TimePicker",label:"生效日期",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"任务类型",componentProps:{options:b},required:!0,colProps:{offset:2}}];var g=e({components:{BasicForm:c,PersonTable:m,PageWrapper:f,[l.name]:l},setup(){const e=o(null),[t,{validate:r}]=u({baseColProps:{span:6},schemas:x,showActionButtonGroup:!1}),[i,{validate:s}]=u({baseColProps:{span:6},schemas:P,showActionButtonGroup:!1});return{register:t,registerTask:i,submitAll:async function(){try{e.value;const[o,t]=await Promise.all([r(),s()])}catch(o){}},tableRef:e}}});const h=p("data-v-85ff7730");t("data-v-85ff7730");const q=a("提交");r();const v=h(((e,o,t,r,p,a)=>{const l=i("BasicForm"),c=i("a-card"),m=i("PersonTable"),f=i("a-button"),u=i("PageWrapper");return s(),n(u,{class:"high-form",title:"高级表单",contentBackground:"",content:" 高级表单常见于一次性输入和提交大批量数据的场景。",contentClass:"p-4"},{rightFooter:h((()=>[d(f,{type:"primary",onClick:e.submitAll},{default:h((()=>[q])),_:1},8,["onClick"])])),default:h((()=>[d(c,{title:"仓库管理",bordered:!1},{default:h((()=>[d(l,{onRegister:e.register},null,8,["onRegister"])])),_:1}),d(c,{title:"任务管理",bordered:!1,class:"mt-5"},{default:h((()=>[d(l,{onRegister:e.registerTask},null,8,["onRegister"])])),_:1}),d(c,{title:"成员管理",bordered:!1,class:"mt-5"},{default:h((()=>[d(m,{ref:"tableRef"},null,512)])),_:1})])),_:1})}));g.render=v,g.__scopeId="data-v-85ff7730";export default g;