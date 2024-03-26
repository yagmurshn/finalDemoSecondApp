<template>
  <div>
    <div v-if="isProgressBarVisible" class="progress-overlay">
      <div class="progress-bar"></div>
    </div>
    <DropZone
      ncBgType="bgColor"
      background=""
      backgroundImage=""
      id="07692a07-229e-4f49-8630-cbdc38468d13"
      v-bind:style="{ text: 'SUBMIT', width: '100%', height: 'auto' }"
    >
      <SectionContainer
        v-bind:snapX="false"
        v-bind:snapY="false"
        v-bind:isLock="false"
        ncBgType="bgImage"
        position="relative"
        ncTooltipText=""
        backgroundImage="https://file.dev.nucal.com/5d3dc32d998c020bb22a126f171a370407da5c8e/public/0463c18a-bdbc-434d-aad2-23c9e220d462"
        id="557f714f-faf0-4447-b40e-497f3d2a40b9"
        v-bind:style="{
          width: '100%',
          height: '100%',
          zIndex: 34,
          tabIndex: '-1',
          boxShadow: '',
          marginTop: '0px',
          marginLeft: '0px',
          paddingTop: '',
          visibility: 'visible',
          borderColor: '#21CA21',
          borderStyle: 'none',
          marginRight: '0px',
          paddingLeft: '',
          marginBottom: '0px',
          paddingRight: '',
          paddingBottom: '',
          borderTopWidth: '1px',
          textDecoration: 'none',
          borderLeftWidth: '1px',
          borderRightWidth: '1px',
          borderBottomWidth: '1px',
          borderTopLeftRadius: '0px',
          borderTopRightRadius: '0px',
          borderBottomLeftRadius: '0px',
          borderBottomRightRadius: '0px',
        }"
      >
        <TextInput
          ref="fullName"
          v-bind:snapX="false"
          v-bind:snapY="false"
          value=""
          v-bind:rotate="0"
          opacity="1"
          ncBgType="bgColor"
          position="relative"
          v-bind:readonly="false"
          inputType="text"
          v-bind:isEnabled="true"
          maxLength=""
          placeholder="John Doe"
          animationName=""
          ncTooltipText=""
          ncFocusFontColor="#292929"
          ncHoverFontColor="#939393"
          placeholderColor="#C1C1C1FF"
          ncFocusBorderColor="#292929"
          ncHoverBorderColor="#5B5B5B66"
          ncFocusBackgroundColor="transparent"
          ncHoverBackgroundColor="transparent"
          id="b7e81364-1020-4e80-8532-3d14d1d09e94"
          v-bind:style="{
            color: '#292929',
            width: '100%',
            filter: 'none',
            height: '100%',
            zIndex: 36,
            boxShadow: '',
            fontStyle: 'normal',
            marginTop: '0px',
            textAlign: 'left',
            background: 'transparent',
            fontFamily: 'Inter',
            fontWeight: 300,
            lineHeight: 'normal',
            marginLeft: '0px',
            paddingTop: '0px',
            textIndent: '0px',
            visibility: 'visible',
            borderColor: '#5B5B5BFF',
            borderStyle: 'solid',
            marginRight: '0px',
            paddingLeft: '0px',
            wordSpacing: '0px',
            marginBottom: '0px',
            mixBlendMode: 'normal',
            paddingRight: '0px',
            letterSpacing: '0px',
            paddingBottom: '0px',
            textTransform: 'none',
            backdropFilter: 'none(0%)',
            borderTopWidth: '0',
            textDecoration: 'none',
            borderLeftWidth: '0',
            borderRightWidth: '0',
            borderBottomWidth: '1px',
            borderTopLeftRadius: '0',
            borderTopRightRadius: '0',
            borderBottomLeftRadius: '0',
            borderBottomRightRadius: '0',
          }"
        />
        <WTextFormatting
          text="Full Name"
          color="#000000"
          v-bind:snapX="false"
          v-bind:snapY="false"
          v-bind:rotate="0"
          position="relative"
          highlight="transparent"
          background="transparent"
          v-bind:isClipping="false"
          animationName=""
          ncTooltipText=""
          id="606e503b-7334-466c-8be8-680fe58f26d2"
          v-bind:style="{
            dir: 'ltr',
            width: '100%',
            bqCite: '',
            filter: 'none',
            height: '100%',
            zIndex: 37,
            fontStyle: 'normal',
            marginTop: '0px',
            textAlign: 'left',
            fontFamily: 'Roboto',
            fontWeight: 300,
            lineHeight: '1.4',
            marginLeft: '0px',
            paddingTop: '0px',
            textIndent: '0px',
            visibility: 'visible',
            whiteSpace: 'pre-wrap',
            marginRight: '0px',
            paddingLeft: '0px',
            wordSpacing: '0px',
            marginBottom: '0px',
            mixBlendMode: 'normal',
            paddingRight: '0px',
            letterSpacing: '0px',
            paddingBottom: '0px',
            textTransform: 'none',
            backdropFilter: 'none',
            textDecoration: 'none',
            textFormatting: 'p',
          }"
        />
        <WTextFormatting
          text="Customer Form‎"
          color="#000000"
          v-bind:snapX="false"
          v-bind:snapY="false"
          v-bind:rotate="0"
          position="relative"
          highlight="transparent"
          background="transparent"
          v-bind:isClipping="false"
          ncTypography="custom"
          animationName=""
          ncTooltipText=""
          id="5e0c0285-2426-4099-90e4-6160e7b1c239"
          v-bind:style="{
            dir: 'ltr',
            width: '100%',
            bqCite: '',
            filter: 'none',
            height: '100%',
            zIndex: 38,
            fontStyle: 'normal',
            marginTop: '0px',
            textAlign: 'left',
            fontFamily: 'Roboto',
            fontWeight: 300,
            lineHeight: '1.4',
            marginLeft: '0px',
            paddingTop: '0px',
            textIndent: '0px',
            visibility: 'visible',
            whiteSpace: 'pre-wrap',
            marginRight: '0px',
            paddingLeft: '0px',
            wordSpacing: '0px',
            marginBottom: '0px',
            mixBlendMode: 'normal',
            paddingRight: '0px',
            letterSpacing: '0px',
            paddingBottom: '0px',
            textTransform: 'none',
            backdropFilter: 'none',
            textDecoration: 'none',
            textFormatting: 'p',
          }"
        />
        <WTextFormatting
          text="Email ‎"
          color="#000000"
          v-bind:snapX="false"
          v-bind:snapY="false"
          v-bind:rotate="0"
          position="relative"
          highlight="transparent"
          background="transparent"
          v-bind:isClipping="false"
          animationName=""
          ncTooltipText=""
          id="2a4cdccb-0d5c-4273-8706-9ee4a57994b8"
          v-bind:style="{
            dir: 'ltr',
            width: '100%',
            bqCite: '',
            filter: 'none',
            height: '100%',
            zIndex: 39,
            fontStyle: 'normal',
            marginTop: '0px',
            textAlign: 'left',
            fontFamily: 'Roboto',
            fontWeight: 300,
            lineHeight: '1.4',
            marginLeft: '0px',
            paddingTop: '0px',
            textIndent: '0px',
            visibility: 'visible',
            whiteSpace: 'pre-wrap',
            marginRight: '0px',
            paddingLeft: '0px',
            wordSpacing: '0px',
            marginBottom: '0px',
            mixBlendMode: 'normal',
            paddingRight: '0px',
            letterSpacing: '0px',
            paddingBottom: '0px',
            textTransform: 'none',
            backdropFilter: 'none',
            textDecoration: 'none',
            textFormatting: 'p',
          }"
        />
        <TextInput
          ref="email"
          v-bind:snapX="false"
          v-bind:snapY="false"
          value=""
          v-bind:rotate="0"
          opacity="1"
          ncBgType="bgColor"
          position="relative"
          v-bind:readonly="false"
          inputType="text"
          v-bind:isEnabled="true"
          maxLength=""
          placeholder="johndoe@email.com"
          animationName=""
          ncTooltipText=""
          ncFocusFontColor="#292929"
          ncHoverFontColor="#939393"
          placeholderColor="#C1C1C1FF"
          ncFocusBorderColor="#292929"
          ncHoverBorderColor="#5B5B5B66"
          ncFocusBackgroundColor="transparent"
          ncHoverBackgroundColor="transparent"
          id="fb23d698-e98b-43ee-864b-6c648a428bea"
          v-bind:style="{
            color: '#292929',
            width: '100%',
            filter: 'none',
            height: '100%',
            zIndex: 40,
            boxShadow: '',
            fontStyle: 'normal',
            marginTop: '0px',
            textAlign: 'left',
            background: 'transparent',
            fontFamily: 'Inter',
            fontWeight: 300,
            lineHeight: 'normal',
            marginLeft: '0px',
            paddingTop: '0px',
            textIndent: '0px',
            visibility: 'visible',
            borderColor: '#292929',
            borderStyle: 'solid',
            marginRight: '0px',
            paddingLeft: '0px',
            wordSpacing: '0px',
            marginBottom: '0px',
            mixBlendMode: 'normal',
            paddingRight: '0px',
            letterSpacing: '0px',
            paddingBottom: '0px',
            textTransform: 'none',
            backdropFilter: 'none',
            borderTopWidth: '0',
            textDecoration: 'none',
            borderLeftWidth: '0',
            borderRightWidth: '0',
            borderBottomWidth: '1px',
            borderTopLeftRadius: '0',
            borderTopRightRadius: '0',
            borderBottomLeftRadius: '0',
            borderBottomRightRadius: '0',
          }"
        />
        <WTextFormatting
          text="Phone Number"
          color="#000000"
          v-bind:snapX="false"
          v-bind:snapY="false"
          v-bind:rotate="0"
          position="relative"
          highlight="transparent"
          background="transparent"
          v-bind:isClipping="false"
          animationName=""
          ncTooltipText=""
          id="71abcefc-646c-4c8b-8236-f1f57acea357"
          v-bind:style="{
            dir: 'ltr',
            width: '100%',
            bqCite: '',
            filter: 'none',
            height: '100%',
            zIndex: 41,
            fontStyle: 'normal',
            marginTop: '0px',
            textAlign: 'left',
            fontFamily: 'Roboto',
            fontWeight: 300,
            lineHeight: '1.4',
            marginLeft: '0px',
            paddingTop: '0px',
            textIndent: '0px',
            visibility: 'visible',
            whiteSpace: 'pre-wrap',
            marginRight: '0px',
            paddingLeft: '0px',
            wordSpacing: '0px',
            marginBottom: '0px',
            mixBlendMode: 'normal',
            paddingRight: '0px',
            letterSpacing: '0px',
            paddingBottom: '0px',
            textTransform: 'none',
            backdropFilter: 'none',
            textDecoration: 'none',
            textFormatting: 'p',
          }"
        />
        <TextInput
          ref="phone"
          v-bind:snapX="false"
          v-bind:snapY="false"
          value=""
          v-bind:rotate="0"
          opacity="1"
          ncBgType="bgColor"
          position="relative"
          v-bind:readonly="false"
          inputType="text"
          v-bind:isEnabled="true"
          maxLength=""
          placeholder="0(123) 456-7890"
          animationName=""
          ncTooltipText=""
          ncFocusFontColor="#292929"
          ncHoverFontColor="#939393"
          placeholderColor="#C1C1C1FF"
          ncFocusBorderColor="#292929"
          ncHoverBorderColor="#5B5B5B66"
          ncFocusBackgroundColor="transparent"
          ncHoverBackgroundColor="transparent"
          id="f86bf4ac-6a77-4894-81e1-bed8476a6839"
          v-bind:style="{
            color: '#292929',
            width: '100%',
            filter: 'none',
            height: '100%',
            zIndex: 42,
            boxShadow: '',
            fontStyle: 'normal',
            marginTop: '0px',
            textAlign: 'left',
            background: 'transparent',
            fontFamily: 'Inter',
            fontWeight: 300,
            lineHeight: 'normal',
            marginLeft: '0px',
            paddingTop: '0px',
            textIndent: '0px',
            visibility: 'visible',
            borderColor: '#292929',
            borderStyle: 'solid',
            marginRight: '0px',
            paddingLeft: '0px',
            wordSpacing: '0px',
            marginBottom: '0px',
            mixBlendMode: 'normal',
            paddingRight: '0px',
            letterSpacing: '0px',
            paddingBottom: '0px',
            textTransform: 'none',
            backdropFilter: 'none',
            borderTopWidth: '0',
            textDecoration: 'none',
            borderLeftWidth: '0',
            borderRightWidth: '0',
            borderBottomWidth: '1px',
            borderTopLeftRadius: '0',
            borderTopRightRadius: '0',
            borderBottomLeftRadius: '0',
            borderBottomRightRadius: '0',
          }"
        />
        <WTextFormatting
          text="Address‎"
          color="#000000"
          v-bind:snapX="false"
          v-bind:snapY="false"
          v-bind:rotate="0"
          position="relative"
          highlight="transparent"
          background="transparent"
          v-bind:isClipping="false"
          animationName=""
          ncTooltipText=""
          id="6bc9e156-cfb2-4d0b-9f88-b862a1e8ace3"
          v-bind:style="{
            dir: 'ltr',
            width: '100%',
            bqCite: '',
            filter: 'none',
            height: '100%',
            zIndex: 43,
            fontStyle: 'normal',
            marginTop: '0px',
            textAlign: 'left',
            fontFamily: 'Roboto',
            fontWeight: 300,
            lineHeight: '1.4',
            marginLeft: '0px',
            paddingTop: '0px',
            textIndent: '0px',
            visibility: 'visible',
            whiteSpace: 'pre-wrap',
            marginRight: '0px',
            paddingLeft: '0px',
            wordSpacing: '0px',
            marginBottom: '0px',
            mixBlendMode: 'normal',
            paddingRight: '0px',
            letterSpacing: '0px',
            paddingBottom: '0px',
            textTransform: 'none',
            backdropFilter: 'none',
            textDecoration: 'none',
            textFormatting: 'p',
          }"
        />
        <TextInput
          ref="address"
          v-bind:snapX="false"
          v-bind:snapY="false"
          value=""
          v-bind:rotate="0"
          opacity="1"
          ncBgType="bgColor"
          position="relative"
          v-bind:readonly="false"
          inputType="text"
          v-bind:isEnabled="true"
          maxLength=""
          placeholder="123 Main Street"
          animationName=""
          ncTooltipText=""
          ncFocusFontColor="#292929"
          ncHoverFontColor="#939393"
          placeholderColor="#C1C1C1FF"
          ncFocusBorderColor="#292929"
          ncHoverBorderColor="#5B5B5B66"
          ncFocusBackgroundColor="transparent"
          ncHoverBackgroundColor="transparent"
          id="71d9bf32-f625-46eb-86c5-c4adc2166b6b"
          v-bind:style="{
            color: '#292929',
            width: '100%',
            filter: 'none',
            height: '100%',
            zIndex: 44,
            boxShadow: '',
            fontStyle: 'normal',
            marginTop: '0px',
            textAlign: 'left',
            background: 'transparent',
            fontFamily: 'Inter',
            fontWeight: 300,
            lineHeight: 'normal',
            marginLeft: '0px',
            paddingTop: '0px',
            textIndent: '0px',
            visibility: 'visible',
            borderColor: '#292929',
            borderStyle: 'solid',
            marginRight: '0px',
            paddingLeft: '0px',
            wordSpacing: '0px',
            marginBottom: '0px',
            mixBlendMode: 'normal',
            paddingRight: '0px',
            letterSpacing: '0px',
            paddingBottom: '0px',
            textTransform: 'none',
            backdropFilter: 'none(0%)',
            borderTopWidth: '0',
            textDecoration: 'none',
            borderLeftWidth: '0',
            borderRightWidth: '0',
            borderBottomWidth: '1px',
            borderTopLeftRadius: '0',
            borderTopRightRadius: '0',
            borderBottomLeftRadius: '0',
            borderBottomRightRadius: '0',
          }"
        />
        <WButton
          tag="button"
          href=""
          v-bind:pill="false"
          size="md"
          text="SUBMIT"
          type="button"
          v-bind:block="false"
          color="#FFFFFF"
          v-bind:snapX="false"
          v-bind:snapY="false"
          theme="theme--light01"
          v-bind:rotate="0"
          v-bind:squared="false"
          variant="primary"
          ncBgType="bgColor"
          position="relative"
          v-bind:isEnabled="true"
          background="#151515FF"
          linkTarget="_top"
          ncLinkType="router_link"
          borderColor="#007bff"
          borderRadius="16px"
          v-bind:resetTrigger="false"
          animationName=""
          ncTooltipText=""
          verticalWidth="60px"
          formTransition="none"
          v-bind:nucalDataModel="{ type: 'NSW', isList: false, dynamic: false, structure: [{ type: 'string', propName: 'text', displayName: 'Value' }] }"
          verticalHeight="60px"
          horizontalWidth="72.4479px"
          nucalScaleWidth=""
          toForRouterLink=""
          horizontalHeight="37.5347px"
          ncClickFontColor="#FFFFFF"
          ncFocusFontColor="#FFFFFF"
          ncHoverFontColor="#FFFFFF"
          nucalScaleHeight=""
          ncClickBorderColor="#181818FF"
          ncDisableFontColor="#FFFFFF"
          ncFocusBorderColor="#181818FF"
          ncHoverBorderColor="#151515B3"
          ncDisableBorderColor="transparent"
          ncClickBackgroundColor="#181818FF"
          ncFocusBackgroundColor="#181818FF"
          ncHoverBackgroundColor="linear-gradient(55deg, #1CC9AAFF 0%, #1CBFCDFF 98%)"
          ncDisableBackgroundColor="#969696"
          id="108277c7-dbbb-40c6-9698-cf65bb4bed51"
          v-bind:style="{
            width: '100%',
            filter: 'none',
            height: '100%',
            zIndex: 45,
            tabIndex: '0px',
            boxShadow: '',
            fontStyle: 'normal',
            marginTop: '',
            textAlign: 'center',
            fontFamily: 'Open Sans',
            fontWeight: 300,
            lineHeight: '1.4',
            marginLeft: '',
            paddingTop: '',
            textIndent: '0px',
            textShadow: '',
            visibility: 'visible',
            whiteSpace: 'pre-wrap',
            borderStyle: 'none',
            marginRight: '',
            paddingLeft: '',
            wordSpacing: '0px',
            marginBottom: '',
            mixBlendMode: 'normal',
            paddingRight: '',
            letterSpacing: '2px',
            paddingBottom: '',
            textTransform: 'none',
            backdropFilter: 'none',
            borderTopWidth: '1px',
            textDecoration: 'none',
            borderLeftWidth: '1px',
            borderRightWidth: '1px',
            horizontalHeight: '37.5347px',
            borderBottomWidth: '1px',
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
            borderBottomLeftRadius: '16px',
            borderBottomRightRadius: '16px',
          }"
          @click.native="createRecord"
        />
        <Convergence
          v-bind:snapX="false"
          v-bind:snapY="false"
          position="relative"
          id="9bd84b9d-11ae-48a8-b8ac-355d6ebb3d6f"
          v-bind:style="{ width: '100%', height: '100%', zIndex: 46 }"
        >
          <WTextFormatting
            text="City"
            color="#000000"
            v-bind:snapX="false"
            v-bind:snapY="false"
            v-bind:rotate="0"
            position="relative"
            highlight="transparent"
            background="transparent"
            v-bind:isClipping="false"
            animationName=""
            ncTooltipText=""
            id="264b2522-8024-4c4b-9248-484f87cf4c67"
            v-bind:style="{
              dir: 'ltr',
              width: '100%',
              bqCite: '',
              filter: 'none',
              height: '100%',
              zIndex: 47,
              fontStyle: 'normal',
              marginTop: '0px',
              textAlign: 'left',
              fontFamily: 'Roboto',
              fontWeight: 300,
              lineHeight: '1.4',
              marginLeft: '0px',
              paddingTop: '0px',
              textIndent: '0px',
              visibility: 'visible',
              whiteSpace: 'pre-wrap',
              marginRight: '0px',
              paddingLeft: '0px',
              wordSpacing: '0px',
              marginBottom: '0px',
              mixBlendMode: 'normal',
              paddingRight: '0px',
              letterSpacing: '0px',
              paddingBottom: '0px',
              textTransform: 'none',
              backdropFilter: 'none',
              textDecoration: 'none',
              textFormatting: 'p',
            }"
          />
          <TextInput
            ref="city"
            v-bind:snapX="false"
            v-bind:snapY="false"
            value=""
            v-bind:rotate="0"
            opacity="1"
            ncBgType="bgColor"
            position="relative"
            v-bind:readonly="false"
            inputType="text"
            v-bind:isEnabled="true"
            maxLength=""
            placeholder="Anytown"
            animationName=""
            ncTooltipText=""
            ncFocusFontColor="#292929"
            ncHoverFontColor="#939393"
            placeholderColor="#C1C1C1FF"
            ncFocusBorderColor="#292929"
            ncHoverBorderColor="#5B5B5B66"
            ncFocusBackgroundColor="transparent"
            ncHoverBackgroundColor="transparent"
            id="f0f80b98-2479-400f-93a2-a2a7ef6cc817"
            v-bind:style="{
              color: '#292929',
              width: '100%',
              filter: 'none',
              height: '100%',
              zIndex: 48,
              boxShadow: '',
              fontStyle: 'normal',
              marginTop: '0px',
              textAlign: 'left',
              background: 'transparent',
              fontFamily: 'Inter',
              fontWeight: 300,
              lineHeight: 'normal',
              marginLeft: '0px',
              paddingTop: '0px',
              textIndent: '0px',
              visibility: 'visible',
              borderColor: '#292929',
              borderStyle: 'solid',
              marginRight: '0px',
              paddingLeft: '0px',
              wordSpacing: '0px',
              marginBottom: '0px',
              mixBlendMode: 'normal',
              paddingRight: '0px',
              letterSpacing: '0px',
              paddingBottom: '0px',
              textTransform: 'none',
              backdropFilter: 'none(0%)',
              borderTopWidth: '0',
              textDecoration: 'none',
              borderLeftWidth: '0',
              borderRightWidth: '0',
              borderBottomWidth: '1px',
              borderTopLeftRadius: '0',
              borderTopRightRadius: '0',
              borderBottomLeftRadius: '0',
              borderBottomRightRadius: '0',
            }"
          />
          <WTextFormatting
            text="Country‎"
            color="#000000"
            v-bind:snapX="false"
            v-bind:snapY="false"
            v-bind:rotate="0"
            position="relative"
            highlight="transparent"
            background="transparent"
            v-bind:isClipping="false"
            animationName=""
            ncTooltipText=""
            id="6430c4ac-8cca-4b19-97d8-979453f3104a"
            v-bind:style="{
              dir: 'ltr',
              width: '100%',
              bqCite: '',
              filter: 'none',
              height: '100%',
              zIndex: 49,
              fontStyle: 'normal',
              marginTop: '0px',
              textAlign: 'left',
              fontFamily: 'Roboto',
              fontWeight: 300,
              lineHeight: '1.4',
              marginLeft: '0px',
              paddingTop: '0px',
              textIndent: '0px',
              visibility: 'visible',
              whiteSpace: 'pre-wrap',
              marginRight: '0px',
              paddingLeft: '0px',
              wordSpacing: '0px',
              marginBottom: '0px',
              mixBlendMode: 'normal',
              paddingRight: '0px',
              letterSpacing: '0px',
              paddingBottom: '0px',
              textTransform: 'none',
              backdropFilter: 'none',
              textDecoration: 'none',
              textFormatting: 'p',
            }"
          />
          <TextInput
            ref="country"
            v-bind:snapX="false"
            v-bind:snapY="false"
            value=""
            v-bind:rotate="0"
            opacity="1"
            ncBgType="bgColor"
            position="relative"
            v-bind:readonly="false"
            inputType="text"
            v-bind:isEnabled="true"
            maxLength=""
            placeholder="United States"
            animationName=""
            ncTooltipText=""
            ncFocusFontColor="#292929"
            ncHoverFontColor="#939393"
            placeholderColor="#C1C1C1FF"
            ncFocusBorderColor="#292929"
            ncHoverBorderColor="#5B5B5B66"
            ncFocusBackgroundColor="transparent"
            ncHoverBackgroundColor="transparent"
            id="c79e261d-f6ac-4354-b05c-53e9003e6739"
            v-bind:style="{
              color: '#292929',
              width: '100%',
              filter: 'none',
              height: '100%',
              zIndex: 50,
              boxShadow: '',
              fontStyle: 'normal',
              marginTop: '0px',
              textAlign: 'left',
              background: 'transparent',
              fontFamily: 'Inter',
              fontWeight: 300,
              lineHeight: 'normal',
              marginLeft: '0px',
              paddingTop: '0px',
              textIndent: '0px',
              visibility: 'visible',
              borderColor: '#292929',
              borderStyle: 'solid',
              marginRight: '0px',
              paddingLeft: '0px',
              wordSpacing: '0px',
              marginBottom: '0px',
              mixBlendMode: 'normal',
              paddingRight: '0px',
              letterSpacing: '0px',
              paddingBottom: '0px',
              textTransform: 'none',
              backdropFilter: 'none(0%)',
              borderTopWidth: '0',
              textDecoration: 'none',
              borderLeftWidth: '0',
              borderRightWidth: '0',
              borderBottomWidth: '1px',
              borderTopLeftRadius: '0',
              borderTopRightRadius: '0',
              borderBottomLeftRadius: '0',
              borderBottomRightRadius: '0',
            }"
          />
        </Convergence>
        <WTextFormatting
          text="Share your address for easy purchasing!‎"
          color="#000000FF"
          v-bind:snapX="false"
          v-bind:snapY="false"
          v-bind:rotate="0"
          position="relative"
          highlight="transparent"
          background="transparent"
          v-bind:isClipping="false"
          ncTypography="custom"
          animationName=""
          ncTooltipText=""
          id="7496d503-b8b2-4e8e-9dfe-c5b42edee3e9"
          v-bind:style="{
            dir: 'ltr',
            width: '100%',
            bqCite: '',
            filter: 'none',
            height: '100%',
            zIndex: 47,
            fontStyle: 'normal',
            marginTop: '0px',
            textAlign: 'left',
            fontFamily: 'Roboto',
            fontWeight: 300,
            lineHeight: '1.4',
            marginLeft: '0px',
            paddingTop: '0px',
            textIndent: '0px',
            visibility: 'visible',
            whiteSpace: 'pre-wrap',
            marginRight: '0px',
            paddingLeft: '0px',
            wordSpacing: '0px',
            marginBottom: '0px',
            mixBlendMode: 'normal',
            paddingRight: '0px',
            letterSpacing: '0px',
            paddingBottom: '0px',
            textTransform: 'none',
            backdropFilter: 'none',
            textDecoration: 'none',
            textFormatting: 'p',
          }"
        />
        <Convergence
          v-bind:snapX="false"
          v-bind:snapY="false"
          position="relative"
          id="68366a6e-cb8c-46b8-b851-0a47344f002b"
          v-bind:style="{ width: '100%', height: '100%', zIndex: 48 }"
        >
          <WTextFormatting
            text="Address"
            color="#000000"
            v-bind:snapX="false"
            v-bind:snapY="false"
            v-bind:rotate="0"
            position="relative"
            highlight="transparent"
            background="transparent"
            v-bind:isClipping="false"
            ncTypography="custom"
            animationName=""
            ncTooltipText=""
            id="3534aaaf-1607-42b0-9c41-9fead4d6d9ee"
            v-bind:style="{
              dir: 'ltr',
              width: '100%',
              bqCite: '',
              filter: 'none',
              height: '100%',
              zIndex: 49,
              fontStyle: 'normal',
              marginTop: '0px',
              textAlign: 'left',
              fontFamily: 'Roboto',
              fontWeight: 500,
              lineHeight: '1.4',
              marginLeft: '0px',
              paddingTop: '0px',
              textIndent: '0px',
              visibility: 'visible',
              whiteSpace: 'pre-wrap',
              marginRight: '0px',
              paddingLeft: '0px',
              wordSpacing: '0px',
              marginBottom: '0px',
              mixBlendMode: 'normal',
              paddingRight: '0px',
              letterSpacing: '0px',
              paddingBottom: '0px',
              textTransform: 'none',
              backdropFilter: 'none',
              textDecoration: 'none',
              textFormatting: 'p',
            }"
          />
          <WImage
            v-bind:blank="false"
            v-bind:snapX="false"
            v-bind:snapY="false"
            v-bind:rotate="0"
            v-bind:rounded="false"
            clipPath=""
            imageUrl="https://file.dev.nucal.com/5d3dc32d998c020bb22a126f171a370407da5c8e/public/093f8a3a-fe0b-4256-ac9b-35177e0b61cc"
            position="relative"
            objectFit="fill"
            v-bind:thumbnail="false"
            blankColor="#000000"
            defaultUrl="https://file.dev.nucal.com/2f9057712f3200f5cfc575e29a426aca6b807c36/public/fc6df702-6ee1-41cf-b45f-09d0431769e8"
            v-bind:disability="false"
            dataLoading="static"
            animationName=""
            ncTooltipText="Please write a text to display in tooltip..."
            v-bind:nucalDataModel="{
              type: 'NSW',
              isList: false,
              dynamic: true,
              structure: [{ type: 'string', update: { type: 'dataModelForDynamicType' }, propName: 'imageUrl', displayName: 'Value' }],
            }"
            ncHoverBorderColor="#000000"
            ncTappedBorderColor="#000000"
            dataModelForDynamicType="string"
            id="d808acc3-3100-4840-b2a1-0abe59067c15"
            v-bind:style="{
              width: '100%',
              filter: 'none',
              height: '100%',
              zIndex: 50,
              boxShadow: '',
              marginTop: '0px',
              marginLeft: '0px',
              paddingTop: '0px',
              textShadow: '',
              visibility: 'visible',
              borderColor: '#4B74FF',
              borderStyle: 'solid',
              marginRight: '0px',
              paddingLeft: '0px',
              marginBottom: '0px',
              mixBlendMode: 'normal',
              paddingRight: '0px',
              paddingBottom: '0px',
              backdropFilter: 'none',
              borderTopWidth: '0px',
              borderLeftWidth: '0px',
              borderRightWidth: '0px',
              borderBottomWidth: '0px',
              borderTopLeftRadius: '0px',
              borderTopRightRadius: '0px',
              borderBottomLeftRadius: '0px',
              borderBottomRightRadius: '0px',
            }"
          />
        </Convergence>
        <WTextFormatting
          text="Provide your contact details so we can stay in touch!‎"
          color="#000000FF"
          v-bind:snapX="false"
          v-bind:snapY="false"
          v-bind:rotate="0"
          position="relative"
          highlight="transparent"
          background="transparent"
          v-bind:isClipping="false"
          ncTypography="custom"
          animationName=""
          ncTooltipText=""
          id="1ebbbab0-cf9e-43bf-8a1e-eae5e78dae9e"
          v-bind:style="{
            dir: 'ltr',
            width: '100%',
            bqCite: '',
            filter: 'none',
            height: '100%',
            zIndex: 49,
            fontStyle: 'normal',
            marginTop: '0px',
            textAlign: 'left',
            fontFamily: 'Roboto',
            fontWeight: 300,
            lineHeight: '1.4',
            marginLeft: '0px',
            paddingTop: '0px',
            textIndent: '0px',
            visibility: 'visible',
            whiteSpace: 'pre-wrap',
            marginRight: '0px',
            paddingLeft: '0px',
            wordSpacing: '0px',
            marginBottom: '0px',
            mixBlendMode: 'normal',
            paddingRight: '0px',
            letterSpacing: '0px',
            paddingBottom: '0px',
            textTransform: 'none',
            backdropFilter: 'none',
            textDecoration: 'none',
            textFormatting: 'p',
          }"
        />
        <Convergence
          v-bind:snapX="false"
          v-bind:snapY="false"
          position="relative"
          id="78c9954b-88b9-44a3-8616-f970e6b7dcca"
          v-bind:style="{ width: '100%', height: '100%', zIndex: 50 }"
        >
          <WTextFormatting
            text="Contact Information"
            color="#000000"
            v-bind:snapX="false"
            v-bind:snapY="false"
            v-bind:rotate="0"
            position="relative"
            highlight="transparent"
            background="transparent"
            v-bind:isClipping="false"
            ncTypography="custom"
            animationName=""
            ncTooltipText=""
            id="816d5d53-12f2-4038-aaac-d908e8c7b301"
            v-bind:style="{
              dir: 'ltr',
              width: '100%',
              bqCite: '',
              filter: 'none',
              height: '100%',
              zIndex: 51,
              fontStyle: 'normal',
              marginTop: '0px',
              textAlign: 'left',
              fontFamily: 'Roboto',
              fontWeight: 500,
              lineHeight: '1.4',
              marginLeft: '0px',
              paddingTop: '0px',
              textIndent: '0px',
              visibility: 'visible',
              whiteSpace: 'pre-wrap',
              marginRight: '0px',
              paddingLeft: '0px',
              wordSpacing: '0px',
              marginBottom: '0px',
              mixBlendMode: 'normal',
              paddingRight: '0px',
              letterSpacing: '0px',
              paddingBottom: '0px',
              textTransform: 'none',
              backdropFilter: 'none',
              textDecoration: 'none',
              textFormatting: 'p',
            }"
          />
          <WImage
            v-bind:blank="false"
            v-bind:snapX="false"
            v-bind:snapY="false"
            v-bind:rotate="0"
            v-bind:rounded="false"
            clipPath=""
            imageUrl="https://file.dev.nucal.com/5d3dc32d998c020bb22a126f171a370407da5c8e/public/5ae605c5-1140-400a-b96b-816121df04df"
            position="relative"
            objectFit="fill"
            v-bind:thumbnail="false"
            blankColor="#000000"
            defaultUrl="https://file.dev.nucal.com/2f9057712f3200f5cfc575e29a426aca6b807c36/public/fc6df702-6ee1-41cf-b45f-09d0431769e8"
            v-bind:disability="false"
            dataLoading="static"
            animationName=""
            ncTooltipText="Please write a text to display in tooltip..."
            v-bind:nucalDataModel="{
              type: 'NSW',
              isList: false,
              dynamic: true,
              structure: [{ type: 'string', update: { type: 'dataModelForDynamicType' }, propName: 'imageUrl', displayName: 'Value' }],
            }"
            ncHoverBorderColor="#000000"
            ncTappedBorderColor="#000000"
            dataModelForDynamicType="string"
            id="eac6f5c7-1d34-496b-b3c4-170b66a7b81d"
            v-bind:style="{
              width: '100%',
              filter: 'none',
              height: '100%',
              zIndex: 52,
              boxShadow: '',
              marginTop: '0px',
              marginLeft: '0px',
              paddingTop: '0px',
              textShadow: '',
              visibility: 'visible',
              borderColor: '#4B74FF',
              borderStyle: 'solid',
              marginRight: '0px',
              paddingLeft: '0px',
              marginBottom: '0px',
              mixBlendMode: 'normal',
              paddingRight: '0px',
              paddingBottom: '0px',
              backdropFilter: 'none',
              borderTopWidth: '0px',
              borderLeftWidth: '0px',
              borderRightWidth: '0px',
              borderBottomWidth: '0px',
              borderTopLeftRadius: '0px',
              borderTopRightRadius: '0px',
              borderBottomLeftRadius: '0px',
              borderBottomRightRadius: '0px',
            }"
          />
        </Convergence>
      </SectionContainer>
      <SectionContainer
        v-bind:snapX="false"
        v-bind:snapY="false"
        v-bind:isLock="false"
        ncBgType="bgColor"
        position="relative"
        background="#FFFFFFFF"
        ncTooltipText=""
        backgroundImage=""
        id="e37d83c2-e2d8-44af-8d7c-48cc22483095"
        v-bind:style="{
          width: '100%',
          height: '100%',
          zIndex: 35,
          tabIndex: '-1',
          boxShadow: '',
          marginTop: '0px',
          marginLeft: '0px',
          paddingTop: '',
          visibility: 'visible',
          borderColor: '#21CA21',
          borderStyle: 'none',
          marginRight: '0px',
          paddingLeft: '',
          marginBottom: '0px',
          paddingRight: '',
          paddingBottom: '',
          borderTopWidth: '1px',
          textDecoration: 'none',
          borderLeftWidth: '1px',
          borderRightWidth: '1px',
          borderBottomWidth: '1px',
          borderTopLeftRadius: '0px',
          borderTopRightRadius: '0px',
          borderBottomLeftRadius: '0px',
          borderBottomRightRadius: '0px',
        }"
      >
        <WTextFormatting
          text="About Us‎"
          color="#000000"
          v-bind:snapX="false"
          v-bind:snapY="false"
          v-bind:rotate="0"
          position="relative"
          highlight="transparent"
          background="transparent"
          v-bind:isClipping="false"
          ncTypography="custom"
          animationName=""
          ncTooltipText=""
          id="d2742c8a-57a0-480c-b5d6-be3224d987ee"
          v-bind:style="{
            dir: 'ltr',
            width: '100%',
            bqCite: '',
            filter: 'none',
            height: '100%',
            zIndex: 37,
            fontStyle: 'normal',
            marginTop: '0px',
            textAlign: 'left',
            fontFamily: 'Roboto',
            fontWeight: 500,
            lineHeight: '1.4',
            marginLeft: '0px',
            paddingTop: '0px',
            textIndent: '0px',
            visibility: 'visible',
            whiteSpace: 'pre-wrap',
            marginRight: '0px',
            paddingLeft: '0px',
            wordSpacing: '0px',
            marginBottom: '0px',
            mixBlendMode: 'normal',
            paddingRight: '0px',
            letterSpacing: '0px',
            paddingBottom: '0px',
            textTransform: 'none',
            backdropFilter: 'none',
            textDecoration: 'none',
            textFormatting: 'p',
          }"
        />
        <WTextFormatting
          text="Welcome to our company, where innovation meets passion. Founded with a vision to redefine industry standards, we are dedicated to delivering excellence in every aspect of our business.

