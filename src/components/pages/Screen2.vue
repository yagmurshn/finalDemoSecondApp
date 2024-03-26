<template>
  <DropZone ncBgType="bgColor" background="#FFFFFFFF" backgroundImage="" id="06fe9ccc-6a3e-4311-8ecb-7cbcdaaa174f"
    v-bind:style="{'width':'100%','height':'auto'}">
    <SectionContainer v-bind:snapX="false" v-bind:snapY="false" v-bind:isLock="false" ncBgType="bgImage"
      position="relative" ncTooltipText=""
      backgroundImage="https://file.dev.nucal.com/5d3dc32d998c020bb22a126f171a370407da5c8e/public/ae0dcc50-bbdc-4b86-9cfd-3b45d051766f"
      id="b58edfe7-7394-492f-8ba6-b5433786ab8a"
      v-bind:style="{'width':'100%','height':'100%','zIndex':6,'tabIndex':'-1','boxShadow':'','marginTop':'0px','marginLeft':'0px','paddingTop':'','visibility':'visible','borderColor':'#21CA21','borderStyle':'none','marginRight':'0px','paddingLeft':'','marginBottom':'0px','paddingRight':'','paddingBottom':'','borderTopWidth':'1px','textDecoration':'none','borderLeftWidth':'1px','borderRightWidth':'1px','borderBottomWidth':'1px','borderTopLeftRadius':'0px','borderTopRightRadius':'0px','borderBottomLeftRadius':'0px','borderBottomRightRadius':'0px'}">
      <AdvanceDatatable v-bind:items="bindSource('functions.listRecords.data.records')" v-bind:snapX="false"
        v-bind:snapY="false"
        v-bind:fields="[{'key':'id','class':'','label':'Id','sortable':true,'searchable':true},{'key':'createdTime','class':'','label':'CreatedTime','sortable':true,'searchable':true},{'key':'fields','class':'','label':'Fields','sortable':true,'searchable':true}]"
        v-bind:isBusy="false" v-bind:rotate="0" v-bind:isFixed="true" v-bind:isHover="false"
        mapping="functions.listRecords.data.records" v-bind:perPage="5"
        emptyTxt="This datatable is currently empty, but you can customize it with your information."
        position="relative" v-bind:isStriped="true" hoverColor="#EDEDED" selectMode="multi" v-bind:allowExport="true"
        borderColor="#A0A0A080" emptyHeader="Header" v-bind:isFootClone="false" v-bind:outerBorder="true"
        downloadType="CSV" v-bind:isResponsive="true" v-bind:isSelectable="true" animationName=""
        v-bind:hasPagination="true" v-bind:searchControl="true" v-bind:showTotalRows="true"
        emptyFilterTxt="Please consider using different keywords or filters and try your search again."
        v-bind:filterDebounce="0" v-bind:smallSelection="false" textDecoration="none" headerTextColor="#151515FF"
        v-bind:isFooterSorting="true" selectedRowColor="#CACACAFF" borderAffectedArea="all"
        v-bind:defaultSelectedRow="0" v-bind:refreshButtonControl="true" v-bind:tableBodyOuterBorder="true"
        headerBackgroundColor="#FFFFFF4D" cellVerticalBorderColor="#A0A0A080" v-bind:tableCellVerticalBorder="true"
        cellHorizontalBorderColor="#A0A0A080" tableBodyOuterBorderColor="#A0A0A080"
        v-bind:tableCellHorizontalBorder="true" id="e59337cf-fa35-4633-8571-449d27fa0ad3"
        v-bind:style="{'color':'#151515FF','width':'100%','height':'100%','zIndex':8,'minWidth':'350px','fontStyle':'normal','minHeight':'150px','textAlign':'left','wordBreak':'keep-all','background':'#FFFFFF4D','fontFamily':'Inter','fontWeight':400,'textIndent':'0px','visibility':'visible','whiteSpace':'nowrap','wordSpacing':'0px','letterSpacing':'0px','textTransform':'none'}"/>
      <WTextFormatting text="View Our Results" color="#000000" v-bind:snapX="false" v-bind:snapY="false"
        v-bind:rotate="0" position="relative" highlight="transparent" background="transparent" v-bind:isClipping="false"
        ncTypography="custom" animationName="" ncTooltipText="" id="3176dc9c-8b0f-4dcf-af0d-ec039d85871f"
        v-bind:style="{'dir':'ltr','width':'100%','bqCite':'','filter':'none','height':'100%','zIndex':9,'fontStyle':'normal','marginTop':'0px','textAlign':'center','fontFamily':'Roboto','fontWeight':300,'lineHeight':'1.4','marginLeft':'0px','paddingTop':'0px','textIndent':'0px','visibility':'visible','whiteSpace':'pre-wrap','marginRight':'0px','paddingLeft':'0px','wordSpacing':'0px','marginBottom':'0px','mixBlendMode':'normal','paddingRight':'0px','letterSpacing':'0px','paddingBottom':'0px','textTransform':'none','backdropFilter':'none','textDecoration':'none','textFormatting':'p'}"/>
      <WImage v-bind:blank="false" v-bind:snapX="false" v-bind:snapY="false" v-bind:rotate="0" v-bind:rounded="false"
        clipPath=""
        imageUrl="https://file.dev.nucal.com/5d3dc32d998c020bb22a126f171a370407da5c8e/public/dd9ea18c-69a2-4641-b0a4-c088a1deafca"
        position="relative" objectFit="fill" v-bind:thumbnail="false" blankColor="#000000"
        defaultUrl="https://file.dev.nucal.com/2f9057712f3200f5cfc575e29a426aca6b807c36/public/fc6df702-6ee1-41cf-b45f-09d0431769e8"
        v-bind:disability="false" dataLoading="static" animationName=""
        ncTooltipText="Please write a text to display in tooltip..."
        v-bind:nucalDataModel="{'type':'NSW','isList':false,'dynamic':true,'structure':[{'type':'string','update':{'type':'dataModelForDynamicType'},'propName':'imageUrl','displayName':'Value'}]}"
        ncHoverBorderColor="#000000" ncTappedBorderColor="#000000" dataModelForDynamicType="string"
        id="ec30a548-e4f0-4930-8d00-80d0335a9067"
        v-bind:style="{'width':'100%','filter':'none','height':'100%','zIndex':10,'boxShadow':'','marginTop':'0px','marginLeft':'0px','paddingTop':'0px','textShadow':'','visibility':'visible','borderColor':'#4B74FF','borderStyle':'solid','marginRight':'0px','paddingLeft':'0px','marginBottom':'0px','mixBlendMode':'normal','paddingRight':'0px','paddingBottom':'0px','backdropFilter':'none','borderTopWidth':'0px','borderLeftWidth':'0px','borderRightWidth':'0px','borderBottomWidth':'0px','borderTopLeftRadius':'0px','borderTopRightRadius':'0px','borderBottomLeftRadius':'0px','borderBottomRightRadius':'0px'}"/>
      <WIconButton tag="button" href="" icon="fas fa-arrow-left" v-bind:pill="false" size="md" text="Back" type="button"
        v-bind:block="false" color="#000000FF" v-bind:snapX="false" v-bind:snapY="false" theme="theme--light01"
        v-bind:rotate="0" v-bind:squared="false" variant="secondary" position="relative" iconColor="#000000FF"
        v-bind:isEnabled="true" textAlign="center" background="#00000000" layoutMode="left-to-right" lineHeight="1.2"
        linkTarget="_top" ncLinkType="router_link" textShadow="" borderColor="#6C757D" borderRadius="15px"
        iconFontSize="23px" animationName="" iconAlignment="center" ncTooltipText="" formTransition="none"
        v-bind:nucalDataModel="{'type':'NSW','isList':false,'dynamic':false,'structure':[{'type':'string','propName':'text','displayName':'Value'}]}"
        textDecoration="none" toForRouterLink="/" ncClickFontColor="#FFFFFF" ncFocusFontColor="#FFFFFF"
        ncHoverFontColor="#FFFFFF" ncClickBorderColor="#FFF47DFF" ncDisableFontColor="#FFFFFF"
        ncFocusBorderColor="#00000000" ncHoverBorderColor="#FFF47DFF" ncDisableBorderColor="#00000000"
        ncClickBackgroundColor="#FFF47DFF" ncFocusBackgroundColor="#00000000" ncHoverBackgroundColor="#FFF47DFF"
        ncDisableBackgroundColor="#00000000" id="7c84bf1d-cce1-45f9-a4ed-f8da6a0f6909"
        v-bind:style="{'width':'100%','filter':'none','height':'100%','zIndex':11,'tabIndex':'0px','boxShadow':'','fontStyle':'normal','marginTop':'','fontFamily':'Montserrat','fontWeight':300,'marginLeft':'','paddingTop':'','textIndent':'0px','visibility':'visible','whiteSpace':'pre-wrap','borderStyle':'none','marginRight':'','paddingLeft':'','wordSpacing':'0px','marginBottom':'','mixBlendMode':'normal','paddingRight':'','letterSpacing':'0px','paddingBottom':'','textTransform':'none','backdropFilter':'none','borderTopWidth':'1px','borderLeftWidth':'1px','borderRightWidth':'1px','borderBottomWidth':'1px','borderTopLeftRadius':'15px','borderTopRightRadius':'15px','borderBottomLeftRadius':'15px','borderBottomRightRadius':'15px'}"/>
    </SectionContainer>
    <SectionContainer v-bind:snapX="false" v-bind:snapY="false" v-bind:isLock="false" position="relative"
      background="#161616FF" ncTooltipText="" id="99539801-1ea4-4b5c-91bb-bfe1126c230d"
      v-bind:style="{'width':'100%','height':'100%','zIndex':7,'tabIndex':'-1','boxShadow':'','marginTop':'0px','marginLeft':'0px','paddingTop':'','visibility':'visible','borderColor':'#21CA21','borderStyle':'none','marginRight':'0px','paddingLeft':'','marginBottom':'0px','paddingRight':'','paddingBottom':'','borderTopWidth':'1px','textDecoration':'none','borderLeftWidth':'1px','borderRightWidth':'1px','borderBottomWidth':'1px','borderTopLeftRadius':'0px','borderTopRightRadius':'0px','borderBottomLeftRadius':'0px','borderBottomRightRadius':'0px'}">
      <WTextFormatting text="Your Feedback Matters" color="#FFFFFFFF" v-bind:snapX="false" v-bind:snapY="false"
        v-bind:rotate="0" position="relative" highlight="transparent" background="transparent" v-bind:isClipping="false"
        ncTypography="custom" animationName="" ncTooltipText="" id="1e999381-4ee8-450f-96b9-c81857f078a9"
        v-bind:style="{'dir':'ltr','width':'100%','bqCite':'','filter':'none','height':'100%','zIndex':9,'fontStyle':'normal','marginTop':'0px','textAlign':'left','fontFamily':'Roboto','fontWeight':500,'lineHeight':'1.4','marginLeft':'0px','paddingTop':'0px','textIndent':'0px','visibility':'visible','whiteSpace':'pre-wrap','marginRight':'0px','paddingLeft':'0px','wordSpacing':'0px','marginBottom':'0px','mixBlendMode':'normal','paddingRight':'0px','letterSpacing':'0px','paddingBottom':'0px','textTransform':'none','backdropFilter':'none','textDecoration':'none','textFormatting':'p'}"/>
      <WTextFormatting
        text="Before viewing the results of your customer form, we want to express our gratitude for your valuable feedback. ‎‎"
        color="#B3B6B7FF" v-bind:snapX="false" v-bind:snapY="false" v-bind:rotate="0" position="relative"
        highlight="transparent" background="transparent" v-bind:isClipping="false" ncTypography="custom"
        animationName="" ncTooltipText="" id="82fbcf58-fc51-4dd3-b76b-b1c12ff8d32c"
        v-bind:style="{'dir':'ltr','width':'100%','bqCite':'','filter':'none','height':'100%','zIndex':10,'fontStyle':'normal','marginTop':'0px','textAlign':'left','fontFamily':'Roboto','fontWeight':300,'lineHeight':'1.4','marginLeft':'0px','paddingTop':'0px','textIndent':'0px','visibility':'visible','whiteSpace':'pre-wrap','marginRight':'0px','paddingLeft':'0px','wordSpacing':'0px','marginBottom':'0px','mixBlendMode':'normal','paddingRight':'0px','letterSpacing':'0px','paddingBottom':'0px','textTransform':'none','backdropFilter':'none','textDecoration':'none','textFormatting':'p'}"/>
      <WImage v-bind:blank="false" v-bind:snapX="false" v-bind:snapY="false" v-bind:rotate="0" v-bind:rounded="false"
        clipPath=""
        imageUrl="https://file.dev.nucal.com/5d3dc32d998c020bb22a126f171a370407da5c8e/public/96bfc419-15e6-4139-a967-92e9f360b016"
        position="relative" objectFit="fill" v-bind:thumbnail="false" blankColor="#000000"
        defaultUrl="https://file.dev.nucal.com/2f9057712f3200f5cfc575e29a426aca6b807c36/public/fc6df702-6ee1-41cf-b45f-09d0431769e8"
        v-bind:disability="false" dataLoading="static" animationName=""
        ncTooltipText="Please write a text to display in tooltip..."
        v-bind:nucalDataModel="{'type':'NSW','isList':false,'dynamic':true,'structure':[{'type':'string','update':{'type':'dataModelForDynamicType'},'propName':'imageUrl','displayName':'Value'}]}"
        ncHoverBorderColor="#000000" ncTappedBorderColor="#000000" dataModelForDynamicType="string"
        id="a1615d21-bf1c-4d0b-b313-a190814b4405"
        v-bind:style="{'width':'100%','filter':'none','height':'100%','zIndex':11,'boxShadow':'','marginTop':'0px','marginLeft':'0px','paddingTop':'0px','textShadow':'','visibility':'visible','borderColor':'#4B74FF','borderStyle':'solid','marginRight':'0px','paddingLeft':'0px','marginBottom':'0px','mixBlendMode':'normal','paddingRight':'0px','paddingBottom':'0px','backdropFilter':'none','borderTopWidth':'0px','borderLeftWidth':'0px','borderRightWidth':'0px','borderBottomWidth':'0px','borderTopLeftRadius':'0px','borderTopRightRadius':'0px','borderBottomLeftRadius':'0px','borderBottomRightRadius':'0px'}"/>
    </SectionContainer>
    <SectionContainer v-bind:snapX="false" v-bind:snapY="false" v-bind:isLock="false" position="relative"
      background="#FFFFFFFF" ncTooltipText="" id="d4b9c1ca-adf4-4e5d-9147-2ce79e6a0ba2"
      v-bind:style="{'width':'100%','height':'100%','zIndex':8,'tabIndex':'-1','boxShadow':'','marginTop':'0px','marginLeft':'0px','paddingTop':'','visibility':'visible','borderColor':'#21CA21','borderStyle':'none','marginRight':'0px','paddingLeft':'','marginBottom':'0px','paddingRight':'','paddingBottom':'','borderTopWidth':'1px','textDecoration':'none','borderLeftWidth':'1px','borderRightWidth':'1px','borderBottomWidth':'1px','borderTopLeftRadius':'0px','borderTopRightRadius':'0px','borderBottomLeftRadius':'0px','borderBottomRightRadius':'0px'}">
      <WTextFormatting text="Explore More with Us" color="#000000FF" v-bind:snapX="false" v-bind:snapY="false"
        v-bind:rotate="0" position="relative" highlight="transparent" background="transparent" v-bind:isClipping="false"
        ncTypography="custom" animationName="" ncTooltipText="" id="2f75551b-6fab-44c4-b495-8454d2e87cb9"
        v-bind:style="{'dir':'ltr','width':'100%','bqCite':'','filter':'none','height':'100%','zIndex':10,'fontStyle':'normal','marginTop':'0px','textAlign':'center','fontFamily':'Roboto','fontWeight':500,'lineHeight':'1.4','marginLeft':'0px','paddingTop':'0px','textIndent':'0px','visibility':'visible','whiteSpace':'pre-wrap','marginRight':'0px','paddingLeft':'0px','wordSpacing':'0px','marginBottom':'0px','mixBlendMode':'normal','paddingRight':'0px','letterSpacing':'0px','paddingBottom':'0px','textTransform':'none','backdropFilter':'none','textDecoration':'none','textFormatting':'p'}"/>
      <WTextFormatting
        text="We invite you to discover more about our company and the range of services/products we offer. Dive deeper into our website to explore."
        color="#000000FF" v-bind:snapX="false" v-bind:snapY="false" v-bind:rotate="0" position="relative"
        highlight="transparent" background="transparent" v-bind:isClipping="false" ncTypography="custom"
        animationName="" ncTooltipText="" id="6f0cf345-92aa-4cb7-8831-dbba918330db"
        v-bind:style="{'dir':'ltr','width':'100%','bqCite':'','filter':'none','height':'100%','zIndex':11,'fontStyle':'normal','marginTop':'0px','textAlign':'center','fontFamily':'Roboto','fontWeight':300,'lineHeight':'1.4','marginLeft':'0px','paddingTop':'0px','textIndent':'0px','visibility':'visible','whiteSpace':'pre-wrap','marginRight':'0px','paddingLeft':'0px','wordSpacing':'0px','marginBottom':'0px','mixBlendMode':'normal','paddingRight':'0px','letterSpacing':'0px','paddingBottom':'0px','textTransform':'none','backdropFilter':'none','textDecoration':'none','textFormatting':'p'}"/>
      <NucGroupElement v-bind:snapX="false" v-bind:snapY="false" v-bind:isLock="false" bgColor="" ncBgType="bgColor"
        position="relative" ncTooltipText="" id="bd06149e-ce4d-4e26-87a8-54c33c781d01"
        v-bind:style="{'color':'#FFFFFF','width':'100%','height':'100%','zIndex':12,'tabIndex':'-1','boxShadow':'','marginTop':'0px','textAlign':'center','lineHeight':'1.25','marginLeft':'0px','paddingTop':'','textShadow':'','visibility':'visible','borderColor':'#767676','borderStyle':'none','marginRight':'0px','paddingLeft':'','marginBottom':'0px','paddingRight':'','paddingBottom':'','borderTopWidth':'1px','textDecoration':'none','borderLeftWidth':'1px','borderRightWidth':'1px','borderBottomWidth':'1px','borderTopLeftRadius':'0px','borderTopRightRadius':'0px','borderBottomLeftRadius':'0px','borderBottomRightRadius':'0px'}">
        <WButton tag="button" href="" v-bind:pill="false" size="md" text="Products" type="button" v-bind:block="false"
          color="#FFFFFF" theme="theme--light01" v-bind:rotate="0" v-bind:squared="false" variant="primary"
          ncBgType="bgColor" position="relative" v-bind:isEnabled="true"
          background="linear-gradient(0deg, #213BB0FF 0%, #7EB0FAFF 100%)" linkTarget="_top" ncLinkType="link"
          borderColor="#007bff" borderRadius="8px" ncTypography="custom" v-bind:resetTrigger="false" animationName=""
          ncTooltipText="" verticalWidth="60px" formTransition="none"
          v-bind:nucalDataModel="{'type':'NSW','isList':false,'dynamic':false,'structure':[{'type':'string','propName':'text','displayName':'Value'}]}"
          verticalHeight="60px" horizontalWidth="72.4479px" nucalScaleWidth="" toForRouterLink="to"
          horizontalHeight="37.5347px" ncClickFontColor="#FFFFFF" ncFocusFontColor="#FFFFFF" ncHoverFontColor="#FFFFFF"
          nucalScaleHeight="" ncClickBorderColor="#00000000" ncDisableFontColor="#FFFFFF" ncFocusBorderColor="#00000000"
          ncHoverBorderColor="#00000000" ncDisableBorderColor="transparent"
          ncClickBackgroundColor="linear-gradient(0deg, #213BB0FF 0%, #7EB0FAFF 100%)"
          ncFocusBackgroundColor="linear-gradient(0deg, #213BB0FF 0%, #7EB0FAFF 100%)"
          ncHoverBackgroundColor="linear-gradient(0deg, #213BB0FF 0%, #7EB0FAFF 100%)"
          ncDisableBackgroundColor="#969696" id="fb73ff77-aad4-4e73-86c0-914302eed29c"
          v-bind:style="{'width':'100%','filter':'none','height':'100%','zIndex':14,'tabIndex':'0px','boxShadow':'','fontStyle':'normal','marginTop':'','textAlign':'center','fontFamily':'Roboto','fontWeight':700,'lineHeight':'1.4','marginLeft':'','paddingTop':'','textIndent':'0px','textShadow':'','visibility':'visible','whiteSpace':'pre-wrap','borderStyle':'none','marginRight':'','paddingLeft':'','wordSpacing':'0px','marginBottom':'','mixBlendMode':'normal','paddingRight':'','letterSpacing':'1px','paddingBottom':'','textTransform':'none','backdropFilter':'none','borderTopWidth':'1px','textDecoration':'none','borderLeftWidth':'1px','borderRightWidth':'1px','horizontalHeight':'37.5347px','borderBottomWidth':'1px','borderTopLeftRadius':'8px','borderTopRightRadius':'8px','borderBottomLeftRadius':'8px','borderBottomRightRadius':'8px'}"/>
        <WButton tag="button" href="" v-bind:pill="false" size="md" text="Services" type="button" v-bind:block="false"
          color="#FFFFFF" v-bind:snapX="false" v-bind:snapY="false" theme="theme--light01" v-bind:rotate="0"
          v-bind:squared="false" variant="primary" ncBgType="bgColor" position="relative" v-bind:isEnabled="true"
          background="linear-gradient(0deg, #109112FF 4%, #7EFAA7FF 100%)" linkTarget="_top" ncLinkType="link"
          borderColor="#007bff" borderRadius="8px" ncTypography="custom" v-bind:resetTrigger="false" animationName=""
          ncTooltipText="" verticalWidth="60px" formTransition="none"
          v-bind:nucalDataModel="{'type':'NSW','isList':false,'dynamic':false,'structure':[{'type':'string','propName':'text','displayName':'Value'}]}"
          verticalHeight="60px" horizontalWidth="72.4479px" nucalScaleWidth="" toForRouterLink="to"
          horizontalHeight="37.5347px" ncClickFontColor="#FFFFFF" ncFocusFontColor="#FFFFFF" ncHoverFontColor="#FFFFFF"
          nucalScaleHeight="" ncClickBorderColor="#00000000" ncDisableFontColor="#FFFFFF" ncFocusBorderColor="#00000000"
          ncHoverBorderColor="#00000000" ncDisableBorderColor="transparent"
          ncClickBackgroundColor="linear-gradient(0deg, #109112FF 4%, #7EFAA7FF 100%)"
          ncFocusBackgroundColor="linear-gradient(0deg, #109112FF 4%, #7EFAA7FF 100%)"
          ncHoverBackgroundColor="linear-gradient(0deg, #109112FF 4%, #7EFAA7FF 100%)"
          ncDisableBackgroundColor="#969696" id="cd630fea-3569-462a-8dd0-393741696a8a"
          v-bind:style="{'width':'100%','filter':'none','height':'100%','zIndex':15,'tabIndex':'0px','boxShadow':'','fontStyle':'normal','marginTop':'','textAlign':'center','fontFamily':'Roboto','fontWeight':700,'lineHeight':'1.4','marginLeft':'','paddingTop':'','textIndent':'0px','textShadow':'','visibility':'visible','whiteSpace':'pre-wrap','borderStyle':'none','marginRight':'','paddingLeft':'','wordSpacing':'0px','marginBottom':'','mixBlendMode':'normal','paddingRight':'','letterSpacing':'1px','paddingBottom':'','textTransform':'none','backdropFilter':'none','borderTopWidth':'1px','textDecoration':'none','borderLeftWidth':'1px','borderRightWidth':'1px','horizontalHeight':'37.5347px','borderBottomWidth':'1px','borderTopLeftRadius':'8px','borderTopRightRadius':'8px','borderBottomLeftRadius':'8px','borderBottomRightRadius':'8px'}"/>
        <WButton tag="button" href="" v-bind:pill="false" size="md" text="Career‎s‎" type="button" v-bind:block="false"
          color="#FFFFFF" v-bind:snapX="false" v-bind:snapY="false" theme="theme--light01" v-bind:rotate="0"
          v-bind:squared="false" variant="primary" ncBgType="bgColor" position="relative" v-bind:isEnabled="true"
          background="linear-gradient(0deg, #CF5E0DFF 4%, #F5B533FF 98%)" linkTarget="_top" ncLinkType="link"
          borderColor="#007bff" borderRadius="6px" ncTypography="custom" v-bind:resetTrigger="false" animationName=""
          ncTooltipText="" verticalWidth="60px" formTransition="none"
          v-bind:nucalDataModel="{'type':'NSW','isList':false,'dynamic':false,'structure':[{'type':'string','propName':'text','displayName':'Value'}]}"
          verticalHeight="60px" horizontalWidth="72.4479px" nucalScaleWidth="" toForRouterLink="to"
          horizontalHeight="37.5347px" ncClickFontColor="#FFFFFF" ncFocusFontColor="#FFFFFF" ncHoverFontColor="#FFFFFF"
          nucalScaleHeight="" ncClickBorderColor="#00000000" ncDisableFontColor="#FFFFFF" ncFocusBorderColor="#00000000"
          ncHoverBorderColor="#00000000" ncDisableBorderColor="transparent"
          ncClickBackgroundColor="linear-gradient(0deg, #CF5E0DFF 4%, #F5B533FF 98%)"
          ncFocusBackgroundColor="linear-gradient(0deg, #CF5E0DFF 4%, #F5B533FF 98%)"
          ncHoverBackgroundColor="linear-gradient(0deg, #CF5E0DFF 4%, #F5B533FF 98%)" ncDisableBackgroundColor="#969696"
          id="6017d6cf-71ef-4947-a3f1-c4a558fbdb5e"
          v-bind:style="{'width':'100%','filter':'none','height':'100%','zIndex':16,'tabIndex':'0px','boxShadow':'','fontStyle':'normal','marginTop':'','textAlign':'center','fontFamily':'Roboto','fontWeight':700,'lineHeight':'1.4','marginLeft':'','paddingTop':'','textIndent':'0px','textShadow':'','visibility':'visible','whiteSpace':'pre-wrap','borderStyle':'none','marginRight':'','paddingLeft':'','wordSpacing':'0px','marginBottom':'','mixBlendMode':'normal','paddingRight':'','letterSpacing':'1px','paddingBottom':'','textTransform':'none','backdropFilter':'none','borderTopWidth':'1px','textDecoration':'none','borderLeftWidth':'1px','borderRightWidth':'1px','horizontalHeight':'37.5347px','borderBottomWidth':'1px','borderTopLeftRadius':'6px','borderTopRightRadius':'7px','borderBottomLeftRadius':'6px','borderBottomRightRadius':'6px'}"/>
      </NucGroupElement>
    </SectionContainer>
  </DropZone>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Screen2',
  data() {
    return {};
  },
  props: {},
  created() {},
  mounted() {},
  computed: { ...mapGetters('source', ['getApiMappingWithChain'])},
  methods: {bindSource(chain) { return this.getApiMappingWithChain(chain); }},
  watch: {},
};
</script>

