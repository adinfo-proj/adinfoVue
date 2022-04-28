<!--  랜딩페이지 제작 -->
<template>
  <div class="container">
    <div class="menu0804">
      <div class="landPrev" :style="{height:minHigh}">
        <div v-if="$store.state.lendchooseObj.length == '0'" class="noLength" >
          <img src="../../assets/images/menu08302/NolendData.png" alt="">
        </div>

        <!-- 랜딩페이지 미리보기  -->
        <div v-for="(lendchoose, index) in $store.state.lendchooseObj" :key="index">

          <!-- 이미지 -->
          <div v-if="$store.state.lendchooseObj[index].tp == '01'">
            <p v-if="$store.state.lendchooseObj[index].fileNm == null || $store.state.lendchooseObj[index].fileNm == ''" style="text-align:  center; padding: 20px; background-color: #fff">
              이미지를 선택해주세요.
            </p>

            <img v-else :src="$store.state.lendchooseObj[index].fileNm" alt="">
          </div>
          <!-- 텍스트 -->
          <div v-if="lendchoose.tp == '02'" v-html="$store.state.lendchooseObj[index].descript">
          </div>
          <!-- 폼 -->
          <div 
            v-if="lendchoose.tp == '03'" 
            v-bind="$store.state.lendchooseObj[index].formDesc">
            <div class="formPrev formPrev01" v-if="lendchoose.formDesc.formStyle == '01'" :style="{borderColor:lendchoose.formDesc.lineColor, borderWidth:lendchoose.formDesc.borderLine, backgroundColor:lendchoose.formDesc.bgColor} ">
              <h1 v-if="lendchoose.formDesc.formTitle.length > 0" :style="{color:lendchoose.formDesc.titleColor, fontFamily:lendchoose.formDesc.fontType} ">
                {{lendchoose.formDesc.formTitle}}
              </h1>
              <div v-for="(inObj, indexForm) in $store.state.lendchooseObj[index].formDesc.inputBox" :key="indexForm">
                <!-- 텍스트 박스 -->
                <div v-if="inObj.values == 'textForm'" class="formInput">
                  <input type="text" :placeholder="inObj.names">
                </div>
                <!-- 연락처 박스 -->
                <div  v-if="inObj.values == 'telForm'" class='formInput telBox'>
                  <select>
                    <option value='0' selected disabled>{{inObj.names}}</option>
                    <option value='010'>010</option>
                    <option value='011'>011</option>
                    <option value='016'>016</option>
                    <option value='017'>017</option>
                    <option value='018'>018</option>
                    <option value='019'>019</option>
                  </select>
                  <span>
                    -
                    <input type='hidden' value='-'>
                  </span>
                  <input type="tel" maxlength="4">
                  <span>
                    -
                    <input type='hidden' value='-'>
                  </span>
                  <input type="tel" maxlength="4">
                </div>
                <!-- 라디오 버튼 -->
                <div v-if="inObj.values == 'radioForm'" class="formInput">
                  <h2 class="formInputName" :style="{color:lendchoose.formDesc.textA}">{{inObj.names}}</h2>
                  <span v-for="indexRadio in inObj.lab" :key="indexRadio">
                    <input :id="index+'_'+indexRadio" :name="index+'_'+inObj.names" type="radio" >
                    <label :for="index+'_'+indexRadio" :style="{color:lendchoose.formDesc.textB}">{{indexRadio}}</label>
                  </span>
                </div>
                <!-- 체크박스 -->
                <div v-if="inObj.values == 'checkForm'" class="formInput">
                  <h2 class="formInputName" :style="{color:lendchoose.formDesc.textA}">{{inObj.names}}</h2>
                  <span v-for="indexCheck in inObj.lab" :key="indexCheck">
                    <input :id="index+'_'+indexCheck" type="checkbox" >
                    <label :for="index+'_'+indexCheck" :style="{color:lendchoose.formDesc.textB}">{{indexCheck}}</label>
                  </span>
                </div>
                <!-- 셀렉트박스 -->
                <div v-if="inObj.values == 'selForm'" class="formInput">
                  <select>
                    <option value="0" selected disabled>{{inObj.names}}</option>
                    <option v-for="indexSelect in inObj.lab" :key="indexSelect" :value="index+'_'+indexSelect">
                      {{indexSelect}}
                    </option>
                  </select>  
                </div>
                <!-- 메모장 -->
                <div v-if="inObj.values == 'textArea'" class="textArea">
                  <h2 class="formInputName" :style="{color:lendchoose.formDesc.textA}">{{inObj.names}}</h2>
                  <textarea></textarea> 
                </div>
              </div>
              <div class="agreeBox">
                <input type="checkbox" name="agree01" id="agree01">
                <label for="agree01" :style="{color:lendchoose.formDesc.agreeColor}">{{formView.stipulationTitle}}</label>
                <span :style="{color:lendchoose.formDesc.agreeColor}" @click="PriModal()">[보러가기]</span>
              </div>
              <div class="centerBox">
                <button v-bind:style="{borderRadius:lendchoose.formDesc.btnShape, background:lendchoose.formDesc.btnColor, color:lendchoose.formDesc.textColor, fontFamily:lendchoose.formDesc.fontType}">{{lendchoose.formDesc.btnNm}}</button>
              </div>
              <!-- 개인정보 동의 모달 팝업 내용 -->
              <div class="priBox">
                <h6>개인정보 취급방침</h6>
                <div v-html="formView.stipulationDesc"></div>
                <button @click="PriCancle()">확인</button>
              </div>
            </div>

            <div class="formPrev formPrev02" v-if="lendchoose.formDesc.formStyle == '02'" :style="{borderColor:lendchoose.formDesc.lineColor, borderWidth:lendchoose.formDesc.borderLine, backgroundColor:lendchoose.formDesc.bgColor} ">
              <h1 v-if="lendchoose.formDesc.formTitle.length > 0" :style="{color:lendchoose.formDesc.titleColor, fontFamily:lendchoose.formDesc.fontType} ">
                {{lendchoose.formDesc.formTitle}}
              </h1>

              <div v-for="(inObj, indexForm) in $store.state.lendchooseObj[index].formDesc.inputBox" :key="indexForm">
                <!-- 텍스트 박스 -->
                <div v-if="inObj.values == 'textForm'"  class="flex">
                  <div class="left" :style="{color:lendchoose.formDesc.textA}">
                    {{inObj.names}}
                  </div>
                  <div class="right">
                    <input type='text'   name='value2' :placeholder="inObj.lab">
                  </div>
                </div>
                <!--연락처 박스 -->
                <div v-if="inObj.values == 'telForm'"  class="flex">
                  <div class="left" :style="{color:lendchoose.formDesc.textA}">
                    {{inObj.names}}
                  </div>
                  <div class="right telBox">
                    <select name='value1_1'>
                      <option value='010'>010</option>
                      <option value='011'>011</option>
                      <option value='016'>016</option>
                      <option value='017'>017</option>
                      <option value='018'>018</option>
                      <option value='019'>019</option>
                    </select>
                    <span>
                      -
                      <input type='hidden' value='-'>
                    </span>
                    <input type="tel" maxlength="4">
                    <span>
                      -
                      <input type='hidden' value='-'>
                    </span>
                    <input type="tel" maxlength="4">
                  </div>
                </div>
                <!-- 라디오 버튼 -->
                <div v-if="inObj.values == 'radioForm'"  class="flex">
                  <div class="left" :style="{color:lendchoose.formDesc.textA}">
                    {{inObj.names}}
                  </div>
                  <div class="right">
                    <span v-for="indexRadio in inObj.lab" :key="indexRadio">
                      <input :id="index+'_'+indexRadio" :name="index+'_'+inObj.names" type="radio" >
                      <label :for="index+'_'+indexRadio" :style="{color:lendchoose.formDesc.textB}">{{indexRadio}}</label>
                    </span>
                  </div>
                </div>
                <!-- 체크박스 -->
                <div v-if="inObj.values == 'checkForm'"  class="flex">
                  <div class="left" :style="{color:lendchoose.formDesc.textA}">
                    {{inObj.names}}
                  </div>
                  <div class="right">
                    <span v-for="indexCheck in inObj.lab" :key="indexCheck">
                      <input :id="index+'_'+indexCheck" type="checkbox" >
                      <label :for="index+'_'+indexCheck" :style="{color:lendchoose.formDesc.textB}">{{indexCheck}}</label>
                    </span>
                  </div>
                </div>
                <!-- 셀렉트박스 -->
                <div v-if="inObj.values == 'selForm'"  class="flex">
                  <div class="left" :style="{color:lendchoose.formDesc.textA}">
                    {{inObj.names}}
                  </div>
                  <div class="right">
                    <select>
                      <option v-for="indexSelect in inObj.lab" :key="indexSelect" :value="index+'_'+indexSelect">
                        {{indexSelect}}
                      </option>
                    </select> 
                  </div>
                </div>
                <!-- 메모장 -->
                <div v-if="inObj.values == 'textArea'"  class="flex">
                  <div class="left" :style="{color:lendchoose.formDesc.textA}">
                    {{inObj.names}}
                  </div>
                  <div class="right">
                    <textarea :placeholder="inObj.lab"></textarea> 
                  </div>
                </div>
              </div>
              <div class="agreeBox">
                <input type="checkbox" name="agree01" id="agree01">
                <label for="agree01" :style="{color:lendchoose.formDesc.agreeColor}">{{formView.stipulationTitle}}</label>
                <span :style="{color:lendchoose.formDesc.agreeColor}" @click="PriModal()">[보러가기]</span>
              </div>
              <div class="centerBox">
                <button v-bind:style="{borderRadius:lendchoose.formDesc.btnShape, background:lendchoose.formDesc.btnColor, color:lendchoose.formDesc.textColor, fontFamily:lendchoose.formDesc.fontType}">{{lendchoose.formDesc.btnNm}}</button>
              </div>
              <!-- 개인정보 동의 모달 팝업 내용 -->
              <div class="priBox">
                <h6>개인정보 취급방침</h6>
                <div v-html="formView.stipulationDesc"></div>
                <button @click="PriCancle()">확인</button>
              </div>
            </div>

            <div class="formPrev formPrev03" v-if="lendchoose.formDesc.formStyle == '03'" :style="{borderColor:lendchoose.formDesc.lineColor, borderWidth:lendchoose.formDesc.borderLine, backgroundColor:lendchoose.formDesc.bgColor} ">
              <h1 v-if="lendchoose.formDesc.formTitle.length > 0" :style="{color:lendchoose.formDesc.titleColor, fontFamily:lendchoose.formDesc.fontType} ">
                {{lendchoose.formDesc.formTitle}}
              </h1>

              <div v-for="(inObj, indexForm) in $store.state.lendchooseObj[index].formDesc.inputBox" :key="indexForm">
                <!-- 텍스트 박스 -->
                <div v-if="inObj.values == 'textForm'"  class="flex after">
                  <div class="left" :style="{color:lendchoose.formDesc.textA}">
                    {{inObj.names}}
                  </div>
                  <div class="right">
                    <input type='text'   name='value2'  :placeholder="inObj.lab">
                  </div>
                </div>
                <!-- 연락처 박스 -->
                <div v-if="inObj.values == 'telForm'"  class="flex after">
                  <div class="left" :style="{color:lendchoose.formDesc.textA}">
                    {{inObj.names}}
                  </div>
                  <div class="right telBox">
                    <select>
                      <option value='010'>010</option>
                      <option value='011'>011</option>
                      <option value='016'>016</option>
                      <option value='017'>017</option>
                      <option value='018'>018</option>
                      <option value='019'>019</option>
                    </select>
                    <span>
                      -
                      <input type='hidden' value='-'>
                    </span>
                    <input type="tel" maxlength="4">
                    <span>
                      -
                      <input type='hidden' value='-'>
                    </span>
                    <input type="tel" maxlength="4">  
                  </div>
                </div>
                <!-- 라디오 버튼 -->
                <div v-if="inObj.values == 'radioForm'"  class="flex">
                  <div class="left" :style="{color:lendchoose.formDesc.textA}">
                    {{inObj.names}}
                  </div>
                  <div class="right">
                    <span v-for="indexRadio in inObj.lab" :key="indexRadio">
                      <input :id="index+'_'+indexRadio" :name="index+'_'+inObj.names" type="radio" >
                      <label :for="index+'_'+indexRadio" :style="{color:lendchoose.formDesc.textB}">{{indexRadio}}</label>
                    </span>
                  </div>
                </div>
                <!-- 체크박스 -->
                <div v-if="inObj.values == 'checkForm'"  class="flex">
                  <div class="left" :style="{color:lendchoose.formDesc.textA}">
                    {{inObj.names}}
                  </div>
                  <div class="right">
                    <span v-for="indexCheck in inObj.lab" :key="indexCheck">
                      <input :id="index+'_'+indexCheck" type="checkbox" >
                      <label :for="index+'_'+indexCheck" :style="{color:lendchoose.formDesc.textB}">{{indexCheck}}</label>
                    </span>
                  </div>
                </div>
                <!-- 셀렉트박스 -->
                <div v-if="inObj.values == 'selForm'"  class="flex after">
                  <div class="left" :style="{color:lendchoose.formDesc.textA}">
                    {{inObj.names}}
                  </div>
                  <div class="right">
                    <select>
                      <option v-for="indexSelect in inObj.lab" :key="indexSelect" :value="index+'_'+indexSelect">
                        {{indexSelect}}
                      </option>
                    </select> 
                  </div>
                </div>
                <!-- 메모장 -->
                <div v-if="inObj.values == 'textArea'"  class="flex after textArea">
                  <div class="left" :style="{color:lendchoose.formDesc.textA}">
                    {{inObj.names}}
                  </div>
                  <div class="right">
                    <textarea  :placeholder="inObj.lab"></textarea> 
                  </div>
                </div>
              </div>
              <div class="agreeBox">
                <input type="checkbox" name="agree01" id="agree01">
                <label for="agree01" :style="{color:lendchoose.formDesc.agreeColor}">{{formView.stipulationTitle}}</label>
                <span :style="{color:lendchoose.formDesc.agreeColor}" @click="PriModal()">[보러가기]</span>
              </div>
              <div class="centerBox">
                <button v-bind:style="{borderRadius:lendchoose.formDesc.btnShape, background:lendchoose.formDesc.btnColor, color:lendchoose.formDesc.textColor, fontFamily:lendchoose.formDesc.fontType}">{{lendchoose.formDesc.btnNm}}</button>
              </div>
              <!-- 개인정보 동의 모달 팝업 내용 -->
              <div class="priBox">
                <h6>개인정보 취급방침</h6>
                <div v-html="formView.stipulationDesc"></div>
                <button @click="PriCancle()">확인</button>
              </div>
            </div>
            
            <div class="formPrev formPrev04" v-if="lendchoose.formDesc.formStyle == '04'" :style="{borderColor:lendchoose.formDesc.lineColor, borderWidth:lendchoose.formDesc.borderLine, backgroundColor:lendchoose.formDesc.bgColor} ">
              <h1 v-if="lendchoose.formDesc.formTitle.length > 0" :style="{color:lendchoose.formDesc.titleColor, fontFamily:lendchoose.formDesc.fontType} ">
                {{lendchoose.formDesc.formTitle}}
              </h1>

              <div v-for="(inObj, indexForm) in $store.state.lendchooseObj[index].formDesc.inputBox" :key="indexForm">
                <!-- 텍스트 박스 -->
                <div v-if="inObj.values == 'textForm'" class="formInput">
                  <h2 class="formInputName" :style="{color:lendchoose.formDesc.textA}">{{inObj.names}}</h2>
                  <input type="text"  :placeholder="inObj.lab">
                </div>
                <!-- 연락처 박스 -->
                <div v-if="inObj.values == 'telForm'" class="formInput">
                  <h2 class="formInputName" :style="{color:lendchoose.formDesc.textA}">{{inObj.names}}</h2>
                  <div class="inputBox telBox">
                    <select>
                      <option value='010'>010</option>
                      <option value='011'>011</option>
                      <option value='016'>016</option>
                      <option value='017'>017</option>
                      <option value='018'>018</option>
                      <option value='019'>019</option>
                    </select>
                    <span>
                      -
                      <input type='hidden' value='-'>
                    </span>
                    <input type="tel" maxlength="4">
                    <span>
                      -
                      <input type='hidden' value='-'>
                    </span>
                    <input type="tel" maxlength="4">
                  </div>
                </div>
                <!-- 라디오 버튼 -->
                <div v-if="inObj.values == 'radioForm'" class="formInput">
                  <h2 class="formInputName" :style="{color:lendchoose.formDesc.textA}">{{inObj.names}}</h2>
                  <span v-for="indexRadio in inObj.lab" :key="indexRadio">
                    <input :id="index+'_'+indexRadio" :name="index+'_'+inObj.names" type="radio" >
                    <label :for="index+'_'+indexRadio" :style="{color:lendchoose.formDesc.textB}">{{indexRadio}}</label>
                  </span>
                </div>
                <!-- 체크박스 -->
                <div v-if="inObj.values == 'checkForm'" class="formInput">
                  <h2 class="formInputName" :style="{color:lendchoose.formDesc.textA}">{{inObj.names}}</h2>
                  <span v-for="indexCheck in inObj.lab" :key="indexCheck">
                    <input :id="index+'_'+indexCheck" type="checkbox" >
                    <label :for="index+'_'+indexCheck" :style="{color:lendchoose.formDesc.textB}">{{indexCheck}}</label>
                  </span>
                </div>
                <!-- 셀렉트박스 -->
                <div v-if="inObj.values == 'selForm'" class="formInput">
                  <h2 class="formInputName" :style="{color:lendchoose.formDesc.textA}">{{inObj.names}}</h2>
                  <select>
                    <option v-for="indexSelect in inObj.lab" :key="indexSelect" :value="index+'_'+indexSelect">
                      {{indexSelect}}
                    </option>
                  </select>  
                </div>
                <!-- 메모장 -->
                <div v-if="inObj.values == 'textArea'" class="textArea">
                  <h2 class="formInputName" :style="{color:lendchoose.formDesc.textA}">{{inObj.names}}</h2>
                  <textarea :placeholder="inObj.lab"></textarea> 
                </div>
              </div>
              <div class="agreeBox">
                <input type="checkbox" name="agree01" id="agree01">
                <label for="agree01" :style="{color:lendchoose.formDesc.agreeColor}">{{formView.stipulationTitle}}</label>
                <span :style="{color:lendchoose.formDesc.agreeColor}" @click="PriModal()">[보러가기]</span>
              </div>
              <div class="centerBox">
                <button v-bind:style="{borderRadius:lendchoose.formDesc.btnShape, background:lendchoose.formDesc.btnColor, color:lendchoose.formDesc.textColor, fontFamily:lendchoose.formDesc.fontType}">{{lendchoose.formDesc.btnNm}}</button>
              </div>
              <!-- 개인정보 동의 모달 팝업 내용 -->
              <div class="priBox">
                <h6>개인정보 취급방침</h6>
                <div v-html="formView.stipulationDesc"></div>
                <button @click="PriCancle()">확인</button>
              </div>
            </div>
            <!-- <div v-for="(inObj, index) in $store.state.inputObj" :key="index"> -->
          </div>

          <!-- 동영상 -->
          <div v-if="lendchoose.tp == '04'">
              <iframe :src="lendchoose.descript" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

        </div>
        <div class="bgColor">
        </div>

      </div>
      <div class="landChoice" :style="{height:minHigh}">
        <div class="landTab" @click="LandView()">
          제작툴 사용방법 확인하기
          <i class="icon-error_outline"></i>
          <i class="icon-plus1"></i>
          <!-- <img src="../../assets/images/manual/landManualTab.png" alt=""> -->
        </div>
        <div class="basicInfo landBox">
          <h2>랜딩페이지 기본정보</h2>
          <table>
            <tr>
              <th>
                캠페인 명
              </th>
              <td>
                <select class="campDis" id="campDis" v-model="campaignSelect" @change="getCampaignSelect(campaignSelect);">
                  <option value="0" disabled>캠페인을 선택하세요</option>
                  <option v-for="(adIndex, index) in campaignListObj"
                    :key="index" 
                    :value="adIndex.caId"
                    >{{ adIndex.name }}
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              <th>
                랜딩페이지 대체
              </th>
              <td>
                <input type="checkbox" id="landrep" v-model="landReplace" @change="Replace()">
                <label for="landrep"></label>
              </td>
            </tr>
            <tr>
              <th>
                페이지 명
              </th>
              <td v-if="landReplace == false">
                <input type="text" class="" v-model="landName">
              </td>
              <td v-if="landReplace == true">
                <select v-model="landPgId">
                  <option value="0" disabled>선택</option>
                  <option v-for="(landingData, index) in landingDataObj"
                    :key="index" 
                    :value="landingData.pgId"
                    >{{ landingData.name }}
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              <th>
                타이틀 명
              </th>
              <td>
                <input type="text" class="" v-model="titleName">
              </td>
            </tr>
            <!-- <tr>
              <th>
                메모
              </th>
              <td>
                <textarea v-model="memo" ></textarea>
              </td>
            </tr> -->
          </table>
        </div>
        <div class="landScr landScr01 landBox">
          <p>
            헤더 스크립트 삽입
            <input type="checkbox" id="landScrBtn01" v-model="scriptHeader" @change="ScriptOn(1)"
            :checked="scriptHeader">
            <label for="landScrBtn01"></label>
            <i class="icon-arrow on" @click="ScriptUp(1)"></i>
          </p>
          <div class="landScrChecked">
            <textarea v-model="addScr"></textarea>
          </div>
        </div>
        <div class="landScr landScr02 landBox">
          <p>
            폼 스크립트 삽입
            <input type="checkbox" id="landScrBtn02" v-model="scriptForm" @change="ScriptOn(2)"
            :checked="scriptForm">
            <label for="landScrBtn02"></label>
            <i class="icon-arrow on" @click="ScriptUp(2)"></i>
          </p>
          <div class="landScrChecked">
            <textarea v-model="innerAddScr"></textarea>
          </div>
        </div>
        <div class="landScr landScr03 landBox">
          <p>
            픽셀 등록
            <span>
              (각 사이트에서 제공하는 ID를 입력해주세요.)
            </span>
            <i class="icon-arrow on" @click="ScriptUp(3)"></i>
          </p>
          <div class="landScrChecked">
            <div class="pixelBox">
              <div class="left">
                <img src="../../assets/images/menu08302/googleIcon01.png" alt="googleIcon01">
                구글 애드워즈 이벤트
              </div>
              <div class="right">
                <input type="text" v-model="pixel01" placeholder="구글 애드워즈 이벤트 ID를 입력하세요">
              </div>
            </div>
            <div class="pixelBox">
              <div class="left">
                <img src="../../assets/images/menu08302/googleIcon02.png" alt="googleIcon02">
                구글 애널리틱스 추적
              </div>
              <div class="right">
                <input type="text" v-model="pixel02" placeholder="구글 애널리틱스 추적 ID를 입력하세요">
              </div>
            </div>
            <div class="pixelBox">
              <div class="left">
                <img src="../../assets/images/menu08302/fbIcon.png" alt="fbIcon">
                페이스북 픽셀
              </div>
              <div class="right">
                <input type="text" v-model="pixel03" placeholder="페이스북 픽셀 ID를 입력하세요">
              </div>
            </div>
            <div class="pixelBox">
              <div class="left">
                <img src="../../assets/images/menu08302/tiktokIcon.png" alt="tiktokIcon">
                틱톡 픽셀
              </div>
              <div class="right">
                <input type="text" v-model="pixel04" placeholder="틱톡 픽셀 ID를 입력하세요">
              </div>
            </div>
            <div class="pixelBox">
              <div class="left">
                <img src="../../assets/images/menu08302/kakaoIcon.png" alt="kakaoIcon">
                카카오 픽셀
              </div>
              <div class="right">
                <input type="text" v-model="pixel05" placeholder="카카오 픽셀 ID를 입력하세요">
              </div>
            </div>
            <div class="pixelBox">
              <div class="left">
                <img src="../../assets/images/menu08302/naverIcon.png" alt="naverIcon">
                네이버 광고 로그 분석
              </div>
              <div class="right">
                <input type="text" v-model="pixel06" placeholder="네이버 광고 로그 공통키를 입력하세요">
              </div>
            </div>
          </div>
        </div>
        


        <!------------------------------------------------------------------------------------------------------
        이곳부터 for 루프안에서 이미지/텍스트/폼의 경우를 위해 콤포넌트를 처리한다.
        ------------------------------------------------------------------------------------------------------->
        <div v-for="(lendchoose, index) in $store.state.lendchooseObj" :key="index">
          <!-- 이미지 -->
          <div v-if="lendchoose.tp == '01'">
            <ChooseLandImg :indexNum="index"></ChooseLandImg>
          </div>
          <!-- 텍스트 -->
          <div v-if="lendchoose.tp == '02'">
            <ChooseLandText :indexNum="index"></ChooseLandText>
          </div>
          <!-- 폼 -->
          <div v-if="lendchoose.tp == '03'">
            <ChooseLandForm :indexNum="index"></ChooseLandForm>
          </div>
          <div v-if="lendchoose.tp == '04'">
            <ChooseLandVideo :indexNum="index"></ChooseLandVideo>
          </div>
        </div>
        <div class="btnBox">
          <div class="left">
            <button class="firstBtn"  @click="ImgChooseBtn()" >이미지 추가</button>
            <!-- <button class="textBtn" @click="TextChooseBtn()">텍스트 추가</button> -->
            <button class="firstBtn" @click="FormChooseBtn()">폼 추가</button>
            <button class="firstBtn" @click="VideoChooseBtn()">유투브 추가</button>
            <button class="iniBtn" @click="InitForm()">초기화</button>
          </div>
          <div class="right">
            <button class="saveBtn" @click="PreviewSend()">랜딩 생성하기</button>
          </div>
        </div>
        <div class="subBox">
        </div>
      </div>
    </div>

    <SetLandManual></SetLandManual>
  </div>
