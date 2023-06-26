"use strict";(self.webpackChunkotory_book=self.webpackChunkotory_book||[]).push([[228],{"./src/components/Button/Button.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Large:()=>Large,Medium:()=>Medium,Outlined:()=>Outlined,Primary:()=>Primary,Secondary:()=>Secondary,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=({primary,size,label,onClick,disabled,...props})=>(0,jsx_runtime.jsx)(DefaultButton,{primary,size,onClick,disabled,...props,children:label});Button.displayName="Button";const DefaultButton=styled_components_browser_esm.zo.button`
  font-weight: 700;
  line-height: 24px;
  color: #fff;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;

  ${props=>(({primary})=>{switch(primary){case"primary":return styled_components_browser_esm.iv`
        background-color: #4C6EF5;
        &:hover {
          background-color: #364FC7;
        }
        &:disabled{
          background-color: #DBE4FF;
        }
      `;case"secondary":return styled_components_browser_esm.iv`
        background-color: #FF922B;
        &:hover {
          background-color: #F76707;
        }
        &:disabled{
          background-color: #FFE8CC;
        }
      `;case"outlined":return styled_components_browser_esm.iv`
        color: #4C6EF5;
        border: 1px solid #4C6EF5;
        background-color: #fff;
        &:hover {
          background-color: #E7F5FF;
        }
        &:disabled{
          color: #D0EBFF;
          border: 1px solid #D0EBFF;
          background-color: #fff;
        }
      `}})(props)}
  ${props=>(({size})=>{switch(size){case"large":return styled_components_browser_esm.iv`
        height: 48px;
        font-size: 16px;
        padding: 12px 15px;
      `;case"medium":return styled_components_browser_esm.iv`
        height: 40px;
        font-size: 16px;
        padding: 8px 15px;
      `;case"small":return styled_components_browser_esm.iv`
        height: 32px;
        font-size: 14px;
        padding: 4px 15px;
      `}})(props)}
`;Button.propTypes={primary:prop_types_default().oneOf(["primary","secondary","outlined"]),size:prop_types_default().oneOf(["large","medium","small"]),label:prop_types_default().string.isRequired,disabled:prop_types_default().bool,onClick:prop_types_default().func},Button.defaultProps={primary:"primary",size:"medium",label:"Button",onClick:void 0,disabled:!1},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{primary:{defaultValue:{value:"'primary'",computed:!1},description:"Button theme select",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'outlined'",computed:!1}]},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Button size select",type:{name:"enum",value:[{value:"'large'",computed:!1},{value:"'medium'",computed:!1},{value:"'small'",computed:!1}]},required:!1},label:{defaultValue:{value:"'Button'",computed:!1},description:"Button contents",type:{name:"string"},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"Optional click handler",type:{name:"func"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Button contents",type:{name:"bool"},required:!1}}};const Button_stories={title:"Components/Button",component:Button,tags:["autodocs"],argTypes:{}},Primary={args:{primary:"primary",label:"Primary"}},Secondary={args:{primary:"secondary",label:"Secondary"}},Outlined={args:{primary:"outlined",label:"Outlined"}},Large={args:{size:"large"}},Medium={args:{size:"medium"}},Small={args:{size:"small"}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    primary: 'primary',\n    label: 'Primary'\n  }\n}",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  args: {\n    primary: 'secondary',\n    label: 'Secondary'\n  }\n}",...Secondary.parameters?.docs?.source}}},Outlined.parameters={...Outlined.parameters,docs:{...Outlined.parameters?.docs,source:{originalSource:"{\n  args: {\n    primary: 'outlined',\n    label: 'Outlined'\n  }\n}",...Outlined.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'large'\n  }\n}",...Large.parameters?.docs?.source}}},Medium.parameters={...Medium.parameters,docs:{...Medium.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'medium'\n  }\n}",...Medium.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'small'\n  }\n}",...Small.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Secondary","Outlined","Large","Medium","Small"]}}]);
//# sourceMappingURL=Button-Button-stories.d47cd127.iframe.bundle.js.map