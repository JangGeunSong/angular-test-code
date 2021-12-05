# angular-test-code
This angular 1 test code initial setup code munch

## 초기 설정 방법
- npm install
을 활용하여 초기 설정을 진행합니다.

이후 offline이 아닌 환경에서는 바로 테스트를 해당 프로젝트를 활용해 진행하면 됩니다.

## offline 환경에서 처리하는 방법
<a href="https://musma.github.io/2019/08/23/nodejs-offline-deployment.html">https://musma.github.io/2019/08/23/nodejs-offline-deployment.html</a> 경로에 더 상세한 내용이 있습니다.

해당 프로젝트를 받아 yarn 을 설치하고 해당 yarn을 활용하여 offline 설치 처리를 진행하면 된다.

- yarn <br/>
- .yarnrc <br/>
clone한 git 프로젝트 내부에 생성후 아래 2줄을 삽입 <br/>

- yarn-offline-mirror "./npm_packages"
- yarn-offline-mirror-pruning true

이후 node_modules과 yarn.lock 파일을 삭제한다.

- yarn cache clean

- yarn install

위 명령어를 통해 npm_packages를 만들어 두면 오프라인 환경에서 
- yarn install --offline

사용하여 설치 진행하면 정상적으로 내용 처리가 된다.
