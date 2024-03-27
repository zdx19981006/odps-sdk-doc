"use strict";(self.webpackChunkodps_sdk_doc=self.webpackChunkodps_sdk_doc||[]).push([[822],{2577:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>o,frontMatter:()=>d,metadata:()=>r,toc:()=>t});var a=l(5893),i=l(1151);const d={title:"Table",sidebar_position:2},s="Table",r={id:"odps-sdk-core/api-reference/Table",title:"Table",description:"Table \u7c7b\u4ee3\u8868ODPS\u4e2d\u7684\u8868\uff0c\u53ef\u4ee5\u7528\u4e8e\u8fdb\u884c\u8868\u64cd\u4f5c\uff0c\u6bd4\u5982\u8868\u7684\u67e5\u8be2\u3001\u5206\u533a\u64cd\u4f5c\u7b49\u3002\u4e0b\u9762\u662fTable \u7c7b\u7684\u4f7f\u7528\u8bf4\u660e\u3002",source:"@site/docs/odps-sdk-core/api-reference/Table.md",sourceDirName:"odps-sdk-core/api-reference",slug:"/odps-sdk-core/api-reference/Table",permalink:"/odps-sdk-doc/docs/next/odps-sdk-core/api-reference/Table",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/odps-sdk-core/api-reference/Table.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Table",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u76ee\u5f55",permalink:"/odps-sdk-doc/docs/next/odps-sdk-core/api-reference/intro"},next:{title:"Account",permalink:"/odps-sdk-doc/docs/next/odps-sdk-core/api-reference/Account"}},c={},t=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"\u521b\u5efa\u8868\u5b9e\u4f8b\u5bf9\u8c61",id:"\u521b\u5efa\u8868\u5b9e\u4f8b\u5bf9\u8c61",level:2},{value:"\u8868\u57fa\u672c\u4fe1\u606f",id:"\u8868\u57fa\u672c\u4fe1\u606f",level:2},{value:"\u83b7\u53d6\u8868\u540d",id:"\u83b7\u53d6\u8868\u540d",level:3},{value:"\u83b7\u53d6\u8868\u7ed3\u6784",id:"\u83b7\u53d6\u8868\u7ed3\u6784",level:3},{value:"\u83b7\u53d6\u8868\u6240\u5728\u9879\u76ee\u540d",id:"\u83b7\u53d6\u8868\u6240\u5728\u9879\u76ee\u540d",level:3},{value:"\u83b7\u53d6\u8868\u6240\u5728Schema\u540d",id:"\u83b7\u53d6\u8868\u6240\u5728schema\u540d",level:3},{value:"\u83b7\u53d6\u8868\u6ce8\u91ca",id:"\u83b7\u53d6\u8868\u6ce8\u91ca",level:3},{value:"\u83b7\u53d6\u8868\u6240\u5c5e\u7528\u6237",id:"\u83b7\u53d6\u8868\u6240\u5c5e\u7528\u6237",level:3},{value:"\u83b7\u53d6\u8868\u7c7b\u578b",id:"\u83b7\u53d6\u8868\u7c7b\u578b",level:3},{value:"\u83b7\u53d6\u521b\u5efa\u65f6\u95f4",id:"\u83b7\u53d6\u521b\u5efa\u65f6\u95f4",level:3},{value:"\u83b7\u53d6\u6700\u540e\u4fee\u6539\u65f6\u95f4",id:"\u83b7\u53d6\u6700\u540e\u4fee\u6539\u65f6\u95f4",level:3},{value:"\u83b7\u53d6\u8868\u5b58\u50a8\u5927\u5c0f",id:"\u83b7\u53d6\u8868\u5b58\u50a8\u5927\u5c0f",level:3},{value:"\u83b7\u53d6\u8868\u6570\u636e\u6570\u91cf",id:"\u83b7\u53d6\u8868\u6570\u636e\u6570\u91cf",level:3},{value:"\u83b7\u53d6\u8868\u751f\u547d\u5468\u671f",id:"\u83b7\u53d6\u8868\u751f\u547d\u5468\u671f",level:3},{value:"\u83b7\u53d6Shard",id:"\u83b7\u53d6shard",level:3},{value:"\u8868\u6570\u636e\u64cd\u4f5c",id:"\u8868\u6570\u636e\u64cd\u4f5c",level:2},{value:"\u8bfb\u53d6\u8868\u6570\u636e",id:"\u8bfb\u53d6\u8868\u6570\u636e",level:3},{value:"\u5220\u9664\u8868\u6570\u636e",id:"\u5220\u9664\u8868\u6570\u636e",level:3},{value:"\u5206\u533a\u64cd\u4f5c",id:"\u5206\u533a\u64cd\u4f5c",level:2},{value:"\u83b7\u53d6\u5206\u533a",id:"\u83b7\u53d6\u5206\u533a",level:3},{value:"\u83b7\u53d6\u6240\u6709\u5206\u533a",id:"\u83b7\u53d6\u6240\u6709\u5206\u533a",level:3},{value:"\u5224\u65ad\u5206\u533a\u662f\u5426\u5b58\u5728",id:"\u5224\u65ad\u5206\u533a\u662f\u5426\u5b58\u5728",level:3},{value:"\u521b\u5efa\u5206\u533a",id:"\u521b\u5efa\u5206\u533a",level:3},{value:"\u5220\u9664\u5206\u533a",id:"\u5220\u9664\u5206\u533a",level:3},{value:"\u6807\u7b7e\u64cd\u4f5c",id:"\u6807\u7b7e\u64cd\u4f5c",level:2},{value:"\u83b7\u53d6\u6807\u7b7e",id:"\u83b7\u53d6\u6807\u7b7e",level:3},{value:"\u6dfb\u52a0\u6807\u7b7e",id:"\u6dfb\u52a0\u6807\u7b7e",level:3},{value:"\u5220\u9664\u6807\u7b7e",id:"\u5220\u9664\u6807\u7b7e",level:3},{value:"\u83b7\u53d6\u7b80\u5355\u6807\u7b7e",id:"\u83b7\u53d6\u7b80\u5355\u6807\u7b7e",level:3},{value:"\u6dfb\u52a0\u7b80\u5355\u6807\u7b7e",id:"\u6dfb\u52a0\u7b80\u5355\u6807\u7b7e",level:3},{value:"\u5220\u9664\u7b80\u5355\u6807\u7b7e",id:"\u5220\u9664\u7b80\u5355\u6807\u7b7e",level:3},{value:"\u8868\u6269\u5c55\u4fe1\u606f",id:"\u8868\u6269\u5c55\u4fe1\u606f",level:2},{value:"\u67e5\u770b\u6269\u5c55\u4fe1\u606f\u7684\u4fdd\u7559\u5b57\u6bb5",id:"\u67e5\u770b\u6269\u5c55\u4fe1\u606f\u7684\u4fdd\u7559\u5b57\u6bb5",level:3},{value:"\u67e5\u770b\u8868\u662f\u5426\u8fdb\u884c\u8fc7\u5f52\u6863\uff08archive\uff09\u64cd\u4f5c",id:"\u67e5\u770b\u8868\u662f\u5426\u8fdb\u884c\u8fc7\u5f52\u6863archive\u64cd\u4f5c",level:3},{value:"\u67e5\u770b\u8868\u662f\u5426\u4e8b\u52a1\u5316\uff08transactional\uff09",id:"\u67e5\u770b\u8868\u662f\u5426\u4e8b\u52a1\u5316transactional",level:3},{value:"\u67e5\u770b\u8868\u6240\u5360\u78c1\u76d8\u7684\u7269\u7406\u5927\u5c0f",id:"\u67e5\u770b\u8868\u6240\u5360\u78c1\u76d8\u7684\u7269\u7406\u5927\u5c0f",level:3},{value:"\u67e5\u770b\u8868\u5360\u7528\u6587\u4ef6\u6570",id:"\u67e5\u770b\u8868\u5360\u7528\u6587\u4ef6\u6570",level:3},{value:"\u67e5\u770bcluster range \u8868\u7684 cluster \u4fe1\u606f",id:"\u67e5\u770bcluster-range-\u8868\u7684-cluster-\u4fe1\u606f",level:3},{value:"\u7269\u5316\u89c6\u56fe\u64cd\u4f5c",id:"\u7269\u5316\u89c6\u56fe\u64cd\u4f5c",level:2},{value:"\u67e5\u770b\u662f\u5426\u80fd\u591f\u5e94\u7528\u7269\u5316\u89c6\u56fe\u91cd\u5199",id:"\u67e5\u770b\u662f\u5426\u80fd\u591f\u5e94\u7528\u7269\u5316\u89c6\u56fe\u91cd\u5199",level:3},{value:"\u67e5\u770b\u7269\u5316\u89c6\u56fe\u662f\u5426\u8fc7\u671f",id:"\u67e5\u770b\u7269\u5316\u89c6\u56fe\u662f\u5426\u8fc7\u671f",level:3},{value:"\u89c6\u56fe\u64cd\u4f5c",id:"\u89c6\u56fe\u64cd\u4f5c",level:2},{value:"\u83b7\u53d6\u89c6\u56fe\u7684\u6587\u672c\u5185\u5bb9",id:"\u83b7\u53d6\u89c6\u56fe\u7684\u6587\u672c\u5185\u5bb9",level:3},{value:"\u5916\u90e8\u8868\u64cd\u4f5c",id:"\u5916\u90e8\u8868\u64cd\u4f5c",level:2},{value:"\u5916\u90e8\u8868\u6570\u636e\u5b58\u50a8\u4f4d\u7f6e",id:"\u5916\u90e8\u8868\u6570\u636e\u5b58\u50a8\u4f4d\u7f6e",level:3},{value:"\u5916\u90e8\u8868\u4f7f\u7528\u7684\u8d44\u6e90",id:"\u5916\u90e8\u8868\u4f7f\u7528\u7684\u8d44\u6e90",level:3},{value:"\u5916\u90e8\u8868\u6570\u636e\u5904\u7406\u53e5\u67c4",id:"\u5916\u90e8\u8868\u6570\u636e\u5904\u7406\u53e5\u67c4",level:3},{value:"\u5916\u90e8\u8868\u5e8f\u5217\u5316\u914d\u7f6e\uff08SerDe\uff09",id:"\u5916\u90e8\u8868\u5e8f\u5217\u5316\u914d\u7f6eserde",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"table",children:"Table"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Table"})," \u7c7b\u4ee3\u8868ODPS\u4e2d\u7684\u8868\uff0c\u53ef\u4ee5\u7528\u4e8e\u8fdb\u884c\u8868\u64cd\u4f5c\uff0c\u6bd4\u5982\u8868\u7684\u67e5\u8be2\u3001\u5206\u533a\u64cd\u4f5c\u7b49\u3002\u4e0b\u9762\u662f",(0,a.jsx)(n.code,{children:"Table"})," \u7c7b\u7684\u4f7f\u7528\u8bf4\u660e\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u6982\u89c8",children:"\u6982\u89c8"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#%E5%88%9B%E5%BB%BA%E8%A1%A8%E5%AE%9E%E4%BE%8B%E5%AF%B9%E8%B1%A1",children:"\u521b\u5efa\u8868\u5b9e\u4f8b\u5bf9\u8c61"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#%E8%A1%A8%E5%9F%BA%E6%9C%AC%E4%BF%A1%E6%81%AF",children:"\u8868\u57fa\u672c\u4fe1\u606f"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#%E8%A1%A8%E6%95%B0%E6%8D%AE%E6%93%8D%E4%BD%9C",children:"\u8868\u6570\u636e\u64cd\u4f5c"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#%E5%88%86%E5%8C%BA%E6%93%8D%E4%BD%9C",children:"\u5206\u533a\u64cd\u4f5c"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#%E6%A0%87%E7%AD%BE%E6%93%8D%E4%BD%9C",children:"\u6807\u7b7e\u64cd\u4f5c"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#%E8%A1%A8%E6%89%A9%E5%B1%95%E4%BF%A1%E6%81%AF",children:"\u8868\u6269\u5c55\u4fe1\u606f"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#%E7%89%A9%E5%8C%96%E8%A7%86%E5%9B%BE%E6%93%8D%E4%BD%9C",children:"\u7269\u5316\u89c6\u56fe\u64cd\u4f5c"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#%E8%A7%86%E5%9B%BE%E6%93%8D%E4%BD%9C",children:"\u89c6\u56fe\u64cd\u4f5c"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#%E5%A4%96%E9%83%A8%E8%A1%A8%E6%93%8D%E4%BD%9C",children:"\u5916\u90e8\u8868\u64cd\u4f5c"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u521b\u5efa\u8868\u5b9e\u4f8b\u5bf9\u8c61",children:"\u521b\u5efa\u8868\u5b9e\u4f8b\u5bf9\u8c61"}),"\n",(0,a.jsx)(n.p,{children:"\u8981\u64cd\u4f5c\u8868\uff0c\u9996\u5148\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u8868\u7684\u5b9e\u4f8b\u5bf9\u8c61\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u6ce8\u610f\uff0c\u83b7\u53d6\u8868\u5b9e\u4f8b\u662f\u4e00\u4e2alazy\u64cd\u4f5c\uff0c\u5373\u53ea\u6709\u5f53\u8c03\u7528",(0,a.jsx)(n.code,{children:"Table"})," \u7c7b\u7684\u5176\u4ed6\u65b9\u6cd5\u65f6\uff0c\u624d\u4f1a\u771f\u6b63\u83b7\u53d6\u8868\u7684\u5143\u6570\u636e\u4fe1\u606f\u3002\u540c\u65f6\uff0c\u53ea\u6709\u8868\u771f\u5b9e\u5b58\u5728\uff0c\u624d\u80fd\u83b7\u53d6\u5230\u8868\u5b9e\u4f8b\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'Table table = odps.tables().get("table_project", "table_name");\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u5f53\u5f00\u542f",(0,a.jsx)(n.a,{href:"https://help.aliyun.com/zh/maxcompute/user-guide/schemas",children:"Schema\u529f\u80fd"}),"\u540e\uff0c\u53ef\u4ee5\u4f20\u5165schema\u53c2\u6570\uff0c\u6765\u83b7\u53d6\u6307\u5b9aTable\u5b9e\u4f8b\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'Table table = odps.tables().get("table_project", "schema_name", "table_name");\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u8868\u57fa\u672c\u4fe1\u606f",children:"\u8868\u57fa\u672c\u4fe1\u606f"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Table"}),"\u4f5c\u4e3a\u4e00\u4e2a\u5b9e\u73b0",(0,a.jsx)(n.code,{children:"lazyload"}),"\u529f\u80fd\u7684\u5bf9\u8c61\uff0c\u53ea\u6709\u5728\u8c03\u7528\u4ee5\u4e0b\u65b9\u6cd5\u65f6\uff0c\u624d\u4f1a\u8fdb\u884c\u7f51\u7edc\u901a\u4fe1\uff0c\u83b7\u53d6\u771f\u6b63\u7684\u5143\u6570\u636e\u4fe1\u606f\u3002\n\u540c\u65f6\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u624b\u52a8\u8c03\u7528",(0,a.jsx)(n.code,{children:"reload()"}),"\u65b9\u6cd5\uff0c\u6765\u8fbe\u5230\u540c\u6837\u7684\u6548\u679c\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"table.reload();\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u9664\u975e\u624b\u52a8\u89e6\u53d1",(0,a.jsx)(n.code,{children:"reload()"}),"\u65b9\u6cd5\uff0c\u5426\u5219Table\u5728",(0,a.jsx)(n.code,{children:"reload"}),"\u4e00\u6b21\u4e4b\u540e\u9ed8\u8ba4\u4f7f\u7528\u7f13\u5b58\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"\u83b7\u53d6\u8868\u540d",children:"\u83b7\u53d6\u8868\u540d"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"String tableName = table.getName();\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u83b7\u53d6\u8868\u7ed3\u6784",children:"\u83b7\u53d6\u8868\u7ed3\u6784"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// \u7ed3\u6784\u5316\u6570\u636e\nTableSchema tableSchema = table.getSchema();\n// json\u7c7b\u578b\u6570\u636e\nString jsonSchema = table.getJsonSchema();\n\ntableSchema.getColumns(); // \u83b7\u53d6data\u5217\uff08\u4e0d\u5305\u542b\u5206\u533a\u5217\uff09\ntableSchema.getPartitionColumns(); // \u83b7\u53d6\u5206\u533a\u5217\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u83b7\u53d6\u8868\u6240\u5728\u9879\u76ee\u540d",children:"\u83b7\u53d6\u8868\u6240\u5728\u9879\u76ee\u540d"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"String projectName = table.getProject();\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u83b7\u53d6\u8868\u6240\u5728schema\u540d",children:"\u83b7\u53d6\u8868\u6240\u5728Schema\u540d"}),"\n",(0,a.jsxs)(n.p,{children:["\u9700\u8981\u5f00\u542f",(0,a.jsx)(n.a,{href:"https://help.aliyun.com/zh/maxcompute/user-guide/schemas",children:"Schema\u529f\u80fd"}),"\uff0c\u624d\u80fd\u6b63\u786e\u83b7\u53d6\u8be5\u5b57\u6bb5\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"String schemaName = table.getSchemaName();\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u83b7\u53d6\u8868\u6ce8\u91ca",children:"\u83b7\u53d6\u8868\u6ce8\u91ca"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"String comment = table.getComment();\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u83b7\u53d6\u8868\u6240\u5c5e\u7528\u6237",children:"\u83b7\u53d6\u8868\u6240\u5c5e\u7528\u6237"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"String owner = table.getOwner();\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u83b7\u53d6\u8868\u7c7b\u578b",children:"\u83b7\u53d6\u8868\u7c7b\u578b"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"Table.TableType tableType = table.getType();\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u76ee\u524d\u8868\u7c7b\u578b\u5206\u88ab\u4e3a\u4ee5\u4e0b\u56db\u7c7b"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public enum TableType {\n    /**\n     * \u5e38\u89c4maxcompute(odps)\u8868\n     */\n    MANAGED_TABLE,\n    /**\n     * \u89c6\u56fe\n     * https://help.aliyun.com/zh/maxcompute/user-guide/view-related-operations\n     */\n    VIRTUAL_VIEW,\n    /**\n     * \u5916\u8868\n     * https://help.aliyun.com/zh/maxcompute/user-guide/external-data-sources\n     */\n    EXTERNAL_TABLE,\n    /**\n     * \u7269\u5316\u89c6\u56fe \n     * https://help.aliyun.com/zh/maxcompute/user-guide/materialized-views\n     */\n    MATERIALIZED_VIEW\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u884d\u751f\u8868\u7c7b\u578b\u5224\u65ad\u65b9\u6cd5"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"table.isVirtualView();\ntable.isMaterializedView();\ntable.isExternalTable();\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u83b7\u53d6\u521b\u5efa\u65f6\u95f4",children:"\u83b7\u53d6\u521b\u5efa\u65f6\u95f4"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"Date createdTime = table.getCreatedTime();\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u83b7\u53d6\u6700\u540e\u4fee\u6539\u65f6\u95f4",children:"\u83b7\u53d6\u6700\u540e\u4fee\u6539\u65f6\u95f4"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"Date lastMetaModifiedTime = table.getLastMetaModifiedTime();\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u83b7\u53d6\u8868\u5b58\u50a8\u5927\u5c0f",children:"\u83b7\u53d6\u8868\u5b58\u50a8\u5927\u5c0f"}),"\n",(0,a.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u6b64\u65b9\u6cd5\u901a\u5e38\u4e0d\u4fdd\u8bc1\u548c\u5b9e\u9645\u5360\u7528\u5b58\u50a8\u5927\u5c0f\u76f8\u540c\u3002\u5355\u4f4d\u4e3a",(0,a.jsx)(n.code,{children:"bytes"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"long size = table.getSize();\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u83b7\u53d6\u8868\u6570\u636e\u6570\u91cf",children:"\u83b7\u53d6\u8868\u6570\u636e\u6570\u91cf"}),"\n",(0,a.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u6b64\u65b9\u6cd5\u5f53\u65e0\u51c6\u786e\u6570\u636e\u65f6\uff0c\u8fd4\u56de-1"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"long recordNum = table.getRecordNum();\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u83b7\u53d6\u8868\u751f\u547d\u5468\u671f",children:"\u83b7\u53d6\u8868\u751f\u547d\u5468\u671f"}),"\n",(0,a.jsx)(n.p,{children:"\u5355\u4f4d\u4e3a\u5929"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"long lifeCycle = table.getLife();\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u83b7\u53d6shard",children:"\u83b7\u53d6Shard"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"Shard shard = table.getShard();\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u8868\u6570\u636e\u64cd\u4f5c",children:"\u8868\u6570\u636e\u64cd\u4f5c"}),"\n",(0,a.jsx)(n.h3,{id:"\u8bfb\u53d6\u8868\u6570\u636e",children:"\u8bfb\u53d6\u8868\u6570\u636e"}),"\n",(0,a.jsxs)(n.p,{children:["\u5f53\u4ec5\u9700\u8981\u5bf9\u6570\u636e\u8fdb\u884c\u9884\u89c8\u64cd\u4f5c\uff08\u8bfb\u53d6\u5c11\u91cf\u6570\u636e\uff09\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,a.jsx)(n.code,{children:"Table.read()"}),"\u65b9\u6cd5\u6765\u8fdb\u884c\u64cd\u4f5c\u3002\n\u5bf9\u4e8e\u5927\u91cf\u6570\u636e\u7684\u64cd\u4f5c\uff0c\u5e94\u5f53\u4f7f\u7528",(0,a.jsx)(n.code,{children:"Tunnel"}),"\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"Table.read \u65b9\u6cd5\u7528\u4e8e\u8bfb\u53d6\u8868\u5185\u7684\u6570\u636e\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u4e0d\u540c\u7684\u91cd\u8f7d\u7248\u672c\u6765\u8bfb\u53d6\u5168\u8868\u6570\u636e\u3001\u6307\u5b9a\u5206\u533a\u7684\u6570\u636e\u3001\u6307\u5b9a\u5217\u7684\u6570\u636e\uff0c\u4ee5\u53ca\u8bbe\u7f6e\u6570\u636e\u8bfb\u53d6\u7684\u884c\u6570\u9650\u5236\u548c\u65f6\u533a\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u65b9\u6cd5\u7b7e\u540d"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public RecordReader read(int limit) throws OdpsException\npublic RecordReader read(PartitionSpec partition, List<String> columns, int limit) throws OdpsException\npublic RecordReader read(PartitionSpec partition, List<String> columns, int limit, String timezone) throws OdpsException\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"limit"}),": \u6700\u591a\u8bfb\u53d6\u7684\u8bb0\u5f55\u884c\u6570\u3002\u5982\u679c\u5c0f\u4e8e0\uff0c\u5c06\u629b\u51fa\u5f02\u5e38\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"partition"}),": \u8868\u7684\u5206\u533a\uff08PartitionSpec \u5bf9\u8c61\uff09\u3002\u5982\u679c\u4e0d\u6307\u5b9a\u5206\u533a\uff0c\u5219\u4f20\u5165 null\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"columns"}),": \u6240\u8981\u8bfb\u53d6\u7684\u5217\u540d\u5217\u8868\u3002\u5982\u679c\u8bfb\u53d6\u5168\u8868\uff0c\u5219\u4f20\u5165 null\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"timezone"}),': \u8bbe\u7f6e datetime \u7c7b\u578b\u6570\u636e\u7684\u65f6\u533a\u5b57\u7b26\u4e32\uff0c\u5982 "Asia/Shanghai"\u3002\u5982\u679c\u4e0d\u8bbe\u7f6e\uff0c\u5219\u4f7f\u7528\u9ed8\u8ba4\u65f6\u533a\u3002']}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u6ce8\u610f"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u8bfb\u53d6\u6570\u636e\u65f6\uff0c\u6700\u591a\u8fd4\u56de 1W \u6761\u8bb0\u5f55\uff0c\u82e5\u8d85\u8fc7\uff0c\u6570\u636e\u5c06\u88ab\u622a\u65ad\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u8bfb\u53d6\u7684\u6570\u636e\u5927\u5c0f\u4e0d\u80fd\u8d85\u8fc7 10MB\uff0c\u5426\u5219\u5c06\u629b\u51fa\u5f02\u5e38\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'Table table = ...; // \u83b7\u53d6Table\u5bf9\u8c61\u7684\u4ee3\u7801\ntry {\n    RecordReader reader = table.read(partition, columns, 1000, "Asia/Shanghai");\n    Record record;\n    while ((record = reader.read()) != null) {\n        // \u5904\u7406\u6bcf\u4e00\u6761\u8bb0\u5f55\n    }\n} catch (OdpsException e) {\n    // \u5f02\u5e38\u5904\u7406\n} catch (IOException e) {\n    // IO\u5f02\u5e38\u5904\u7406\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"\u5220\u9664\u8868\u6570\u636e",children:"\u5220\u9664\u8868\u6570\u636e"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"table.truncate();\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u5206\u533a\u64cd\u4f5c",children:"\u5206\u533a\u64cd\u4f5c"}),"\n",(0,a.jsx)(n.h3,{id:"\u83b7\u53d6\u5206\u533a",children:"\u83b7\u53d6\u5206\u533a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"Partition partition = table.getPartition(partitionSpec);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u83b7\u53d6\u6240\u6709\u5206\u533a",children:"\u83b7\u53d6\u6240\u6709\u5206\u533a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"List<Partition> partitions = table.getPartitions();\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u5224\u65ad\u5206\u533a\u662f\u5426\u5b58\u5728",children:"\u5224\u65ad\u5206\u533a\u662f\u5426\u5b58\u5728"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"boolean exists = table.hasPartition(partitionSpec);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u521b\u5efa\u5206\u533a",children:"\u521b\u5efa\u5206\u533a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"table.createPartition(partitionSpec);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u5220\u9664\u5206\u533a",children:"\u5220\u9664\u5206\u533a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"table.deletePartition(partitionSpec);\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u6807\u7b7e\u64cd\u4f5c",children:"\u6807\u7b7e\u64cd\u4f5c"}),"\n",(0,a.jsx)(n.p,{children:"MaxCompute(ODPS) \u652f\u6301\u5bf9\u8868\u3001\u5b57\u6bb5\u8fdb\u884c\u6253\u6807\u64cd\u4f5c\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u901a\u8fc7\u6807\u7b7e\uff0c\u53ef\u4ee5\u57fa\u4e8e\u4e0d\u540c\u7684\u4e1a\u52a1\u573a\u666f\u5bf9\u6570\u636e\u505a\u6807\u8bc6(Tagging), \u4f7f\u4e1a\u52a1\u80fd\u591f\u57fa\u4e8eTagging\u5408\u7406\u4f7f\u7528\u6570\u636e\uff08\u5982\u6570\u636e\u8bbf\u95ee\u63a7\u5236\uff0c\u6570\u636e\u8840\u7f18\u8ffd\u8e2a\uff09\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u83b7\u53d6\u6807\u7b7e",children:"\u83b7\u53d6\u6807\u7b7e"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'// \u8868\u7ea7\u522b\nList<Tag> tags = table.getTags();\n// \u5b57\u6bb5\u7ea7\u522b\nList<Tag> tags = table.getTags("columnName");\n'})}),"\n",(0,a.jsx)(n.h3,{id:"\u6dfb\u52a0\u6807\u7b7e",children:"\u6dfb\u52a0\u6807\u7b7e"}),"\n",(0,a.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u8868\u548c\u6807\u7b7e\u5e94\u5f53\u5c5e\u4e8e\u540c\u4e00\u4e2a",(0,a.jsx)(n.code,{children:"project"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'// \u8868\u7ea7\u522b\ntable.addTag(tag);\n// \u5b57\u6bb5\u7ea7\u522b\ntable.addTag(tag, List.of("column1", "column2"));\n'})}),"\n",(0,a.jsx)(n.h3,{id:"\u5220\u9664\u6807\u7b7e",children:"\u5220\u9664\u6807\u7b7e"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"table.removeTag(tag);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u83b7\u53d6\u7b80\u5355\u6807\u7b7e",children:"\u83b7\u53d6\u7b80\u5355\u6807\u7b7e"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'// \u8868\u7ea7\u522b\nMap<String, Map<String, String>> simpleTags = table.getSimpleTags();\n// \u5b57\u6bb5\u7ea7\u522b\nMap<String, Map<String, String>> simpleTags = table.getSimpleTags("columnName");\n'})}),"\n",(0,a.jsx)(n.h3,{id:"\u6dfb\u52a0\u7b80\u5355\u6807\u7b7e",children:"\u6dfb\u52a0\u7b80\u5355\u6807\u7b7e"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'// \u8868\u7ea7\u522b\ntable.addSimpleTag(category, key, value);\n// \u5b57\u6bb5\u7ea7\u522b\ntable.addSimpleTag(category, key, value, List.of("column1", "column2"));\n'})}),"\n",(0,a.jsx)(n.h3,{id:"\u5220\u9664\u7b80\u5355\u6807\u7b7e",children:"\u5220\u9664\u7b80\u5355\u6807\u7b7e"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'// \u8868\u7ea7\u522b\ntable.removeSimpleTag(category, key, value);\n// \u5b57\u6bb5\u7ea7\u522b\ntable.removeSimpleTag(category, key, value, List.of("column1", "column2"));\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u8868\u6269\u5c55\u4fe1\u606f",children:"\u8868\u6269\u5c55\u4fe1\u606f"}),"\n",(0,a.jsxs)(n.p,{children:["\u8fd9\u90e8\u5206\u4fe1\u606f\u4e5f\u5c5e\u4e8e",(0,a.jsx)(n.code,{children:"lazyload"}),"\u64cd\u4f5c\uff0c\u4f1a\u5728\u7b2c\u4e00\u6b21\u8c03\u7528\u6b64\u7c7b\u65b9\u6cd5\u65f6\u83b7\u53d6\u6570\u636e\uff0c\u7136\u800c\uff0c\u65e0\u6cd5\u901a\u8fc7\u624b\u52a8\u8c03\u7528",(0,a.jsx)(n.code,{children:"reload()"}),"\u65b9\u6cd5\u5237\u65b0\u3002\n\u56e0\u4e3a\u8fd9\u90e8\u5206\u4fe1\u606f\u901a\u5e38\u968f\u7740table\u7684\u521b\u5efa\u800c\u786e\u5b9a\uff0c\u6216\u53d8\u5316\u8f83\u5c11\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"\u67e5\u770b\u6269\u5c55\u4fe1\u606f\u7684\u4fdd\u7559\u5b57\u6bb5",children:"\u67e5\u770b\u6269\u5c55\u4fe1\u606f\u7684\u4fdd\u7559\u5b57\u6bb5"}),"\n",(0,a.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u4e3aJson\u5b57\u7b26\u4e32"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"String reserved = table.getReserved();\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u67e5\u770b\u8868\u662f\u5426\u8fdb\u884c\u8fc7\u5f52\u6863archive\u64cd\u4f5c",children:"\u67e5\u770b\u8868\u662f\u5426\u8fdb\u884c\u8fc7\u5f52\u6863\uff08archive\uff09\u64cd\u4f5c"}),"\n",(0,a.jsx)(n.p,{children:"\u8fd4\u56detrue\u8868\u793a\u8fdb\u884c\u8fc7\u5f52\u6863\uff08archive\uff09\u64cd\u4f5c\uff0cfalse\u8868\u793a\u672a\u8fdb\u884c\u8fc7"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"table.isArchived();\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u67e5\u770b\u8868\u662f\u5426\u4e8b\u52a1\u5316transactional",children:"\u67e5\u770b\u8868\u662f\u5426\u4e8b\u52a1\u5316\uff08transactional\uff09"}),"\n",(0,a.jsx)(n.p,{children:"\u8fd4\u56detrue\u8868\u793a\u4e8b\u52a1\u5316\uff08transactional\uff09\uff0cfalse\u53cd\u4e4b"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"table.isTransactional();\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u67e5\u770b\u8868\u6240\u5360\u78c1\u76d8\u7684\u7269\u7406\u5927\u5c0f",children:"\u67e5\u770b\u8868\u6240\u5360\u78c1\u76d8\u7684\u7269\u7406\u5927\u5c0f"}),"\n",(0,a.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u6b64\u7c7b\u65b9\u6cd5\u901a\u5e38\u4e3a\u4f30\u8ba1\u503c\uff0c\u4e0d\u4fdd\u8bc1\u51c6\u786e\u6027"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"long physicalSize = table.getPhysicalSize();\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u67e5\u770b\u8868\u5360\u7528\u6587\u4ef6\u6570",children:"\u67e5\u770b\u8868\u5360\u7528\u6587\u4ef6\u6570"}),"\n",(0,a.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u6b64\u7c7b\u65b9\u6cd5\u901a\u5e38\u4e3a\u4f30\u8ba1\u503c\uff0c\u4e0d\u4fdd\u8bc1\u51c6\u786e\u6027"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"long fileNum = table.getFileNum();\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u67e5\u770bcluster-range-\u8868\u7684-cluster-\u4fe1\u606f",children:"\u67e5\u770bcluster range \u8868\u7684 cluster \u4fe1\u606f"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"ClusterInfo clusterInfo = table.getClusterInfo();\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u7269\u5316\u89c6\u56fe\u64cd\u4f5c",children:"\u7269\u5316\u89c6\u56fe\u64cd\u4f5c"}),"\n",(0,a.jsx)(n.h3,{id:"\u67e5\u770b\u662f\u5426\u80fd\u591f\u5e94\u7528\u7269\u5316\u89c6\u56fe\u91cd\u5199",children:"\u67e5\u770b\u662f\u5426\u80fd\u591f\u5e94\u7528\u7269\u5316\u89c6\u56fe\u91cd\u5199"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"boolean flag = table.isMaterializedViewRewriteEnabled();\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u67e5\u770b\u7269\u5316\u89c6\u56fe\u662f\u5426\u8fc7\u671f",children:"\u67e5\u770b\u7269\u5316\u89c6\u56fe\u662f\u5426\u8fc7\u671f"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"table.isMaterializedViewOutdated();\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u89c6\u56fe\u64cd\u4f5c",children:"\u89c6\u56fe\u64cd\u4f5c"}),"\n",(0,a.jsx)(n.h3,{id:"\u83b7\u53d6\u89c6\u56fe\u7684\u6587\u672c\u5185\u5bb9",children:"\u83b7\u53d6\u89c6\u56fe\u7684\u6587\u672c\u5185\u5bb9"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"table.getViewText();\ntable.getViewExpandedText();\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u5916\u90e8\u8868\u64cd\u4f5c",children:"\u5916\u90e8\u8868\u64cd\u4f5c"}),"\n",(0,a.jsx)(n.h3,{id:"\u5916\u90e8\u8868\u6570\u636e\u5b58\u50a8\u4f4d\u7f6e",children:"\u5916\u90e8\u8868\u6570\u636e\u5b58\u50a8\u4f4d\u7f6e"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"String location = table.getLocation();\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u5916\u90e8\u8868\u4f7f\u7528\u7684\u8d44\u6e90",children:"\u5916\u90e8\u8868\u4f7f\u7528\u7684\u8d44\u6e90"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"String resources = table.getResources();\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u5916\u90e8\u8868\u6570\u636e\u5904\u7406\u53e5\u67c4",children:"\u5916\u90e8\u8868\u6570\u636e\u5904\u7406\u53e5\u67c4"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"String storageHandler = table.getStorageHandler();\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u5916\u90e8\u8868\u5e8f\u5217\u5316\u914d\u7f6eserde",children:"\u5916\u90e8\u8868\u5e8f\u5217\u5316\u914d\u7f6e\uff08SerDe\uff09"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"Map<String, String> serDeProperties = table.getSerDeProperties();\n"})})]})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1151:(e,n,l)=>{l.d(n,{Z:()=>r,a:()=>s});var a=l(7294);const i={},d=a.createContext(i);function s(e){const n=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);