<style lang="scss" scoped>@import 'src/assets/styles/scroll';
 @include custom-scroll();
@media (min-width: 1024.05px){
[id='06fe9ccc-6a3e-4311-8ecb-7cbcdaaa174f'] {
             display: grid; 
             grid-template-columns: 0 0 0 100rem 0 0 0;
             grid-template-rows: 0 minmax(33.28125rem, max-content) 0 minmax(59.21875rem, max-content) 0 minmax(28.28125rem, max-content) 0;
          }
[id='b58edfe7-7394-492f-8ba6-b5433786ab8a']{
          grid-area: 3/2/5/5;
          }
[id='99539801-1ea4-4b5c-91bb-bfe1126c230d']{
          grid-area: 2/3/4/6;
          }
[id='d4b9c1ca-adf4-4e5d-9147-2ce79e6a0ba2']{
          grid-area: 6/4/7/7;
          }[id='d4b9c1ca-adf4-4e5d-9147-2ce79e6a0ba2'] /deep/ > .component-wrapper{
             display: grid; 
             grid-template-columns: 28.90625rem 0 1.25rem 39.6875rem 1.25rem 0 28.90625rem;
             grid-template-rows: minmax(5rem, max-content) minmax(5.234375rem, max-content) minmax(1.25rem, max-content) minmax(4.6875rem, max-content) minmax(0.546875rem, max-content) minmax(6.5625rem, max-content) minmax(5rem, max-content);
          }
[id='2f75551b-6fab-44c4-b495-8454d2e87cb9']{
          grid-area: 2/2/3/6;
          font-size: Max(Min(48rem, 12px),3.75rem);
          }
[id='6f0cf345-92aa-4cb7-8831-dbba918330db']{
          grid-area: 4/3/5/7;
          font-size: Max(Min(18rem, 12px),1.40625rem);
          }
[id='bd06149e-ce4d-4e26-87a8-54c33c781d01']{
          grid-area: 6/4/7/5;
          }[id='bd06149e-ce4d-4e26-87a8-54c33c781d01'] /deep/ > .component-wrapper{
             display: grid; 
             grid-template-columns: 0.703125rem 11.71875rem 1.5625rem 11.71875rem 1.5625rem 11.71875rem 0.703125rem;
             grid-template-rows: minmax(0.703125rem, max-content) 0 0 minmax(5.15625rem, max-content) 0 0 minmax(0.703125rem, max-content);
          }
[id='fb73ff77-aad4-4e73-86c0-914302eed29c']{
          grid-area: 2/2/5/3;
          font-size: Max(Min(18rem, 12px),1.40625rem);
          }
[id='cd630fea-3569-462a-8dd0-393741696a8a']{
          grid-area: 3/4/6/5;
          font-size: Max(Min(18rem, 12px),1.40625rem);
          }
[id='6017d6cf-71ef-4947-a3f1-c4a558fbdb5e']{
          grid-area: 4/6/7/7;
          font-size: Max(Min(18rem, 12px),1.40625rem);
          }[id='99539801-1ea4-4b5c-91bb-bfe1126c230d'] /deep/ > .component-wrapper{
             display: grid; 
             grid-template-columns: 5rem 0 42.1875rem 5.625rem 42.1875rem 0 5rem;
             grid-template-rows: minmax(5rem, max-content) minmax(0.625rem, max-content) minmax(3.984375rem, max-content) minmax(0.625rem, max-content) minmax(2.4609375rem, max-content) minmax(15.625rem, max-content) minmax(4.9609375rem, max-content);
          }
[id='1e999381-4ee8-450f-96b9-c81857f078a9']{
          grid-area: 2/2/5/4;
          font-size: Max(Min(48rem, 12px),3.75rem);
          }
[id='82fbcf58-fc51-4dd3-b76b-b1c12ff8d32c']{
          grid-area: 3/5/4/6;
          font-size: Max(Min(18rem, 12px),1.40625rem);
          }
[id='a1615d21-bf1c-4d0b-b313-a190814b4405']{
          grid-area: 6/3/7/7;
          aspect-ratio: 5.76;
          }[id='b58edfe7-7394-492f-8ba6-b5433786ab8a'] /deep/ > .component-wrapper{
             display: grid; 
             grid-template-columns: 5rem 0 6.09375rem 22.109375rem 34.375rem 23.984375rem 3.4375rem 0 5rem;
             grid-template-rows: minmax(5rem, max-content) 0 minmax(0.5859375rem, max-content) minmax(2.265625rem, max-content) minmax(0.5859375rem, max-content) 0 minmax(2.5rem, max-content) minmax(43.28125rem, max-content) minmax(5rem, max-content);
          }
[id='e59337cf-fa35-4633-8571-449d27fa0ad3']{
          grid-area: 8/2/9/8;
          font-size: Max(Min(14rem, 12px),1.09375rem);
          }
[id='3176dc9c-8b0f-4dcf-af0d-ec039d85871f']{
          grid-area: 2/5/6/6;
          font-size: Max(Min(32rem, 12px),2.5rem);
          }
[id='ec30a548-e4f0-4930-8d00-80d0335a9067']{
          grid-area: 3/7/7/9;
          aspect-ratio: 1;
          }
[id='7c84bf1d-cce1-45f9-a4ed-f8da6a0f6909']{
          grid-area: 4/3/5/4;
          font-size: Max(Min(16rem, 12px),1.25rem);
          aspect-ratio: 2.689655172413793;
          }
}
@media (min-width: 768.05px) and (max-width: 1024px){
[id='06fe9ccc-6a3e-4311-8ecb-7cbcdaaa174f'] {
             display: grid; 
             grid-template-columns: 3.125rem 0 0 93.75rem 0 0 3.125rem;
             grid-template-rows: 0 minmax(31.201171875rem, max-content) 0 minmax(55.517578125rem, max-content) 0 minmax(26.513671875rem, max-content) minmax(3.125rem, max-content);
          }
[id='b58edfe7-7394-492f-8ba6-b5433786ab8a']{
          grid-area: 3/3/5/6;
          }
[id='99539801-1ea4-4b5c-91bb-bfe1126c230d']{
          grid-area: 2/2/4/7;
          }
[id='d4b9c1ca-adf4-4e5d-9147-2ce79e6a0ba2']{
          grid-area: 6/4/7/5;
          }[id='d4b9c1ca-adf4-4e5d-9147-2ce79e6a0ba2'] /deep/ > .component-wrapper{
             display: grid; 
             grid-template-columns: 3.125rem 0 2.5925925925925926rem 82.31481481481481rem 2.5925925925925926rem 0 3.125rem;
             grid-template-rows: minmax(4.6875rem, max-content) minmax(4.9072265625rem, max-content) minmax(1.171875rem, max-content) minmax(4.39453125rem, max-content) minmax(0.5126953125rem, max-content) minmax(6.15234375rem, max-content) minmax(4.6875rem, max-content);
          }
[id='2f75551b-6fab-44c4-b495-8454d2e87cb9']{
          grid-area: 2/2/3/7;
          font-size: Max(Min(48rem, 12px),7.777777777777778rem);
          }
[id='6f0cf345-92aa-4cb7-8831-dbba918330db']{
          grid-area: 4/3/5/6;
          font-size: Max(Min(18rem, 12px),2.9166666666666665rem);
          }
[id='bd06149e-ce4d-4e26-87a8-54c33c781d01']{
          grid-area: 6/4/7/5;
          }[id='bd06149e-ce4d-4e26-87a8-54c33c781d01'] /deep/ > .component-wrapper{
             display: grid; 
             grid-template-columns: 3.125rem 23.28514739229025rem 3.104686318972033rem 23.28514739229025rem 3.104686318972033rem 23.28514739229025rem 3.125rem;
             grid-template-rows: minmax(0.6591796875rem, max-content) 0 0 minmax(4.833984375rem, max-content) 0 0 minmax(2.34375rem, max-content);
          }
[id='fb73ff77-aad4-4e73-86c0-914302eed29c']{
          grid-area: 2/2/5/3;
          font-size: Max(Min(18rem, 12px),2.7942176870748296rem);
          }
[id='cd630fea-3569-462a-8dd0-393741696a8a']{
          grid-area: 3/4/6/5;
          font-size: Max(Min(18rem, 12px),2.7942176870748296rem);
          }
[id='6017d6cf-71ef-4947-a3f1-c4a558fbdb5e']{
          grid-area: 4/6/7/7;
          font-size: Max(Min(18rem, 12px),2.7942176870748296rem);
          }[id='99539801-1ea4-4b5c-91bb-bfe1126c230d'] /deep/ > .component-wrapper{
             display: grid; 
             grid-template-columns: 3.125rem 23.2421875rem 0 41.015625rem 0 23.2421875rem 3.125rem;
             grid-template-rows: minmax(4.6875rem, max-content) minmax(4.9072265625rem, max-content) minmax(2.34375rem, max-content) minmax(3.7353515625rem, max-content) minmax(2.30712890625rem, max-content) minmax(14.6484375rem, max-content) minmax(2.34375rem, max-content);
          }
[id='1e999381-4ee8-450f-96b9-c81857f078a9']{
          grid-area: 2/3/3/6;
          font-size: Max(Min(48rem, 12px),3.6458333333333335rem);
          }
[id='82fbcf58-fc51-4dd3-b76b-b1c12ff8d32c']{
          grid-area: 4/4/5/5;
          font-size: Max(Min(18rem, 12px),1.3671875rem);
          }
[id='a1615d21-bf1c-4d0b-b313-a190814b4405']{
          grid-area: 6/2/7/7;
          aspect-ratio: 5.76;
          }[id='b58edfe7-7394-492f-8ba6-b5433786ab8a'] /deep/ > .component-wrapper{
             display: grid; 
             grid-template-columns: 3.125rem 19.97612847222222rem 5.924479166666667rem 2.430555555555556rem 33.42013888888889rem 2.430555555555556rem 3.342013888888889rem 19.97612847222222rem 3.125rem;
             grid-template-rows: minmax(4.6875rem, max-content) 0 minmax(0.54931640625rem, max-content) minmax(2.1240234375rem, max-content) minmax(0.54931640625rem, max-content) 0 minmax(2.34375rem, max-content) minmax(40.576171875rem, max-content) minmax(4.6875rem, max-content);
          }
[id='e59337cf-fa35-4633-8571-449d27fa0ad3']{
          grid-area: 8/2/9/9;
          font-size: Max(Min(14rem, 12px),1.0633680555555556rem);
          }
[id='3176dc9c-8b0f-4dcf-af0d-ec039d85871f']{
          grid-area: 2/5/6/6;
          font-size: Max(Min(32rem, 12px),2.430555555555556rem);
          }
[id='ec30a548-e4f0-4930-8d00-80d0335a9067']{
          grid-area: 3/7/7/8;
          aspect-ratio: 1;
          }
[id='7c84bf1d-cce1-45f9-a4ed-f8da6a0f6909']{
          grid-area: 4/3/5/4;
          font-size: Max(Min(16rem, 12px),1.215277777777778rem);
          aspect-ratio: 2.689655172413793;
          }
}
@media (min-width: 480.05px) and (max-width: 768px){
[id='06fe9ccc-6a3e-4311-8ecb-7cbcdaaa174f'] {
             display: grid; 
             grid-template-columns: 4.166666667000001rem 0 0 91.666666666rem 0 0 4.166666667000001rem;
             grid-template-rows: 0 minmax(30.507812499778126rem, max-content) 0 minmax(54.28385416627188rem, max-content) 0 minmax(25.924479166478125rem, max-content) minmax(4.166666667rem, max-content);
          }
[id='b58edfe7-7394-492f-8ba6-b5433786ab8a']{
          grid-area: 3/3/5/6;
          }
[id='99539801-1ea4-4b5c-91bb-bfe1126c230d']{
          grid-area: 2/2/4/7;
          }
[id='d4b9c1ca-adf4-4e5d-9147-2ce79e6a0ba2']{
          grid-area: 6/4/7/5;
          }[id='d4b9c1ca-adf4-4e5d-9147-2ce79e6a0ba2'] /deep/ > .component-wrapper{
             display: grid; 
             grid-template-columns: 4.166666667rem 0 2.4691358024296326rem 78.39506172714074rem 2.469135802429624rem 0 4.166666667rem;
             grid-template-rows: minmax(4.583333333300001rem, max-content) minmax(4.798177083298438rem, max-content) minmax(1.1458333333250001rem, max-content) minmax(4.29687499996875rem, max-content) minmax(0.5013020833296875rem, max-content) minmax(6.01562499995625rem, max-content) minmax(4.5833333333000015rem, max-content);
          }
[id='2f75551b-6fab-44c4-b495-8454d2e87cb9']{
          grid-area: 2/2/3/7;
          font-size: Max(Min(48rem, 12px),7.407407407288889rem);
          }
[id='6f0cf345-92aa-4cb7-8831-dbba918330db']{
          grid-area: 4/3/5/6;
          font-size: Max(Min(18rem, 12px),2.7777777777333337rem);
          }
[id='bd06149e-ce4d-4e26-87a8-54c33c781d01']{
          grid-area: 6/4/7/5;
          }[id='bd06149e-ce4d-4e26-87a8-54c33c781d01'] /deep/ > .component-wrapper{
             display: grid; 
             grid-template-columns: 4.166666667rem 19.20366651751905rem 12.450728840583585rem 6.752937676935465rem 12.450728840583587rem 19.20366651751905rem 4.166666667rem;
             grid-template-rows: minmax(0.6445312499953125rem, max-content) 0 minmax(4.726562499965625rem, max-content) 0 minmax(2.2916666668333336rem, max-content) minmax(4.726562499965625rem, max-content) minmax(2.2916666668333336rem, max-content);
          }
[id='fb73ff77-aad4-4e73-86c0-914302eed29c']{
          grid-area: 2/2/4/4;
          font-size: Max(Min(18rem, 12px),3.7985274429723166rem);
          }
[id='cd630fea-3569-462a-8dd0-393741696a8a']{
          grid-area: 3/5/5/7;
          font-size: Max(Min(18rem, 12px),3.7985274429723166rem);
          }
[id='6017d6cf-71ef-4947-a3f1-c4a558fbdb5e']{
          grid-area: 6/3/7/6;
          font-size: Max(Min(18rem, 12px),3.7985274429723166rem);
          }[id='99539801-1ea4-4b5c-91bb-bfe1126c230d'] /deep/ > .component-wrapper{
             display: grid; 
             grid-template-columns: 4.166666667rem 22.135416666312498rem 0 39.06249999937499rem 0 22.135416666312498rem 4.166666667rem;
             grid-template-rows: minmax(4.583333333300001rem, max-content) minmax(4.798177083298438rem, max-content) minmax(2.2916666668333336rem, max-content) minmax(3.6523437499734377rem, max-content) minmax(2.255859374983594rem, max-content) minmax(14.3229166665625rem, max-content) minmax(2.2916666668333336rem, max-content);
          }
[id='1e999381-4ee8-450f-96b9-c81857f078a9']{
          grid-area: 2/3/3/6;
          font-size: Max(Min(48rem, 12px),3.4722222221666663rem);
          }
[id='82fbcf58-fc51-4dd3-b76b-b1c12ff8d32c']{
          grid-area: 4/4/5/5;
          font-size: Max(Min(18rem, 12px),1.3020833333124997rem);
          }
[id='a1615d21-bf1c-4d0b-b313-a190814b4405']{
          grid-area: 6/2/7/7;
          aspect-ratio: 5.76;
          }[id='b58edfe7-7394-492f-8ba6-b5433786ab8a'] /deep/ > .component-wrapper{
             display: grid; 
             grid-template-columns: 4.166666667rem 25.752314814402773rem 13.093171296086803rem 1.2297453703506949rem 3.1828703703194443rem 1.2297453703506935rem 13.093171296086803rem 25.752314814402776rem 4.166666667rem;
             grid-template-rows: minmax(4.583333333300001rem, max-content) minmax(2.0768229166515626rem, max-content) minmax(2.2916666668333336rem, max-content) minmax(3.1510416666437497rem, max-content) minmax(2.2916666668333336rem, max-content) minmax(3.1510416666437497rem, max-content) minmax(2.2916666666500003rem, max-content) minmax(39.67447916637813rem, max-content) minmax(2.2916666668333336rem, max-content);
          }
[id='e59337cf-fa35-4633-8571-449d27fa0ad3']{
          grid-area: 8/2/9/9;
          font-size: Max(Min(14rem, 12px),1.0127314814652777rem);
          }
[id='3176dc9c-8b0f-4dcf-af0d-ec039d85871f']{
          grid-area: 4/3/5/8;
          font-size: Max(Min(32rem, 12px),2.3148148147777774rem);
          }
[id='ec30a548-e4f0-4930-8d00-80d0335a9067']{
          grid-area: 6/5/7/6;
          aspect-ratio: 1;
          }
[id='7c84bf1d-cce1-45f9-a4ed-f8da6a0f6909']{
          grid-area: 2/4/3/7;
          font-size: Max(Min(16rem, 12px),1.1574074073888887rem);
          aspect-ratio: 2.689655172413793;
          }
}
@media (min-width: 375.05px) and (max-width: 480px){
[id='06fe9ccc-6a3e-4311-8ecb-7cbcdaaa174f'] {
             display: grid; 
             grid-template-columns: 5rem 0 0 90rem 0 0 5rem;
             grid-template-rows: 0 minmax(29.953124999999996rem, max-content) 0 minmax(53.29687499999999rem, max-content) 0 minmax(25.453125rem, max-content) minmax(5rem, max-content);
          }
[id='b58edfe7-7394-492f-8ba6-b5433786ab8a']{
          grid-area: 3/3/5/6;
          }
[id='99539801-1ea4-4b5c-91bb-bfe1126c230d']{
          grid-area: 2/2/4/7;
          }
[id='d4b9c1ca-adf4-4e5d-9147-2ce79e6a0ba2']{
          grid-area: 6/4/7/5;
          }[id='d4b9c1ca-adf4-4e5d-9147-2ce79e6a0ba2'] /deep/ > .component-wrapper{
             display: grid; 
             grid-template-columns: 5rem 0 2.3703703703703725rem 75.25925925925927rem 2.3703703703703676rem 0 5rem;
             grid-template-rows: minmax(4.5rem, max-content) minmax(4.7109375rem, max-content) minmax(1.125rem, max-content) minmax(4.21875rem, max-content) minmax(0.49218749999999994rem, max-content) minmax(5.906249999999999rem, max-content) minmax(4.5rem, max-content);
          }
[id='2f75551b-6fab-44c4-b495-8454d2e87cb9']{
          grid-area: 2/2/3/7;
          font-size: Max(Min(48rem, 12px),7.1111111111111125rem);
          }
[id='6f0cf345-92aa-4cb7-8831-dbba918330db']{
          grid-area: 4/3/5/6;
          font-size: Max(Min(18rem, 12px),2.666666666666667rem);
          }
[id='bd06149e-ce4d-4e26-87a8-54c33c781d01']{
          grid-area: 6/4/7/5;
          }[id='bd06149e-ce4d-4e26-87a8-54c33c781d01'] /deep/ > .component-wrapper{
             display: grid; 
             grid-template-columns: 5rem 17.52331961591221rem 12.689300411522636rem 4.834019204389575rem 12.689300411522636rem 17.52331961591221rem 5rem;
             grid-template-rows: minmax(0.6328124999999999rem, max-content) 0 minmax(4.640624999999999rem, max-content) 0 minmax(1.6874999999999998rem, max-content) minmax(4.640624999999999rem, max-content) minmax(1.6874999999999998rem, max-content);
          }
[id='fb73ff77-aad4-4e73-86c0-914302eed29c']{
          grid-area: 2/2/4/4;
          font-size: Max(Min(18rem, 12px),3.6255144032921813rem);
          }
[id='cd630fea-3569-462a-8dd0-393741696a8a']{
          grid-area: 3/5/5/7;
          font-size: Max(Min(18rem, 12px),3.6255144032921813rem);
          }
[id='6017d6cf-71ef-4947-a3f1-c4a558fbdb5e']{
          grid-area: 6/3/7/6;
          font-size: Max(Min(18rem, 12px),3.6255144032921813rem);
          }[id='99539801-1ea4-4b5c-91bb-bfe1126c230d'] /deep/ > .component-wrapper{
             display: grid; 
             grid-template-columns: 5rem 21.25rem 0 37.5rem 0 21.25rem 5rem;
             grid-template-rows: minmax(4.5rem, max-content) minmax(4.710937499999999rem, max-content) minmax(1.6874999999999998rem, max-content) minmax(3.5859374999999996rem, max-content) minmax(2.21484375rem, max-content) minmax(14.062499999999998rem, max-content) minmax(1.6874999999999998rem, max-content);
          }
[id='1e999381-4ee8-450f-96b9-c81857f078a9']{
          grid-area: 2/3/3/6;
          font-size: Max(Min(48rem, 12px),3.333333333333333rem);
          }
[id='82fbcf58-fc51-4dd3-b76b-b1c12ff8d32c']{
          grid-area: 4/4/5/5;
          font-size: Max(Min(18rem, 12px),1.25rem);
          }
[id='a1615d21-bf1c-4d0b-b313-a190814b4405']{
          grid-area: 6/2/7/7;
          aspect-ratio: 5.76;
          }[id='b58edfe7-7394-492f-8ba6-b5433786ab8a'] /deep/ > .component-wrapper{
             display: grid; 
             grid-template-columns: 5rem 24.722222222222218rem 12.569444444444445rem 1.1805555555555547rem 3.0555555555555554rem 1.1805555555555565rem 12.569444444444445rem 24.722222222222218rem 5rem;
             grid-template-rows: minmax(4.5rem, max-content) minmax(2.0390625rem, max-content) minmax(1.6874999999999998rem, max-content) minmax(3.09375rem, max-content) minmax(1.6874999999999998rem, max-content) minmax(3.09375rem, max-content) minmax(2.25rem, max-content) minmax(38.953125rem, max-content) minmax(1.6874999999999998rem, max-content);
          }
[id='e59337cf-fa35-4633-8571-449d27fa0ad3']{
          grid-area: 8/2/9/9;
          font-size: Max(Min(14rem, 12px),0.9722222222222221rem);
          }
[id='3176dc9c-8b0f-4dcf-af0d-ec039d85871f']{
          grid-area: 4/3/5/8;
          font-size: Max(Min(32rem, 12px),2.2222222222222223rem);
          }
[id='ec30a548-e4f0-4930-8d00-80d0335a9067']{
          grid-area: 6/5/7/6;
          aspect-ratio: 1;
          }
[id='7c84bf1d-cce1-45f9-a4ed-f8da6a0f6909']{
          grid-area: 2/4/3/7;
          font-size: Max(Min(16rem, 12px),1.1111111111111112rem);
          aspect-ratio: 2.689655172413793;
          }
}
@media (min-width: 0px) and (max-width: 375px){
[id='06fe9ccc-6a3e-4311-8ecb-7cbcdaaa174f'] {
             display: grid; 
             grid-template-columns: 6.4rem 0 0 87.2rem 0 0 6.4rem;
             grid-template-rows: 0 minmax(29.021250000000002rem, max-content) 0 minmax(51.63875rem, max-content) 0 minmax(24.661250000000003rem, max-content) minmax(6.4rem, max-content);
          }
[id='b58edfe7-7394-492f-8ba6-b5433786ab8a']{
          grid-area: 3/3/5/6;
          }
[id='99539801-1ea4-4b5c-91bb-bfe1126c230d']{
          grid-area: 2/2/4/7;
          }
[id='d4b9c1ca-adf4-4e5d-9147-2ce79e6a0ba2']{
          grid-area: 6/4/7/5;
          }[id='d4b9c1ca-adf4-4e5d-9147-2ce79e6a0ba2'] /deep/ > .component-wrapper{
             display: grid; 
             grid-template-columns: 6.4rem 0 2.2044444444444435rem 69.99111111111111rem 2.204444444444451rem 0 6.4rem;
             grid-template-rows: minmax(4.36rem, max-content) minmax(4.564375000000001rem, max-content) minmax(1.09rem, max-content) minmax(4.0875rem, max-content) minmax(0.47687500000000005rem, max-content) minmax(5.7225rem, max-content) minmax(4.359999999999999rem, max-content);
          }
[id='2f75551b-6fab-44c4-b495-8454d2e87cb9']{
          grid-area: 2/2/3/7;
          font-size: Max(Min(48rem, 12px),6.613333333333333rem);
          }
[id='6f0cf345-92aa-4cb7-8831-dbba918330db']{
          grid-area: 4/3/5/6;
          font-size: Max(Min(18rem, 12px),2.4799999999999995rem);
          }
[id='bd06149e-ce4d-4e26-87a8-54c33c781d01']{
          grid-area: 6/4/7/5;
          }[id='bd06149e-ce4d-4e26-87a8-54c33c781d01'] /deep/ > .component-wrapper{
             display: grid; 
             grid-template-columns: 6.4rem 0 0 57.19111111111111rem 0 0 6.4rem;
             grid-template-rows: minmax(0.613125rem, max-content) minmax(4.496250000000001rem, max-content) minmax(1.6350000000000002rem, max-content) minmax(4.496250000000001rem, max-content) minmax(1.6350000000000002rem, max-content) minmax(4.496250000000001rem, max-content) minmax(1.6350000000000002rem, max-content);
          }
[id='fb73ff77-aad4-4e73-86c0-914302eed29c']{
          grid-area: 2/2/3/7;
          font-size: Max(Min(18rem, 12px),6.862933333333333rem);
          }
[id='cd630fea-3569-462a-8dd0-393741696a8a']{
          grid-area: 4/3/5/6;
          font-size: Max(Min(18rem, 12px),6.862933333333333rem);
          }
[id='6017d6cf-71ef-4947-a3f1-c4a558fbdb5e']{
          grid-area: 6/4/7/5;
          font-size: Max(Min(18rem, 12px),6.862933333333333rem);
          }[id='99539801-1ea4-4b5c-91bb-bfe1126c230d'] /deep/ > .component-wrapper{
             display: grid; 
             grid-template-columns: 6.4rem 19.7625rem 0 34.87500000000001rem 0 19.7625rem 6.4rem;
             grid-template-rows: minmax(4.36rem, max-content) minmax(4.564375000000001rem, max-content) minmax(1.6350000000000002rem, max-content) minmax(3.474375rem, max-content) minmax(2.1459375000000005rem, max-content) minmax(13.625000000000002rem, max-content) minmax(1.6350000000000002rem, max-content);
          }
[id='1e999381-4ee8-450f-96b9-c81857f078a9']{
          grid-area: 2/3/3/6;
          font-size: Max(Min(48rem, 12px),3.1000000000000005rem);
          }
[id='82fbcf58-fc51-4dd3-b76b-b1c12ff8d32c']{
          grid-area: 4/4/5/5;
          font-size: Max(Min(18rem, 12px),1.1625rem);
          }
[id='a1615d21-bf1c-4d0b-b313-a190814b4405']{
          grid-area: 6/2/7/7;
          aspect-ratio: 5.76;
          }[id='b58edfe7-7394-492f-8ba6-b5433786ab8a'] /deep/ > .component-wrapper{
             display: grid; 
             grid-template-columns: 6.4rem 22.99166666666667rem 11.689583333333335rem 1.0979166666666664rem 2.841666666666667rem 1.0979166666666675rem 11.689583333333333rem 22.991666666666678rem 6.4rem;
             grid-template-rows: minmax(4.36rem, max-content) minmax(1.9756250000000002rem, max-content) minmax(1.6350000000000002rem, max-content) minmax(2.9975000000000005rem, max-content) minmax(1.6350000000000002rem, max-content) minmax(2.9975000000000005rem, max-content) minmax(2.18rem, max-content) minmax(37.74125rem, max-content) minmax(1.6350000000000002rem, max-content);
          }
[id='e59337cf-fa35-4633-8571-449d27fa0ad3']{
          grid-area: 8/2/9/9;
          font-size: Max(Min(14rem, 12px),0.9041666666666668rem);
          }
[id='3176dc9c-8b0f-4dcf-af0d-ec039d85871f']{
          grid-area: 4/3/5/8;
          font-size: Max(Min(32rem, 12px),2.066666666666667rem);
          }
[id='ec30a548-e4f0-4930-8d00-80d0335a9067']{
          grid-area: 6/5/7/6;
          aspect-ratio: 1;
          }
[id='7c84bf1d-cce1-45f9-a4ed-f8da6a0f6909']{
          grid-area: 2/4/3/7;
          font-size: Max(Min(16rem, 12px),1.0333333333333334rem);
          aspect-ratio: 2.689655172413793;
          }
}
</style>