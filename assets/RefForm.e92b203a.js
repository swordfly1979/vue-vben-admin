import{_ as e}from"./index.de81c9ed.js";import{a as s}from"./index.adcbe97e.js";import{d as o,r as t,g as i,h as l,o as a,i as r,w as n,j as p,m as d}from"./index.a566a5ca.js";import{_ as c}from"./index.1b767185.js";import"./index.2bf786a7.js";import"./responsiveObserve.c545f1cc.js";import"./index.f6c4400a.js";import"./findIndex.4bfde90d.js";import"./isEqual.ec621c06.js";import"./_baseProperty.74f89655.js";import"./toInteger.baf86ce7.js";import"./index.e7777da2.js";import"./index.85488c04.js";import"./SearchOutlined.7c3ad112.js";import"./DownOutlined.dd4e6399.js";import"./CheckOutlined.22d125f3.js";import"./index.d21f5957.js";import"./index.27065d05.js";import"./UpOutlined.d8022224.js";import"./index.cf22a6d5.js";import"./EyeOutlined.77d25fed.js";import"./index.ce5f6841.js";import"./colors.51f7f813.js";import"./RightOutlined.91e3265a.js";import"./index.5274dc7a.js";import"./types.e18f0e7b.js";import"./Tree.cca5e8c3.js";import"./util.1a686b9e.js";import"./useAttrs.64188c7e.js";import"./index.8d91dadc.js";import"./index.585ce7e7.js";import"./uuid.70d5a034.js";import"./index.954e87ef.js";import"./index.dcc4c8d5.js";import"./useTimeout.e434fe9c.js";import"./useWindowSizeFn.3467e9f6.js";import"./FullscreenOutlined.eb4af258.js";import"./index.ba5d05b1.js";import"./index.4e27a778.js";import"./index.b77e5e9f.js";import"./LeftOutlined.b219af0e.js";import"./download.6d573c3b.js";import"./domUtils.a46c7224.js";import"./_stringToArray.1cfb153c.js";import"./index.11164d45.js";import"./RightOutlined.b48611f5.js";import"./useScrollTo.e749e6c6.js";import"./animation.831cbf1f.js";import"./index.327858b4.js";import"./index.726e5344.js";import"./usePageContext.0bdca749.js";import"./transButton.fe643f31.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];var u=o({components:{BasicForm:e,CollapseContainer:s,PageWrapper:c},setup(){const e=t(null),{createMessage:s}=i();return{formElRef:e,schemas:m,handleSubmit:e=>{s.success("click search,values:"+JSON.stringify(e))},setProps(s){const o=e.value;o&&o.setProps(s)}}}});const f={class:"mb-4"},j=d("更改labelWidth"),b=d("还原labelWidth"),P=d("更改Size"),x=d("还原Size"),h=d("禁用表单"),C=d("解除禁用"),k=d("紧凑表单"),_=d("还原正常间距"),O=d(" 操作按钮位置 "),g={class:"mb-4"},v=d(" 隐藏操作按钮 "),S=d(" 显示操作按钮 "),w=d(" 隐藏重置按钮 "),B=d(" 显示重置按钮 "),R=d(" 隐藏查询按钮 "),W=d(" 显示查询按钮 "),y=d(" 修改重置按钮 "),z=d(" 修改查询按钮 ");u.render=function(e,s,o,t,i,d){const c=l("a-button"),m=l("BasicForm"),u=l("CollapseContainer"),A=l("PageWrapper");return a(),r(A,{title:"Ref操作示例"},{default:n((()=>[p("div",f,[p(c,{onClick:s[1]||(s[1]=s=>e.setProps({labelWidth:150})),class:"mr-2"},{default:n((()=>[j])),_:1}),p(c,{onClick:s[2]||(s[2]=s=>e.setProps({labelWidth:120})),class:"mr-2"},{default:n((()=>[b])),_:1}),p(c,{onClick:s[3]||(s[3]=s=>e.setProps({size:"large"})),class:"mr-2"},{default:n((()=>[P])),_:1}),p(c,{onClick:s[4]||(s[4]=s=>e.setProps({size:"default"})),class:"mr-2"},{default:n((()=>[x])),_:1}),p(c,{onClick:s[5]||(s[5]=s=>e.setProps({disabled:!0})),class:"mr-2"},{default:n((()=>[h])),_:1}),p(c,{onClick:s[6]||(s[6]=s=>e.setProps({disabled:!1})),class:"mr-2"},{default:n((()=>[C])),_:1}),p(c,{onClick:s[7]||(s[7]=s=>e.setProps({compact:!0})),class:"mr-2"},{default:n((()=>[k])),_:1}),p(c,{onClick:s[8]||(s[8]=s=>e.setProps({compact:!1})),class:"mr-2"},{default:n((()=>[_])),_:1}),p(c,{onClick:s[9]||(s[9]=s=>e.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:n((()=>[O])),_:1})]),p("div",g,[p(c,{onClick:s[10]||(s[10]=s=>e.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:n((()=>[v])),_:1}),p(c,{onClick:s[11]||(s[11]=s=>e.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:n((()=>[S])),_:1}),p(c,{onClick:s[12]||(s[12]=s=>e.setProps({showResetButton:!1})),class:"mr-2"},{default:n((()=>[w])),_:1}),p(c,{onClick:s[13]||(s[13]=s=>e.setProps({showResetButton:!0})),class:"mr-2"},{default:n((()=>[B])),_:1}),p(c,{onClick:s[14]||(s[14]=s=>e.setProps({showSubmitButton:!1})),class:"mr-2"},{default:n((()=>[R])),_:1}),p(c,{onClick:s[15]||(s[15]=s=>e.setProps({showSubmitButton:!0})),class:"mr-2"},{default:n((()=>[W])),_:1}),p(c,{onClick:s[16]||(s[16]=s=>e.setProps({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:n((()=>[y])),_:1}),p(c,{onClick:s[17]||(s[17]=s=>e.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:n((()=>[z])),_:1})]),p(u,{title:"使用ref调用表单内部函数示例"},{default:n((()=>[p(m,{schemas:e.schemas,ref:"formElRef",labelWidth:100,onSubmit:e.handleSubmit,actionColOptions:{span:24}},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default u;