</template>

<script>
  import $              from 'jquery';
  import axios          from "axios";
  import ChooseLandImg  from '../../components/dialog/ChooseLandImg.vue';
  import ChooseLandText from '../../components/dialog/ChooseLandText.vue';
  import ChooseLandForm from '../../components/dialog/ChooseLandForm.vue';
  import ChooseLandVideo from '../../components/dialog/ChooseLandVideo.vue';
  import SetLandManual from '../../components/dialog/SetLandManual.vue';
  export default {
    components: {
        ChooseLandImg
      , ChooseLandText
      , ChooseLandForm
      , ChooseLandVideo
      , SetLandManual
    },
    data() {
      return {
          minHigh: ''
        , scriptHeader    : false
        , scriptForm      : false
        , scriptPixel     : false
        , campaignSelect  : '0'
        , campaignListObj : ''
        
        , addScr          : ''
        , innerAddScr     : ''

        , landName        : ''
        , landReplace     : false
        , titleName       : ''
        , memo            : ''
        , landPgId        : 0
        , landingDataObj  : ''
        , pixel01         : ''
        , pixel02         : ''
        , pixel03         : ''
        , pixel04         : ''
        , pixel05         : ''
        , pixel06         : ''
        , formIndex : ''
        , campData: {
            gradeCd           : ''
          , mbId              : ''
          , mkId              : ''
          , adId              : ''
          , clntId            : ''
          , adPurpose         : ''
          , adTopKind         : ''
          , adMiddleKind      : ''
          , adSrtDt           : ''
          , adSrtTm           : ''
          , adName            : ''
          , adComment         : ''
          , adPrice           : ''
          , adMaketerPrice    : ''
          , smsYn             : ''
          , smsNo             : ''
          , status            : ''
          , stipulationTitle  : ''
          , stipulationDesc   : ''
        }
        , formView: {
            no   : ''
          , names: ''
          , types: ''
          , desc : ''
          , useYn: ''
        }
      }
    },
    methods: {
      //******************************************************************************
      // 랜딩페이지 초기화
      //******************************************************************************
      InitForm() {
        for(let i = 0 ; i < 10 ; i++) {
          this.$store.state.lendchooseObj.splice(0, 1);
        }
      },
      //******************************************************************************
      // 사용방법 팝업
      //******************************************************************************
      LandView(){
        $('#landBg').css({display: 'block'})
      }, 
      //******************************************************************************
      // Open Event
      //******************************************************************************
      getCampaignSelect(index) { // 캠페인 분류(대분류)
        axios.get("http://api.adinfo.co.kr:30000/GetCampInfo",
        {
          params: {
              mbId   : this.$store.state.mbId
						, adId   : this.$store.state.adId
            , mkId   : this.$store.state.mkId
            , caId   : this.campaignSelect
            //, caId   : index
          }
        })
        .then(response => {
          if(response.data[0].status == true) {
            this.campData = response.data[1];
            this.formView = response.data[2];

            for(let i = 0 ; i < 10; i++) {
              var arrS = [];

              
              switch(i) {
                case 0 : if(this.formView.type01 == '02' || 
                            this.formView.type01 == '03' || 
                            this.formView.type01 == '04')
                            {
                              arrS =  this.formView.page01.split(",")
                              this.formView.page01 = arrS
                            }
                         break;
                case 1 : if(this.formView.type02 == '02' || 
                            this.formView.type02 == '03' || 
                            this.formView.type02 == '04')
                            {
                              arrS =  this.formView.page02.split(",")
                              this.formView.page02 = arrS
                            }
                         break;
                case 2 : if(this.formView.type03 == '02' || 
                            this.formView.type03 == '03' || 
                            this.formView.type03 == '04')
                            {
                              arrS =  this.formView.page03.split(",")
                              this.formView.page03 = arrS
                            }
                         break;
                case 3 : if(this.formView.type04 == '02' || 
                            this.formView.type04 == '03' || 
                            this.formView.type04 == '04')
                            {
                              arrS =  this.formView.page04.split(",")
                              this.formView.page04 = arrS
                            }
                         break;
                case 4 : if(this.formView.type05 == '02' || 
                            this.formView.type05 == '03' || 
                            this.formView.type05 == '04')
                            {
                              arrS =  this.formView.page05.split(",")
                              this.formView.page05 = arrS
                            }
                         break;
                case 5 : if(this.formView.type06 == '02' || 
                            this.formView.type06 == '03' || 
                            this.formView.type06 == '04')
                            {
                              arrS =  this.formView.page06.split(",")
                              this.formView.page06 = arrS
                            }
                         break;
                case 6 : if(this.formView.type07 == '02' || 
                            this.formView.type07 == '03' || 
                            this.formView.type07 == '04')
                            {
                              arrS =  this.formView.page07.split(",")
                              this.formView.page07 = arrS
                            }
                         break;
                case 7 : if(this.formView.type08 == '02' || 
                            this.formView.type08 == '03' || 
                            this.formView.type08 == '04')
                            {
                              arrS =  this.formView.page08.split(",")
                              this.formView.page08 = arrS
                            }
                         break;
                case 8 : if(this.formView.type09 == '02' || 
                            this.formView.type09 == '03' || 
                            this.formView.type09 == '04')
                            {
                              arrS =  this.formView.page09.split(",")
                              this.formView.page09 = arrS
                            }
                         break;
                case 9 : if(this.formView.type10 == '02' || 
                            this.formView.type10 == '03' || 
                            this.formView.type10 == '04')
                            {
                              arrS =  this.formView.page10.split(",")
                              this.formView.page10 = arrS
                            }
                         break;
              }
            }
          }
          this.campaignSelect =index;
          this.ReplacePage();
        })
        .catch(error => {
          console.log(error);
        })
      },
      //******************************************************************************
      // 미리보기를 서버에 전달한다.
      //******************************************************************************
      PreviewSend() {
        if(this.landName == "" || this.landName == null) {
          alert("페이지명을 입력해주세요.");
          return;
        }
        //------------------------------------------------------------------------------
        // 입력 유형을 Array로 구성한다.
        //------------------------------------------------------------------------------
        let formType = [];
        this.$store.state.lendchooseObj.forEach(element => {
          formType.push(element.tp);
        });
        //------------------------------------------------------------------------------
        // 텍스트 추가의 경우 입력된 태그를 Array로 구성한다.
        //------------------------------------------------------------------------------
        let textData = [];
        this.$store.state.lendchooseObj.forEach(element => {
          if( element.descript != "") {
            textData.push(element.descript);
          }
        });
        //------------------------------------------------------------------------------
        // 폼 추가 태그를 Array로 구성한다.
        //------------------------------------------------------------------------------
        let formData = [];
        this.$store.state.lendchooseObj.forEach(element => {
          if( element.tp == "03") {
            let forms = {
                btnShape  : element.formDesc.btnShape
              , btnColor  : element.formDesc.btnColor
              , btnNm     : element.formDesc.btnNm
              , inputBox  : element.formDesc.inputBox
              , priCon    : element.formDesc.priCon
              , priNm     : element.formDesc.priNm
              , lineColor : element.formDesc.lineColor
              , textColor : element.formDesc.textColor
              , borderLine: element.formDesc.borderLine
              , formStyle : element.formDesc.formStyle
              , formTitle : element.formDesc.formTitle
              , titleColor: element.formDesc.titleColor
              , fontType  : element.formDesc.fontType
              , bgColor   : element.formDesc.bgColor
              , agreeColor: element.formDesc.agreeColor
              , textA     : element.formDesc.textA
              , textB     : element.formDesc.textB
            };
            formData.push(forms);
          }
        });
        let scriptAdd = '';
        if(this.scriptInput == false) {
          scriptAdd = this.scriptComment;
        }
        let sAddScr = '';
        let sInnerAddScr = '';
        if( this.scriptHeader == true) {
          sAddScr = this.addScr;
        }
        if( this.scriptForm == true) {
          sInnerAddScr = this.innerAddScr;
        }
        let data = {
            mbId        : this.$store.state.mbId
          , adId        : this.$store.state.adId
          , caId        : this.campaignSelect
          , mkId        : this.$store.state.adId
          , pgId        : this.landPgId
          , clntId      : this.$store.state.clntId
          , scriptHeader : sAddScr
          , scriptForm   : sInnerAddScr
          , processMode : 'C'       // (C:신규, M:수정, R:삭제)
          , formCount   : this.$store.state.lendchooseObj.length
          , campanyNm   : this.company
          , landingNm   : this.landName
          , campaignId  : this.campaignSelect
          , landReplace : this.landReplace
          , formType    : formType
          , scriptAdd   : scriptAdd
          , textData    : textData
          , formData    : formData
          , stipulationTitle : this.formView.stipulationTitle
          , stipulationDesc  : this.formView.stipulationDesc
          , titleName   : this.titleName
          , memo        : this.memo
          , pixel01     : this.pixel01
          , pixel02     : this.pixel02
          , pixel03     : this.pixel03
          , pixel04     : this.pixel04
          , pixel05     : this.pixel05
          , pixel06     : this.pixel06
        };

        const frm = new FormData();
        for(let i = 0 ; i < this.$store.state.lendchooseObj.length ; i++) {
          if(this.$store.state.lendchooseObj[i].tp == '01') {
            if(this.$store.state.lendchooseObj[i].fileNm == null || this.$store.state.lendchooseObj[i].fileNm == '') {
              alert("이미지 등록 항목에 파일등록이 되어있지 않습니다.");
              return;
            }

            frm.append("upFile" , this.$store.state.lendchooseObj[i].fileNmOrg);
          }
          if(this.$store.state.lendchooseObj[i].tp == '03') {
            if(this.$store.state.lendchooseObj[i].formDesc.borderLine == 'undefinedpx') {
              alert("추가된 폼항목에서 '폼 적용하기'를 누르지 않으셨습니다.");
              return;
            }
          }
        }
        frm.append("dataObj", new Blob([JSON.stringify(data)] , {type: "application/json"}));
        axios.post("http://api.adinfo.co.kr:30000/newlandingpage", frm, {
          headers: {'Content-Type': 'multipart/form-data'}
        })
        .then(response => {
          alert(response.data.message);
          if( response.data.status == true) {
            window.open(response.data.landingUrl);
            this.InitForm();
            this.$router.push({ path : "MENU_08301" });
            this.$store.state.menuSelect = "3"
            this.$store.state.subMenuSelect = "301"
            sessionStorage.setItem("menuSelect"   ,    this.$store.state.menuSelect);
            sessionStorage.setItem("subMenuSelect", this.$store.state.subMenuSelect);

          }
        })
        .catch(error => {
          console.log(error);
        })
      },
      //******************************************************************************
      // 캠페인 분류(대분류)
      //******************************************************************************
      getCampaignAllList() { // 캠페인 분류(대분류)
        axios.get("http://api.adinfo.co.kr:30000/GetCampaignNameLst",
        {
          params: {
              mbId   : this.$store.state.mbId
						, adId   : this.$store.state.adId
          }
        })
        .then(response => {
          this.campaignListObj = response.data;
        })
        .catch(error => {
          console.log(error);
        })
      },
      //******************************************************************************
      // 캠페인 대체 여부 변경 시 
      //******************************************************************************
      Replace(){
        this.landName = '';
        
        if( this.landReplace == true){
          this.landName = '0';
        }
      },
      //******************************************************************************
      // 캠페인 대체 시 
      //******************************************************************************
      ReplacePage(){
        axios.get("http://api.adinfo.co.kr:30000/GetLandingListForMbAdCaCode",
        {
          params: {
              mbId: this.$store.state.mbId
            , adId: this.$store.state.mbId
            , mkId: this.$store.state.mbId
            , caId: this.campaignSelect
            , useTp: '00'
          }
        })
        .then(response => {
          this.landingDataObj = response.data;
        })
        .catch(error => {
          console.log(error);
        })
      },
      //******************************************************************************
      // 스크립트 추가 시 텍스트박스 보이는 함수
      //******************************************************************************
      ScriptOn(num) {
        if(num == 1){
          if(this.scriptHeader == true) {
            $(".landScr01 .landScrChecked").slideDown(300);
            $(".landScr01 .icon-arrow").removeClass("on");
          } else {
            $(".landScr01 .landScrChecked").slideUp(300);
            $(".landScr01 .icon-arrow").addClass("on");
          }
        }
        else if(num == 2){
          if(this.scriptForm == true) {
            $(".landScr02 .landScrChecked").slideDown(300);
            $(".landScr02 .icon-arrow").removeClass("on");
          } else {
            $(".landScr02 .landScrChecked").slideUp(300);
            $(".landScr02 .icon-arrow").addClass("on");
          }
        }
      },
      //******************************************************************************
      // 스크립트 접는 함수
      //******************************************************************************
      ScriptUp(num) {
        if(num == 1){
          if(this.scriptHeader == false) {
            return;
          }
          $(".landScr01 .landScrChecked").slideToggle(300);
          $(".landScr01 .icon-arrow").toggleClass("on");
        }
        else if(num == 2) {
          if(this.scriptForm == false) {
            return;
          }
          $(".landScr02 .landScrChecked").slideToggle(300);
          $(".landScr02 .icon-arrow").toggleClass("on");
        }
        else if(num == 3) {
          $(".landScr03 .landScrChecked").slideToggle(300);
          $(".landScr03 .icon-arrow").toggleClass("on");
        }
      },
      //******************************************************************************
      // 이미지 추가 함수
      //******************************************************************************
      ImgChooseBtn() {

        if(this.campData.caId == null || this.campData.caId == '') {
          alert("캠페인명을 선택해주세요.");
          return;
        }


        if(this.$store.state.lendchooseObj.length > 9) {
          alert("이미지, 텍스트, 폼은 10개 까지만 등록 가능합니다.")
          return;
        }
        
        let plusObj = {
            tp: ''
          , fileNm: ''
          , descript: ''
          , formDesc: ''
          , landImgNm: ''
        };
        plusObj.tp = '01';
        this.$store.state.lendchooseObj.push(plusObj);
      },
      //******************************************************************************
      // 텍스트 추가 함수
      //******************************************************************************
      TextChooseBtn() {
        if(this.campData.caId == null || this.campData.caId == '') {
          alert("캠페인명을 선택해주세요.");
          return;
        }

        if(this.$store.state.lendchooseObj.length > 9) {
          alert("이미지, 폼은 10개 까지만 등록 가능합니다.")
          return;
        }
        let plusObj = {
            tp: ''
          , fileNm: ''
          , descript: ''
          , formDesc: ''
          , landImgNm: ''
        };
        plusObj.tp = '02';
        this.$store.state.lendchooseObj.push(plusObj);
      },
      //******************************************************************************
      // 폼 추가 함수
      //******************************************************************************
      FormChooseBtn() {
        if(this.campData.caId == null || this.campData.caId == '') {
          alert("캠페인명을 선택해주세요.");
          return;
        }
  
        if(this.$store.state.lendchooseObj.length > 9) {
          alert("이미지, 텍스트, 폼은 10개 까지만 등록 가능합니다.")
          return;
        }        


        let inputBoxObj = [];
        for(let i = 0 ; i < 10; i++) {
          let inputBox = {
              value01 : ''
            , values  : ''
            , names   : ''
            , lab     : ''
          };
          switch(i) {
            case 0 : 
              if     (this.formView.type01 == '00') {
                continue;
              }
              else if(this.formView.type01 == '01') {
                inputBox.values  = 'textForm';
                inputBox.names   = this.formView.value01;
                inputBox.lab     = this.formView.page01;
              }
              else if(this.formView.type01 == '02') {
                inputBox.values  = 'radioForm';
                inputBox.names   = this.formView.value01;
                inputBox.lab     = this.formView.page01;
              }
              else if(this.formView.type01 == '03') {
                inputBox.values  = 'checkForm';
                inputBox.names   = this.formView.value01;
                inputBox.lab     = this.formView.page01;
              }
              else if(this.formView.type01 == '04') {
                inputBox.values  = 'selForm';
                inputBox.names   = this.formView.value01;
                inputBox.lab     = this.formView.page01;
              }
              else if(this.formView.type01 == '05') {
                inputBox.values  = 'textArea';
                inputBox.names   = this.formView.value01;
                inputBox.lab     = this.formView.page01;
              }
              else if(this.formView.type01 == '06') {
                inputBox.values  = 'telForm';
                inputBox.names   = this.formView.value01;
                inputBox.lab     = this.formView.page01;
              }
              break;
            case 1 : 
              if     (this.formView.type02 == '00') {
                continue;
              }
              else if(this.formView.type02 == '01') {
                inputBox.values  = 'textForm';
                inputBox.names   = this.formView.value02;
                inputBox.lab     = this.formView.page02;
              }
              else if(this.formView.type02 == '02') {
                inputBox.values  = 'radioForm';
                inputBox.names   = this.formView.value02;
                inputBox.lab     = this.formView.page02;
              }
              else if(this.formView.type02 == '04') {
                inputBox.values  = 'selForm';
                inputBox.names   = this.formView.value02;
                inputBox.lab     = this.formView.page02;
              }
              else if(this.formView.type02 == '05') {
                inputBox.values  = 'textArea';
                inputBox.names   = this.formView.value02;
                inputBox.lab     = this.formView.page02;
              }
              else if(this.formView.type02 == '06') {
                inputBox.values  = 'telForm';
                inputBox.names   = this.formView.value02;
                inputBox.lab     = this.formView.page02;
              }
              break;
            case 2 : 
              if     (this.formView.type03 == '00') {
                continue;
              }
              else if(this.formView.type03 == '01') {
                inputBox.values  = 'textForm';
                inputBox.names   = this.formView.value03;
                inputBox.lab     = this.formView.page03;
              }
              else if(this.formView.type03 == '02') {
                inputBox.values  = 'radioForm';
                inputBox.names   = this.formView.value03;
                inputBox.lab     = this.formView.page03;
              }
              else if(this.formView.type03 == '03') {
                inputBox.values  = 'checkForm';
                inputBox.names   = this.formView.value03;
                inputBox.lab     = this.formView.page03;
              }
              else if(this.formView.type03 == '04')  {
                inputBox.values  = 'selForm';
                inputBox.names   = this.formView.value03;
                inputBox.lab     = this.formView.page03;
              }
              else if(this.formView.type03 == '05')  {
                inputBox.values  = 'textArea';
                inputBox.names   = this.formView.value03;
                inputBox.lab     = this.formView.page03;
              }
              else if(this.formView.type03 == '06') {
                inputBox.values  = 'telForm';
                inputBox.names   = this.formView.value03;
                inputBox.lab     = this.formView.page03;
              }
              break;
            case 3 : 
              if     (this.formView.type04 == '00') {
                continue;
              }
              else if(this.formView.type04 == '01') {
                inputBox.values  = 'textForm';
                inputBox.names   = this.formView.value04;
                inputBox.lab     = this.formView.page04;
              }
              else if(this.formView.type04 == '02') {
                inputBox.values  = 'radioForm';
                inputBox.names   = this.formView.value04;
                inputBox.lab     = this.formView.page04;
              }
              else if(this.formView.type04 == '03') {
                inputBox.values  = 'checkForm';
                inputBox.names   = this.formView.value04;
                inputBox.lab     = this.formView.page04;
              }
              else if(this.formView.type04 == '04') {
                inputBox.values  = 'selForm';
                inputBox.names   = this.formView.value04;
                inputBox.lab     = this.formView.page04;
              }
              else if(this.formView.type04 == '05') {
                inputBox.values  = 'textArea';
                inputBox.names   = this.formView.value04;
                inputBox.lab     = this.formView.page04;
              }
              else if(this.formView.type04 == '06') {
                inputBox.values  = 'telForm';
                inputBox.names   = this.formView.value04;
                inputBox.lab     = this.formView.page04;
              }
              break;
            case 4 : 
              if     (this.formView.type05 == '00') {
                continue;
              }
              else if(this.formView.type05 == '01') {
                inputBox.values  = 'textForm';
                inputBox.names   = this.formView.value05;
                inputBox.lab     = this.formView.page05;
              }
              else if(this.formView.type05 == '02') {
                inputBox.values  = 'radioForm';
                inputBox.names   = this.formView.value05;
                inputBox.lab     = this.formView.page05;
              }
              else if(this.formView.type05 == '03') {
                inputBox.values  = 'checkForm';
                inputBox.names   = this.formView.value05;
                inputBox.lab     = this.formView.page05;
              }
              else if(this.formView.type05 == '04') {
                inputBox.values  = 'selForm';
                inputBox.names   = this.formView.value05;
                inputBox.lab     = this.formView.page05;
              }
              else if(this.formView.type05 == '05') {
                inputBox.values  = 'textArea';
                inputBox.names   = this.formView.value05;
                inputBox.lab     = this.formView.page05;
              }
              else if(this.formView.type05 == '06') {
                inputBox.values  = 'telForm';
                inputBox.names   = this.formView.value05;
                inputBox.lab     = this.formView.page05;
              }
              break;
            case 5 : 
              if     (this.formView.type06 == '00') {
                continue;
              }
              else if(this.formView.type06 == '01') {
                inputBox.values  = 'textForm';
                inputBox.names   = this.formView.value06;
                inputBox.lab     = this.formView.page06;
              }
              else if(this.formView.type06 == '02') {
                inputBox.values  = 'radioForm';
                inputBox.names   = this.formView.value06;
                inputBox.lab     = this.formView.page06;
              }
              else if(this.formView.type06 == '03') {
                inputBox.values  = 'checkForm';
                inputBox.names   = this.formView.value06;
                inputBox.lab     = this.formView.page06;
              }
              else if(this.formView.type06 == '04')  {
                inputBox.values  = 'selForm';
                inputBox.names   = this.formView.value06;
                inputBox.lab     = this.formView.page06;
              }
              else if(this.formView.type06 == '05')  {
                inputBox.values  = 'textArea';
                inputBox.names   = this.formView.value06;
                inputBox.lab     = this.formView.page06;
              }
              else if(this.formView.type06 == '06') {
                inputBox.values  = 'telForm';
                inputBox.names   = this.formView.value06;
                inputBox.lab     = this.formView.page06;
              }
              break;
            case 6 : 
              if     (this.formView.type07 == '00') {
                continue;
              }
              else if(this.formView.type07 == '01') {
                inputBox.values  = 'textForm';
                inputBox.names   = this.formView.value07;
                inputBox.lab     = this.formView.page07;
              }
              else if(this.formView.type07 == '02') {
                inputBox.values  = 'radioForm';
                inputBox.names   = this.formView.value07;
                inputBox.lab     = this.formView.page07;
              }
              else if(this.formView.type07 == '03') {
                inputBox.values  = 'checkForm';
                inputBox.names   = this.formView.value07;
                inputBox.lab     = this.formView.page07;
              }
              else if(this.formView.type07 == '04') {
                inputBox.values  = 'selForm';
                inputBox.names   = this.formView.value07;
                inputBox.lab     = this.formView.page07;
              }
              else if(this.formView.type07 == '05') {
                inputBox.values  = 'textArea';
                inputBox.names   = this.formView.value07;
                inputBox.lab     = this.formView.page07;
              }
              else if(this.formView.type07 == '06') {
                inputBox.values  = 'telForm';
                inputBox.names   = this.formView.value07;
                inputBox.lab     = this.formView.page07;
              }
              break;
            case 7 : 
              if     (this.formView.type08 == '00') {
                continue;
              }
              else if(this.formView.type08 == '01') {
                inputBox.values  = 'textForm';
                inputBox.names   = this.formView.value08;
                inputBox.lab     = this.formView.page08;
              }
              else if(this.formView.type08 == '02') {
                inputBox.values  = 'radioForm';
                inputBox.names   = this.formView.value08;
                inputBox.lab     = this.formView.page08;
              }
              else if(this.formView.type08 == '03') {
                inputBox.values  = 'checkForm';
                inputBox.names   = this.formView.value08;
                inputBox.lab     = this.formView.page08;
              }
              else if(this.formView.type08 == '04') {
                inputBox.values  = 'selForm';
                inputBox.names   = this.formView.value08;
                inputBox.lab     = this.formView.page08;
              }
              else if(this.formView.type08 == '05') {
                inputBox.values  = 'textArea';
                inputBox.names   = this.formView.value08;
                inputBox.lab     = this.formView.page08;
              }
              else if(this.formView.type08 == '06') {
                inputBox.values  = 'telForm';
                inputBox.names   = this.formView.value08;
                inputBox.lab     = this.formView.page08;
              }
              break;
            case 8 : 
              if     (this.formView.type09 == '00') {
                continue;
              }
              else if(this.formView.type09 == '01') {
                inputBox.values  = 'textForm';
                inputBox.names   = this.formView.value09;
                inputBox.lab     = this.formView.page09;
              }
              else if(this.formView.type09 == '02') {
                inputBox.values  = 'radioForm';
                inputBox.names   = this.formView.value09;
                inputBox.lab     = this.formView.page09;
              }
              else if(this.formView.type09 == '03') {
                inputBox.values  = 'checkForm';
                inputBox.names   = this.formView.value09;
                inputBox.lab     = this.formView.page09;
              }
              else if(this.formView.type09 == '04') {
                inputBox.values  = 'selForm';
                inputBox.names   = this.formView.value09;
                inputBox.lab     = this.formView.page09;
              }
              else if(this.formView.type09 == '05') {
                inputBox.values  = 'textArea';
                inputBox.names   = this.formView.value09;
                inputBox.lab     = this.formView.page09;
              }
              else if(this.formView.type09 == '06') {
                inputBox.values  = 'telForm';
                inputBox.names   = this.formView.value09;
                inputBox.lab     = this.formView.page09;
              }
              break;
            case 9 : 
              if     (this.formView.type10 == '00') {
                continue;
              }
              else if(this.formView.type10 == '01') {
                inputBox.values  = 'textForm';
                inputBox.names   = this.formView.value10;
                inputBox.lab     = this.formView.page10;
              }
              else if(this.formView.type10 == '02') {
                inputBox.values  = 'radioForm';
                inputBox.names   = this.formView.value10;
                inputBox.lab     = this.formView.page10;
              }
              else if(this.formView.type10 == '03') {
                inputBox.values  = 'checkForm';
                inputBox.names   = this.formView.value10;
                inputBox.lab     = this.formView.page10;
              }
              else if(this.formView.type10 == '04') {
                inputBox.values  = 'selForm';
                inputBox.names   = this.formView.value10;
                inputBox.lab     = this.formView.page10;
              }
              else if(this.formView.type10 == '05') {
                inputBox.values  = 'textArea';
                inputBox.names   = this.formView.value10;
                inputBox.lab     = this.formView.page10;
              }
              else if(this.formView.type10 == '06') {
                inputBox.values  = 'telForm';
                inputBox.names   = this.formView.value10;
                inputBox.lab     = this.formView.page10;
              }
              break;
          }
          inputBoxObj.push(inputBox);
        }
        let plusObj = {
            tp        : '03'
          , fileNm    : ''
          , descript  : ''
          , landImgNm : ''
          , formDesc: {
              inputBox  : inputBoxObj
            , priNm     : this.agreeTitle
            , priCon    : this.agreeCon
            , btnNm     : this.btnNm
            , btnShape  : this.btnShape
            , textColor : this.textColor
            , btnColor  : this.btnColor
            , borderLine: this.borderLine + 'px'
            , lineColor : this.lineColor
          }
        };
        this.$store.state.lendchooseObj.push(plusObj);
      },
      //******************************************************************************
      // 동영상 추가 함수
      //******************************************************************************
      VideoChooseBtn(){
        if(this.campData.caId == null || this.campData.caId == '') {
          alert("캠페인명을 선택해주세요.");
          return;
        }

        if(this.$store.state.lendchooseObj.length > 9) {
          alert("이미지, 폼은 10개 까지만 등록 가능합니다.")
          return;
        }
        let plusObj = {
            tp: ''
          , fileNm: ''
          , descript: ''
          , formDesc: ''
          , landImgNm: ''
        };
        plusObj.tp = '04';
        this.$store.state.lendchooseObj.push(plusObj);

      },
      //******************************************************************************
      // 폼 안에 개인정보 모달 박스 팝업
      //******************************************************************************
      PriModal() {
        $(".menu0804 .landPrev .formPrev .priBox").css({display:'block'})
        $(".menu0804 .landPrev .bgColor").css({display:'block'})
      },
      //******************************************************************************
      // 폼 안에 개인정보 모달 박스 닫기
      //******************************************************************************
      PriCancle() {
        $(".menu0804 .landPrev .formPrev .priBox").css({display:'none'})
        $(".menu0804 .landPrev .bgColor").css({display:'none'})
      },
      setDivHeight(){
        this.minHigh = window.innerHeight - 243 + 'px'
      }
    },
    // mounted: function() {
    //   this.$watch('this.$store.state.inputObj', function(newVal, oldVal) {

    //   })
    // },
    created() {
      this.InitForm();
      this.$store.state.headerTopTitle = "랜딩페이지";
      this.$store.state.headerMidTitle = "랜딩페이지 제작";
      this.getCampaignAllList();
      this.setDivHeight();
    },
  }
