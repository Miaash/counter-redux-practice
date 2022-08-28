# simple redux practice

Redux를 사용하기 위해서는 redux와 react-redux를 설치해야합니다.

- DEPENDENCIES
  redux, react-redux가 설치되어 있는 것을 확인하실 수 있습니다.

- index.js
  안내한 순서에 따라 index.js를 완성해주세요!

1. import { Provider } from 'react-redux';
   react-redux에서 Provider를 불러와야 합니다.
   - Provider는 store를 손쉽게 사용할 수 있게 하는 컴포넌트입니다.
     해당 컴포넌트를 불러온다음에, Store를 사용할 컴포넌트를 감싸준 후
     Provider 컴포넌트의 props로 store를 설정해주면 됩니다.
2. import { legacy_createStore as createStore } from 'redux';
   redux에서 createStore를 불러와야 합니다.
3. 전역 상태 저장소 store를 사용하기 위해서는 App 컴포넌트를
   Provider로 감싸준 후 props로 변수 store를 전달해주여야 합니다.
   주석을 해제해주세요.
4. 변수 store에 createStore 메서드를 통해 store를 만들어 줍니다.
   그리고, createStore에 인자로 Reducer 함수를 전달해주어야 합니다.
   (지금 단계에서는 임시의 함수 reducer를 전달해주겠습니다.)
5. 여기까지가 전역 변수 저장소를 설정하는 방법이였습니다.
   브라우저 창에 오류메세지가 나타나지 않는다면 잘 적용된겁니다.👏
   
   
 -------------------------------------------------------
   
   이번에는 Reducer 함수를 완성해봅시다!

Reducer함수 첫번째 인자에는 기존 state가 들어오게 됩니다.
첫번째 인자에는 default value를 꼭 설정해주셔야 합니다!
그렇지 않을 경우 undefined가 할당되기 때문에 그로 인한 오류가 발생할 수 있습니다.
(https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#creating-the-root-reducer)
두번째 인자에는 action 객체가 들어오게 됩니다.

action 객체에서 정의한 type에 따라 새로운 state를 리턴합니다.
새로운 state는 전역 변수 저장소 Store에 저장되게 됩니다.

- index.js
  안내한 순서에 따라 index.js를 완성해주세요!

1. 유어클래스에 있는 Reducer 예제를 복사해 임의 함수 reducer를
   대체해주세요.
2. 가져온 conterReducer를 createStore에 다시 넣어주세요.
3. 주석을 해제해주세요.
4. 예제를 잘 불러오셨다면 정상적으로 화면이 나오는 것을 확인할 수 있습니다!

-------------------------------------------------------
 
 이번에는 Action 객체를 완성해봅시다!

Action은 어떻게 state를 변경할지 정의해놓은 객체입니다.
Action 객체는 Dispatch 함수를 통해 Reducer 함수 두번째 인자로 전달됩니다.

Action 객체 안의 type은 필수로 지정을 해주어야 합니다.
여기서 지정한 type에 따라 Reducer 함수에서 새로운 state를 리턴하게 됩니다.

- index.js
  안내한 순서에 따라 index.js를 완성해주세요!

1. 유어클래스에 있는 Action 예제 중 Action Creator 함수 increase를
   복사해오세요.
2. Action Creator 함수 decrease를 만들어 주세요. type은 'DECREASE'로
   설정해주세요.
3. 앞서 만든 Action Creator 함수를 다른 파일에도 사용하기 위해 export를
   붙혀주세요.
   
-------------------------------------------------------
    
    이번에는 Dispatch 함수를 완성해봅시다!

dispatch 함수는 이벤트 핸들러 안에서 사용됩니다.
그리고 dispatch 함수는 action 객체를 Reducer 함수로 전달해줍니다.

- App.js
  안내한 순서에 따라 App.js를 완성해주세요!

1. import { useDispatch } from 'react-redux';를 통해
   react-redux에서 useDispatch를 불러와주세요.
2. import { increase,decrease } from './index.js';를 통해
   Action Creater 함수 increase, decrease를 불러와주세요.
3. useDispatch의 실행 값를 변수에 저장해서 dispatch 함수를
   사용합니다.(주석을 해제한 후 콘솔결과를 확인해보세요!)
4. 유어클래스 dispatch 예제를 참고해서 이벤트 핸들러 안에서 dispatch를
   통해 action 객체를 Reducer 함수로 전달해주세요.
5. 유어클래스 dispatch 예제를 참고해서 이벤트 핸들러 안에서 dispatch를
   통해 action 객체를 Reducer 함수로 전달해주세요.
   
   useDispatch() 는 Action 객체를 Reducer로 전달해 주는 Dispatch 함수를 반환하는 메서드입니다. 
위에서 Dispatch를 설명할 때 사용한 dispatch 함수도 useDispatch()를 사용해서 만든 것입니다.

  -------------------------------------------------------
  
  이번에는 useSeletor를 완성해봅시다!

useSeletor를 통해 state가 필요한 컴포넌트에서
전역 변수 저장소 store에 저장된 state를 쉽게 불러올 수 있습니다.

- App.js
  안내한 순서에 따라 App.js를 완성해주세요!

1. import { useDispatch, useSeletor } from 'react-redux';를 통해
   react-redux에서 useSeletor 불러와주세요.
2. useSelector의 콜백 함수의 인자에 Store에 저장된 모든 state가
   담깁니다. 그대로 return을 하게 되면 Store에 저장된 모든 state를
   사용할 수 있습니다.
3. 변수 state를 콘솔에서 확인해보세요. Store에 저장된 기존 state 값인
   1이 찍히는 것을 확인할 수 있습니다.
4. Store에서 꺼내온 state를 화면에 나타내기 위해 변수 state를 활용해보세요.
5. +, - 버튼을 누를 때마다 state가 변경되는 것을 확인할 수 있습니다!

useSelector()는 컴포넌트와 state를 연결하여 Redux의 state에 접근할 수 있게 해주는 메서드입니다.

--------------------------------------------------------------------------







