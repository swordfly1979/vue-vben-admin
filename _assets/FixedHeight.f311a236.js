import{a as e,i,o as s,j as t,k as o,w as r,n as m}from"./index.a4c995c9.js";import"./xlsx.a48e520c.js";import"./SettingOutlined.91e4153e.js";import"./index.51976da2.js";import"./Trigger.a445e86a.js";import"./omit.149aedfc.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.afd9afdf.js";import"./CheckOutlined.0ff5e6b7.js";import"./index.0c15d5ff.js";import"./colors.1efe187d.js";import"./index.5f1f44bb.js";import"./RightOutlined.0310d066.js";import"./index.2bdd82eb.js";import"./types.0700a3df.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.ad94a28d.js";import"./_baseFor.f4e5f03f.js";import"./index.a172b251.js";import"./index.d7919071.js";import"./index.ed1896d8.js";import"./UpOutlined.060f27ef.js";import"./LeftOutlined.fa221124.js";import"./index.3ae0f855.js";import"./index.13851d4b.js";import"./index.73c71c16.js";import"./index.6e5663f8.js";import"./zh_CN.0242bd16.js";import"./TableAction.9af41b2c.js";import"./index.c6c01f68.js";import"./CaretDownFilled.65d9b2c0.js";import"./CheckOutlined.b19c1a43.js";import"./CloseOutlined.6993095c.js";import{s as p,F as a}from"./EditTableHeaderIcon.e605ef8a.js";import"./DownOutlined.39a8d1c3.js";import"./FullscreenOutlined.af1017f1.js";import"./LeftOutlined.e6de4091.js";import"./functional.46443edd.js";import"./RightOutlined.fc1e80b2.js";import"./useContext.1c84e748.js";import"./useTimeout.0fb9d179.js";import"./useDebounce.460c0b67.js";import"./useEventListener.dafd0e6c.js";import"./useBreakpoint.9e160351.js";import{B as d}from"./index.b191181c.js";import"./tsxHelper.20d71045.js";import"./index.85a2c56f.js";import"./propTypes.7f710850.js";import"./index.2e04fe2b.js";import"./useForm.a4438e73.js";import"./index.720a235c.js";import"./useModalContext.e5c00ab2.js";import"./domUtils.e32f343e.js";import"./useFullScreen.55ea9361.js";import"./uuid.40269c00.js";import"./useWindowSizeFn.bee853aa.js";import"./useExpose.0faa79f6.js";import"./index.bf39ee0d.js";import{u as n}from"./useTable.3fed69a5.js";import{getCustomHeaderColumns as j}from"./tableData.4452fb8f.js";import{d as l}from"./table.963b049e.js";var c=e({components:{BasicTable:p,FormOutlined:a,BasicHelp:d},setup(){const[e]=n({title:"定高/头部自定义",api:l,columns:j(),canResize:!1,scroll:{y:100}});return{registerTable:e}}});const f={class:"p-4"},u=m(" 姓名 "),b=m(" 地址 ");c.render=function(e,m,p,a,d,n){const j=i("BasicHelp"),l=i("FormOutlined"),c=i("BasicTable");return s(),t("div",f,[o(c,{onRegister:e.registerTable},{customTitle:r((()=>[o("span",null,[u,o(j,{class:"ml-2",text:"姓名"})])])),customAddress:r((()=>[b,o(l,{class:"ml-2"})])),_:1},8,["onRegister"])])};export default c;