</script>

<style scoped>

  @import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);

  .nanumgothic * {
    font-family: 'Nanum Gothic', sans-serif;
  }

  @font-face {
    font-family: 'TmonMonsori';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/TmonMonsori.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'BMJUA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'BMDOHYEON';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMDOHYEON.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }


  .menu0804 {
    display: flex;
    justify-content: space-between;
  }
  .menu0804 .landPrev {
    width: 811px;
    overflow-y: auto;
  }
  .menu0804 .landPrev::-webkit-scrollbar{
    width: 10px;
  }
  .menu0804 .landPrev::-webkit-scrollbar-track{
    background: #ddd;
  }
  .menu0804 .landPrev::-webkit-scrollbar-thumb{
    background: #fff;
    border: 1px solid #ddd;
  }
  .menu0804 .landPrev img {
    width: 100%;
    display: block;
  }
  .menu0804 .landPrev .noLength {
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
  }
  .menu0804 .landPrev .noLength img {
    width: auto;
  }
  .menu0804 .landPrev .formPrev {
    width: 100%;
    border: 30px solid #3e3e3e;
    padding: 50px;
    position: relative;
    background: #fff;
  }
  .menu0804 .landPrev .formPrev h1 {
    font-size: 38px;
    line-height: 51px;
    text-align: center;
    margin-bottom: 50px;
    letter-spacing: 2px;
  }
  .menu0804 .landPrev .formPrev .flex {
    width: 100%;
    display: flex;
    margin-bottom: 10px;
  }
  .menu0804 .landPrev .formPrev03 .flex {
    background: #fff;
    border: 1px solid #b3b3b3;
    margin-bottom: 20px;
  }
  .menu0804 .landPrev .formPrev .flex div {
    padding: 5px;
  }
  .menu0804 .landPrev .formPrev .flex .left {
    width: 20%;
    font-size: 18px;
    line-height: 44px;
    letter-spacing: -0.7px;
    color: #000;
    font-weight: 700;
  }
  .menu0804 .landPrev .formPrev03 .flex .left {
    width: 21%;
    padding-left: 20px;
    position: relative;
  }
  .menu0804 .landPrev .formPrev03 .after .left::after {
    clear: both;
    position: absolute;
    content: "";
    width: 2px;
    height: 28px;
    right: 0;
    top: 13px;
    background: #000;
  }
  .menu0804 .landPrev .formPrev .flex .right {
    width: 80%;
    vertical-align: middle;
  }
  .menu0804 .landPrev .formPrev03 .flex .right {
    width: 79%;
  }
  .landPrev .formPrev .flex .right.telBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .menu0804 .landPrev .formPrev input[type="text"] {
    width: 100%;
    font-size: 14px;
    padding: 12px 16px;
    border: 1px solid #b3b3b3;
  }
  .menu0804 .landPrev .formPrev  .formInput {
    margin-bottom: 15px;
    padding: 5px 3px;
  }
  .menu0804 .landPrev .formPrev .formInputName {
    font-size: 18px;
    color: #333;
    font-weight: 700;
    height: 100%;
    margin: 10px 0;
    padding-left: 10px;
    position: relative;
  }
  .menu0804 .landPrev .formPrev .formInputName:before {
    clear: both;
    width: 2px;
    height: 70%;
    position: absolute;
    content: "";
    background: #c5c5c5;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .menu0804 .landPrev .formPrev select {
    padding: 12px 16px;
    width: 100%;
    border: 1px solid #b3b3b3;
  }
  .menu0804 .landPrev .formPrev .telBox {
    display: flex;
    justify-content: space-between;
  }
  .menu0804 .landPrev .formPrev .telBox select,
  .menu0804 .landPrev .formPrev .telBox input[type="tel"]{
    width: 30%;
    font-size: 14px;
    padding: 12px 16px;
    border: 1px solid #b3b3b3;
  }
  .menu0804 .landPrev .formPrev .telBox span {
    display: inline-block;
    font-size: 14px;
    padding: 12px 0;
    text-align: center;
  }
  .menu0804 .landPrev .formPrev03 .textArea {
    align-items:flex-start;
  }
  .menu0804 .landPrev .formPrev03 input[type="text"],
  .menu0804 .landPrev .formPrev03 select,
  .menu0804 .landPrev .formPrev03 .telBox input[type="tel"],
  .menu0804 .landPrev .formPrev03 .telBox select,
  .menu0804 .landPrev .formPrev03 textarea {
    border: none;
  }
  .menu0804 .landPrev .formPrev input[type="radio"],
  .menu0804 .landPrev .formPrev	input[type="checkbox"] {
    display: none;
  }
  .menu0804 .landPrev .formPrev label {
    font-size: 16px;
    display: inline-block;
    margin: 0 10px 20px 0;
    position: relative;
    padding: 0 10px 0 35px;
    font-weight: 600;
  }
  .menu0804 .landPrev .formPrev02 .flex label  {
    transform: translateY(11px);
  }
  .menu0804 .landPrev .formPrev03 .flex label {
    /* font-size: 24px; */
    margin: 0 10px 20px 0;
    transform: translateY(11px);
  }
  .menu0804 .landPrev .formPrev input[type="radio"] + label:before,
  .menu0804 .landPrev .formPrev	input[type="checkbox"] + label:before {
    clear: both;
    position: absolute;
    width: 15px;
    height: 15px;
    border: 1px solid #cbcbcb;
    background: #f6f6f6;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    content: "";
    border-radius: 2px;
    box-sizing: border-box;
  }
  .menu0804 .landPrev .formPrev input[type="radio"] + label:before {
    border-radius: 50%;
  }
  .menu0804 .landPrev .formPrev03 input[type="radio"] + label:before,
  .menu0804 .landPrev .formPrev03	input[type="checkbox"] + label:before,
  .menu0804 .landPrev .formPrev04 input[type="radio"] + label:before,
  .menu0804 .landPrev .formPrev04	input[type="checkbox"] + label:before {
    border: 2px solid #787878;
    background: #fff;
  }
  .menu0804 .landPrev .formPrev03 input[type="radio"]:checked + label:before,
  .menu0804 .landPrev .formPrev03	input[type="checkbox"]:checked + label:before,
  .menu0804 .landPrev .formPrev04 input[type="radio"]:checked + label:before,
  .menu0804 .landPrev .formPrev04	input[type="checkbox"]:checked + label:before {
    background: #787878;
  }
  .menu0804 .landPrev .formPrev	input[type="checkbox"]:checked + label:after,
  .menu0804 .landPrev .formPrev input[type="radio"]:checked + label:after {
    clear: both;
    position: absolute;
    display: block;
    content: "\e91c";
    font-family: "icomoon";
    font-weight: 900;
    font-size: 15px;
    left: 5px;
    top: 2px;
    color: #4b4b4b;
  }
  .menu0804 .landPrev .formPrev03	input[type="checkbox"]:checked + label:after,
  .menu0804 .landPrev .formPrev03 input[type="radio"]:checked + label:after {
    font-size: 12px;
    left: 7px;
    top: 5px;
    color: #fff;
  }
  .menu0804 .landPrev .formPrev04	input[type="checkbox"]:checked + label:after,
  .menu0804 .landPrev .formPrev04 input[type="radio"]:checked + label:after  {
    font-size: 12px;
    left: 6.5px;
    top: 5px;
    color: #fff;
  }
  .menu0804 .landPrev .formPrev textarea {
    width: 100%;
    height: 120px;
    border: 1px solid #b3b3b3;
    resize: none;
    padding: 12px 16px;
    font-size: 14px;
  }
  .menu0804 .landPrev .formPrev03 textarea {
    border: none;
  }
  .menu0804 .landPrev .formPrev .agreeBox label {
    margin: 10px 0 0 0;
  }
  .menu0804 .landPrev .formPrev03 .agreeBox label {
    transform: translate(0);
  }
  .menu0804 .landPrev .formPrev03 .agreeBox input[type="checkbox"]:checked + label:after {
    top: 6px;
  }
 .menu0804 .landPrev .formPrev .agreeBox span {
    font-size: 16px;
    cursor: pointer;
    font-weight: 400;
  }
  .menu0804 .landPrev .formPrev	.textBox {
    width: 100%;
    height: 120px;
    resize: none;
    padding: 10px;
    font-size: 16px;
  }
  .menu0804 .landPrev .formPrev .centerBox {
    text-align: center;
  }
  .menu0804 .landPrev .formPrev .centerBox button {
    width: 80%;
    height: 100px;
    background: #aa00e5;
    color: #fff;
    border: none;
    font-size: 30px;
    border-radius: 100px;
    font-weight: bold;
    margin-top: 25px;
    letter-spacing: 2px;
  }
  /* 개인정보 수집 동의 항목 */
  .menu0804 .landPrev .formPrev .priBox {
    position: absolute;
    padding: 20px;
    width: 650px;
    height: 300px;
    background: #fff;
    border-radius: 10px ;
    left: 50%;
    bottom: 10%;
    transform: translateX(-50%);
    display: none;
    z-index: 9;
  }
  .menu0804 .landPrev .formPrev .priBox h6 {
    font-size: 24px;
    margin-bottom: 16px;
    letter-spacing: -0.72px;
    color: #000;
  }
  .menu0804 .landPrev .formPrev .priBox div {
    padding: 5px;
    width: 100%;
    height: 180px;
    overflow-y: scroll;
    border: 1px solid #e5e5e5;
  }
  .menu0804 .landPrev .formPrev .priBox button {
    width: 100px;
    height: 35px;
    background: #000;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    border: none;
    border-radius: 35px;
    display: block;
    cursor: pointer;
    margin: 10px auto;
  }
  .menu0804 .landPrev .bgColor {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: none;
  }
  /* 개인정보 수집 동의 항목 */
  .menu0804 .landPrev iframe {
    width: 800px;
    height: 450px;
  }
  .menu0804 .landChoice {
    width: 550px;
    padding: 0 8px 0 10px;
    overflow-y: auto;
  }
  .menu0804 .landChoice::-webkit-scrollbar{
    width: 10px;
  }
  .menu0804 .landChoice::-webkit-scrollbar-track{
    background: #ddd;
  }
  .menu0804 .landChoice::-webkit-scrollbar-thumb{
    background: #fff;
    border: 1px solid #ddd;
  }
  .menu0804 .landChoice .landTab{
    margin-bottom: 8px;
    padding: 15px 19px;
    cursor: pointer;
    background: #e25b45;
    border: 1px solid #d33c24;
    border-radius: 10px;
    font-size: 14px;
    color: #fff;
    font-weight: 700;
  }
  .menu0804 .landChoice .landTab i{
    display: inline-block;
    font-size: 16px;
    color: #fff;
    transform: translateY(2px);
    margin-top: -2px;
  }
  .menu0804 .landChoice .landTab .icon-plus1{
    float: right;
  }
  .menu0804 .landChoice .landTab img{
    width: 100%;
    display: block;
  }
  .menu0804 .landChoice .landBox {
    width: 100%;
    border: 1px solid #e5e5e5;
    background: #fff;
    border-radius: 10px;
    margin-bottom: 8px;
  }
  .menu0804 .landChoice .landBox {
    width: 100%;
    border: 1px solid #e5e5e5;
    background: #fff;
    border-radius: 10px;
    margin-bottom: 8px;
  }
  .menu0804 .landChoice .basicInfo h2,
  .menu0804 .landChoice .landScr p {
    font-size: 14px; 
    font-weight: bold;
    color: #222;
  }
  .menu0804 .landChoice .basicInfo h2 {
    padding: 14px 20px;
    border-bottom: 1px solid #e5e5e5;
  }
  .menu0804 .landChoice .basicInfo table {
    padding: 5px 20px 10px;
    width: 100%;
  }
  .menu0804 .landChoice .basicInfo table td {
    text-align: left;
  }
  .menu0804 .landChoice .basicInfo table th {
    height: 36px;
    width: 100px;
    letter-spacing: -0.36px;
    padding: 10.5px 0;
    vertical-align: top;
    color: #222;
    text-align: left;
  }
  .menu0804 .landChoice .basicInfo table td input,
  .menu0804 .landChoice .basicInfo table td select,
  .menu0804 .landChoice .basicInfo table td textarea {
    border: 1px solid #e5e5e5;
    padding: 7px 10px;
    margin: 2px 0;
    width: 100%;
    height: 32px;
  }
  .menu0804 .landChoice .basicInfo table td textarea {
    height: 200px;
    resize: none;
  }
  .menu0804 .landChoice .basicInfo table td input[type="checkbox"] {
    display: none;
  }
  .menu0804 .landChoice .basicInfo table td input[type="checkbox"] + label {
    display: inline-block;
    width: 45px;
    height: 20px;
    border-radius: 25px;
    background: #ebebeb;
    margin-top: 5px;
    transition: 0.3s;
    position: relative;
  }
  .menu0804 .landChoice .basicInfo table td input[type="checkbox"] + label::after {
    clear: both;
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background: #fff;
    left: 2px;
    top: 2px;
    content: "";
    transition: 0.3s;
  }
  .menu0804 .landChoice .basicInfo table td input[type="checkbox"] + label::before {
    clear: both;
    position: absolute;
    color: #a5a5a5;
    left: 21px;
    top: 5px;
    content: "OFF";
    font-size: 10px;
    font-weight: 700;
  }
  .menu0804 .landChoice .basicInfo table td input[type="checkbox"]:checked + label {
      background: #e25b45;
  }
  .menu0804 .landChoice .basicInfo table td input[type="checkbox"]:checked + label::before {
    left: 6px;
    content: "ON";
    color: #fff;
  }
  .menu0804 .landChoice .basicInfo table td input[type="checkbox"]:checked + label::after {
    left: 28px;
  }
  .menu0804 .landChoice .landScr {
    padding: 21px 18px;
  }
  .menu0804 .landChoice .landScr p span {
    color: #e25b45;
  }
  .menu0804 .landChoice .landScr p .icon-arrow {
    float: right;
    font-size: 9px;
    transition: 0.3s;
    transform: translateY(3px);
  }
  .menu0804 .landChoice .landScr p .icon-arrow.on {
    transform: rotate(180deg);
  }
  .menu0804 .landChoice .landScr input[type="checkbox"] {
    display: none;
  }
  .menu0804 .landChoice .landScr input[type="checkbox"] + label {
    display: inline-block;
    width: 60px;
    height: 25px;
    border-radius: 25px;
    background: #ebebeb;
    margin: -15px 0 0 10px;
    transform: translateY(8px);
    transition: 0.3s;
    position: relative;
  }
  .menu0804 .landChoice .landScr input[type="checkbox"] + label:before {
    clear: both;
    position: absolute;
    color: #a5a5a5;
    left: 30px;
    top: 5.5px;
    content: "OFF";
    font-weight: 700;
  }
  .menu0804 .landChoice .landScr input[type="checkbox"] + label:after {
    clear: both;
    position: absolute;
    width: 21px;
    height: 21px;
    border-radius: 100%;
    background: #fff;
    left: 2px;
    top: 2px;
    content: "";
    transition: 0.3s;
  }
  .menu0804 .landChoice .landScr input[type="checkbox"]:checked + label {
    background: #e25b45;
  }
  .menu0804 .landChoice .landScr input[type="checkbox"]:checked + label:before {
    left: 9px;
    content: "ON";
    color: #fff;
  }
  .menu0804 .landChoice .landScr input[type="checkbox"]:checked + label:after {
    left: 37px;
    top: 2px;
  }
  .menu0804 .landChoice .landScr .landScrChecked { 
    width: 487px;
    display: none;
  }
  .menu0804 .landChoice .landScr03 .pixelBox {
    display: flex;
    height: 31px;
    margin-top: 10px;
    border: 1px solid #e5e5e5;
  }
  .menu0804 .landChoice .landScr03 .pixelBox:first-child {
    margin-top: 20px;
  }
  .menu0804 .landChoice .landScr03 .pixelBox .left {
    display: flex;
    width: 36%;
    align-items: center;
    letter-spacing: -0.3px;
    font-weight: 700;
    padding: 0 12px;
    position: relative;
  }
  .menu0804 .landChoice .landScr03 .pixelBox .left::after {
    position: absolute;
    content: "";
    width: 1px;
    height: 14px;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background: #adadad;
  }
  .menu0804 .landChoice .landScr03 .pixelBox .left img {
    margin-right: 16px;
  }
  .menu0804 .landChoice .landScr03 .pixelBox .right {
    width: 64%;
    padding: 0 12px 0 6px;
  }
  .menu0804 .landChoice .landScr03 .pixelBox .right input[type="text"]{
    width: 100%;
    height: 100%;
    border: none;
    padding: 6px;
  }
  .menu0804 .landChoice .landScr03 .pixelBox .right input[type="text"]::placeholder {
    font-weight: 700;
    color: #b9b9b9;
    letter-spacing: -0.3px;
  }
  .menu0804 .landChoice .landScr .landScrChecked textarea {
    width: 487px;
    height: 100px;
    resize: none;
    padding: 10px;
    font-size: 12px;
    margin-top: 20px;
    border: 1px solid #bebebe;
  }
  .menu0804 .landChoice .btnBox .left {
    float: left;
    width: 330px;
  }
  .menu0804 .landChoice .btnBox .right {
    float: right;
  }
  .menu0804 .landChoice .btnBox button {
    min-width: 100px;
    height: 40px;
    font-size: 14px;
    border-radius: 40px;
    border: none;
    font-weight: 700;
  }
  .menu0804 .landChoice .btnBox .firstBtn {
    border: 1px solid #e25b45;
    color: #e25b45;
    background: #fff;
    margin: 0 10px 10px 0;
  }
  .menu0804 .landChoice .btnBox .iniBtn {
    background: #262626;
    color: #fff;
  }
  .menu0804 .landChoice .btnBox .saveBtn {
    float: right;
    width: 183px;
    height: 100px;
    font-size: 16px;
    border-radius: 20px;
    border: none;
    color: #fff;
    font-weight: 700;
    background: #e25b45;
  }
  /* 랜딩페이지 저장 버튼 */

  /*************************************************/
  /*            모바일 참조 용으로 만든 것           */
  /*************************************************/
  @media (max-width: 960px) {
    .menu0804 .landPrev .formPrev input[type="text"] {
      font-size: 28px;
    }
    .menu0804 .landPrev .formPrev	.checkLine label {
      font-size: 32px;
      margin: 15px 27px 25px 0px ;
      padding: 0;
      width: 104px;
    }
    .menu0804 .landPrev .formPrev	input[type="checkbox"] + label {
      font-size: 24px;
      display: inline-block;
      padding-left: 45px;
    }
    .menu0804 .landPrev .formPrev	input[type="checkbox"] + label a {
      font-size: 24px;
    }
    
    .menu0804 .landPrev .formPrev	.checkLine input[type="radio"] + label:before,
    .menu0804 .landPrev .formPrev	input[type="checkbox"] + label:before {
      width: 20px;
      height: 20px;
    }
    .menu0804 .landPrev .formPrev	.checkLine input[type="radio"]:checked + label:after {
      font-size: 20px;
      top: 7px;
    }
    .menu0804 .landPrev .formPrev	input[type="checkbox"]:checked + label:after {
      font-size: 20px;
      top: 3px;
    }
    .menu0804 .landPrev .formPrev	.textBox {
      font-size: 32px;
    }
    .menu0804 .landPrev .formPrev .centerBox button {
      width: 100%;
      font-size: 40px;
    }
  }
</style>