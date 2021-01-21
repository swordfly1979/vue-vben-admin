import{_ as e}from"./index.a51628c3.js";import{getBasicColumns as t,getBasicShortColumns as i}from"./tableData.7aa0192c.js";import{d as o,g as s,h as n,o as a,i as c,j as r,w as l,m as d}from"./index.a566a5ca.js";import{d as m}from"./table.a0a56e54.js";import{u as p}from"./useTable.e4b556f0.js";import"./index.85488c04.js";import"./SearchOutlined.7c3ad112.js";import"./DownOutlined.dd4e6399.js";import"./CheckOutlined.22d125f3.js";import"./index.de81c9ed.js";import"./index.2bf786a7.js";import"./responsiveObserve.c545f1cc.js";import"./index.f6c4400a.js";import"./findIndex.4bfde90d.js";import"./isEqual.ec621c06.js";import"./_baseProperty.74f89655.js";import"./toInteger.baf86ce7.js";import"./index.e7777da2.js";import"./index.d21f5957.js";import"./index.27065d05.js";import"./UpOutlined.d8022224.js";import"./index.cf22a6d5.js";import"./EyeOutlined.77d25fed.js";import"./index.ce5f6841.js";import"./colors.51f7f813.js";import"./RightOutlined.91e3265a.js";import"./index.5274dc7a.js";import"./types.e18f0e7b.js";import"./Tree.cca5e8c3.js";import"./util.1a686b9e.js";import"./useAttrs.64188c7e.js";import"./index.8d91dadc.js";import"./index.585ce7e7.js";import"./uuid.70d5a034.js";import"./index.954e87ef.js";import"./index.dcc4c8d5.js";import"./useTimeout.e434fe9c.js";import"./useWindowSizeFn.3467e9f6.js";import"./index.adcbe97e.js";import"./index.11164d45.js";import"./domUtils.a46c7224.js";import"./_stringToArray.1cfb153c.js";import"./RightOutlined.b48611f5.js";import"./useScrollTo.e749e6c6.js";import"./animation.831cbf1f.js";import"./FullscreenOutlined.eb4af258.js";import"./index.ba5d05b1.js";import"./index.4e27a778.js";import"./index.b77e5e9f.js";import"./LeftOutlined.b219af0e.js";import"./download.6d573c3b.js";import"./index.be64ae83.js";import"./zh_CN.8094f4d6.js";import"./CaretDownFilled.7c972e8a.js";import"./scrollTo.c9242ea7.js";import"./transButton.fe643f31.js";import"./clickOutside.fb7b2a60.js";import"./useSortable.6348db1d.js";import"./CheckOutlined.42a21925.js";import"./SettingOutlined.74fa68dd.js";import"./useExpose.99213a4b.js";import"./useForm.bcdd98b4.js";var u=o({components:{BasicTable:e},setup(){const{createMessage:e}=s(),[o,{setLoading:n,setColumns:a,getColumns:c,getDataSource:r,reload:l,getPaginationRef:d,setPagination:u,getSelectRows:f,getSelectRowKeys:j,setSelectedRowKeys:b,clearSelectedRowKeys:g}]=p({canResize:!0,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:m,columns:t(),rowKey:"id",showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:o,changeLoading:function(){n(!0),setTimeout((()=>{n(!1)}),1e3)},changeColumns:function(){a(i())},reloadTable:function(){a(t()),l({page:1})},getColumn:function(){e.info("请在控制台查看！")},getTableData:function(){e.info("请在控制台查看！")},getPagination:function(){e.info("请在控制台查看！")},setPaginationInfo:function(){u({current:2}),l()},getSelectRowList:function(){e.info("请在控制台查看！")},getSelectRowKeyList:function(){e.info("请在控制台查看！")},setSelectedRowKeyList:function(){b(["0","1","2"])},clearSelect:function(){g()}}}});const f={class:"p-4"},j={class:"mb-4"},b=d("还原"),g=d("开启loading"),C=d("更改Columns"),k=d("获取Columns"),x=d("获取表格数据"),S=d("跳转到第2页"),w={class:"mb-4"},T=d("获取选中行"),R=d("获取选中行Key"),_=d("设置选中行"),y=d("清空选中行"),h=d("获取分页信息");u.render=function(e,t,i,o,s,d){const m=n("a-button"),p=n("BasicTable");return a(),c("div",f,[r("div",j,[r(m,{class:"mr-2",onClick:e.reloadTable},{default:l((()=>[b])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.changeLoading},{default:l((()=>[g])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.changeColumns},{default:l((()=>[C])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.getColumn},{default:l((()=>[k])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.getTableData},{default:l((()=>[x])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.setPaginationInfo},{default:l((()=>[S])),_:1},8,["onClick"])]),r("div",w,[r(m,{class:"mr-2",onClick:e.getSelectRowList},{default:l((()=>[T])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:l((()=>[R])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:l((()=>[_])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.clearSelect},{default:l((()=>[y])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.getPagination},{default:l((()=>[h])),_:1},8,["onClick"])]),r(p,{onRegister:e.registerTable},null,8,["onRegister"])])};export default u;