At our company, we believe in the power of collaboration, creativity, and commitment. Our team is comprised of talented individuals who are driven by a shared goal: to provide our customers with exceptional products and services that exceed expectations.‎"
          color="#000000"
          v-bind:snapX="false"
          v-bind:snapY="false"
          v-bind:rotate="0"
          position="relative"
          highlight="transparent"
          background="transparent"
          v-bind:isClipping="false"
          ncTypography="custom"
          animationName=""
          ncTooltipText=""
          id="7d31b56f-cf25-495f-b3ab-2840b4ac468b"
          v-bind:style="{
            dir: 'ltr',
            width: '100%',
            bqCite: '',
            filter: 'none',
            height: '100%',
            zIndex: 38,
            fontStyle: 'normal',
            marginTop: '0px',
            textAlign: 'left',
            fontFamily: 'Roboto',
            fontWeight: 300,
            lineHeight: '1.4',
            marginLeft: '0px',
            paddingTop: '0px',
            textIndent: '0px',
            visibility: 'visible',
            whiteSpace: 'pre-wrap',
            marginRight: '0px',
            paddingLeft: '0px',
            wordSpacing: '0px',
            marginBottom: '0px',
            mixBlendMode: 'normal',
            paddingRight: '0px',
            letterSpacing: '0px',
            paddingBottom: '0px',
            textTransform: 'none',
            backdropFilter: 'none',
            textDecoration: 'none',
            textFormatting: 'p',
          }"
        />
        <WImage
          v-bind:blank="false"
          v-bind:snapX="false"
          v-bind:snapY="false"
          v-bind:rotate="0"
          v-bind:rounded="false"
          clipPath=""
          imageUrl="https://file.dev.nucal.com/5d3dc32d998c020bb22a126f171a370407da5c8e/public/2f861073-8c72-4621-9a9b-9be8487ef91d"
          position="relative"
          objectFit="fill"
          v-bind:thumbnail="false"
          blankColor="#000000"
          defaultUrl="https://file.dev.nucal.com/2f9057712f3200f5cfc575e29a426aca6b807c36/public/fc6df702-6ee1-41cf-b45f-09d0431769e8"
          v-bind:disability="false"
          dataLoading="static"
          animationName=""
          ncTooltipText="Please write a text to display in tooltip..."
          v-bind:nucalDataModel="{
            type: 'NSW',
            isList: false,
            dynamic: true,
            structure: [{ type: 'string', update: { type: 'dataModelForDynamicType' }, propName: 'imageUrl', displayName: 'Value' }],
          }"
          ncHoverBorderColor="#000000"
          ncTappedBorderColor="#000000"
          dataModelForDynamicType="string"
          id="24035518-9030-4d94-90da-719e12a71359"
          v-bind:style="{
            width: '100%',
            filter: 'none',
            height: '100%',
            zIndex: 39,
            boxShadow: '',
            marginTop: '0px',
            marginLeft: '0px',
            paddingTop: '0px',
            textShadow: '',
            visibility: 'visible',
            borderColor: '#4B74FF',
            borderStyle: 'solid',
            marginRight: '0px',
            paddingLeft: '0px',
            marginBottom: '0px',
            mixBlendMode: 'normal',
            paddingRight: '0px',
            paddingBottom: '0px',
            backdropFilter: 'none',
            borderTopWidth: '0px',
            borderLeftWidth: '0px',
            borderRightWidth: '0px',
            borderBottomWidth: '0px',
            borderTopLeftRadius: '0px',
            borderTopRightRadius: '0px',
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '0px',
          }"
        />
      </SectionContainer>
      <SectionContainer
        v-bind:isLock="false"
        position="relative"
        background="linear-gradient(345deg, #152362FF 1%, #000000FF 51%, #363636FF 100%)"
        ncTooltipText=""
        id="ba0ff475-430c-40ef-a128-ec8c53e8ab52"
        v-bind:style="{
          width: '100%',
          height: '100%',
          zIndex: 36,
          tabIndex: '-1',
          boxShadow: '',
          marginTop: '0px',
          marginLeft: '0px',
          paddingTop: '',
          visibility: 'visible',
          borderColor: '#21CA21',
          borderStyle: 'none',
          marginRight: '0px',
          paddingLeft: '',
          marginBottom: '0px',
          paddingRight: '',
          paddingBottom: '',
          borderTopWidth: '1px',
          textDecoration: 'none',
          borderLeftWidth: '1px',
          borderRightWidth: '1px',
          borderBottomWidth: '1px',
          borderTopLeftRadius: '0px',
          borderTopRightRadius: '0px',
          borderBottomLeftRadius: '0px',
          borderBottomRightRadius: '0px',
        }"
      >
        <WButton
          tag="button"
          href=""
          v-bind:pill="false"
          size="md"
          text="Explore our products"
          type="button"
          v-bind:block="false"
          color="#FFFFFF"
          v-bind:snapX="false"
          v-bind:snapY="false"
          theme="theme--light01"
          v-bind:rotate="0"
          v-bind:squared="false"
          variant="primary"
          ncBgType="bgColor"
          position="relative"
          v-bind:isEnabled="true"
          background="#151515FF"
          linkTarget="_top"
          ncLinkType="router_link"
          borderColor="#B3B6B7FF"
          borderRadius="16px"
          v-bind:resetTrigger="false"
          animationName=""
          ncTooltipText=""
          verticalWidth="60px"
          formTransition="none"
          v-bind:nucalDataModel="{ type: 'NSW', isList: false, dynamic: false, structure: [{ type: 'string', propName: 'text', displayName: 'Value' }] }"
          verticalHeight="60px"
          horizontalWidth="72.4479px"
          nucalScaleWidth=""
          toForRouterLink="Screen+2"
          horizontalHeight="37.5347px"
          ncClickFontColor="#FFFFFF"
          ncFocusFontColor="#FFFFFF"
          ncHoverFontColor="#FFFFFF"
          nucalScaleHeight=""
          ncClickBorderColor="#B3B6B7FF"
          ncDisableFontColor="#FFFFFF"
          ncFocusBorderColor="#B3B6B7FF"
          ncHoverBorderColor="#00000000"
          ncDisableBorderColor="#00000000"
          ncClickBackgroundColor="#00000000"
          ncFocusBackgroundColor="#00000000"
          ncHoverBackgroundColor="linear-gradient(148deg, #63DFF4FF 0%, #2B2AF4FF 96%)"
          ncDisableBackgroundColor="#969696"
          id="c9ea107e-91ac-450c-94b3-a5c670b5e0ae"
          v-bind:style="{
            width: '100%',
            filter: 'none',
            height: '100%',
            zIndex: 38,
            tabIndex: '0px',
            boxShadow: '',
            fontStyle: 'normal',
            marginTop: '',
            textAlign: 'center',
            fontFamily: 'Open Sans',
            fontWeight: 300,
            lineHeight: '1.4',
            marginLeft: '',
            paddingTop: '',
            textIndent: '0px',
            textShadow: '',
            visibility: 'visible',
            whiteSpace: 'pre-wrap',
            borderStyle: 'solid',
            marginRight: '',
            paddingLeft: '',
            wordSpacing: '0px',
            marginBottom: '',
            mixBlendMode: 'normal',
            paddingRight: '',
            letterSpacing: '2px',
            paddingBottom: '',
            textTransform: 'none',
            backdropFilter: 'none',
            borderTopWidth: '1px',
            textDecoration: 'none',
            borderLeftWidth: '1px',
            borderRightWidth: '1px',
            horizontalHeight: '37.5347px',
            borderBottomWidth: '1px',
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
            borderBottomLeftRadius: '16px',
            borderBottomRightRadius: '16px',
          }"
        />
        <WTextFormatting
          text="Thank You!"
          color="#FFFFFFFF"
          v-bind:snapX="false"
          v-bind:snapY="false"
          v-bind:rotate="0"
          position="relative"
          highlight="transparent"
          background="transparent"
          v-bind:isClipping="false"
          ncTypography="custom"
          animationName=""
          ncTooltipText=""
          id="67b427ac-20e0-4e56-9f1c-fffbe94d4762"
          v-bind:style="{
            dir: 'ltr',
            width: '100%',
            bqCite: '',
            filter: 'none',
            height: '100%',
            zIndex: 39,
            fontStyle: 'normal',
            marginTop: '0px',
            textAlign: 'left',
            fontFamily: 'Roboto',
            fontWeight: 500,
            lineHeight: '1.4',
            marginLeft: '0px',
            paddingTop: '0px',
            textIndent: '0px',
            visibility: 'visible',
            whiteSpace: 'pre-wrap',
            marginRight: '0px',
            paddingLeft: '0px',
            wordSpacing: '0px',
            marginBottom: '0px',
            mixBlendMode: 'normal',
            paddingRight: '0px',
            letterSpacing: '0px',
            paddingBottom: '0px',
            textTransform: 'none',
            backdropFilter: 'none',
            textDecoration: 'none',
            textFormatting: 'p',
          }"
        />
        <WTextFormatting
          text="Thank you for taking the time to complete our customer form. Your input is invaluable to us as we strive to enhance your experience with our products/services. ‎"
          color="#B3B6B7FF"
          v-bind:snapX="false"
          v-bind:snapY="false"
          v-bind:rotate="0"
          position="relative"
          highlight="transparent"
          background="transparent"
          v-bind:isClipping="false"
          ncTypography="custom"
          animationName=""
          ncTooltipText=""
          id="d03375e3-3db4-458c-b072-3afdc6133bfd"
          v-bind:style="{
            dir: 'ltr',
            width: '100%',
            bqCite: '',
            filter: 'none',
            height: '100%',
            zIndex: 40,
            fontStyle: 'normal',
            marginTop: '0px',
            textAlign: 'left',
            fontFamily: 'Roboto',
            fontWeight: 300,
            lineHeight: '1.4',
            marginLeft: '0px',
            paddingTop: '0px',
            textIndent: '0px',
            visibility: 'visible',
            whiteSpace: 'pre-wrap',
            marginRight: '0px',
            paddingLeft: '0px',
            wordSpacing: '0px',
            marginBottom: '0px',
            mixBlendMode: 'normal',
            paddingRight: '0px',
            letterSpacing: '0px',
            paddingBottom: '0px',
            textTransform: 'none',
            backdropFilter: 'none',
            textDecoration: 'none',
            textFormatting: 'p',
          }"
        />
      </SectionContainer>
    </DropZone>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Screen1',
  data() {
    return {
      isProgressBarVisible: false,
    };
  },
  props: {},
  created() {},
  mounted() {},
  computed: { ...mapGetters('source', ['getApiMappingWithChain']) },
  methods: {
    ...mapActions('source', ['saveRecord', 'fetchOnload']),
    createRecord() {
      this.isProgressBarVisible = true;
      const payload = {
        records: [
          {
            fields: {
              FullName: this.$refs.fullName.$el.value,
              Email: this.$refs.email.$el.value,
              Address: this.$refs.address.$el.value,
              PhoneNumber: parseFloat(this.$refs.phone.$el.value),
              City: this.$refs.city.$el.value,
              Country: this.$refs.country.$el.value,
            },
          },
        ],
      };
      if (this.$refs.fullName.$el?.value) {
        this.saveRecord(payload)
          .then(() => {
            this.fetchOnload().then(() => {
              this.$router.push('Screen+2').then(() => {
                this.$nextTick(() => {
                  const element = document.getElementById('b58edfe7-7394-492f-8ba6-b5433786ab8a');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  this.isProgressBarVisible = false;
                });
              });
            });
          })
          .catch(() => {
            this.isProgressBarVisible = false;
          });
      }
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/scroll';
@include custom-scroll();
@media (min-width: 1024.05px) {
  [id='07692a07-229e-4f49-8630-cbdc38468d13'] {
    display: grid;
    grid-template-columns: 0 0 0 100rem 0 0 0;
    grid-template-rows: 0 minmax(56.25rem, max-content) 0 minmax(70.078125rem, max-content) 0 minmax(30rem, max-content) 0;
  }
  [id='557f714f-faf0-4447-b40e-497f3d2a40b9'] {
    grid-area: 3/2/5/5;
  }
  [id='e37d83c2-e2d8-44af-8d7c-48cc22483095'] {
    grid-area: 2/3/4/6;
  }
  [id='ba0ff475-430c-40ef-a128-ec8c53e8ab52'] {
    grid-area: 6/4/7/7;
  }
  [id='ba0ff475-430c-40ef-a128-ec8c53e8ab52'] /deep/ > .component-wrapper {
    display: grid;
    grid-template-columns: 10rem 0 42.1875rem 0 11.015625rem 26.796875rem 10rem;
    grid-template-rows:
      minmax(5rem, max-content) minmax(5.234375rem, max-content) minmax(3.75rem, max-content) minmax(1.25rem, max-content) minmax(3.75rem, max-content)
      minmax(1.171875rem, max-content) minmax(9.84375rem, max-content);
  }
  [id='c9ea107e-91ac-450c-94b3-a5c670b5e0ae'] {
    grid-area: 5/6/6/7;
    font-size: Max(Min(18rem, 12px), 1.40625rem);
  }
  [id='67b427ac-20e0-4e56-9f1c-fffbe94d4762'] {
    grid-area: 2/2/3/4;
    font-size: Max(Min(48rem, 12px), 3.75rem);
  }
  [id='d03375e3-3db4-458c-b072-3afdc6133bfd'] {
    grid-area: 4/3/7/5;
    font-size: Max(Min(18rem, 12px), 1.40625rem);
  }
  [id='e37d83c2-e2d8-44af-8d7c-48cc22483095'] /deep/ > .component-wrapper {
    display: grid;
    grid-template-columns: 5rem 0 42.1875rem 0 5.625rem 42.1875rem 5rem;
    grid-template-rows:
      minmax(5rem, max-content) minmax(10.234375rem, max-content) minmax(5.234375rem, max-content) minmax(2.03125rem, max-content) minmax(
        15.9375rem,
        max-content
      )
      minmax(12.8125rem, max-content) minmax(5rem, max-content);
  }
  [id='d2742c8a-57a0-480c-b5d6-be3224d987ee'] {
    grid-area: 3/2/4/4;
    font-size: Max(Min(48rem, 12px), 3.75rem);
  }
  [id='7d31b56f-cf25-495f-b3ab-2840b4ac468b'] {
    grid-area: 5/3/6/5;
    font-size: Max(Min(18rem, 12px), 1.40625rem);
  }
  [id='24035518-9030-4d94-90da-719e12a71359'] {
    grid-area: 2/6/7/7;
    aspect-ratio: 0.9121621621621622;
  }
  [id='557f714f-faf0-4447-b40e-497f3d2a40b9'] /deep/ > .component-wrapper {
    display: grid;
    grid-template-columns: 32.646484375rem 0 0 0.15625rem 0 0 0 0 0 0 0 0 0 0 0 34.21875rem 0 0 0.146484375rem 0 0 0 0 0 0 0 0 0 0 0 32.8125rem;
    grid-template-rows:
      minmax(5rem, max-content) minmax(3.4375rem, max-content) minmax(5rem, max-content) minmax(1.71875rem, max-content) minmax(0.5859375rem, max-content)
      minmax(2.03125rem, max-content) minmax(1.2109375rem, max-content) minmax(1.71875rem, max-content) minmax(0.46875rem, max-content) minmax(
        2.1875rem,
        max-content
      )
      minmax(1.5234375rem, max-content) minmax(1.71875rem, max-content) minmax(0.46875rem, max-content) minmax(2.1875rem, max-content) minmax(
        1.5625rem,
        max-content
      )
      minmax(1.71875rem, max-content) minmax(0.46875rem, max-content) minmax(2.1875rem, max-content) minmax(4.9609375rem, max-content) minmax(
        1.71875rem,
        max-content
      )
      minmax(0.625rem, max-content) minmax(2.03125rem, max-content) minmax(1.2109375rem, max-content) minmax(1.71875rem, max-content) minmax(
        0.46875rem,
        max-content
      )
      minmax(2.1875rem, max-content) minmax(1.5625rem, max-content) minmax(4.375rem, max-content) minmax(5.2734375rem, max-content) minmax(3.75rem, max-content)
      minmax(5rem, max-content);
  }
  [id='b7e81364-1020-4e80-8532-3d14d1d09e94'] {
    grid-area: 10/5/11/20;
    font-size: Max(Min(16rem, 12px), 1.25rem);
  }
  [id='606e503b-7334-466c-8be8-680fe58f26d2'] {
    grid-area: 8/6/9/21;
    font-size: Max(Min(16rem, 12px), 1.25rem);
  }
  [id='5e0c0285-2426-4099-90e4-6160e7b1c239'] {
    grid-area: 2/7/3/22;
    font-size: Max(Min(32rem, 12px), 2.5rem);
  }
  [id='2a4cdccb-0d5c-4273-8706-9ee4a57994b8'] {
    grid-area: 12/8/13/23;
    font-size: Max(Min(16rem, 12px), 1.25rem);
  }
  [id='fb23d698-e98b-43ee-864b-6c648a428bea'] {
    grid-area: 14/9/15/24;
    font-size: Max(Min(16rem, 12px), 1.25rem);
  }
  [id='71abcefc-646c-4c8b-8236-f1f57acea357'] {
    grid-area: 16/10/17/25;
    font-size: Max(Min(16rem, 12px), 1.25rem);
  }
  [id='f86bf4ac-6a77-4894-81e1-bed8476a6839'] {
    grid-area: 18/11/19/26;
    font-size: Max(Min(16rem, 12px), 1.25rem);
  }
  [id='6bc9e156-cfb2-4d0b-9f88-b862a1e8ace3'] {
    grid-area: 24/12/25/27;
    font-size: Max(Min(16rem, 12px), 1.25rem);
  }
  [id='71d9bf32-f625-46eb-86c5-c4adc2166b6b'] {
    grid-area: 26/13/27/28;
    font-size: Max(Min(16rem, 12px), 1.25rem);
  }
  [id='108277c7-dbbb-40c6-9698-cf65bb4bed51'] {
    grid-area: 30/14/31/29;
    font-size: Max(Min(18rem, 12px), 1.40625rem);
  }
  [id='9bd84b9d-11ae-48a8-b8ac-355d6ebb3d6f'] {
    grid-area: 28/2/29/19;
  }
  [id='7496d503-b8b2-4e8e-9dfe-c5b42edee3e9'] {
    grid-area: 22/15/23/30;
    font-size: Max(Min(14rem, 12px), 1.09375rem);
  }
  [id='68366a6e-cb8c-46b8-b851-0a47344f002b'] {
    grid-area: 20/3/21/17;
  }
  [id='1ebbbab0-cf9e-43bf-8a1e-eae5e78dae9e'] {
    grid-area: 6/16/7/31;
    font-size: Max(Min(14rem, 12px), 1.09375rem);
  }
  [id='78c9954b-88b9-44a3-8616-f970e6b7dcca'] {
    grid-area: 4/4/5/18;
  }
  [id='78c9954b-88b9-44a3-8616-f970e6b7dcca'] /deep/ > .component-wrapper {
    display: grid;
    grid-template-columns: 0 31.40625rem 1.25rem 1.71875rem 0;
    grid-template-rows: 0 0 minmax(1.71875rem, max-content) 0 0;
  }
  [id='816d5d53-12f2-4038-aaac-d908e8c7b301'] {
    grid-area: 2/2/4/3;
    font-size: Max(Min(20rem, 12px), 1.5625rem);
  }
  [id='eac6f5c7-1d34-496b-b3c4-170b66a7b81d'] {
    grid-area: 3/4/5/5;
    aspect-ratio: 1;
  }
  [id='68366a6e-cb8c-46b8-b851-0a47344f002b'] /deep/ > .component-wrapper {
    display: grid;
    grid-template-columns: 0 31.40625rem 1.25rem 1.71875rem 0;
    grid-template-rows: 0 0 minmax(1.71875rem, max-content) 0 0;
  }
  [id='3534aaaf-1607-42b0-9c41-9fead4d6d9ee'] {
    grid-area: 2/2/4/3;
    font-size: Max(Min(20rem, 12px), 1.5625rem);
  }
  [id='d808acc3-3100-4840-b2a1-0abe59067c15'] {
    grid-area: 3/4/5/5;
    aspect-ratio: 1;
  }
  [id='9bd84b9d-11ae-48a8-b8ac-355d6ebb3d6f'] /deep/ > .component-wrapper {
    display: grid;
    grid-template-columns: 0 0 16.5625rem 0 1.25rem 0 16.54296875rem 0 0;
    grid-template-rows: 0 0 minmax(1.71875rem, max-content) 0 minmax(0.4296875rem, max-content) 0 minmax(2.1484375rem, max-content) 0 0;
  }
  [id='264b2522-8024-4c4b-9248-484f87cf4c67'] {
    grid-area: 2/2/4/4;
    font-size: Max(Min(16rem, 12px), 1.25rem);
  }
  [id='f0f80b98-2479-400f-93a2-a2a7ef6cc817'] {
    grid-area: 7/3/9/5;
    font-size: Max(Min(16rem, 12px), 1.25rem);
  }
  [id='6430c4ac-8cca-4b19-97d8-979453f3104a'] {
    grid-area: 3/6/5/8;
    font-size: Max(Min(16rem, 12px), 1.25rem);
  }
  [id='c79e261d-f6ac-4354-b05c-53e9003e6739'] {
    grid-area: 6/7/8/9;
    font-size: Max(Min(16rem, 12px), 1.25rem);
  }
}
@media (min-width: 768.05px) and (max-width: 1024px) {
  [id='07692a07-229e-4f49-8630-cbdc38468d13'] {
    display: grid;
    grid-template-columns: 3.125rem 0 0 93.75rem 0 0 3.125rem;
    grid-template-rows: 0 minmax(52.734375rem, max-content) 0 minmax(65.6982421875rem, max-content) 0 minmax(28.125rem, max-content) minmax(
        3.125rem,
        max-content
      );
  }
  [id='557f714f-faf0-4447-b40e-497f3d2a40b9'] {
    grid-area: 3/3/5/6;
  }
  [id='e37d83c2-e2d8-44af-8d7c-48cc22483095'] {
    grid-area: 2/2/4/7;
  }
  [id='ba0ff475-430c-40ef-a128-ec8c53e8ab52'] {
    grid-area: 6/4/7/5;
  }
  [id='ba0ff475-430c-40ef-a128-ec8c53e8ab52'] /deep/ > .component-wrapper {
    display: grid;
    grid-template-columns: 3.125rem 0 15.960648148148147rem 55.5787037037037rem 15.960648148148147rem 0 3.125rem;
    grid-template-rows:
      minmax(4.6875rem, max-content) minmax(4.9072265625rem, max-content) minmax(3.515625rem, max-content) minmax(5.7861328125rem, max-content)
      minmax(2.34375rem, max-content) minmax(3.515625rem, max-content) minmax(3.369140625rem, max-content);
  }
  [id='c9ea107e-91ac-450c-94b3-a5c670b5e0ae'] {
    grid-area: 6/4/7/5;
    font-size: Max(Min(18rem, 12px), 2.9166666666666665rem);
  }
  [id='67b427ac-20e0-4e56-9f1c-fffbe94d4762'] {
    grid-area: 2/2/3/7;
    font-size: Max(Min(48rem, 12px), 7.777777777777778rem);
  }
  [id='d03375e3-3db4-458c-b072-3afdc6133bfd'] {
    grid-area: 4/3/5/6;
    font-size: Max(Min(18rem, 12px), 2.9166666666666665rem);
  }
  [id='e37d83c2-e2d8-44af-8d7c-48cc22483095'] /deep/ > .component-wrapper {
    display: grid;
    grid-template-columns: 3.125rem 0 0 87.5rem 0 0 3.125rem;
    grid-template-rows:
      minmax(4.6875rem, max-content) minmax(4.9072265625rem, max-content) minmax(1.904296875rem, max-content) minmax(14.94140625rem, max-content)
      minmax(2.34375rem, max-content) minmax(43.359375rem, max-content) minmax(2.34375rem, max-content);
  }
  [id='d2742c8a-57a0-480c-b5d6-be3224d987ee'] {
    grid-area: 2/3/3/6;
    font-size: Max(Min(48rem, 12px), 7.777777777777778rem);
  }
  [id='7d31b56f-cf25-495f-b3ab-2840b4ac468b'] {
    grid-area: 4/2/5/7;
    font-size: Max(Min(18rem, 12px), 2.9166666666666665rem);
  }
  [id='24035518-9030-4d94-90da-719e12a71359'] {
    grid-area: 6/4/7/5;
    aspect-ratio: 0.9121621621621622;
  }
  [id='557f714f-faf0-4447-b40e-497f3d2a40b9'] /deep/ > .component-wrapper {
    display: grid;
    grid-template-columns: 3.125rem 0 0 0 0 0 0 0 0 0 0 0 0 0 0 87.45031232254401rem 0 0 0 0 0 0 0 0 0 0 0 0 0 0 3.125rem;
    grid-template-rows:
      minmax(4.6875rem, max-content) minmax(3.22265625rem, max-content) minmax(4.6875rem, max-content) minmax(1.611328125rem, max-content) minmax(
        0.54931640625rem,
        max-content
      )
      minmax(1.904296875rem, max-content) minmax(1.13525390625rem, max-content) minmax(1.611328125rem, max-content) minmax(0.439453125rem, max-content) minmax(
        2.05078125rem,
        max-content
      )
      minmax(1.42822265625rem, max-content) minmax(1.611328125rem, max-content) minmax(0.439453125rem, max-content) minmax(2.05078125rem, max-content) minmax(
        1.46484375rem,
        max-content
      )
      minmax(1.611328125rem, max-content) minmax(0.439453125rem, max-content) minmax(2.05078125rem, max-content) minmax(4.65087890625rem, max-content) minmax(
        1.611328125rem,
        max-content
      )
      minmax(0.5859375rem, max-content) minmax(1.904296875rem, max-content) minmax(1.13525390625rem, max-content) minmax(1.611328125rem, max-content) minmax(
        0.439453125rem,
        max-content
      )
      minmax(2.05078125rem, max-content) minmax(1.46484375rem, max-content) minmax(4.1015625rem, max-content) minmax(4.94384765625rem, max-content) minmax(
        3.515625rem,
        max-content
      )
      minmax(4.6875rem, max-content);
  }
  [id='b7e81364-1020-4e80-8532-3d14d1d09e94'] {
    grid-area: 10/8/11/25;
    font-size: Max(Min(16rem, 12px), 3.1800113571834183rem);
  }
  [id='606e503b-7334-466c-8be8-680fe58f26d2'] {
    grid-area: 8/7/9/26;
    font-size: Max(Min(16rem, 12px), 3.1800113571834183rem);
  }
  [id='5e0c0285-2426-4099-90e4-6160e7b1c239'] {
    grid-area: 2/4/3/29;
    font-size: Max(Min(32rem, 12px), 6.360022714366837rem);
  }
  [id='2a4cdccb-0d5c-4273-8706-9ee4a57994b8'] {
    grid-area: 12/9/13/24;
    font-size: Max(Min(16rem, 12px), 3.1800113571834183rem);
  }
  [id='fb23d698-e98b-43ee-864b-6c648a428bea'] {
    grid-area: 14/10/15/23;
    font-size: Max(Min(16rem, 12px), 3.1800113571834183rem);
  }
  [id='71abcefc-646c-4c8b-8236-f1f57acea357'] {
    grid-area: 16/11/17/22;
    font-size: Max(Min(16rem, 12px), 3.1800113571834183rem);
  }
  [id='f86bf4ac-6a77-4894-81e1-bed8476a6839'] {
    grid-area: 18/12/19/21;
    font-size: Max(Min(16rem, 12px), 3.1800113571834183rem);
  }
  [id='6bc9e156-cfb2-4d0b-9f88-b862a1e8ace3'] {
    grid-area: 24/15/25/18;
    font-size: Max(Min(16rem, 12px), 3.1800113571834183rem);
  }
  [id='71d9bf32-f625-46eb-86c5-c4adc2166b6b'] {
    grid-area: 26/16/27/17;
    font-size: Max(Min(16rem, 12px), 3.1800113571834183rem);
  }
  [id='108277c7-dbbb-40c6-9698-cf65bb4bed51'] {
    grid-area: 30/3/31/30;
    font-size: Max(Min(18rem, 12px), 3.5775127768313455rem);
  }
  [id='9bd84b9d-11ae-48a8-b8ac-355d6ebb3d6f'] {
    grid-area: 28/2/29/31;
  }
  [id='7496d503-b8b2-4e8e-9dfe-c5b42edee3e9'] {
    grid-area: 22/14/23/19;
    font-size: Max(Min(14rem, 12px), 2.782509937535491rem);
  }
  [id='68366a6e-cb8c-46b8-b851-0a47344f002b'] {
    grid-area: 20/13/21/20;
  }
  [id='1ebbbab0-cf9e-43bf-8a1e-eae5e78dae9e'] {
    grid-area: 6/6/7/27;
    font-size: Max(Min(14rem, 12px), 2.782509937535491rem);
  }
  [id='78c9954b-88b9-44a3-8616-f970e6b7dcca'] {
    grid-area: 4/5/5/28;
  }
  [id='78c9954b-88b9-44a3-8616-f970e6b7dcca'] /deep/ > .component-wrapper {
    display: grid;
    grid-template-columns: 0 79.89778534923339rem 3.1800113571834183rem 4.3725156161272rem 0;
    grid-template-rows: 0 0 minmax(1.611328125rem, max-content) 0 0;
  }
  [id='816d5d53-12f2-4038-aaac-d908e8c7b301'] {
    grid-area: 2/2/4/3;
    font-size: Max(Min(20rem, 12px), 3.9750141964792727rem);
  }
  [id='eac6f5c7-1d34-496b-b3c4-170b66a7b81d'] {
    grid-area: 3/4/5/5;
    aspect-ratio: 1;
  }
  [id='68366a6e-cb8c-46b8-b851-0a47344f002b'] /deep/ > .component-wrapper {
    display: grid;
    grid-template-columns: 0 79.89778534923339rem 3.1800113571834183rem 4.3725156161272rem 0;
    grid-template-rows: 0 0 minmax(1.611328125rem, max-content) 0 0;
  }
  [id='3534aaaf-1607-42b0-9c41-9fead4d6d9ee'] {
    grid-area: 2/2/4/3;
    font-size: Max(Min(20rem, 12px), 3.9750141964792727rem);
  }
  [id='d808acc3-3100-4840-b2a1-0abe59067c15'] {
    grid-area: 3/4/5/5;
    aspect-ratio: 1;
  }
  [id='9bd84b9d-11ae-48a8-b8ac-355d6ebb3d6f'] /deep/ > .component-wrapper {
    display: grid;
    grid-template-columns: 0 0 42.13515048268029rem 0 3.1800113571834183rem 0 42.0854628052243rem 0 0;
    grid-template-rows: 0 0 minmax(1.611328125rem, max-content) 0 minmax(0.40283203125rem, max-content) 0 minmax(2.01416015625rem, max-content) 0 0;
  }
  [id='264b2522-8024-4c4b-9248-484f87cf4c67'] {
    grid-area: 2/3/4/4;
    font-size: Max(Min(16rem, 12px), 3.1800113571834183rem);
  }
  [id='f0f80b98-2479-400f-93a2-a2a7ef6cc817'] {
    grid-area: 7/2/9/5;
    font-size: Max(Min(16rem, 12px), 3.1800113571834183rem);
  }
  [id='6430c4ac-8cca-4b19-97d8-979453f3104a'] {
    grid-area: 3/7/5/8;
    font-size: Max(Min(16rem, 12px), 3.1800113571834183rem);
  }
  [id='c79e261d-f6ac-4354-b05c-53e9003e6739'] {
    grid-area: 6/6/8/9;
    font-size: Max(Min(16rem, 12px), 3.1800113571834183rem);
  }
}
@media (min-width: 480.05px) and (max-width: 768px) {
  [id='07692a07-229e-4f49-8630-cbdc38468d13'] {
    display: grid;
    grid-template-columns: 4.166666667000001rem 0 0 91.666666666rem 0 0 4.166666667000001rem;
    grid-template-rows: 0 minmax(51.562499999625004rem, max-content) 0 minmax(64.23828124953282rem, max-content) 0 minmax(27.4999999998rem, max-content) minmax(
        4.166666667rem,
        max-content
      );
  }
  [id='557f714f-faf0-4447-b40e-497f3d2a40b9'] {
    grid-area: 3/3/5/6;
  }
  [id='e37d83c2-e2d8-44af-8d7c-48cc22483095'] {
    grid-area: 2/2/4/7;
  }
  [id='ba0ff475-430c-40ef-a128-ec8c53e8ab52'] {
    grid-area: 6/4/7/5;
  }
  [id='ba0ff475-430c-40ef-a128-ec8c53e8ab52'] /deep/ > .component-wrapper {
    display: grid;
    grid-template-columns: 4.166666667rem 0 15.200617283707404rem 52.932098764585184rem 15.200617283707409rem 0 4.166666667rem;
    grid-template-rows:
      minmax(4.583333333300001rem, max-content) minmax(4.798177083298438rem, max-content) minmax(3.437499999975rem, max-content) minmax(
        5.657552083292188rem,
        max-content
      )
      minmax(2.2916666668333336rem, max-content) minmax(3.437499999975rem, max-content) minmax(3.294270833126041rem, max-content);
  }
  [id='c9ea107e-91ac-450c-94b3-a5c670b5e0ae'] {
    grid-area: 6/4/7/5;
    font-size: Max(Min(18rem, 12px), 2.777777777733333rem);
  }
  [id='67b427ac-20e0-4e56-9f1c-fffbe94d4762'] {
    grid-area: 2/2/3/7;
    font-size: Max(Min(48rem, 12px), 7.407407407288888rem);
  }
  [id='d03375e3-3db4-458c-b072-3afdc6133bfd'] {
    grid-area: 4/3/5/6;
    font-size: Max(Min(18rem, 12px), 2.777777777733333rem);
  }
  [id='e37d83c2-e2d8-44af-8d7c-48cc22483095'] /deep/ > .component-wrapper {
    display: grid;
    grid-template-columns: 4.166666667rem 0 0 83.333333332rem 0 0 4.166666667rem;
    grid-template-rows:
      minmax(4.583333333300001rem, max-content) minmax(4.798177083298438rem, max-content) minmax(1.861979166653125rem, max-content) minmax(
        14.60937499989375rem,
        max-content
      )
      minmax(2.2916666668333336rem, max-content) minmax(42.39583333302501rem, max-content) minmax(2.2916666668333336rem, max-content);
  }
  [id='d2742c8a-57a0-480c-b5d6-be3224d987ee'] {
    grid-area: 2/3/3/6;
    font-size: Max(Min(48rem, 12px), 7.407407407288888rem);
  }
  [id='7d31b56f-cf25-495f-b3ab-2840b4ac468b'] {
    grid-area: 4/2/5/7;
    font-size: Max(Min(18rem, 12px), 2.777777777733333rem);
  }
  [id='24035518-9030-4d94-90da-719e12a71359'] {
    grid-area: 6/4/7/5;
    aspect-ratio: 0.9121621621621622;
  }
  [id='557f714f-faf0-4447-b40e-497f3d2a40b9'] /deep/ > .component-wrapper {
    display: grid;
    grid-template-columns: 4.166666667rem 0 0 0 0 0 0 0 0 0 0 0 0 0 0 83.28601173442361rem 0 0 0 0 0 0 0 0 0 0 0 0 0 0 4.166666667rem;
    grid-template-rows:
      minmax(4.583333333300001rem, max-content) minmax(3.15104166664375rem, max-content) minmax(4.583333333300001rem, max-content) minmax(
        1.575520833321875rem,
        max-content
      )
      minmax(0.5371093749960938rem, max-content) minmax(1.861979166653125rem, max-content) minmax(1.1100260416585936rem, max-content) minmax(
        1.575520833321875rem,
        max-content
      )
      minmax(0.429687499996875rem, max-content) minmax(2.00520833331875rem, max-content) minmax(1.396484374989844rem, max-content) minmax(
        1.575520833321875rem,
        max-content
      )
      minmax(0.429687499996875rem, max-content) minmax(2.00520833331875rem, max-content) minmax(1.43229166665625rem, max-content) minmax(
        1.575520833321875rem,
        max-content
      )
      minmax(0.429687499996875rem, max-content) minmax(2.00520833331875rem, max-content) minmax(4.547526041633594rem, max-content) minmax(
        1.575520833321875rem,
        max-content
      )
      minmax(0.5729166666625001rem, max-content) minmax(1.861979166653125rem, max-content) minmax(1.1100260416585936rem, max-content) minmax(
        1.575520833321875rem,
        max-content
      )
      minmax(0.429687499996875rem, max-content) minmax(2.00520833331875rem, max-content) minmax(1.43229166665625rem, max-content) minmax(
        4.0104166666375rem,
        max-content
      )
      minmax(4.833984374964844rem, max-content) minmax(3.437499999975rem, max-content) minmax(4.58333333329999rem, max-content);
  }
  [id='b7e81364-1020-4e80-8532-3d14d1d09e94'] {
    grid-area: 10/7/11/26;
    font-size: Max(Min(16rem, 12px), 3.0285822448881317rem);
  }
  [id='606e503b-7334-466c-8be8-680fe58f26d2'] {
    grid-area: 8/6/9/27;
    font-size: Max(Min(16rem, 12px), 3.0285822448881317rem);
  }
  [id='5e0c0285-2426-4099-90e4-6160e7b1c239'] {
    grid-area: 2/3/3/30;
    font-size: Max(Min(32rem, 12px), 6.057164489776263rem);
  }
  [id='2a4cdccb-0d5c-4273-8706-9ee4a57994b8'] {
    grid-area: 12/8/13/25;
    font-size: Max(Min(16rem, 12px), 3.0285822448881317rem);
  }
  [id='fb23d698-e98b-43ee-864b-6c648a428bea'] {
    grid-area: 14/9/15/24;
    font-size: Max(Min(16rem, 12px), 3.0285822448881317rem);
  }
  [id='71abcefc-646c-4c8b-8236-f1f57acea357'] {
    grid-area: 16/10/17/23;
    font-size: Max(Min(16rem, 12px), 3.0285822448881317rem);
  }
  [id='f86bf4ac-6a77-4894-81e1-bed8476a6839'] {
    grid-area: 18/11/19/22;
    font-size: Max(Min(16rem, 12px), 3.0285822448881317rem);
  }
  [id='6bc9e156-cfb2-4d0b-9f88-b862a1e8ace3'] {
    grid-area: 24/14/25/19;
    font-size: Max(Min(16rem, 12px), 3.0285822448881317rem);
  }
  [id='71d9bf32-f625-46eb-86c5-c4adc2166b6b'] {
    grid-area: 26/15/27/18;
    font-size: Max(Min(16rem, 12px), 3.0285822448881317rem);
  }
  [id='108277c7-dbbb-40c6-9698-cf65bb4bed51'] {
    grid-area: 30/16/31/17;
    font-size: Max(Min(18rem, 12px), 3.407155025499148rem);
  }
  [id='9bd84b9d-11ae-48a8-b8ac-355d6ebb3d6f'] {
    grid-area: 28/2/29/31;
  }
  [id='7496d503-b8b2-4e8e-9dfe-c5b42edee3e9'] {
    grid-area: 22/13/23/20;
    font-size: Max(Min(14rem, 12px), 2.6500094642771153rem);
  }
  [id='68366a6e-cb8c-46b8-b851-0a47344f002b'] {
    grid-area: 20/12/21/21;
  }
  [id='1ebbbab0-cf9e-43bf-8a1e-eae5e78dae9e'] {
    grid-area: 6/5/7/28;
    font-size: Max(Min(14rem, 12px), 2.6500094642771153rem);
  }
  [id='78c9954b-88b9-44a3-8616-f970e6b7dcca'] {
    grid-area: 4/4/5/29;
  }
  [id='78c9954b-88b9-44a3-8616-f970e6b7dcca'] /deep/ > .component-wrapper {
    display: grid;
    grid-template-columns: 0 76.0931289028143rem 3.028582244888131rem 4.164300586721181rem 0;
    grid-template-rows: 0 0 minmax(1.575520833321875rem, max-content) 0 0;
  }
  [id='816d5d53-12f2-4038-aaac-d908e8c7b301'] {
    grid-area: 2/2/4/3;
    font-size: Max(Min(20rem, 12px), 3.7857278061101636rem);
  }
  [id='eac6f5c7-1d34-496b-b3c4-170b66a7b81d'] {
    grid-area: 3/4/5/5;
    aspect-ratio: 1;
  }
  [id='68366a6e-cb8c-46b8-b851-0a47344f002b'] /deep/ > .component-wrapper {
    display: grid;
    grid-template-columns: 0 76.0931289028143rem 3.028582244888131rem 4.164300586721181rem 0;
    grid-template-rows: 0 0 minmax(1.575520833321875rem, max-content) 0 0;
  }
  [id='3534aaaf-1607-42b0-9c41-9fead4d6d9ee'] {
    grid-area: 2/2/4/3;
    font-size: Max(Min(20rem, 12px), 3.7857278061101636rem);
  }
  [id='d808acc3-3100-4840-b2a1-0abe59067c15'] {
    grid-area: 3/4/5/5;
    aspect-ratio: 1;
  }
  [id='9bd84b9d-11ae-48a8-b8ac-355d6ebb3d6f'] /deep/ > .component-wrapper {
    display: grid;
    grid-template-columns: 0 0 40.12871474476775rem 0 3.0285822448881317rem 0 40.08139314719136rem 0 0;
    grid-template-rows: 0 0 minmax(1.575520833321875rem, max-content) 0 minmax(0.3938802083304688rem, max-content) 0 minmax(1.9694010416523438rem, max-content) 0 0;
  }
  [id='264b2522-8024-4c4b-9248-484f87cf4c67'] {
    grid-area: 2/3/4/4;
    font-size: Max(Min(16rem, 12px), 3.0285822448881317rem);
  }
  [id='f0f80b98-2479-400f-93a2-a2a7ef6cc817'] {
    grid-area: 7/2/9/5;
    font-size: Max(Min(16rem, 12px), 3.0285822448881317rem);
  }
  [id='6430c4ac-8cca-4b19-97d8-979453f3104a'] {
    grid-area: 3/7/5/8;
    font-size: Max(Min(16rem, 12px), 3.0285822448881317rem);
  }
  [id='c79e261d-f6ac-4354-b05c-53e9003e6739'] {
    grid-area: 6/6/8/9;
    font-size: Max(Min(16rem, 12px), 3.0285822448881317rem);
  }
}
@media (min-width: 375.05px) and (max-width: 480px) {
  [id='07692a07-229e-4f49-8630-cbdc38468d13'] {
    display: grid;
    grid-template-columns: 5rem 0 0 90rem 0 0 5rem;
    grid-template-rows: 0 minmax(50.62499999999999rem, max-content) 0 minmax(63.07031249999999rem, max-content) 0 minmax(26.999999999999996rem, max-content) minmax(
        5rem,
        max-content
      );
  }
  [id='557f714f-faf0-4447-b40e-497f3d2a40b9'] {
    grid-area: 3/3/5/6;
  }
  [id='e37d83c2-e2d8-44af-8d7c-48cc22483095'] {
    grid-area: 2/2/4/7;
  }
  [id='ba0ff475-430c-40ef-a128-ec8c53e8ab52'] {
    grid-area: 6/4/7/5;
  }
  [id='ba0ff475-430c-40ef-a128-ec8c53e8ab52'] /deep/ > .component-wrapper {
    display: grid;
    grid-template-columns: 5rem 0 14.592592592592595rem 50.81481481481482rem 14.59259259259259rem 0 5rem;
    grid-template-rows:
      minmax(4.5rem, max-content) minmax(4.7109375rem, max-content) minmax(3.3749999999999996rem, max-content) minmax(5.5546875rem, max-content)
      minmax(1.6874999999999998rem, max-content) minmax(3.3749999999999996rem, max-content) minmax(3.7968749999999996rem, max-content);
  }
  [id='c9ea107e-91ac-450c-94b3-a5c670b5e0ae'] {
    grid-area: 6/4/7/5;
    font-size: Max(Min(18rem, 12px), 2.666666666666667rem);
  }
  [id='67b427ac-20e0-4e56-9f1c-fffbe94d4762'] {
    grid-area: 2/3/3/6;
    font-size: Max(Min(48rem, 12px), 7.111111111111112rem);
  }
  [id='d03375e3-3db4-458c-b072-3afdc6133bfd'] {
    grid-area: 4/2/5/7;
    font-size: Max(Min(18rem, 12px), 2.666666666666667rem);
  }
  [id='e37d83c2-e2d8-44af-8d7c-48cc22483095'] /deep/ > .component-wrapper {
    display: grid;
    grid-template-columns: 5rem 0 0 80rem 0 0 5rem;
    grid-template-rows:
      minmax(4.5rem, max-content) minmax(4.7109375rem, max-content) minmax(1.828125rem, max-content) minmax(14.343749999999998rem, max-content)
      minmax(1.6874999999999998rem, max-content) minmax(41.62499999999999rem, max-content) minmax(1.6874999999999998rem, max-content);
  }
  [id='d2742c8a-57a0-480c-b5d6-be3224d987ee'] {
    grid-area: 2/3/3/6;
    font-size: Max(Min(48rem, 12px), 7.111111111111112rem);
  }
  [id='7d31b56f-cf25-495f-b3ab-2840b4ac468b'] {
    grid-area: 4/2/5/7;
    font-size: Max(Min(18rem, 12px), 2.666666666666667rem);
  }
  [id='24035518-9030-4d94-90da-719e12a71359'] {
    grid-area: 6/4/7/5;
    aspect-ratio: 0.9121621621621622;
  }
  [id='557f714f-faf0-4447-b40e-497f3d2a40b9'] /deep/ > .component-wrapper {
    display: grid;
    grid-template-columns: 5rem 0 0 0 0 0 0 0 0 0 0 0 0 0 0 79.95457126632594rem 0 0 0 0 0 0 0 0 0 0 0 0 0 0 5rem;
    grid-template-rows:
      minmax(4.5rem, max-content) minmax(3.0937499999999996rem, max-content) minmax(4.5rem, max-content) minmax(1.5468749999999998rem, max-content)
      minmax(0.52734375rem, max-content) minmax(1.828125rem, max-content) minmax(1.0898437499999998rem, max-content) minmax(1.5468749999999998rem, max-content)
      minmax(0.42187499999999994rem, max-content) minmax(1.9687499999999998rem, max-content) minmax(1.3710937499999998rem, max-content) minmax(
        1.5468749999999998rem,
        max-content
      )
      minmax(0.42187499999999994rem, max-content) minmax(1.9687499999999998rem, max-content) minmax(1.40625rem, max-content) minmax(
        1.5468749999999998rem,
        max-content
      )
      minmax(0.42187499999999994rem, max-content) minmax(1.9687499999999998rem, max-content) minmax(4.464843749999999rem, max-content) minmax(
        1.5468749999999998rem,
        max-content
      )
      minmax(0.5625rem, max-content) minmax(1.828125rem, max-content) minmax(1.0898437499999998rem, max-content) minmax(1.5468749999999998rem, max-content) minmax(
        0.42187499999999994rem,
        max-content
      )
      minmax(1.9687499999999998rem, max-content) minmax(1.40625rem, max-content) minmax(3.9374999999999996rem, max-content) minmax(
        4.746093749999999rem,
        max-content
      )
      minmax(3.3749999999999996rem, max-content) minmax(4.500000000000003rem, max-content);
  }
  [id='b7e81364-1020-4e80-8532-3d14d1d09e94'] {
    grid-area: 10/8/11/25;
    font-size: Max(Min(16rem, 12px), 2.9074389551391255rem);
  }
  [id='606e503b-7334-466c-8be8-680fe58f26d2'] {
    grid-area: 8/7/9/26;
    font-size: Max(Min(16rem, 12px), 2.9074389551391255rem);
  }
  [id='5e0c0285-2426-4099-90e4-6160e7b1c239'] {
    grid-area: 2/4/3/29;
    font-size: Max(Min(32rem, 12px), 5.814877910278251rem);
  }
  [id='2a4cdccb-0d5c-4273-8706-9ee4a57994b8'] {
    grid-area: 12/9/13/24;
    font-size: Max(Min(16rem, 12px), 2.9074389551391255rem);
  }
  [id='fb23d698-e98b-43ee-864b-6c648a428bea'] {
    grid-area: 14/10/15/23;
    font-size: Max(Min(16rem, 12px), 2.9074389551391255rem);
  }
  [id='71abcefc-646c-4c8b-8236-f1f57acea357'] {
    grid-area: 16/11/17/22;
    font-size: Max(Min(16rem, 12px), 2.9074389551391255rem);
  }
  [id='f86bf4ac-6a77-4894-81e1-bed8476a6839'] {
    grid-area: 18/12/19/21;
    font-size: Max(Min(16rem, 12px), 2.9074389551391255rem);
  }
  [id='6bc9e156-cfb2-4d0b-9f88-b862a1e8ace3'] {
    grid-area: 24/15/25/18;
    font-size: Max(Min(16rem, 12px), 2.9074389551391255rem);
  }
  [id='71d9bf32-f625-46eb-86c5-c4adc2166b6b'] {
    grid-area: 26/16/27/17;
    font-size: Max(Min(16rem, 12px), 2.9074389551391255rem);
  }
  [id='108277c7-dbbb-40c6-9698-cf65bb4bed51'] {
    grid-area: 30/3/31/30;
    font-size: Max(Min(18rem, 12px), 3.270868824531516rem);
  }
  [id='9bd84b9d-11ae-48a8-b8ac-355d6ebb3d6f'] {
    grid-area: 28/2/29/31;
  }
  [id='7496d503-b8b2-4e8e-9dfe-c5b42edee3e9'] {
    grid-area: 22/14/23/19;
    font-size: Max(Min(14rem, 12px), 2.5440090857467346rem);
  }
  [id='68366a6e-cb8c-46b8-b851-0a47344f002b'] {
    grid-area: 20/13/21/20;
  }
  [id='1ebbbab0-cf9e-43bf-8a1e-eae5e78dae9e'] {
    grid-area: 6/6/7/27;
    font-size: Max(Min(14rem, 12px), 2.5440090857467346rem);
  }
  [id='78c9954b-88b9-44a3-8616-f970e6b7dcca'] {
    grid-area: 4/5/5/28;
  }
  [id='78c9954b-88b9-44a3-8616-f970e6b7dcca'] /deep/ > .component-wrapper {
    display: grid;
    grid-template-columns: 0 73.04940374787054rem 2.907438955139126rem 3.997728563316298rem 0;
    grid-template-rows: 0 0 minmax(1.5468749999999998rem, max-content) 0 0;
  }
  [id='816d5d53-12f2-4038-aaac-d908e8c7b301'] {
    grid-area: 2/2/4/3;
    font-size: Max(Min(20rem, 12px), 3.6342986939239075rem);
  }
  [id='eac6f5c7-1d34-496b-b3c4-170b66a7b81d'] {
    grid-area: 3/4/5/5;
    aspect-ratio: 1;
  }
  [id='68366a6e-cb8c-46b8-b851-0a47344f002b'] /deep/ > .component-wrapper {
    display: grid;
    grid-template-columns: 0 73.04940374787054rem 2.907438955139126rem 3.997728563316298rem 0;
    grid-template-rows: 0 0 minmax(1.5468749999999998rem, max-content) 0 0;
  }
  [id='3534aaaf-1607-42b0-9c41-9fead4d6d9ee'] {
    grid-area: 2/2/4/3;
    font-size: Max(Min(20rem, 12px), 3.6342986939239075rem);
  }
  [id='d808acc3-3100-4840-b2a1-0abe59067c15'] {
    grid-area: 3/4/5/5;
    aspect-ratio: 1;
  }
  [id='9bd84b9d-11ae-48a8-b8ac-355d6ebb3d6f'] /deep/ > .component-wrapper {
    display: grid;
    grid-template-columns: 0 0 38.523566155593414rem 0 2.9074389551391255rem 0 38.478137421919364rem 0 0;
    grid-template-rows: 0 0 minmax(1.5468749999999998rem, max-content) 0 minmax(0.38671874999999994rem, max-content) 0 minmax(1.93359375rem, max-content) 0 0;
  }
  [id='264b2522-8024-4c4b-9248-484f87cf4c67'] {
    grid-area: 2/3/4/4;
    font-size: Max(Min(16rem, 12px), 2.9074389551391255rem);
  }
  [id='f0f80b98-2479-400f-93a2-a2a7ef6cc817'] {
    grid-area: 7/2/9/5;
    font-size: Max(Min(16rem, 12px), 2.9074389551391255rem);
  }
  [id='6430c4ac-8cca-4b19-97d8-979453f3104a'] {
    grid-area: 3/7/5/8;
    font-size: Max(Min(16rem, 12px), 2.9074389551391255rem);
  }
  [id='c79e261d-f6ac-4354-b05c-53e9003e6739'] {
    grid-area: 6/6/8/9;
    font-size: Max(Min(16rem, 12px), 2.9074389551391255rem);
  }
}
@media (min-width: 0px) and (max-width: 375px) {
  [id='07692a07-229e-4f49-8630-cbdc38468d13'] {
    display: grid;
    grid-template-columns: 6.4rem 0 0 87.2rem 0 0 6.4rem;
    grid-template-rows: 0 minmax(49.050000000000004rem, max-content) 0 minmax(61.108125rem, max-content) 0 minmax(26.160000000000004rem, max-content) minmax(
        6.4rem,
        max-content
      );
  }
  [id='557f714f-faf0-4447-b40e-497f3d2a40b9'] {
    grid-area: 3/3/5/6;
  }
  [id='e37d83c2-e2d8-44af-8d7c-48cc22483095'] {
    grid-area: 2/2/4/7;
  }
  [id='ba0ff475-430c-40ef-a128-ec8c53e8ab52'] {
    grid-area: 6/4/7/5;
  }
  [id='ba0ff475-430c-40ef-a128-ec8c53e8ab52'] /deep/ > .component-wrapper {
    display: grid;
    grid-template-columns: 6.4rem 0 13.571111111111112rem 47.25777777777778rem 13.571111111111112rem 0 6.4rem;
    grid-template-rows:
      minmax(4.36rem, max-content) minmax(4.564375000000001rem, max-content) minmax(3.2700000000000005rem, max-content) minmax(5.381875rem, max-content)
      minmax(1.6350000000000002rem, max-content) minmax(3.2700000000000005rem, max-content) minmax(3.6787500000000017rem, max-content);
  }
  [id='c9ea107e-91ac-450c-94b3-a5c670b5e0ae'] {
    grid-area: 6/4/7/5;
    font-size: Max(Min(18rem, 12px), 2.48rem);
  }
  [id='67b427ac-20e0-4e56-9f1c-fffbe94d4762'] {
    grid-area: 2/2/3/7;
    font-size: Max(Min(48rem, 12px), 6.613333333333334rem);
  }
  [id='d03375e3-3db4-458c-b072-3afdc6133bfd'] {
    grid-area: 4/3/5/6;
    font-size: Max(Min(18rem, 12px), 2.48rem);
  }
  [id='e37d83c2-e2d8-44af-8d7c-48cc22483095'] /deep/ > .component-wrapper {
    display: grid;
    grid-template-columns: 6.4rem 0 0 74.4rem 0 0 6.4rem;
    grid-template-rows:
      minmax(4.36rem, max-content) minmax(4.564375000000001rem, max-content) minmax(1.7712500000000002rem, max-content) minmax(13.8975rem, max-content)
      minmax(1.6350000000000002rem, max-content) minmax(40.330000000000005rem, max-content) minmax(1.6350000000000002rem, max-content);
  }
  [id='d2742c8a-57a0-480c-b5d6-be3224d987ee'] {
    grid-area: 2/3/3/6;
    font-size: Max(Min(48rem, 12px), 6.613333333333334rem);
  }
  [id='7d31b56f-cf25-495f-b3ab-2840b4ac468b'] {
    grid-area: 4/2/5/7;
    font-size: Max(Min(18rem, 12px), 2.48rem);
  }
  [id='24035518-9030-4d94-90da-719e12a71359'] {
    grid-area: 6/4/7/5;
    aspect-ratio: 0.9121621621621622;
  }
  [id='557f714f-faf0-4447-b40e-497f3d2a40b9'] /deep/ > .component-wrapper {
    display: grid;
    grid-template-columns: 6.4rem 0 0 0 0 0 0 0 0 0 0 0 0 0 0 74.35775127768312rem 0 0 0 0 0 0 0 0 0 0 0 0 0 0 6.4rem;
    grid-template-rows:
      minmax(4.36rem, max-content) minmax(2.9975rem, max-content) minmax(4.36rem, max-content) minmax(1.49875rem, max-content) minmax(0.5109375rem, max-content)
      minmax(1.7712500000000002rem, max-content) minmax(1.0559375000000002rem, max-content) minmax(1.49875rem, max-content) minmax(
        0.40875000000000006rem,
        max-content
      )
      minmax(1.9075000000000002rem, max-content) minmax(1.3284375000000002rem, max-content) minmax(1.49875rem, max-content) minmax(
        0.40875000000000006rem,
        max-content
      )
      minmax(1.9075000000000002rem, max-content) minmax(1.3625rem, max-content) minmax(1.49875rem, max-content) minmax(0.40875000000000006rem, max-content) minmax(
        1.9075000000000002rem,
        max-content
      )
      minmax(4.3259375rem, max-content) minmax(1.49875rem, max-content) minmax(0.545rem, max-content) minmax(1.7712500000000002rem, max-content) minmax(
        1.0559375000000002rem,
        max-content
      )
      minmax(1.49875rem, max-content) minmax(0.40875000000000006rem, max-content) minmax(1.9075000000000002rem, max-content) minmax(1.3625rem, max-content) minmax(
        3.8150000000000004rem,
        max-content
      )
      minmax(4.5984375rem, max-content) minmax(3.2700000000000005rem, max-content) minmax(4.359999999999999rem, max-content);
  }
  [id='b7e81364-1020-4e80-8532-3d14d1d09e94'] {
    grid-area: 10/8/11/25;
    font-size: Max(Min(16rem, 12px), 2.7039182282793868rem);
  }
  [id='606e503b-7334-466c-8be8-680fe58f26d2'] {
    grid-area: 8/7/9/26;
    font-size: Max(Min(16rem, 12px), 2.7039182282793868rem);
  }
  [id='5e0c0285-2426-4099-90e4-6160e7b1c239'] {
    grid-area: 2/4/3/29;
    font-size: Max(Min(32rem, 12px), 5.4078364565587735rem);
  }
  [id='2a4cdccb-0d5c-4273-8706-9ee4a57994b8'] {
    grid-area: 12/9/13/24;
    font-size: Max(Min(16rem, 12px), 2.7039182282793868rem);
  }
  [id='fb23d698-e98b-43ee-864b-6c648a428bea'] {
    grid-area: 14/10/15/23;
    font-size: Max(Min(16rem, 12px), 2.7039182282793868rem);
  }
  [id='71abcefc-646c-4c8b-8236-f1f57acea357'] {
    grid-area: 16/11/17/22;
    font-size: Max(Min(16rem, 12px), 2.7039182282793868rem);
  }
  [id='f86bf4ac-6a77-4894-81e1-bed8476a6839'] {
    grid-area: 18/12/19/21;
    font-size: Max(Min(16rem, 12px), 2.7039182282793868rem);
  }
  [id='6bc9e156-cfb2-4d0b-9f88-b862a1e8ace3'] {
    grid-area: 24/15/25/18;
    font-size: Max(Min(16rem, 12px), 2.7039182282793868rem);
  }
  [id='71d9bf32-f625-46eb-86c5-c4adc2166b6b'] {
    grid-area: 26/16/27/17;
    font-size: Max(Min(16rem, 12px), 2.7039182282793868rem);
  }
  [id='108277c7-dbbb-40c6-9698-cf65bb4bed51'] {
    grid-area: 30/3/31/30;
    font-size: Max(Min(18rem, 12px), 3.0419080068143103rem);
  }
  [id='9bd84b9d-11ae-48a8-b8ac-355d6ebb3d6f'] {
    grid-area: 28/2/29/31;
  }
  [id='7496d503-b8b2-4e8e-9dfe-c5b42edee3e9'] {
    grid-area: 22/14/23/19;
    font-size: Max(Min(14rem, 12px), 2.3659284497444637rem);
  }
  [id='68366a6e-cb8c-46b8-b851-0a47344f002b'] {
    grid-area: 20/13/21/20;
  }
  [id='1ebbbab0-cf9e-43bf-8a1e-eae5e78dae9e'] {
    grid-area: 6/6/7/27;
    font-size: Max(Min(14rem, 12px), 2.3659284497444637rem);
  }
  [id='78c9954b-88b9-44a3-8616-f970e6b7dcca'] {
    grid-area: 4/5/5/28;
  }
  [id='78c9954b-88b9-44a3-8616-f970e6b7dcca'] /deep/ > .component-wrapper {
    display: grid;
    grid-template-columns: 0 67.9359454855196rem 2.7039182282793868rem 3.717887563884157rem 0;
    grid-template-rows: 0 0 minmax(1.49875rem, max-content) 0 0;
  }
  [id='816d5d53-12f2-4038-aaac-d908e8c7b301'] {
    grid-area: 2/2/4/3;
    font-size: Max(Min(20rem, 12px), 3.3798977853492334rem);
  }
  [id='eac6f5c7-1d34-496b-b3c4-170b66a7b81d'] {
    grid-area: 3/4/5/5;
    aspect-ratio: 1;
  }
  [id='68366a6e-cb8c-46b8-b851-0a47344f002b'] /deep/ > .component-wrapper {
    display: grid;
    grid-template-columns: 0 67.9359454855196rem 2.7039182282793868rem 3.717887563884157rem 0;
    grid-template-rows: 0 0 minmax(1.49875rem, max-content) 0 0;
  }
  [id='3534aaaf-1607-42b0-9c41-9fead4d6d9ee'] {
    grid-area: 2/2/4/3;
    font-size: Max(Min(20rem, 12px), 3.3798977853492334rem);
  }
  [id='d808acc3-3100-4840-b2a1-0abe59067c15'] {
    grid-area: 3/4/5/5;
    aspect-ratio: 1;
  }
  [id='9bd84b9d-11ae-48a8-b8ac-355d6ebb3d6f'] /deep/ > .component-wrapper {
    display: grid;
    grid-template-columns: 0 0 35.82691652470187rem 0 2.7039182282793868rem 0 35.784667802385016rem 0 0;
    grid-template-rows: 0 0 minmax(1.49875rem, max-content) 0 minmax(0.3746875rem, max-content) 0 minmax(1.8734375rem, max-content) 0 0;
  }
  [id='264b2522-8024-4c4b-9248-484f87cf4c67'] {
    grid-area: 2/3/4/4;
    font-size: Max(Min(16rem, 12px), 2.7039182282793868rem);
  }
  [id='f0f80b98-2479-400f-93a2-a2a7ef6cc817'] {
    grid-area: 7/2/9/5;
    font-size: Max(Min(16rem, 12px), 2.7039182282793868rem);
  }
  [id='6430c4ac-8cca-4b19-97d8-979453f3104a'] {
    grid-area: 3/7/5/8;
    font-size: Max(Min(16rem, 12px), 2.7039182282793868rem);
  }
  [id='c79e261d-f6ac-4354-b05c-53e9003e6739'] {
    grid-area: 6/6/8/9;
    font-size: Max(Min(16rem, 12px), 2.7039182282793868rem);
  }
}
.progress-overlay {
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(234, 234, 234, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.progress-bar {
  width: 50%;
  height: 6px;
  background: repeating-linear-gradient(to right, #000, #000 10%, #ddd, #000 90%);
  background-size: 200% 100%;
  animation: progress-animation 1.5s ease-in-out infinite;
}

@keyframes progress-animation {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}
</style>
